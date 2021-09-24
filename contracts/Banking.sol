// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;


contract Banking {





//Defining a struct to store Account details which will be mapped in the accounts page

address payable owner;
address payable mainAccount;


uint public ownerBal;


 constructor() public{   
        owner=msg.sender;
        mainAccount=address(0xdaB74b7DbA038eec5A99CE26257668CB86f6EC0C);

    }
  

    function getOwner(
    ) public view returns (address) {    
        return owner;
    }
  
   function getMainAccount(
    ) public view returns (address) {    
        return mainAccount;
    }
  



//Defined condition to check that the owner who has logged in can only do these transactions 

// modifier onlyOwner{
//     require(msg.sender==owner);
//    _;
// }

struct Account{
  uint serialNumber;
  uint createdAt;
  bytes32 name;
  bytes32 location;
  bytes32 accountName;
  uint balance;
  bool doesExist;
}


//Defining a struct to store transaction record
struct Transaction{
    uint transacNumber;
    bytes32 senderAccountName;
    bytes32 receiverAccountName;
    uint amountTransacted;
    uint transactedAt;
}


mapping(bytes32=>Account) public accounts;

mapping(uint=>Transaction)public transactions;

mapping(address=>uint)public balances;

event AccountCreated(uint _serialNumber,bytes32 _accountName,bytes32 _name,uint _balance);
event TransactionCompleted(uint _balance,uint _transacNumber,bytes32 _receiver,bytes32 _sender);
event LoanGenerated (uint _amount,bytes32 _accountName);




// error InsufficientFunds (bytes32 _accountName);



// function createAccount(bytes32  _name,bytes32  _location) public payable onlyOwner{

// }

// function addBalance(bytes32 _accountName,uint _amount )public onlyOwner{

// }


// function withdrawBalance(bytes32 _accountName,uint _amount)public onlyOwner{

// }


// function transactAmount(uint _amount,bytes32  _receiverAccountName) public payable onlyOwner {


// }


// function getLoan(uint amount) public onlyOwner{

 
// }

// function getBalance() public view onlyOwner returns(uint){

//  uint bal=owner.balance;
 
//  return bal;
// }

function sendBalance(address payable _receiver,uint _amount) public payable 

{
 
 balances[msg.sender]-=_amount;
 balances[_receiver]+=_amount;

 
}



}





// var instance=await Banking.deployed()


// var owner=await instance.getOwner()
// var main =await instance.getMainAccount()

// await instance.sendBalance()