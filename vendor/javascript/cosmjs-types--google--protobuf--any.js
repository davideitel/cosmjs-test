import*as e from"long";import*as t from"protobufjs/minimal";var r="default"in e?e.default:e;var n="default"in t?t.default:t;var o="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var a={};var l=a&&a.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:true});a.Any=a.protobufPackage=void 0;const u=l(r);const i=l(n);a.protobufPackage="google.protobuf";const f={typeUrl:""};a.Any={encode(e,t=i.default.Writer.create()){""!==e.typeUrl&&t.uint32(10).string(e.typeUrl);0!==e.value.length&&t.uint32(18).bytes(e.value);return t},decode(e,t){const r=e instanceof i.default.Reader?e:new i.default.Reader(e);let n=void 0===t?r.len:r.pos+t;const o=Object.assign({},f);o.value=new Uint8Array;while(r.pos<n){const e=r.uint32();switch(e>>>3){case 1:o.typeUrl=r.string();break;case 2:o.value=r.bytes();break;default:r.skipType(7&e);break}}return o},fromJSON(e){const t=Object.assign({},f);t.typeUrl=void 0!==e.typeUrl&&null!==e.typeUrl?String(e.typeUrl):"";t.value=void 0!==e.value&&null!==e.value?bytesFromBase64(e.value):new Uint8Array;return t},toJSON(e){const t={};void 0!==e.typeUrl&&(t.typeUrl=e.typeUrl);void 0!==e.value&&(t.value=base64FromBytes(void 0!==e.value?e.value:new Uint8Array));return t},fromPartial(e){var t,r;const n=Object.assign({},f);n.typeUrl=null!==(t=e.typeUrl)&&void 0!==t?t:"";n.value=null!==(r=e.value)&&void 0!==r?r:new Uint8Array;return n}};var s=(()=>{if("undefined"!==typeof s)return s;if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof o)return o;throw"Unable to locate global object"})();const d=s.atob||(e=>s.Buffer.from(e,"base64").toString("binary"));function bytesFromBase64(e){const t=d(e);const r=new Uint8Array(t.length);for(let e=0;e<t.length;++e)r[e]=t.charCodeAt(e);return r}const c=s.btoa||(e=>s.Buffer.from(e,"binary").toString("base64"));function base64FromBytes(e){const t=[];for(const r of e)t.push(String.fromCharCode(r));return c(t.join(""))}if(i.default.util.Long!==u.default){i.default.util.Long=u.default;i.default.configure()}const y=a.__esModule,p=a.Any,v=a.protobufPackage;export{p as Any,y as __esModule,a as default,v as protobufPackage};

