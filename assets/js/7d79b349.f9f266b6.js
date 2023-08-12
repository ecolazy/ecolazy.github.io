"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[5646],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(r),h=o,g=p["".concat(l,".").concat(h)]||p[h]||d[h]||s;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=h;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4182:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const s={slug:"provisioning-cisco-cloud-wireless-controller",title:"Provisioning Cisco Cloud Wireless Controller",authors:"ecolazy",tags:["hola","docusaurus"]},i="Provisioning Cisco Cloud Wireless Controller",a={permalink:"/blog/provisioning-cisco-cloud-wireless-controller",editUrl:"https://github.com/ecolazy/blog/2020-03-06-provisioning-cisco-cloud-wireless-controller.md",source:"@site/blog/2020-03-06-provisioning-cisco-cloud-wireless-controller.md",title:"Provisioning Cisco Cloud Wireless Controller",description:"In this project, our aim was to successfully install and configure the Cisco Catalyst c9800-CL wireless controller using Kernel-based Virtual Machine (KVM). The c9800-CL is a powerful and flexible cloud-based wireless controller capable of managing both on-premises and cloud-based wireless networks. It belongs to the Cisco Catalyst 9800 series and offers a range of advanced features, such as wireless intrusion prevention, location services, and guest access.",date:"2020-03-06T00:00:00.000Z",formattedDate:"March 6, 2020",tags:[{label:"hola",permalink:"/blog/tags/hola"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:1.5,hasTruncateMarker:!1,authors:[{name:"ecolazy",title:"Maintainer",url:"https://ecolazy.github.io",key:"ecolazy"}],frontMatter:{slug:"provisioning-cisco-cloud-wireless-controller",title:"Provisioning Cisco Cloud Wireless Controller",authors:"ecolazy",tags:["hola","docusaurus"]},prevItem:{title:"Gifford Circus Cyr Wheel Performances - A Custom Modular Circular Stage",permalink:"/blog/gifford-circus-cry-wheel-performances"},nextItem:{title:"Improving Wireless Connectivity at the Royal Windsor Horse Show using ArcGIS",permalink:"/blog/mapping-wireless-coverage-at-the-royal-windsor-horse-show-with-arcgis"}},l={authorsImageUrls:[void 0]},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this project, our aim was to successfully install and configure the Cisco Catalyst c9800-CL wireless controller using Kernel-based Virtual Machine (KVM). The c9800-CL is a powerful and flexible cloud-based wireless controller capable of managing both on-premises and cloud-based wireless networks. It belongs to the Cisco Catalyst 9800 series and offers a range of advanced features, such as wireless intrusion prevention, location services, and guest access."),(0,o.kt)("p",null,"To begin, we installed virtualization software and enabled the libvirtd service on our system. This allowed us to create and manage virtual machines using KVM. We then created a network bridge using the brctl command, enabling communication between the virtual machine and the host system."),(0,o.kt)("p",null,"With the necessary infrastructure in place, we used the virt-install command to install the c9800-CL on a new virtual machine. During the installation process, we specified several options, such as the connection to the virtualization server, the operating system variant, the architecture of the virtual machine, and the CPU type."),(0,o.kt)("p",null,"Once the virtual machine was set up and the c9800-CL was installed, we provided a script to configure the controller. This script contained a series of steps necessary to properly set up the c9800-CL. These steps included setting the hostname, creating a user account, configuring the Gigabit Ethernet interfaces, creating a VLAN, setting up static routes, shutting down and re-enabling the radio frequencies, and setting the country code. We also configured the virtual wireless LAN controller (VWLC) and set the DNS and NTP servers to ensure proper network connectivity and synchronization."),(0,o.kt)("p",null,"Finally, we demonstrated how to access the GUI of the c9800-CL at the specified IP address and walked through the zero-day configuration steps to set up a wireless network. By following these steps, users can easily configure the c9800-CL to meet the specific needs of their wireless network."))}p.isMDXComponent=!0}}]);