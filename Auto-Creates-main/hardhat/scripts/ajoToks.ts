import { ethers } from "hardhat";

async function saver() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const AjoToken = await ethers.getContractFactory("AjoToken");
  const ajoToken = await AjoToken.deploy(1000); 
  console.log("Target set to:", ajoToken.target);

      // Target set to: 0xc75B5339e114774ff651854ACBf4d5CeBD949669


}

saver()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });