(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7426:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return D}});var r=n(5893),o=n(6265),a=n(7294),i=n(4221),s=n(9008),c=n(6049),l=n(4121);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m={maintainer:"Chainlink",maintainerWebsite:"https://chain.link/"};function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var d={eth:{logoPath:"/logos/ethereum-eth-logo.svg",title:"Ether",description:"The native token of the Ethereum network",symbol:"ETH",faucets:[{networkId:"ethereum-ropsten",url:"https://faucet.ropsten.be/",maintainer:"@defikaren",maintainerWebsite:"https://twitter.com/defikaren"},{networkId:"ethereum-ropsten",url:"https://faucet.dimensions.network/",maintainer:"Dimensions Network",maintainerWebsite:"https://dimensions.network/"},{networkId:"ethereum-ropsten",url:"https://fauceth.komputing.org/",maintainer:"Komputing",maintainerWebsite:"https://komputing.org/"},{networkId:"ethereum-ropsten",url:"https://faucet.paradigm.xyz/",maintainer:"Paradigm",maintainerWebsite:"https://www.paradigm.xyz/"},{networkId:"ethereum-ropsten",url:"https://faucet.metamask.io/",maintainer:"MetaMask",maintainerWebsite:"https://metamask.io/"},{networkId:"ethereum-kovan",url:"https://faucets.chain.link/kovan",maintainer:"Chainlink",maintainerWebsite:"https://www.chain.link/"},{networkId:"ethereum-kovan",url:"https://gitter.im/kovan-testnet/faucet",maintainer:"Gitter",maintainerWebsite:"https://kovan-testnet.github.io/website/"},{networkId:"ethereum-kovan",url:"https://faucet.paradigm.xyz/",maintainer:"Paradigm",maintainerWebsite:"https://www.paradigm.xyz/"},{networkId:"ethereum-kovan",url:"https://faucet.kovan.network/",maintainer:"Parity",maintainerWebsite:"https://kovan-testnet.github.io/website/"},{networkId:"ethereum-rinkeby",url:"https://rinkebyfaucet.com/",maintainer:"Alchemy",maintainerWebsite:"https://www.alchemy.com/"},{networkId:"ethereum-rinkeby",url:"https://faucets.chain.link/rinkeby",maintainer:"Chainlink",maintainerWebsite:"https://www.chain.link/"},{networkId:"ethereum-rinkeby",url:"https://faucet.rinkeby.io/",maintainer:"Geth",maintainerWebsite:"https://www.rinkeby.io/#stats"},{networkId:"ethereum-rinkeby",url:"https://faucet.paradigm.xyz/",maintainer:"Paradigm",maintainerWebsite:"https://www.paradigm.xyz/"},{networkId:"ethereum-goerli",url:"https://goerlifaucet.com/",maintainer:"Alchemy",maintainerWebsite:"https://www.alchemy.com/"},{networkId:"ethereum-goerli",url:"https://faucets.chain.link/goerli",maintainer:"Chainlink",maintainerWebsite:"https://www.chain.link/"},{networkId:"ethereum-goerli",url:"https://goerli-faucet.mudit.blog/",maintainer:"Mudit Gupta",maintainerWebsite:"https://mudit.blog/"},{networkId:"ethereum-goerli",url:"https://faucet.paradigm.xyz/",maintainer:"Paradigm",maintainerWebsite:"https://www.paradigm.xyz/"},{networkId:"ethereum-sepolia",url:"https://faucet.sepolia.dev/",maintainer:"Komputing",maintainerWebsite:"https://komputing.org/"}]},btc:{title:"Bitcoin",description:"A peer-to-peer electronic cash system",logoPath:"/logos/bitcoin-btc-logo.svg",symbol:"BTC",faucets:[{networkId:"bitcoin-testnet",url:"https://tbtc.bitaps.com/",maintainer:"Bitaps",maintainerWebsite:"https://bitaps.com/"},{networkId:"bitcoin-testnet",url:"https://coinfaucet.eu/en/btc-testnet",maintainer:"CoinFaucet",maintainerWebsite:"https://coinfaucet.eu/"},{networkId:"bitcoin-testnet",url:"https://kuttler.eu/en/bitcoin/btc/faucet/",maintainer:"Nicolas Kuttler",maintainerWebsite:"https://kuttler.eu"},{networkId:"bitcoin-testnet",url:"https://testnet-faucet.mempool.co/",maintainer:"Mempoolco",maintainerWebsite:"http://mempool.co/"},{networkId:"bitcoin-testnet",url:"https://bitcoinfaucet.uo1.net/",maintainer:"UO1"}]},algo:{title:"Algorand",logoPath:"/logos/algorand-algo-logo.svg",symbol:"ALGO",faucets:[{networkId:"algorand-testnet",url:"https://dispenser.testnet.aws.algodev.network/",maintainer:"Algorand Foundation",maintainerWebsite:"https://algorand.foundation/"}]},avax:{title:"Avalanche",logoPath:"/logos/avalanche-avax-logo.svg",symbol:"AVAX",faucets:[{networkId:"avalanche-fuji",url:"https://faucet.avax.network/",maintainer:"Avalanche Foundation",maintainerWebsite:"https://www.avax.network/"}]},celo:{title:"Celo",logoPath:"/logos/celo-celo-logo.svg",symbol:"CELO",faucets:[{networkId:"celo-alfajores",url:"https://celo.org/developers/faucet",maintainer:"Celo Foundation",maintainerWebsite:"https://celo.org/"}]},link:{title:"Chainlink",logoPath:"/logos/chainlink-link-logo.svg",symbol:"LINK",documentationWebsite:"https://docs.chain.link/",faucets:[h({networkId:"ethereum-ropsten",url:"https://ropsten.chain.link/"},m),h({networkId:"ethereum-kovan",url:"https://kovan.chain.link/"},m),h({networkId:"ethereum-rinkeby",url:"https://faucets.chain.link/rinkeby"},m)]},fil:{title:"Filecoin",logoPath:"/logos/filecoin-fil-logo.svg",symbol:"FIL",faucets:[{networkId:"filecoin-calibration",url:"https://faucet.calibration.fildev.network/",maintainer:"Protocol Labs",maintainerWebsite:"https://protocol.ai/"}]},flow:{title:"Flow",logoPath:"/logos/flow-flow-logo.svg",symbol:"FLOW",faucets:[{networkId:"flow-testnet",url:"https://testnet-faucet.onflow.org/",maintainer:"Flow Foundation",maintainerWebsite:"https://www.onflow.org/"}]},kda:{title:"Kadena",logoPath:"/logos/kadena-kda-logo.svg",symbol:"KDA",faucets:[{networkId:"kadena-testnet",url:"https://faucet.testnet.chainweb.com/",maintainer:"Kadena.io",maintainerWebsite:"https://kadena.io/"}]},sol:{title:"Solana",logoPath:"/logos/solana-sol-logo.svg",symbol:"SOL",faucets:[{networkId:"solana-testnet",url:"https://solfaucet.com/",maintainer:"Ryan Endacott",maintainerWebsite:"https://twitter.com/RyanEndacott"},{networkId:"solana-testnet",url:"https://solanatools.xyz/faucet/testnet.html",maintainer:"Solana Tools",maintainerWebsite:"https://solanatools.xyz"}]},stx:{title:"Stacks",description:"Formerly known as Blockstack",logoPath:"/logos/stacks-stx-logo.svg",symbol:"STX",faucets:[{networkId:"stacks-testnet",url:"https://explorer.stacks.co/sandbox/faucet?chain=testnet",maintainer:"Stacks.co",maintainerWebsite:"https://www.stacks.co/"}]},xtz:{title:"Tezos",logoPath:"/logos/tezos-xtz-logo.svg",symbol:"XTZ",faucets:[{networkId:"tezos-ithacanet",url:"https://teztnets.xyz/ithacanet-faucet",maintainer:"Oxhead Alpha",maintainerWebsite:"https://oxheadalpha.com/"}]},usdc:{title:"USD Coin",description:"A fully collateralized US Dollar stablecoin",logoPath:"/logos/usd-coin-usdc-logo.svg",symbol:"USDC",documentationWebsite:"https://developers.circle.com/docs/what-is-usdc",faucets:[{networkId:"ethereum-goerli",url:"https://usdcfaucet.com/",maintainer:"USDC Faucet"},{networkId:"algorand-testnet",url:"https://usdcfaucet.com/",maintainer:"USDC Faucet"},{networkId:"solana-testnet",url:"https://usdcfaucet.com/",maintainer:"USDC Faucet"}]},xrp:{title:"XRP Ledger",description:"Formerly known as Ripple",logoPath:"/logos/xrp-xrp-logo.svg",symbol:"XRP",faucets:[{networkId:"xrp-testnet",url:"https://xrpl.org/xrp-testnet-faucet.html",maintainer:"XRPL Foundation",maintainerWebsite:"https://xrpl.org/xrpl-foundation.html"}]},zec:{logoPath:"/logos/zcash-zec-logo.svg",title:"Zcash",symbol:"ZEC",faucets:[{networkId:"zcash-testnet",url:"https://faucet.testnet.z.cash/",maintainer:"Electric Coin Company",maintainerWebsite:"https://z.cash/"},{networkId:"zcash-testnet",url:"https://faucet.zecpages.com/",maintainer:"ZecPages",maintainerWebsite:"https://zecpages.com/"}]}},f=Object.entries(d).map((function(e){var t=(0,l.Z)(e,2);return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({id:t[0]},t[1])})),b=n(9999),g=n(1664),w=function(e){var t=e.logo,n=e.title,o=e.description,a=e.cta,i=e.children;return(0,r.jsxs)("div",{className:"bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md",children:[(0,r.jsxs)("div",{className:"-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap",children:[(0,r.jsx)("div",{className:"ml-4 mt-4",children:(0,r.jsxs)("div",{className:"flex flex-start justify-start items-center space-x-2",children:[t,(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-lg leading-5 font-medium text-gray-900",children:n}),o&&(0,r.jsx)("p",{className:"text-sm text-gray-500",children:o})]})]})}),a&&(0,r.jsx)("div",{className:"ml-4 mt-4 flex-shrink-0",children:"link"===a.type?(0,r.jsx)(g.default,{href:a.url,children:(0,r.jsx)("a",{className:"relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:a.label})}):(0,r.jsx)("button",{onClick:a.onClick,className:"relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:a.label})})]}),i]})};function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var x={algorand:{name:"Algorand",documentationWebsite:"https://developer.algorand.org/docs/"},avalanche:{name:"Avalanche",documentationWebsite:"https://docs.avax.chain/"},bitcoin:{name:"Bitcoin",description:"Bitcoin is an innovative payment network and a new kind of money.",documentationWebsite:"https://developer.bitcoin.org/reference/"},"celo-network":{name:"Celo",description:"Celo is a mobile-first platform that makes financial dApps and crypto payments accessible to anyone with a mobile phone.",documentationWebsite:"https://docs.celo.org/"},ethereum:{name:"Ethereum",description:"Ethereum is the community-run technology powering the cryptocurrency, ether (ETH) and thousands of decentralized applications.",documentationWebsite:"https://ethereum.org/en/developers/docs/"},filecoin:{name:"Filecoin",documentationWebsite:"https://docs.filecoin.io/"},flow:{name:"Flow",documentationWebsite:"https://docs.onflow.org/"},kadena:{name:"Kadena",documentationWebsite:"https://docs.kadena.io/"},solana:{name:"Solana",documentationWebsite:"https://docs.solana.com"},stacks:{name:"Stacks Network",documentationWebsite:"https://docs.stacks.co/"},tezos:{name:"Tezos",documentationWebsite:"https://tezos.gitlab.io/"},"xrp-ledger":{name:"XRP Ledger",documentationWebsite:"https://xrpl.org/docs.html"},zcash:{name:"Zcash",description:"Zcash is a digital currency with strong privacy features.",documentationWebsite:"https://zcash.readthedocs.io/en/latest/index.html"}};Object.entries(x).map((function(e){var t=(0,l.Z)(e,2);return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({id:t[0]},t[1])}));function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var j={"algorand-testnet":{name:"Algorand Testnet",chainId:"algorand",blockExplorer:"https://testnet.algoexplorer.io/"},"avalanche-fuji":{name:"Fuji",chainId:"avalanche",description:"Fuji is the Avalanche network's test network",blockExplorer:"https://testnet.snowtrace.io/",networkConfig:{networkName:"Avalanche FUJI C-Chain",newRpcUrl:"https://api.avax-test.network/ext/bc/C/rpc",chainId:43113,symbol:"AVAX",explorer:"https://testnet.snowtrace.io/"}},"bitcoin-testnet":{name:"Bitcoin Testnet",chainId:"bitcoin",description:"The testnet is an alternative Bitcoin block chain to be used for testing",blockExplorer:"https://blockstream.info/testnet"},"celo-alfajores":{name:"Alfajores",chainId:"celo-network",description:"Test network for developers building on the Celo platform",blockExplorer:"https://alfajores-blockscout.celo-testnet.org"},"ethereum-goerli":{name:"G\xf6rli",chainId:"ethereum",description:"A cross-client proof-of-authority testing network for Ethereum",blockExplorer:"https://goerli.etherscan.io/",officialWebsite:"https://kovan-testnet.github.io/website/"},"ethereum-kovan":{name:"Kovan",chainId:"ethereum",description:"Ethereum's PoA testnet, started by Parity",blockExplorer:"https://kovan.etherscan.io/",officialWebsite:"https://goerli.net/"},"ethereum-rinkeby":{name:"Rinkeby",chainId:"ethereum",description:"Ethereum's PoA testnet, started by Geth",blockExplorer:"https://rinkeby.etherscan.io/",officialWebsite:"https://www.rinkeby.io/#stats"},"ethereum-ropsten":{name:"Ropsten",chainId:"ethereum",description:"Ethereum's PoW testnet",blockExplorer:"https://ropsten.etherscan.io/"},"ethereum-sepolia":{name:"Sepolia",chainId:"ethereum",description:"A cross-client proof-of-work testing network for Ethereum",blockExplorer:"https://sepolia.etherscan.io/",officialWebsite:"https://sepolia.dev/"},"flow-testnet":{name:"Flow Testnet",chainId:"flow",blockExplorer:"https://docs.onflow.org/"},"filecoin-calibration":{name:"Calibration",chainId:"filecoin",officialWebsite:"http://www.calibration.fildev.network/",blockExplorer:"https://calibration.filscout.com/en"},"kadena-testnet":{name:"Kadena Testnet",chainId:"kadena",blockExplorer:"https://explorer.chainweb.com/testnet"},"solana-testnet":{name:"Solana Testnet",chainId:"solana",blockExplorer:"https://explorer.solana.com/?cluster=testnet"},"stacks-testnet":{name:"Stacks Testnet",chainId:"stacks",blockExplorer:"https://explorer.stacks.co/?chain=testnet"},"xrp-testnet":{name:"XRP Testnet",chainId:"xrp-ledger",blockExplorer:"https://testnet.xrpl.org/"},"tezos-ithacanet":{name:"Ithacanet",chainId:"tezos",blockExplorer:"https://ithacanet.tzkt.io/"},"zcash-testnet":{name:"Zcash Testnet",chainId:"zcash",blockExplorer:"https://sochain.com/testnet/zcash"}};Object.entries(j).map((function(e){var t=(0,l.Z)(e,2);return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({id:t[0]},t[1])}));function v(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw a}}}}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=function(e){return I({networks:e.faucets.map((function(e){var t,n=e.networkId;return t=I({id:n},j[n]),I({chain:x[t.chainId]},t)}))},e)},W=function(e){var t=e.token,n=e.initialIsShowingFaucets,o=void 0!==n&&n,i=t.logoPath&&(0,r.jsx)("img",{src:t.logoPath,className:"w-8 h-8",alt:"".concat(t.id,"-logo")}),s=function(e){return e.faucets.reduce((function(e,t){return e.includes(t.networkId)||e.push(t.networkId),e}),[])}(t),l=t.faucets.reduce((function(e,t){var n,r=t.networkId;return e[r]||(e[r]=[]),null===(n=e[r])||void 0===n||n.push(t),e}),{}),u=s.length,h=Object.values(l).flatMap((function(e){return e})).length,m=(0,a.useState)(new Set(s.slice(0,1))),p=m[0],d=m[1],g=(0,a.useState)(o),k=g[0],x=g[1];return(0,r.jsx)(w,{logo:i,title:"".concat(t.title," (").concat(t.symbol,")"),description:"".concat(h," faucet").concat(h>1?"s":"").concat(u>1?" on ".concat(u," test networks"):""),cta:{type:"button",label:"".concat(k?"Hide":"Show"," faucet").concat(h>1?"s":""),onClick:function(){return x(!k)}},children:k&&(0,r.jsx)("div",{className:"border-t border-gray-200 px-0 py-2 mt-4 prose prose-indigo",children:(0,r.jsx)("dl",{className:"sm:divide-y sm:divide-gray-200",children:(0,r.jsxs)("div",{className:"py-2",children:[s.length>1&&(0,r.jsxs)("dt",{className:"w-full flex flex-col justify-center items-center space-y-2",children:[(0,r.jsx)("span",{className:"text-sm font-medium text-gray-500",children:"\ud83d\udeb0 Faucets by test network"}),(0,r.jsx)("span",{className:"flex flex-row space-x-2 items-center",children:s.map((function(e){var n=j[e],o="show-".concat(t.id,"-").concat(e);return(0,r.jsxs)("div",{className:"group cursor-pointer inline-flex flex-row items-center justify-center space-x-1",children:[(0,r.jsx)("input",{id:o,name:o,className:"cursor-pointer group-hover:underline",type:"checkbox",onChange:function(t){return function(e){p.has(e)?d((function(t){return new Set((0,b.Z)(t).filter((function(t){return t!==e})))})):d((function(t){return new Set(t.add(e))}))}(e)},checked:p.has(e)}),(0,r.jsx)("label",{htmlFor:o,className:"cursor-pointer group-hover:underline text-sm",children:n.name})]},e)}))})]}),(0,r.jsx)("dd",{className:"mt-4 text-sm text-gray-900 space-x-2",children:(0,r.jsx)("div",{className:"divide-y",children:(0,b.Z)(p).map((function(e){var t=l[e],n=j[e];!function(e){var t,n=0,r=v(f);try{for(r.s();!(t=r.n()).done;)if(t.value.faucets.map((function(e){return e.networkId})).includes(e)&&(n+=1),n>1)return!0}catch(o){r.e(o)}finally{r.f()}}(e);return(0,r.jsxs)("div",{className:"ml-0",children:[(0,r.jsx)("div",{className:"flex justify-between",children:(0,r.jsxs)("div",{className:"w-full flex flex-col justify-start space-y-0",children:[(0,r.jsx)("span",{className:"space-x-1",children:(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsx)("label",{className:"text-lg font-semibold",children:n.name}),(0,r.jsxs)("div",{className:"flex justify-end space-x-2",children:[n.officialWebsite&&(0,r.jsxs)("a",{className:"flex justify-start items-center",href:n.officialWebsite,target:"_blank",rel:"noreferrer",children:["Website ",(0,r.jsx)(c.h0n,{className:"h-4 w-5"})]}),n.blockExplorer&&(0,r.jsxs)("a",{className:"flex justify-start items-center",href:n.blockExplorer,target:"_blank",rel:"noreferrer",children:["Explorer ",(0,r.jsx)(c.h0n,{className:"h-4 w-5 "})]})]})]})}),n.description&&(0,r.jsx)("p",{children:n.description})]})}),(0,r.jsx)("ul",{className:"list",children:t.map((function(e,t){return(0,r.jsxs)("li",{children:[(0,r.jsxs)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:["Faucet ",t+1]})," by ",e.maintainerWebsite?(0,r.jsx)("a",{target:"_blank",rel:"noreferrer",href:e.maintainerWebsite,children:e.maintainer}):(0,r.jsx)("span",{children:e.maintainer})]},e.url)}))})]},e)}))})})]})})})})};function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var z=f.map((function(e){return S(S({},e),N(e))})),C=new i.Z(z,{keys:["title","description","symbol","chain.name","networks.name"]}),D=function(){var e=(0,a.useState)(!0),t=e[0],n=e[1],o=(0,a.useState)(""),i=o[0],l=o[1],u=(0,a.useState)([]),h=u[0],m=u[1];(0,a.useEffect)((function(){return m(C.search(i))}),[i]);var p=h.length>0?h.map((function(e){return e.item})):z;return(0,r.jsxs)("div",{className:"flex flex-col min-h-screen bg-gray-100",children:[(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{children:"Crypto Faucet"}),(0,r.jsx)("meta",{name:"description",content:"Faucet directory for busy blockchain developers."}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),t&&(0,r.jsx)("div",{className:"relative bg-indigo-600",children:(0,r.jsxs)("div",{className:"max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8",children:[(0,r.jsx)("div",{className:"pr-16 sm:text-center sm:px-16",children:(0,r.jsxs)("p",{className:"font-medium text-white",children:[(0,r.jsx)("span",{children:"Can't find what you're looking for?"}),(0,r.jsx)("span",{className:"block sm:ml-2 sm:inline-block",children:(0,r.jsxs)("a",{className:"text-white font-bold underline",href:"https://github.com/youfoundron/cryptofaucet/issues/new?assignees=youfoundron&labels=faucet+request&template=new_faucet_request.yml&title=%5BFaucet+Request%5D%3A+",target:"_blank",rel:"noreferrer",children:["Tell us here ",(0,r.jsx)("span",{"aria-hidden":"true",children:"\u2192"})]})})]})}),(0,r.jsx)("div",{className:"absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start",children:(0,r.jsxs)("button",{type:"button",className:"flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white",onClick:function(){return n(!1)},children:[(0,r.jsx)("span",{className:"sr-only",children:"Dismiss"}),(0,r.jsx)(c.b0D,{className:"h-6 w-6 text-white","aria-hidden":"true"})]})})]})}),(0,r.jsx)("main",{className:"flex justify-center flex-1 pt-6",children:(0,r.jsxs)("section",{className:"container flex flex-col space-y-6",children:[(0,r.jsx)("h2",{className:"text-center font-black text-5xl sm:text-6xl",children:"Find a faucet!"}),(0,r.jsx)("form",{className:"w-full max-w-md mx-auto",children:(0,r.jsx)("input",{autoFocus:!0,className:"w-full border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md",type:"text",placeholder:"Type to search by token, network, or chain...",onChange:function(e){return l(e.target.value)},value:i})}),(0,r.jsx)("div",{className:"space-y-3 w-full max-w-2xl mx-auto",children:p.map((function(e){return(0,r.jsx)(W,{token:e},e.id)}))})]})}),(0,r.jsxs)("footer",{className:"flex flex-col items-center after:justify-center py-4",children:[(0,r.jsxs)("span",{children:["Built with \u26a1 by\xa0",(0,r.jsx)("a",{className:"underline",href:"https://youfoundron.com",children:"@youfoundron"})]}),(0,r.jsxs)("span",{children:["Designed with \ud83c\udf3c by\xa0",(0,r.jsx)("a",{className:"underline",href:"https://github.com/isabellecharaf",children:"@isabellecharaf"})]})]})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7426)}])}},function(e){e.O(0,[582,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);