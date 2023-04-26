import React, {useState,useRef,useEffect} from 'react'
import PCTStyles from './PCTStyles.module.css'

const PrintCost = () => {

  const errMsgRef = useRef(null)



  const [showErrMsg, setShowErrMsg] = useState(false)
  const [errMsg, setErrMsg] = useState("Sample text")

  //input states
  const [qty, setQty] = useState(0);
  const [dataInput, setDataCost] = useState(0);
  const [postageInput, setPostageInput] = useState(0);
  const [printInput, setPrintCost] = useState('Select the print cost');
  const [printNumericVal, setPrintNumericVal] = useState(0);


  //output states
  const [costpps, setCostpps] = useState(0);
  const [postagecs, setPostagecs] = useState(0);
  const [totalMailingCost, setTotalMailingCost] = useState(0);
  const [costpp, setCostpp] = useState(0);

  const handleDropdown = (e) => {
    setPrintNumericVal(parseFloat(e.target.options[e.target.selectedIndex].getAttribute('data-value')))
    setPrintCost(e.target.value)
  }

 const handleClear = () => {
  setQty(0);
  setDataCost(0);
  setPrintCost('Select the print cost');
  setPostageInput(0);
  setCostpps(0);
  setPostagecs(0);
  setTotalMailingCost(0);
  setCostpp(0);
  setShowErrMsg(false);
}

const handleInput = () => {
  if(setShowErrMsg) {
    handleClear()
  }
}

  const handleSubmit = (e) => {

    e.preventDefault();
    try {
    if (printNumericVal === 0
       || dataInput === 0
       || postageInput === 0
       || qty === 0) {
      throw new Error("Select a print option")
    }

    const costPerPieceSubtotal = parseFloat((dataInput + printNumericVal + postageInput) * qty).toFixed(2);
    const postageOutput = parseFloat(postageInput * qty).toFixed(2);
    const totalMailing = parseFloat(costPerPieceSubtotal + postageOutput).toFixed(2);
    const costPerPiece = parseFloat(totalMailing / qty).toFixed(3);
   

    setCostpps(parseFloat(costPerPieceSubtotal));
    setPostagecs(parseFloat(postageOutput));
    setTotalMailingCost(parseFloat(totalMailing));
    setCostpp(parseFloat(costPerPiece));
  } catch (err) {
    console.log(err)
    setShowErrMsg(true)
    setErrMsg(err)
  }
  }

  
  return (
    <div className={PCTStyles.calcContainer}>
      <div className={PCTStyles.container}>
        <p className={PCTStyles.calcTitle}>Print Cost Calculator</p>
        <div className={showErrMsg ? PCTStyles.errMsg : PCTStyles.hide} ref={errMsgRef}>{errMsg.toString()}</div>      </div>
      
      <form className={PCTStyles.inputFields} onSubmit={(e) => handleSubmit(e)} id="input-form">
        <label className={PCTStyles.label} id='qty-input'>
        Enter the quantity
            <input className={PCTStyles.input} 
            onChange={(e)=>setQty(parseFloat(e.target.value))}
            onInput={handleClear}
            value={qty}
            type='number' 
            step="0.01"
            placeholder="Enter the quantity"/>
        </label>
        <label className={PCTStyles.label} id='data-input'>
          Enter the data cost
          <input className={PCTStyles.input} 
            value={dataInput}
            onChange={(e)=>setDataCost(parseFloat(e.target.value))}
            onInput={handleClear}
            type='number' 
          step="0.01"
          placeholder="Enter the data cost"/>
        </label>

        <label className={PCTStyles.label} id="print-input">
        Select a print option
          <select className={PCTStyles.dropdown} value={printInput} onInput={handleClear} onChange={(e) => handleDropdown(e)}>  
            <option value="Select the print cost" className={PCTStyles.downdownOption} data-value={0}>Select the print cost</option> 
            <option value="PC" className={PCTStyles.downdownOption} data-value={0.03}>PC</option> 
            <option value="LETTER" className={PCTStyles.downdownOption} data-value={0.065}>LETTER</option>  
            <option value="SNAP" className={PCTStyles.downdownOption} data-value={0.055}>SNAP</option>  
          </select>  
        </label> 

        <label className={PCTStyles.label} id='postage-input'>
        Enter the postage cost
            <input className={PCTStyles.input}
            onChange={(e)=>setPostageInput(parseFloat(e.target.value))}
            onInput={handleInput}
            value={postageInput}
            type='number' 
            step="0.01"
            placeholder="Enter the postage cost"/>
        </label>
      </form>
      <div className={PCTStyles.btnContainer}>
        <button className={PCTStyles.btn} id="clear" onClick={handleClear}>Clear All</button>
        <button type="submit" className={PCTStyles.btn} form="input-form">Submit</button>
      </div>
      <table>
        <tbody className={PCTStyles.outputTable}>
          <tr>
            <th>Operation</th>
            <th>Cost</th>
          </tr>
          <tr>
            <th>Cost-per-piece subtotal</th>
            <th>{costpps}</th>
          </tr>
          <tr>
            <th>Postage cost subtotal</th>
            <th>{postagecs}</th>
          </tr>
          <tr>
            <th>Total mailing cost</th>
            <th>{totalMailingCost}</th>
          </tr>
          <tr>
            <th>Cost-per-piece</th>
            <th>{costpp}</th>
          </tr>
        </tbody>
      </table>
      <div>

      </div>

    </div>
  
  )
}

export default PrintCost