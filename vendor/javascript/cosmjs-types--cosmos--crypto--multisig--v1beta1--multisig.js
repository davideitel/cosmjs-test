import*as e from"long";import*as t from"protobufjs/minimal";var r="default"in e?e.default:e;var o="default"in t?t.default:t;var n="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var s={};var a=s&&s.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:true});s.CompactBitArray=s.MultiSignature=s.protobufPackage=void 0;const i=a(r);const u=a(o);s.protobufPackage="cosmos.crypto.multisig.v1beta1";const l={};s.MultiSignature={encode(e,t=u.default.Writer.create()){for(const r of e.signatures)t.uint32(10).bytes(r);return t},decode(e,t){const r=e instanceof u.default.Reader?e:new u.default.Reader(e);let o=void 0===t?r.len:r.pos+t;const n=Object.assign({},l);n.signatures=[];while(r.pos<o){const e=r.uint32();switch(e>>>3){case 1:n.signatures.push(r.bytes());break;default:r.skipType(7&e);break}}return n},fromJSON(e){var t;const r=Object.assign({},l);r.signatures=(null!==(t=e.signatures)&&void 0!==t?t:[]).map((e=>bytesFromBase64(e)));return r},toJSON(e){const t={};e.signatures?t.signatures=e.signatures.map((e=>base64FromBytes(void 0!==e?e:new Uint8Array))):t.signatures=[];return t},fromPartial(e){var t;const r=Object.assign({},l);r.signatures=(null===(t=e.signatures)||void 0===t?void 0:t.map((e=>e)))||[];return r}};const d={extraBitsStored:0};s.CompactBitArray={encode(e,t=u.default.Writer.create()){0!==e.extraBitsStored&&t.uint32(8).uint32(e.extraBitsStored);0!==e.elems.length&&t.uint32(18).bytes(e.elems);return t},decode(e,t){const r=e instanceof u.default.Reader?e:new u.default.Reader(e);let o=void 0===t?r.len:r.pos+t;const n=Object.assign({},d);n.elems=new Uint8Array;while(r.pos<o){const e=r.uint32();switch(e>>>3){case 1:n.extraBitsStored=r.uint32();break;case 2:n.elems=r.bytes();break;default:r.skipType(7&e);break}}return n},fromJSON(e){const t=Object.assign({},d);t.extraBitsStored=void 0!==e.extraBitsStored&&null!==e.extraBitsStored?Number(e.extraBitsStored):0;t.elems=void 0!==e.elems&&null!==e.elems?bytesFromBase64(e.elems):new Uint8Array;return t},toJSON(e){const t={};void 0!==e.extraBitsStored&&(t.extraBitsStored=e.extraBitsStored);void 0!==e.elems&&(t.elems=base64FromBytes(void 0!==e.elems?e.elems:new Uint8Array));return t},fromPartial(e){var t,r;const o=Object.assign({},d);o.extraBitsStored=null!==(t=e.extraBitsStored)&&void 0!==t?t:0;o.elems=null!==(r=e.elems)&&void 0!==r?r:new Uint8Array;return o}};var f=(()=>{if("undefined"!==typeof f)return f;if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n)return n;throw"Unable to locate global object"})();const c=f.atob||(e=>f.Buffer.from(e,"base64").toString("binary"));function bytesFromBase64(e){const t=c(e);const r=new Uint8Array(t.length);for(let e=0;e<t.length;++e)r[e]=t.charCodeAt(e);return r}const m=f.btoa||(e=>f.Buffer.from(e,"binary").toString("base64"));function base64FromBytes(e){const t=[];for(const r of e)t.push(String.fromCharCode(r));return m(t.join(""))}if(u.default.util.Long!==i.default){u.default.util.Long=i.default;u.default.configure()}const b=s.__esModule,g=s.CompactBitArray,p=s.MultiSignature,y=s.protobufPackage;export{g as CompactBitArray,p as MultiSignature,b as __esModule,s as default,y as protobufPackage};
