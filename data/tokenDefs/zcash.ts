import { Faucet } from "../../domain/Faucet";
import { Token } from "../../domain/Token";

const faucetZcashTestnet: Faucet = {
  networkId: "zcash-testnet",
  url: "https://faucet.testnet.z.cash/",
  maintainer: "Electric Coin Company",
  maintainerWebsite: "https://z.cash/",
};

const faucetZecpages: Faucet = {
  networkId: "zcash-testnet",
  url: "https://faucet.zecpages.com/",
  maintainer: "ZecPages",
  maintainerWebsite: "https://zecpages.com/",
};

export const tokenZcash: Token = {
  logoPath: "/logos/zcash-zec-logo.svg",
  title: "Zcash",
  symbol: "ZEC",
  faucets: [faucetZcashTestnet, faucetZecpages],
};
