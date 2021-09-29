
### **Adding new features =>Displaying Accounts,Account Details and Adding Balance :**



Welcome to the fourth module, now let us start coding the component to display the accounts (only created using this particular Metamask address)



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
