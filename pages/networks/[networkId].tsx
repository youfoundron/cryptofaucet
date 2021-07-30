import React from "react";
import { Network } from "../../domain/Network";
import {
  getStaticPathsOffNetworkId,
  getStaticPropsForNetwork,
} from "../../util/getStatic";

export const NetworkPage: React.FC<{ network: Network }> = ({ network }) => {
  return <h1>Network: {network.title}</h1>;
};

export const getStaticPaths = getStaticPathsOffNetworkId;
export const getStaticProps = getStaticPropsForNetwork;

export default NetworkPage;
