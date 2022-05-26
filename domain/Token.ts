import { data as tokensData } from "../data/tokens";
import { Faucet } from "./Faucet";
import { Network } from "./Network";

export type TokenId = keyof typeof tokensData;

export interface Token {
  title: string;
  symbol: string;
  faucets: Faucet[];
  logoPath?: string;
  description?: string;
  documentationWebsite?: string;
}

export interface TokenPopulated extends Token {
  id: TokenId;
  networks: Network[];
}
