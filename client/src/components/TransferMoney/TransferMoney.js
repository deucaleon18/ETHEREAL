import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import useBasicDetails from "../../hooks/useBasicDetails";

import "./TransferMoney.css";

const TransferMoney = () => {
 
  
  const[transferAmount,setTransferAmount]=useState("")
  const[transferSerial,setTransferSerial]=useState("")
  
  
  const { id }=useParams()
  const [web3,account,contract,contractAddress]=useBasicDetails()


  useEffect(() => {
    const getContractDetails = async () => {};
    if (
      typeof contract !== "undefined" &&
      typeof account !== "undefined" &&
      typeof web3 !== "undefined"
    ) {
      getContractDetails();
    }
  }, [web3, account, contract]);
  




  const handleTransaction=async(e)=>{
   e.preventDefault()
   await contract.methods.transactAmount(web3.utils.toWei(transferAmount,'ether'),transferSerial,id).send(
     {from:account,to:contract.options.address})
   
   .then((res)=>{
     console.log(res)
    //  window.location.href=`/accounts/${id}`
   })
   .catch((err)=>{
     console.log(err)
   })
  }


  if (!web3) {
    return <div>Loading Web3, accounts, and contract...</div>;
  }
  return (
    <div className="transaction-section">
      <div className="transfer-section-wrapper">
        <h1>Welcome to the transfers section</h1>
        <h2>
          Now easily transfer virtual currency from one account to the other{" "}
        </h2>
        <form onSubmit={handleTransaction} className="transaction-form">
          <input
            type="text"
            placeholder="Enter the amount you want to transfer "
            value={transferAmount}
            className="transaction-input"
            onChange={(e) => {
              setTransferAmount(e.target.value);
            }}
          ></input>
          <input
            type="text"
            placeholder="Enter the serial number of the account you want to transfer this amount"
            value={transferSerial}
            className="transaction-input"
            onChange={(e) => {
              setTransferSerial(e.target.value);
            }}
          />
          <button className="transfer-button" type="submit">
            INITITATE TRANSFER
          </button>
        </form>
      </div>

      <div className="transfer-section-image">
        <img src="/assets/4.svg" alt=""/>
      </div>
    </div>
  );
};

export default TransferMoney;
