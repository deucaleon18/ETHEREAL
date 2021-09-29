import React,{useState,useEffect} from 'react'
import './DisplayTransactions.css'
import { useParams } from 'react-router-dom'
import BankingContract from "../../contracts/Banking.json";
import getWeb3 from "../../getWeb3";
const DisplayTransactions = () => {
  const { id } = useParams();

  const [contract, setContract] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [web3, setWeb3] = useState(undefined);
  const [transactionHistory, setTransactionHistory] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true);

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
      let transactionNumber = await contract.methods.transacNum().call();

      for (let i = 1; i <= transactionNumber; i++) {
        await contract.methods
          .transactions(i)
          .call()
          .then((res) => {
            // eslint-disable-next-line
            if (res.accountSerialNumber == id) {
              console.log(res);
              var transac = transactionHistory;
              transac.push(res);
              setTransactionHistory(transac);
            }
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
    <div className="account-transactions">
      <h1> TRANSACTION HISTORY</h1>
      <div className="account-transaction-bars">
        <div className="transaction-bar-header">
          <div className="col-1">
            <h1> AMT.</h1>
          </div>
          <div className="col-2">
            <h1>TYPE</h1>
          </div>
          <div className="col-3">
            <h1>BALANCE</h1>
          </div>
          <div className="col-4">
            <h1>TIME</h1>
          </div>
        </div>
        {
          // !loading?
          transactionHistory.map((transaction) => {
            var time = new Date(transaction.createdAt * 1000).toLocaleString();

            return (
              <div className="transaction-bar">
                <div className="col-1">
                  <h1>{transaction.amountTransacted}</h1>
                </div>
                <div className="col-2">
                  <h1>{transaction.transacType}</h1>
                </div>
                <div className="col-3">
                  <h1>{transaction.currentBalance}</h1>
                </div>
                <div className="col-4">
                  <h1>{time}</h1>
                </div>
              </div>
            );
          })
          // :null
        }
      </div>
    </div>
  );
}

export default DisplayTransactions
