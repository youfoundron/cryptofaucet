import { Data } from './Data';

export type NetworkId = 
  | 'algorand-testnet'
  | 'avalanche-fuji'
  | 'bitcoin-testnet'
  | 'celo-alfajores'
  | 'ethereum-goerli'
  | 'ethereum-kovan'
  | 'ethereum-ropsten'
  | 'ethereum-rinkeby'
  | 'ethereum-sepolia'
  | 'filecoin-calibration'
  | 'poa-sokol'
  | 'kadena-testnet'
  | 'stacks-testnet'
  | 'zcash-testnet'

type MetaMaskNetworkConfig = {
  newRpcUrl: string;
  chainId: number;
  networkName?: string;
  symbol?: string;
  explorer?: string;
}

export interface Network extends Data {
  id: NetworkId;
  description?: string;
  officialWebsite?: string;
  blockExplorer?: string;
  networkConfig?: MetaMaskNetworkConfig;
}
