import { Chain } from '../domain/Chain'
import { AnyData } from '../domain/Data';
import { Network } from '../domain/Network';
import { Token } from '../domain/Token';
import { Celo, Ethereum, POA, Zcash } from './chains';

export const chains: Chain[] = [
  Celo,
  Ethereum,
  POA,
  Zcash,
]

export const networks: Network[] = chains.reduce<Network[]>((_networks, chain) =>
  _networks.concat(chain.networks), [])

export const tokens: Token[] = networks.reduce<Token[]>((_tokens, network) => _tokens.concat(network.tokens), [])

export const all: AnyData[] = [...chains, ...networks, ...tokens]