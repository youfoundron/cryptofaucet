import { Chain } from "../domain/Chain"
import { Ropsten, Rinkeby, Kovan, Sokol } from "./networks"

export const Ethereum: Chain = {
  type: 'chain',
  id: 'ethereum',
  title: 'Ethereum',
  description: 'Ethereum is the community-run technology powering the cryptocurrency, ether (ETH) and thousands of decentralized applications.',
  documentationWebsite: 'https://ethereum.org/en/developers/docs/',
  networks: [
    Ropsten,
    Rinkeby,
    Kovan,
  ]
}

export const POA: Chain = {
  type: 'chain',
  id: 'poa',
  title: 'POA',
  description: 'POA Core encompasses an EVM blockchain as well as product development for the entire Ethereum ecosystem',
  documentationWebsite: 'https://www.poa.network/',
  networks: [
    Sokol
  ]
}
