import { data as chainData } from '../data/chains';

export type ChainId = keyof typeof chainData;

export interface Chain {
  name: string;
  description?: string;
  documentationWebsite?: string;
}
