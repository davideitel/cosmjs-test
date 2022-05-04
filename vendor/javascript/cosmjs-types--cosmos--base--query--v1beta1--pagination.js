import*as e from"long";import*as t from"protobufjs/minimal";var o="default"in e?e.default:e;var n="default"in t?t.default:t;var r="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var a={};var l=a&&a.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:true});a.PageResponse=a.PageRequest=a.protobufPackage=void 0;const i=l(o);const u=l(n);a.protobufPackage="cosmos.base.query.v1beta1";const s={offset:i.default.UZERO,limit:i.default.UZERO,countTotal:false,reverse:false};a.PageRequest={encode(e,t=u.default.Writer.create()){0!==e.key.length&&t.uint32(10).bytes(e.key);e.offset.isZero()||t.uint32(16).uint64(e.offset);e.limit.isZero()||t.uint32(24).uint64(e.limit);true===e.countTotal&&t.uint32(32).bool(e.countTotal);true===e.reverse&&t.uint32(40).bool(e.reverse);return t},decode(e,t){const o=e instanceof u.default.Reader?e:new u.default.Reader(e);let n=void 0===t?o.len:o.pos+t;const r=Object.assign({},s);r.key=new Uint8Array;while(o.pos<n){const e=o.uint32();switch(e>>>3){case 1:r.key=o.bytes();break;case 2:r.offset=o.uint64();break;case 3:r.limit=o.uint64();break;case 4:r.countTotal=o.bool();break;case 5:r.reverse=o.bool();break;default:o.skipType(7&e);break}}return r},fromJSON(e){const t=Object.assign({},s);t.key=void 0!==e.key&&null!==e.key?bytesFromBase64(e.key):new Uint8Array;t.offset=void 0!==e.offset&&null!==e.offset?i.default.fromString(e.offset):i.default.UZERO;t.limit=void 0!==e.limit&&null!==e.limit?i.default.fromString(e.limit):i.default.UZERO;t.countTotal=void 0!==e.countTotal&&null!==e.countTotal&&Boolean(e.countTotal);t.reverse=void 0!==e.reverse&&null!==e.reverse&&Boolean(e.reverse);return t},toJSON(e){const t={};void 0!==e.key&&(t.key=base64FromBytes(void 0!==e.key?e.key:new Uint8Array));void 0!==e.offset&&(t.offset=(e.offset||i.default.UZERO).toString());void 0!==e.limit&&(t.limit=(e.limit||i.default.UZERO).toString());void 0!==e.countTotal&&(t.countTotal=e.countTotal);void 0!==e.reverse&&(t.reverse=e.reverse);return t},fromPartial(e){var t,o,n;const r=Object.assign({},s);r.key=null!==(t=e.key)&&void 0!==t?t:new Uint8Array;r.offset=void 0!==e.offset&&null!==e.offset?i.default.fromValue(e.offset):i.default.UZERO;r.limit=void 0!==e.limit&&null!==e.limit?i.default.fromValue(e.limit):i.default.UZERO;r.countTotal=null!==(o=e.countTotal)&&void 0!==o&&o;r.reverse=null!==(n=e.reverse)&&void 0!==n&&n;return r}};const f={total:i.default.UZERO};a.PageResponse={encode(e,t=u.default.Writer.create()){0!==e.nextKey.length&&t.uint32(10).bytes(e.nextKey);e.total.isZero()||t.uint32(16).uint64(e.total);return t},decode(e,t){const o=e instanceof u.default.Reader?e:new u.default.Reader(e);let n=void 0===t?o.len:o.pos+t;const r=Object.assign({},f);r.nextKey=new Uint8Array;while(o.pos<n){const e=o.uint32();switch(e>>>3){case 1:r.nextKey=o.bytes();break;case 2:r.total=o.uint64();break;default:o.skipType(7&e);break}}return r},fromJSON(e){const t=Object.assign({},f);t.nextKey=void 0!==e.nextKey&&null!==e.nextKey?bytesFromBase64(e.nextKey):new Uint8Array;t.total=void 0!==e.total&&null!==e.total?i.default.fromString(e.total):i.default.UZERO;return t},toJSON(e){const t={};void 0!==e.nextKey&&(t.nextKey=base64FromBytes(void 0!==e.nextKey?e.nextKey:new Uint8Array));void 0!==e.total&&(t.total=(e.total||i.default.UZERO).toString());return t},fromPartial(e){var t;const o=Object.assign({},f);o.nextKey=null!==(t=e.nextKey)&&void 0!==t?t:new Uint8Array;o.total=void 0!==e.total&&null!==e.total?i.default.fromValue(e.total):i.default.UZERO;return o}};var d=(()=>{if("undefined"!==typeof d)return d;if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof r)return r;throw"Unable to locate global object"})();const c=d.atob||(e=>d.Buffer.from(e,"base64").toString("binary"));function bytesFromBase64(e){const t=c(e);const o=new Uint8Array(t.length);for(let e=0;e<t.length;++e)o[e]=t.charCodeAt(e);return o}const y=d.btoa||(e=>d.Buffer.from(e,"binary").toString("base64"));function base64FromBytes(e){const t=[];for(const o of e)t.push(String.fromCharCode(o));return y(t.join(""))}if(u.default.util.Long!==i.default){u.default.util.Long=i.default;u.default.configure()}const v=a.__esModule,b=a.PageResponse,m=a.PageRequest,g=a.protobufPackage;export{m as PageRequest,b as PageResponse,v as __esModule,a as default,g as protobufPackage};

