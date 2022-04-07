"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[1533],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),c=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(r),m=n,g=s["".concat(u,".").concat(m)]||s[m]||p[m]||i;return r?a.createElement(g,o(o({ref:t},d),{},{components:r})):a.createElement(g,o({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},85237:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),o=["components"],l={description:"BigQuery is a serverless, highly scalable, and cost-effective data warehouse offered by Google Cloud Provider."},u="BigQuery",c={unversionedId:"integrations/sources/bigquery",id:"integrations/sources/bigquery",title:"BigQuery",description:"BigQuery is a serverless, highly scalable, and cost-effective data warehouse offered by Google Cloud Provider.",source:"@site/../docs/integrations/sources/bigquery.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/bigquery",permalink:"/integrations/sources/bigquery",editUrl:"https://github.com/airbytehq/airbyte/blob/gitbook/v1/README.md/../docs/integrations/sources/bigquery.md",tags:[],version:"current",frontMatter:{description:"BigQuery is a serverless, highly scalable, and cost-effective data warehouse offered by Google Cloud Provider."},sidebar:"mySidebar",previous:{title:"BigCommerce",permalink:"/integrations/sources/bigcommerce"},next:{title:"Braintree",permalink:"/integrations/sources/braintree"}},d={},p=[{value:"Overview",id:"overview",level:2},{value:"Resulting schema",id:"resulting-schema",level:3},{value:"Data type mapping",id:"data-type-mapping",level:3},{value:"Features",id:"features",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Service account",id:"service-account",level:4},{value:"Service account key",id:"service-account-key",level:4},{value:"Setup the BigQuery source in Airbyte",id:"setup-the-bigquery-source-in-airbyte",level:3},{value:"CHANGELOG",id:"changelog",level:2},{value:"source-bigquery",id:"source-bigquery",level:3}],s={toc:p};function m(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bigquery"},"BigQuery"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The BigQuery source supports both Full Refresh and Incremental syncs. You can choose if this connector will copy only the new or updated data, or all rows in the tables and columns you set up for replication, every time a sync is running."),(0,i.kt)("h3",{id:"resulting-schema"},"Resulting schema"),(0,i.kt)("p",null,"The BigQuery source does not alter the schema present in your database. Depending on the destination connected to this source, however, the schema may be altered. See the destination's documentation for more details."),(0,i.kt)("h3",{id:"data-type-mapping"},"Data type mapping"),(0,i.kt)("p",null,"The BigQuery data types mapping:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"CockroachDb Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Resulting Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"BOOL")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"INT64")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"FLOAT64")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"NUMERIC")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"BIGNUMERIC")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"STRING")),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"BYTES")),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"DATE")),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"In ISO8601 format")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"DATETIME")),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"In ISO8601 format")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TIMESTAMP")),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"In ISO8601 format")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TIME")),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ARRAY")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"STRUCT")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"GEOGRAPHY")),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Supported"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Change Data Capture"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"SSL Support"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"To use the BigQuery source, you'll need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A Google Cloud Project with BigQuery enabled"),(0,i.kt)("li",{parentName:"ul"},'A Google Cloud Service Account with the "BigQuery User" and "BigQuery Data Editor" roles in your GCP project'),(0,i.kt)("li",{parentName:"ul"},"A Service Account Key to authenticate into your Service Account")),(0,i.kt)("p",null,"See the setup guide for more information about how to create the required resources."),(0,i.kt)("h4",{id:"service-account"},"Service account"),(0,i.kt)("p",null,"In order for Airbyte to sync data from BigQuery, it needs credentials for a ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/service-accounts"},"Service Account"),' with the "BigQuery User" and "BigQuery Data Editor" roles, which grants permissions to run BigQuery jobs, write to BigQuery Datasets, and read table metadata. We highly recommend that this Service Account is exclusive to Airbyte for ease of permissioning and auditing. However, you can use a pre-existing Service Account if you already have one with the correct permissions.'),(0,i.kt)("p",null,"The easiest way to create a Service Account is to follow GCP's guide for ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/creating-managing-service-accounts"},"Creating a Service Account"),". Once you've created the Service Account, make sure to keep its ID handy as you will need to reference it when granting roles. Service Account IDs typically take the form ",(0,i.kt)("inlineCode",{parentName:"p"},"<account-name>@<project-name>.iam.gserviceaccount.com")),(0,i.kt)("p",null,'Then, add the service account as a Member in your Google Cloud Project with the "BigQuery User" role. To do this, follow the instructions for ',(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/granting-changing-revoking-access#granting-console"},"Granting Access")," in the Google documentation. The email address of the member you are adding is the same as the Service Account ID you just created."),(0,i.kt)("p",null,'At this point you should have a service account with the "BigQuery User" project-level permission.'),(0,i.kt)("h4",{id:"service-account-key"},"Service account key"),(0,i.kt)("p",null,"Service Account Keys are used to authenticate as Google Service Accounts. For Airbyte to leverage the permissions you granted to the Service Account in the previous step, you'll need to provide its Service Account Keys. See the ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/service-accounts#service_account_keys"},"Google documentation")," for more information about Keys."),(0,i.kt)("p",null,"Follow the ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys"},"Creating and Managing Service Account Keys")," guide to create a key. Airbyte currently supports JSON Keys only, so make sure you create your key in that format. As soon as you created the key, make sure to download it, as that is the only time Google will allow you to see its contents. Once you've successfully configured BigQuery as a source in Airbyte, delete this key from your computer."),(0,i.kt)("h3",{id:"setup-the-bigquery-source-in-airbyte"},"Setup the BigQuery source in Airbyte"),(0,i.kt)("p",null,"You should now have all the requirements needed to configure BigQuery as a source in the UI. You'll need the following information to configure the BigQuery source:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Project ID")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Default Dataset ID ","[","Optional","]"),": the schema name if only one schema is interested. Dramatically boost source discover operation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Credentials JSON"),": the contents of your Service Account Key JSON file")),(0,i.kt)("p",null,"Once you've configured BigQuery as a source, delete the Service Account Key from your computer."),(0,i.kt)("h2",{id:"changelog"},"CHANGELOG"),(0,i.kt)("h3",{id:"source-bigquery"},"source-bigquery"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-02-14"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10256"},"10256")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add ",(0,i.kt)("inlineCode",{parentName:"td"},"-XX:+ExitOnOutOfMemoryError")," JVM option")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-23"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8434"},"8434")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Update fields in source-connectors specifications")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-09-30"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6524"},"#","6524")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Allow ",(0,i.kt)("inlineCode",{parentName:"td"},"dataset_id")," null in spec")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-09-16"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6051"},"#","6051")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Handle NPE ",(0,i.kt)("inlineCode",{parentName:"td"},"dataset_id")," is not provided")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-09-16"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6135"},"#","6135")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udc1b BigQuery source: Fix nested structs")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-07-28"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4981"},"#","4981")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udc1b BigQuery source: Fix nested arrays")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-07-22"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4457"},"#","4457")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\ud83c\udf89 New Source: Big Query.")))))}m.isMDXComponent=!0}}]);