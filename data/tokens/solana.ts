import { Faucet } from "../../domain/Faucet";
import { Token } from "../../domain/Token";

const faucetTestnetSolanaRyan: Faucet = {
  networkId: 'solana-testnet',
  url: 'https://solfaucet.com/',
  maintainer: 'Ryan Endacott',
  maintainerWebsite: 'https://twitter.com/RyanEndacott'
}

const faucetTestnetSolanaTools: Faucet = {
  networkId: 'solana-testnet',
  url: 'https://solanatools.xyz/faucet/testnet.html',
  maintainer: 'Solana Tools',
  maintainerWebsite: 'https://solanatools.xyz'
}

export const tokenSolana: Token = {
  type: 'token',
  id: 'solana',
  chainId: 'solana',
  title: 'Solana',
  logoPath: '/logos/solana-sol-logo.svg',
  symbol: 'SOL',
  faucets: [
    faucetTestnetSolanaRyan,
    faucetTestnetSolanaTools
  ]
}