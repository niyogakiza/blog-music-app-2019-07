import React from 'react'
import NavigationHeader from "./NavigationHeader";
import NavigationLinks from "./NavigationLinks";
import flatten from "lodash/flatten";
import {navbar} from "../../consts/navibar";

const Navigation = () => {
  return (
      <header id='header'>
        <nav className='navbar navbar-default navbar-fixed-top nav-center'>
          <div className='container'>
            <NavigationHeader />
            <NavigationLinks navbar={flatten(navbar)} />
          </div>
        </nav>
      </header>
  )
}

export default Navigation
