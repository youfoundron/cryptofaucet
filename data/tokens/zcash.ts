import { Faucet } from "../../domain/Faucet";
import { Token } from "../../domain/Token";

const ZcashFaucetZEC: Faucet = {
  url: 'https://faucet.testnet.z.cash/',
  maintainer: 'Electric Coin Company',
  maintainerWebsite: 'https://z.cash/'
}

export const TestnetZEC: Token = {
  type: 'token',
  id: 'zec',
  title: 'Zcash',
  symbol: 'ZEC',
  faucets: [
    ZcashFaucetZEC
  ]
}