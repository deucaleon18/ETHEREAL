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


----



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