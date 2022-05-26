// import { chains, networks, tokens } from "../data"
import { allChains } from "../data/chains";
import { allNetworks } from "../data/networks";
import { allTokens } from "../data/tokens";
import { Chain, ChainId } from "../domain/Chain";
import { Network, NetworkId } from "../domain/Network";
import { Token, TokenId } from "../domain/Token";

type DataType = Chain | Network | Token;
enum Slug {
  chainId = "chainId",
  networkId = "networkId",
  tokenId = "tokenId",
}
enum PropKey {
  chain = "chain",
  network = "network",
  token = "token",
}
const propKeyBySlug: Record<Slug, PropKey> = {
  [Slug.chainId]: PropKey.chain,
  [Slug.networkId]: PropKey.network,
  [Slug.tokenId]: PropKey.token,
};

function getStaticPathsFactory<T extends DataType>(
  slug: Slug,
  dataKey: keyof T,
  data: T[]
): () => Promise<{
  paths: {
    params: Record<string, string>;
  }[];
  fallback: boolean;
}> {
  return async () => {
    // Get the paths we want to pre-render based on data
    const paths = data.map((item) => ({
      params: { [slug]: item[dataKey] as unknown as string },
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
  };
}

function getStaticPropsFactory<T extends DataType>(
  slug: Slug,
  dataKey: keyof T,
  propKey: PropKey,
  data: T[]
): (context: { params: Record<Slug, T[keyof T]> }) => Promise<{
  props: Partial<Record<PropKey, T>>;
}> {
  return async ({ params }) => {
    // params contains the data item id
    // If the route is like /chains/bitcoin, then params.chainId is 'bitcoin'
    const item = data.find((_item) => _item[dataKey] === params[slug]);
    const propKey = propKeyBySlug[slug];

    // Pass data item to the page via props
    return { props: { [propKey]: item } };
  };
}

export const getStaticPathsOffChainId = getStaticPathsFactory<
  Chain & { id: ChainId }
>(Slug.chainId, "id", allChains);
export const getStaticPathsOffNetworkId = getStaticPathsFactory<
  Network & { id: NetworkId }
>(Slug.networkId, "id", allNetworks);
export const getStaticPathsOffTokenId = getStaticPathsFactory<
  Token & { id: TokenId }
>(Slug.tokenId, "id", allTokens);

export const getStaticPropsForChain = getStaticPropsFactory<
  Chain & { id: ChainId }
>(Slug.chainId, "id", PropKey.chain, allChains);
export const getStaticPropsForNetwork = getStaticPropsFactory<
  Network & { id: NetworkId }
>(Slug.networkId, "id", PropKey.network, allNetworks);
export const getStaticPropsForToken = getStaticPropsFactory<
  Token & { id: TokenId }
>(Slug.tokenId, "id", PropKey.token, allTokens);
