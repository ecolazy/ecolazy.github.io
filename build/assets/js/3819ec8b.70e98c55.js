"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[5226],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(r),d=i,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||l;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,o=new Array(l);o[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:i,o[1]=a;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8425:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const l={sidebar_position:2},o="Extract all zips",a={unversionedId:"desktop-linux/working-with-files-via-linux-shell/extract-all-zips",id:"desktop-linux/working-with-files-via-linux-shell/extract-all-zips",title:"Extract all zips",description:"This script will find all .zip files in the current directory and its subdirectories, and it will unzip each of them.",source:"@site/docs/desktop-linux/working-with-files-via-linux-shell/extract-all-zips.md",sourceDirName:"desktop-linux/working-with-files-via-linux-shell",slug:"/desktop-linux/working-with-files-via-linux-shell/extract-all-zips",permalink:"/docs/desktop-linux/working-with-files-via-linux-shell/extract-all-zips",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Copy files into directories by extension",permalink:"/docs/desktop-linux/working-with-files-via-linux-shell/cp-files-into-directories-by-extension"},next:{title:"Rename all linux frendly",permalink:"/docs/desktop-linux/working-with-files-via-linux-shell/rename-all-linux-frendly"}},s={},c=[{value:"References",id:"references",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"extract-all-zips"},"Extract all zips"),(0,i.kt)("p",null,"This script will find all .zip files in the current directory and its subdirectories, and it will unzip each of them."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'#!/usr/bin/bash\nfind . -name "*.zip" -exec unzip {} \\;\n')),(0,i.kt)("h2",{id:"references"},"References"))}u.isMDXComponent=!0}}]);