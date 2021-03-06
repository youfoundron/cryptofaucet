import { Chain, ChainId } from "../domain/Chain";
import { Network, NetworkId } from "../domain/Network";

export const data = {
  "algorand-testnet": {
    name: "Algorand Testnet",
    chainId: "algorand" as ChainId,
    blockExplorer: "https://testnet.algoexplorer.io/",
  },
  "arbitrum-rinkeby": {
    name: "Arbitrum Rinkeby",
    chainId: "arbitrum" as ChainId,
    blockExplorer: "https://testnet.arbiscan.io/",
  },
  "avalanche-fuji": {
    name: "Fuji",
    chainId: "avalanche" as ChainId,
    description: "Fuji is the Avalanche network's test network",
    blockExplorer: "https://testnet.snowtrace.io/",
    networkConfig: {
      networkName: "Avalanche FUJI C-Chain",
      newRpcUrl: "https://api.avax-test.network/ext/bc/C/rpc",
      chainId: 43113,
      symbol: "AVAX",
      explorer: "https://testnet.snowtrace.io/",
    },
  },
  "bitcoin-testnet": {
    name: "Bitcoin Testnet",
    chainId: "bitcoin" as ChainId,
    description:
      "The testnet is an alternative Bitcoin block chain to be used for testing",
    blockExplorer: "https://blockstream.info/testnet",
  },
  "cardano-testnet": {
    name: "Cardano",
    chainId: "cardano" as ChainId,
    blockExplorer: "https://testnet.cardanoscan.io/",
  },
  "celo-alfajores": {
    name: "Alfajores",
    chainId: "celo-network" as ChainId,
    description: "Test network for developers building on the Celo platform",
    blockExplorer: "https://alfajores-blockscout.celo-testnet.org",
  },
  "dogecoin-testnet": {
    name: "Dogecoin Testnet",
    chainId: "dogecoin" as ChainId,
    blockExplorer: "https://blockexplorer.one/dogecoin/testnet",
  },
  "ethereum-goerli": {
    name: "Görli",
    chainId: "ethereum" as ChainId,
    description:
      "A cross-client proof-of-authority testing network for Ethereum",
    blockExplorer: "https://goerli.etherscan.io/",
    officialWebsite: "https://goerli.net/",
  },
  "ethereum-kovan": {
    name: "Kovan",
    chainId: "ethereum" as ChainId,
    description: "Ethereum's PoA testnet, started by Parity",
    blockExplorer: "https://kovan.etherscan.io/",
    officialWebsite: "https://kovan-testnet.github.io/website/",
  },
  "ethereum-rinkeby": {
    name: "Rinkeby",
    chainId: "ethereum" as ChainId,
    description: "Ethereum's PoA testnet, started by Geth",
    blockExplorer: "https://rinkeby.etherscan.io/",
    officialWebsite: "https://www.rinkeby.io/#stats",
  },
  "ethereum-ropsten": {
    name: "Ropsten",
    chainId: "ethereum" as ChainId,
    description: "Ethereum's PoW testnet",
    blockExplorer: "https://ropsten.etherscan.io/",
  },
  "ethereum-sepolia": {
    name: "Sepolia",
    chainId: "ethereum" as ChainId,
    description: "A cross-client proof-of-work testing network for Ethereum",
    blockExplorer: "https://sepolia.etherscan.io/",
    officialWebsite: "https://sepolia.dev/",
  },
  "flow-testnet": {
    name: "Flow Testnet",
    chainId: "flow" as ChainId,
    blockExplorer: "https://docs.onflow.org/",
  },
  "filecoin-calibration": {
    name: "Calibration",
    chainId: "filecoin" as ChainId,
    officialWebsite: "http://www.calibration.fildev.network/",
    blockExplorer: "https://calibration.filscout.com/en",
  },
  "kadena-testnet": {
    name: "Kadena Testnet",
    chainId: "kadena" as ChainId,
    blockExplorer: "https://explorer.chainweb.com/testnet",
  },
  "litecoin-testnet": {
    name: "Litecoin Testnet",
    chainId: "litecoin" as ChainId,
    blockExplorer: "https://blockexplorer.one/litecoin/testnet",
  },
  "optimism-kovan": {
    name: "Optimistic Kovan",
    chainId: "optimism" as ChainId,
    blockExplorer: "https://kovan-optimistic.etherscan.io",
    networkConfig: {
      networkName: "Optimism Kovan (testnet)",
      newRpcUrl: "https://kovan.optimism.io",
      chainId: 69,
      symbol: "oETH",
      explorer: "https://kovan-optimistic.etherscan.io",
    },
  },
  "polygon-mumbai": {
    name: "Polygon Mumbai",
    chainId: "polygon" as ChainId,
    blockExplorer: "https://mumbai.polygonscan.com/",
  },
  "solana-testnet": {
    name: "Solana Testnet",
    chainId: "solana" as ChainId,
    blockExplorer: "https://explorer.solana.com/?cluster=testnet",
  },
  "stacks-testnet": {
    name: "Stacks Testnet",
    chainId: "stacks" as ChainId,
    blockExplorer: "https://explorer.stacks.co/?chain=testnet",
  },
  "xrp-testnet": {
    name: "XRP Testnet",
    chainId: "xrp-ledger" as ChainId,
    blockExplorer: "https://testnet.xrpl.org/",
  },
  "tezos-ithacanet": {
    name: "Ithacanet",
    chainId: "tezos" as ChainId,
    blockExplorer: "https://ithacanet.tzkt.io/",
  },
  "zcash-testnet": {
    name: "Zcash Testnet",
    chainId: "zcash" as ChainId,
    blockExplorer: "https://sochain.com/testnet/zcash",
  },
};

export const networksById: Record<NetworkId, Network> = data;
export const allNetworks: (Network & { id: NetworkId })[] = (
  Object.entries(networksById) as [NetworkId, Network][]
).map(([id, network]) => ({ id, ...network }));
