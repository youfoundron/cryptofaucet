import { Faucet } from "../../domain/Faucet";
import { Token } from "../../domain/Token";

const faucetAlfajoresCeloEuro: Faucet = {
  networkId: 'celo-alfajores',
  url: 'https://celo.org/developers/faucet',
  maintainer: 'Celo Foundation',
  maintainerWebsite: 'https://celo.org/'
}

export const tokenCeloEuro: Token = {
  type: 'token',
  id: 'ceur',
  chainId: 'celo-network',
  title: 'Celo Euro',
  symbol: 'cEUR',
  faucets: [
    faucetAlfajoresCeloEuro
  ]
}