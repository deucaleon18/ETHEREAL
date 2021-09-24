import React, { useState, useEffect } from "react";
import BankingContract from "../../contracts/Banking.json";
import getWeb3 from "../../getWeb3";

import "./DisplayAccounts.css";

const DisplayAccounts = () => {
  const [contract, setContract] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [web3, setWeb3] = useState(undefined);
  // eslint-disable-next-line
  const [storageValue, setStorageValue] = useState(undefined);

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
      getContractDetails();
    }
  }, [web3, account, contract]);

  if (!web3) {
    return <div>Loading Web3, accounts, and contract...</div>;
  }
  return <div className="transaction-section"></div>;
};

export default DisplayAccounts;
