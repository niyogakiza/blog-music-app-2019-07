import React from 'react'
import PropTypes from 'prop-types'

const Section = ({ children, ...props }) => <section {...props}>{children}</section>

Section.propTypes = {
  children: PropTypes.node,
}

export default Section
