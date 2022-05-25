import { Faucet } from "../../domain/Faucet";
import { Token } from "../../domain/Token";

const faucetFujiAvalanche: Faucet = {
  networkId: 'avalanche-fuji',
  url: 'https://faucet.avax.network/',
  maintainer: 'Avalanche Foundation',
  maintainerWebsite: 'https://kadena.io/'
}

export const tokenAvalanche: Token = {
  type: 'token',
  id: 'avalanche',
  chainId: 'avalanche',
  title: 'Avalanche',
  logoPath: '/logos/avalanche-avax-logo.svg',
  symbol: 'AVAX',
  faucets: [
    faucetFujiAvalanche
  ]
}