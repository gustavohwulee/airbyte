"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[827],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),h=o,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},48796:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={},s="Workers & Jobs",c={unversionedId:"understanding-airbyte/jobs",id:"understanding-airbyte/jobs",title:"Workers & Jobs",description:"In Airbyte, all interactions with connectors are run as jobs performed by a Worker. Examples of workers are:",source:"@site/../docs/understanding-airbyte/jobs.md",sourceDirName:"understanding-airbyte",slug:"/understanding-airbyte/jobs",permalink:"/understanding-airbyte/jobs",editUrl:"https://github.com/airbytehq/airbyte/blob/gitbook/v1/README.md/../docs/understanding-airbyte/jobs.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Architecture overview",permalink:"/understanding-airbyte/high-level-view"},next:{title:"Technical Stack",permalink:"/understanding-airbyte/tech-stack"}},u={},p=[{value:"Worker Responsibilities",id:"worker-responsibilities",level:2},{value:"Message Passing",id:"message-passing",level:2},{value:"Worker Lifecycle",id:"worker-lifecycle",level:2},{value:"Worker parallelization",id:"worker-parallelization",level:2},{value:"Job State Machine",id:"job-state-machine",level:2}],d={toc:p};function h(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"workers--jobs"},"Workers & Jobs"),(0,a.kt)("p",null,"In Airbyte, all interactions with connectors are run as jobs performed by a Worker. Examples of workers are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Spec worker: retrieves the specification of a connector ","(","the inputs needed to run this connector",")"),(0,a.kt)("li",{parentName:"ul"},"Check connection worker: verifies that the inputs to a connector are valid and can be used to run a sync"),(0,a.kt)("li",{parentName:"ul"},"Discovery worker: retrieves the schema of the source underlying a connector"),(0,a.kt)("li",{parentName:"ul"},"Sync worker, used to sync data between a source and destination")),(0,a.kt)("h2",{id:"worker-responsibilities"},"Worker Responsibilities"),(0,a.kt)("p",null,"The worker has 4 main responsibilities in its lifecycle. "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Spin up any connector docker containers that are needed for the job. "),(0,a.kt)("li",{parentName:"ol"},"They facilitate message passing to or from a connector docker container ","(","more on this ",(0,a.kt)("a",{parentName:"li",href:"/understanding-airbyte/jobs#message-passing"},"below"),")",". "),(0,a.kt)("li",{parentName:"ol"},"Shut down any connector docker containers that it started. "),(0,a.kt)("li",{parentName:"ol"},"Return the output of the job. ","(","See ",(0,a.kt)("a",{parentName:"li",href:"/understanding-airbyte/airbyte-specification"},"Airbyte Specification")," to understand the output of each worker type.",")")),(0,a.kt)("h2",{id:"message-passing"},"Message Passing"),(0,a.kt)("p",null,"There are 2 flavors of workers: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"There are workers that interact with a single connector ","(","e.g. spec, check, discover",")"," "),(0,a.kt)("li",{parentName:"ol"},"There are workers that interact with 2 connectors ","(","e.g. sync, reset",")")),(0,a.kt)("p",null,"In the first case, the worker is generally extracting data from the connector and reporting it back to the scheduler. It does this by listening to STDOUT of the connector. In the second case, the worker is facilitating passing data ","(","via record messages",")"," from the source to the destination. It does this by listening on STDOUT of the source and writing to STDIN on the destination."),(0,a.kt)("p",null,"For more information on the schema of the messages that are passed, refer to ",(0,a.kt)("a",{parentName:"p",href:"/understanding-airbyte/airbyte-specification"},"Airbyte Specification"),"."),(0,a.kt)("h2",{id:"worker-lifecycle"},"Worker Lifecycle"),(0,a.kt)("p",null,"This section will depict the lifecycle of a worker. It will only show the 2 connector version. The single connector version is the same with one side removed."),(0,a.kt)("p",null,"Note: When a source has passed all of its messages, the docker process should automatically exit. After a destination has received all records, it should automatically shutdown. The worker gives each a grace period to shutdown on their own. If that grace period expires, then the worker will force shutdown."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Worker Lifecycle",src:r(60947).Z,width:"573",height:"865"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.google.com/drawings/d/1k4v_m2M5o2UUoNlYM7mwtZicRkQgoGLgb3eTOVH8QFo/edit"},"Image Source")),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"/understanding-airbyte/high-level-view"},"architecture overview")," for more information about workers."),(0,a.kt)("h2",{id:"worker-parallelization"},"Worker parallelization"),(0,a.kt)("p",null,"Airbyte exposes the following environment variable to change the maximum number of each type of worker allowed to run in parallel.\nTweaking these values might help you run more jobs in parallel and increase the workload of your Airbyte instance: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MAX_SPEC_WORKERS"),": Maximum number of ",(0,a.kt)("em",{parentName:"li"},"Spec")," workers allowed to run in parallel."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MAX_CHECK_WORKERS"),": Maximum number of ",(0,a.kt)("em",{parentName:"li"},"Check connection")," workers allowed to run in parallel."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MAX_DISCOVERY_WORKERS"),": Maximum number of ",(0,a.kt)("em",{parentName:"li"},"Discovery")," workers allowed to run in parallel."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MAX_SYNC_WORKERS"),": Maximum number of ",(0,a.kt)("em",{parentName:"li"},"Sync")," workers allowed to run in parallel.")),(0,a.kt)("p",null,"The current default value for these environment variables is currently set to ",(0,a.kt)("strong",{parentName:"p"},"5"),"."),(0,a.kt)("h2",{id:"job-state-machine"},"Job State Machine"),(0,a.kt)("p",null,"Jobs in the worker follow the following state machine."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Job state machine",src:r(14010).Z,width:"761",height:"659"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.google.com/drawings/d/1oMahOg1T8cssxiimV8u4lChbQP5D-wVrSjdMSgxdjiQ/edit"},"Image Source")))}h.isMDXComponent=!0},14010:function(e,t,r){t.Z=r.p+"assets/images/job-state-machine-447f95b10a545b1970640c9a7675f8fd.png"},60947:function(e,t,r){t.Z=r.p+"assets/images/worker-lifecycle-56ac18a0f5b7351162991f3d93f85a3b.png"}}]);