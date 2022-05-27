import { Faucet } from "../../domain/Faucet";
import { Token } from "../../domain/Token";

const faucetTestnetDogecoin: Faucet = {
  networkId: "dogecoin-testnet",
  url: "https://testnet-faucet.com/doge-testnet/",
  maintainer: "Testnet Faucet",
};

export const tokenDogecoin: Token = {
  title: "Dogecoin",
  logoPath: "/logos/dogecoin-doge-logo-alternative.svg",
  symbol: "DOGE",
  faucets: [faucetTestnetDogecoin],
};
