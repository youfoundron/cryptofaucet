import { Faucet } from "../../domain/Faucet";
import { Token } from "../../domain/Token";

const faucetTestnetXrp: Faucet = {
  networkId: 'xrp-testnet',
  url: 'https://xrpl.org/xrp-testnet-faucet.html',
  maintainer: 'XRPL Foundation',
  maintainerWebsite: 'https://xrpl.org/xrpl-foundation.html'
}

export const tokenXrp: Token = {
  type: 'token',
  id: 'xrp',
  chainId: 'xrp-ledger',
  title: 'XRP Ledger',
  description: 'Formerly known as Ripple',
  logoPath: '/logos/xrp-xrp-logo.svg',
  symbol: 'XRP',
  faucets: [
    faucetTestnetXrp
  ]
}