import React, { useState, useEffect } from "react";
import BankingContract from "../../contracts/Banking.json";
import getWeb3 from "../../getWeb3";
import { useParams } from "react-router-dom";
import "./LoanTransaction.css";

const LoanTransaction = () => {
  const [contract, setContract] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [web3, setWeb3] = useState(undefined);
  const [loanValue, setLoanValue] = useState("");
  const [numOfInstallments, setNumOfInstallments] = useState("");
  const [loading, setLoading] = useState(true);
  const [accountBalance, setAccountBalance] = useState("");
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
    const getContractDetails = async () => {
      await contract.methods
        .accounts(id)
        .call()
        .then((res) => {
          setAccountBalance(res.balance);

          setLoading(false);
        });
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(loanValue, numOfInstallments);
    if (
      typeof contract !== "undefined" &&
      typeof account !== "undefined" &&
      typeof web3 !== "undefined"
    ) {
      await contract.methods
        .getLoan(web3.utils.toWei(loanValue, "ether"), id)
        .send({ from: account })
        .then((res) => {
          console.log(res);
        })

        .then(async () => {
          await contract.methods
            .accounts(id)
            .call()
            .then((res) => {
              setAccountBalance(res.balance);
              console.log(accountBalance);
            })
            .catch((err) => {
              console.log(err);
            });

          // window.location.reload()
          const installment = loanValue / numOfInstallments;

          var retrieveCount = 0;

          const loanRetrieval = async () => {
            await contract.methods
              .retrieveLoan(
                web3.utils.toWei(installment.toString(), "ether"),
                id,
                account
              )
              .send({ from: account, to: contract.options.address })
              .then(async (res) => {
                console.log(res);

                await contract.methods
                  .accounts(id)
                  .call()
                  .then((res) => {
                    setAccountBalance(res.balance);
                    console.log(accountBalance);
                  })
                  .catch((err) => {
                    console.log(err);
                  });

                retrieveCount++;
              })
              .catch((err) => {
                console.log(err);
              });
          };

          setInterval(() => {
            if (retrieveCount < numOfInstallments) {
              loanRetrieval();
            }
          }, 10000);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  if (!web3) {
    return <div>Loading Web3, accounts, and contract...</div>;
  }
  return !loading ? (
    <div className="loan-section">
      <div className="loan-text-wrapper">
        <h1>Now easily get loans at a fixed Simple Interest Rate of 0%</h1>
        <h2>
          The loan amount should not be greater than 10% of the bank's balance
          ,once your loan is approved you will get a prompt every minute to
          approve the transaction which is of the value of your each
          installment. In this application every month or installment period is
          10 seconds.
        </h2>

        <form className="loan-form">
          <input
            className="loan-form-input"
            type="number"
            placeholder="Enter the loan amount you want to be approved"
            value={loanValue}
            onChange={(e) => setLoanValue(e.target.value)}
          ></input>
          <input
            className="loan-form-input"
            type="number"
            placeholder="Number of transactions=loan amount"
            value={numOfInstallments}
            onChange={(e) => setNumOfInstallments(e.target.value)}
          ></input>
          <button className="loan-submit-button" onClick={handleSubmit}>
            GET LOAN
          </button>
        </form>
        <h1>{accountBalance} ETH</h1>
      </div>

      <div className="loan-image-wrapper">
        <img src=".././assets/5.svg" alt="" />
      </div>
    </div>
  ) : null;
};

export default LoanTransaction;
