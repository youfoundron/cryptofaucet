import React from "react";
import Link from "next/link";
import { Network } from "../domain/Network";
import { ResultCard } from "./ResultCard";

export interface NetworkResultCardProps {
  network: Network;
}

export const NetworkResultCard: React.FC<NetworkResultCardProps> = ({
  network,
}) => {
  return (
    <ResultCard
      title={`🌐 ${network.title}`}
      description={network.description}
      cta={{ url: `/networks/${network.id}`, label: "See more" }}
    >
      <div className="border-t border-gray-200 px-0 py-2 mt-4 prose prose-indigo">
        <dl className="sm:divide-y sm:divide-gray-200">
          {network.blockExplorer && (
            <div className="py-4 sm:grid sm:grid-cols-3 last:pb-2">
              <dt className="text-sm font-medium text-gray-500">
                🔍 Block Explorer
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <a
                  href={network.blockExplorer}
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {network.blockExplorer}
                </a>
              </dd>
            </div>
          )}
          {network.tokens.length > 0 && (
            <div className="py-4 sm:grid sm:grid-cols-3 last:pb-1">
              <dt className="text-sm font-medium text-gray-500">💰 Tokens</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 space-x-2">
                {network.tokens.map((token) => (
                  <Link key={token.id} href={`/tokens/${token.id}`}>
                    <a>{token.symbol}</a>
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
