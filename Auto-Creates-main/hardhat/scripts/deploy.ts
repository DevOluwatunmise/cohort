import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying AutoSaver contract with the account:", deployer.address);

    const AutoSaver = await ethers.getContractFactory("AutoSaver");
    const autoSaver = await AutoSaver.deploy("");
     // Deploy the contract 

    console.log("Target set to:", autoSaver.target);

    // Target set to: 0x03055B87B8533C8CD06A41345cD3f7568872E98B
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});