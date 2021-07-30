import { Data } from './Data';
import { Token } from './Token';

export interface Network extends Data {
  description?: string;
  blockExplorer?: string;
  tokens: Token[];
}