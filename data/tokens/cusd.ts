import { Faucet } from "../../domain/Faucet";
import { Token } from "../../domain/Token";

const AlphajoresFaucetCeloUSD: Faucet = {
  url: 'https://celo.org/developers/faucet',
  maintainer: 'Celo Foundation',
  maintainerWebsite: 'https://celo.org/'
}

export const CeloDollarToken: Token = {
  type: 'token',
  id: 'cusd',
  title: 'Celo Dollar',
  symbol: 'cUSD',
  faucets: [
    AlphajoresFaucetCeloUSD
  ]
}