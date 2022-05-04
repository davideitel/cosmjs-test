import*as e from"long";import*as t from"protobufjs/minimal";import r from"../../../../google/protobuf/any.js";import i from"../../../crypto/multisig/v1beta1/multisig.js";var a="default"in e?e.default:e;var n="default"in t?t.default:t;var o="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var s={};var u=s&&s.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:true});s.SignatureDescriptor_Data_Multi=s.SignatureDescriptor_Data_Single=s.SignatureDescriptor_Data=s.SignatureDescriptor=s.SignatureDescriptors=s.signModeToJSON=s.signModeFromJSON=s.SignMode=s.protobufPackage=void 0;const c=u(a);const d=u(n);const l=r;const g=i;s.protobufPackage="cosmos.tx.signing.v1beta1";var S;(function(e){e[e.SIGN_MODE_UNSPECIFIED=0]="SIGN_MODE_UNSPECIFIED";e[e.SIGN_MODE_DIRECT=1]="SIGN_MODE_DIRECT";e[e.SIGN_MODE_TEXTUAL=2]="SIGN_MODE_TEXTUAL";e[e.SIGN_MODE_LEGACY_AMINO_JSON=127]="SIGN_MODE_LEGACY_AMINO_JSON";e[e.UNRECOGNIZED=-1]="UNRECOGNIZED"})(S=s.SignMode||(s.SignMode={}));function signModeFromJSON(e){switch(e){case 0:case"SIGN_MODE_UNSPECIFIED":return S.SIGN_MODE_UNSPECIFIED;case 1:case"SIGN_MODE_DIRECT":return S.SIGN_MODE_DIRECT;case 2:case"SIGN_MODE_TEXTUAL":return S.SIGN_MODE_TEXTUAL;case 127:case"SIGN_MODE_LEGACY_AMINO_JSON":return S.SIGN_MODE_LEGACY_AMINO_JSON;case-1:case"UNRECOGNIZED":default:return S.UNRECOGNIZED}}s.signModeFromJSON=signModeFromJSON;function signModeToJSON(e){switch(e){case S.SIGN_MODE_UNSPECIFIED:return"SIGN_MODE_UNSPECIFIED";case S.SIGN_MODE_DIRECT:return"SIGN_MODE_DIRECT";case S.SIGN_MODE_TEXTUAL:return"SIGN_MODE_TEXTUAL";case S.SIGN_MODE_LEGACY_AMINO_JSON:return"SIGN_MODE_LEGACY_AMINO_JSON";default:return"UNKNOWN"}}s.signModeToJSON=signModeToJSON;const f={};s.SignatureDescriptors={encode(e,t=d.default.Writer.create()){for(const r of e.signatures)s.SignatureDescriptor.encode(r,t.uint32(10).fork()).ldelim();return t},decode(e,t){const r=e instanceof d.default.Reader?e:new d.default.Reader(e);let i=void 0===t?r.len:r.pos+t;const a=Object.assign({},f);a.signatures=[];while(r.pos<i){const e=r.uint32();switch(e>>>3){case 1:a.signatures.push(s.SignatureDescriptor.decode(r,r.uint32()));break;default:r.skipType(7&e);break}}return a},fromJSON(e){var t;const r=Object.assign({},f);r.signatures=(null!==(t=e.signatures)&&void 0!==t?t:[]).map((e=>s.SignatureDescriptor.fromJSON(e)));return r},toJSON(e){const t={};e.signatures?t.signatures=e.signatures.map((e=>e?s.SignatureDescriptor.toJSON(e):void 0)):t.signatures=[];return t},fromPartial(e){var t;const r=Object.assign({},f);r.signatures=(null===(t=e.signatures)||void 0===t?void 0:t.map((e=>s.SignatureDescriptor.fromPartial(e))))||[];return r}};const _={sequence:c.default.UZERO};s.SignatureDescriptor={encode(e,t=d.default.Writer.create()){void 0!==e.publicKey&&l.Any.encode(e.publicKey,t.uint32(10).fork()).ldelim();void 0!==e.data&&s.SignatureDescriptor_Data.encode(e.data,t.uint32(18).fork()).ldelim();e.sequence.isZero()||t.uint32(24).uint64(e.sequence);return t},decode(e,t){const r=e instanceof d.default.Reader?e:new d.default.Reader(e);let i=void 0===t?r.len:r.pos+t;const a=Object.assign({},_);while(r.pos<i){const e=r.uint32();switch(e>>>3){case 1:a.publicKey=l.Any.decode(r,r.uint32());break;case 2:a.data=s.SignatureDescriptor_Data.decode(r,r.uint32());break;case 3:a.sequence=r.uint64();break;default:r.skipType(7&e);break}}return a},fromJSON(e){const t=Object.assign({},_);t.publicKey=void 0!==e.publicKey&&null!==e.publicKey?l.Any.fromJSON(e.publicKey):void 0;t.data=void 0!==e.data&&null!==e.data?s.SignatureDescriptor_Data.fromJSON(e.data):void 0;t.sequence=void 0!==e.sequence&&null!==e.sequence?c.default.fromString(e.sequence):c.default.UZERO;return t},toJSON(e){const t={};void 0!==e.publicKey&&(t.publicKey=e.publicKey?l.Any.toJSON(e.publicKey):void 0);void 0!==e.data&&(t.data=e.data?s.SignatureDescriptor_Data.toJSON(e.data):void 0);void 0!==e.sequence&&(t.sequence=(e.sequence||c.default.UZERO).toString());return t},fromPartial(e){const t=Object.assign({},_);t.publicKey=void 0!==e.publicKey&&null!==e.publicKey?l.Any.fromPartial(e.publicKey):void 0;t.data=void 0!==e.data&&null!==e.data?s.SignatureDescriptor_Data.fromPartial(e.data):void 0;t.sequence=void 0!==e.sequence&&null!==e.sequence?c.default.fromValue(e.sequence):c.default.UZERO;return t}};const D={};s.SignatureDescriptor_Data={encode(e,t=d.default.Writer.create()){void 0!==e.single&&s.SignatureDescriptor_Data_Single.encode(e.single,t.uint32(10).fork()).ldelim();void 0!==e.multi&&s.SignatureDescriptor_Data_Multi.encode(e.multi,t.uint32(18).fork()).ldelim();return t},decode(e,t){const r=e instanceof d.default.Reader?e:new d.default.Reader(e);let i=void 0===t?r.len:r.pos+t;const a=Object.assign({},D);while(r.pos<i){const e=r.uint32();switch(e>>>3){case 1:a.single=s.SignatureDescriptor_Data_Single.decode(r,r.uint32());break;case 2:a.multi=s.SignatureDescriptor_Data_Multi.decode(r,r.uint32());break;default:r.skipType(7&e);break}}return a},fromJSON(e){const t=Object.assign({},D);t.single=void 0!==e.single&&null!==e.single?s.SignatureDescriptor_Data_Single.fromJSON(e.single):void 0;t.multi=void 0!==e.multi&&null!==e.multi?s.SignatureDescriptor_Data_Multi.fromJSON(e.multi):void 0;return t},toJSON(e){const t={};void 0!==e.single&&(t.single=e.single?s.SignatureDescriptor_Data_Single.toJSON(e.single):void 0);void 0!==e.multi&&(t.multi=e.multi?s.SignatureDescriptor_Data_Multi.toJSON(e.multi):void 0);return t},fromPartial(e){const t=Object.assign({},D);t.single=void 0!==e.single&&null!==e.single?s.SignatureDescriptor_Data_Single.fromPartial(e.single):void 0;t.multi=void 0!==e.multi&&null!==e.multi?s.SignatureDescriptor_Data_Multi.fromPartial(e.multi):void 0;return t}};const p={mode:0};s.SignatureDescriptor_Data_Single={encode(e,t=d.default.Writer.create()){0!==e.mode&&t.uint32(8).int32(e.mode);0!==e.signature.length&&t.uint32(18).bytes(e.signature);return t},decode(e,t){const r=e instanceof d.default.Reader?e:new d.default.Reader(e);let i=void 0===t?r.len:r.pos+t;const a=Object.assign({},p);a.signature=new Uint8Array;while(r.pos<i){const e=r.uint32();switch(e>>>3){case 1:a.mode=r.int32();break;case 2:a.signature=r.bytes();break;default:r.skipType(7&e);break}}return a},fromJSON(e){const t=Object.assign({},p);t.mode=void 0!==e.mode&&null!==e.mode?signModeFromJSON(e.mode):0;t.signature=void 0!==e.signature&&null!==e.signature?bytesFromBase64(e.signature):new Uint8Array;return t},toJSON(e){const t={};void 0!==e.mode&&(t.mode=signModeToJSON(e.mode));void 0!==e.signature&&(t.signature=base64FromBytes(void 0!==e.signature?e.signature:new Uint8Array));return t},fromPartial(e){var t,r;const i=Object.assign({},p);i.mode=null!==(t=e.mode)&&void 0!==t?t:0;i.signature=null!==(r=e.signature)&&void 0!==r?r:new Uint8Array;return i}};const m={};s.SignatureDescriptor_Data_Multi={encode(e,t=d.default.Writer.create()){void 0!==e.bitarray&&g.CompactBitArray.encode(e.bitarray,t.uint32(10).fork()).ldelim();for(const r of e.signatures)s.SignatureDescriptor_Data.encode(r,t.uint32(18).fork()).ldelim();return t},decode(e,t){const r=e instanceof d.default.Reader?e:new d.default.Reader(e);let i=void 0===t?r.len:r.pos+t;const a=Object.assign({},m);a.signatures=[];while(r.pos<i){const e=r.uint32();switch(e>>>3){case 1:a.bitarray=g.CompactBitArray.decode(r,r.uint32());break;case 2:a.signatures.push(s.SignatureDescriptor_Data.decode(r,r.uint32()));break;default:r.skipType(7&e);break}}return a},fromJSON(e){var t;const r=Object.assign({},m);r.bitarray=void 0!==e.bitarray&&null!==e.bitarray?g.CompactBitArray.fromJSON(e.bitarray):void 0;r.signatures=(null!==(t=e.signatures)&&void 0!==t?t:[]).map((e=>s.SignatureDescriptor_Data.fromJSON(e)));return r},toJSON(e){const t={};void 0!==e.bitarray&&(t.bitarray=e.bitarray?g.CompactBitArray.toJSON(e.bitarray):void 0);e.signatures?t.signatures=e.signatures.map((e=>e?s.SignatureDescriptor_Data.toJSON(e):void 0)):t.signatures=[];return t},fromPartial(e){var t;const r=Object.assign({},m);r.bitarray=void 0!==e.bitarray&&null!==e.bitarray?g.CompactBitArray.fromPartial(e.bitarray):void 0;r.signatures=(null===(t=e.signatures)||void 0===t?void 0:t.map((e=>s.SignatureDescriptor_Data.fromPartial(e))))||[];return r}};var O=(()=>{if("undefined"!==typeof O)return O;if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof o)return o;throw"Unable to locate global object"})();const N=O.atob||(e=>O.Buffer.from(e,"base64").toString("binary"));function bytesFromBase64(e){const t=N(e);const r=new Uint8Array(t.length);for(let e=0;e<t.length;++e)r[e]=t.charCodeAt(e);return r}const b=O.btoa||(e=>O.Buffer.from(e,"binary").toString("base64"));function base64FromBytes(e){const t=[];for(const r of e)t.push(String.fromCharCode(r));return b(t.join(""))}if(d.default.util.Long!==c.default){d.default.util.Long=c.default;d.default.configure()}const v=s.__esModule,y=s.SignatureDescriptor_Data_Multi,E=s.SignatureDescriptor_Data_Single,M=s.SignatureDescriptor_Data,I=s.SignatureDescriptor,J=s.SignatureDescriptors,A=s.protobufPackage;const G=s.signModeToJSON,T=s.signModeFromJSON,k=s.SignMode;export{k as SignMode,I as SignatureDescriptor,M as SignatureDescriptor_Data,y as SignatureDescriptor_Data_Multi,E as SignatureDescriptor_Data_Single,J as SignatureDescriptors,v as __esModule,s as default,A as protobufPackage,T as signModeFromJSON,G as signModeToJSON};
