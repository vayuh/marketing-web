import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <div className="header">
      <nav className="flex flex-wrap justify-between p-3 navbar">
        <div className="flex items-center flex-shrink-0 mr-6 text-white">
          <span className="text-xl font-semibold tracking-tight">
            <div style={{ maxWidth: `200px`, marginLeft: '0.5rem' }}>
              <StaticImage
                src="../images/Vayuh-Logo_White.png"
                alt="gatsby astronaut"
              />
            </div>
          </span>
        </div>
        
        <div
          className={`${isExpanded ? `block` : `hidden`
            } header-menu w-full block lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-sm lg:flex-grow">
            <Link
              to={`https://www.vayuh.ai/`}
              href="https://www.vayuh.ai/"
              className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
            >
              Home
            </Link>
            <Link
              to={`/#signup`}
              href="#signup"
              className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
            >
              Signup
            </Link>
            <Link
              to={`/#book-a-call`}
              href="#book-a-call"
              className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </nav>
      <div className="nav-line-1"></div>
      <div className="nav-line-2"></div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
