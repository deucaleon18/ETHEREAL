<h1 align="center">Ethereal</h1>

### **Taking Banking System to the next level with Solidity Smart Contracts.**
This application is supported with a backend built using Solidity Smart Contracts and the frontend is built using React JS, the backend is deployed to the local Ethereum network Ganache. The whole project runs on an Ethereum supported browser, with the help of the Metamask extension. 

<br>

#### **For your understanding and ease of working on this project we have divided this project into several easy-to-work modules. These are the various modules in the project :** <br>

This project was built using React frontend but we will try our best to keep it Language friendly so that you can understand the logic and build it even using normal HTML+CSS+JS.

<!-- Also need to talk about Remix ,Ganache CLI and UI difference if possible and Solidity test. -->

<br>

#### **1.Getting started :**
In these modules, you learn about Blockchain and Ethereum, Solidity Language Fundamentals, Metamask, Ganache, Truffle, and Web3. Completing the initial setup for your project and installing all the dependencies and getting started with your project.

#### **2.Start writing your first smart contract:**
In this module, you explore the folder structure of the whole project. You define basic variables in your smart contract and explore the syntax of Solidity. You deploy and migrate this basic smart to the local blockchain and test if it is working.

#### **3.Starting with the first Functionality feature =>Creating a new account:**
In this module, you add code to your Solidity Smart Contract to create a new account and display it on your Banking Website.

#### **4.Adding new features =>Displaying Accounts,Account Details and Adding Balance :**
In this module, you add code to your Solidity Smart Contract to add balance to your virtual account created on your Banking Website Ethereal. This function allows you to perform very basic banking transactions.

#### **5.Introducing the new feature=>Withdrawing Balance and Transfer Amount to other virtual accounts on the Bank**:
In this module, you add code to your Solidity Smart Contract to withdraw ether and transfer the amount from one virtual account to another.

#### **6.Introducing the last feature=>Adding the Loans feature to our virtual Bank and Wrapping up :**
###### **Now this feature has limitations and is not perfect but the deed is correctly performed **
In this module, you add code to your Solidity Smart Contract to implement the Loans Feature. This function allows you to take some balance from the bank and it cuts the same amount of balance from your bank account in certain intervals.

#### **7.Last Module : *(additional)***
In this module, you can further complicate your project and as the various Accounts were created and displayed, you can even log every transaction made by every account on the Blockchain network and you can log the particular Transactions for that particular Account. You can also design the project as per your choosing, some basic templates will be provided to you in the Resources.

##### So, shall we begin ?

<br>

## **Module 1: Getting Started** :

So there were a lot of complicated terms used in this project but we need to understand each and every one of them to get a clear picture of the project. This will help you to build a very strong base and will get a clearer picture of the project.

<br>

### **What is Blockchain?**

Blockchain technology is a type of distributed ledger technology (DLT) — It is an accounting system where the **ledger** (record of transactions) is **distributed** among a network of computers.

**So at its core, blockchain technology is a record-keeping tool.**

If you are slightly familiar with development , you would know that a database is a place where you store all the data pertaining to an application , hence we are using Blockchain technology as a database in our application.

One key difference between a typical database and a blockchain is the way the data is structured. A blockchain collects information together in groups, also known as blocks, that hold sets of information. Blocks have certain storage capacities and, when filled, are chained onto the previously filled block, forming a chain of data known as the “blockchain.” All new information that follows that freshly added block is compiled into a newly formed block that will then also be added to the chain once filled.

