"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[3041],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),l=u(n),f=o,y=l["".concat(a,".").concat(f)]||l[f]||p[f]||i;return n?r.createElement(y,s(s({ref:t},m),{},{components:n})):r.createElement(y,s({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=l;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},66489:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),s=["components"],c={},a="Microsoft Dynamics GP",u={unversionedId:"integrations/sources/microsoft-dynamics-gp",id:"integrations/sources/microsoft-dynamics-gp",title:"Microsoft Dynamics GP",description:"MS Dynamics GP is a mid-market business accounting or enterprise resource planning \\(ERP\\) software.",source:"@site/../docs/integrations/sources/microsoft-dynamics-gp.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/microsoft-dynamics-gp",permalink:"/integrations/sources/microsoft-dynamics-gp",editUrl:"https://github.com/airbytehq/airbyte/blob/gitbook/v1/README.md/../docs/integrations/sources/microsoft-dynamics-gp.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Microsoft Dynamics Customer Engagement",permalink:"/integrations/sources/microsoft-dynamics-customer-engagement"},next:{title:"Microsoft Dynamics NAV",permalink:"/integrations/sources/microsoft-dynamics-nav"}},m={},p=[{value:"Sync overview",id:"sync-overview",level:2},{value:"Output schema",id:"output-schema",level:3}],l={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"microsoft-dynamics-gp"},"Microsoft Dynamics GP"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://dynamics.microsoft.com/en-us/gp/"},"MS Dynamics GP")," is a mid-market business accounting or enterprise resource planning ","(","ERP",")"," software."),(0,i.kt)("h2",{id:"sync-overview"},"Sync overview"),(0,i.kt)("p",null,"MS Dynamics GP runs on the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dynamics-gp/installation/installing-on-first-computer"},"MSSQL")," database. You can use the ",(0,i.kt)("a",{parentName:"p",href:"/integrations/sources/mssql"},"MSSQL connector")," to sync your MS Dynamics GP instance by connecting to the underlying database."),(0,i.kt)("p",null,'{% hint style="info" %}\nReach out to your service representative or system admin to find the parameters required to connect to the underlying database\n{% endhint %}'),(0,i.kt)("h3",{id:"output-schema"},"Output schema"),(0,i.kt)("p",null,"To understand your MS Dynamics GP database schema, see the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dynamicsax-2012/developer/tables-overview"},"Microsoft docs"),". Otherwise, the schema will be loaded according to the rules of MSSQL connector."))}f.isMDXComponent=!0}}]);