import React from "react";
import { Chain } from "../../domain/Chain";
import {
  getStaticPathsOffChainId,
  getStaticPropsForChain,
} from "../../util/getStatic";

export const ChainPage: React.FC<{ chain: Chain }> = ({ chain }) => {
  return <h1>Chain: {chain.title}</h1>;
};

export const getStaticPaths = getStaticPathsOffChainId;
export const getStaticProps = getStaticPropsForChain;

export default ChainPage;
