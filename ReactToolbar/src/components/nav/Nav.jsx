import React, { useState } from 'react'
import NavStyles from "./NavStyles.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlug, faPlus, faX} from '@fortawesome/free-solid-svg-icons'


const Nav = () => {


const calcArr = [
    {name: "calc1"},
    {name: "calc2"},
    {name: "calc3"},
    {name: "calc4"},
]

const [tools, setTools] = useState(null)
const [addCalcBtn, setAddCalcBtn] = useState(false)
const [calcName, setCalcName] = useState('')

const handleAddCalc = () => {
  addCalcBtn ? setAddCalcBtn(false) : setAddCalcBtn(true)
}

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
           {!addCalcBtn ? (
            <button onClick={handleAddCalc} className={NavStyles.AddCalc}><FontAwesomeIcon icon={faPlus}/></button>
           ) : (
            <form className={NavStyles.nameCalcForm}>
              <input className={NavStyles.nameCalc} onChange={(e)=>{setCalcName(e.target.value)}} type="text" value={calcName}/>
              <button className={NavStyles.exitNewCalc}><FontAwesomeIcon icon={faX}/></button>
            </form>
           )}
        </ul>
    </nav>
  )
}

export default Nav
Footer