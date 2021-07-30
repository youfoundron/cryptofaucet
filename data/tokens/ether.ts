import { Faucet } from '../../domain/Faucet'
import { Token } from '../../domain/Token'

const RopstenFaucetEthMetaMask: Faucet = {
  url: 'https://faucet.metamask.io/',
  maintainer: 'MetaMask',
  maintainerWebsite: 'https://metamask.io/'
}

const RopstenFaucetEthDefiKaren: Faucet = {
  url: 'https://faucet.ropsten.be/',
  maintainer: '@defikaren',
  maintainerWebsite: 'https://twitter.com/defikaren',
}

const RopstenFaucetEthDimensionsNetwork: Faucet = {
  url: 'https://faucet.dimensions.network/',
  maintainer: 'Dimensions Network',
  maintainerWebsite: 'https://dimensions.network/',
}

const KovanFaucetEthParity: Faucet = {
  url: 'https://faucet.kovan.network/',
  maintainer: 'Parity',
  maintainerWebsite: 'https://kovan-testnet.github.io/website/'
}

const KovanFaucetEthParityGitter: Faucet = {
  url: 'https://gitter.im/kovan-testnet/faucet',
  maintainer: 'Gitter',
  maintainerWebsite: 'https://kovan-testnet.github.io/website/'
}

const RinkebyFaucetEthGeth: Faucet = {
  url: 'https://faucet.rinkeby.io/',
  maintainer: 'Geth',
  maintainerWebsite: 'https://www.rinkeby.io/#stats',
}

export const RopstenTokenEth: Token = {
  type: 'token',
  id: 'ropsten-eth',
  aggregateId: 'eth',
  title: 'Ropsten Ether',
  symbol: 'ETH',
  faucets: [
    RopstenFaucetEthMetaMask,
    RopstenFaucetEthDimensionsNetwork,
    RopstenFaucetEthDefiKaren
  ]
}

export const KovanTokenEth: Token = {
  type: 'token',
  id: 'kovan-eth',
  aggregateId: 'eth',
  title: 'Kovan Ether',
  symbol: 'ETH',
  faucets: [
    KovanFaucetEthParity,
    KovanFaucetEthParityGitter
  ]
}

export const RinkebyTokenEth: Token = {
  type: 'token',
  id: 'rinkeby-eth',
  aggregateId: 'eth',
  title: 'Rinkeby Ether',
  symbol: 'ETH',
  faucets: [
    RinkebyFaucetEthGeth
  ]
}