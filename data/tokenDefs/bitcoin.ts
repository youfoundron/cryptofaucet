import { Faucet } from "../../domain/Faucet";
import { Token } from "../../domain/Token";

const faucetMempoolco: Faucet = {
  networkId: "bitcoin-testnet",
  url: "https://testnet-faucet.mempool.co/",
  maintainer: "Mempoolco",
  maintainerWebsite: "http://mempool.co/",
};

const faucetKuttler: Faucet = {
  networkId: "bitcoin-testnet",
  url: "https://kuttler.eu/en/bitcoin/btc/faucet/",
  maintainer: "Nicolas Kuttler",
  maintainerWebsite: "https://kuttler.eu",
};

const faucetUO1: Faucet = {
  networkId: "bitcoin-testnet",
  url: "https://bitcoinfaucet.uo1.net/",
  maintainer: "UO1",
};

const faucetCoin: Faucet = {
  networkId: "bitcoin-testnet",
  url: "https://coinfaucet.eu/en/btc-testnet",
  maintainer: "CoinFaucet",
  maintainerWebsite: "https://coinfaucet.eu/",
};

const faucetBitaps: Faucet = {
  networkId: "bitcoin-testnet",
  url: "https://tbtc.bitaps.com/",
  maintainer: "Bitaps",
  maintainerWebsite: "https://bitaps.com/",
};

const faucetTestnet: Faucet = {
  networkId: "bitcoin-testnet",
  url: "https://testnet-faucet.com/btc-testnet/",
  maintainer: "Testnet Faucet",
};

export const tokenBitcoin: Token = {
  title: "Bitcoin",
  description: "A peer-to-peer electronic cash system",
  logoPath: "/logos/bitcoin-btc-logo.svg",
  symbol: "BTC",
  faucets: [
    faucetBitaps,
    faucetCoin,
    faucetKuttler,
    faucetMempoolco,
    faucetTestnet,
    faucetUO1,
  ],
};
