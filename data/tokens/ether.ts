import { Faucet } from '../../domain/Faucet'
import { Token } from '../../domain/Token'

const faucetRopstenEthMetaMask: Faucet = {
  networkId: 'ethereum-ropsten',
  url: 'https://faucet.metamask.io/',
  maintainer: 'MetaMask',
  maintainerWebsite: 'https://metamask.io/'
}

const faucetRopstenEthDefiKaren: Faucet = {
  networkId: 'ethereum-ropsten',
  url: 'https://faucet.ropsten.be/',
  maintainer: '@defikaren',
  maintainerWebsite: 'https://twitter.com/defikaren',
}

const faucetRopstenEthDimensionsNetwork: Faucet = {
  networkId: 'ethereum-ropsten',
  url: 'https://faucet.dimensions.network/',
  maintainer: 'Dimensions Network',
  maintainerWebsite: 'https://dimensions.network/',
}

const faucetKovanEthParity: Faucet = {
  networkId: 'ethereum-kovan',
  url: 'https://faucet.kovan.network/',
  maintainer: 'Parity',
  maintainerWebsite: 'https://kovan-testnet.github.io/website/'
}

const faucetKovanEthParityGitter: Faucet = {
  networkId: 'ethereum-kovan',
  url: 'https://gitter.im/kovan-testnet/faucet',
  maintainer: 'Gitter',
  maintainerWebsite: 'https://kovan-testnet.github.io/website/'
}

const faucetRinkebyEthGeth: Faucet = {
  networkId: 'ethereum-rinkeby',
  url: 'https://faucet.rinkeby.io/',
  maintainer: 'Geth',
  maintainerWebsite: 'https://www.rinkeby.io/#stats',
}

export const tokenEther: Token = {
  type: 'token',
  id: 'eth',
  chainId: 'ethereum',
  logoPath: '/logos/ethereum-eth-logo.svg',
  title: 'Ether',
  description: 'The native token of the Ethereum network',
  symbol: 'ETH',
  faucets: [
    // Ropsten
    faucetRopstenEthMetaMask,
    faucetRopstenEthDimensionsNetwork,
    faucetRopstenEthDefiKaren,
    // Kovan
    faucetKovanEthParity,
    faucetKovanEthParityGitter,
    // Rinkeby
    faucetRinkebyEthGeth
  ]
}
