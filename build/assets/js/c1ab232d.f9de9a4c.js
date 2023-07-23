"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5789],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:4},i="Sun Shading Model With Radiance",s={unversionedId:"parametric-modeling/sun-shading-model-with-radiance",id:"parametric-modeling/sun-shading-model-with-radiance",title:"Sun Shading Model With Radiance",description:"To use Radiance to model sun shading, you will need to follow these steps:",source:"@site/docs/parametric-modeling/sun-shading-model-with-radiance.md",sourceDirName:"parametric-modeling",slug:"/parametric-modeling/sun-shading-model-with-radiance",permalink:"/docs/parametric-modeling/sun-shading-model-with-radiance",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Modeling a spherical solar concentrator with Lady Bug",permalink:"/docs/parametric-modeling/spherical-solar-concentrator-with-ladybug"}},c={},l=[],d={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sun-shading-model-with-radiance"},"Sun Shading Model With Radiance"),(0,r.kt)("p",null,"To use Radiance to model sun shading, you will need to follow these steps:"),(0,r.kt)("p",null,"Install Radiance: First, make sure that Radiance is installed on your computer. You can download Radiance from the official website (",(0,r.kt)("a",{parentName:"p",href:"https://radiance-online.org/"},"https://radiance-online.org/"),") or from a package manager such as Homebrew."),(0,r.kt)("p",null,"Create a 3D model of the scene: Use a 3D modeling software such as Rhino or SketchUp to create a 3D model of the building, terrain, and any other objects in the scene. You will need to export the model as a Radiance geometry file (.obj) or a Radiance scene description file (.rad)."),(0,r.kt)("p",null,"Set up the Radiance simulation: Use a text editor to create a Radiance simulation script that specifies the input files, simulation parameters, and output settings. The script should include commands to define the location, time, and sky conditions, as well as the materials, textures, and geometry of the objects in the scene. You can refer to the Radiance documentation for more information on the available commands and options."),(0,r.kt)("p",null,"Run the Radiance simulation: Use the command-line interface to run the Radiance simulation using the script that you created. The simulation will generate a series of output files, including image files that show the shading patterns on the objects in the scene."),(0,r.kt)("p",null,"Analyze the results: Use a software tool such as ImageJ or GIMP to view and analyze the output image files. You can measure the amount of shading at different points on the objects, or you can use color mapping to visualize the shading patterns."))}p.isMDXComponent=!0}}]);