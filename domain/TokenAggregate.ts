import { Token } from './Token';

// WIP: Exists to show like tokens on different networks
export type TokenAggregate = {
  id: Token['aggregateId'];
  title: string;
  description?: string;
}