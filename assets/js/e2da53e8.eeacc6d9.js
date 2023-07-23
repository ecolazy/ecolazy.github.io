"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[6702],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(r),g=o,h=d["".concat(l,".").concat(g)]||d[g]||p[g]||s;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=g;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},1170:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const s={slug:"provisioning-cisco-cloud-wireless-controller",title:"Provisioning Cisco Cloud Wireless Controller",authors:"reubenliengaard",tags:["hola","docusaurus"]},i="Provisioning Cisco Cloud Wireless Controller",a={permalink:"/blog/provisioning-cisco-cloud-wireless-controller",editUrl:"https://github.com/reubenliengaard/blog/2021-03-06-provisioning-cisco-cloud-wireless-controller.md",source:"@site/blog/2021-03-06-provisioning-cisco-cloud-wireless-controller.md",title:"Provisioning Cisco Cloud Wireless Controller",description:"In this project, we aimed to successfully install and configure the Cisco Catalyst c9800-CL wireless controller using KVM (Kernel-based Virtual Machine). The c9800-CL is a powerful and flexible cloud-based wireless controller that is capable of managing both on-premises and cloud-based wireless networks. It belongs to the Cisco Catalyst 9800 series and offers a range of advanced features such as wireless intrusion prevention, location services, and guest access.",date:"2021-03-06T00:00:00.000Z",formattedDate:"March 6, 2021",tags:[{label:"hola",permalink:"/blog/tags/hola"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:1.53,hasTruncateMarker:!1,authors:[{name:"Reuben Liengaard",title:"Maintainer",url:"https://reubenliengaard.github.io",key:"reubenliengaard"}],frontMatter:{slug:"provisioning-cisco-cloud-wireless-controller",title:"Provisioning Cisco Cloud Wireless Controller",authors:"reubenliengaard",tags:["hola","docusaurus"]},prevItem:{title:"Constructing a 3D Egg Shape from Regular Polygons",permalink:"/blog/constructing-a-3d-egg-shape-from-regular-polygons"},nextItem:{title:"Truss Connection Node Modeling",permalink:"/blog/truss-connection-node-modeling"}},l={authorsImageUrls:[void 0]},c=[],u={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this project, we aimed to successfully install and configure the Cisco Catalyst c9800-CL wireless controller using KVM (Kernel-based Virtual Machine). The c9800-CL is a powerful and flexible cloud-based wireless controller that is capable of managing both on-premises and cloud-based wireless networks. It belongs to the Cisco Catalyst 9800 series and offers a range of advanced features such as wireless intrusion prevention, location services, and guest access."),(0,o.kt)("p",null,"To begin, we installed virtualization software and enabled the libvirtd service on our system. This allowed us to create and manage virtual machines using KVM. We then created a network bridge using the brctl command, which enabled communication between the virtual machine and the host system."),(0,o.kt)("p",null,"With the necessary infrastructure in place, we used the virt-install command to install the c9800-CL on a new virtual machine. During the installation process, we specified a number of options such as the connection to the virtualization server, the operating system variant, the architecture of the virtual machine, and the CPU type."),(0,o.kt)("p",null,"Once the virtual machine was set up and the c9800-CL was installed, we provided a script to configure the controller. This script contained a series of steps that were necessary to properly set up the c9800-CL. These steps included setting the hostname, creating a user account, configuring the Gigabit Ethernet interfaces, creating a VLAN, setting up static routes, shutting down and re-enabling the radio frequencies, and setting the country code. We also configured the virtual wireless LAN controller (VWLC) and set the DNS and NTP servers to ensure proper network connectivity and synchronization."),(0,o.kt)("p",null,"Finally, we demonstrated how to access the GUI of the c9800-CL at the specified IP address and walk through the zero-day configuration steps to set up a wireless network. By following these steps, users can easily configure the c9800-CL to meet the specific needs of their wireless network."))}d.isMDXComponent=!0}}]);