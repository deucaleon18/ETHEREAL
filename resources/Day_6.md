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