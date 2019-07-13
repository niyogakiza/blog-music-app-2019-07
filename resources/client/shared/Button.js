import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, className, variant, ...props }) => {
  return (
    <button {...props} className={`btn btn-${variant} ${className}`.trim()}>
      {children}
    </button>
  )
}

Button.DEFAULT = 'default'
Button.PRIMARY = 'primary'
Button.SUCCESS = 'success'
Button.DANGER = 'danger'

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.string,
}
