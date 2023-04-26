import React, { useState } from 'react'
import NavStyles from "./NavStyles.module.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import { fa } from '@fortawesome/fontawesome-svg-core/import.macro'


const Nav = () => {


const calcArr = [
    {name: "calc1"},
    {name: "calc2"},
    {name: "calc3"},
    {name: "calc4"},
]

const [tools, setTools] = useState(null)

  return (
    <nav className={NavStyles.nav}>
        <div className={NavStyles.header}>
            My Tools
            <div className={NavStyles.edit}></div>
        </div>
        <ul className={NavStyles.list}>
           {calcArr.map((calc) => {
            return <li className={NavStyles.element} key={calc.name}>{calc.name}</li>
           })}
        </ul>
    </nav>
  )
}

export default Nav