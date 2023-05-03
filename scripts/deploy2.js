const hre = require("hardhat");

async function main() {
  const Speed = await hre.ethers.getContractFactory("Speed");

  const speed = await Speed.deploy(100000000,50);

  await speed.deployed();

  console.log("Speed Token contract address",speed.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//Speed contract address: 0xb52ED59834EfE6D26103ceeD781d5850bccAa74A
//Speed contract address: 0xe180D0Ecb493425d267e1A6d73c2C5Ce68a61940
//Speed contract address: 0xB07Cc8c09Df458fB9fF91ccB05d3afbcfA6AFBc8
//Speed contract address: 0x02C8578Ef7bf9698201b437Cc553aEFA155eb59A

//0x4d68122c4F68a69fB8dfc57F88213E9035D98bE8
//0xb9EEce220B2B168Bdc6aDcC8ae900Fc9A835E7Af
//0x1FA85B19624aD3647183D2311B483B5cDBDd8Ca7
//0x593aBd4cF2C735257BD0B94dF5E4cFB41c2F544f
//0x0cfbb394B6e9F73D8431c91F539dde1b1e32c091

