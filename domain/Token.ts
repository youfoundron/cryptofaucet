import { Chain, ChainId } from './Chain';
import { Data } from './Data';
import { Faucet, FaucetPopulated } from './Faucet';
import { Network } from './Network';

export interface Token extends Data {
  chainId: ChainId;
  description?: string;
  symbol: string;
  faucets: Faucet[];
  logoPath?: string;
  documentationWebsite?: string;
}

export interface TokenPopulated extends Token {
  chain: Chain;
  networks: Network[];
}
