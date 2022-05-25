import { Faucet } from "../../domain/Faucet";
import { Token } from "../../domain/Token";

const faucetGoerliUsdc: Faucet = {
  networkId: 'ethereum-goerli',
  url: 'https://usdcfaucet.com/',
  maintainer: 'USDC Faucet',
}

const faucetAlgorandTestnetUsdc: Faucet = {
  networkId: 'algorand-testnet',
  url: 'https://usdcfaucet.com/',
  maintainer: 'USDC Faucet',
}

const faucetSolanaTestnetUsdc: Faucet = {
  networkId: 'solana-testnet',
  url: 'https://usdcfaucet.com/',
  maintainer: 'USDC Faucet',
}

export const tokenUsdc: Token = {
  type: 'token',
  id: 'usdc',
  chainId: 'ethereum',
  title: 'USD Coin',
  description: 'A fully collateralized US Dollar stablecoin',
  logoPath: '/logos/usd-coin-usdc-logo.svg',
  symbol: 'USDC',
  documentationWebsite: 'https://developers.circle.com/docs/what-is-usdc',
  faucets: [
    faucetGoerliUsdc,
    faucetAlgorandTestnetUsdc,
    faucetSolanaTestnetUsdc
  ]
}