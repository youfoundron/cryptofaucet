/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import { NetworkId } from "../domain/Network";
import { TokenPopulated } from "../domain/Token";
import { ResultCard } from "./ResultCard";
import { findNetworkById, getFaucetsByNetwork, networkHasMultipleTokens } from "../data/reducers";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import { Faucet } from "../domain/Faucet";

export interface TokenResultCardProps {
  token: TokenPopulated;
}

export const TokenResultCard: React.FC<TokenResultCardProps> = ({ token }) => {  
  const logo = token.logoPath && (
    <img
      src={token.logoPath}
      className='w-8 h-8'
      alt={`${token.id}-logo`}
    />
  );
  
  const tokenNetworkIds = token.networks.map(network => network.id);
  const faucetsByNetwork = getFaucetsByNetwork(token.faucets);
  
  const [selectedNetworkIds, setSelectedNetworkIds] = useState<Set<NetworkId>>(new Set(tokenNetworkIds.slice(0, 1)))
  const handleNetworkToggle = (networkId: NetworkId) => {
    if (selectedNetworkIds.has(networkId)) {
      setSelectedNetworkIds(prev => new Set(
        [...prev].filter(id => id !== networkId)
      ))
    } else {
      setSelectedNetworkIds(prev => new Set(prev.add(networkId)))
    }
  }
  
  return (
    <ResultCard
      logo={logo}
      title={`${token.title} (${token.symbol})`}
      description={token.description}
    >
      <div className="border-t border-gray-200 px-0 py-2 mt-4 prose prose-indigo">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-2">
            {tokenNetworkIds.length > 1 && (<dt className="w-full flex flex-col justify-center items-center space-y-2">
              <span className="text-sm font-medium text-gray-500">
                🚰 Faucets by network
              </span>
              <span className='flex flex-row space-x-2 items-center'>
                {tokenNetworkIds.map((networkId) => {
                  const network = findNetworkById(networkId);
                  const checkId = `show-${token.id}-${networkId}`;

                  return (
                    <div key={networkId} className='group cursor-pointer inline-flex flex-row items-center justify-center space-x-1'>
                      <input
                        id={checkId}
                        name={checkId}
                        className="cursor-pointer group-hover:underline"
                        type='checkbox'
                        onChange={e => handleNetworkToggle(networkId)}
                        checked={selectedNetworkIds.has(networkId)}
                      />
                      <label
                        htmlFor={checkId}
                        className="cursor-pointer group-hover:underline text-sm">{network.title}
                      </label>
                    </div>
                  )
                })}
              </span>
            </dt>)}
            <dd className="mt-4 text-sm text-gray-900 space-x-2">
              <div>
              {[...selectedNetworkIds.values()].map((networkId) => {
                const faucets = faucetsByNetwork[networkId as NetworkId] as Faucet[];
                const network = findNetworkById(networkId as NetworkId);
                const showNetworkLink = networkHasMultipleTokens(networkId as NetworkId);
                
                return (
                  <div key={networkId} className='ml-0'>
                    <div className='flex justify-between'>
                      <div className="flex flex-col justify-start space-y-0">
                        <span className="space-x-1">
                          <label className="text-lg font-semibold">{network.title}</label>
                        {showNetworkLink && (
                          <Link href={`/networks/${networkId}`}>
                            <a className='text-xs'>view all tokens</a>
                          </Link>
                        )}
                        </span>
                        {network.description && (<p>{network.description}</p>)}
                      </div>
                      <div className='flex justify-end space-x-2'>
                        {network.officialWebsite && (
                          <a className='flex justify-start items-center' href={network.officialWebsite} target='_blank' rel="noreferrer">
                            Website <ExternalLinkIcon className="h-4 w-5"/>
                          </a>
                        )}
                        {network.blockExplorer && (
                          <a className='flex justify-start items-center' href={network.blockExplorer} target='_blank' rel="noreferrer">
                            Explorer <ExternalLinkIcon className="h-4 w-5 "/>
                          </a>
                        )}
                      </div>
                    </div>
                    <ul className="list">
                      {faucets.map((faucet, i) => {
                        return (<li key={faucet.url}>
                          <a href={faucet.url} target='_blank' rel="noreferrer">Faucet {i+1}</a> by {faucet.maintainerWebsite
                            ? <a target='_blank' rel="noreferrer" href={faucet.maintainerWebsite}>{faucet.maintainer}</a>
                            : <span>{faucet.maintainer}</span>
                          }
                        </li>)
                      })}
                    </ul>
                  </div>
                )
              })}
              </div>
            </dd>
          </div>
        </dl>
      </div>
    </ResultCard>
  );
};