Beginners guide for [Blockchain](https://medium.com/@sinafl/blockchain-101-a-beginners-guide-410d4d93d635).

### **How Does a Blockchain Application Work ?**
In order to understand how a blockchain application works, let's first look at how a normal web application might work :

To access a normal web application, you would use a web browser that would communicate with a web server over the Internet. The server contains all of the code and data for the application.

<p align="center">
<img align="center" src="web.png" width="600" height="500">
</p>

<br>

*Here is a list of what you would find on the server :*
- Client-side files in HTML, CSS, and JavaScript
- Back end code responsible for the application's business logic
- Database that stores all the information of the application

This server is a centralized entity that has full control over every aspect of the application. Anyone with full access to the server can change any part of the code or the data at any time. A blockchain application works quite differently. All of the code and the data of a web application do not lie on a centralized server. Instead, it is distributed across the blockchain. All of the code and the data is shared and unchangeable on the blockchain.

To illustrate this, let's examine how our blockchain-based web application will work.


<p align="center">
<img align="center" src="web2.png" width="600" height="500">
</p>
<br>

To access the blockchain application, we'll use a web browser to talk to the client-side application, which will be written in HTML, CSS, and JavaScript. Instead of talking to a back-end web server, the client-side application will talk directly to the blockchain.


#### *KEY TAKEAWAYS :*

- Blockchain is a specific type of database.
- It differs from a typical database in the way it stores information; blockchains store data in blocks that are then chained together. 
- As new data comes in it is entered into a fresh block. Once the block is filled with data it is chained onto the previous block, which makes the data chained together in chronological order.
- Different types of information can be stored on a blockchain but the most common use so far has been as a ledger for transactions. 
- In Bitcoin’s case, blockchain is used in a decentralized way so that no single person or group has control—rather, all users collectively retain control.
- Decentralized blockchains are immutable, which means that the data entered is irreversible. For Bitcoin, this means that transactions are permanently recorded and viewable to anyone.

For in-depth detail click [here](https://www.investopedia.com/terms/b/blockchain.asp#what-is-blockchain).




#### **Ethereum DAPP Architecture**

A blockchain DApp has its own backend code called **smart contracts** that can be deployed to a blockchain (most commonly Ethereum). A smart contract defines the logic of the entire DApp. It is the lifeblood of using a blockchain as a backend.

Dapps Development includes three simple steps

1. Deploying a smart contract on the blockchain network
2. Reading data from the deployed smart contract
3. Sending transactions to the deployed smart contract

*The interface we generally use for communicating with our smart contracts in a blockchain network is web3.js or web3.py.*

web3.js is a collection of libraries that allow you to interact with a local or remote ethereum node using HTTP, IPC or WebSocket.
For in-depth detail click [here](https://web3js.readthedocs.io/en/v1.5.2/).

<p align="center">
<img src="https://miro.medium.com/max/1248/1*JaGJYtKcBKHHIznHGioKJg.png">

<h4 align="center"> Ethereum Dapp Structure </h4>
</p>

<br>

### **What is a Smart Contract ?**

All of the code on the blockchain is contained in smart contracts, which are programs that run on the blockchain. They are the building blocks of blockchain applications. We'll write a smart contract in this project to power our Banking system. It will be responsible for fetching all of the operations in our Banking System from the blockchain.

There are a lot of options out there to write smart contracts like solidity, vyper, LLL,serpent but for this project we will use solidity, which looks a lot like JavaScript/C++. All of the code in the smart contract is immutable, or unchangeable. Once we deploy the smart contract to the blockchain, we won't be able to change or update any of the code. This is a design feature that ensures that the code is trustless and secure. They act as an interface for reading and writing data from the blockchain, as well as executing business logic. They're publicly accessible, meaning anyone with access to the blockchain can access their interface.

For in-depth detail click [here](https://www.investopedia.com/terms/s/smart-contracts.asp).


### **Intro To Solidity :**
Solidity is the main programming language for writing smart contracts for the Ethereum blockchain. It is a contract-oriented language, which means that smart contracts are responsible for storing all of the programming logic that transacts with the blockchain. It's a high-level programming language that looks a lot like JavaScript, Python, and C++. It's designed to run on the Ethereum Virtual Machine (EVM), which is hosted on Ethereum Nodes that are connected to the blockchain. It is statically typed, and supports inheritance, libraries, and more! In short, it has all the capabilities that you need in order to build industrial-strength blockchain applications.

**basic structure of a solidity contract :**

`pragma solidty ^0.5.0                                //tells the compiler which version of the compiler to use `

contract contract_name{

uint variable_name1,variable_name2,... ;                                                                                                         

/// put the code structure here with comments to explain their use

}

For in-depth detail click [here](https://docs.soliditylang.org/en/v0.8.9/).


<br>

---

### *Now let's install all of the dependencies we need to build our project. First, we'll set up a person blockchain to develop the application locally.*
<br>

### **Ganache Local Development Blockchain**
The dependency is a personal blockchain, which is a local development blockchain that can be used to mimic the behavior of a public blockchain. We recommend using [Ganache](https://www.trufflesuite.com/ganache) as your personal blockchain for Ethereum development. It will allow you to deploy smart contracts, develop applications, and run tests. It is available on Windows, Mac, and Linux as a desktop application and a command-line tool !

Download it by clicking [here](https://www.trufflesuite.com/ganache).  *(For both Windows and Linux)*

##### **For Linux Users :**

*Once the download is complete, go to the folder where you have downloaded the file and open the terminal and type the following to make the file executable :*
```
Chmod a+x <filename.AppImage>
```

<br>

### **Node.JS**
Now that you have a private blockchain running, you need to configure your environment for developing smart contracts. The first dependency you'll need is [Node Package Manager](https://nodejs.org/en/), or NPM, which comes with Node.js.

You can see if you have node already installed by going to your terminal/cmd and typing:

```
node -v
```

If you don't have a node already installed then :

##### **For Windows Users :**
Download it by clicking [here](https://nodejs.org/en/).

*It is recommended that you download LTS version.*



##### **For Linux Users :**
Go to your terminal and type :
 ```
$ sudo apt install nodejs
$ sudo apt install npm
 ```
<br>

### **Truffle Framework**
Now let's install the [Truffle Framework](https://www.trufflesuite.com/docs/truffle/overview), which provides a suite of tools for developing Ethereum smart contracts with the Solidity programming language.
##### **For Windows Users :**
Go to your cmd and type :
```
npm install -g truffle
```
##### **For Linux Users :**
Go to your terminal and type :
```
$ sudo npm install -g truffle
```
<br>

#### **For this project, we have used React JS for the frontend and to get the folder structure we run the following command :**
##### **For Windows Users :**
Go to your cmd and type :
```
truffle unbox react 
```
##### **For Linux Users :**
Go to your terminal and type :
```
$ sudo npx truffle unbox react 
```

<br>

### **Metamask Wallet**

For this project, we would require an ethereum wallet, and here we will use the popular open-source wallet metamask.

**On chrome/firefox/brave :** *(It is recommended that you use Brave browser)*

1. Go to the extensions page of your browser and install the metamask plugin, click [here](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn).
2. On installation the user will be redirected to a setup page and the user has to choose a password and a recovery phrase.

For in-depth detail click [here](https://docs.metamask.io/guide/)

<br>

<br>

So, as you have covered all the fundamentals and learned all about Blockchain, Ethereum, Solidity, Metamask, Ganache, and Web3, let us dive deep into the project, we have the project setup ready with us, and before beginning the project let us actually understand the folder structure of our project and how our project actually works. 


#### *The folder structure of our project :*

If you have downloaded the project template provided by us,or have run the coomand npx truffle unbox react you would have a folder structure of something similar to this in front of you 


```
->client 

->contracts

->migrations

->resources

->test

.gitattributes

LICENSE

truffle-config.js
```

Let us understand the folder structure in depth which will make it really easy for you to complete your project.

<br>

### client :

This directory contains all the frontend code of your project. 

The folder structure inside the client looks like this 

```
  ->node_modules

  ->src

  ->public

  .gitignore

  package-lock.json

  package.json
```

Let us understand what each of these means :

`  node_modules:` This folder contains all the required npm packages for your project which are installed when you run `npm install`  after cloning our repository.

`src:`This folder contains all the components and pages for our React project

`public:`This is the directory where we save our images and which also contains the main html file `index.html`where all the components from src are finally rendered to give us a single page application.

The `.gitignore` file contains information-related code which you don't want to commit to Github.

The `package.json` and `package-lock.json` are initialized when you run npm init and install npm packages in your project.

<br>

### contracts :

This directory contains all of our written Smart Contract code for the project in .sol extension format 

<br>

### migrations :

This directory contains code pertaining to migrating your Solidity Smart Contract. Quick recap as you have already learned before Migrations in this case are deploying your smart contract code to the local blockchain Ganache.

<br>

### test :

Solidity can be a tiring language to work so this folder contains all the code to test our solidity smart contracts in our terminal, similar to testing Javascript code using `console.log(<code-snippet>)`

<br>

### resources:

This folder provides all the necessary information to get started with the project.

<br>

### .gitattributes and LICENSE:

These are just parts of the boilerplate code and can be ignored, the LICENSE here is the famous MIT License tag that you see in some GitHub projects.


### truffle-config.js:

This is an important file that contains all the information regarding your truffle configuration and the port on which your local blockchain is running. It is pre-generated but to briefly explain the terms in this file the network ID is the network ID and PORT are already specified in  Ganache, and the host as usual is the localhost with the IP address `127.0.0.1`.

<br>

<br>

 *// SPDX-License-Identifier: MIT*

```
pragma solidity >=0.4.21 <0.7.0;

contract Banking {

}  

Basic solidity syntax:

Constructor is a function which runs every time the contract is initialized. For our application at the 0th index , we created the bank's account.


constructor() public{

accounts[0]=Account(0,block.timestamp,'Bank','RandomLocation ',0,true);

}


Variable initialization: 

<type>  public <name> = <value>;


Struct:

struct <name>{

<type> <name>

<type> <name>

<type> <name>

<type> <name>

<type> <name>

}


Mapping : mapping (<key>=><type>) <name>

Function : function <name>   internal/external/public    pure/view   payable/none   returns(<type value> ){

....<code>.......

}



Event :

Initializing : event <Name> (<type> <name>,<type> <name>,<type> <name>);

Emitting event : emit <Name> (<value>,<value>,<value>);



Errors:

Emitting error : revert("message");
```



In React you need to import components or hooks to use them in a particular component .

So ,first we import all the required hooks which we have already provided to you in the template 

```
 import {useState,useEffect} from 'react';
```

This hook is not required for every component , so we have imported only when it is necessarily required 

```
import {useParams} from 'react-router-dom';
```


The useState hook works to update the state of a defined variable and the variable can be used anywhere in the component .
```
Syntax :   Example : const [name,setName] =useState(" ")
```

 In the above example we have initialized a variable name and we use setName to update the value of this name variable ,the second variable which is used to update the state of the initialized variable is generally written in camelCase as set<name of first variable> ,this is  a healthy practice and is generally done to avoid confusion in variable names , you can write the second variable as anything for example `const [name,jambaJuice] =useState(" ")` ,this is also valid.

In the above example the variable name is initialized as an empty variable , the value present in the bracket of useState hook is the initial value of name here , we have given it as " " which is an empty variable. 

We can update the value present in name , by calling setName(<new value>), for example if we write setName("Lucifer") and now we console.log(name), it will print "Lucifer".

That is all you need to know about useState, let us explore the rest of the hooks.

If, you want further reading you can refer: 





The useEffect hook contains various functions that run every time a component is mounted (it is initialized or called) or if the state of any mentioned variable in the dependancy array changes .

Syntax :  

```
Example:

useEffect(()=>{

   functionName();

},[])
```

This is an example of a useEffect that runs once every time you reload the page i.e. your component is mounted , the empty array added at the end is called a dependancy array , which contains information about how many times your useEffect hook should re render the component , as it is an empty array it conveys the information that the component should be rendered only once, if you don't add this dependancy array your component will re-render multiple number of times and your application will crash , because there is no information for the useEffect hook on when to stop , if you add a variable in the dependacy array for example in the above example for useState hook we have changed the name to "Lucifer" ,so if we add name variable to the dependancy array the component in which these both hooks are added ,will re render once on the change of the variable name .

There , is not much to add but you can read more about useEffect hook here:

The last hook which we used in this project is the useParams hook , by intuitions the hook contains the word "params" which is short for parameters , and you will understand why the hook is named so when we take an example , we have often navigated through an E-Commerce site ,the best example being Amazon , the main page contains a lot of products , so when you click a product you are directed to the page containing information ,so what do you think that for every product there is a separately designed for that product ,that would be ridiculous and not feasible as there are millions of products on Amazon ,so you wouldn't be building a million pages right , instead what you do is you serialize these products and make a single page called product information page and this serial number is used to access that product's specific page . This is the parameter which we referred in the beginning and in our project this is used to navigate to a page pertaining to specific account on our virtual bank .

In our routing when you want to navigate to a page pertaining to a particular account here you specify the parameter id like this 

```
<Routing exact path="/transactions/:id">

<Transactions/>

</Routing>
```

<br>

Video Link : https://www.youtube.com/watch?v=4UZrsTqkcW4

**Note :** Watch UseState (3:39:00 to 4:23:00), useEffect (4:47:27 to 5:19:24) and React Router (9:00:41 to (9:23:22)

React Docs : https://reactjs.org/docs/getting-started.html

Solidity Docs : https://docs.soliditylang.org/en/v0.8.9/

Solidity Tutorial : https://www.youtube.com/watch?v=ipwxYa-F1uY&t=2239s

<br>

----

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

<br>

----

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

----




### **Adding new features =>Displaying Accounts,Account Details and Adding Balance :**



Welcome to the firth module, now let us start coding the component to display the accounts (only created using this particular Metamask address)



The logic for this is simple, as you might have remembered we have an accounts mapping in the backend and we can access them using the serialNumber key which is the normal index of the account. Here we need to use the call option and call the accounts method (even mappings are part of the methods object) one by one and push it into a state variable of bankingAccounts if and only if the creator of the account is the same as that of the currently connected Metamask account(important check -verification condition to know that the person who created the account is the only person who can access it and perform operations in it)



The basic layout of this component is no different from the other components, but the second useEffect hook here has actual use since you need to actually call the accounts mapping (from the contract methods), and you need to call this method serialNumber number of times(serialNumber is also a method from the contract methods) and check for only those accounts whose _creator address is same as that of the Metamask connected account.



PRO TIP: While using asynchronous functions we always need to wait for the function to complete its execution and then we resolve the returned promise using .then,.catch statements so when we print the data also need to wait until all the data is fetched, you might also have noticed that a loader is present in many web pages, well the logic behind adding a loader is simple, you need to use a useState hook with state variable loader, set it initially to true and set it to false, after all the accounts are fetched.



In the second useEffect hook we need to do two things, we need to get the value of serialNumber, and then we need to get the various accounts connected to the Metamask address and push it to the bankingAccounts state array.



`var serial =await contract.methods.serialNumber().call()       [even public variables from the backend need to be called ]`



Now we need to run a for loop from 1 to less than or equal to serialNumber and call the accounts methods with the key as the value of the iterator, the account object is pushed to the bankingAccounts array after it passes the check that the creator address is equal to the Metamask connected address.


```
for(Int i =1;i<=serial;i++){
await contract.methods.accounts(i).call()



//ES7 promise resolving syntax using .then and .catch 

.then(()=>{

if (res.creator ==account ){

setBankingAccounts(bankingAccounts.push({name:res.name ..................}))

}

})

.catch((err)=>{

console.log(err)})

}

```

The above snippet is an example where you update the state of bankingAccounts as you are pushing each bankingAccount connected the that particular Metamask address 

Finally, setLoading(false) after the whole for loop is run, 



Now you need to use one of the famous array methods mappings in the frontend to print the contents of the bankingAccounts array, to give you an idea of the CSS layout of this page it will only contain various account bars with the name and serial number, which after clicking on them will redirect you to the account details page of that particular account where you can find the complete account details and various operations to perform on the account.



Before printing all the accounts check for if loading is false using the ternary operator and then map the bankingAccounts , if the loading is still true print nothing, now you need to make these bars where you are printing clickable and they should redirect you to the specific page for that account with the parameter as serialNumber ( to "/accounts/:id") and here the usage of useParams begin as we have mentioned in the third module. Also, react throws you an error in the console that every child element must contain a key which is a unique identifier value so in this case, also you can set the key={account. serial}



`The location is changed using the window. location method`


```
!loading ? bankingAccounts.map((account)=>{

<div key={account.serial} onClick={()=>{window.location.href=   accounts/${serialNumber  }}>

 account. name  

 account.serialNumber

</ div >

}) :null
```




Now that was displaying all the accounts , we need to also keep updating the router and adding all the new routes we are creating to the router for example until now "/" route been occupied by createAccounts component, and the "/accounts" route is occupied by DisplayAccounts.js , now we add the third route "/accounts/:id" for the AccountDetails.js 



Let us begin coding the AccountDetails component!

As usual, the two useEffect hooks are common like in every component.

The second useEffect hook, like the previous component,DisplayAccounts is not empty, in it the specific account pertaining to that page is called, using the id parameter from the URL, and the details are stored in a state variable, specifically, balance item of the bankAccount is stored in another state variable so that it can easily be updated every time the balance changes, for example when we add more balance or withdraw the balance.


```
const[bankAccount,setBankAccount]=useState("")

const[balance,setBalance]=useState("")

const{id} =useParams(id)

const [loading,setLoading]=useState(true)

```

The function in the second useEffect hook

```
 await contract.methods.accounts(id) .call() 

.then((res)=>{

console.log(res)

setBankingAccount(res)

setBalance(res.balance)

})

.then(()=>{

setLoading(false)})

.catch((err)=>{

console.log(err)})
```


Now we have the data stored in our state variables we just display it someplace 



To, give an idea of the layout of the page let us divide the page into various columns, one in the extreme left to print the account details, there are various other grid boxes for each functionality that contain a simple form, for example, there is an additional balance grid box, a withdraw balance grid box, a transfer amount grid box and a box for transferring amount from one account to other, later we can add more grid boxes which contains buttons that redirect to pages for displaying transaction(last extras section) and the other one for performing loan transactions.





Now, let us move on to the second part of this module, and create a function in the backend to add virtual balance to our bank account.

We create a public payable addBalance function which takes inputs as the serial, amount, and the creator address.



Why these 3 inputs?

1. Serial number is required to increase the virtual balance of the virtual account. 

2. The amount is the amount to be passed that is to be added.

3. You need the creator address that is connected to Metamask to transfer actual ether from your Ganache account.



We need to increase the virtual balance by accessing the balance item of the particular account from the serialNumber and we also need to increase the bankBalance of the whole application present at the 0th index of the accounts mapping.

We need to also add a check to only update the virtual balance when the Metamask connected Ganache account balance is greater than the amount entered.



`Add balance code snippet:`
```
if(creator.balance>amount)

{

account[serialNumber].balance+=amount;

account[0].balance+=amount;

}
```


This is the simplest function we can create, we can complicate it later.



Now after displaying the account details, we start coding the add balance grid box on the frontend, it should contain a form input with the state variable balanceAdded as we have specified in previous examples, and also a submit button which onClick should fire a addBalance function which is similar to the syntax of our previous functions and should take the 3 input values.

We use the send method here and the from address is from the Metamask account and value is the balance to be added which should also be passed in the object. We need to pass this value in the send method since that amount of ether should be transferred from our Ganache account to the contract, if we don't specify the amount only a minimal amount of ether will be costed that will be the gas amount to perform the function from the backend.



Adding Balance :   Ether from Ganache -> Contract Address

​                                Virtual Balance of the account and Contract (Bank) are both increased since actual Ether flows from the Contract.

We have to also again call the accounts method with the key serial number, and then update the balance variable to instantly print the new balance in the account details grid section.





const addBalance=async(e)=>{

e.preventDefault();

`The addBalance is the state variable which we get from the addBalance form and the account is the Metamask connected account`
```
await contract.methods.addBalance(id,addBalance,account).send({from:account,value:addBalance})



.then((res)=>{

console.log(res)

})

.then(async()=>{

await contract.methods.accounts(id).call()

.then((res)=>{

setBalance(res.balance)

})

.catch((err)=>{

console.log(err)\})

})

.catch((err)=>{

console.log(err)

})}  
```


That's it congratulations you have successfully completed your fourth module.

<br>

----

### **Introducing the new feature=>Withdrawing Balance and Transfer Amount to other virtual accounts on the Bank**:



Welcome to the fifth module, in this module, we will further increase the operations we can perform in our Banking application, we add the Withdraw Balance feature and Transfer virtual money feature.

Now, the logic for this feature is slightly counter-intuitive on the frontend but pretty straightforward in the backend, we create a withdrawBalance function similar to the addBalance function taking the same 3 inputs as in the addBalance function but this function will be an external function  as it also needs to access the contract balance, and you cannot access the balance of a contract by being a part of the contract you need to access it from outside 



`Withdraw balance:`  

 Ether from the Contract -> Ganache account 

 Virtual balance of both the Contract(Bank) and the account are decreased since actual ether is transported out of the Contract.



Now, how to send ether from the Contract to any other ethereum account, well this took a while to figure out, but every address has two methods to access, one is the balance method and the other is the transfer method, now we use the transfer method here to transfer actual ether from the Contract to any other Ganache account(here the account connected to the Metamask account), 



Now, like the previous function, let us add a withdrawBalance function now according to intuition you need to subtract the amount that is passed from the frontend, and one more additional line must be added to transfer actual ether from the contract to the creator address which we pass in the withdrawBalance account.

Now, one check should be added though that the virtual account from which we are withdrawing balance should have an amount greater than the amount we want to withdraw.



`withdrawBalance function code snippet`

```
if(account[serialNumber].balance){

account[serialNumber].balance-=amount;

account[0].balance-=amount;
```


This is the syntax to transfer amount from the contract to the Ganache account connected to Metamask which is the creator account

```
_creator.transfer(amount);

}
```


For the frontend, let us go to our AccountDetails page let us go to another grid box, whereas done in previous components we create a form input field and a submit button the value of the form input field being the withdrawBalance state variable which will be passed in the backend function.



On the click of the submit button, we pass the withdrawBalance function on the frontend which has a similar syntax to the previous addBalance function but there are some minor differences, 



As you can notice that the value is not given, why?
Firstly, why do we need to use the send option when we are withdrawing balance, well that's the catch, to access any function from the backend solidity contract you need to use the send option and it will cost some amount of ether definitely and after you approve the Metamask transaction, in this case, the backend function is executed and actual ether is sent from your contract to the Ganache. 
```
await contract.methods.withdrawBalance(id,withdrawBalance,account).send({from:account})
```


After this you need to resolve the promise using the .then and .catch methods, you can follow the example given in the above addBalance function where you need to run another async function to get the updated Balance and set the state of the balance variable to that updated balance. You can check with your Ganache client that the amount has been added to it, proving that your withdrawal was successful. 



Now, let us implement the next functionality of this module, of transferring the virtual amount from one account to another, the logic for this is the simplest you can find among all the previous functions as there is no actual involvement of ether. 



The bank balance won't be increased or decreased as both the accounts are present on the bank, we just need to increase the virtual balance of the account we are transferring to and decrease the virtual balance of the account from which we are sending the amount.



Let, we quickly see the backend code for this functionality, we need to create a transferAmount function which is a public function in the backend which by intuition takes 3 inputs, any guesses ???



Well, it is the amount to be transferred, the serial number of the account from which the amount is being transferred, and the serial number of the account to which the amount is to be transferred.



We need to add one check before passing the function that is the amount that is passed should be less than the balance of the account from which it is being transferred.



The code snippet of the transferAmount function is given below 

`transferAmount code snippet`


```
if(accounts[serial_1].balance>amount)

{

accounts[serial_1].balance-=amount;

accounts[serial_2].balance+=amount;

}
```


Now let us complete the frontend code for this functionality, the same old process we need to create a form in a grid box, and in this form we need to take two inputs, one is the second account serial number to which you need to send the amount, and the other is the amount to transfer and on clicking of the submit button we need to pass a transferAmount function on the frontend.



This function takes the inputs from the form values and similar to the above functions we need to use the send option to run the function on the backend.

await contract.methods.transferAccount(amount,id,secondserialNumber).send({from:account})

and after this, we can use the similar .then and .catch methods to resolve this promise and run the function to again set the balance to updated balance, similar to the previous examples. 

 

That's it, great going you have completed your fifth module, now you just have one functionality left to code, the Loan functionality which is not complete and is open to PR's from you guys. 

<br>

----


### **Introducing the last feature=>Adding the Loans feature to our virtual Bank and Wrapping up:**



Let us start coding the last functionality, the Loans functionality, now we had thought a lot about how to implement this and we found a way that is not perfect and has vulnerabilities, hence this functionality is open to changes from the contributors.

Let's understand the basic logic of how we have implemented this functionality, we create two functions in the backend one is to approve the Loan and the other is to retrieve the loan amount in the number of installments we specify in the frontend. 

We basically transfer the virtual amount from the contract to the virtual bank account and then we use the setInterval function of Javascript and pass the retrieveLoan function which transfers the virtual balance back to the bank (in actuality the net virtual balance of the banking system neither increases nor decreases, hence even though the amount is transferred to the virtual account, there is no actual involvement of ether). 

The function in the backend where we create a public payable function that accepts the amount to be given as a loan and the serial number of the account as inputs and the function will increase the balance of the account associated with that serial number. The whole virtual balance and ether balance of the bank is constant as the virtual money is transferred from the bank to the account which is still present on the bank, so no increase or decrease in the overall currency takes place.

For, the retrieval of the amount, the function that works in the backend takes the installment amount(the total loan amount/number of installments) as one of the inputs and the serial number of the account associated with the loan as one of the input, and every time this function is passed it deducts the installment amount from the account associated. This function is passed in intervals using the setInterval function in the frontend. A condition can be passed in the frontend to pass this function until and unless the number of times it is passed is less than or equal to the number of installments.

This has loopholes because firstly the retrieve function can only be passed when the user is present on that particular component and if he navigates to another component the passing of the function terminates and the amount of loan taken in his account with the increased balance will prevail similar to the situation of minting currency from thin air, one more problem is that the division of the total loan amount and installments should be a whole number else, the retrieval function won't work since currently, solidity is not accepting floating-point numbers.



### 7.Additional Module=>

This is the last module for this project, where we just give you an idea of how to log in to every transaction that happens with your account. Ending this, we begin the open innovation period where you can complete your projects and add more functionality to them as you please, and submit them to us.

The idea behind building this is very similar to the way you have created and stored Accounts. Here, also you create a struct called Transactions and in that, you add a transaction type variable, a balance variable, an amount variable, a time variable, and the account serial number, which stand for the type of the transaction, the present balance, the amount involved in the transaction, the time at which the transaction occurred and the serial number of the account involved in the transaction.

Similar to how you created a mapping for all the accounts, you need to create a mapping for all the transactions which would be a uint to Transaction(struct) mapping. You would be adding transactions to this mapping whenever a transaction occurs, for example: when you are adding balance to your account you would add a transaction to the transaction mapping bypassing all the parameters of the struct like the time can also be found out (can be found in solidity), the transaction type would be an Add Balance Type Transaction, and the balance and amount could also be found out, the serial number of the account should also be passed from the frontend.

While printing the transactions on the frontend, we use the condition to print the transaction only if it belongs to that particular account number.

There is one more thing to keep in mind while printing transactions for the transfer of amount from one account to the other, since the transaction should be shown in both the accounts, we need to push 2 transactions to the transaction mapping.

----








