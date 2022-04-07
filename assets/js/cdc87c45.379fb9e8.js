"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[5030],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(r),m=o,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},80248:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={},l="Oracle Peoplesoft",s={unversionedId:"integrations/sources/oracle-peoplesoft",id:"integrations/sources/oracle-peoplesoft",title:"Oracle Peoplesoft",description:"Oracle PeopleSoft is a Human Resource, Financial, Supply Chain, Customer Relationship, and Enterprise Performance Management System.",source:"@site/../docs/integrations/sources/oracle-peoplesoft.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/oracle-peoplesoft",permalink:"/integrations/sources/oracle-peoplesoft",editUrl:"https://github.com/airbytehq/airbyte/blob/gitbook/v1/README.md/../docs/integrations/sources/oracle-peoplesoft.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Oracle DB",permalink:"/integrations/sources/oracle"},next:{title:"Oracle Siebel CRM",permalink:"/integrations/sources/oracle-siebel-crm"}},p={},u=[{value:"Sync overview",id:"sync-overview",level:2},{value:"Output schema",id:"output-schema",level:3}],f={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"oracle-peoplesoft"},"Oracle Peoplesoft"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.oracle.com/applications/peoplesoft/"},"Oracle PeopleSoft")," is a Human Resource, Financial, Supply Chain, Customer Relationship, and Enterprise Performance Management System."),(0,a.kt)("h2",{id:"sync-overview"},"Sync overview"),(0,a.kt)("p",null,"Oracle PeopleSoft can run on the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/applications/peoplesoft/peopletools/index.html"},"Oracle, MSSQL, or IBM DB2")," databases. You can use Airbyte to sync your Oracle PeopleSoft instance by connecting to the underlying database using the appropriate Airbyte connector:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/integrations/sources/db2"},"DB2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/integrations/sources/mssql"},"MSSQL")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/integrations/sources/oracle"},"Oracle"))),(0,a.kt)("p",null,'{% hint style="info" %}\nReach out to your service representative or system admin to find the parameters required to connect to the underlying database\n{% endhint %}'),(0,a.kt)("h3",{id:"output-schema"},"Output schema"),(0,a.kt)("p",null,"The schema will be loaded according to the rules of the underlying database's connector. Oracle provides ERD diagrams but they are behind a paywall. Contact your Oracle rep to gain access."))}m.isMDXComponent=!0}}]);