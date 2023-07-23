"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[9083],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>p});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=i.createContext({}),d=function(e){var t=i.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=d(e.components);return i.createElement(u.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),c=d(a),h=n,p=c["".concat(u,".").concat(h)]||c[h]||g[h]||r;return a?i.createElement(p,s(s({ref:t},l),{},{components:a})):i.createElement(p,s({ref:t},l))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=h;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:n,s[1]=o;for(var d=2;d<r;d++)s[d]=a[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1067:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=a(7462),n=(a(7294),a(3905));const r={slug:"creating-3d-buildings-from-mastermap-with-qgis",title:"Creating 3d Buildings From Mastermap With Qgis",authors:"ecolazy",tags:["hola","docusaurus"]},s="Creating 3d Buildings From Mastermap With Qgis",o={permalink:"/blog/creating-3d-buildings-from-mastermap-with-qgis",editUrl:"https://github.com/ecolazy/blog/2021-02-02-creating-3d-buildings-from-mastermap-with-qgis.md",source:"@site/blog/2021-02-02-creating-3d-buildings-from-mastermap-with-qgis.md",title:"Creating 3d Buildings From Mastermap With Qgis",description:"The Ordnance Survey Mastermap Topography Layer, the Building Height Attribute (BHA), and the Environment Agency LiDAR Digital Terrain Model (DTM) are all useful data sources that can be used to create 3D models of buildings. By combining this data and using the Qgis2ThreeJS plugin in QGIS, it is possible to visualize the BHA data in 3D and create a 3D model of a building.",date:"2021-02-02T00:00:00.000Z",formattedDate:"February 2, 2021",tags:[{label:"hola",permalink:"/blog/tags/hola"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:1.13,hasTruncateMarker:!1,authors:[{name:"Reuben Liengaard",title:"Maintainer",url:"https://ecolazy.github.io",key:"ecolazy"}],frontMatter:{slug:"creating-3d-buildings-from-mastermap-with-qgis",title:"Creating 3d Buildings From Mastermap With Qgis",authors:"ecolazy",tags:["hola","docusaurus"]},prevItem:{title:"Truss Connection Node Modeling",permalink:"/blog/truss-connection-node-modeling"},nextItem:{title:"Gifford Circus Cyr Wheel Performances - A Custom Modular Circular Stage",permalink:"/blog/gifford-circus-cry-wheel-performances"}},u={authorsImageUrls:[void 0]},d=[],l={toc:d};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Ordnance Survey Mastermap Topography Layer, the Building Height Attribute (BHA), and the Environment Agency LiDAR Digital Terrain Model (DTM) are all useful data sources that can be used to create 3D models of buildings. By combining this data and using the Qgis2ThreeJS plugin in QGIS, it is possible to visualize the BHA data in 3D and create a 3D model of a building."),(0,n.kt)("p",null,"To do this, the Qgis2ThreeJS plugin must be installed and the BHA data, DTM data, and any additional desired layers must be loaded into the QGIS project. The plugin can then be used to style the BHA data and specify the desired height attribute for extrusion, resulting in a 3D model of the building. This model can be saved as an HTML file and viewed in a web browser."),(0,n.kt)("p",null,"When combined with the LiDAR DTM, the resulting 3D model is fairly accurate and can be opened in Grasshopper, a visual programming language and environment that runs within the Rhinoceros 3D CAD application. With the addition of the Ladybug plugin, this 3D model can be used to perform detailed analyses of climate data and create customized, interactive visualizations for environmentally-informed design, such as sunlight studies."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Docusaurus Plushie",src:a(2603).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:a(8005).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:a(9677).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:a(8677).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:a(1563).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:a(6286).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:a(6351).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:a(8212).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:a(1093).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:a(2841).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:a(3344).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:a(3873).Z,width:"1288",height:"605"})),(0,n.kt)("h1",{id:"references"},"References"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://digimap.edina.ac.uk/help/gis/qgis/qgis_bha/"},"qgis bha")))}c.isMDXComponent=!0},2603:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/bha-1-43f5d793112b5e7d965dd45b486ad82e.png"},2841:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/bha-10-dfcbbad19705932c13a95718ea657cb5.png"},3344:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/bha-11-60332f3067091585939f287871665169.png"},3873:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/bha-12-767c10f258be4ccea3fd505a9fe69224.png"},8005:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/bha-2-8cbb5ba2a17084da185d97d130f94089.png"},9677:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/bha-3-02b772b8c9905ff1d1ad5f175ada8c7f.png"},8677:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/bha-4-ec53deac98415e65bcd3d9a83ce662de.png"},1563:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/bha-5-0837bbfde76f3cace5346b723ccf3f01.png"},6286:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/bha-6-8391a5b4741d6b85cb51feabd31d5d9e.png"},6351:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/bha-7-5dba3500b25db255c1561d822aaddb58.png"},8212:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/bha-8-0df5a16690d814e3846e2204c1160f06.png"},1093:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/bha-9-337f5cad895cc88b4703da28a5e97070.png"}}]);