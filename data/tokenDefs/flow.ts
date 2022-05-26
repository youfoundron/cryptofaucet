import { Faucet } from "../../domain/Faucet";
import { Token } from "../../domain/Token";

const faucetTestnetFlow: Faucet = {
  networkId: "flow-testnet",
  url: "https://testnet-faucet.onflow.org/",
  maintainer: "Flow Foundation",
  maintainerWebsite: "https://www.onflow.org/",
};

export const tokenFlow: Token = {
  title: "Flow",
  logoPath: "/logos/flow-flow-logo.svg",
  symbol: "FLOW",
  faucets: [faucetTestnetFlow],
};
