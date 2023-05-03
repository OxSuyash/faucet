const hre = require("hardhat");

async function main() {
  const RangeFaucet = await hre.ethers.getContractFactory("RangeFaucet");

  const rangeFaucet = await RangeFaucet.deploy("0xae0152AC71aAD2c309cD966f823D28B1E81E5d1b");

  await rangeFaucet.deployed();

  console.log("Range Faucet contract address",rangeFaucet.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//Range Faucet contract address: 0x4a3a4a1342d34049AAd8AE162B3Edc6cb51b1BdD
//Range Faucet contract address: 0x25dc043558A8dE98635B51a4e1c9d68f339ec679
//Range Faucet contract address: 0x36a91fA9eC07b9F585e22858107Af7d447e3d326
//Range Faucet contract address: 0x0806aA1CC5d78a88af430FDEf717a981E64Ff533
//Range Faucet contract address: 0xE24692bf2482F163f210CBB3E3Cd3299971b46f4

//0x4A16EEc62CC1e8D6747Cea2AF586E5AA9106DDc7
//0x428d0A755c1153ACF73F2d7Eb0A61950E4d84B9A
//0xf2C730C2717C3b664B5ab99918463804d633E683
//0x086d9a383807154C9e8fca0f42791c4cA716dFb1
//0x1e3398b61053E220ac05a38B1E8A1ea37630ED1e
//0xc5b221cCa41404a7629614b4308E5adB1E550aE1
//0x1F0aAE3DE02488b66953e6CE9cC5Fef028D22549
