"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1706],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),u=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=u(e.components);return i.createElement(l.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=u(t),m=o,f=c["".concat(l,".").concat(m)]||c[m]||p[m]||r;return t?i.createElement(f,s(s({ref:n},d),{},{components:t})):i.createElement(f,s({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[c]="string"==typeof e?e:o,s[1]=a;for(var u=2;u<r;u++)s[u]=t[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5717:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var i=t(7462),o=(t(7294),t(3905));const r={sidebar_position:5},s="Configuring Visual Studio Code",a={unversionedId:"desktop-linux/configuring-visual-studio-code",id:"desktop-linux/configuring-visual-studio-code",title:"Configuring Visual Studio Code",description:"Generate list of extensions from existing installation",source:"@site/docs/desktop-linux/configuring-visual-studio-code.md",sourceDirName:"desktop-linux",slug:"/desktop-linux/configuring-visual-studio-code",permalink:"/docs/desktop-linux/configuring-visual-studio-code",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Setup rclone",permalink:"/docs/desktop-linux/setup-rclone"},next:{title:"Setting up Qgis",permalink:"/docs/desktop-linux/setting-up-qgis"}},l={},u=[{value:"Generate list of extensions from existing installation",id:"generate-list-of-extensions-from-existing-installation",level:3},{value:"extensions.md",id:"extensionsmd",level:3},{value:"Install extensions from md file",id:"install-extensions-from-md-file",level:3}],d={toc:u},c="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuring-visual-studio-code"},"Configuring Visual Studio Code"),(0,o.kt)("h3",{id:"generate-list-of-extensions-from-existing-installation"},"Generate list of extensions from existing installation"),(0,o.kt)("p",null,"When this command is run, it will generate a list of all the installed Visual Studio Code extensions and save it to the extensions.md file. The extension names will be listed one per line in the file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"code --list-extensions > extensions.md\n")),(0,o.kt)("p",null,"Here's the resulting file"),(0,o.kt)("h3",{id:"extensionsmd"},"extensions.md"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"aaron-bond.better-comments\nbierner.markdown-preview-github-styles\ndonjayamanne.githistory\neamodio.gitlens\nesbenp.prettier-vscode\nformulahendry.auto-rename-tag\nIvanGrigorov.openaicodehelper\njamiewoodio.cisco\nTabNine.tabnine-vscode\nvoldemortensen.rainbow-tags\nyzhang.markdown-all-in-one\n")),(0,o.kt)("h3",{id:"install-extensions-from-md-file"},"Install extensions from md file"),(0,o.kt)("p",null,"The xargs command is used to build and execute a command from standard input. It takes the input, splits it into separate arguments (using the -n1 option, which means to take one argument at a time), and then runs the specified command (in this case, code --install-extension) on each argument."),(0,o.kt)("p",null,"The < extensions.md part of the command passes the contents of the extensions.md file as standard input to the xargs command."),(0,o.kt)("p",null,"So, in this case, the command reads the extensions.md file, which should contain a list of extension names (one per line), and it installs each extension using the code command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"xargs -n1 code --install-extension < extensions.md\n")))}p.isMDXComponent=!0}}]);