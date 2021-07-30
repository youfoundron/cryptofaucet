import { Faucet } from "../../domain/Faucet";
import { Token } from "../../domain/Token";

const AlphajoresFaucetCelo: Faucet = {
  url: 'https://celo.org/developers/faucet',
  maintainer: 'Celo Foundation',
  maintainerWebsite: 'https://celo.org/'
}

export const CeloToken: Token = {
  type: 'token',
  id: 'celo',
  title: 'Celo',
  symbol: 'CELO',
  faucets: [
    AlphajoresFaucetCelo
  ]
}