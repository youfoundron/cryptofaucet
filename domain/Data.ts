import { Chain } from "./Chain";
import { Network } from "./Network";
import { Token } from "./Token";

type DataType = 'chain' | 'network' | 'token';

export interface Data {
  type: DataType;
  id: string;
  title: string;
}

export type AnyData = Chain | Network | Token;