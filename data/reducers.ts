import { Chain } from "../domain/Chain";
import { Faucet } from "../domain/Faucet";
import { NetworkId, Network } from "../domain/Network";
import { Token, TokenPopulated } from "../domain/Token";
import allChains from "./chains";
import allNetworks, { networkPOASokol } from "./networks";
import allTokens from "./tokens";

export const populateToken = (token: Token): TokenPopulated => {
  const result: Partial<TokenPopulated> = Object.assign({}, token);
  const tokenChainId = token.chainId;
  const tokenNetworkIds = token.faucets.map(faucet => faucet.networkId);
  result.chain = allChains.find(chain => chain.id === tokenChainId) as Chain;
  result.networks = allNetworks.filter(network => tokenNetworkIds.includes(network.id)) as Network[];
  return result as TokenPopulated;
}

type FaucetsByNetworkId = Partial<Record<NetworkId, Faucet[]>>
export const getFaucetsByNetwork = (faucets: Faucet[]) => {
  return faucets.reduce<FaucetsByNetworkId>((result, faucet) => {
    const { networkId } = faucet;
    if (!result[networkId]) {
      result[networkId] = [];
    }
    result[networkId]?.push(faucet);
    return result;
  }, {})
}

export const findNetworkById = (networkId: NetworkId): Network => {
  return allNetworks.find(network => network.id == networkId) as Network;
}

export const networkHasMultipleTokens = (networkId: NetworkId): boolean => {
  let numTokensWithNetworkId = 0;
  for (const token of allTokens) {
    const tokenNetworkIds = token.faucets.map(faucet => faucet.networkId);
    if (tokenNetworkIds.includes(networkId)) numTokensWithNetworkId += 1;
    if (numTokensWithNetworkId > 1) return true;
  }
  return false;
}