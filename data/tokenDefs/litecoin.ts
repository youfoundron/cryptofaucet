import { Faucet } from "../../domain/Faucet";
import { Token } from "../../domain/Token";

const faucetBitapsLitecoin: Faucet = {
  networkId: "litecoin-testnet",
  url: "https://tltc.bitaps.com/",
  maintainer: "Bitaps",
  maintainerWebsite: "https://bitaps.com",
};

const faucetTestnetLitecoin: Faucet = {
  networkId: "litecoin-testnet",
  url: "https://testnet-faucet.com/ltc-testnet/",
  maintainer: "Testnet Faucet",
};

export const tokenLitecoin: Token = {
  title: "Litecoin",
  logoPath: "/logos/litecoin-ltc-logo.svg",
  symbol: "LTC",
  faucets: [faucetBitapsLitecoin, faucetTestnetLitecoin],
};
