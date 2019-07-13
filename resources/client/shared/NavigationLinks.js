import React from 'react'
import PropTypes from 'prop-types'

const NavigationLinks = ({ navbar }) => (
    <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
        <ul className='nav navbar-nav'>
            {navbar[0].nav.map((nav, ix) => (
                <li>
                    <a className='page-scroll' href={nav.link}  key={ix}>
                        {nav.linkTitle}
                    </a>
                </li>
            ))}
        </ul>
        <ul className='nav navbar-nav navbar-right nav-menu'>
            {navbar[0].navRight.map((na, ix) => (
                <li>
                    <a className='page-scroll' href={na.link} key={ix}>
                        {na.linkTitle}
                    </a>
                </li>
            ))}
        </ul>
    </div>
)

NavigationLinks.propTypes = {
  link: PropTypes.string,
  linkTitle: PropTypes.string,
}

export default NavigationLinks
