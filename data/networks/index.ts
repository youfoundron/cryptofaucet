import { Network } from '../../domain/Network'

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

export const networkZcashTestnet: Network = {
  type: 'network',
  id: 'zcash-testnet',
  title: 'Zcash Testnet',
  description: 'An alternative blockchain that attempts to mimic the main Zcash network for testing purposes',
  blockExplorer: 'https://sochain.com/testnet/zcash',
}

export const allNetworks = [
  networkBitcoinTestnet,
  networkCeloAlfajores,
  networkEthereumKovan,
  networkEthereumRinkeby,
  networkEthereumRopsten,
  networkFilecoinCalibration,
  networkPOASokol,
  networkZcashTestnet
]

export default allNetworks
