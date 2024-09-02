import { ethers } from 'ethers';
import Abi from './abi.json';

const HARD_CODED_EPOCH = 306442; // Hard-coded epoch value

// Function to convert BigInt to a JSON-serializable format (string)
function serializeBigInt(data) {
  if (typeof data === 'bigint') {
    return data.toString();
  } else if (Array.isArray(data)) {
    return data.map(serializeBigInt);
  } else if (typeof data === 'object' && data !== null) {
    return Object.fromEntries(
      Object.entries(data).map(([key, value]) => [key, serializeBigInt(value)])
    );
  }
  return data;
}

export async function initializeContract() {
  try {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []); // Request access to MetaMask accounts

      const signer = provider.getSigner(); // Get the signer from the provider
      const address = await signer.getAddress(); // Get the address from the signer

      // Fetch the chain ID using the recommended method
      const chainId = await provider.send("eth_chainId", []);

      console.log("Chain ID:", chainId);

      const ContractAddress = "0x18B2A687610328590Bc8F2e5fEdDe3b582A49cdA";
      const contract = new ethers.Contract(
        ContractAddress,
        Abi,
        signer
      );

      console.log(contract);
      return { provider, signer, address, contract, chainId };
    } else {
      throw new Error("MetaMask not found");
    }
  } catch (error) {
    console.error('Error initializing contract:', error);
    throw error;
  }
}

export async function getBalance(contract, address) {
  const balance = await contract.balanceOf(address); // This might return a BigInt
  return serializeBigInt(balance); // Ensure the balance is JSON-serializable
}

export async function betBull(contract) {
  const BetBull = await contract.betBull(HARD_CODED_EPOCH, { gasLimit: 500000 });
  await BetBull.wait();
}

export async function betBear(contract) {
  const BetBear = await contract.betBear(HARD_CODED_EPOCH, { gasLimit: 500000 });
  await BetBear.wait();
}

export async function currentEpoch(contract) {
  const epoch = await contract.currentEpoch(); // This might return a BigInt
  return serializeBigInt(epoch); // Ensure the epoch is JSON-serializable
}
