import { Network } from '../domain/Network'
import { KovanTokenEth, RinkebyTokenEth, RopstenTokenEth } from './tokens/ether'
import { KovanTokenChainlink, RinkebyTokenChainlink, RopstenTokenChainlink } from './tokens/link'
import { SokolPOA } from './tokens/poa'

export const Ropsten: Network = {
  type: 'network',
  id: 'ropsten',
  title: 'Ropsten',
  description: "Ethereum's PoW testnet",
  blockExplorer: 'https://ropsten.etherscan.io/',
  tokens: [
    RopstenTokenChainlink,
    RopstenTokenEth
  ]
}

export const Kovan: Network = {
  type: 'network',
  id: 'kovan',
  title: "Kovan",
  description: "Ethereum's PoA testnet, started by Parity",
  blockExplorer: 'https://kovan.etherscan.io/',
  tokens: [
    KovanTokenEth,
    KovanTokenChainlink
  ]
}

export const Rinkeby: Network = {
  type: 'network',
  id: 'rinkeby',
  title: "Rinkeby",
  description: "Ethereum's PoA testnet, started by Geth",
  blockExplorer: 'https://rinkeby.etherscan.io/',
  tokens: [
    RinkebyTokenEth,
    RinkebyTokenChainlink
  ]
}

export const Sokol: Network = {
  type: 'network',
  id: 'sokol',
  title: 'Sokol',
  description: 'The Sokol Testnet provides an application testing environment as well as a test network for POA validator candidates.',
  blockExplorer: 'https://blockscout.com/poa/sokol',
  tokens: [
    SokolPOA
  ]
}