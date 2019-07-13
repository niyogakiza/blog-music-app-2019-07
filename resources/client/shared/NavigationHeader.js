import React from 'react'

const NavigationHeader = () => (
  <div className='navbar-header'>
    <button
      type='button'
      className='navbar-toggle collapsed'
      data-toggle='collapse'
      data-target='#bs-example-navbar-collapse-1'
      aria-expanded='false'
    >
      <span className='menu-sign'>
        Menu <img src='/public/media/singer/menu.png' alt='' />
      </span>
    </button>
    <a className='navbar-brand logo' href='#'>
      <img src='/public/media/singer/logo.png' alt='' className='logo' />
    </a>
  </div>
)
export default NavigationHeader
