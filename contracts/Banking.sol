// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

// import "github.com/Arachnid/solidity-stringutils/strings.sol";
contract Banking {
    //  using strings for *;



    //The owner of the contract
    address payable owner;
    uint256 public serialNumber = 0;
    uint256 public transacNum = 0;
    uint256 public bankBalance=0;




    // constructor() public {
    //     owner = msg.sender;
    // }

    
    function accountLogin(address payable _creator)public {
       owner=_creator;
    }
    



    //Defined condition to check that the owner who has logged in can only do these transactions
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }




    //Defining a struct to store the account details
    struct Account {
        uint256 serial;
        uint createdAt;
        string name;
        string location;
        address creator;
        //   bytes32 accountName;
        uint256 balance;
        bool doesExist;
    }

    //Defining a struct to store transaction record
    struct Transaction {
        uint256 transac;
        string senderAccountName;
        string receiverAccountName;
        uint256 amountTransacted;
        uint256 transactedAt;
    }

    // All the mappings present in the contract
    mapping(uint256 => Account) public accounts;
    mapping(uint256 => Transaction) public transactions;
    mapping(uint256 => uint256) public balances;

    event AccountCreated(
        uint256 _serialNumber,
        bytes32 _accountName,
        bytes32 _name,
        uint256 _balance
    );

    event TransactionCompleted(
        uint256 _balance,
        uint256 _transacNumber,
        bytes32 _receiver,
        bytes32 _sender
    );
    event LoanGenerated(uint256 _amount, bytes32 _accountName);

    // error InsufficientFunds (bytes32 _accountName);



    //Function to create account , the 2 ETH balance will be taken from your ethereum account and deposited to the banking contract 
    function createAccount(address payable _creator,string memory _name, string memory _location)
        public
        payable
        onlyOwner
    {
        serialNumber++;
        accounts[serialNumber] = Account(
            serialNumber,
            block.timestamp,
            _name,
            _location,
            _creator,
            2,
            true
        );
        balances[serialNumber] += 2;
        bankBalance+=2;
    }



//Function to add balance to your existing acccount ,the balance will be taken from your ethereum account
    function addBalance(uint256 _serial, uint256 _amount) public payable onlyOwner{
        balances[_serial] += _amount/1000000000000000000;
        accounts[_serial].balance += _amount/1000000000000000000;
        bankBalance+=_amount/1000000000000000000;
    }
    



//Function to withdraw balance from your existing accounts, the balance will be transferred to your blockchain account
    function withdrawBalance (
        uint _serial,
        uint256 _amount,
        address payable _ownerAccount
    ) external payable  onlyOwner returns  (bool _success)  {
        _ownerAccount.transfer(_amount);
        balances[_serial]-=_amount/1000000000000000000;
        accounts[_serial].balance-=_amount/1000000000000000000;
        bankBalance-=_amount/1000000000000000000;
        return true;
    }





//Function to virtually send money from one bank account to other 
    function transactAmount(
        uint256 _amount,
        uint256 _serial_2,
        uint256 _serial
    ) public payable  onlyOwner {
        balances[_serial] -= _amount;
        accounts[_serial].balance -= _amount;

        balances[_serial_2] += _amount;
        accounts[_serial_2].balance += _amount;
    }


//Function to get a loan from the bank the accounts will be virtually updated but the actual ETH will only be transferred if you want to withdraw the amount 
    function getLoan(uint256 _amount, uint256 _serial)  public payable  onlyOwner  {
        balances[_serial] += _amount/1000000000000000000;
        accounts[_serial].balance += _amount/1000000000000000000;

        bankBalance -= _amount/1000000000000000000;
    }



//Simple spare function to getBalance of any of the serial accounts won't be of much use but let's see
    function getBalance(uint256 _serial) public view   onlyOwner returns (uint256) {
        uint256 bal = accounts[_serial].balance;
        return bal;
    }


//Function to get the msg.sender's ETH balance
    function getSenderBalance(address payable _account)
        external
        view
        
        returns (uint256)
    {
        return _account.balance;
    }


//Function to get the contract's existing balance
    function getContractBalance() external view returns (uint256) {
        return address(this).balance;
    }

   



//Function to get the owner

function getOwner() public view  onlyOwner returns(address){
  return msg.sender;
}

}







//Terminal commands for truffle 

// var instance=await Banking.deployed()

// var owner=await instance.getOwner()
// var main =await instance.getMainAccount()

// await instance.sendBalance()


