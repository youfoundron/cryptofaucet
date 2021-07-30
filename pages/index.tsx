import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";
import Link from "next/link";
import Head from "next/head";
import { XIcon } from "@heroicons/react/outline";
import { all } from "../data";
import { AnyData } from "../domain/Data";
import { TokenResultCard } from "../components/TokenResultCard";
import { ChainResultCard } from "../components/ChainResultCard";
import { NetworkResultCard } from "../components/NetworkResultCard";
import { Chain } from "../domain/Chain";
import { Network } from "../domain/Network";
import { Token } from "../domain/Token";

const fuse = new Fuse(all, { keys: ["title", "id", "aggregateId"] });

const HomePage: React.FC = () => {
  const [showBanner, setShowBanner] = useState<boolean>(true);
  const [query, setQuery] = useState<string>("");
  const [searchResult, setSearchResult] = useState<Fuse.FuseResult<AnyData>[]>(
    []
  );

  useEffect(() => setSearchResult(fuse.search(query)), [query]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Head>
        <title>Crypto Faucet</title>
        <meta
          name="description"
          content="Faucet directory for busy blockchain developers."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {showBanner && (
        <div className="relative bg-indigo-600">
          <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="pr-16 sm:text-center sm:px-16">
              <p className="font-medium text-white">
                <span className="md:hidden">
                  {`Can't find what you're looking for?`}
                </span>
                <span className="hidden md:inline">
                  {`Can't find what you're looking for? Tell us what you need.`}
                </span>
                <span className="block sm:ml-2 sm:inline-block">
                  <Link href="/feedback">
                    <a className="text-white font-bold underline">
                      {" "}
                      Click here <span aria-hidden="true">&rarr;</span>
                    </a>
                  </Link>
                </span>
              </p>
            </div>
            <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
              <button
                type="button"
                className="flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
                onClick={() => setShowBanner(false)}
              >
                <span className="sr-only">Dismiss</span>
                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="flex justify-center flex-1 pt-6">
        <section className="container flex flex-col space-y-6">
          <h2 className="text-center font-black text-6xl">Find a faucet!</h2>

          <form className="w-full max-w-md mx-auto">
            <input
              autoFocus
              className="w-full border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
              type="text"
              placeholder="Type to search by token, network, or chain..."
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
          </form>
          <p className="text-center space-x-4">
            <span>💰 = token</span>
            <span>🔗 = chain</span>
            <span>🌐 = network</span>
          </p>

          <div className="space-y-3 w-full max-w-2xl mx-auto">
            {searchResult.length > 0 &&
              searchResult.map(({ item }) => {
                if (item.type === "token") {
                  return <TokenResultCard token={item as Token} />;
                } else if (item.type === "chain") {
                  return (
                    <ChainResultCard key={item.id} chain={item as Chain} />
                  );
                } else if (item.type === "network") {
                  return (
                    <NetworkResultCard
                      key={item.id}
                      network={item as Network}
                    />
                  );
                } else {
                  console.error("unexpected search result", item);
                  return null;
                }
              })}
          </div>
        </section>
      </main>
      <footer className="flex justify-center py-4">
        Made with ⚡ by&nbsp;
        <a className="underline" href="https://youfoundron.com">
          @youfoundron
        </a>
      </footer>
    </div>
  );
};

export default HomePage;
