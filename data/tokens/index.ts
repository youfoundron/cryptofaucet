import { tokenAvalanche } from "./avalanche";
import { tokenBitcoin } from "./bitcoin";
import { tokenCelo } from "./celo";
import { tokenCeloEuro } from "./celo-eur";
import { tokenCeloDollar } from "./celo-usd";
import { tokenEther } from "./ether";
import { tokenChainlink } from "./chainlink";
import { tokenPOA } from "./poa";
import { tokenZcash } from "./zcash";
import { tokenFilecoin } from "./filecoin";
import { tokenStacks } from "./stacks";
import { tokenKadena } from "./kadena";
import { tokenAlgorand } from "./algorand";
import { tokenSolana } from "./solana";

export const allTokens = [
  tokenEther,
  tokenBitcoin,
  tokenAlgorand,
  tokenAvalanche,
  tokenChainlink,
  tokenCelo,
  tokenFilecoin,
  // tokenCeloEuro,
  // tokenCeloDollar,
  // tokenPOA,
  tokenKadena,
  tokenSolana,
  tokenStacks,
  tokenZcash
]

export default allTokens
