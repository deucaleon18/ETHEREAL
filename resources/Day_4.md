
### Starting with the first Functionality feature =>Creating a new account :**



#### Now, since you have understood the structure of the project and the logic behind the project shall we begin to code?



My approach to helping you build this project will be explaining the logic of each feature and how it is implemented on the frontend and then I will show you some basic code snippets.

Let us first implement the feature of creating a new virtual account on your bank.

Navigate to your Banking.sol folder. 




To implement this feature first we will define a public uint variable called serialNumber and initialize it as 0. We also initialize a variable named as bankBalance as 0.



`uint public bankBalance=0;`

`uint public serialNumber=0;`



Next, we defined an Account struct on what all properties it should contain like name, creator's address, balance, location of the creator, account created time, existing account, serial number.

```
struct Account{

​        uint256 serial;

​        uint256 createdAt;

​        string name;

​        string location;

​        address creator;

​        uint256 balance;

​        bool doesExist;

}
```




Next, we use the mapping feature of solidity which is nothing but assigning key-value pairs like in arrays or hash tables of other languages,this will help you to display all the accounts in the frontend with the help of the key.

This is a mapping with a uint type as key mapping various Account structs.

```
mapping(uint=>Accounts) accounts;
```


Each element in this mapping can be accessed by using these key accounts[uint];



As we go through the backend code let us create an event that will be emitted on every successful transaction.





Next, we write the function to create an account that takes certain inputs that are passed from the frontend like name, creator address, and location of creator, which will be triggered when we pass all the required values in the frontend and click the submit button.


```
function <name> public payable(string name,string name,address _creator){

//code goes here//

}
```


This function will increment the serial number and create a new struct of the type Account with all the properties of the Account struct and then add it to the accounts mapping using the key serialNumber as shown below



serialNumber++;

accounts[serialNumber]=Account(<value>,<value>,<value>,<value>,<value>,<value>,<value>);



The rest of the parameters required for the account struct can be obtained such as the createdAt can be obtained from the block.timestamp which gives the Unix time of when the function was passed and written on to a new block. The serial number by intuition can be given the same serial number as the key for the accounts mapping to avoid confusion, the boolean for the account existing can be passed as true.



accounts[serialNumber]=Account(serialNumber,block.timestamp,<name>,<name>,2,true);



The balance for the account can be given as 2 initially because we have defined it such that every account when initialized should at least contain 2 Ether.

So, we can write the code for passing 2 Ether while sending the request in our frontend code. This 2 Ether will be deducted from your Ganache account that is currently connected to the Metamask and be credited to the address of the smart contract. The virtual balance of the account is displayed as 2 Ether.







Before moving to the frontend, let us add two more functions to our code that will be helpful throughout our coding process to check the Ether balance of the smart contract, the balance of the metamask connected Ganache account, and also the virtual balance of any created account that exists on the Bank.



Function #1 getContractBalance is an external view only function which returns a uint type  

For this you need to brush up on a concept of solidity that an address type has two further items in it, balance and transfer which can be accessed by specifying the address, here to get the address of the contract we use address(this) which gives the address of the current smart contract and we use address(this).balance to get the balance of the current deployed smart contract.



Function #2 getSenderBalance is also an external view only function that returns  a uint type taking the input of the Ganache address connected to

Metamask, as mentioned above we can similarly access the balance item of this address like any other address and return it.



Function #3 getAccountBalance is an additional public function with return type uint to get the balance of the current virtual account created on the Bank for this you need to simply access the balance item of the Account struct in the account mapping using the serialNumber key passed to the function from the frontend code.



`return accounts[serialNumber].balance;`



 You might think why are we defining these additional functions, believe me, you will find them much helpful to check if the code is working in the frontend by using console.log after calling them to check if the actual transfer of Ether has taken place. Since we cannot use console.log in Solidity we try a different method to test and check if our code is running.







That's it, your backend for creating an account is completed, you can test this code using the truffle console.













 Now, let us begin with the frontend,

Before beginning into the actual frontend code, you need to understand some fundamental things about the syntax of React Js and the current sub-folder structure in the frontend directory.



