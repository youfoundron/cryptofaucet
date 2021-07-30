import { Faucet } from '../../domain/Faucet'
import { Token } from '../../domain/Token'

const SokolFaucetSPOA: Faucet = {
  url: 'https://faucet.poa.network/',
  maintainer: 'POA Network',
  maintainerWebsite: 'https://www.poa.network/for-developers/developer-resourses#poa-sokol-testnet',
}

export const SokolPOA: Token = {
  type: 'token',
  id: 'spoa',
  title: 'POA Sokol',
  symbol: 'SPOA',
  faucets: [
    SokolFaucetSPOA
  ]
}