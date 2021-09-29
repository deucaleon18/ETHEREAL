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