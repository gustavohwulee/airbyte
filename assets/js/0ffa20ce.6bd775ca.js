"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[5579],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},43223:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),s=["components"],o={},l="Smartsheets",p={unversionedId:"integrations/sources/smartsheets",id:"integrations/sources/smartsheets",title:"Smartsheets",description:"Table of Contents",source:"@site/../docs/integrations/sources/smartsheets.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/smartsheets",permalink:"/integrations/sources/smartsheets",editUrl:"https://github.com/airbytehq/airbyte/blob/gitbook/v1/README.md/../docs/integrations/sources/smartsheets.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Slack",permalink:"/integrations/sources/slack"},next:{title:"Snapchat Marketing",permalink:"/integrations/sources/snapchat-marketing"}},u={},m=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Sync Details",id:"sync-details",level:2},{value:"Column datatype mapping",id:"column-datatype-mapping",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"Obtain a Smartsheets API access token",id:"obtain-a-smartsheets-api-access-token",level:4},{value:"The spreadsheet ID of your Smartsheet",id:"the-spreadsheet-id-of-your-smartsheet",level:4},{value:"Configuring the source in the Airbyte UI",id:"configuring-the-source-in-the-airbyte-ui",level:3},{value:"Changelog",id:"changelog",level:2}],c={toc:m};function d(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"smartsheets"},"Smartsheets"),(0,i.kt)("h3",{id:"table-of-contents"},"Table of Contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/integrations/sources/smartsheets#sync-details"},"Sync Details"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/integrations/sources/smartsheets#column-datatype-mapping"},"Column datatype mapping")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/integrations/sources/smartsheets#Features"},"Features")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/integrations/sources/smartsheets#performance-considerations"},"Performance Considerations")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/integrations/sources/smartsheets#getting-started"},"Getting Started"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/integrations/sources/smartsheets#requirements"},"Requirements")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/integrations/sources/smartsheets#setup-guide"},"Setup Guide")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/integrations/sources/smartsheets#configuring-the-source-in-the-airbyte-ui"},"Configuring the source in the Airbyte UI"))))),(0,i.kt)("h2",{id:"sync-details"},"Sync Details"),(0,i.kt)("p",null,"The Smartsheet Source is written to pull data from a single Smartsheet spreadsheet. Unlike Google Sheets, Smartsheets only allows one sheet per Smartsheet - so a given Airbyte connector instance can sync only one sheet at a time."),(0,i.kt)("p",null,"To replicate multiple spreadsheets, you can create multiple instances of the Smartsheet Source in Airbyte, reusing the API token for all your sheets that you need to sync."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note: Column headers must contain only alphanumeric characters or ",(0,i.kt)("inlineCode",{parentName:"strong"},"_")," , as specified in the")," ",(0,i.kt)("a",{parentName:"p",href:"/understanding-airbyte/airbyte-specification"},(0,i.kt)("strong",{parentName:"a"},"Airbyte Protocol")),"."),(0,i.kt)("h3",{id:"column-datatype-mapping"},"Column datatype mapping"),(0,i.kt)("p",null,"The data type mapping adopted by this connector is based on the Smartsheet ",(0,i.kt)("a",{parentName:"p",href:"https://smartsheet.redoc.ly/tag/columnsRelated#section/Column-Types"},"documentation"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE"),": For any column datatypes interpreted by Smartsheets beside ",(0,i.kt)("inlineCode",{parentName:"p"},"DATE")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"DATETIME"),", this connector's source schema generation assumes a ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," type, in which case the ",(0,i.kt)("inlineCode",{parentName:"p"},"format")," field is not required by Airbyte."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Airbyte Format"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TEXT_NUMBER")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"DATE")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"format: date"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"DATETIME")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"format: date-time"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"anything else")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("p",null,"The remaining column datatypes supported by Smartsheets are more complex types ","(","e.g. Predecessor, Dropdown List",")"," and are not supported by this connector beyond its ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," representation."),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("p",null,"This source connector only supports Full Refresh Sync. Since Smartsheets only allows 5000 rows per sheet, it's likely that the Full Refresh Sync Mode will suit the majority of use-cases."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,i.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,i.kt)("p",null,"At the time of writing, the ",(0,i.kt)("a",{parentName:"p",href:"https://developers.smartsheet.com/blog/smartsheet-api-best-practices#:~:text=The%20Smartsheet%20API%20currently%20imposes,per%20minute%20per%20Access%20Token."},"Smartsheets API rate limit")," is 300 requests per minute per API access token. This connector makes 6 API calls per sync operation."),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"To configure the Smartsheet Source for syncs, you'll need the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A Smartsheets API access token - generated by a Smartsheets user with at least ",(0,i.kt)("strong",{parentName:"li"},"read")," access"),(0,i.kt)("li",{parentName:"ul"},"The ID of the spreadsheet you'd like to sync")),(0,i.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,i.kt)("h4",{id:"obtain-a-smartsheets-api-access-token"},"Obtain a Smartsheets API access token"),(0,i.kt)("p",null,"You can generate an API key for your account from a session of your Smartsheet webapp by clicking:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Account ","(","top-right icon",")"),(0,i.kt)("li",{parentName:"ul"},"Apps & Integrations"),(0,i.kt)("li",{parentName:"ul"},"API Access"),(0,i.kt)("li",{parentName:"ul"},"Generate new access token")),(0,i.kt)("p",null,"For questions on advanced authorization flows, refer to ",(0,i.kt)("a",{parentName:"p",href:"https://www.smartsheet.com/content-center/best-practices/tips-tricks/api-getting-started"},"this"),"."),(0,i.kt)("h4",{id:"the-spreadsheet-id-of-your-smartsheet"},"The spreadsheet ID of your Smartsheet"),(0,i.kt)("p",null,"You'll also need the ID of the Spreadsheet you'd like to sync. Unlike Google Sheets, this ID is not found in the URL. You can find the required spreadsheet ID from your Smartsheet app session by going to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"File"),(0,i.kt)("li",{parentName:"ul"},"Properties")),(0,i.kt)("h3",{id:"configuring-the-source-in-the-airbyte-ui"},"Configuring the source in the Airbyte UI"),(0,i.kt)("p",null,"To setup your new Smartsheets source, Airbyte will need:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Your API access token"),(0,i.kt)("li",{parentName:"ol"},"The spreadsheet ID")),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.8"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-02-04"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9792"},"9792")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Added oauth support")))))}d.isMDXComponent=!0}}]);