import {useStaticQuery, graphql} from 'gatsby'

const useSeo = () => {

  const query = useStaticQuery(graphql`
    query {
      datoCmsSite {
	globalSeo {
	  siteName
	  titleSuffix
	  fallbackSeo {
	    title
	    description
	  }
	}
      }
    }
  `)

  return query.datoCmsSite.globalSeo	
}

export default useSeo
