import*as e from"long";import*as o from"protobufjs/minimal";import t from"../../../google/protobuf/any.js";var r="default"in e?e.default:e;var l="default"in o?o.default:o;var u={};var s=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(u,"__esModule",{value:true});u.LegacyAminoPubKey=u.protobufPackage=void 0;const a=s(r);const i=s(l);const n=t;u.protobufPackage="cosmos.crypto.multisig";const d={threshold:0};u.LegacyAminoPubKey={encode(e,o=i.default.Writer.create()){0!==e.threshold&&o.uint32(8).uint32(e.threshold);for(const t of e.publicKeys)n.Any.encode(t,o.uint32(18).fork()).ldelim();return o},decode(e,o){const t=e instanceof i.default.Reader?e:new i.default.Reader(e);let r=void 0===o?t.len:t.pos+o;const l=Object.assign({},d);l.publicKeys=[];while(t.pos<r){const e=t.uint32();switch(e>>>3){case 1:l.threshold=t.uint32();break;case 2:l.publicKeys.push(n.Any.decode(t,t.uint32()));break;default:t.skipType(7&e);break}}return l},fromJSON(e){var o;const t=Object.assign({},d);t.threshold=void 0!==e.threshold&&null!==e.threshold?Number(e.threshold):0;t.publicKeys=(null!==(o=e.publicKeys)&&void 0!==o?o:[]).map((e=>n.Any.fromJSON(e)));return t},toJSON(e){const o={};void 0!==e.threshold&&(o.threshold=e.threshold);e.publicKeys?o.publicKeys=e.publicKeys.map((e=>e?n.Any.toJSON(e):void 0)):o.publicKeys=[];return o},fromPartial(e){var o,t;const r=Object.assign({},d);r.threshold=null!==(o=e.threshold)&&void 0!==o?o:0;r.publicKeys=(null===(t=e.publicKeys)||void 0===t?void 0:t.map((e=>n.Any.fromPartial(e))))||[];return r}};if(i.default.util.Long!==a.default){i.default.util.Long=a.default;i.default.configure()}const c=u.__esModule,f=u.LegacyAminoPubKey,p=u.protobufPackage;export{f as LegacyAminoPubKey,c as __esModule,u as default,p as protobufPackage};
