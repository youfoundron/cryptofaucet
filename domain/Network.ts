import { data as networkData } from '../data/networks';
import { Chain, ChainId } from './Chain';

export type NetworkId = keyof typeof networkData;

type MetaMaskNetworkConfig = {
  newRpcUrl: string;
  chainId: number;
  networkName?: string;
  symbol?: string;
  explorer?: string;
}

export interface Network {
  name: string;
  chainId: ChainId;
  description?: string;
  officialWebsite?: string;
  blockExplorer?: string;
  networkConfig?: MetaMaskNetworkConfig;
}

export interface NetworkPopulated extends Network {
  chain: Chain
}
