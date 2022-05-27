import { Faucet } from "../../domain/Faucet";
import { Token } from "../../domain/Token";

const faucetGoerliParadigm: Faucet = {
  networkId: "ethereum-goerli",
  url: "https://faucet.paradigm.xyz/",
  maintainer: "Paradigm",
  maintainerWebsite: "https://paradigm.xyz",
};

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

const faucetRopstenParadigm: Faucet = {
  networkId: "ethereum-ropsten",
  url: "https://faucet.paradigm.xyz/",
  maintainer: "Paradigm",
  maintainerWebsite: "https://paradigm.xyz",
};

export const tokenWeth: Token = {
  title: "Wrapped Ether",
  logoPath: "/logos/weth-logo.svg",
  symbol: "WETH",
  faucets: [
    faucetGoerliParadigm,
    faucetKovanParadigm,
    faucetOptimisticKovanParadigm,
    faucetRinkebyParadigm,
    faucetArbitrumRinkebyParadigm,
    faucetRopstenParadigm,
  ],
};
