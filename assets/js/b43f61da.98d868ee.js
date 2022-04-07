"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[7959],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,h=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61951:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],c={},s="Connector Specification Reference",l={unversionedId:"connector-development/connector-specification-reference",id:"connector-development/connector-specification-reference",title:"Connector Specification Reference",description:"The connector specification describes what inputs can be used to configure a connector. Like the rest of the Airbyte Protocol, it uses JsonSchema, but with some slight modifications.",source:"@site/../docs/connector-development/connector-specification-reference.md",sourceDirName:"connector-development",slug:"/connector-development/connector-specification-reference",permalink:"/connector-development/connector-specification-reference",editUrl:"https://github.com/airbytehq/airbyte/blob/gitbook/v1/README.md/../docs/connector-development/connector-specification-reference.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Source Acceptance Tests Reference",permalink:"/connector-development/testing-connectors/source-acceptance-tests-reference"},next:{title:"Best Practices",permalink:"/connector-development/best-practices"}},p={},u=[{value:"Demoing your specification",id:"demoing-your-specification",level:2},{value:"Secret obfuscation",id:"secret-obfuscation",level:3},{value:"Ordering fields in the UI",id:"ordering-fields-in-the-ui",level:3},{value:"Multi-line String inputs",id:"multi-line-string-inputs",level:3},{value:"Using <code>oneOf</code>s",id:"using-oneofs",level:3}],d={toc:u};function f(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"connector-specification-reference"},"Connector Specification Reference"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/understanding-airbyte/airbyte-specification#spec"},"connector specification")," describes what inputs can be used to configure a connector. Like the rest of the Airbyte Protocol, it uses ",(0,i.kt)("a",{parentName:"p",href:"https://json-schema.org"},"JsonSchema"),", but with some slight modifications."),(0,i.kt)("h2",{id:"demoing-your-specification"},"Demoing your specification"),(0,i.kt)("p",null,"While iterating on your specification, you can preview what it will look like in the UI in realtime by following the instructions ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-webapp/docs/HowTo-ConnectionSpecification.md"},"here"),"."),(0,i.kt)("h3",{id:"secret-obfuscation"},"Secret obfuscation"),(0,i.kt)("p",null,"By default, any fields in a connector's specification are visible can be read in the UI. However, if you want to obfuscate fields in the UI and API ","(","for example when working with a password",")",", add the ",(0,i.kt)("inlineCode",{parentName:"p"},"airbyte_secret")," annotation to your connector's ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.json")," e.g:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'"password": {\n  "type": "string",\n  "examples": ["hunter2"],\n  "airbyte_secret": true\n},\n')),(0,i.kt)("p",null,"Here is an example of what the password field would look like: ",(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/6246757/128300633-7f379b05-5f4a-46e8-ad88-88155e7f4260.png",alt:"Screen Shot 2021-08-04 at 11 15 04 PM"})),(0,i.kt)("h3",{id:"ordering-fields-in-the-ui"},"Ordering fields in the UI"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"order")," property inside a definition to determine the order in which it will appear relative to other objects on the same level of nesting in the UI. "),(0,i.kt)("p",null,"For example, using the following spec: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "username": {"type": "string", "order": 1},\n  "password": {"type": "string", "order": 2},\n  "cloud_provider": {\n    "order": 0,\n    "type": "object",\n    "properties" : {\n      "name": {"type": "string", "order": 0},\n      "region": {"type": "string", "order": 1}\n    }\n  }\n}\n')),(0,i.kt)("p",null,"will result in the following configuration on the UI: "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/6246757/142558797-135f6c73-f05d-479f-9d88-e20cae85870c.png",alt:"Screen Shot 2021-11-18 at 7 14 04 PM"})),(0,i.kt)("h3",{id:"multi-line-string-inputs"},"Multi-line String inputs"),(0,i.kt)("p",null,"Sometimes when a user is inputting a string field into a connector, newlines need to be preserveed. For example, if we want a connector to use an RSA key which looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"---- BEGIN PRIVATE KEY ----\n123\n456\n789\n---- END PRIVATE KEY ----\n")),(0,i.kt)("p",null,"we need to preserve the line-breaks. In other words, the string ",(0,i.kt)("inlineCode",{parentName:"p"},"---- BEGIN PRIVATE KEY ----123456789---- END PRIVATE KEY ----")," is not equivalent to the one above since it loses linebreaks."),(0,i.kt)("p",null,"By default, string inputs in the UI can lose their linebreaks. In order to accept multi-line strings in the UI, annotate your string field with ",(0,i.kt)("inlineCode",{parentName:"p"},"multiline: true")," e.g:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'"private_key": {\n  "type": "string",\n  "description": "RSA private key to use for SSH connection",\n  "airbyte_secret": true,\n  "multiline": true\n},\n')),(0,i.kt)("p",null,"this will display a multi-line textbox in the UI like the following screenshot: ",(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/6246757/128300404-1dc35323-bceb-4f93-9b81-b23cc4beb670.png",alt:"Screen Shot 2021-08-04 at 11 13 09 PM"})),(0,i.kt)("h3",{id:"using-oneofs"},"Using ",(0,i.kt)("inlineCode",{parentName:"h3"},"oneOf"),"s"),(0,i.kt)("p",null,"In some cases, a connector needs to accept one out of many options. For example, a connector might need to know the compression codec of the file it will read, which will render in the Airbyte UI as a list of the available codecs. In JSONSchema, this can be expressed using the ",(0,i.kt)("a",{parentName:"p",href:"https://json-schema.org/understanding-json-schema/reference/combining.html#oneof"},"oneOf")," keyword."),(0,i.kt)("p",null,'{% hint style="info" %}\nSome connectors may follow an older format for dropdown lists, we are currently migrating away from that to this standard.\n{% endhint %}'),(0,i.kt)("p",null,"In order for the Airbyte UI to correctly render a specification, however, a few extra rules must be followed:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The top-level item containing the ",(0,i.kt)("inlineCode",{parentName:"li"},"oneOf")," must have ",(0,i.kt)("inlineCode",{parentName:"li"},"type: object"),"."),(0,i.kt)("li",{parentName:"ol"},"Each item in the ",(0,i.kt)("inlineCode",{parentName:"li"},"oneOf")," array must be a property with ",(0,i.kt)("inlineCode",{parentName:"li"},"type: object"),"."),(0,i.kt)("li",{parentName:"ol"},"One ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," field with the same property name must be consistently present throughout each object inside the ",(0,i.kt)("inlineCode",{parentName:"li"},"oneOf")," array. It is required to add a ",(0,i.kt)("a",{parentName:"li",href:"https://json-schema.org/understanding-json-schema/reference/generic.html#constant-values"},(0,i.kt)("inlineCode",{parentName:"a"},"const"))," value unique to that ",(0,i.kt)("inlineCode",{parentName:"li"},"oneOf")," option.")),(0,i.kt)("p",null,"Let's look at the ",(0,i.kt)("a",{parentName:"p",href:"/integrations/sources/file"},"source-file")," implementation as an example. In this example, we have ",(0,i.kt)("inlineCode",{parentName:"p"},"provider")," as a dropdown list option, which allows the user to select what provider their file is being hosted on. We note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"oneOf")," keyword lives under the ",(0,i.kt)("inlineCode",{parentName:"p"},"provider")," object as follows:"),(0,i.kt)("p",null,"In each item in the ",(0,i.kt)("inlineCode",{parentName:"p"},"oneOf")," array, the ",(0,i.kt)("inlineCode",{parentName:"p"},"option_title")," string field exists with the aforementioned ",(0,i.kt)("inlineCode",{parentName:"p"},"const")," value unique to that item. This helps the UI and the connector distinguish between the option that was chosen by the user. This can be displayed with adapting the file source spec to this example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "connection_specification": {\n    "$schema": "http://json-schema.org/draft-07/schema#",\n    "title": "File Source Spec",\n    "type": "object",\n    "additionalProperties": false,\n    "required": ["dataset_name", "format", "url", "provider"],\n    "properties": {\n      "dataset_name": {\n        ...\n      },\n      "format": {\n        ...\n      },\n      "reader_options": {\n        ...\n      },\n      "url": {\n        ...\n      },\n      "provider": {\n        "type": "object",\n        "oneOf": [\n          {\n            "required": [\n              "option_title"\n            ],\n            "properties": {\n              "option_title": {\n                "type": "string",\n                "const": "HTTPS: Public Web",\n                "order": 0\n              }\n            }\n          },\n          {\n            "required": [\n              "option_title"\n            ],\n            "properties": {\n              "option_title": {\n                "type": "string",\n                "const": "GCS: Google Cloud Storage",\n                "order": 0\n              },\n              "service_account_json": {\n                "type": "string",\n                "description": "In order to access private Buckets stored on Google Cloud, this connector would need a service account json credentials with the proper permissions as described <a href=\\"https://cloud.google.com/iam/docs/service-accounts\\" target=\\"_blank\\">here</a>. Please generate the credentials.json file and copy/paste its content to this field (expecting JSON formats). If accessing publicly available data, this field is not necessary."\n              }\n            }\n          }\n        ]\n      }\n  }\n}\n')))}f.isMDXComponent=!0}}]);