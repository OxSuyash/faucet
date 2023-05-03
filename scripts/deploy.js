const hre = require("hardhat");

async function main() {
  const Range = await hre.ethers.getContractFactory("Range");

  const range = await Range.deploy(100000000,50);

  await range.deployed();

  console.log("Range Token contract address",range.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//Range contract address: 0x9fAb0d3Cd139b959EE311a6E0A5B6475438624c1
//Range contract address: 0x75B1f81451FE750Ed4d7C77805Be14AB9707453f
//Range contract address: 0xb582543bE048fE251969259aD580337c550F42A3
//Range contract address: 0xE5DcAb0821633c694FBD99F4C9d88AD712ac1301
//Range contract address: 0x0a70549DE6B8DF54F862e55220b2063A717DBFbD

//0x3e0B81f391A36D85163C05FdB479F0Cd451701dD
//0x9E78B47a8C0170A8f0275c4FC1e50eCc0a286408
//0x5a760dbAA5e17C8DCD8937d4caBa5bAe7774f72F
//0xc0132694f641FBd26DB409d9Ab677ad62aA17E7F
//0x8916C6330DD9F45e9109Dc7F2F57eF2499f97516
//0xae0152AC71aAD2c309cD966f823D28B1E81E5d1b
