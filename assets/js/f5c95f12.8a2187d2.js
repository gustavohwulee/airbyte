"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[1610],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return s}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=d(a),s=r,N=u["".concat(p,".").concat(s)]||u[s]||k[s]||l;return a?n.createElement(N,i(i({ref:e},m),{},{components:a})):n.createElement(N,i({ref:e},m))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},98394:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return k}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={},p="Zuora",d={unversionedId:"integrations/sources/zuora",id:"integrations/sources/zuora",title:"Zuora",description:"Sync overview",source:"@site/../docs/integrations/sources/zuora.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/zuora",permalink:"/integrations/sources/zuora",editUrl:"https://github.com/airbytehq/airbyte/blob/gitbook/v1/README.md/../docs/integrations/sources/zuora.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Zoom",permalink:"/integrations/sources/zoom"},next:{title:"Amazon SQS",permalink:"/integrations/destinations/amazon-sqs"}},m={},k=[{value:"Sync overview",id:"sync-overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Note:",id:"note",level:3},{value:"Data type mapping",id:"data-type-mapping",level:3},{value:"Features",id:"features",level:3},{value:"Supported Environments for Zuora",id:"supported-environments-for-zuora",level:2},{value:"Supported Data Query options",id:"supported-data-query-options",level:2},{value:"List of Supported Environments for Zuora",id:"list-of-supported-environments-for-zuora",level:2},{value:"Production",id:"production",level:3},{value:"Sandbox",id:"sandbox",level:3},{value:"Other",id:"other",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Note",id:"note-1",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Create an API user role",id:"create-an-api-user-role",level:3},{value:"Assign the role to a user",id:"assign-the-role-to-a-user",level:3},{value:"Create Client ID and Client Secret",id:"create-client-id-and-client-secret",level:3},{value:"Changelog",id:"changelog",level:2}],u={toc:k};function s(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"zuora"},"Zuora"),(0,l.kt)("h2",{id:"sync-overview"},"Sync overview"),(0,l.kt)("p",null,"The Zuora source supports both Full Refresh and Incremental syncs. You can choose if this connector will copy only the new or updated data, or all rows in the tables and columns you set up for replication, every time a sync is run."),(0,l.kt)("p",null,"Airbyte uses ",(0,l.kt)("a",{parentName:"p",href:"https://www.zuora.com/developer/api-reference/#section/Introduction"},"REST API")," to fetch data from Zuora. The REST API accepts ",(0,l.kt)("a",{parentName:"p",href:"https://knowledgecenter.zuora.com/Central_Platform/Query/Export_ZOQL"},"ZOQL ","(","Zuora Object Query Language",")"),", a SQL-like language, to export the data."),(0,l.kt)("p",null,"This Source Connector is based on a ",(0,l.kt)("a",{parentName:"p",href:"https://docs.airbyte.io/connector-development/cdk-python"},"Airbyte CDK"),"."),(0,l.kt)("h3",{id:"output-schema"},"Output schema"),(0,l.kt)("p",null,"This Source is capable of syncing:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"standard objects available in Zuora account"),(0,l.kt)("li",{parentName:"ul"},"custom objects manually added by user, available in Zuora Account"),(0,l.kt)("li",{parentName:"ul"},"custom fields in both standard and custom objects, available in Zuora Account")),(0,l.kt)("p",null,"The discovering of Zuora Account objects schema may take a while, if you add the connection for the first time, and/or you need to refresh your list of available streams. Please take your time to wait and don't cancel this operation, usually it takes up to 5-10 min, depending on number of objects available in Zuora Account."),(0,l.kt)("h3",{id:"note"},"Note:"),(0,l.kt)("p",null,"Some of the Zuora Objects may not be available for sync due to limitations of Zuora Supscription Plan, Permissions. For details refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://knowledgecenter.zuora.com/DC_Developers/M_Export_ZOQL"},"Availability of Data Source Objects")," section in the Zuora documentation."),(0,l.kt)("h3",{id:"data-type-mapping"},"Data type mapping"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"decimal(22,9)")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"},"float number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"decimal")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"},"float number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"float")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"},"float number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"double")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"},"float number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"integer")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"bigint")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"smallint")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number representation of the unix timestamp")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"date")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"datetime")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"timestamp with time zone")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"picklist")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"text")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"varchar")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"zoql")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"object")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"binary")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"object")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"json")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"object")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"xml")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"object")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"blob")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"object")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"list")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"array")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"array")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"array")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"bool")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("p",null,"Any other data type not listed in the table above will be treated as ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,l.kt)("h3",{id:"features"},"Features"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Overwrite Sync"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Append Sync"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append + Deduplication Sync"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,l.kt)("td",{parentName:"tr",align:"left"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h2",{id:"supported-environments-for-zuora"},"Supported Environments for Zuora"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Environment"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Production"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Select from exising options while setup")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Sandbox"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Select from exising options while setup")))),(0,l.kt)("h2",{id:"supported-data-query-options"},"Supported Data Query options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Option"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"LIVE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Run data queries against Zuora live transactional databases")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"UNLIMITED"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Run data queries against an optimized, replicated database at 12 hours freshness for high volume extraction use cases (Early Adoption, additionall access required, contact ",(0,l.kt)("a",{parentName:"td",href:"http://support.zuora.com/"},"Zuora Support")," in order to request this feature enabled for your account beforehand.)")))),(0,l.kt)("h2",{id:"list-of-supported-environments-for-zuora"},"List of Supported Environments for Zuora"),(0,l.kt)("h3",{id:"production"},"Production"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Environment"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Endpoint"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"US Production"),(0,l.kt)("td",{parentName:"tr",align:"left"},"rest.zuora.com")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"US Cloud Production"),(0,l.kt)("td",{parentName:"tr",align:"left"},"rest.na.zuora.com")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"EU Production"),(0,l.kt)("td",{parentName:"tr",align:"left"},"rest.eu.zuora.com")))),(0,l.kt)("h3",{id:"sandbox"},"Sandbox"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Environment"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Endpoint"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"US API Sandbox"),(0,l.kt)("td",{parentName:"tr",align:"left"},"rest.apisandbox.zuora.com")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"US Cloud API Sandbox"),(0,l.kt)("td",{parentName:"tr",align:"left"},"rest.sandbox.na.zuora.com")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"US Central Sandbox"),(0,l.kt)("td",{parentName:"tr",align:"left"},"rest.test.zuora.com")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"EU API Sandbox"),(0,l.kt)("td",{parentName:"tr",align:"left"},"rest.sandbox.eu.zuora.com")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"EU Central Sandbox"),(0,l.kt)("td",{parentName:"tr",align:"left"},"rest.test.eu.zuora.com")))),(0,l.kt)("h3",{id:"other"},"Other"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Environment"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Endpoint"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"US Performance Test"),(0,l.kt)("td",{parentName:"tr",align:"left"},"rest.pt1.zuora.com")))),(0,l.kt)("p",null,"For more information about available environments, please visit ",(0,l.kt)("a",{parentName:"p",href:"https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/D_Zuora_Environments"},"this page")),(0,l.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,l.kt)("p",null,"If you experience the long time for sync operation, please consider:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"to increase the ",(0,l.kt)("inlineCode",{parentName:"li"},"window_in_days")," parameter inside Zuora source configuration"),(0,l.kt)("li",{parentName:"ul"},"use the smaller date range by tuning ",(0,l.kt)("inlineCode",{parentName:"li"},"start_date")," parameter.")),(0,l.kt)("h3",{id:"note-1"},"Note"),(0,l.kt)("p",null,"Usually, the very first sync operation for all of the objects inside Zuora account takes up to 25-45-60 min, the more data you have, the more time you'll need."),(0,l.kt)("h2",{id:"getting-started"},"Getting started"),(0,l.kt)("h3",{id:"create-an-api-user-role"},"Create an API user role"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Log in to your ",(0,l.kt)("inlineCode",{parentName:"li"},"Zuora acccount"),"."),(0,l.kt)("li",{parentName:"ol"},"In the top right corner of the Zuora dashboard, select ",(0,l.kt)("inlineCode",{parentName:"li"},"Settings")," ",">"," ",(0,l.kt)("inlineCode",{parentName:"li"},"Administration Settings"),"."),(0,l.kt)("li",{parentName:"ol"},"Select ",(0,l.kt)("inlineCode",{parentName:"li"},"Manage User Roles"),"."),(0,l.kt)("li",{parentName:"ol"},"Select ",(0,l.kt)("inlineCode",{parentName:"li"},"Add new role")," to create a new role, and fill in neccessary information up to the form.")),(0,l.kt)("h3",{id:"assign-the-role-to-a-user"},"Assign the role to a user"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"From the ",(0,l.kt)("inlineCode",{parentName:"p"},"administration")," page, click ",(0,l.kt)("inlineCode",{parentName:"p"},"Manage Users"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("inlineCode",{parentName:"p"},"add single user"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create a user and assign it to the role you created in ",(0,l.kt)("inlineCode",{parentName:"p"},"Create an API user role")," section.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"You should receive an email with activation instructions. Follow them to activate your API user."),(0,l.kt)("p",{parentName:"li"},"For more information visit ",(0,l.kt)("a",{parentName:"p",href:"https://knowledgecenter.zuora.com/Billing/Tenant_Management/A_Administrator_Settings/Manage_Users/Create_an_API_User"},"Create an API User page")))),(0,l.kt)("h3",{id:"create-client-id-and-client-secret"},"Create Client ID and Client Secret"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"From the ",(0,l.kt)("inlineCode",{parentName:"p"},"administration")," page, click ",(0,l.kt)("inlineCode",{parentName:"p"},"Manage Users"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click on User Name of the target user.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Enter a client name and description and click ",(0,l.kt)("inlineCode",{parentName:"p"},"create"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"A pop-up will open with your Client ID and Client Secret."),(0,l.kt)("p",{parentName:"li"},"Make a note of your Client ID and Client Secret because they will never be shown again. You will need them to configure Airbyte Zuora Connector.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"You're ready to set up Zuora connector in Airbyte, using created ",(0,l.kt)("inlineCode",{parentName:"p"},"Client ID")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Client Secret"),"!"))),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-10-16"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7093"},"7053")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Added support of ",(0,l.kt)("inlineCode",{parentName:"td"},"Unlimited")," option for ",(0,l.kt)("inlineCode",{parentName:"td"},"Data Query"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-10-11"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6960"},"6960")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Change minimum value for ",(0,l.kt)("inlineCode",{parentName:"td"},"Window_in_days")," to 1, instead of 30")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-10-01"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6575"},"6575")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Added OAuth support for Airbyte Cloud")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-08-01"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4661"},"4661")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Initial release of Native Zuora connector for Airbyte")))))}s.isMDXComponent=!0}}]);