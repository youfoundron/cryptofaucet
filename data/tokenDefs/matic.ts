import { Faucet } from "../../domain/Faucet";
import { Token } from "../../domain/Token";

const faucetPolygonMumbaiPT: Faucet = {
  networkId: "polygon-mumbai",
  url: "https://faucet.polygon.technology",
  maintainer: "Polygon",
  maintainerWebsite: "https://polygon.technology",
};

const faucetPolygonMumbaiParadigm: Faucet = {
  networkId: "polygon-mumbai",
  url: "https://faucet.paradigm.xyz/",
  maintainer: "Paradigm",
  maintainerWebsite: "https://paradigm.xyz",
};

const faucetGoerliPT: Faucet = {
  networkId: "ethereum-goerli",
  url: "https://faucet.polygon.technology",
  maintainer: "Polygon",
  maintainerWebsite: "https://polygon.technology",
};

export const tokenMatic: Token = {
  title: "Polygon",
  logoPath: "/logos/polygon-matic-logo.svg",
  symbol: "MATIC",
  faucets: [faucetGoerliPT, faucetPolygonMumbaiParadigm, faucetPolygonMumbaiPT],
};
