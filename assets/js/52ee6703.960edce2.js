"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[9516],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),d=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),u=d(n),c=r,g=u["".concat(s,".").concat(c)]||u[c]||p[c]||i;return n?a.createElement(g,o(o({ref:e},m),{},{components:n})):a.createElement(g,o({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},19741:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={},s="MongoDB",d={unversionedId:"integrations/destinations/mongodb",id:"integrations/destinations/mongodb",title:"MongoDB",description:"Features",source:"@site/../docs/integrations/destinations/mongodb.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/mongodb",permalink:"/integrations/destinations/mongodb",editUrl:"https://github.com/airbytehq/airbyte/blob/gitbook/v1/README.md/../docs/integrations/destinations/mongodb.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"MeiliSearch",permalink:"/integrations/destinations/meilisearch"},next:{title:"MQTT",permalink:"/integrations/destinations/mqtt"}},m={},p=[{value:"Features",id:"features",level:2},{value:"Output Schema for <code>destination-mongodb</code>",id:"output-schema-for-destination-mongodb",level:2},{value:"Getting Started (Airbyte Cloud)",id:"getting-started-airbyte-cloud",level:2},{value:"Getting Started (Airbyte Open-Source)",id:"getting-started-airbyte-open-source",level:2},{value:"Requirements",id:"requirements",level:4},{value:"<strong>Permissions</strong>",id:"permissions",level:4},{value:"Target Database",id:"target-database",level:4},{value:"Setup the MongoDB destination in Airbyte",id:"setup-the-mongodb-destination-in-airbyte",level:3},{value:"Naming Conventions",id:"naming-conventions",level:2},{value:"Database Name Case Sensitivity",id:"database-name-case-sensitivity",level:4},{value:"Restrictions on Database Names for Windows",id:"restrictions-on-database-names-for-windows",level:4},{value:"Restrictions on Database Names for Unix and Linux Systems",id:"restrictions-on-database-names-for-unix-and-linux-systems",level:4},{value:"Length of Database Names",id:"length-of-database-names",level:4},{value:"Restriction on Collection Names",id:"restriction-on-collection-names",level:4},{value:"Changelog",id:"changelog",level:2}],u={toc:p};function c(t){var e=t.components,n=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mongodb"},"MongoDB"),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental - Deduped History"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},"As this connector does not support dbt, we don't support this sync mode on this destination.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h2",{id:"output-schema-for-destination-mongodb"},"Output Schema for ",(0,i.kt)("inlineCode",{parentName:"h2"},"destination-mongodb")),(0,i.kt)("p",null,"Each stream will be output into its own collection in MongoDB. Each collection will contain 3 fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_id"),": an identifier assigned to each document that is processed. The filed type in MongoDB is ",(0,i.kt)("inlineCode",{parentName:"li"},"String"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_emitted_at"),": a timestamp representing when the event was pulled from the data source. The field type in MongoDB is ",(0,i.kt)("inlineCode",{parentName:"li"},"Timestamp"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_data"),": a json blob representing with the event data. The field type in MongoDB is ",(0,i.kt)("inlineCode",{parentName:"li"},"Object"),".")),(0,i.kt)("h2",{id:"getting-started-airbyte-cloud"},"Getting Started ","(","Airbyte Cloud",")"),(0,i.kt)("p",null,"Airbyte Cloud only supports connecting to your MongoDB instance with TLS encryption. Other than that, you can proceed with the open-source instructions below."),(0,i.kt)("h2",{id:"getting-started-airbyte-open-source"},"Getting Started ","(","Airbyte Open-Source",")"),(0,i.kt)("h4",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"To use the MongoDB destination, you'll need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A MongoDB server")),(0,i.kt)("h4",{id:"permissions"},(0,i.kt)("strong",{parentName:"h4"},"Permissions")),(0,i.kt)("p",null,"You need a MongoDB user that can create collections and write documents. We highly recommend creating an Airbyte-specific user for this purpose."),(0,i.kt)("h4",{id:"target-database"},"Target Database"),(0,i.kt)("p",null,"You will need to choose an existing database or create a new database that will be used to store synced data from Airbyte."),(0,i.kt)("h3",{id:"setup-the-mongodb-destination-in-airbyte"},"Setup the MongoDB destination in Airbyte"),(0,i.kt)("p",null,"You should now have all the requirements needed to configure MongoDB as a destination in the UI. You'll need the following information to configure the MongoDB destination:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Standalone MongoDb instance"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Host: URL of the database"),(0,i.kt)("li",{parentName:"ul"},"Port: Port to use for connecting to the database"),(0,i.kt)("li",{parentName:"ul"},"TLS: indicates whether to create encrypted connection"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Replica Set"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Server addresses: the members of a replica set"),(0,i.kt)("li",{parentName:"ul"},"Replica Set: A replica set name"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"MongoDb Atlas Cluster"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Cluster URL: URL of a cluster to connect to"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Database")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Username")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Password"))),(0,i.kt)("p",null,"For more information regarding configuration parameters, please see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/drivers/java/sync/v4.3/fundamentals/connection/"},"MongoDb Documentation"),"."),(0,i.kt)("h2",{id:"naming-conventions"},"Naming Conventions"),(0,i.kt)("p",null,"The following information comes from the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/reference/limits/"},"MongoDB Limits and Thresholds")," documentation."),(0,i.kt)("h4",{id:"database-name-case-sensitivity"},"Database Name Case Sensitivity"),(0,i.kt)("p",null,"Since database names are case insensitive in MongoDB, database names cannot differ only by the case of the characters."),(0,i.kt)("h4",{id:"restrictions-on-database-names-for-windows"},"Restrictions on Database Names for Windows"),(0,i.kt)("p",null,'For MongoDB deployments running on Windows, database names cannot contain any of the following characters: /. "$',(0,i.kt)("em",{parentName:"p"},"<",">",":","|","?")),(0,i.kt)("p",null,"Also database names cannot contain the null character."),(0,i.kt)("h4",{id:"restrictions-on-database-names-for-unix-and-linux-systems"},"Restrictions on Database Names for Unix and Linux Systems"),(0,i.kt)("p",null,'For MongoDB deployments running on Unix and Linux systems, database names cannot contain any of the following characters: /. "$'),(0,i.kt)("p",null,"Also database names cannot contain the null character."),(0,i.kt)("h4",{id:"length-of-database-names"},"Length of Database Names"),(0,i.kt)("p",null,"Database names cannot be empty and must have fewer than 64 characters."),(0,i.kt)("h4",{id:"restriction-on-collection-names"},"Restriction on Collection Names"),(0,i.kt)("p",null,"Collection names should begin with an underscore or a letter character, and cannot:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"contain the $."),(0,i.kt)("li",{parentName:"ul"},"be an empty string ","(",'e.g. ""',")","."),(0,i.kt)("li",{parentName:"ul"},"contain the null character."),(0,i.kt)("li",{parentName:"ul"},"begin with the system. prefix. ","(","Reserved for internal use.",")")),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-02-14"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10256"},"10256")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(unpublished) Add ",(0,i.kt)("inlineCode",{parentName:"td"},"-XX:+ExitOnOutOfMemoryError")," JVM option")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-30"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8809"},"8809")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Update connector fields title/description")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-10-18"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6945"},"6945")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Create a secure-only MongoDb destination")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-09-29"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6536"},"6536")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Destination MongoDb: added support via TLS/SSL")))))}c.isMDXComponent=!0}}]);