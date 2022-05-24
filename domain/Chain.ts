import { Data } from './Data';
import { NetworkId } from './Network';

export type ChainId = 
  | 'bitcoin'
  | 'celo-network'
  | 'ethereum' 
  | 'filecoin'
  | 'poa'
  | 'zcash'

export interface Chain extends Data {
  id: ChainId;
  description?: string;
  documentationWebsite?: string;
  networkIds: NetworkId[];
}