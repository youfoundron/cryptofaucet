import { Data } from './Data';
import { Network } from './Network';

export interface Chain extends Data {
  description?: string;
  documentationWebsite?: string;
  networks: Network[];
}