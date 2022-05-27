/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { NetworkId } from "../domain/Network";
import { TokenPopulated } from "../domain/Token";
import { ResultCard } from "./ResultCard";
import { getFaucetsByNetwork, getTokenNetworkIds } from "../data/reducers";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import { Faucet } from "../domain/Faucet";
import { networksById } from "../data/networks";

export interface TokenResultCardProps {
  token: TokenPopulated;
  initialIsShowingFaucets?: boolean;
}

export const TokenResultCard: React.FC<TokenResultCardProps> = ({
  token,
  initialIsShowingFaucets = false,
}) => {
  const logo = token.logoPath && (
    <img src={token.logoPath} className="w-8 h-8" alt={`${token.id}-logo`} />
  );

  const tokenNetworkIds = getTokenNetworkIds(token);
  const faucetsByNetwork = getFaucetsByNetwork(token.faucets);
  const numNetworks = tokenNetworkIds.length;
  const numFaucets = Object.values(faucetsByNetwork).flatMap(
    (faucets) => faucets
  ).length;

  // const [selectedNetworkIds, setSelectedNetworkIds] = useState<Set<NetworkId>>(
  //   new Set(tokenNetworkIds.slice(0, 1))
  // );
  // const handleNetworkToggle = (networkId: NetworkId) => {
  //   if (selectedNetworkIds.has(networkId)) {
  //     setSelectedNetworkIds(
  //       (prev) => new Set([...prev].filter((id) => id !== networkId))
  //     );
  //   } else {
  //     setSelectedNetworkIds((prev) => new Set(prev.add(networkId)));
  //   }
  // };
  const [selectedNetworkId, setSelectedNetworkId] = useState<NetworkId>(
    tokenNetworkIds[0]
  );
  const handleNetworkChange = (networkId: NetworkId) =>
    setSelectedNetworkId(networkId);

  const [isShowingFaucets, setIsShowingFaucets] = useState<boolean>(
    initialIsShowingFaucets
  );

  return (
    <ResultCard
      logo={logo}
      title={`${token.title} (${token.symbol})`}
      description={`${numFaucets} faucet${numFaucets > 1 ? "s" : ""}`.concat(
        numNetworks > 1 ? ` on ${numNetworks} networks` : ""
      )}
      cta={{
        type: "button",
        label: `${isShowingFaucets ? "Hide" : "Show"} faucet${
          numFaucets > 1 ? "s" : ""
        }`,
        onClick: () => setIsShowingFaucets(!isShowingFaucets),
      }}
    >
      {isShowingFaucets && (
        <div className="border-t-2 border-indigo-400 border-dotted pt-2 mt-4 prose prose-indigo">
          <div className="divide-y-2 divide-indigo-400 divide-dotted">
            {tokenNetworkIds.length > 1 && (
              <div className="pt-2 w-full flex flex-col justify-center items-center space-y-2">
                <span className="text-sm font-medium text-gray-500">
                  🚰 Faucets by network
                </span>
                <span className="flex-inline flex-row space-x-4 mx-auto text-center items-center flex-wrap">
                  {tokenNetworkIds.map((networkId) => {
                    const network = networksById[networkId];
                    const checkId = `show-${token.id}-${networkId}`;
                    // const numFaucetsForNetwork = Number(
                    //   faucetsByNetwork[networkId]?.length
                    // );

                    return (
                      <div
                        key={networkId}
                        className="group cursor-pointer inline-flex flex-row items-center justify-center space-x-1"
                      >
                        <input
                          id={checkId}
                          name={checkId}
                          className="cursor-pointer group-hover:underline"
                          type="radio"
                          onChange={() => handleNetworkChange(networkId)}
                          checked={selectedNetworkId === networkId}
                          // type="checkbox"
                          // onChange={() => handleNetworkToggle(networkId)}
                          // checked={selectedNetworkIds.has(networkId)}
                        />
                        <label
                          htmlFor={checkId}
                          className="cursor-pointer group-hover:underline text-sm active:underline font-semibold"
                        >
                          {network.name}
                          {/* {" "}
                              {numFaucetsForNetwork > 1
                                ? `(${numFaucetsForNetwork})`
                                : ""} */}
                        </label>
                      </div>
                    );
                  })}
                </span>
              </div>
            )}
            <div className="mt-4 text-sm text-gray-900 space-x-2">
              <div className="divide-y-2 divide-indigo-400 divide-dotted">
                {/* {[...selectedNetworkIds].map((networkId: NetworkId) => { */}
                {[selectedNetworkId].map((networkId: NetworkId) => {
                  const faucets = faucetsByNetwork[networkId] as Faucet[];
                  const network = networksById[networkId];

                  return (
                    <div key={networkId} className="pt-2">
                      <div className="flex justify-between">
                        <div className="w-full flex flex-col justify-start space-y-0">
                          <span className="space-x-1">
                            <div className="flex justify-between">
                              <label className="text-lg font-semibold">
                                {network.name}
                              </label>
                              <div className="flex justify-end space-x-2">
                                {network.officialWebsite && (
                                  <a
                                    className="flex justify-start items-center"
                                    href={network.officialWebsite}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    Website{" "}
                                    <ExternalLinkIcon className="h-4 w-5" />
                                  </a>
                                )}
                                {network.blockExplorer && (
                                  <a
                                    className="flex justify-start items-center"
                                    href={network.blockExplorer}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    Explorer{" "}
                                    <ExternalLinkIcon className="h-4 w-5 " />
                                  </a>
                                )}
                              </div>
                            </div>
                          </span>
                          {network.description && <p>{network.description}</p>}
                        </div>
                      </div>
                      <ul className="list">
                        {faucets.map((faucet, i) => {
                          return (
                            <li key={faucet.url}>
                              <a
                                href={faucet.url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Faucet {i + 1}
                              </a>{" "}
                              by{" "}
                              {faucet.maintainerWebsite ? (
                                <a
                                  target="_blank"
                                  rel="noreferrer"
                                  href={faucet.maintainerWebsite}
                                >
                                  {faucet.maintainer}
                                </a>
                              ) : (
                                <span>{faucet.maintainer}</span>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </ResultCard>
  );
};
