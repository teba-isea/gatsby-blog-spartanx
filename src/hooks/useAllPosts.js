import {graphql, useStaticQuery} from 'gatsby'

const usePosts = () => {
  const query = useStaticQuery(graphql`
    query {
      allDatoCmsPost {
	nodes {
	  title
	  content
	  header {
	    fluid {
	      ...GatsbyDatoCmsFluid
	    }
	  }
	  id
	  slug
	  meta {
	    createdAt
	  }
	}
      }
    }`)
  return query.allDatoCmsPost.nodes.map( post => ({
    title: post.title,
    content: post.content,
    header: post.header,
    id: post.id,
    slug: post.slug
  }) )
}

export default usePosts
