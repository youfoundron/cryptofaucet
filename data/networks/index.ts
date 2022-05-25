import { Network } from '../../domain/Network'

export const networkAlgorandTestnet: Network = {
  type: 'network',
  id: 'algorand-testnet',
  title: 'Algorand Testnet',
  blockExplorer: 'https://testnet.algoexplorer.io/',
}

export const networkAvalancheFuji: Network = {
  type: 'network',
  id: 'avalanche-fuji',
  title: 'Fuji',
  blockExplorer: 'https://testnet.snowtrace.io/',
  networkConfig: {
    networkName: 'Avalanche FUJI C-Chain',
    newRpcUrl: 'https://api.avax-test.network/ext/bc/C/rpc',
    chainId: 43113,
    symbol: 'AVAX',
    explorer: 'https://testnet.snowtrace.io/'
  }
}

export const networkBitcoinTestnet: Network = {
  type: 'network',
  id: 'bitcoin-testnet',
  title: 'Bitcoin Testnet',
  description: 'The testnet is an alternative Bitcoin block chain to be used for testing',
  blockExplorer: 'https://blockstream.info/testnet',
}

export const networkCeloAlfajores: Network = {
  type: 'network',
  id: 'celo-alfajores',
  title: 'Alfajores',
  description: 'Test network for developers building on the Celo platform',
  blockExplorer: 'https://alfajores-blockscout.celo-testnet.org',
}

export const networkEthereumGoerli: Network = {
  type: 'network',
  id: 'ethereum-goerli',
  title: "Görli",
  description: "A cross-client proof-of-authority testing network for Ethereum",
  blockExplorer: "https://goerli.etherscan.io/",
  officialWebsite: 'https://kovan-testnet.github.io/website/',
}

export const networkEthereumKovan: Network = {
  type: 'network',
  id: 'ethereum-kovan',
  title: "Kovan",
  description: "Ethereum's PoA testnet, started by Parity",
  blockExplorer: 'https://kovan.etherscan.io/',
  officialWebsite: "https://goerli.net/",
}

export const networkEthereumRinkeby: Network = {
  type: 'network',
  id: 'ethereum-rinkeby',
  title: "Rinkeby",
  description: "Ethereum's PoA testnet, started by Geth",
  blockExplorer: 'https://rinkeby.etherscan.io/',
  officialWebsite: "https://www.rinkeby.io/#stats"
}

export const networkEthereumRopsten: Network = {
  type: 'network',
  id: 'ethereum-ropsten',
  title: 'Ropsten',
  description: "Ethereum's PoW testnet",
  blockExplorer: 'https://ropsten.etherscan.io/',
}

export const networkEthereumSepolia: Network = {
  type: 'network',
  id: 'ethereum-sepolia',
  title: 'Sepolia',
  description: 'A cross-client proof-of-work testing network for Ethereum',
  blockExplorer: 'https://sepolia.etherscan.io/',
  officialWebsite: 'https://sepolia.dev/',
}

export const networkFilecoinCalibration: Network = {
  type: 'network',
  id: 'filecoin-calibration',
  title: 'Calibration',
  officialWebsite: 'http://www.calibration.fildev.network/',
  blockExplorer: 'https://calibration.filscout.com/en',
}

export const networkPOASokol: Network = {
  type: 'network',
  id: 'poa-sokol',
  title: 'Sokol',
  description: 'The Sokol Testnet provides an application testing environment as well as a test network for POA validator candidates.',
  blockExplorer: 'https://blockscout.com/poa/sokol',
}

export const networkKadenaTestnet: Network = {
  type: 'network',
  id: 'kadena-testnet',
  title: 'Kadena Testnet',
  blockExplorer: 'https://explorer.chainweb.com/testnet',
}

export const networkSolanaTestnet: Network = {
  type: 'network',
  id: 'solana-testnet',
  title: 'Solana Testnet',
  blockExplorer: 'https://explorer.solana.com/?cluster=testnet'
}

export const networkStacksTestnet: Network = {
  type: 'network',
  id: 'stacks-testnet',
  title: 'Stacks Testnet',
  blockExplorer: 'https://explorer.stacks.co/?chain=testnet'
}

export const networkXrpTestnet: Network = {
  type: 'network',
  id: 'xrp-testnet',
  title: 'XRP Testnet',
  blockExplorer: 'https://testnet.xrpl.org/'
}

export const networkZcashTestnet: Network = {
  type: 'network',
  id: 'zcash-testnet',
  title: 'Zcash Testnet',
  description: 'An alternative blockchain that attempts to mimic the main Zcash network for testing purposes',
  blockExplorer: 'https://sochain.com/testnet/zcash',
}

export const allNetworks = [
  networkAlgorandTestnet,
  networkAvalancheFuji,
  networkBitcoinTestnet,
  networkCeloAlfajores,
  networkEthereumGoerli,
  networkEthereumKovan,
  networkEthereumRinkeby,
  networkEthereumRopsten,
  networkEthereumSepolia,
  networkFilecoinCalibration,
  networkPOASokol,
  networkKadenaTestnet,
  networkSolanaTestnet,
  networkStacksTestnet,
  networkXrpTestnet,
  networkZcashTestnet
]

export default allNetworks
