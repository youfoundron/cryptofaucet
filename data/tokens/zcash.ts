import { Faucet } from "../../domain/Faucet";
import { Token } from "../../domain/Token";

const faucetZcashTestnet: Faucet = {
  networkId: 'zcash-testnet',
  url: 'https://faucet.testnet.z.cash/',
  maintainer: 'Electric Coin Company',
  maintainerWebsite: 'https://z.cash/'
}

export const tokenZcash: Token = {
  type: 'token',
  id: 'zec',
  chainId: 'zcash',
  logoPath: '/logos/zcash-zec-logo.svg',
  title: 'Zcash',
  symbol: 'ZEC',
  faucets: [
    faucetZcashTestnet
  ]
}