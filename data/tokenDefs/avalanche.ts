import { Faucet } from "../../domain/Faucet";
import { Token } from "../../domain/Token";

const faucetFujiAvalanche: Faucet = {
  networkId: "avalanche-fuji",
  url: "https://faucet.avax.network/",
  maintainer: "Avalanche Foundation",
  maintainerWebsite: "https://www.avax.network/",
};

export const tokenAvalanche: Token = {
  title: "Avalanche",
  logoPath: "/logos/avalanche-avax-logo.svg",
  symbol: "AVAX",
  faucets: [faucetFujiAvalanche],
};
