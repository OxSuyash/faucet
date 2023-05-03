//contracts/Faucet.sol
//SPDX-License-Identifier:MIT

pragma solidity >=0.5.0 <0.9.0;

// import "@openzeppelin/contracts/token/ERC20/IERC20.sol";


interface IERC20 {
    function transfer(address to, uint amount) external returns(bool);
    function balanceOf(address account) external view returns(uint);

    event Transfer(address indexed from, address indexed to, uint value);
}

contract SpeedFaucet{
    address payable owner;

    IERC20 public token;

    uint public withdrawalAmount = 100 * (10**18);

    uint public lockTime = 5 minutes;

    event Withdrawal(address indexed to, uint indexed amount);

    event Deposit(address indexed from, uint indexed amount);

    mapping(address=>  uint) nextAccessTime;


    constructor(address tokenAddress) payable {
        token = IERC20(tokenAddress); 
        owner = payable(msg.sender);   
    }

    function requestSpeed() public {
        require(msg.sender != address(0), "Invalid Account, please enter valid account address");
        require(token.balanceOf(address(this)) >= withdrawalAmount, "Insufficient balance in the faucet");
        require(block.timestamp >= nextAccessTime[msg.sender], "You have just requested tokens. To request more tokens please try after some time.");

        nextAccessTime[msg.sender] = block.timestamp + lockTime;
        token.transfer(msg.sender, withdrawalAmount);
    }

    receive() external payable{
        emit Deposit(msg.sender, msg.value);
    }

    function getBalance() external view returns(uint) {
        return token.balanceOf(address(this));
        
    }

    function userBalance() public view returns(uint) {
        return token.balanceOf(msg.sender);
        
    }

    function setWithdrawAmount(uint _amount) public onlyOwner{
        withdrawalAmount = _amount * (10**18);
    }

    function setLockTime(uint time) public onlyOwner {
        lockTime = time * 1 minutes;
    }

    function withdraw() external onlyOwner{
        emit Withdrawal(msg.sender, token.balanceOf(address(this)));
        token.transfer(msg.sender, token.balanceOf(address(this)));
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can change this value");
        _;
    }
}