require("@nomicfoundation/hardhat-toolbox");


require("dotenv").config();
// const dotenv = require("dotenv")
// dotenv.config()
/** @type import('hardhat/config').HardhatUserConfig */


const ALCHEMY_SEPO_URL = String(process.env.ALCHEMY_SEPO_URL);
const PRIVATE_KEY = String(process.env.PRIVATE_KEY);
module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: ALCHEMY_SEPO_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
