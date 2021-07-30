import { Faucet } from "../../domain/Faucet";
import { Token } from "../../domain/Token";

const MempoolcoFaucet: Faucet = {
  url: 'https://testnet-faucet.mempool.co/',
  maintainer: 'Mempoolco',
  maintainerWebsite: 'http://mempool.co/',
}

const KuttlerFaucet: Faucet = {
  url: 'https://kuttler.eu/en/bitcoin/btc/faucet/',
  maintainer: 'Nicolas Kuttler',
  maintainerWebsite: 'https://kuttler.eu'
}

const UO1Faucet: Faucet = {
  url: 'https://bitcoinfaucet.uo1.net/',
  maintainer: 'UO1'
}

const CoinFaucet: Faucet = {
  url: 'https://coinfaucet.eu/en/btc-testnet',
  maintainer: 'CoinFaucet',
  maintainerWebsite: 'https://coinfaucet.eu/'
}

const BitapsFaucet: Faucet = {
  url: 'https://tbtc.bitaps.com/',
  maintainer: 'Bitaps',
  maintainerWebsite: 'https://bitaps.com/',
}

export const TestnetBitcoin: Token = {
  type: 'token',
  id: 'btc',
  title: 'Bitcoin',
  symbol: 'TBTC',
  faucets: [
    MempoolcoFaucet,
    KuttlerFaucet,
    UO1Faucet,
    CoinFaucet,
    BitapsFaucet
  ]
}
