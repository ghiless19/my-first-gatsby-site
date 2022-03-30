import * as React from "react"
import { Link } from 'gatsby'
import {container, heading, navLink, navItemLink, navLinkText} from './layout.module.css'

console.log('Container', container)
const Layout = ({pageTitle, pageHeading, children}) =>{
    return(
        <main className={container}>
            <title>{pageTitle}</title>
            <nav>
                <ul  className={navLink}>
                    <li className={navItemLink}><Link to="/" className={navLinkText} > Home page </Link></li>
                    <li className={navItemLink}><Link to="/about" className={navLinkText} > About page </Link></li>
                    <li className={navItemLink}><Link to="/contact" className={navLinkText}  > Contact page </Link></li>
               </ul>
            </nav>

            <h1 className={heading}>{pageHeading}</h1>
            {children}
        </main>
    )
}
  export default Layout