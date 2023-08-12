"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[8539],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var i=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||n;return a?i.createElement(f,o(o({ref:t},u),{},{components:a})):i.createElement(f,o({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<n;c++)o[c]=a[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},907:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var i=a(7462),r=(a(7294),a(3905));const n={slug:"using-data-queries-to-enhance-wildlife-connectivity",title:"Enhancing Wildlife Connectivity Through Data Queries for Rewilding",authors:"ecolazy",tags:["hello","docusaurus"]},o="Enhancing Wildlife Connectivity Through Data Queries for Rewilding",l={permalink:"/blog/using-data-queries-to-enhance-wildlife-connectivity",editUrl:"https://github.com/ecolazy/blog/2019-05-09-using-data-queries-to-enhance-wildlife-connectivity.md",source:"@site/blog/2019-05-09-using-data-queries-to-enhance-wildlife-connectivity.md",title:"Enhancing Wildlife Connectivity Through Data Queries for Rewilding",description:'The concept of rewilding involves the restoration of natural habitats in areas affected by human activity. One effective method to identify suitable locations for rewilding is by searching for topographic areas characterized by natural environments. This can be accomplished using a SQL query to find rows in a database table where the "descriptivegroup" column contains the value "Natural Environment." The "descriptivegroup" column likely holds descriptive tags or categories for each topographic area.',date:"2019-05-09T00:00:00.000Z",formattedDate:"May 9, 2019",tags:[{label:"hello",permalink:"/blog/tags/hello"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:.9,hasTruncateMarker:!1,authors:[{name:"ecolazy",title:"Maintainer",url:"https://ecolazy.github.io",key:"ecolazy"}],frontMatter:{slug:"using-data-queries-to-enhance-wildlife-connectivity",title:"Enhancing Wildlife Connectivity Through Data Queries for Rewilding",authors:"ecolazy",tags:["hello","docusaurus"]},prevItem:{title:"Real-Time Map of WOMAD Festival Network - Monitoring Status and Coverage",permalink:"/blog/live-network-map-for-womad-festival"},nextItem:{title:"Optimizing Wireless Connectivity at the Bath Festival - A Heatmap Analysis",permalink:"/blog/wireless-coverage-at-the-bath-festival-a-heatmap-analasis"}},s={authorsImageUrls:[void 0]},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'The concept of rewilding involves the restoration of natural habitats in areas affected by human activity. One effective method to identify suitable locations for rewilding is by searching for topographic areas characterized by natural environments. This can be accomplished using a SQL query to find rows in a database table where the "descriptivegroup" column contains the value "Natural Environment." The "descriptivegroup" column likely holds descriptive tags or categories for each topographic area.'),(0,r.kt)("p",null,"The results obtained from this data query can be invaluable for planning and conservation efforts, as they help identify potential areas well-suited for rewilding. These areas can serve as vital wildlife corridors, facilitating the movement of wildlife through urban landscapes and promoting biodiversity. By prioritizing these areas for restoration and rewilding, we can significantly improve the connectivity of natural habitats in urban regions, thereby fostering the health and balance of these ecosystems."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM topographicarea\nWHERE 'Natural Environment' = ANY (descriptivegroup)\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Docusaurus Plushie",src:a(7792).Z,width:"1515",height:"779"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Docusaurus Plushie",src:a(7792).Z,width:"1515",height:"779"})),(0,r.kt)("p",null,"The images illustrate how edges like roads and railway tracks can be strategically utilized as wildlife corridors."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Docusaurus Plushie",src:a(1094).Z,width:"1515",height:"779"})))}d.isMDXComponent=!0},7792:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/wildlife-corridors-2-eb49b628a2413b5bc0ee68d7928e2cb7.png"},1094:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/wildlife-corridors-3-c269ec2c78bdda23a3a61fd8e8005f4b.png"}}]);