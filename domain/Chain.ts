import { Data } from './Data';
import { NetworkId } from './Network';

export type ChainId = 
  | 'algorand'
  | 'avalanche'
  | 'bitcoin'
  | 'celo-network'
  | 'ethereum' 
  | 'filecoin'
  | 'kadena'
  | 'poa'
  | 'stacks'
  | 'zcash'

export interface Chain extends Data {
  id: ChainId;
  description?: string;
  documentationWebsite?: string;
  networkIds: NetworkId[];
}