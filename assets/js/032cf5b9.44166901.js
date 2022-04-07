"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[5404],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||h[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44673:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return h}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={},c="Transformation and Schemas",l={unversionedId:"archive/faq/transformation-and-schemas",id:"archive/faq/transformation-and-schemas",title:"Transformation and Schemas",description:"Where's the T in Airbyte\u2019s ETL tool?",source:"@site/../docs/archive/faq/transformation-and-schemas.md",sourceDirName:"archive/faq",slug:"/archive/faq/transformation-and-schemas",permalink:"/archive/faq/transformation-and-schemas",editUrl:"https://github.com/airbytehq/airbyte/blob/gitbook/v1/README.md/../docs/archive/faq/transformation-and-schemas.md",tags:[],version:"current",frontMatter:{}},u={},h=[{value:"<strong>Where&#39;s the T in Airbyte\u2019s ETL tool?</strong>",id:"wheres-the-t-in-airbytes-etl-tool",level:2},{value:"<strong>How does Airbyte handle replication when a data source changes its schema?</strong>",id:"how-does-airbyte-handle-replication-when-a-data-source-changes-its-schema",level:2},{value:"<strong>How does Airbyte handle namespaces (or schemas for the DB-inclined)?</strong>",id:"how-does-airbyte-handle-namespaces-or-schemas-for-the-db-inclined",level:2}],d={toc:h};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"transformation-and-schemas"},"Transformation and Schemas"),(0,o.kt)("h2",{id:"wheres-the-t-in-airbytes-etl-tool"},(0,o.kt)("strong",{parentName:"h2"},"Where's the T in Airbyte\u2019s ETL tool?")),(0,o.kt)("p",null,"Airbyte is actually an ELT tool, and you have the freedom to use it as an EL-only tool. The transformation part is done by default, but it is optional. You can choose to receive the data in raw ","(","JSON file for instance",")"," in your destination."),(0,o.kt)("p",null,"We do provide normalization ","(","if option is still on",")"," so that data analysts / scientists / any users of the data can use it without much effort."),(0,o.kt)("p",null,"We also intend to integrate deeply with dbt to make it easier for your team to continue relying you on them, if this was what you were doing."),(0,o.kt)("h2",{id:"how-does-airbyte-handle-replication-when-a-data-source-changes-its-schema"},(0,o.kt)("strong",{parentName:"h2"},"How does Airbyte handle replication when a data source changes its schema?")),(0,o.kt)("p",null,"Airbyte continues to sync data using the configured schema until that schema is updated. Because Airbyte treats all fields as optional, if a field is renamed or deleted in the source, that field simply will no longer be replicated, but all remaining fields will. The same is true for streams as well."),(0,o.kt)("p",null,"For now, the schema can only be updated manually in the UI ","(",'by clicking "Update Schema" in the settings page for the connection',")",". When a schema is updated Airbyte will re-sync all data for that source using the new schema."),(0,o.kt)("h2",{id:"how-does-airbyte-handle-namespaces-or-schemas-for-the-db-inclined"},(0,o.kt)("strong",{parentName:"h2"},"How does Airbyte handle namespaces ","(","or schemas for the DB-inclined",")","?")),(0,o.kt)("p",null,"Airbyte respects source-defined namespaces when syncing data with a namespace-supported destination. See ",(0,o.kt)("a",{parentName:"p",href:"/understanding-airbyte/namespaces"},"this")," for more details."))}f.isMDXComponent=!0}}]);