(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{2167:function(e,n,t){"use strict";var r=t(3848),a=t(9448);n.default=void 0;var o=a(t(7294)),s=t(9414),c=t(4651),i=t(7426),l={};function u(e,n,t,r){if(e&&(0,s.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(a?"%"+a:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,a=(0,c.useRouter)(),f=o.default.useMemo((function(){var n=(0,s.resolveHref)(a,e.href,!0),t=r(n,2),o=t[0],c=t[1];return{href:o,as:e.as?(0,s.resolveHref)(a,e.as):c||o}}),[a,e.href,e.as]),d=f.href,p=f.as,m=e.children,h=e.replace,v=e.shallow,x=e.scroll,g=e.locale;"string"===typeof m&&(m=o.default.createElement("a",null,m));var b=(n=o.Children.only(m))&&"object"===typeof n&&n.ref,y=(0,i.useIntersection)({rootMargin:"200px"}),N=r(y,2),w=N[0],E=N[1],_=o.default.useCallback((function(e){w(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,w]);(0,o.useEffect)((function(){var e=E&&t&&(0,s.isLocalURL)(d),n="undefined"!==typeof g?g:a&&a.locale,r=l[d+"%"+p+(n?"%"+n:"")];e&&!r&&u(a,d,p,{locale:n})}),[p,d,E,g,t,a]);var k={ref:_,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,o,c,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(t))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),n[a?"replace":"push"](t,r,{shallow:o,locale:i,scroll:c}))}(e,a,d,p,h,v,x,g)},onMouseEnter:function(e){(0,s.isLocalURL)(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(a,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var L="undefined"!==typeof g?g:a&&a.locale,j=a&&a.isLocaleDomain&&(0,s.getDomainLocale)(p,L,a&&a.locales,a&&a.domainLocales);k.href=j||(0,s.addBasePath)((0,s.addLocale)(p,L,a&&a.defaultLocale))}return o.default.cloneElement(n,k)};n.default=f},7426:function(e,n,t){"use strict";var r=t(3848);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!s,i=(0,a.useRef)(),l=(0,a.useState)(!1),u=r(l,2),f=u[0],d=u[1],p=(0,a.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),t||f||e&&e.tagName&&(i.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,o=r.observer,s=r.elements;return s.set(e,n),o.observe(e),function(){s.delete(e),o.unobserve(e),0===s.size&&(o.disconnect(),c.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,a.useEffect)((function(){if(!s&&!f){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[p,f]};var a=t(7294),o=t(3447),s="undefined"!==typeof IntersectionObserver;var c=new Map},7348:function(e,n,t){"use strict";t.r(n),t.d(n,{ErrorPage404:function(){return o}});var r=t(5893),a=(t(7294),t(1664)),o=function(){return(0,r.jsx)("div",{className:"bg-white min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8",children:(0,r.jsx)("div",{className:"max-w-max mx-auto",children:(0,r.jsxs)("main",{className:"sm:flex",children:[(0,r.jsx)("p",{className:"text-4xl font-extrabold text-indigo-600 sm:text-5xl",children:"404"}),(0,r.jsxs)("div",{className:"sm:ml-6",children:[(0,r.jsxs)("div",{className:"sm:border-l sm:border-gray-200 sm:pl-6",children:[(0,r.jsx)("h1",{className:"text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl",children:"Page not found"}),(0,r.jsx)("p",{className:"mt-1 text-base text-gray-500",children:"Please check the URL in the address bar and try again."})]}),(0,r.jsx)("div",{className:"mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6",children:(0,r.jsx)(a.default,{href:"/",children:(0,r.jsx)("a",{className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Go back home"})})})]})]})})})};n.default=o},9014:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return t(7348)}])},1664:function(e,n,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=9014,e(e.s=n);var n}));var n=e.O();_N_E=n}]);