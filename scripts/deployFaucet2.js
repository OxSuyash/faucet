const hre = require("hardhat");

async function main() {
  const SpeedFaucet = await hre.ethers.getContractFactory("SpeedFaucet");

  const speedFaucet = await SpeedFaucet.deploy("0x0cfbb394B6e9F73D8431c91F539dde1b1e32c091");

  await speedFaucet.deployed();

  console.log("Speed Faucet contract address",speedFaucet.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//Speed Faucet contract address: 0xE06A452ebFbDBd7Deb154b0B0ab8AF656624ffe7
//Speed Faucet contract address: 0xCfe7c9B71C347771203118FDB6D6FC7870356d52
//Speed Faucet contract address: 0x5d1A4d477B6f2E1FffEf35543Ab3d6A7BAFbCAc6
//Speed Faucet contract address: 0xA4F2691bA3523085c048547c34308A8d6a1a41A9

//0xBDE4EB82e593278cafF3Db3154618CE7378C2B61
//0x9746313adE9d301fC32D6083b815fE80E2BC8384
//0x0eC967F4E975221D2c037bfC4Cfe940244a590F9
//0x5cb69B2C434c948925642c63c59c8cc932073B21
//0xF5b4e6227AB8cAf5369b90a878318c566Bfb9d0A

