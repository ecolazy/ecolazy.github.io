"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[6624],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(a),m=n,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return a?r.createElement(g,o(o({ref:t},d),{},{components:a})):r.createElement(g,o({ref:t},d))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},819:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:3},o="Creating a Heatmap of Bristol House Prices in QGIS from CSV Data",l={unversionedId:"geospatial-analysis/postgis-data-management-and-queries/query-price-paid-parcel-BS",id:"geospatial-analysis/postgis-data-management-and-queries/query-price-paid-parcel-BS",title:"Creating a Heatmap of Bristol House Prices in QGIS from CSV Data",description:"here.",source:"@site/docs/geospatial-analysis/postgis-data-management-and-queries/query-price-paid-parcel-BS.md",sourceDirName:"geospatial-analysis/postgis-data-management-and-queries",slug:"/geospatial-analysis/postgis-data-management-and-queries/query-price-paid-parcel-BS",permalink:"/docs/geospatial-analysis/postgis-data-management-and-queries/query-price-paid-parcel-BS",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Flood risk",permalink:"/docs/geospatial-analysis/postgis-data-management-and-queries/query-flood-risk"},next:{title:"Land registry price paid parcels",permalink:"/docs/geospatial-analysis/postgis-data-management-and-queries/query-price-paid-parcels-GL"}},p={},s=[{value:"Step 1: Download and Filter Data",id:"step-1-download-and-filter-data",level:2},{value:"Geocode Using csv2geo:",id:"geocode-using-csv2geo",level:2},{value:"Add Geocoded CSV Layer:",id:"add-geocoded-csv-layer",level:2},{value:"Style as Heatmap:",id:"style-as-heatmap",level:2}],d={toc:s};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"creating-a-heatmap-of-bristol-house-prices-in-qgis-from-csv-data"},"Creating a Heatmap of Bristol House Prices in QGIS from CSV Data"),(0,n.kt)("p",null," ",(0,n.kt)("a",{parentName:"p",href:"https://www.gov.uk/government/statistical-data-sets/price-paid-data-downloads"},"here"),"."),(0,n.kt)("h2",{id:"step-1-download-and-filter-data"},"Step 1: Download and Filter Data"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Download the CSV Data:"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://www.gov.uk/government/statistical-data-sets/price-paid-data-downloads"},"link"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Filter for Bristol Postcodes:")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'grep \'^"[^"]*","[^"]*","[^"]*","BS[1-9] \' pp-complete.csv > pp-complete-bs.csv\n')))),(0,n.kt)("h1",{id:"step-2-geocode-the-data"},"Step 2: Geocode the Data"),(0,n.kt)("h2",{id:"geocode-using-csv2geo"},"Geocode Using csv2geo:"),(0,n.kt)("p",null,"Visit csv2geo.com to geocode the filtered CSV file. This will add latitude and longitude columns to your data.\nStep 3: Import Data into QGIS\nOpen QGIS Project:\nOpen QGIS and create a new project."),(0,n.kt)("h2",{id:"add-geocoded-csv-layer"},"Add Geocoded CSV Layer:"),(0,n.kt)("p",null,"To add the geocoded CSV data as a layer, follow these steps:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'a. Click on the "Layer" menu.')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'b. Select "Add Layer" and then choose "Add Delimited Text Layer."')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"c. Browse and select the bristol-pp.csv file.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"d. Specify the Longitude field for the X coordinate and the Latitude field for the Y coordinate."))),(0,n.kt)("h1",{id:"step-4-create-the-heatmap"},"Step 4: Create the Heatmap"),(0,n.kt)("h2",{id:"style-as-heatmap"},"Style as Heatmap:"),(0,n.kt)("p",null,"Style the layer as a heatmap:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'a. Right-click on the added CSV layer in the "Layers" panel.')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'b. Select "Properties" to open the layer properties dialog.')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'c. In the "Symbology" tab, select the dropdown menu next to "Single symbol" and choose "Heatmap."')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"d. Choose the Price field as the attribute for the heatmap.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"e. Customize the color ramp to represent low to high prices.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"f. Adjust the radius and other settings to fine-tune the heatmap appearance."))),(0,n.kt)("h1",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"By following these steps, you can easily create a heatmap in QGIS using CSV data. Heatmaps are a powerful way to visualize data intensity and can provide valuable insights into spatial patterns. This technique is particularly useful for analyzing real estate prices, population density, and more."))}c.isMDXComponent=!0}}]);