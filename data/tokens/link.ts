import { Faucet } from '../../domain/Faucet'
import { Token } from '../../domain/Token'

const chainlinkFaucetBase: Pick<Faucet, 'maintainer' | 'maintainerWebsite'> = {
  maintainer: 'Chainlink',
  maintainerWebsite: 'https://chain.link/'  
}

const RopstenFaucetChainlink: Faucet = {
  url: 'https://ropsten.chain.link/',
  ...chainlinkFaucetBase
}

const KovanFaucetChainlink: Faucet = {
  url: 'https://kovan.chain.link/',
  ...chainlinkFaucetBase
}

const RinkebyFaucetChainlink: Faucet = {
  url: 'https://rinkeby.chain.link',
  ...chainlinkFaucetBase
}

export const RopstenTokenChainlink: Token = {
  type: 'token',
  id: 'ropsten-link',
  aggregateId: 'link',
  title: 'Ropsten Chainlink',
  symbol: 'LINK',
  faucets: [
    RopstenFaucetChainlink
  ]
}

export const KovanTokenChainlink: Token = {
  type: 'token',
  id: 'kovan-link',
  aggregateId: 'link',
  title: "Kovan Chainlink",
  symbol: 'LINK',
  faucets: [
    KovanFaucetChainlink
  ]
}

export const RinkebyTokenChainlink: Token = {
  type: 'token',
  id: 'rinkeby-link',
  aggregateId: 'link',
  title: "Rinkeby Chainlink",
  symbol: 'LINK',
  faucets: [
    KovanFaucetChainlink
  ]
}