"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7759],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,y=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(y,s(s({ref:t},l),{},{components:n})):r.createElement(y,s({ref:t},l))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:i,s[1]=a;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:1},s="Starting Scripts with Systemd",a={unversionedId:"environmental-monitoring/reading-sensors-with-python/starting-scripts-with-systemd",id:"environmental-monitoring/reading-sensors-with-python/starting-scripts-with-systemd",title:"Starting Scripts with Systemd",description:"References",source:"@site/docs/environmental-monitoring/reading-sensors-with-python/starting-scripts-with-systemd.md",sourceDirName:"environmental-monitoring/reading-sensors-with-python",slug:"/environmental-monitoring/reading-sensors-with-python/starting-scripts-with-systemd",permalink:"/docs/environmental-monitoring/reading-sensors-with-python/starting-scripts-with-systemd",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"AC Current",permalink:"/docs/environmental-monitoring/reading-sensors-with-python/ac-current"},next:{title:"Car OBD Port",permalink:"/docs/environmental-monitoring/reading-sensors-with-python/car-obd-port"}},c={},p=[{value:"References",id:"references",level:2}],l={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"starting-scripts-with-systemd"},"Starting Scripts with Systemd"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cp script.py /usr/local/bin/script.py\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-service"},"[Unit]\nBefore=systemd-user-sessions.service\nWants=network-online.target\nAfter=network-online.target\nConditionPathExists=!/var/lib/issuegen-public-ipv4\n\n[Service]\nType=oneshot\nExecStart=/usr/local/bin/public-ipv4.sh\nExecStartPost=/usr/bin/touch /var/lib/issuegen-public-ipv4\nRemainAfterExit=yes\n\n[Install]\nWantedBy=multi-user.target\n\n")),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.fedoraproject.org/en-US/fedora-coreos/tutorial-services/"},"RPICT7V1")))}m.isMDXComponent=!0}}]);