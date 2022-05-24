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

export const allTokens = [
  tokenEther,
  tokenBitcoin,
  tokenChainlink,
  tokenCelo,
  tokenFilecoin,
  // tokenCeloEuro,
  // tokenCeloDollar,
  // tokenPOA,
  tokenStacks,
  tokenZcash
]

export default allTokens