As we have already seen the folder structure of this directory in Module 2, let us navigate to the src folder where we will be writing all of our frontend code in the form of various components and import them all to the final index.js file which will be rendered onto the html file present in the public folder.



Now, in the src folder, we further have the folder structure as 

```
->components

->contracts

->App.css

->App.js

->getWeb3.js

->index.js

->Routing.js

->serviceWorker.js
```


Now, once you understand the purpose of each component you will be able to navigate easily through the code, and trust me when I say organizing your code into folders is much cleaner and accessible in the future.

The components folder contains various subfolders for each of our components in our application, here in this application we used the components 

->AccountDetials (the component that gets all the account details of the current account serial number)

->DisplayAccounts(displays all the registered accounts connected to the particular Metamask account)

->DisplayTransactions(displays all the transactions that occurred in the particular account)

->LoanTransaction(a temporarily working function that resembles loan transactions)

->MainSection(the main landing page when one visits the application)

->Navbar(used to navigate to various components)

->TransferMoney(the component to transfer virtual amount)



By, the names of the components you might get a feel of the job they perform, you can edit the names of these components as you wish and once you edit them they will get edited in the files they were imported into.



The contracts folder contains the JSON file for the Banking contract we had deployed we will be using and accessing this very JSON file to access our backend, for you full-stack developers out there you can imagine this as an API that can be used in your frontend application using asynchronous fetching.



The App.js contains various imports from all the components of the application and App.css defines the global styles for every component present in the application since all the components will be imported in App.js



The getWeb3.js is a boilerplate template generated for us by Truffle when we run the command truffle unbox react which contains a promise-based function to load Web3.



The index.js is the file where the App.js is finally imported and rendered onto the frontend html file.



The Routing.js is an important file that contains the various routes present in the whole application it is imported from `react-router-dom` which we have already installed and imported for you guys in our template,for peeps who are starting from no worries you guys can type 

`npm install react-router-dom` and get this npm package



Lastly, serviceWorker.js is not of much use for us as it is just a part of the boilerplate code that appears with React.







That was the folder structure, now let us discuss some of the basic React hooks syntaxes that we have used in our application for React beginners:

In the totality of this application, we have used only three React hooks and by three, I mean exactly three not more, not less all the work can be done using these three hooks. These are useState, useEffect, and use params.



So, let us just get to know briefly about each of these and a little bit about the project syntax

An example for useParams is where we have imported the Transactions component to our Routing.js file and in the path URL, we have specified the parameter id.

In the Transactions component, we can use this id parameter to perform actions that are specific to the account with that id,we can access this id parameter in another component from the url using the  * *drumrolls* * useParams hook



In the Transactions component,we have accessed the id parameter and assigned it to a variable in the Transactions component 

const{id} =useParams(id);



In the bracket of the useParams hook, we refer to the exact parameter variable we used in the URL.

I hope that helps you understand about the useParams hook,for more reference visit : 









Let us briefly explore the Routing.js file  :



In the Routing.js file we import Router and Route from 'react-router-dom' and the basic syntax of the whole Routing component is similar for every Route 



import {BrowserRouter as Router,Route} from 'react-router-dom';

import ComponentName1 from '<path-to-the-component>'

import ComponentName2 from '<path-to-the-component>'

```

<Router>

<Route exact path="<specify-path1-here>">

<ComponentName1/>

</Route>

<Route exact path="<specify-path2-here>">

<ComponentName2/>

</Route>

</Router>           

```









Now, that was all about the first useEffect hook which will be present in all functional components like AccountDetails, DisplayAccounts , LoanTransaction, TransferMoney ..........



Let's talk about the second useEffect hook which you will be use in some or almost all of the components to extract the functionality from the contract because let's be logical only creation of the contract is not enough we need to access the functionality of the contract to perform various operations for us, in the first component we are creating the CreateAccount.js component we actually don't require any additional data, but we just use the second hook to console.log the contract details, and in this hook we only run the function when web3, contract and account are not undefined as we had initialized them as undefined, the dependency array also has web3,account, contract in it so that useEffect runs until all of these variables change from undefined to a definitive value, this is done for easy coding purposes to view the various methods present in the contract (We'll explain what are these various methods).



