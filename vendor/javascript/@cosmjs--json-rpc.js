import*as e from"@cosmjs/stream";var r={};Object.defineProperty(r,"__esModule",{value:true});r.makeJsonRpcId=void 0;let s=1e4;function makeJsonRpcId$1(){return s+=1}r.makeJsonRpcId=makeJsonRpcId$1;var o={};Object.defineProperty(o,"__esModule",{value:true});o.jsonRpcCode=o.isJsonRpcSuccessResponse=o.isJsonRpcErrorResponse=void 0;function isJsonRpcErrorResponse$1(e){return"object"===typeof e.error}o.isJsonRpcErrorResponse=isJsonRpcErrorResponse$1;function isJsonRpcSuccessResponse$1(e){return!isJsonRpcErrorResponse$1(e)}o.isJsonRpcSuccessResponse=isJsonRpcSuccessResponse$1;o.jsonRpcCode={parseError:-32700,invalidRequest:-32600,methodNotFound:-32601,invalidParams:-32602,internalError:-32603,serverError:{default:-32e3}};var n="default"in e?e.default:e;var t={};Object.defineProperty(t,"__esModule",{value:true});t.JsonRpcClient=void 0;const p=n;const i=o;class JsonRpcClient$1{constructor(e){this.connection=e}async run(e){const r=this.connection.responseStream.filter((r=>r.id===e.id));const s=(0,p.firstEvent)(r);this.connection.sendRequest(e);const o=await s;if((0,i.isJsonRpcErrorResponse)(o)){const e=o.error;throw new Error(`JSON RPC error: code=${e.code}; message='${e.message}'`)}return o}}t.JsonRpcClient=JsonRpcClient$1;var c={};Object.defineProperty(c,"__esModule",{value:true});c.isJsonCompatibleDictionary=c.isJsonCompatibleArray=c.isJsonCompatibleValue=void 0;function isJsonCompatibleValue(e){return!("string"!==typeof e&&"number"!==typeof e&&"boolean"!==typeof e&&null!==e&&!isJsonCompatibleArray(e)&&!isJsonCompatibleDictionary(e))}c.isJsonCompatibleValue=isJsonCompatibleValue;function isJsonCompatibleArray(e){if(!Array.isArray(e))return false;for(const r of e)if(!isJsonCompatibleValue(r))return false;return true}c.isJsonCompatibleArray=isJsonCompatibleArray;function isJsonCompatibleDictionary(e){return"object"===typeof e&&null!==e&&("[object Object]"===Object.prototype.toString.call(e)&&Object.values(e).every(isJsonCompatibleValue))}c.isJsonCompatibleDictionary=isJsonCompatibleDictionary;var a={};Object.defineProperty(a,"__esModule",{value:true});a.parseJsonRpcResponse=a.parseJsonRpcSuccessResponse=a.parseJsonRpcErrorResponse=a.parseJsonRpcRequest=a.parseJsonRpcId=void 0;const u=c;function parseJsonRpcId$1(e){if(!(0,u.isJsonCompatibleDictionary)(e))throw new Error("Data must be JSON compatible dictionary");const r=e.id;return"number"!==typeof r&&"string"!==typeof r?null:r}a.parseJsonRpcId=parseJsonRpcId$1;function parseJsonRpcRequest$1(e){if(!(0,u.isJsonCompatibleDictionary)(e))throw new Error("Data must be JSON compatible dictionary");if("2.0"!==e.jsonrpc)throw new Error(`Got unexpected jsonrpc version: ${e.jsonrpc}`);const r=parseJsonRpcId$1(e);if(null===r)throw new Error("Invalid id field");const s=e.method;if("string"!==typeof s)throw new Error("Invalid method field");if(!(0,u.isJsonCompatibleArray)(e.params)&&!(0,u.isJsonCompatibleDictionary)(e.params))throw new Error("Invalid params field");return{jsonrpc:"2.0",id:r,method:s,params:e.params}}a.parseJsonRpcRequest=parseJsonRpcRequest$1;function parseError(e){if("number"!==typeof e.code)throw new Error("Error property 'code' is not a number");if("string"!==typeof e.message)throw new Error("Error property 'message' is not a string");let r;if(void 0===e.data)r=void 0;else{if(!(0,u.isJsonCompatibleValue)(e.data))throw new Error("Error property 'data' is defined but not a JSON compatible value.");r=e.data}return{code:e.code,message:e.message,...void 0!==r?{data:r}:{}}}function parseJsonRpcErrorResponse$1(e){if(!(0,u.isJsonCompatibleDictionary)(e))throw new Error("Data must be JSON compatible dictionary");if("2.0"!==e.jsonrpc)throw new Error(`Got unexpected jsonrpc version: ${JSON.stringify(e)}`);const r=e.id;if("number"!==typeof r&&"string"!==typeof r&&null!==r)throw new Error("Invalid id field");if("undefined"===typeof e.error||!(0,u.isJsonCompatibleDictionary)(e.error))throw new Error("Invalid error field");return{jsonrpc:"2.0",id:r,error:parseError(e.error)}}a.parseJsonRpcErrorResponse=parseJsonRpcErrorResponse$1;function parseJsonRpcSuccessResponse$1(e){if(!(0,u.isJsonCompatibleDictionary)(e))throw new Error("Data must be JSON compatible dictionary");if("2.0"!==e.jsonrpc)throw new Error(`Got unexpected jsonrpc version: ${JSON.stringify(e)}`);const r=e.id;if("number"!==typeof r&&"string"!==typeof r)throw new Error("Invalid id field");if("undefined"===typeof e.result)throw new Error("Invalid result field");const s=e.result;return{jsonrpc:"2.0",id:r,result:s}}a.parseJsonRpcSuccessResponse=parseJsonRpcSuccessResponse$1;function parseJsonRpcResponse$1(e){let r;try{r=parseJsonRpcErrorResponse$1(e)}catch(s){r=parseJsonRpcSuccessResponse$1(e)}return r}a.parseJsonRpcResponse=parseJsonRpcResponse$1;var R={};Object.defineProperty(R,"__esModule",{value:true});R.jsonRpcCode=R.isJsonRpcSuccessResponse=R.isJsonRpcErrorResponse=R.parseJsonRpcSuccessResponse=R.parseJsonRpcResponse=R.parseJsonRpcRequest=R.parseJsonRpcId=R.parseJsonRpcErrorResponse=R.JsonRpcClient=R.makeJsonRpcId=void 0;var d=r;Object.defineProperty(R,"makeJsonRpcId",{enumerable:true,get:function(){return d.makeJsonRpcId}});var l=t;Object.defineProperty(R,"JsonRpcClient",{enumerable:true,get:function(){return l.JsonRpcClient}});var J=a;Object.defineProperty(R,"parseJsonRpcErrorResponse",{enumerable:true,get:function(){return J.parseJsonRpcErrorResponse}});Object.defineProperty(R,"parseJsonRpcId",{enumerable:true,get:function(){return J.parseJsonRpcId}});Object.defineProperty(R,"parseJsonRpcRequest",{enumerable:true,get:function(){return J.parseJsonRpcRequest}});Object.defineProperty(R,"parseJsonRpcResponse",{enumerable:true,get:function(){return J.parseJsonRpcResponse}});Object.defineProperty(R,"parseJsonRpcSuccessResponse",{enumerable:true,get:function(){return J.parseJsonRpcSuccessResponse}});var f=o;Object.defineProperty(R,"isJsonRpcErrorResponse",{enumerable:true,get:function(){return f.isJsonRpcErrorResponse}});Object.defineProperty(R,"isJsonRpcSuccessResponse",{enumerable:true,get:function(){return f.isJsonRpcSuccessResponse}});Object.defineProperty(R,"jsonRpcCode",{enumerable:true,get:function(){return f.jsonRpcCode}});const m=R.__esModule,b=R.jsonRpcCode,y=R.isJsonRpcSuccessResponse,E=R.isJsonRpcErrorResponse,v=R.parseJsonRpcSuccessResponse,j=R.parseJsonRpcResponse,C=R.parseJsonRpcRequest,w=R.parseJsonRpcId,O=R.parseJsonRpcErrorResponse,S=R.JsonRpcClient,$=R.makeJsonRpcId;export{S as JsonRpcClient,m as __esModule,R as default,E as isJsonRpcErrorResponse,y as isJsonRpcSuccessResponse,b as jsonRpcCode,$ as makeJsonRpcId,O as parseJsonRpcErrorResponse,w as parseJsonRpcId,C as parseJsonRpcRequest,j as parseJsonRpcResponse,v as parseJsonRpcSuccessResponse};
