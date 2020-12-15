const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ reporter, graphql, actions }) => {

  const { createPage } = actions
  const postTemplate = path.resolve(`src/templates/post.jsx`)
  
  const result = await graphql(`
    query {
      allDatoCmsPost {
	nodes {
	  slug
	}
      }
    }`)

  if(result.errors) reporter.panic('houston, error on rendering posts',result.errors)

  const posts = result.data.allDatoCmsPost.nodes

  posts.forEach(post => {
    createPage({
      path: `${post.slug}`,
      component: postTemplate,
      context: {
        slug: post.slug,
      },
    })
  })
}
