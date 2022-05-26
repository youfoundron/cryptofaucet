import { Faucet } from "../domain/Faucet";
import { NetworkId, Network, NetworkPopulated } from "../domain/Network";
import { Token, TokenId, TokenPopulated } from "../domain/Token";
import { chainsById } from "./chains";
import { allNetworks, networksById } from "./networks";
import { allTokens } from "./tokens";

export const populateNetwork = (
  networkWithId: Network & { id: NetworkId }
): NetworkPopulated => ({
  chain: chainsById[networkWithId.chainId],
  ...networkWithId,
});

export const populateToken = (
  tokenWithId: Token & { id: TokenId }
): TokenPopulated => ({
  networks: tokenWithId.faucets.map(({ networkId }) =>
    populateNetwork({
      id: networkId,
      ...networksById[networkId],
    })
  ),
  ...tokenWithId,
});

export const getTokenNetworkIds = (token: Token): NetworkId[] => {
  return token.faucets.reduce<NetworkId[]>((networkIds, faucet) => {
    if (!networkIds.includes(faucet.networkId)) {
      networkIds.push(faucet.networkId);
    }
    return networkIds;
  }, []);
};

type FaucetsByNetworkId = Partial<Record<NetworkId, Faucet[]>>;
export const getFaucetsByNetwork = (faucets: Faucet[]) => {
  return faucets.reduce<FaucetsByNetworkId>((result, faucet) => {
    const { networkId } = faucet;
    if (!result[networkId]) {
      result[networkId] = [];
    }
    result[networkId]?.push(faucet);
    return result;
  }, {});
};

export const networkHasMultipleTokens = (networkId: NetworkId): boolean => {
  let numTokensWithNetworkId = 0;
  for (const token of allTokens) {
    const tokenNetworkIds = token.faucets.map((faucet) => faucet.networkId);
    if (tokenNetworkIds.includes(networkId)) numTokensWithNetworkId += 1;
    if (numTokensWithNetworkId > 1) return true;
  }
  return false;
};
