(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(7282)}])},1516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2648).Z,l=r(7273).Z,s=n(r(7294)),o=r(4532),i=r(3353),a=r(1410),c=r(9064),u=r(370),f=r(9955),d=r(4224),h=r(508),p=r(1516),m=r(4266);let x=new Set;function j(e,t,r,n,l){if(l||i.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let l=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,s=t+"%"+r+"%"+l;if(x.has(s))return;x.add(s)}Promise.resolve(e.prefetch(t,r,n)).catch(e=>{})}}function v(e){return"string"==typeof e?e:a.formatUrl(e)}let y=s.default.forwardRef(function(e,t){let r,n;let{href:a,as:x,children:y,prefetch:g,passHref:b,replace:w,shallow:k,scroll:N,locale:_,onClick:C,onMouseEnter:M,onTouchStart:E,legacyBehavior:L=!1}=e,O=l(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=y,L&&("string"==typeof r||"number"==typeof r)&&(r=s.default.createElement("a",null,r));let P=!1!==g,T=s.default.useContext(f.RouterContext),S=s.default.useContext(d.AppRouterContext),A=null!=T?T:S,R=!T,{href:z,as:I}=s.default.useMemo(()=>{if(!T){let e=v(a);return{href:e,as:x?v(x):e}}let[e,t]=o.resolveHref(T,a,!0);return{href:e,as:x?o.resolveHref(T,x):t||e}},[T,a,x]),B=s.default.useRef(z),H=s.default.useRef(I);L&&(n=s.default.Children.only(r));let U=L?n&&"object"==typeof n&&n.ref:t,[D,K,W]=h.useIntersection({rootMargin:"200px"}),Z=s.default.useCallback(e=>{(H.current!==I||B.current!==z)&&(W(),H.current=I,B.current=z),D(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[I,U,z,W,D]);s.default.useEffect(()=>{A&&K&&P&&j(A,z,I,{locale:_},R)},[I,z,K,_,P,null==T?void 0:T.locale,A,R]);let F={ref:Z,onClick(e){L||"function"!=typeof C||C(e),L&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),A&&!e.defaultPrevented&&function(e,t,r,n,l,o,a,c,u,f){let{nodeName:d}=e.currentTarget,h="A"===d.toUpperCase();if(h&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!i.isLocalURL(r)))return;e.preventDefault();let p=()=>{"beforePopState"in t?t[l?"replace":"push"](r,n,{shallow:o,locale:c,scroll:a}):t[l?"replace":"push"](n||r,{forceOptimisticNavigation:!f})};u?s.default.startTransition(p):p()}(e,A,z,I,w,k,N,_,R,P)},onMouseEnter(e){L||"function"!=typeof M||M(e),L&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),A&&(P||!R)&&j(A,z,I,{locale:_,priority:!0,bypassPrefetchedCheck:!0},R)},onTouchStart(e){L||"function"!=typeof E||E(e),L&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),A&&(P||!R)&&j(A,z,I,{locale:_,priority:!0,bypassPrefetchedCheck:!0},R)}};if(c.isAbsoluteUrl(I))F.href=I;else if(!L||b||"a"===n.type&&!("href"in n.props)){let e=void 0!==_?_:null==T?void 0:T.locale,t=(null==T?void 0:T.isLocaleDomain)&&p.getDomainLocale(I,e,null==T?void 0:T.locales,null==T?void 0:T.domainLocales);F.href=t||m.addBasePath(u.addLocale(I,e,null==T?void 0:T.defaultLocale))}return L?s.default.cloneElement(n,F):s.default.createElement("a",Object.assign({},O,F),r)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:a}=e,c=a||!s,[u,f]=n.useState(!1),d=n.useRef(null),h=n.useCallback(e=>{d.current=e},[]);n.useEffect(()=>{if(s){if(c||u)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:l,elements:s}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=i.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=o.get(n)))return t;let l=new Map,s=new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:s,elements:l},i.push(r),o.set(r,t),t}(r);return s.set(e,t),l.observe(e),function(){if(s.delete(e),l.unobserve(e),0===s.size){l.disconnect(),o.delete(n);let e=i.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!u){let e=l.requestIdleCallback(()=>f(!0));return()=>l.cancelIdleCallback(e)}},[c,r,t,u,d.current]);let p=n.useCallback(()=>{f(!1)},[]);return[h,u,p]};var n=r(7294),l=r(29);let s="function"==typeof IntersectionObserver,o=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7282:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(5893),l=r(9008),s=r.n(l),o=r(7294),i=r(1664),a=r.n(i);let c=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("footer",{className:"text-gray-600 body-font",children:(0,n.jsxs)("div",{className:"container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col",children:[(0,n.jsx)(a(),{href:"/",className:"flex title-font font-medium items-center md:justify-start justify-center text-gray-900",children:(0,n.jsx)("span",{className:"ml-3 text-xl text-white",children:"Commatech"})}),(0,n.jsxs)("p",{className:"text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4",children:["\xa9 2023 Commatech —",(0,n.jsx)("a",{href:"https://commatech.in",className:"text-gray-600 ml-1",rel:"noopener noreferrer",target:"_blank",children:"@Commatech"})]}),(0,n.jsxs)("span",{className:"inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start",children:[(0,n.jsx)(a(),{className:"text-gray-500",href:"https://www.facebook.com/profile.php?id=100091248121497&is_tour_completed=true",children:(0,n.jsx)("svg",{fill:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"w-5 h-5",viewBox:"0 0 24 24",children:(0,n.jsx)("path",{d:"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"})})}),(0,n.jsx)("a",{className:"ml-3 text-gray-500",children:(0,n.jsx)("svg",{fill:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"w-5 h-5",viewBox:"0 0 24 24",children:(0,n.jsx)("path",{d:"M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"})})}),(0,n.jsx)(a(),{className:"ml-3 text-gray-500",href:"https://instagram.com/commatech.in?igshid=ZDdkNTZiNTM=",children:(0,n.jsxs)("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"w-5 h-5",viewBox:"0 0 24 24",children:[(0,n.jsx)("rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"}),(0,n.jsx)("path",{d:"M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"})]})}),(0,n.jsx)("a",{className:"ml-3 text-gray-500",children:(0,n.jsxs)("svg",{fill:"currentColor",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"0",className:"w-5 h-5",viewBox:"0 0 24 24",children:[(0,n.jsx)("path",{stroke:"none",d:"M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"}),(0,n.jsx)("circle",{cx:"4",cy:"4",r:"2",stroke:"none"})]})})]})]})})});r(3547);let u=()=>{let[e,t]=(0,o.useState)(!1);return(0,n.jsxs)("div",{className:"h-[50px] md:flex bg-gradient-to-r to-black from-[#0b0b3e] shadow-sm shadow-gray-200 text-white items-center align-middle fixed top-0 right-0 left-0 z-40 justify-between md:py-0 py-4   lg:px-24 px-5",children:[(0,n.jsx)("h3",{children:(0,n.jsxs)(a(),{href:"/",className:"text-center",children:[(0,n.jsx)("span",{className:"text-xl text-[#FE5B7C]",children:"Comma"}),"tech"]})}),(0,n.jsxs)("ul",{className:"md:flex hidden",children:[(0,n.jsx)("li",{className:"inline mr-7 text-sm uppercase text-gray-400 cursor-pointer list-none",children:(0,n.jsx)(a(),{href:"/",children:"Home"})}),(0,n.jsx)("li",{className:"inline mr-7 text-sm uppercase text-gray-400 cursor-pointer list-none",children:(0,n.jsx)(a(),{href:"/about",children:"About Us"})}),(0,n.jsx)("li",{className:"inline mr-7 text-sm uppercase text-gray-400 cursor-pointer list-none",children:(0,n.jsx)(a(),{href:"/service",children:"Services"})}),(0,n.jsx)("li",{className:"inline mr-7 text-sm uppercase text-gray-400 cursor-pointer list-none",children:(0,n.jsx)(a(),{href:"/contact",children:"Contact"})})]}),(0,n.jsxs)("div",{className:"md:hidden flex justify-between flex-col w-6 h-5 cursor-pointer absolute right-3 top-4",onClick:()=>t(!e),children:[(0,n.jsx)("div",{className:"w-full h-1 bg-white"}),(0,n.jsx)("div",{className:"w-full h-1 bg-white"}),(0,n.jsx)("div",{className:"w-full h-1 bg-white"})]}),(0,n.jsxs)("ul",{onClick:()=>t(!1),className:"md:hidden transition-all duration-100 fixed h-[calc(100vh-0px)] w-1/2 bg-black top-12 m-0 p-0 font-bold text-gray-300 list-none bottom-0 flex flex-col items-center justify-around z-50",style:{right:e?"0px":"-100vw"},children:[(0,n.jsx)("li",{children:(0,n.jsx)(a(),{href:"/",children:"Home"})}),(0,n.jsx)("li",{children:(0,n.jsx)(a(),{href:"/about",children:"About Us"})}),(0,n.jsx)("li",{children:(0,n.jsx)(a(),{href:"/service",children:"Services"})}),(0,n.jsx)("li",{children:(0,n.jsx)(a(),{href:"/contact",children:"Contact"})})]})]})},f=e=>{let{children:t}=e;return(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)(s(),{children:(0,n.jsx)("link",{rel:"icon",href:"/commatechfav.png"})}),(0,n.jsx)(u,{}),t,(0,n.jsx)(c,{})]})};r(3814);var d=function(e){let{Component:t,pageProps:r}=e;return(0,n.jsx)(f,{className:"font-mono",children:(0,n.jsx)(t,{...r})})}},3547:function(){},3814:function(){},9008:function(e,t,r){e.exports=r(2636)},1664:function(e,t,r){e.exports=r(5569)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(6885)}),_N_E=e.O()}]);