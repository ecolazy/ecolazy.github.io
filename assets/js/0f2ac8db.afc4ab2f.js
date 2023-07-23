"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[3114],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>y});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(a),g=n,y=c["".concat(s,".").concat(g)]||c[g]||u[g]||o;return a?r.createElement(y,i(i({ref:t},d),{},{components:a})):r.createElement(y,i({ref:t},d))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=g;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},2857:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:3},i="Land registry price paid parish",p={unversionedId:"geospatial-analysis/postgis-data-management-and-queries/query-price-paid-parish",id:"geospatial-analysis/postgis-data-management-and-queries/query-price-paid-parish",title:"Land registry price paid parish",description:"Download data",source:"@site/docs/geospatial-analysis/postgis-data-management-and-queries/query-price-paid-parish.md",sourceDirName:"geospatial-analysis/postgis-data-management-and-queries",slug:"/geospatial-analysis/postgis-data-management-and-queries/query-price-paid-parish",permalink:"/docs/geospatial-analysis/postgis-data-management-and-queries/query-price-paid-parish",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Land registry price paid parcels",permalink:"/docs/geospatial-analysis/postgis-data-management-and-queries/query-price-paid-parcels"},next:{title:"Query workings",permalink:"/docs/geospatial-analysis/postgis-data-management-and-queries/query-workings"}},s={},l=[{value:"Download data",id:"download-data",level:2},{value:"Import bdline",id:"import-bdline",level:2},{value:"Connect to server",id:"connect-to-server",level:2},{value:"SELECT",id:"select",level:3},{value:"Find avarage point value for duplicate polygons",id:"find-avarage-point-value-for-duplicate-polygons",level:2},{value:"Import new price paid polygons to file",id:"import-new-price-paid-polygons-to-file",level:2},{value:"Add price paid polygons layer to Qgis",id:"add-price-paid-polygons-layer-to-qgis",level:2},{value:"Colour polygons by attribute field",id:"colour-polygons-by-attribute-field",level:2}],d={toc:l};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"land-registry-price-paid-parish"},"Land registry price paid parish"),(0,n.kt)("h2",{id:"download-data"},"Download data"),(0,n.kt)("p",null,"We downloaded a CSV file that contained property price data for the past three years, along with the postal code coordinates and boundary line polygons."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ wget bdline_gpkg_gb.zip\n&& unzip bdline_gpkg_gb.zip\n&& cd data\n")),(0,n.kt)("h2",{id:"import-bdline"},"Import bdline"),(0,n.kt)("p",null,"We used ogr2ogr to convert a file containing boundary lines (in a format called GeoPackage) into a PostgreSQL file, changed the projection of the data from OSGB1936 to WGS84, and imported it into a database."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'ogr2ogr \\\n-f "PostgreSQL" \\\n-a_srs "EPSG:27700" \\\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"-t_srs \"EPSG:4326\" \\\n-progress PG:\"dbname='gis' host='$ip' port='5432' user='$user'\npassword='$password'\" \\\nbdline_gb.gpkg\n")),(0,n.kt)("h2",{id:"connect-to-server"},"Connect to server"),(0,n.kt)("p",null,"Starting a psql instance on the client in order to interact with the database on the server."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"psql -h 192.168.88.10 -U postgres gis\n")),(0,n.kt)("h1",{id:"create-priced-paid-polygons-for-every-point"},"Create priced paid polygons for every point"),(0,n.kt)("p",null,"We used point data that was already in the database from a previous project to create a new polygon for each point that was within the boundaries of a parish. We also added the price paid for each house (the point) to the corresponding polygon."),(0,n.kt)("h3",{id:"select"},"SELECT"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"parish.geom,\npoints.pounds\nINTO pp_parish\nFROM\nparish INNER JOIN points\nON st_contains(parish.geom, points.geom);\n")),(0,n.kt)("h2",{id:"find-avarage-point-value-for-duplicate-polygons"},"Find avarage point value for duplicate polygons"),(0,n.kt)("p",null,"Like in the the previous project, we calculated the average value for each of the duplicate polygons."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"SELECT geom,avg(pounds)\nINTO avg_pp_parish\nFROM pp_parish\nGROUP BY geom;\n")),(0,n.kt)("h2",{id:"import-new-price-paid-polygons-to-file"},"Import new price paid polygons to file"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Qgis > Database > DB Manager > Import Layer/File - Name: pp_parish\n")),(0,n.kt)("h2",{id:"add-price-paid-polygons-layer-to-qgis"},"Add price paid polygons layer to Qgis"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Qgis > Layer > Add Layer > Add Vector Layer\nQgis > Database > DB Manager > Import Layer/File - Name: pp_parish\nVector Dataset(s): .shp\n")),(0,n.kt)("h2",{id:"colour-polygons-by-attribute-field"},"Colour polygons by attribute field"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Right click: Layer > Properties\nSymbology > Single Symbol: Gradiated\nVaule: pounds\nColour Ramp: Spectral\nInvert Colour Ramp\nSegmentation: Equal Interval\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Docusaurus Plushie",src:a(2198).Z,width:"1630",height:"886"})))}c.isMDXComponent=!0},2198:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/price-paid-parish-7dab74e8696d5ee03d431495e4fbf360.jpg"}}]);