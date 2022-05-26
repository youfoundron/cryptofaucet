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

const faucetRopstenEthKomputing: Faucet = {
  networkId: 'ethereum-ropsten',
  url: 'https://fauceth.komputing.org/',
  maintainer: 'Komputing',
  maintainerWebsite: 'https://komputing.org/'
}

const faucetRopstenEthParadigm: Faucet = {
  networkId: 'ethereum-ropsten',
  url: 'https://faucet.paradigm.xyz/',
  maintainer: 'Paradigm',
  maintainerWebsite: 'https://www.paradigm.xyz/'
}

const faucetKovanEthChainlink: Faucet = {
  networkId: 'ethereum-kovan',
  url: 'https://faucets.chain.link/kovan',
  maintainer: 'Chainlink',
  maintainerWebsite: 'https://www.chain.link/',
}

const faucetKovanEthParadigm: Faucet = {
  networkId: 'ethereum-kovan',
  url: 'https://faucet.paradigm.xyz/',
  maintainer: 'Paradigm',
  maintainerWebsite: 'https://www.paradigm.xyz/'
}

const faucetKovanEthParity: Faucet = {
  networkId: 'ethereum-kovan',
  url: 'https://faucet.kovan.network/',
  maintainer: 'Parity',
  maintainerWebsite: 'https://kovan-testnet.github.io/website/'
}

const faucetKovanEthGitter: Faucet = {
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

const faucetRinkebyEthAlchemy: Faucet = {
  networkId: 'ethereum-rinkeby',
  url: 'https://rinkebyfaucet.com/',
  maintainer: 'Alchemy',
  maintainerWebsite: 'https://www.alchemy.com/',
}

const faucetRinkebyEthChainlink: Faucet = {
  networkId: 'ethereum-rinkeby',
  url: 'https://faucets.chain.link/rinkeby',
  maintainer: 'Chainlink',
  maintainerWebsite: 'https://www.chain.link/',
}

const faucetRinkebyEthParadigm: Faucet = {
  networkId: 'ethereum-rinkeby',
  url: 'https://faucet.paradigm.xyz/',
  maintainer: 'Paradigm',
  maintainerWebsite: 'https://www.paradigm.xyz/'
}

const faucetGoerliEthAlchemy: Faucet = {
  networkId: 'ethereum-goerli',
  url: 'https://goerlifaucet.com/',
  maintainer: 'Alchemy',
  maintainerWebsite: 'https://www.alchemy.com/',
}

const faucetGoerliEthMuditGupta: Faucet = {
  networkId: 'ethereum-goerli',
  url: 'https://goerli-faucet.mudit.blog/',
  maintainer: 'Mudit Gupta',
  maintainerWebsite: 'https://mudit.blog/'
}

const faucetGoerliEthChainlink: Faucet = {
  networkId: 'ethereum-goerli',
  url: 'https://faucets.chain.link/goerli',
  maintainer: 'Chainlink',
  maintainerWebsite: 'https://www.chain.link/',
}

const faucetGoerliEthParadigm: Faucet = {
  networkId: 'ethereum-goerli',
  url: 'https://faucet.paradigm.xyz/',
  maintainer: 'Paradigm',
  maintainerWebsite: 'https://www.paradigm.xyz/'
}

const faucetSepoliaEth: Faucet = {
  networkId: 'ethereum-sepolia',
  url: 'https://faucet.sepolia.dev/',
  maintainer: 'Komputing',
  maintainerWebsite: 'https://komputing.org/'
}

export const tokenEther: Token = {
  logoPath: '/logos/ethereum-eth-logo.svg',
  title: 'Ether',
  description: 'The native token of the Ethereum network',
  symbol: 'ETH',
  faucets: [
    // Görli
    faucetGoerliEthAlchemy,
    faucetGoerliEthChainlink,
    faucetGoerliEthMuditGupta,
    faucetGoerliEthParadigm,
    // Kovan
    faucetKovanEthChainlink,
    faucetKovanEthGitter,
    faucetKovanEthParadigm,
    faucetKovanEthParity,
    // Rinkeby
    faucetRinkebyEthAlchemy,
    faucetRinkebyEthChainlink,
    faucetRinkebyEthGeth,
    faucetRinkebyEthParadigm,
    // Ropsten
    faucetRopstenEthDefiKaren,
    faucetRopstenEthDimensionsNetwork,
    faucetRopstenEthKomputing,
    faucetRopstenEthMetaMask,
    faucetRopstenEthParadigm,
    // Sepolia
    faucetSepoliaEth,
  ]
}
