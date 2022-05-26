import { Chain } from "./Chain";
import { Network } from "./Network";
import { Token } from "./Token";

export enum DataType {
  chain ='chain',
  network = 'network',
  token = 'token'
}

export interface Data {
  type: DataType;
  // id: string;
  title: string;
}

export type AnyData = Chain | Network | Token;