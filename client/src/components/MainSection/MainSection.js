import React, { useState, useEffect } from "react";
import BankingContract from "../../contracts/Banking.json";
import getWeb3 from "../../getWeb3";

import "./MainSection.css";
import useBasicDetails from "../../hooks/useBasicDetails";


const MainSection = () => {
  const [contract, setContract] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [web3, setWeb3] = useState(undefined);

  // eslint-disable-next-line
  const [storageValue, setStorageValue] = useState(undefined);

  const [web3,account,contract]=useBasicDetails()





  useEffect(() => {
    const getContractDetails = async () => {};
    if (
      typeof contract !== "undefined" &&
      typeof account !== "undefined" &&
      typeof web3 !== "undefined"
    ) {
      localStorage.setItem("logged", true);

      getContractDetails();
    }
  }, [web3, account, contract]);

  if (!web3) {
    return <div>Loading Web3, accounts, and contract...</div>;
  }
  return (
    <div className="main-section">
      <div className="main-section-grid">
        <div className="hero-panel">
          <div className="content-container">
            <h1>ethereal</h1>
            <h2>The most secure banking platform</h2>
            <h3>
              Now don't worry about money wandering off away from your account
              as this application is secured using blockchain.
            </h3>
            <button
              className="start-button"
              onClick={() => {
                window.location = "/create";
              }}
            >
              GET STARTED
            </button>
          </div>
        </div>
        <div className="bank-image-container">
          <img alt="" src="./assets/3.svg" className="bank-image" />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
