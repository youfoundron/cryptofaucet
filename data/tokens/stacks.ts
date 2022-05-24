import { Faucet } from "../../domain/Faucet";
import { Token } from "../../domain/Token";

const faucetTestnetStacks: Faucet = {
  networkId: 'stacks-testnet',
  url: 'https://explorer.stacks.co/sandbox/faucet?chain=testnet',
  maintainer: 'Stacks.co',
  maintainerWebsite: 'https://www.stacks.co/'
}

export const tokenStacks: Token = {
  type: 'token',
  id: 'stacks',
  chainId: 'stacks',
  title: 'Stacks',
  logoPath: '/logos/stacks-stx-logo.svg',
  symbol: 'STX',
  faucets: [
    faucetTestnetStacks
  ]
}