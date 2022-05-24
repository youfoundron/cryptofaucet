import { NetworkId, Network } from "./Network";

export interface Faucet {
  url: string;
  networkId: NetworkId;
  maintainer: string;
  maintainerWebsite?: string;
}

export interface FaucetPopulated extends Faucet {
  network: Network;
}
