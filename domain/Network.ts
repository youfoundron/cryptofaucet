import { Data } from './Data';

export type NetworkId = 
  | 'bitcoin-testnet'
  | 'celo-alfajores'
  | 'ethereum-goerli'
  | 'ethereum-kovan'
  | 'ethereum-ropsten'
  | 'ethereum-rinkeby'
  | 'ethereum-sepolia'
  | 'filecoin-calibration'
  | 'poa-sokol'
  | 'stacks-testnet'
  | 'zcash-testnet'

export interface Network extends Data {
  id: NetworkId;
  description?: string;
  officialWebsite?: string;
  blockExplorer?: string;
}
