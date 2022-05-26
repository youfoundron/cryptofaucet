import { Faucet } from '../../domain/Faucet'
import { Token } from '../../domain/Token'

const faucetSokolPOA: Faucet = {
  networkId: 'poa-sokol',
  url: 'https://faucet.poa.network/',
  maintainer: 'POA Network',
  maintainerWebsite: 'https://www.poa.network/for-developers/developer-resourses#poa-sokol-testnet',
}

export const tokenPOA: Token = {
  type: 'token',
  id: 'spoa',
  chainId: 'poa',
  title: 'PoA Token',
  symbol: 'POA',
  faucets: [
    faucetSokolPOA
  ]
}