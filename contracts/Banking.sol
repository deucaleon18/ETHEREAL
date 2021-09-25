// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;
// import "github.com/Arachnid/solidity-stringutils/strings.sol";
contract Banking {
//  using strings for *;
//Defining a struct to store Account details which will be mapped in the accounts page
address payable owner;
address payable mainAccount;
uint public serialNumber=0;
uint public transacNum=0;
uint public bankBalance=1000000;
uint public ownerBal;

 constructor() public{   
        owner=msg.sender;
        mainAccount=address(0xdaB74b7DbA038eec5A99CE26257668CB86f6EC0C);
    } 
//     function getOwner(
//     ) public view returns (address) {    
//         return owner;
//     }
  
//    function getMainAccount(
//     ) public view returns (address) {    
//         return mainAccount;
//     }
//Defined condition to check that the owner who has logged in can only do these transactions 
modifier onlyOwner{
    require(msg.sender==owner);
   _;
}
//Defining a struct to store the account details 
struct Account{
  uint serial;
//   uint createdAt;
  string name;
  string location;
//   bytes32 accountName;

  uint balance;
  bool doesExist;
}
//Defining a struct to store transaction record
struct Transaction{
    uint transac;
    string senderAccountName;
    string receiverAccountName;
    uint amountTransacted;
    uint transactedAt;
}
// All the mappings present in the contract 
mapping(uint=>Account) public accounts;
mapping(uint=>Transaction)public transactions;
mapping(uint=>uint)public balances;

event AccountCreated(uint _serialNumber,bytes32 _accountName,bytes32 _name,uint _balance);
event TransactionCompleted(uint _balance,uint _transacNumber,bytes32 _receiver,bytes32 _sender);
event LoanGenerated (uint _amount,bytes32 _accountName);
// error InsufficientFunds (bytes32 _accountName);
function createAccount(string memory _name,string memory _location) public payable 

{
serialNumber++;
accounts[serialNumber]=Account(serialNumber,_name,_location,2,true);
balances[serialNumber]+=2;
}


function addBalance(uint _serial,uint _amount )public payable
 {

balances[_serial]+=_amount;
accounts[_serial].balance+=_amount;
bankBalance+=_amount;

}

function withdrawBalance(uint _serial,uint _amount,address mainAccount)public payable

 {

balances[_serial]-=_amount;
accounts[_serial].balance-=_amount;
bankBalance-=_amount;

}

function transactAmount(uint _amount,uint _serial_2,uint _serial) public payable 

{
balances[_serial]-=_amount;
accounts[_serial].balance-=_amount;

balances[_serial_2]+=_amount;
accounts[_serial_2].balance+=_amount;

}

function getLoan(uint _amount,uint _serial) public payable


{
balances[_serial]+=_amount;
accounts[_serial].balance+=_amount;

bankBalance-=_amount;
}

function getBalance(uint _serial) public view 


returns(uint){

 uint bal=accounts[_serial].balance;
 return bal;
}






// function sendBalance(address payable _receiver,uint _amount) public payable 

// {
//  balances[msg.sender]-=_amount;
//  balances[_receiver]+=_amount;
// }



}





// var instance=await Banking.deployed()


// var owner=await instance.getOwner()
// var main =await instance.getMainAccount()

// await instance.sendBalance()