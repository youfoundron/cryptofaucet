import { Faucet } from "../../domain/Faucet";
import { Token } from "../../domain/Token";

const faucetTestnetKadena: Faucet = {
  networkId: 'kadena-testnet',
  url: 'https://faucet.testnet.chainweb.com/',
  maintainer: 'Kadena.io',
  maintainerWebsite: 'https://kadena.io/'
}

export const tokenKadena: Token = {
  type: 'token',
  id: 'kadena',
  chainId: 'kadena',
  title: 'Kadena',
  logoPath: '/logos/kadena-kda-logo.svg',
  symbol: 'KDA',
  faucets: [
    faucetTestnetKadena
  ]
}