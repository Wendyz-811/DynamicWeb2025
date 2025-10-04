import React from 'react'
import {NavLink} from 'react-router-dom'
import Panel from './Panel'

const Navbar = () => {
  const baseClass = 'text-blue-500'
  const activeClass = 'text-blue-500 border-l-4 border-blue-500 font-bold pl-4'
  
  return (
    <Panel className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      <NavLink
        to="/"
        className={({isActive}) => isActive ? activeClass : baseClass}
      >
        Button
      </NavLink>

      <NavLink
        to="/accordion"
        className={({isActive}) => isActive ? activeClass : baseClass}
      >
        Accordion
      </NavLink>

      <NavLink
        to="/dropdown"
        className={({isActive}) => isActive ? activeClass : baseClass}
      >
        Dropdown
      </NavLink>

      <NavLink
        to="/card"
        className={({isActive}) => isActive ? activeClass : baseClass}
      >
        Card
      </NavLink>
    </Panel>
  )
}

export default Navbar