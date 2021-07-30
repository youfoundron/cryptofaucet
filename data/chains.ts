import { Chain } from "../domain/Chain"
import { Ropsten, Rinkeby, Kovan, Sokol, ZcashTestnet, Alphajores } from "./networks"

export const Ethereum: Chain = {
  type: 'chain',
  id: 'ethereum',
  title: 'Ethereum',
  description: 'Ethereum is the community-run technology powering the cryptocurrency, ether (ETH) and thousands of decentralized applications.',
  documentationWebsite: 'https://ethereum.org/en/developers/docs/',
  networks: [
    Ropsten,
    Rinkeby,
    Kovan,
  ]
}

export const POA: Chain = {
  type: 'chain',
  id: 'poa',
  title: 'POA',
  description: 'POA Core encompasses an EVM blockchain as well as product development for the entire Ethereum ecosystem.',
  documentationWebsite: 'https://www.poa.network/',
  networks: [
    Sokol
  ]
}

export const Zcash: Chain = {
  type: 'chain',
  id: 'zcash',
  title: 'Zcash',
  description: 'Zcash is a digital currency with strong privacy features.',
  documentationWebsite: 'https://zcash.readthedocs.io/en/latest/index.html',
  networks: [
    ZcashTestnet
  ]
}

export const Celo: Chain = {
  type: 'chain',
  id: 'celo-network',
  title: 'Celo',
  description: 'Celo is a mobile-first platform that makes financial dApps and crypto payments accessible to anyone with a mobile phone.',
  documentationWebsite: 'https://docs.celo.org/',
  networks: [
    Alphajores
  ]
}
