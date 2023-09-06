"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[8601],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),g=r,f=c["".concat(s,".").concat(g)]||c[g]||m[g]||a;return n?i.createElement(f,o(o({ref:t},p),{},{components:n})):i.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=n(7462),r=(n(7294),n(3905));const a={slug:"visualizing-aonb-permitted-development-zones-with-qgis",title:"Visualizing AONB Permitted Development Zones with QGIS - Streamlining Site Analysis",authors:"ecolazy",tags:["hola","docusaurus"]},o=void 0,l={permalink:"/blog/visualizing-aonb-permitted-development-zones-with-qgis",editUrl:"https://github.com/ecolazy/blog/2018-04-01.md",source:"@site/blog/2018-04-01.md",title:"Visualizing AONB Permitted Development Zones with QGIS - Streamlining Site Analysis",description:"Visualizing AONB Permitted Development Zones with QGIS: Streamlining Site Analysis",date:"2018-04-01T00:00:00.000Z",formattedDate:"April 1, 2018",tags:[{label:"hola",permalink:"/blog/tags/hola"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:1.395,hasTruncateMarker:!1,authors:[{name:"ecolazy",title:"Maintainer",url:"https://ecolazy.github.io",key:"ecolazy"}],frontMatter:{slug:"visualizing-aonb-permitted-development-zones-with-qgis",title:"Visualizing AONB Permitted Development Zones with QGIS - Streamlining Site Analysis",authors:"ecolazy",tags:["hola","docusaurus"]},prevItem:{title:"Optimizing Wireless Connectivity at a Festival - A Heatmap Analysis",permalink:"/blog/wireless-coverage-at-the-bath-festival-a-heatmap-analasis"},nextItem:{title:"Designing Comfortable and Practical Motor Caravans - Where Functionality Meets Enjoyment",permalink:"/blog/designing-for-comfort-and-practicality-in-motor-caravans"}},s={authorsImageUrls:[void 0]},u=[{value:"Visualizing AONB Permitted Development Zones with QGIS: Streamlining Site Analysis",id:"visualizing-aonb-permitted-development-zones-with-qgis-streamlining-site-analysis",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"visualizing-aonb-permitted-development-zones-with-qgis-streamlining-site-analysis"},"Visualizing AONB Permitted Development Zones with QGIS: Streamlining Site Analysis"),(0,r.kt)("p",null,"Site analysis for building development often involves navigating a maze of zoning laws and regulatory constraints, especially in areas designated as Areas of Outstanding Natural Beauty (AONB). Using Geographic Information System (GIS) software like QGIS can significantly simplify this complex task."),(0,r.kt)("p",null,"To begin the site analysis, we import polygons of topographic features from OS MasterMap into QGIS. Using the buffer tool, we generate zones around these polygons, effectively illustrating areas permitted for development under various regulations. "),(0,r.kt)("p",null,"In AONB locations, for instance, there are specific rules concerning the placement of outbuildings. Such buildings must be situated within 20 meters of the main dwelling house if their floor area exceeds 10m^2. To visualize this, we generate a 20-meter buffer zone around the polygon representing the main dwelling house, thus identifying areas where outbuildings can be compliantly placed."),(0,r.kt)("p",null,"Furthermore, if the proposed outbuilding is within 2 meters of the property boundary, its maximum allowable height is capped at 2.4 meters. To pinpoint these constraints, we use the buffer tool to create a zone around the property boundary. The area where these zones intersect defines the permissible development space for an outbuilding. This overlap allows for construction of outbuildings with a pitched roof up to 4 meters tall (eaves height of 2.5 meters) or a flat roof up to 3 meters tall."),(0,r.kt)("p",null,"By leveraging the capabilities of QGIS, we can efficiently and precisely identify ideal locations for building development. This technology not only streamlines the site analysis process but also enables us to make well-informed decisions, ensuring that each project is both compliant with relevant regulations and optimized for its specific environment."))}c.isMDXComponent=!0}}]);