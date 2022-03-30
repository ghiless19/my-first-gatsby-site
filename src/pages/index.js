import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
const HomePage = () => {
  return(
    <Layout pageTitle='Home' pageHeading='Home site'>
    Welcome to my cool page
    <StaticImage src="https://www.galbani.fr/wp-content/uploads/2020/05/AdobeStock_220126244.jpeg" 
    alt="A salade" >

    </StaticImage>
    <StaticImage src="../images/menu_salade.jpeg" 
    alt="A salade" >

    </StaticImage>
    </Layout> 
  )
}

  export default HomePage