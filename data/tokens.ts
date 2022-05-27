import { Token, TokenId } from "../domain/Token";
import { tokenAlgorand } from "./tokenDefs/algorand";
import { tokenAvalanche } from "./tokenDefs/avalanche";
import { tokenBitcoin } from "./tokenDefs/bitcoin";
import { tokenCelo } from "./tokenDefs/celo";
import { tokenChainlink } from "./tokenDefs/chainlink";
import { tokenDogecoin } from "./tokenDefs/dogecoin";
import { tokenEther } from "./tokenDefs/ether";
import { tokenFilecoin } from "./tokenDefs/filecoin";
import { tokenFlow } from "./tokenDefs/flow";
import { tokenKadena } from "./tokenDefs/kadena";
import { tokenLitecoin } from "./tokenDefs/litecoin";
import { tokenSolana } from "./tokenDefs/solana";
import { tokenStacks } from "./tokenDefs/stacks";
import { tokenTezos } from "./tokenDefs/tezos";
import { tokenUsdc } from "./tokenDefs/usdc";
import { tokenXrp } from "./tokenDefs/xrp";
import { tokenZcash } from "./tokenDefs/zcash";

export const data = {
  eth: tokenEther,
  btc: tokenBitcoin,
  algo: tokenAlgorand,
  avax: tokenAvalanche,
  celo: tokenCelo,
  doge: tokenDogecoin,
  link: tokenChainlink,
  fil: tokenFilecoin,
  flow: tokenFlow,
  kda: tokenKadena,
  ltc: tokenLitecoin,
  sol: tokenSolana,
  stx: tokenStacks,
  xtz: tokenTezos,
  usdc: tokenUsdc,
  xrp: tokenXrp,
  zec: tokenZcash,
};

export const tokensById: Record<TokenId, Token> = data;
export const allTokens: (Token & { id: TokenId })[] = (
  Object.entries(tokensById) as [TokenId, Token][]
).map(([id, token]) => ({ id, ...token }));
