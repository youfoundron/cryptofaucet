import { Faucet } from "../../domain/Faucet";
import { Token } from "../../domain/Token";

const faucetTestnetAlgorand: Faucet = {
  networkId: 'algorand-testnet',
  url: 'https://dispenser.testnet.aws.algodev.network/',
  maintainer: 'Algorand Foundation',
  maintainerWebsite: 'https://algorand.foundation/'
}

export const tokenAlgorand: Token = {
  title: 'Algorand',
  logoPath: '/logos/algorand-algo-logo.svg',
  symbol: 'ALGO',
  faucets: [
    faucetTestnetAlgorand
  ]
}