import React, { useState, useEffect } from "react";

import "./DisplayAccounts.css";
import useBasicDetails from "../../hooks/useBasicDetails";


const DisplayAccounts = () => {
 
  const [loading,setLoading]=useState(true)


  // eslint-disable-next-line
  const [bankAccounts, setBankAccounts] = useState([]);

  const [web3,account,contract,contractAddress]=useBasicDetails()


  useEffect(() => {
    const getContractDetails = async () => {
      const serialNumber = await contract.methods.serialNumber().call();
      console.log(serialNumber);

      for (let i = 1; i <= serialNumber; i++) {
        await contract.methods
          .accounts(i)
          .call()
          .then((res) => {
            var bankAcc = bankAccounts;
            if (res.creator === account) {
              bankAcc.push({
                name: res.name,
                location: res.location,
                serialNumber: res.serial,
                balance: res.balance,
              });
            }
            setBankAccounts(bankAcc);
            console.log(res);
            console.log(bankAccounts);
          })
          .catch((err) => {
            console.log(err);
          });
      }

      setLoading(false);
    };
    if (
      typeof contract !== "undefined" &&
      typeof account !== "undefined" &&
      typeof web3 !== "undefined"
    ) {
      getContractDetails();
    }
    // eslint-disable-next-line
  }, [web3, account, contract]);
  


  if (!web3) {
    return <div>Loading Web3, accounts, and contract...</div>;
  }
  return (


    <div className="display-accounts">
      <div className="accounts">
        <h1>YOUR REGISTERED ACCOUNTS</h1>
        <div className="account-bars-container">
           {
            !loading?bankAccounts.map((account)=>{
           return (
          <div
            className="account-bars"
            onClick={() => (window.location = `/accounts/${account.serialNumber}`)}
          >
            <h1 className="account-bars-title">{account.name}</h1>
            <h1 className="account-bars-title">{account.serialNumber}</h1>
          </div>)


            }):null

            
           }
       
          

        </div>
      </div>

      <div className="accounts-image">
        <img src="./assets/4.svg" className="accounts-display-image" alt=""/>
      </div>
    </div>
  );
};

export default DisplayAccounts;
