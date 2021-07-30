import { Faucet } from "../../domain/Faucet";
import { Token } from "../../domain/Token";

const AlphajoresFaucetCeloEUR: Faucet = {
  url: 'https://celo.org/developers/faucet',
  maintainer: 'Celo Foundation',
  maintainerWebsite: 'https://celo.org/'
}

export const CeloEuroToken: Token = {
  type: 'token',
  id: 'ceur',
  title: 'Celo Euro',
  symbol: 'cEUR',
  faucets: [
    AlphajoresFaucetCeloEUR
  ]
}