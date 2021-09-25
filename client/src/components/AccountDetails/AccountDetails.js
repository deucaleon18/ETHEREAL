import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import BankingContract from "../../contracts/Banking.json";
import getWeb3 from "../../getWeb3";

import "./AccountDetails.css";

const AccountDetails = () => {
  const [contract, setContract] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [web3, setWeb3] = useState(undefined);
  const [contractAddress,setContractAddress]=useState(undefined)

  const bankAccount = "0xdaB74b7DbA038eec5A99CE26257668CB86f6EC0C";
  const [balanceAdded, setBalanceAdded] = useState("");
  const [balanceWithdrawn, setBalanceWithdrawn] = useState("");


  // eslint-disable-next-line
  const [storageValue, setStorageValue] = useState(undefined);

  //Use the same variable predefined after " :"
  const { id } = useParams();

  useEffect(() => {
    const getBasicDetails = async () => {
      try {
        // Get network provider and web3 instance.
        const web3 = await getWeb3();

        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts();

        // Get the contract instance.
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = BankingContract.networks[networkId];
        setContractAddress(deployedNetwork.address)
        const instance = new web3.eth.Contract(
          BankingContract.abi,
          deployedNetwork && deployedNetwork.address
        );
        setWeb3(web3);
        setAccount(accounts[0]);
        setContract(instance);
      } catch (error) {
        // Catch any errors for any of the above operations.
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`
        );
        console.error(error);
      }
    };

    getBasicDetails();
  }, []);

  useEffect(() => {
    const getContractDetails = async () => {};
    if (
      typeof contract !== "undefined" &&
      typeof account !== "undefined" &&
      typeof web3 !== "undefined"
    ) {
      console.log(contract);
      console.log(contractAddress)
      getContractDetails();
    }
  }, [web3, account, contract]);





 //Function handler on adding balance
  const addBalance = async (e) => {
    e.preventDefault();
    console.log(`${id}`);
    console.log(balanceAdded);
    console.log("add");
    if (
      typeof contract !== "undefined" &&
      typeof account !== "undefined" &&
      typeof web3 !== "undefined"
    ){

     await contract.methods.addBalance(id,balanceAdded).send({from:account,value:balanceAdded})

      .then((res)=>{
       console.log(res)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  };


//Function handler on withdrawing balance
  const withdrawBalance = async (e) => {
    e.preventDefault();
    console.log(`${id}`);
    console.log(balanceWithdrawn);
    console.log("withdraw");
    if (
      typeof contract !== "undefined" &&
      typeof account !== "undefined" &&
      typeof web3 !== "undefined"
    ) 
    { 
      console.log(bankAccount)
      await contract.methods
        .withdrawBalance(id, balanceWithdrawn)
        .send({from:bankAccount,to:account,value: balanceWithdrawn })
         
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };




  if (!web3) {
    return <div>Loading Web3, accounts, and contract...</div>;
  }
  return (
    <div className="account-details-section">
      <div className="account-card"></div>
      <div className="transfer-balance-card"></div>
      <div className="loan-transaction-card"></div>

      <div className="add-balance-card">
        <form onSubmit={addBalance}>
          <input
            type="number"
            placeholder="add amount"
            value={balanceAdded}
            onChange={(e) => {
              setBalanceAdded(e.target.value);
            }}
          />
          <button type="submit"> ADD</button>
        </form>
      </div>
      <div className="withdraw-balance-card">

        <form onSubmit={withdrawBalance}>
          <input
            type="number"
            placeholder="withdraw amount"
            value={balanceWithdrawn}
            onChange={(e) => {
              setBalanceWithdrawn(e.target.value);
            }}
          />
          <button type="submit"> WITHDRAW</button>
        </form>

      </div>
    </div>
  );
};

export default AccountDetails;
