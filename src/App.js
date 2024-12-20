import Balance from "./bank_components/Balance";
import Broke from "./bank_components/Broke";
import Deposit from "./bank_components/Deposit";
import Rich from "./bank_components/Rich";
import Withdraw from "./bank_components/Withdraw";
import { use, useState } from "react";


function App(){
    // const balance = 2500; Since balance changes use hook usestate to manage it 
        //useState(): import
    const [balance, setBalance] = useState(0);
    // setBalance(1000) this is a crime you cant do this 
    function handleWithdraw(amount){
        if(balance >= amount)
            {
            setBalance( balance - amount)
        }
        else{
            alert("Your balance is too low")
        }
    }

    function handleDeposit(amount){
        setBalance(balance + amount)
    }
    return(
        
        <div className="container">
            {/* <button className="btn btn-success" onClick={function(){
                setBalance(balance + 1000)
            }}>Deposit</button>
            <button className="btn btn-warning" onClick={handleWithdraw}>Withdraw</button> */}
            <h1>Bank App</h1>

            {/* Displaying components based on conditions */}
            {
                balance > 1000 ? <Rich /> : <Broke />
            }
            <Balance bal={balance}/>
            <Withdraw bal={balance} abc={handleWithdraw} />
            <Deposit bal={balance} xyz={handleDeposit}/>
        </div>
    )
}

export default App;