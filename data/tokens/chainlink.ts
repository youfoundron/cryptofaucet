import { Faucet } from '../../domain/Faucet'
import { Token } from '../../domain/Token'

const chainlinkFaucetBase: Pick<Faucet, 'maintainer' | 'maintainerWebsite'> = {
  maintainer: 'Chainlink',
  maintainerWebsite: 'https://chain.link/'  
}

const faucetRopstenChainlink: Faucet = {
  networkId: 'ethereum-ropsten',
  url: 'https://ropsten.chain.link/',
  ...chainlinkFaucetBase
}

const faucetKovanChainlink: Faucet = {
  networkId: 'ethereum-kovan',
  url: 'https://kovan.chain.link/',
  ...chainlinkFaucetBase
}

const faucetRinkebyChainlink: Faucet = {
  networkId: 'ethereum-rinkeby',
  url: 'https://faucets.chain.link/rinkeby',
  ...chainlinkFaucetBase
}

export const tokenChainlink: Token = {
  type: 'token',
  id: 'ropsten-link',
  chainId: 'ethereum',
  logoPath: '/logos/chainlink-link-logo.svg',
  title: 'Chainlink',
  symbol: 'LINK',
  faucets: [
    faucetRopstenChainlink,
    faucetKovanChainlink,
    faucetRinkebyChainlink
  ]
}
