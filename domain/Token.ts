import { Data } from './Data';
import { Faucet } from './Faucet';

export interface Token extends Data {
  description?: string;
  symbol: string;
  aggregateId?: string;
  faucets: Faucet[];
}