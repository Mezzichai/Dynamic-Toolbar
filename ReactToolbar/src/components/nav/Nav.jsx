import React, { useRef, useState } from 'react'
import NavStyles from "./NavStyles.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPlug, faPlus, faX} from '@fortawesome/free-solid-svg-icons'


const Nav = () => {


const calcArr = [
    {name: "calc1"},
    {name: "calc2"},
    {name: "calc3"},
    {name: "calc4"},
]

const [tools, setTools] = useState([])
const [addCalcBtn, setAddCalcBtn] = useState(false)
const [calcName, setCalcName] = useState('')


const handleAddCalc = () => {
  addCalcBtn ? setAddCalcBtn(false) : setAddCalcBtn(true)

}

const handleSubmit = (e) => {
  e.preventDefault()
  if (calcName !== "") {
    setTools([...tools, calcName])
    setCalcName("")
    handleAddCalc
  } {

  }
  



}

  return (
    <nav className={NavStyles.nav}>
        <div className={NavStyles.header}>
            My Tools
            <div className={NavStyles.edit}></div>
        </div>
        <ul className={NavStyles.list}>
           {tools.map((tool) => {
            return <li className={NavStyles.element} key={Date.now()}>{tool}</li>
           })}
           {!addCalcBtn ? (
            <button onClick={handleAddCalc} className={NavStyles.addCalc}>Add a new tool<FontAwesomeIcon className={NavStyles.plusIcon} icon={faPlus}/></button>
           ) : (
            <form className={NavStyles.nameCalcForm} onSubmit={handleSubmit}>
              <input autoFocus value={calcName} className={NavStyles.nameCalc} onChange={(e)=>{setCalcName(e.target.value)}} type="text" />
              <button onClick={handleAddCalc} className={NavStyles.btn}><FontAwesomeIcon className={NavStyles.x} icon={faX}/></button>
              <button type="submit" className={NavStyles.btn}><FontAwesomeIcon className={NavStyles.check} icon={faCheck}/></button>
            </form>
           )}
        </ul>
    </nav>
  )
}

export default Nav
