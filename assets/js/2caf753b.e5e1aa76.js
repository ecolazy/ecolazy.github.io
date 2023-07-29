"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[1924],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>p});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)i=s[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)i=s[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(i),g=n,p=d["".concat(l,".").concat(g)]||d[g]||h[g]||s;return i?a.createElement(p,r(r({ref:t},c),{},{components:i})):a.createElement(p,r({ref:t},c))}));function p(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=i.length,r=new Array(s);r[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:n,r[1]=o;for(var u=2;u<s;u++)r[u]=i[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}g.displayName="MDXCreateElement"},288:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=i(7462),n=(i(7294),i(3905));const s={slug:"creating-3d-buildings-from-mastermap-with-qgis",title:"Cr\xe9ation de b\xe2timents en 3D \xe0 partir de Mastermap avec QGIS",authors:"ecolazy",tags:["hola","docusaurus"]},r="Cr\xe9ation de b\xe2timents en 3D \xe0 partir de Mastermap avec QGIS",o={permalink:"/blog/creating-3d-buildings-from-mastermap-with-qgis",editUrl:"https://github.com/ecolazy/blog/2021-02-02-creating-3d-buildings-from-mastermap-with-qgis.md",source:"@site/blog/2021-02-02-creating-3d-buildings-from-mastermap-with-qgis.md",title:"Cr\xe9ation de b\xe2timents en 3D \xe0 partir de Mastermap avec QGIS",description:"La couche topographique Mastermap de l'Ordnance Survey, l'attribut de hauteur des b\xe2timents (BHA) et le Mod\xe8le Num\xe9rique de Terrain (DTM) de l'Agence de l'Environnement sont toutes des sources de donn\xe9es utiles pour cr\xe9er des mod\xe8les 3D de b\xe2timents. En combinant ces donn\xe9es et en utilisant le plugin Qgis2ThreeJS dans QGIS, il est possible de visualiser les donn\xe9es BHA en 3D et de cr\xe9er un mod\xe8le 3D d'un b\xe2timent.",date:"2021-02-02T00:00:00.000Z",formattedDate:"February 2, 2021",tags:[{label:"hola",permalink:"/blog/tags/hola"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:2.61,hasTruncateMarker:!1,authors:[{name:"ecolazy",title:"Maintainer",url:"https://ecolazy.github.io",key:"ecolazy"}],frontMatter:{slug:"creating-3d-buildings-from-mastermap-with-qgis",title:"Cr\xe9ation de b\xe2timents en 3D \xe0 partir de Mastermap avec QGIS",authors:"ecolazy",tags:["hola","docusaurus"]},prevItem:{title:"N\u0153ud Structural Dod\xe9ca\xe8dre Innovant - Am\xe9lioration de la Flexibilit\xe9 et de la R\xe9sistance du Treillis",permalink:"/blog/truss-connection-node-modeling"},nextItem:{title:"Gifford Circus - Spectacles Cyr Wheel - Une Sc\xe8ne Circulaire Modulaire Sur Mesure",permalink:"/blog/gifford-circus-cry-wheel-performances"}},l={authorsImageUrls:[void 0]},u=[],c={toc:u};function d(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"La couche topographique Mastermap de l'Ordnance Survey, l'attribut de hauteur des b\xe2timents (BHA) et le Mod\xe8le Num\xe9rique de Terrain (DTM) de l'Agence de l'Environnement sont toutes des sources de donn\xe9es utiles pour cr\xe9er des mod\xe8les 3D de b\xe2timents. En combinant ces donn\xe9es et en utilisant le plugin Qgis2ThreeJS dans QGIS, il est possible de visualiser les donn\xe9es BHA en 3D et de cr\xe9er un mod\xe8le 3D d'un b\xe2timent."),(0,n.kt)("p",null,"Pour ce faire, le plugin Qgis2ThreeJS doit \xeatre install\xe9 et les donn\xe9es BHA, DTM et toutes autres couches souhait\xe9es doivent \xeatre charg\xe9es dans le projet QGIS. Ensuite, le plugin peut \xeatre utilis\xe9 pour styliser les donn\xe9es BHA et sp\xe9cifier l'attribut de hauteur souhait\xe9 pour l'extrusion, ce qui aboutit \xe0 un mod\xe8le 3D du b\xe2timent. Ce mod\xe8le peut \xeatre enregistr\xe9 sous forme de fichier HTML et visualis\xe9 dans un navigateur web."),(0,n.kt)("p",null,"En combinant les donn\xe9es du DTM LiDAR, le mod\xe8le 3D obtenu est assez pr\xe9cis et peut \xeatre ouvert dans Grasshopper, un langage de programmation visuel et un environnement fonctionnant dans l'application de CAO Rhinoceros 3D. Avec l'ajout du plugin Ladybug, ce mod\xe8le 3D peut \xeatre utilis\xe9 pour r\xe9aliser des analyses d\xe9taill\xe9es de donn\xe9es climatiques et cr\xe9er des visualisations interactives personnalis\xe9es pour une conception respectueuse de l'environnement, telles que des \xe9tudes d'ensoleillement."),(0,n.kt)("p",null,"Gr\xe2ce \xe0 cette approche int\xe9gr\xe9e, nous pouvons exploiter le potentiel des donn\xe9es spatiales et des outils de visualisation avanc\xe9s pour cr\xe9er des mod\xe8les 3D sophistiqu\xe9s qui facilitent la prise de d\xe9cisions \xe9clair\xe9es dans la conception architecturale et environnementale."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Docusaurus Plushie",src:i(8640).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:i(145).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:i(450).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:i(2040).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:i(7616).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:i(74).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:i(5147).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:i(4945).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:i(5829).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:i(1726).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:i(8855).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:i(9947).Z,width:"1288",height:"605"})),(0,n.kt)("h1",{id:"references"},"References"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://digimap.edina.ac.uk/help/gis/qgis/qgis_bha/"},"qgis bha")),(0,n.kt)("h1",{id:"creating-3d-buildings-from-mastermap-with-qgis"},"Creating 3D Buildings from Mastermap with QGIS"),(0,n.kt)("p",null,"The Ordnance Survey Mastermap Topography Layer, Building Height Attribute (BHA), and Environment Agency LiDAR Digital Terrain Model (DTM) are valuable data sources that enable the creation of 3D models of buildings. By leveraging this data and utilizing the Qgis2ThreeJS plugin in QGIS, we can visualize the BHA data in 3D and generate detailed building models."),(0,n.kt)("p",null,"To begin, install the Qgis2ThreeJS plugin and load the BHA data, DTM data, and any other desired layers into the QGIS project. Utilizing the plugin, customize the styling of the BHA data and define the height attribute for extrusion, which results in a realistic 3D representation of the building. This 3D model can be saved as an HTML file and effortlessly viewed in a web browser."),(0,n.kt)("p",null,"The inclusion of the LiDAR DTM enhances the accuracy of the 3D model, and it can also be opened in Grasshopper, a visual programming language and environment within the Rhinoceros 3D CAD application. By incorporating the Ladybug plugin, this 3D model becomes a powerful tool for conducting in-depth climate analyses and generating interactive visualizations for environmentally-informed design, including sunlight studies."),(0,n.kt)("p",null,"Through this integrated approach, we can harness the potential of spatial data and advanced visualization tools to create sophisticated 3D models that facilitate informed decision-making in architectural and environmental design."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Docusaurus Plushie",src:i(8640).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:i(145).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:i(450).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:i(2040).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:i(7616).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:i(74).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:i(5147).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:i(4945).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:i(5829).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:i(1726).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:i(8855).Z,width:"849",height:"519"}),"\n",(0,n.kt)("img",{alt:"Docusaurus Plushie",src:i(9947).Z,width:"1288",height:"605"})),(0,n.kt)("h1",{id:"references-1"},"References"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://digimap.edina.ac.uk/help/gis/qgis/qgis_bha/"},"qgis bha")))}d.isMDXComponent=!0},8640:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/bha-1-43f5d793112b5e7d965dd45b486ad82e.png"},1726:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/bha-10-dfcbbad19705932c13a95718ea657cb5.png"},8855:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/bha-11-60332f3067091585939f287871665169.png"},9947:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/bha-12-767c10f258be4ccea3fd505a9fe69224.png"},145:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/bha-2-8cbb5ba2a17084da185d97d130f94089.png"},450:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/bha-3-02b772b8c9905ff1d1ad5f175ada8c7f.png"},2040:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/bha-4-ec53deac98415e65bcd3d9a83ce662de.png"},7616:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/bha-5-0837bbfde76f3cace5346b723ccf3f01.png"},74:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/bha-6-8391a5b4741d6b85cb51feabd31d5d9e.png"},5147:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/bha-7-5dba3500b25db255c1561d822aaddb58.png"},4945:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/bha-8-0df5a16690d814e3846e2204c1160f06.png"},5829:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/bha-9-337f5cad895cc88b4703da28a5e97070.png"}}]);