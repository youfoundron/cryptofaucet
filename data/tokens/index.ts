import { tokenBitcoin } from "./bitcoin";
import { tokenCelo } from "./celo";
import { tokenCeloEuro } from "./celo-eur";
import { tokenCeloDollar } from "./celo-usd";
import { tokenEther } from "./ether";
import { tokenChainlink } from "./chainlink";
import { tokenPOA } from "./poa";
import { tokenZcash } from "./zcash";

export const allTokens = [
  tokenEther,
  tokenBitcoin,
  tokenChainlink,
  tokenCelo,
  // tokenCeloEuro,
  // tokenCeloDollar,
  // tokenPOA,
  tokenZcash
]

export default allTokens
