(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9120:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return Z}});var n=s(5893),i=s(7294),r=s(4221),a=s(1664),o=s(9008),c=s(6049),l=s(1385),d={type:"token",id:"btc",title:"Bitcoin",symbol:"TBTC",faucets:[{url:"https://testnet-faucet.mempool.co/",maintainer:"Mempoolco",maintainerWebsite:"http://mempool.co/"},{url:"https://kuttler.eu/en/bitcoin/btc/faucet/",maintainer:"Nicolas Kuttler",maintainerWebsite:"https://kuttler.eu"},{url:"https://bitcoinfaucet.uo1.net/",maintainer:"UO1"},{url:"https://coinfaucet.eu/en/btc-testnet",maintainer:"CoinFaucet",maintainerWebsite:"https://coinfaucet.eu/"},{url:"https://tbtc.bitaps.com/",maintainer:"Bitaps",maintainerWebsite:"https://bitaps.com/"}]},m={type:"token",id:"celo",title:"Celo",symbol:"CELO",faucets:[{url:"https://celo.org/developers/faucet",maintainer:"Celo Foundation",maintainerWebsite:"https://celo.org/"}]},p={type:"token",id:"ceur",title:"Celo Euro",symbol:"cEUR",faucets:[{url:"https://celo.org/developers/faucet",maintainer:"Celo Foundation",maintainerWebsite:"https://celo.org/"}]},h={type:"token",id:"cusd",title:"Celo Dollar",symbol:"cUSD",faucets:[{url:"https://celo.org/developers/faucet",maintainer:"Celo Foundation",maintainerWebsite:"https://celo.org/"}]},u={type:"token",id:"ropsten-eth",aggregateId:"eth",title:"Ropsten Ether",symbol:"ETH",faucets:[{url:"https://faucet.metamask.io/",maintainer:"MetaMask",maintainerWebsite:"https://metamask.io/"},{url:"https://faucet.dimensions.network/",maintainer:"Dimensions Network",maintainerWebsite:"https://dimensions.network/"},{url:"https://faucet.ropsten.be/",maintainer:"@defikaren",maintainerWebsite:"https://twitter.com/defikaren"}]},x={type:"token",id:"kovan-eth",aggregateId:"eth",title:"Kovan Ether",symbol:"ETH",faucets:[{url:"https://gitter.im/kovan-testnet/faucet",maintainer:"Parity",maintainerWebsite:"https://kovan-testnet.github.io/website/"},{url:"https://gitter.im/kovan-testnet/faucet",maintainer:"Parity",maintainerWebsite:"https://kovan-testnet.github.io/website/"}]},f={type:"token",id:"rinkeby-eth",aggregateId:"eth",title:"Rinkeby Ether",symbol:"ETH",faucets:[{url:"https://faucet.rinkeby.io/",maintainer:"Geth",maintainerWebsite:"https://www.rinkeby.io/#stats"}]},b=s(6265);function k(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function y(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?k(Object(s),!0).forEach((function(t){(0,b.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):k(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var g={maintainer:"Chainlink",maintainerWebsite:"https://chain.link/"},j=y({url:"https://ropsten.chain.link/"},g),w=y({url:"https://kovan.chain.link/"},g),v=(y({url:"https://rinkeby.chain.link"},g),[{type:"chain",id:"bitcoin",title:"Bitcoin",description:"Bitcoin is an innovative payment network and a new kind of money.",documentationWebsite:"https://developer.bitcoin.org/reference/",networks:[{type:"network",id:"bitcoin-testnet",title:"Bitcoin Testnet",description:"The testnet is an alternative Bitcoin block chain to be used for testing",blockExplorer:"https://blockstream.info/testnet",tokens:[d]}]},{type:"chain",id:"celo-network",title:"Celo",description:"Celo is a mobile-first platform that makes financial dApps and crypto payments accessible to anyone with a mobile phone.",documentationWebsite:"https://docs.celo.org/",networks:[{type:"network",id:"celo-alphajores",title:"Alphajores",description:"The Alfajores Testnet is a Celo test network for developers building on the Celo platform.",blockExplorer:"https://alfajores-blockscout.celo-testnet.org",tokens:[m,h,p]}]},{type:"chain",id:"ethereum",title:"Ethereum",description:"Ethereum is the community-run technology powering the cryptocurrency, ether (ETH) and thousands of decentralized applications.",documentationWebsite:"https://ethereum.org/en/developers/docs/",networks:[{type:"network",id:"ropsten",title:"Ropsten",description:"Ethereum's PoW testnet",blockExplorer:"https://ropsten.etherscan.io/",tokens:[{type:"token",id:"ropsten-link",aggregateId:"link",title:"Ropsten Chainlink",symbol:"LINK",faucets:[j]},u]},{type:"network",id:"rinkeby",title:"Rinkeby",description:"Ethereum's PoA testnet, started by Geth",blockExplorer:"https://rinkeby.etherscan.io/",tokens:[f,{type:"token",id:"rinkeby-link",aggregateId:"link",title:"Rinkeby Chainlink",symbol:"LINK",faucets:[w]}]},{type:"network",id:"kovan",title:"Kovan",description:"Ethereum's PoA testnet, started by Parity",blockExplorer:"https://kovan.etherscan.io/",tokens:[x,{type:"token",id:"kovan-link",aggregateId:"link",title:"Kovan Chainlink",symbol:"LINK",faucets:[w]}]}]},{type:"chain",id:"poa",title:"POA",description:"POA Core encompasses an EVM blockchain as well as product development for the entire Ethereum ecosystem.",documentationWebsite:"https://www.poa.network/",networks:[{type:"network",id:"sokol",title:"Sokol",description:"The Sokol Testnet provides an application testing environment as well as a test network for POA validator candidates.",blockExplorer:"https://blockscout.com/poa/sokol",tokens:[{type:"token",id:"spoa",title:"POA Sokol",symbol:"SPOA",faucets:[{url:"https://faucet.poa.network/",maintainer:"POA Network",maintainerWebsite:"https://www.poa.network/for-developers/developer-resourses#poa-sokol-testnet"}]}]}]},{type:"chain",id:"zcash",title:"Zcash",description:"Zcash is a digital currency with strong privacy features.",documentationWebsite:"https://zcash.readthedocs.io/en/latest/index.html",networks:[{type:"network",id:"zcash-testnet",title:"Zcash Testnet",description:"The Zcash testnet is an alternative blockchain that attempts to mimic the main Zcash network for testing purposes.",blockExplorer:"https://sochain.com/testnet/zcash",tokens:[{type:"token",id:"zec",title:"Zcash",symbol:"ZEC",faucets:[{url:"https://faucet.testnet.z.cash/",maintainer:"Electric Coin Company",maintainerWebsite:"https://z.cash/"}]}]}]}]),N=v.reduce((function(e,t){return e.concat(t.networks)}),[]),C=N.reduce((function(e,t){return e.concat(t.tokens)}),[]),E=[].concat(v,(0,l.Z)(N),(0,l.Z)(C)),O=function(e){var t=e.title,s=e.description,i=e.cta,r=e.children;return(0,n.jsxs)("div",{className:"bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md",children:[(0,n.jsxs)("div",{className:"-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap",children:[(0,n.jsxs)("div",{className:"ml-4 mt-4",children:[(0,n.jsx)("h3",{className:"text-lg leading-6 font-medium text-gray-900",children:t}),s&&(0,n.jsx)("p",{className:"mt-1 text-sm text-gray-500",children:s})]}),i&&(0,n.jsx)("div",{className:"ml-4 mt-4 flex-shrink-0",children:(0,n.jsx)(a.default,{href:i.url,children:(0,n.jsx)("a",{className:"relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:i.label})})})]}),r]})},W=function(e){var t=e.token;return(0,n.jsx)(O,{title:"\ud83d\udcb0 ".concat(t.title),description:t.description,cta:{url:"/tokens/".concat(t.id),label:"See more"},children:(0,n.jsx)("div",{className:"border-t border-gray-200 px-0 py-2 mt-4 prose prose-indigo",children:(0,n.jsxs)("dl",{className:"sm:divide-y sm:divide-gray-200",children:[t.symbol&&(0,n.jsxs)("div",{className:"py-4 sm:grid sm:grid-cols-3 last:pb-2",children:[(0,n.jsx)("dt",{className:"text-sm font-medium text-gray-500",children:"\ud83d\udd24 Symbol"}),(0,n.jsx)("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:t.symbol})]}),t.faucets.length>0&&(0,n.jsxs)("div",{className:"py-4 sm:grid sm:grid-cols-3 last:pb-1",children:[(0,n.jsx)("dt",{className:"text-sm font-medium text-gray-500",children:"\ud83d\udeb0 Faucets"}),(0,n.jsx)("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 space-x-2",children:t.faucets.map((function(e,t){return(0,n.jsx)("a",{href:e.url,className:"underline",target:"_blank",rel:"noreferrer",children:e.maintainer},t)}))})]})]})})})},P=function(e){var t=e.chain;return(0,n.jsx)(O,{title:"\ud83d\udd17 ".concat(t.title),description:t.description,cta:{url:"/Chains/".concat(t.id),label:"See more"},children:(0,n.jsx)("div",{className:"border-t border-gray-200 px-0 py-2 mt-4 prose prose-indigo",children:(0,n.jsxs)("dl",{className:"sm:divide-y sm:divide-gray-200",children:[t.documentationWebsite&&(0,n.jsxs)("div",{className:"py-4 sm:grid sm:grid-cols-3 last:pb-2",children:[(0,n.jsx)("dt",{className:"text-sm font-medium text-gray-500",children:"\ud83d\udcda Documentation"}),(0,n.jsx)("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:(0,n.jsx)("a",{href:t.documentationWebsite,className:"underline",target:"_blank",rel:"noreferrer",children:t.documentationWebsite})})]}),t.networks.length>0&&(0,n.jsxs)("div",{className:"py-4 sm:grid sm:grid-cols-3 last:pb-1",children:[(0,n.jsx)("dt",{className:"text-sm font-medium text-gray-500",children:"\ud83c\udf10 Networks"}),(0,n.jsx)("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 space-x-2",children:t.networks.map((function(e){return(0,n.jsx)(a.default,{href:"/networks/".concat(e.id),children:(0,n.jsx)("a",{children:e.title})},e.id)}))})]})]})})})},T=function(e){var t=e.network;return(0,n.jsx)(O,{title:"\ud83c\udf10 ".concat(t.title),description:t.description,cta:{url:"/networks/".concat(t.id),label:"See more"},children:(0,n.jsx)("div",{className:"border-t border-gray-200 px-0 py-2 mt-4 prose prose-indigo",children:(0,n.jsxs)("dl",{className:"sm:divide-y sm:divide-gray-200",children:[t.blockExplorer&&(0,n.jsxs)("div",{className:"py-4 sm:grid sm:grid-cols-3 last:pb-2",children:[(0,n.jsx)("dt",{className:"text-sm font-medium text-gray-500",children:"\ud83d\udd0d Block Explorer"}),(0,n.jsx)("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:(0,n.jsx)("a",{href:t.blockExplorer,className:"underline",target:"_blank",rel:"noreferrer",children:t.blockExplorer})})]}),t.tokens.length>0&&(0,n.jsxs)("div",{className:"py-4 sm:grid sm:grid-cols-3 last:pb-1",children:[(0,n.jsx)("dt",{className:"text-sm font-medium text-gray-500",children:"\ud83d\udcb0 Tokens"}),(0,n.jsx)("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 space-x-2",children:t.tokens.map((function(e){return(0,n.jsx)(a.default,{href:"/tokens/".concat(e.id),children:(0,n.jsx)("a",{children:e.symbol})},e.id)}))})]})]})})})},_=function(){return(0,n.jsx)("a",{href:"https://github.com/youfoundron/cryptofaucet",className:"github-corner","aria-label":"View source on GitHub",target:"_blank",rel:"noreferrer",children:(0,n.jsxs)("svg",{width:"80",height:"80",viewBox:"0 0 250 250",className:"text-white absolute top-0 right-0 border-0",style:{fill:"#151513"},"aria-hidden":"true",children:[(0,n.jsx)("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),(0,n.jsx)("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{transformOrigin:"130px 106px"},className:"octo-arm"}),(0,n.jsx)("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"octo-body"})]})})},S=new r.Z(E,{keys:["title","id","aggregateId"]}),Z=function(){var e=(0,i.useState)(!0),t=e[0],s=e[1],r=(0,i.useState)(""),l=r[0],d=r[1],m=(0,i.useState)([]),p=m[0],h=m[1];return(0,i.useEffect)((function(){return h(S.search(l))}),[l]),(0,n.jsxs)("div",{className:"flex flex-col min-h-screen bg-gray-100",children:[(0,n.jsxs)(o.default,{children:[(0,n.jsx)("title",{children:"Crypto Faucet"}),(0,n.jsx)("meta",{name:"description",content:"Faucet directory for busy blockchain developers."}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)(_,{}),t&&(0,n.jsx)("div",{className:"relative bg-indigo-600",children:(0,n.jsxs)("div",{className:"max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8",children:[(0,n.jsx)("div",{className:"pr-16 sm:text-center sm:px-16",children:(0,n.jsxs)("p",{className:"font-medium text-white",children:[(0,n.jsx)("span",{className:"md:hidden",children:"Can't find what you're looking for?"}),(0,n.jsx)("span",{className:"hidden md:inline",children:"Can't find what you're looking for? Tell us what you need."}),(0,n.jsx)("span",{className:"block sm:ml-2 sm:inline-block",children:(0,n.jsx)(a.default,{href:"/feedback",children:(0,n.jsxs)("a",{className:"text-white font-bold underline",children:[" ","Click here ",(0,n.jsx)("span",{"aria-hidden":"true",children:"\u2192"})]})})})]})}),(0,n.jsx)("div",{className:"absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start",children:(0,n.jsxs)("button",{type:"button",className:"flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white",onClick:function(){return s(!1)},children:[(0,n.jsx)("span",{className:"sr-only",children:"Dismiss"}),(0,n.jsx)(c.b0D,{className:"h-6 w-6 text-white","aria-hidden":"true"})]})})]})}),(0,n.jsx)("main",{className:"flex justify-center flex-1 pt-6",children:(0,n.jsxs)("section",{className:"container flex flex-col space-y-6",children:[(0,n.jsx)("h2",{className:"text-center font-black text-5xl sm:text-6xl",children:"Find a faucet!"}),(0,n.jsx)("form",{className:"w-full max-w-md mx-auto",children:(0,n.jsx)("input",{autoFocus:!0,className:"w-full border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md",type:"text",placeholder:"Type to search by token, network, or chain...",onChange:function(e){return d(e.target.value)},value:l})}),(0,n.jsxs)("p",{className:"text-center space-x-4",children:[(0,n.jsx)("span",{children:"\ud83d\udcb0 = token"}),(0,n.jsx)("span",{children:"\ud83d\udd17 = chain"}),(0,n.jsx)("span",{children:"\ud83c\udf10 = network"})]}),(0,n.jsx)("div",{className:"space-y-3 w-full max-w-2xl mx-auto",children:p.length>0&&p.map((function(e){var t=e.item;return"token"===t.type?(0,n.jsx)(W,{token:t}):"chain"===t.type?(0,n.jsx)(P,{chain:t},t.id):"network"===t.type?(0,n.jsx)(T,{network:t},t.id):(console.error("unexpected search result",t),null)}))})]})}),(0,n.jsxs)("footer",{className:"flex justify-center py-4",children:["Made with \u26a1 by\xa0",(0,n.jsx)("a",{className:"underline",href:"https://youfoundron.com",children:"@youfoundron"})]})]})}},5301:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(9120)}])}},function(e){e.O(0,[18,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);