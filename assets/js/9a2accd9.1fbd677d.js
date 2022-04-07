"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[6055],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6338:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={},s="ClickHouse",u={unversionedId:"integrations/destinations/clickhouse",id:"integrations/destinations/clickhouse",title:"ClickHouse",description:"Features",source:"@site/../docs/integrations/destinations/clickhouse.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/clickhouse",permalink:"/integrations/destinations/clickhouse",editUrl:"https://github.com/airbytehq/airbyte/blob/gitbook/v1/README.md/../docs/integrations/destinations/clickhouse.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"BigQuery",permalink:"/integrations/destinations/bigquery"},next:{title:"Databricks",permalink:"/integrations/destinations/databricks"}},c={},p=[{value:"Features",id:"features",level:2},{value:"Output Schema",id:"output-schema",level:4},{value:"Getting Started (Airbyte Cloud)",id:"getting-started-airbyte-cloud",level:2},{value:"Getting Started (Airbyte Open-Source)",id:"getting-started-airbyte-open-source",level:2},{value:"Requirements",id:"requirements",level:4},{value:"Configure Network Access",id:"configure-network-access",level:4},{value:"<strong>Permissions</strong>",id:"permissions",level:4},{value:"Target Database",id:"target-database",level:4},{value:"Setup the ClickHouse Destination in Airbyte",id:"setup-the-clickhouse-destination-in-airbyte",level:3},{value:"Naming Conventions",id:"naming-conventions",level:2},{value:"Changelog",id:"changelog",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"clickhouse"},"ClickHouse"),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental - Deduped History"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h4",{id:"output-schema"},"Output Schema"),(0,i.kt)("p",null,"Each stream will be output into its own table in ClickHouse. Each table will contain 3 columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_ab_id"),": a uuid assigned by Airbyte to each event that is processed. The column type in ClickHouse is ",(0,i.kt)("inlineCode",{parentName:"li"},"String"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_emitted_at"),": a timestamp representing when the event was pulled from the data source. The column type in ClickHouse is ",(0,i.kt)("inlineCode",{parentName:"li"},"DateTime64"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_data"),": a json blob representing with the event data. The column type in ClickHouse is ",(0,i.kt)("inlineCode",{parentName:"li"},"String"),".")),(0,i.kt)("h2",{id:"getting-started-airbyte-cloud"},"Getting Started ","(","Airbyte Cloud",")"),(0,i.kt)("p",null,"Airbyte Cloud only supports connecting to your ClickHouse instance with SSL or TLS encryption, which is supported by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/clickhouse-jdbc"},"ClickHouse JDBC driver"),"."),(0,i.kt)("h2",{id:"getting-started-airbyte-open-source"},"Getting Started ","(","Airbyte Open-Source",")"),(0,i.kt)("h4",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"To use the ClickHouse destination, you'll need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ClickHouse server version 21.8.10.19 or above")),(0,i.kt)("h4",{id:"configure-network-access"},"Configure Network Access"),(0,i.kt)("p",null,"Make sure your ClickHouse database can be accessed by Airbyte. If your database is within a VPC, you may need to allow access from the IP you're using to expose Airbyte."),(0,i.kt)("h4",{id:"permissions"},(0,i.kt)("strong",{parentName:"h4"},"Permissions")),(0,i.kt)("p",null,"You need a ClickHouse user with the following permissions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"can create tables and write rows."),(0,i.kt)("li",{parentName:"ul"},"can create databases e.g:")),(0,i.kt)("p",null,"You can create such a user by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"GRANT CREATE ON * TO airbyte_user;\n")),(0,i.kt)("p",null,"You can also use a pre-existing user but we highly recommend creating a dedicated user for Airbyte."),(0,i.kt)("h4",{id:"target-database"},"Target Database"),(0,i.kt)("p",null,"You will need to choose an existing database or create a new database that will be used to store synced data from Airbyte."),(0,i.kt)("h3",{id:"setup-the-clickhouse-destination-in-airbyte"},"Setup the ClickHouse Destination in Airbyte"),(0,i.kt)("p",null,"You should now have all the requirements needed to configure ClickHouse as a destination in the UI. You'll need the following information to configure the ClickHouse destination:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Host")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Port")," (JDBC HTTP port, not the native port)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Username")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Password")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Database"))),(0,i.kt)("h2",{id:"naming-conventions"},"Naming Conventions"),(0,i.kt)("p",null,"From ",(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/syntax/"},"ClickHouse SQL Identifiers syntax"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SQL identifiers and key words must begin with a letter ","(","a-z, but also letters with diacritical marks and non-Latin letters",")"," or an underscore ","(","_",")","."),(0,i.kt)("li",{parentName:"ul"},"Subsequent characters in an identifier or key word can be letters, underscores, digits ","(","0-9",")","."),(0,i.kt)("li",{parentName:"ul"},"Identifiers can be quoted or non-quoted. The latter is preferred."),(0,i.kt)("li",{parentName:"ul"},'If you want to use identifiers the same as keywords or you want to use other symbols in identifiers, quote it using double quotes or backticks, for example, "id", ',(0,i.kt)("inlineCode",{parentName:"li"},"id"),"."),(0,i.kt)("li",{parentName:"ul"},"If you want to write portable applications you are advised to always quote a particular name or never quote it.")),(0,i.kt)("p",null,"Therefore, Airbyte ClickHouse destination will create tables and schemas using the Unquoted identifiers when possible or fallback to Quoted Identifiers if the names are containing special characters."),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-02-25"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10421"},"10421")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Refactor JDBC parameters handling")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-02-14"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10256"},"10256")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add ",(0,i.kt)("inlineCode",{parentName:"td"},"-XX:+ExitOnOutOfMemoryError")," JVM option")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-21"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8982"},"#","8982")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Set isSchemaRequired to false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-11-04"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7620"},"#","7620")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add ClickHouse destination")))))}m.isMDXComponent=!0}}]);