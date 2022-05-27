import { Chain, ChainId } from "../domain/Chain";

export const data = {
  algorand: {
    name: "Algorand",
    documentationWebsite: "https://developer.algorand.org/docs/",
  },
  avalanche: {
    name: "Avalanche",
    documentationWebsite: "https://docs.avax.chain/",
  },
  bitcoin: {
    name: "Bitcoin",
    description:
      "Bitcoin is an innovative payment network and a new kind of money.",
    documentationWebsite: "https://developer.bitcoin.org/reference/",
  },
  "celo-network": {
    name: "Celo",
    description:
      "Celo is a mobile-first platform that makes financial dApps and crypto payments accessible to anyone with a mobile phone.",
    documentationWebsite: "https://docs.celo.org/",
  },
  dogecoin: {
    name: "Dogecoin",
  },
  ethereum: {
    name: "Ethereum",
    description:
      "Ethereum is the community-run technology powering the cryptocurrency, ether (ETH) and thousands of decentralized applications.",
    documentationWebsite: "https://ethereum.org/en/developers/docs/",
  },
  filecoin: {
    name: "Filecoin",
    documentationWebsite: "https://docs.filecoin.io/",
  },
  flow: {
    name: "Flow",
    documentationWebsite: "https://docs.onflow.org/",
  },
  kadena: {
    name: "Kadena",
    documentationWebsite: "https://docs.kadena.io/",
  },
  solana: {
    name: "Solana",
    documentationWebsite: "https://docs.solana.com",
  },
  stacks: {
    name: "Stacks Network",
    documentationWebsite: "https://docs.stacks.co/",
  },
  tezos: {
    name: "Tezos",
    documentationWebsite: "https://tezos.gitlab.io/",
  },
  "xrp-ledger": {
    name: "XRP Ledger",
    documentationWebsite: "https://xrpl.org/docs.html",
  },
  zcash: {
    name: "Zcash",
    description: "Zcash is a digital currency with strong privacy features.",
    documentationWebsite: "https://zcash.readthedocs.io/en/latest/index.html",
  },
};

export const chainsById: Record<ChainId, Chain> = data;
export const allChains: (Chain & { id: ChainId })[] = (
  Object.entries(chainsById) as [ChainId, Chain][]
).map(([id, chain]) => ({ id, ...chain }));
