const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  const USDC_Address = "0x2c032aa43d119d7bf4adc42583f1f94f3bf3023a";
  // const IERC20 = await ethers.getContractFactory("IERC20");
  // const USDC_contract = await IERC20.attach(USDC_Address);
  // const balance = await USDC_contract.balanceOf(deployer);
  // console.log(`USDC Balance: ${ethers.parseUnits(balance, "ethers")} DAI`);
  console.log(`Deployer: ${await deployer.getAddress()}`);

  let ethBalance = await ethers.provider.getBalance(
    await deployer.getAddress()
  );
  console.log(`ETH balance: ${ethers.formatUnits(ethBalance, "ether")}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
