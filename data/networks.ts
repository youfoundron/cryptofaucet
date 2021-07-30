import { Network } from '../domain/Network'
import { CeloToken } from './tokens/celo'
import { CeloEuroToken } from './tokens/ceur'
import { CeloDollarToken } from './tokens/cusd'
import { KovanTokenEth, RinkebyTokenEth, RopstenTokenEth } from './tokens/ether'
import { KovanTokenChainlink, RinkebyTokenChainlink, RopstenTokenChainlink } from './tokens/link'
import { SokolPOA } from './tokens/poa'
import { TestnetZEC } from './tokens/zcash'

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

export const ZcashTestnet: Network = {
  type: 'network',
  id: 'zcash-testnet',
  title: 'Zcash Testnet',
  description: 'The Zcash testnet is an alternative blockchain that attempts to mimic the main Zcash network for testing purposes.',
  blockExplorer: 'https://sochain.com/testnet/zcash',
  tokens: [
    TestnetZEC
  ]
}

export const Alphajores: Network = {
  type: 'network',
  id: 'celo-alphajores',
  title: 'Alphajores',
  description: 'The Alfajores Testnet is a Celo test network for developers building on the Celo platform.',
  blockExplorer: 'https://alfajores-blockscout.celo-testnet.org',
  tokens: [
    CeloToken,
    CeloDollarToken,
    CeloEuroToken,
  ]
}