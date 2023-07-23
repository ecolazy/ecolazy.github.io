"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[1315],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),h=o,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||n;return a?r.createElement(f,i(i({ref:t},p),{},{components:a})):r.createElement(f,i({ref:t},p))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5242:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=a(7462),o=(a(7294),a(3905));const n={slug:"inspire-index-polygon-house-prices",title:"INSPIRE Index Polygon House Prices - A Map of Average Sale Prices",authors:"ecolazy",tags:["hello","docusaurus"]},i="INSPIRE Index Polygon House Prices - A Map of Average Sale Prices",s={permalink:"/blog/inspire-index-polygon-house-prices",editUrl:"https://github.com/ecolazy/blog/2023-07-02-inspire-index-polygon-house-prices.md",source:"@site/blog/2023-07-02-inspire-index-polygon-house-prices.md",title:"INSPIRE Index Polygon House Prices - A Map of Average Sale Prices",description:"Prepare prices data",date:"2023-07-02T00:00:00.000Z",formattedDate:"July 2, 2023",tags:[{label:"hello",permalink:"/blog/tags/hello"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:1.755,hasTruncateMarker:!1,authors:[{name:"ecolazy",title:"Maintainer",url:"https://ecolazy.github.io",key:"ecolazy"}],frontMatter:{slug:"inspire-index-polygon-house-prices",title:"INSPIRE Index Polygon House Prices - A Map of Average Sale Prices",authors:"ecolazy",tags:["hello","docusaurus"]},prevItem:{title:"Infinite Universe",permalink:"/blog/infinite-universe"},nextItem:{title:"Flood Risk Assessment of Pudding Brooke",permalink:"/blog/flood-risk-assessment-of-pudding-brook"}},l={authorsImageUrls:[void 0]},c=[{value:"Prepare prices data",id:"prepare-prices-data",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prepare-prices-data"},"Prepare prices data"),(0,o.kt)("p",null,'In order to effectively analyze and visualize real estate data, it is important to first properly organize and process the data. To this end, our team combined three separate files containing price paid data into a single file and cleaned and filtered the data through a series of steps. These steps included the removal of quotes, the selection of only rows with "GL" followed by a number, the printing of certain columns, the addition of column names, and the deletion of rows with null values.'),(0,o.kt)("p",null,"Once the data was cleaned and organized, we used the powerful tool ogr2ogr to convert a file with cadastral parcel information into a PostgreSQL file. We then changed the projection from OSGB to WGS84 and imported it into a database. In order to store the data in a structured manner, we started a psql session and created empty tables with certain columns in the database."),(0,o.kt)("p",null,"Next, we used the \\copy command and SQL JOIN to combine the price and coordinates data based on their shared postcodes. We added a column for geometry data and used the latitude and longitude data to create points. We then calculated the average value for each of the duplicate polygons."),(0,o.kt)("p",null,"Finally, we used the powerful mapping software QGIS to export the table from the database and modified the layer properties for visual appeal. Through this process, we were able to effectively organize and analyze the real estate data, allowing us to extract valuable insights and gain a deeper understanding of the market."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Docusaurus Plushie",src:a(9903).Z,width:"1534",height:"787"})),(0,o.kt)("p",null,"During our analysis of real estate data, we encountered an issue with some of the postal codes not being properly associated with the intended polygons. This issue had the potential to significantly impact the accuracy and usefulness of our data."),(0,o.kt)("p",null,"To address this issue and improve the accuracy of our data, we decided to use a different set of polygons (parishes) with a lower resolution for the next project. We hoped that this approach would help to more accurately associate the postal codes with the intended polygons, resulting in a more reliable dataset."))}d.isMDXComponent=!0},9903:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/price-paid-parcel-b58fdcacf1b5265bca273e23e59ebb2e.jpg"}}]);