## **Writing your first smart contract** :

Now, that you have explored all the hooks used in the project , we add the basic code to every component to fetch all the details like web3, metamask connected account and the solidity contract.

This code is common for all the components  as we need to fetch data in every component . 



The only component which won't have it is the Navbar because that is only for Navigation purposes and does not require all these details , for this project purposes we create a Navbar with 2 tabs for now : REGISTER and ACCOUNTS  and the styling for this Navbar is completely in your hands ,we have given creative license to you for that the register page should redirect you to the url "/create" , you can change the name for this if you want afterwards, we have named it "/create" and the ACCOUNTS tabs should redirect you to the url "/accounts". You can import this navbar in all the components you are creating to navigate to the different tabs of our application which are only 2 currently but you will soon understand that it is further branched internally.



The only modification is when you fetch more details or the particular function for that component from the contract .



```

 useEffect(() => {

​    const getBasicDetails = async () => {

​      try {

​        *// Get network provider and web3 instance.*

​        const web3 = await getWeb3();

​        *// Use web3 to get the user's accounts.*

​        const accounts = await web3.eth.getAccounts();

​        *// Get the contract instance.*

​        const networkId = await web3.eth.net.getId();

​        const deployedNetwork = BankingContract.networks[networkId];

​        const instance = new web3.eth.Contract(

​          BankingContract.abi,

​          deployedNetwork && deployedNetwork.address

​        );

​        setWeb3(web3);

​        setAccount(accounts[0]);

​        setContract(instance);

​      } catch (error) {

​        *// Catch any errors for any of the above operations.*

​        alert(

​          `Failed to load web3, accounts, or contract. Check console for details.`

​        );

​        console.error(error);

​      }

​    }

​    getBasicDetails();

  }, []);



```

This is how your first useEffect hook looks, to skim through this useEffect hook once would be enough as you will be using this same useEffect hook in every component , even if you create new components , in this hook we have defined a function getBasicDetails , where we load web3 from the getWeb3.js  , and we get the Metamask connected account by using web3 , as we have already mentioned in our intro section that web3 acts as a connector between our backend and frontend . Here we use web3 for everything for creating a new contract, for using the various functions from the backend , for loading accounts . You will soon understand that it makes everything much easier . 



Firstly , overall throughout the application we use web3 and whenever we use web3 , it is through asynchronous calls and we use the async await syntax and basic ES7 javascript .then , .catch syntax to resolve promises .



web3.eth(eth is short for ethereum) is the  object which contains various functions for getting your accounts, getting your network id , creating a new contract from your JSON file .

Read more about the various methods of web3 here .



In the getBasicDetails function , we use the `getAccounts()` , `net.getId()` , `Contract(`) methods of web3.eth 

getAccounts() gets all the accounts connected to the Ethereum browser (here Metamask) ,to access the present connected account we want the very first element of this accounts array which is at the zeroeth index , and we change the state of account variable to this   

net.getId() gets the network Id of the Solidity contract which is one of the two things to initiate a new contract using web3 , the other one is the abi object present in the Banking.json file .

new web3.eth.Contract(BankingContract.abi,

​          deployedNetwork && deployedNetwork.address)

initiates a contract from our existing JSON file .



We set web3 to the loaded web3 object and the contract  variable to the newly created contract hook using useState hook .

<br>

### Web 3 Doc : https://web3js.readthedocs.io/en/v1.3.0/
Explore the topics which were taught in today's session.

<br>

### Elements of our project:

We, consider the ether present in your Ganache account as the cash in hand which every customer i.e. a Ganache account holder, in this case, can deposit in the Virtual Bank which in this case is the Smart Contract itself.



So, let's decode this when you want to go and deposit some ether in the Virtual Bank then the amount of ether you want to deposit will be deducted from your Ganache address and be transferred to the Smart Contract address which is the Virtual Bank and this increase the balance property of the Smart Contract and decreases the Balance property of the Ganache account (meaning you have deposited some cash to the bank which was present with you).



Now, let's look at the other process, WIthdrawal, as you may have understood this is the complete opposite of the above process and by intuition, you just need to do the opposite of the above process meaning you need to take the amount from the Bank and get back cash in your hand, so that would be transferring the amount from the Smart Contract address back to your Ganache account address decreasing the balance of the Smart Contract and increasing the balance of the Ganache account address.



Now, here comes the twist, to perform the various other operations in the bank no amount of actual ether is transferred to or from the bank, only a minimal gas fee is transferred to operate, but other than that only virtual updating of account balances are done.



For, example the transfer of amount from one account to the other, here directly only the balance is subtracted from one account and added to the other account, no actual flow of ether takes place.

Similarly, with the Loans process, no actual amount of ether flow takes place first the balance of the account that is requesting a loan is increased, and then it is subsequently decreased.



### Intuition:

So, how we're the last two features different from the first two features?

For that, you need to have a basic idea of how banking works, as you might have seen with real banks when we deposit money our account balance is increased, there is an increase in our account balance but what this process also does is increase the whole bank balance, similar is the case with withdrawal, this decreases the account balance and it decreases the entire bank's balance also. 

So, there is some actual flow of money that leads to the increase or decrease in the bank's net balance, but whereas in other cases where you are just transferring the amount from one account to another since both the accounts are on the same bank there is no net increase or decrease in the bank's account balance, so hence comparing it to our project there is no ether actual ether transfer involved from outside except the gas fees.





​      Transfer of actual ether: Ganache account connected to Metamask -> Contract Account and also when transactions require a minimal amount of gas to be prosecuted.

​      Transfer of virtual money (SImple updation of balance in the accounts, this can be assumed as the banking currency also for convenience): From one virtual account in the bank to other

So, now you are well versed with the folder structure let us actually understand the crux of our project or how it works 