import React from "react";
import Link from "next/link";
import { Chain } from "../domain/Chain";
import { ResultCard } from "./ResultCard";

export interface ChainResultCardProps {
  chain: Chain;
}

export const ChainResultCard: React.FC<ChainResultCardProps> = ({ chain }) => {
  return (
    <ResultCard
      title={`🔗 ${chain.title}`}
      description={chain.description}
      cta={{ url: `/Chains/${chain.id}`, label: "See more" }}
    >
      <div className="border-t border-gray-200 px-0 py-2 mt-4 prose prose-indigo">
        <dl className="sm:divide-y sm:divide-gray-200">
          {chain.documentationWebsite && (
            <div className="py-4 sm:grid sm:grid-cols-3 last:pb-2">
              <dt className="text-sm font-medium text-gray-500">
                📚 Documentation
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <a
                  href={chain.documentationWebsite}
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {chain.documentationWebsite}
                </a>
              </dd>
            </div>
          )}
          {chain.networks.length > 0 && (
            <div className="py-4 sm:grid sm:grid-cols-3 last:pb-1">
              <dt className="text-sm font-medium text-gray-500">🌐 Networks</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 space-x-2">
                {chain.networks.map((network) => (
                  <Link key={network.id} href={`/networks/${network.id}`}>
                    <a>{network.title}</a>
                  </Link>
                ))}
              </dd>
            </div>
          )}
        </dl>
      </div>
    </ResultCard>
  );
};
