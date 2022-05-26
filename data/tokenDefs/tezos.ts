import { Faucet } from "../../domain/Faucet";
import { Token } from "../../domain/Token";

const faucetIthacanetTezos: Faucet = {
  networkId: 'tezos-ithacanet',
  url: 'https://teztnets.xyz/ithacanet-faucet',
  maintainer: 'Oxhead Alpha',
  maintainerWebsite: 'https://oxheadalpha.com/'
}

export const tokenTezos: Token = {
  title: 'Tezos',
  logoPath: '/logos/tezos-xtz-logo.svg',
  symbol: 'XTZ',
  faucets: [
    faucetIthacanetTezos
  ]
}