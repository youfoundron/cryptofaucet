import React from "react";
import { Token } from "../domain/Token";
import { ResultCard } from "./ResultCard";

export interface TokenResultCardProps {
  token: Token;
}

export const TokenResultCard: React.FC<TokenResultCardProps> = ({ token }) => {
  return (
    <ResultCard
      title={`💰 ${token.title}`}
      description={token.description}
      cta={{ url: `/tokens/${token.id}`, label: "See more" }}
    >
      {" "}
      <div className="border-t border-gray-200 px-4 py-2 sm:p-0 mt-4 prose prose-indigo">
        <dl className="sm:divide-y sm:divide-gray-200">
          {token.symbol && (
            <div className="py-4 sm:grid sm:grid-cols-3 last:pb-2">
              <dt className="text-sm font-medium text-gray-500">Symbol</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {token.symbol}
              </dd>
            </div>
          )}
          {token.faucets.length > 0 && (
            <div className="py-4 sm:grid sm:grid-cols-3 last:pb-1">
              <dt className="text-sm font-medium text-gray-500">Faucets</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 space-x-2">
                {token.faucets.map((faucet, i) => (
                  <a
                    key={i}
                    href={faucet.url}
                    className="underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {faucet.maintainer}
                  </a>
                ))}
              </dd>
            </div>
          )}
        </dl>
      </div>
    </ResultCard>
  );
};
