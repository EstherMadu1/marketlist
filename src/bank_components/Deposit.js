import { useState } from "react"
const Deposit = ({bal, xyz}) => {
  const[amount, setAmount]  = useState("")

  function handleChange(e){
    setAmount(e.target.value)
  }
    return (
      
      <div className='row'>

       
          <div className="col">
          <input type="number" value={amount} placeholder="deposit amount" onChange={handleChange}/>
              <button className="btn btn-primary" onClick={function(){
                xyz(Number(amount))
              }}>Deposit</button>
              <p>Your current balance is: <strong>{bal}</strong></p>
          </div>
      </div>
    )
  }
  
  export default Deposit