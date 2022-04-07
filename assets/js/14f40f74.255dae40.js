"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[1497],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},96890:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={},s="Elasticsearch",p={unversionedId:"integrations/destinations/elasticsearch",id:"integrations/destinations/elasticsearch",title:"Elasticsearch",description:"Sync overview",source:"@site/../docs/integrations/destinations/elasticsearch.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/elasticsearch",permalink:"/integrations/destinations/elasticsearch",editUrl:"https://github.com/airbytehq/airbyte/blob/gitbook/v1/README.md/../docs/integrations/destinations/elasticsearch.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"DynamoDB",permalink:"/integrations/destinations/dynamodb"},next:{title:"End-to-End Testing Destination",permalink:"/integrations/destinations/e2e-test"}},c={},m=[{value:"Sync overview",id:"sync-overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Data type mapping",id:"data-type-mapping",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"TODO: more info, screenshots?, etc...",id:"todo-more-info-screenshots-etc",level:4}],d={toc:m};function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"elasticsearch"},"Elasticsearch"),(0,i.kt)("h2",{id:"sync-overview"},"Sync overview"),(0,i.kt)("h3",{id:"output-schema"},"Output schema"),(0,i.kt)("p",null,"Elasticsearch is a Lucene based search engine that's a type of NoSql storage.",(0,i.kt)("br",{parentName:"p"}),"\n","Documents are created in an ",(0,i.kt)("inlineCode",{parentName:"p"},"index"),", similar to a ",(0,i.kt)("inlineCode",{parentName:"p"},"table"),"in a relation database."),(0,i.kt)("p",null,"The output schema matches the input schema of a source.\nEach source ",(0,i.kt)("inlineCode",{parentName:"p"},"stream")," becomes a destination ",(0,i.kt)("inlineCode",{parentName:"p"},"index"),".",(0,i.kt)("br",{parentName:"p"}),"\n","For example, in with a relational database source -",(0,i.kt)("br",{parentName:"p"}),"\n","The DB table name is mapped to the destination index.\nThe DB table columns become fields in the destination document.",(0,i.kt)("br",{parentName:"p"}),"\n","Each row becomes a document in the destination index.  "),(0,i.kt)("h3",{id:"data-type-mapping"},"Data type mapping"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-types.html"},"See Elastic documentation for detailed information about the field types"),"\nThis section should contain a table mapping each of the connector's data types to Airbyte types. At the moment, Airbyte uses the same types used by ",(0,i.kt)("a",{parentName:"p",href:"https://json-schema.org/understanding-json-schema/reference/index.html"},"JSONSchema"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"date-time"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"object"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"array"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"integer"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," are the most commonly used data types."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"text"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/text.html"},"more info"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"date"),(0,i.kt)("td",{parentName:"tr",align:"left"},"date-time"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/date.html"},"more info"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"object"),(0,i.kt)("td",{parentName:"tr",align:"left"},"object"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/object.html"},"more info"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"array"),(0,i.kt)("td",{parentName:"tr",align:"left"},"array"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/array.html"},"more info"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/boolean.html"},"more info"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"numeric"),(0,i.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/number.html"},"more info"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"numeric"),(0,i.kt)("td",{parentName:"tr",align:"left"},"number"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/number.html"},"more info"))))),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("p",null,"This section should contain a table with the following format:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Supported?(Yes/No)"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Replicate Incremental Deletes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"no"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"SSH Tunnel Support"),(0,i.kt)("td",{parentName:"tr",align:"left"},"??"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,i.kt)("p",null,"Batch/bulk writes are performed. Large records may impact performance.",(0,i.kt)("br",{parentName:"p"}),"\n","The connector should be enhanced to support variable batch sizes."),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Elasticsearch >= 7.x"),(0,i.kt)("li",{parentName:"ul"},"Configuration ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Endpoint URL ","[ex. https://elasticsearch.savantly.net:9423]"),(0,i.kt)("li",{parentName:"ul"},"Port number ","[defaults to 9002]"),(0,i.kt)("li",{parentName:"ul"},"Username ","[optional]"," (basic auth)"),(0,i.kt)("li",{parentName:"ul"},"Password ","[optional]"," (basic auth)"),(0,i.kt)("li",{parentName:"ul"},"Api key ID ","[optional]"),(0,i.kt)("li",{parentName:"ul"},"Api key secret ","[optional]"))),(0,i.kt)("li",{parentName:"ul"},"If authentication is used, the user should have permission to create an index if it doesn't exist, and/or be able to ",(0,i.kt)("inlineCode",{parentName:"li"},"create")," documents")),(0,i.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,i.kt)("p",null,"Enter the hostname and/or other configuration information ... "),(0,i.kt)("h4",{id:"todo-more-info-screenshots-etc"},"TODO: more info, screenshots?, etc..."))}u.isMDXComponent=!0}}]);