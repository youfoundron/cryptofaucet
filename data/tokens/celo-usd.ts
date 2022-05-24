import { Faucet } from "../../domain/Faucet";
import { Token } from "../../domain/Token";

const faucetAlfajoresCeloDollar: Faucet = {
  networkId: 'celo-alfajores',
  url: 'https://celo.org/developers/faucet',
  maintainer: 'Celo Foundation',
  maintainerWebsite: 'https://celo.org/'
}

export const tokenCeloDollar: Token = {
  type: 'token',
  id: 'cusd',
  chainId: 'celo-network',
  title: 'Celo Dollar',
  symbol: 'cUSD',
  faucets: [
    faucetAlfajoresCeloDollar
  ]
}