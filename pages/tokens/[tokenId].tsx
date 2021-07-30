import React from "react";
import { Token } from "../../domain/Token";
import {
  getStaticPathsOffTokenId,
  getStaticPropsForToken,
} from "../../util/getStatic";

export const TokenPage: React.FC<{ token: Token }> = ({ token }) => {
  return <h1>Token: {token.title}</h1>;
};

export const getStaticPaths = getStaticPathsOffTokenId;
export const getStaticProps = getStaticPropsForToken;

export default TokenPage;
