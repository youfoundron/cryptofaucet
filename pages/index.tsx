import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";
import Head from "next/head";
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