So, let's continue building the createAccount.js component, for this, we require a basic html form 

*PRO TIP:*  To build forms in which the data field values are stored in some variable which can be further used at different places we use the useState hook, this has been done in all the components so I am specifying this in the beginning for your ease. 

EXAMPLE :  const[name,setName]=useState("")

​                     <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" type="text"/>



In the above example we initialized the name as a blank variable and then when the form input value is changed we pass the onChange function where the state of the name variable is updated to the current target value, this name can be further used any place we want, overall throughout the application we use this, so when I refer to making a form input with a value equal to the value of the variable "x" what I actually will mean is the above syntax.



So, now if you recall from a little while back in the Solidity contract the function to create a new account takes 3 inputs, and among those 3 -one is the creator address which is the account connected to Metamask which we already stored in the account state variable, the other 2 variables are the name and location inputs which we will get from the form which we are creating. 

After creating the form with 2 input fields we need to create a Submit button and we need to pass a function on click of this button, now the syntax of this function will also be similar in every component since it is the first component let us give you the format.



EXAMPLE : 

We defined the handleSubmit function inside our CreateAccount component but this should be above the rendering of the JSX 



*ES7 arrow function syntax is being used here throughout the project, you may use it or may proceed with the normal function syntax*

```

//Function to handle the submit operation of the form

const handleSubmit=async(e)=>{

//prevents the default action that occurs when someone submits a form 

e.preventDefault()



//...rest of the function code .....//

 }

<button type ="submit" onClick={handleSubmit}>SUBMIT <button/> 
```


This function is asynchronous because we need to communicate with the contract and send a request to it and wait for its response, and hence the syntax is similar everywhere using .then and .catch to resolve the promises, more than one .then can also be changed as per the user requirement.       



Now in our createAccount.js file, the handleSubmit function should contain the code to access the function to create new accounts from the backend, now how this is done? 

Well, firstly we have already created a new contract, every contract is an object which further has an item called methods, now what does this methods item contain? 

It contains every public variable and function defined in the solidity contract. That's it, you can refer to the contract object in the console.log, you will find the methods item in it.

For this component we need to access the createAccount method, now there are 2 ways to access a function using web3, they are call and send, the major differences in these two are you use call only when you want to view data and not modify anything and it does not cost any ether to perform this transaction but it you use the send method it costs some amount of gas fees and it modifies data, why does it cost ether though? 

Well, that is an interesting question though but as you already know from the Basics module that you need to send ether for the function to be executed or written on a new block and the miners of this block need to be rewarded somehow since they are securing the whole system by solving complex algorithms which creates new blocks for storing our executed function data, hence this is the amount deducted from our account when we use the send method, which is rewarded to the miners.

For, the createAccount.js we are creating a new account, that is modifying data so we use the send option, and the syntax of a send option is such that it also accepts another object which contains details like the from address, to address, and the value being sent.



Learn more about the send and call methods here:



In, our banking application we deduct 2 ether from the Metamask account on the creation of every new account as a starting balance to the virtual account and increment the balance of the virtual account from 0 to 2 (the increment of balance is handled on the backend).

```
await contract.methods.createAccount(account,name,location).send({from:account,value:web3.utils.toWei(2,"ether")})

.then((res)=>{

console.log(res)

window.location.href="/accounts"

})

.catch((err)=>{

console.log(err)

})
```


When you click on submit the Metamask will prompt you to approve the transaction with the cost of 2 ether, on approval your new account will be created. On, successful approval according to the logic of the function the page will redirect to "/accounts" which we will continue coding in the next module.

This is an example of how to access any function from the backend passing the values and using the send method, if you just want to display values which we will see in the DisplayAccounts.js in the next module you just need to use the call option and spend no ether. But, always remember if you want to perform a function you need to spend some amount of ether and send it from your Metamask connected account, the ether is sent to the contract which will, in turn, be sent to the miner accounts. 


<br>