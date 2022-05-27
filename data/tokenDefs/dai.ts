import { Faucet } from "../../domain/Faucet";
import { Token } from "../../domain/Token";
import { oneDayMs } from "../common";

const faucetKovanParadigm: Faucet = {
  networkId: "ethereum-kovan",
  url: "https://faucet.paradigm.xyz/",
  maintainer: "Paradigm",
  maintainerWebsite: "https://paradigm.xyz",
};

const faucetRinkebyParadigm: Faucet = {
  networkId: "ethereum-rinkeby",
  url: "https://faucet.paradigm.xyz/",
  maintainer: "Paradigm",
  maintainerWebsite: "https://paradigm.xyz",
};

const faucetArbitrumRinkebyParadigm: Faucet = {
  networkId: "arbitrum-rinkeby",
  url: "https://faucet.paradigm.xyz/",
  maintainer: "Paradigm",
  maintainerWebsite: "https://paradigm.xyz",
};

const faucetOptimisticKovanParadigm: Faucet = {
  networkId: "optimism-kovan",
  url: "https://faucet.paradigm.xyz/",
  maintainer: "Paradigm",
  maintainerWebsite: "https://paradigm.xyz",
};

const faucetPolygonMumbaiParadigm: Faucet = {
  networkId: "polygon-mumbai",
  url: "https://faucet.paradigm.xyz/",
  maintainer: "Paradigm",
  maintainerWebsite: "https://paradigm.xyz",
};

const faucetAvalancheFujiParadigm: Faucet = {
  networkId: "avalanche-fuji",
  url: "https://faucet.paradigm.xyz/",
  dripAmount: 500,
  periodMs: oneDayMs,
  maintainer: "Paradigm",
  maintainerWebsite: "https://paradigm.xyz",
};

export const tokenDai: Token = {
  title: "Multi-Collateral Dai",
  logoPath: "/logos/multi-collateral-dai-dai-logo.svg",
  symbol: "DAI",
  faucets: [
    faucetKovanParadigm,
    faucetOptimisticKovanParadigm,
    faucetRinkebyParadigm,
    faucetArbitrumRinkebyParadigm,
    faucetPolygonMumbaiParadigm,
    faucetAvalancheFujiParadigm,
  ],
};
