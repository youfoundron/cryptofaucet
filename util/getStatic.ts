import { chains, networks, tokens } from "../data"
import { Chain } from "../domain/Chain";
import { Network } from "../domain/Network";
import { Token } from "../domain/Token";

type DataType = Chain | Network | Token;
enum Slug {
  chainId = 'chainId',
  networkId = 'networkId',
  tokenId = 'tokenId'
}
enum PropKey {
  chain = 'chain',
  network = 'network',
  token = 'token'
}
const propKeyBySlug: Record<Slug, PropKey> = {
  [Slug.chainId]: PropKey.chain,
  [Slug.networkId]: PropKey.network,
  [Slug.tokenId]: PropKey.token
}

function getStaticPathsFactory<T extends DataType>(slug: Slug, dataKey: keyof T, data: T[]): () => Promise<{
    paths: {
        params: Record<string, string>;
    }[];
    fallback: boolean;
}> {
  return async () => {
    // Get the paths we want to pre-render based on data
    const paths = data.map((item) => ({
      params: { [slug]: item[dataKey] as unknown as string }
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
  }
}

function getStaticPropsFactory<T extends DataType>(slug: Slug, dataKey: keyof T, propKey: PropKey, data: T[], ): (context: { params: Record<Slug, T[keyof T]> }) => Promise<{
  props: Partial<Record<PropKey, T>>
}> {
  return async ({ params }) => {
    // params contains the data item id
    // If the route is like /chains/bitcoin, then params.chainId is 'bitcoin'
    const item = data.find(_item => _item[dataKey] === params[slug]);
    const propKey = propKeyBySlug[slug];

    // Pass data item to the page via props
    return { props: { [propKey]: item } }
  }
}

export const getStaticPathsOffChainId = getStaticPathsFactory<Chain>(Slug.chainId, 'id', chains);
export const getStaticPathsOffNetworkId = getStaticPathsFactory<Network>(Slug.networkId, 'id', networks);
export const getStaticPathsOffTokenId = getStaticPathsFactory<Token>(Slug.tokenId, 'id', tokens);

export const getStaticPropsForChain = getStaticPropsFactory<Chain>(Slug.chainId, 'id', PropKey.chain, chains);
export const getStaticPropsForNetwork = getStaticPropsFactory<Network>(Slug.networkId, 'id', PropKey.network, networks);
export const getStaticPropsForToken = getStaticPropsFactory<Token>(Slug.tokenId, 'id', PropKey.token, tokens);
