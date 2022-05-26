import { Faucet } from "../../domain/Faucet";
import { Token } from "../../domain/Token";

const faucetAlfajoresCelo: Faucet = {
  networkId: "celo-alfajores",
  url: "https://celo.org/developers/faucet",
  maintainer: "Celo Foundation",
  maintainerWebsite: "https://celo.org/",
};

export const tokenCelo: Token = {
  title: "Celo",
  logoPath: "/logos/celo-celo-logo.svg",
  symbol: "CELO",
  faucets: [faucetAlfajoresCelo],
};
