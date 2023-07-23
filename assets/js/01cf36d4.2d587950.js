"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[3152],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),p=n,g=d["".concat(l,".").concat(p)]||d[p]||h[p]||i;return a?r.createElement(g,o(o({ref:t},u),{},{components:a})):r.createElement(g,o({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1188:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const i={slug:"using-data-queries-to-enhance-wildlife-connectivity",title:"Using Data Queries to Enhance Wildlife Connectivity",authors:"reubenliengaard",tags:["hello","docusaurus"]},o="Using Data Queries to Enhance Wildlife Connectivity",s={permalink:"/blog/using-data-queries-to-enhance-wildlife-connectivity",editUrl:"https://github.com/reubenliengaard/blog/2019-05-09-using-data-queries-to-enhance-wildlife-connectivity.md",source:"@site/blog/2019-05-09-using-data-queries-to-enhance-wildlife-connectivity.md",title:"Using Data Queries to Enhance Wildlife Connectivity",description:'Rewilding involves the restoration of natural habitats in areas that have been modified or degraded by human activity. One way to identify suitable areas for rewilding is to search for topographic areas that are characterized by natural environments. This can be achieved through the use of a SQL query to search for rows in a database table where the value "Natural Environment" appears in the "descriptivegroup" column. This column likely contains an array of descriptive tags or categories for each topographic area.',date:"2019-05-09T00:00:00.000Z",formattedDate:"May 9, 2019",tags:[{label:"hello",permalink:"/blog/tags/hello"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:.925,hasTruncateMarker:!1,authors:[{name:"Reuben Liengaard",title:"Maintainer",url:"https://reubenliengaard.github.io",key:"reubenliengaard"}],frontMatter:{slug:"using-data-queries-to-enhance-wildlife-connectivity",title:"Using Data Queries to Enhance Wildlife Connectivity",authors:"reubenliengaard",tags:["hello","docusaurus"]},prevItem:{title:"Live Network Map for WOMAD Festival - Visualizing Status and Coverage",permalink:"/blog/live-network-map-for-womad-festival"},nextItem:{title:"Wireless Coverage at the Bath Festival - A Heatmap Analysis",permalink:"/blog/wireless-coverage-at-the-bath-festival-a-heatmap-analasis"}},l={authorsImageUrls:[void 0]},c=[],u={toc:c};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'Rewilding involves the restoration of natural habitats in areas that have been modified or degraded by human activity. One way to identify suitable areas for rewilding is to search for topographic areas that are characterized by natural environments. This can be achieved through the use of a SQL query to search for rows in a database table where the value "Natural Environment" appears in the "descriptivegroup" column. This column likely contains an array of descriptive tags or categories for each topographic area.'),(0,n.kt)("p",null,"The results of this query can inform planning and conservation efforts by identifying areas that are potentially well-suited for rewilding. These areas could provide corridors for wildlife movement through urban environments and enhance biodiversity in these areas. By prioritizing these areas for restoration and rewilding, it is possible to improve the connectivity of natural habitats in urban areas and promote the health and well-being of these ecosystems."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM topographicarea\nWHERE 'Natural Environment' = ANY (descriptivegroup)\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Docusaurus Plushie",src:a(7792).Z,width:"1515",height:"779"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Docusaurus Plushie",src:a(7792).Z,width:"1515",height:"779"})),(0,n.kt)("p",null,"You can see how the edges or roads and railway tracs could be used as wildlife corridors."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Docusaurus Plushie",src:a(1094).Z,width:"1515",height:"779"})))}d.isMDXComponent=!0},7792:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/wildlife-corridors-2-eb49b628a2413b5bc0ee68d7928e2cb7.png"},1094:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/wildlife-corridors-3-c269ec2c78bdda23a3a61fd8e8005f4b.png"}}]);