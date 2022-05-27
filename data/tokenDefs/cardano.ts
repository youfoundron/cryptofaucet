import { Faucet } from "../../domain/Faucet";
import { Token } from "../../domain/Token";

const faucetTestnetCardano: Faucet = {
  networkId: "cardano-testnet",
  url: "https://testnets.cardano.org/en/testnets/cardano/tools/faucet/",
  maintainer: "Cardano Foundation",
  maintainerWebsite: "https://cardano.org/",
};

export const tokenCardano: Token = {
  title: "Cardano",
  logoPath: "/logos/cardano-ada-logo.svg",
  symbol: "ADA",
  faucets: [faucetTestnetCardano],
};
