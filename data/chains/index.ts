import { Chain } from "../../domain/Chain"

export const chainAlgorand: Chain = {
  type: 'chain',
  id: 'algorand',
  title: 'Algorand',
  documentationWebsite: 'https://developer.algorand.org/docs/',
  networkIds: [
    'algorand-testnet'
  ]
}

export const chainAvalanche: Chain = {
  type: 'chain',
  id: 'avalanche',
  title: 'Avalanche',
  documentationWebsite: 'https://docs.avax.network/',
  networkIds: [
    'avalanche-fuji',
  ]
}

export const chainBitcoin: Chain = {
  type: 'chain',
  id: 'bitcoin',
  title: 'Bitcoin',
  description: 'Bitcoin is an innovative payment network and a new kind of money.',
  documentationWebsite: 'https://developer.bitcoin.org/reference/',
  networkIds: [
    'bitcoin-testnet',
  ]
}

export const chainCelo: Chain = {
  type: 'chain',
  id: 'celo-network',
  title: 'Celo',
  description: 'Celo is a mobile-first platform that makes financial dApps and crypto payments accessible to anyone with a mobile phone.',
  documentationWebsite: 'https://docs.celo.org/',
  networkIds: [
    'celo-alfajores'
  ]
}

export const chainEthereum: Chain = {
  type: 'chain',
  id: 'ethereum',
  title: 'Ethereum',
  description: 'Ethereum is the community-run technology powering the cryptocurrency, ether (ETH) and thousands of decentralized applications.',
  documentationWebsite: 'https://ethereum.org/en/developers/docs/',
  networkIds: [
    'ethereum-ropsten',
    'ethereum-rinkeby',
    'ethereum-kovan'
  ]
}

export const chainKadena: Chain = {
  type: 'chain',
  id: 'kadena',
  title: 'Kadena',
  documentationWebsite: 'https://docs.kadena.io/',
  networkIds: [
    'kadena-testnet'
  ]
}

export const chainFilecoin: Chain = {
  type: 'chain',
  id: 'filecoin',
  title: 'Filecoin',
  documentationWebsite: 'https://docs.filecoin.io/',
  networkIds: [
    'filecoin-calibration',
  ]
}

export const chainPOA: Chain = {
  type: 'chain',
  id: 'poa',
  title: 'POA',
  description: 'POA Core encompasses an EVM blockchain as well as product development for the entire Ethereum ecosystem.',
  documentationWebsite: 'https://www.poa.network/',
  networkIds: [
    'poa-sokol'
  ]
}

export const chainSolana: Chain = {
  type: 'chain',
  id: 'solana',
  title: 'Solana',
  documentationWebsite: 'https://docs.solana.com',
  networkIds: [
    'solana-testnet'
  ]
}

export const chainStacks: Chain = {
  type: 'chain',
  id: 'stacks',
  title: 'Stacks Network',
  documentationWebsite: 'https://docs.stacks.co/',
  networkIds: [
    'stacks-testnet',
  ]
}

export const chainXrpLedger: Chain = {
  type: 'chain',
  id: 'xrp-ledger',
  title: 'XRP Ledger',
  documentationWebsite: 'https://xrpl.org/docs.html',
  networkIds: [
    'xrp-testnet'
  ]
}

export const chainZcash: Chain = {
  type: 'chain',
  id: 'zcash',
  title: 'Zcash',
  description: 'Zcash is a digital currency with strong privacy features.',
  documentationWebsite: 'https://zcash.readthedocs.io/en/latest/index.html',
  networkIds: [
    'zcash-testnet'
  ]
}

export const allChains = [
  chainAlgorand,
  chainAvalanche,
  chainBitcoin,
  chainCelo,
  chainEthereum,
  chainKadena,
  chainPOA,
  chainSolana,
  chainStacks,
  chainXrpLedger,
  chainZcash
]

export default allChains
