(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3678)}])},5789:function(e,n,r){"use strict";r.d(n,{Z:function(){return i}});var t=r(5893),a=r(8721),s=r.n(a);function i(e){var n=e.children;return(0,t.jsx)("div",{className:s().layout,children:n})}},8418:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,a=!1,s=void 0;try{for(var i,c=e[Symbol.iterator]();!(t=(i=c.next()).done)&&(r.push(i.value),!n||r.length!==n);t=!0);}catch(l){a=!0,s=l}finally{try{t||null==c.return||c.return()}finally{if(a)throw s}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var a,s=(a=r(7294))&&a.__esModule?a:{default:a},i=r(6273),c=r(387),l=r(7190);var o={};function d(e,n,r,t){if(e&&i.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var a=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;o[n+"%"+r+(a?"%"+a:"")]=!0}}var u=function(e){var n,r=!1!==e.prefetch,a=c.useRouter(),u=s.default.useMemo((function(){var n=t(i.resolveHref(a,e.href,!0),2),r=n[0],s=n[1];return{href:r,as:e.as?i.resolveHref(a,e.as):s||r}}),[a,e.href,e.as]),h=u.href,f=u.as,_=e.children,x=e.replace,m=e.shallow,p=e.scroll,j=e.locale;"string"===typeof _&&(_=s.default.createElement("a",null,_));var v=(n=s.default.Children.only(_))&&"object"===typeof n&&n.ref,b=t(l.useIntersection({rootMargin:"200px"}),2),y=b[0],k=b[1],w=s.default.useCallback((function(e){y(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,y]);s.default.useEffect((function(){var e=k&&r&&i.isLocalURL(h),n="undefined"!==typeof j?j:a&&a.locale,t=o[h+"%"+f+(n?"%"+n:"")];e&&!t&&d(a,h,f,{locale:n})}),[f,h,k,j,r,a]);var N={ref:w,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,a,s,c,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),null==c&&t.indexOf("#")>=0&&(c=!1),n[a?"replace":"push"](r,t,{shallow:s,locale:l,scroll:c}))}(e,a,h,f,x,m,p,j)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),i.isLocalURL(h)&&d(a,h,f,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var g="undefined"!==typeof j?j:a&&a.locale,I=a&&a.isLocaleDomain&&i.getDomainLocale(f,g,a&&a.locales,a&&a.domainLocales);N.href=I||i.addBasePath(i.addLocale(f,g,a&&a.defaultLocale))}return s.default.cloneElement(n,N)};n.default=u},7190:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,a=!1,s=void 0;try{for(var i,c=e[Symbol.iterator]();!(t=(i=c.next()).done)&&(r.push(i.value),!n||r.length!==n);t=!0);}catch(l){a=!0,s=l}finally{try{t||null==c.return||c.return()}finally{if(a)throw s}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!i,l=a.useRef(),o=t(a.useState(!1),2),d=o[0],u=o[1],h=a.useCallback((function(e){l.current&&(l.current(),l.current=void 0),r||d||e&&e.tagName&&(l.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=c.get(n);if(r)return r;var t=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return c.set(n,r={id:n,observer:a,elements:t}),r}(r),a=t.id,s=t.observer,i=t.elements;return i.set(e,n),s.observe(e),function(){i.delete(e),s.unobserve(e),0===i.size&&(s.disconnect(),c.delete(a))}}(e,(function(e){return e&&u(e)}),{rootMargin:n}))}),[r,n,d]);return a.useEffect((function(){if(!i&&!d){var e=s.requestIdleCallback((function(){return u(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[d]),[h,d]};var a=r(7294),s=r(9311),i="undefined"!==typeof IntersectionObserver;var c=new Map},3678:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var t=r(5893),a=r(9008),s=r(1664),i=r(5789);function c(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.default,{children:[(0,t.jsx)("title",{children:"Owen Bick \u2013 A product designer and web developer based in Boston"}),(0,t.jsx)("link",{rel:"icon",href:"./static/favicon.ico"}),(0,t.jsx)("meta",{name:"description",content:"Owen Bick is a product designer and web developer based in Boston."}),(0,t.jsx)("meta",{name:"author",content:"Owen Bick"})]}),(0,t.jsxs)("header",{className:"header",children:[(0,t.jsx)("div",{className:"header__logo",children:(0,t.jsx)(s.default,{href:"/",children:(0,t.jsx)("a",{children:(0,t.jsx)("div",{className:"header__logo__img"})})})}),(0,t.jsx)("div",{className:"header__nav",children:(0,t.jsxs)("ul",{className:"header__nav__list",children:[(0,t.jsx)("li",{className:"header__nav__item",children:(0,t.jsx)(s.default,{className:"header__nav__link",href:"/",children:(0,t.jsx)("a",{className:"header__nav__link active",children:"Index"})})}),(0,t.jsx)("li",{className:"header__nav__item",children:(0,t.jsx)(s.default,{href:"/about",children:(0,t.jsx)("a",{className:"header__nav__link",children:"About"})})}),(0,t.jsx)("li",{className:"header__nav__item",children:(0,t.jsx)(s.default,{className:"header__nav__link",href:"/contact",children:(0,t.jsx)("a",{className:"header__nav__link",children:"Contact"})})})]})})]}),(0,t.jsxs)(i.Z,{children:[(0,t.jsx)("section",{className:"hero",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)("h1",{children:["Hi, I'm ",(0,t.jsx)("span",{className:"line",children:"Owen Bick"})," ",(0,t.jsx)("span",{className:"wave",children:"\ud83d\udc4b"})]}),(0,t.jsx)("h2",{children:"I'm a product designer and web developer based in Boston"})]})}),(0,t.jsx)("section",{className:"portfolio",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("h3",{children:"Featured Projects"}),(0,t.jsxs)("ul",{className:"portfolio__list",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("a",{href:"//macdb.io",children:"MacDB"}),(0,t.jsx)("span",{children:", A database of macOS versions"})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("a",{href:"//devgigs.com",children:"DevGigs.com"}),(0,t.jsx)("span",{children:", Jobs for coders"})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("a",{href:"//gitcdn.net",children:"GitCDN"}),(0,t.jsx)("span",{children:", A free CDN for GitHub"})]})]})]})}),(0,t.jsx)("section",{className:"about",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("h3",{children:"About Me"}),(0,t.jsx)("p",{children:"I'm Owen, I'm a product designer and web developer that currently lives in Boston. I've helped many companies build digital products that are more human. My philosophy is simple: design products in a way that allows someone to use the product for the first time and feel like they understand what they're looking at. They don't need to be experts, but a digital product should not be overwhelming. Currently, I work at 829 Studios, but I'm always open to freelance projects and can be contacted here."}),(0,t.jsx)(s.default,{href:"/about",children:(0,t.jsx)("a",{children:"Read more \u2192"})})]})}),(0,t.jsx)("section",{className:"social",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("h3",{children:"Follow me"}),(0,t.jsx)("span",{children:"Twitter: "}),(0,t.jsx)("a",{href:"//twitter.com/owenbick",children:"@owenbick"}),(0,t.jsx)("br",{}),(0,t.jsx)("span",{children:"LinkedIn: "}),(0,t.jsx)("a",{href:"//linkedin.com/in/bick",children:"@bick"}),(0,t.jsx)("br",{}),(0,t.jsx)("span",{children:"ProductHunt: "}),(0,t.jsx)("a",{href:"//producthunt.com/@bick",children:"@bick"}),(0,t.jsx)("br",{}),(0,t.jsx)("span",{children:"Instagram: "}),(0,t.jsx)("a",{href:"//instagram.com/owenbick",children:"@owenbick"}),(0,t.jsx)("br",{}),(0,t.jsx)("span",{children:"GitHub: "}),(0,t.jsx)("a",{href:"//github.com/bick",children:"@bick"}),(0,t.jsx)("br",{}),(0,t.jsx)("span",{children:"Dribbble: "}),(0,t.jsx)("a",{href:"//dribbble.com/bick",children:"@bick"})]})})]}),(0,t.jsx)("footer",{className:"footer",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)("ul",{className:"footer__list",children:[(0,t.jsx)("li",{className:"footer__list__item",children:(0,t.jsx)(s.default,{href:"/",children:(0,t.jsx)("a",{className:"footer__list__link",children:"Index"})})}),(0,t.jsx)("li",{className:"footer__list__item",children:(0,t.jsx)(s.default,{href:"/about",children:(0,t.jsx)("a",{className:"footer__list__link",children:"About"})})}),(0,t.jsx)("li",{className:"footer__list__item",children:(0,t.jsx)(s.default,{href:"/contact",children:(0,t.jsx)("a",{className:"footer__list__link",children:"Contact"})})})]}),(0,t.jsx)("span",{children:"Copyright \xa9 2022 Owen Bick. All Rights Reserved. This website doesn\u2019t use any cookies."})]})})]})}},8721:function(e){e.exports={layout:"layout_layout__Xf50c",hello:"layout_hello__dh3s8"}},9008:function(e,n,r){e.exports=r(5443)},1664:function(e,n,r){e.exports=r(8418)}},function(e){e.O(0,[774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);