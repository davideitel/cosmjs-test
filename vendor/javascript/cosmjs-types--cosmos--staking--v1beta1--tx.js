import*as e from"long";import*as t from"protobufjs/minimal";import{e as o}from"../../../_/71e5eed8.js";import s from"../../../google/protobuf/any.js";import i from"../../base/v1beta1/coin.js";import d from"../../../google/protobuf/timestamp.js";import"../../../_/cfce0dc2.js";import"../../../_/3a1f5c86.js";import"../../../_/dbf775ab.js";var r="default"in e?e.default:e;var n="default"in t?t.default:t;var a={};var l=a&&a.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:true});a.MsgClientImpl=a.MsgUndelegateResponse=a.MsgUndelegate=a.MsgBeginRedelegateResponse=a.MsgBeginRedelegate=a.MsgDelegateResponse=a.MsgDelegate=a.MsgEditValidatorResponse=a.MsgEditValidator=a.MsgCreateValidatorResponse=a.MsgCreateValidator=a.protobufPackage=void 0;const c=l(r);const m=l(n);const u=o;const g=s;const v=i;const p=d;a.protobufPackage="cosmos.staking.v1beta1";const f={minSelfDelegation:"",delegatorAddress:"",validatorAddress:""};a.MsgCreateValidator={encode(e,t=m.default.Writer.create()){void 0!==e.description&&u.Description.encode(e.description,t.uint32(10).fork()).ldelim();void 0!==e.commission&&u.CommissionRates.encode(e.commission,t.uint32(18).fork()).ldelim();""!==e.minSelfDelegation&&t.uint32(26).string(e.minSelfDelegation);""!==e.delegatorAddress&&t.uint32(34).string(e.delegatorAddress);""!==e.validatorAddress&&t.uint32(42).string(e.validatorAddress);void 0!==e.pubkey&&g.Any.encode(e.pubkey,t.uint32(50).fork()).ldelim();void 0!==e.value&&v.Coin.encode(e.value,t.uint32(58).fork()).ldelim();return t},decode(e,t){const o=e instanceof m.default.Reader?e:new m.default.Reader(e);let s=void 0===t?o.len:o.pos+t;const i=Object.assign({},f);while(o.pos<s){const e=o.uint32();switch(e>>>3){case 1:i.description=u.Description.decode(o,o.uint32());break;case 2:i.commission=u.CommissionRates.decode(o,o.uint32());break;case 3:i.minSelfDelegation=o.string();break;case 4:i.delegatorAddress=o.string();break;case 5:i.validatorAddress=o.string();break;case 6:i.pubkey=g.Any.decode(o,o.uint32());break;case 7:i.value=v.Coin.decode(o,o.uint32());break;default:o.skipType(7&e);break}}return i},fromJSON(e){const t=Object.assign({},f);t.description=void 0!==e.description&&null!==e.description?u.Description.fromJSON(e.description):void 0;t.commission=void 0!==e.commission&&null!==e.commission?u.CommissionRates.fromJSON(e.commission):void 0;t.minSelfDelegation=void 0!==e.minSelfDelegation&&null!==e.minSelfDelegation?String(e.minSelfDelegation):"";t.delegatorAddress=void 0!==e.delegatorAddress&&null!==e.delegatorAddress?String(e.delegatorAddress):"";t.validatorAddress=void 0!==e.validatorAddress&&null!==e.validatorAddress?String(e.validatorAddress):"";t.pubkey=void 0!==e.pubkey&&null!==e.pubkey?g.Any.fromJSON(e.pubkey):void 0;t.value=void 0!==e.value&&null!==e.value?v.Coin.fromJSON(e.value):void 0;return t},toJSON(e){const t={};void 0!==e.description&&(t.description=e.description?u.Description.toJSON(e.description):void 0);void 0!==e.commission&&(t.commission=e.commission?u.CommissionRates.toJSON(e.commission):void 0);void 0!==e.minSelfDelegation&&(t.minSelfDelegation=e.minSelfDelegation);void 0!==e.delegatorAddress&&(t.delegatorAddress=e.delegatorAddress);void 0!==e.validatorAddress&&(t.validatorAddress=e.validatorAddress);void 0!==e.pubkey&&(t.pubkey=e.pubkey?g.Any.toJSON(e.pubkey):void 0);void 0!==e.value&&(t.value=e.value?v.Coin.toJSON(e.value):void 0);return t},fromPartial(e){var t,o,s;const i=Object.assign({},f);i.description=void 0!==e.description&&null!==e.description?u.Description.fromPartial(e.description):void 0;i.commission=void 0!==e.commission&&null!==e.commission?u.CommissionRates.fromPartial(e.commission):void 0;i.minSelfDelegation=null!==(t=e.minSelfDelegation)&&void 0!==t?t:"";i.delegatorAddress=null!==(o=e.delegatorAddress)&&void 0!==o?o:"";i.validatorAddress=null!==(s=e.validatorAddress)&&void 0!==s?s:"";i.pubkey=void 0!==e.pubkey&&null!==e.pubkey?g.Any.fromPartial(e.pubkey):void 0;i.value=void 0!==e.value&&null!==e.value?v.Coin.fromPartial(e.value):void 0;return i}};const A={};a.MsgCreateValidatorResponse={encode(e,t=m.default.Writer.create()){return t},decode(e,t){const o=e instanceof m.default.Reader?e:new m.default.Reader(e);let s=void 0===t?o.len:o.pos+t;const i=Object.assign({},A);while(o.pos<s){const e=o.uint32();switch(e>>>3){default:o.skipType(7&e);break}}return i},fromJSON(e){const t=Object.assign({},A);return t},toJSON(e){const t={};return t},fromPartial(e){const t=Object.assign({},A);return t}};const b={validatorAddress:"",commissionRate:"",minSelfDelegation:""};a.MsgEditValidator={encode(e,t=m.default.Writer.create()){void 0!==e.description&&u.Description.encode(e.description,t.uint32(10).fork()).ldelim();""!==e.validatorAddress&&t.uint32(18).string(e.validatorAddress);""!==e.commissionRate&&t.uint32(26).string(e.commissionRate);""!==e.minSelfDelegation&&t.uint32(34).string(e.minSelfDelegation);return t},decode(e,t){const o=e instanceof m.default.Reader?e:new m.default.Reader(e);let s=void 0===t?o.len:o.pos+t;const i=Object.assign({},b);while(o.pos<s){const e=o.uint32();switch(e>>>3){case 1:i.description=u.Description.decode(o,o.uint32());break;case 2:i.validatorAddress=o.string();break;case 3:i.commissionRate=o.string();break;case 4:i.minSelfDelegation=o.string();break;default:o.skipType(7&e);break}}return i},fromJSON(e){const t=Object.assign({},b);t.description=void 0!==e.description&&null!==e.description?u.Description.fromJSON(e.description):void 0;t.validatorAddress=void 0!==e.validatorAddress&&null!==e.validatorAddress?String(e.validatorAddress):"";t.commissionRate=void 0!==e.commissionRate&&null!==e.commissionRate?String(e.commissionRate):"";t.minSelfDelegation=void 0!==e.minSelfDelegation&&null!==e.minSelfDelegation?String(e.minSelfDelegation):"";return t},toJSON(e){const t={};void 0!==e.description&&(t.description=e.description?u.Description.toJSON(e.description):void 0);void 0!==e.validatorAddress&&(t.validatorAddress=e.validatorAddress);void 0!==e.commissionRate&&(t.commissionRate=e.commissionRate);void 0!==e.minSelfDelegation&&(t.minSelfDelegation=e.minSelfDelegation);return t},fromPartial(e){var t,o,s;const i=Object.assign({},b);i.description=void 0!==e.description&&null!==e.description?u.Description.fromPartial(e.description):void 0;i.validatorAddress=null!==(t=e.validatorAddress)&&void 0!==t?t:"";i.commissionRate=null!==(o=e.commissionRate)&&void 0!==o?o:"";i.minSelfDelegation=null!==(s=e.minSelfDelegation)&&void 0!==s?s:"";return i}};const S={};a.MsgEditValidatorResponse={encode(e,t=m.default.Writer.create()){return t},decode(e,t){const o=e instanceof m.default.Reader?e:new m.default.Reader(e);let s=void 0===t?o.len:o.pos+t;const i=Object.assign({},S);while(o.pos<s){const e=o.uint32();switch(e>>>3){default:o.skipType(7&e);break}}return i},fromJSON(e){const t=Object.assign({},S);return t},toJSON(e){const t={};return t},fromPartial(e){const t=Object.assign({},S);return t}};const k={delegatorAddress:"",validatorAddress:""};a.MsgDelegate={encode(e,t=m.default.Writer.create()){""!==e.delegatorAddress&&t.uint32(10).string(e.delegatorAddress);""!==e.validatorAddress&&t.uint32(18).string(e.validatorAddress);void 0!==e.amount&&v.Coin.encode(e.amount,t.uint32(26).fork()).ldelim();return t},decode(e,t){const o=e instanceof m.default.Reader?e:new m.default.Reader(e);let s=void 0===t?o.len:o.pos+t;const i=Object.assign({},k);while(o.pos<s){const e=o.uint32();switch(e>>>3){case 1:i.delegatorAddress=o.string();break;case 2:i.validatorAddress=o.string();break;case 3:i.amount=v.Coin.decode(o,o.uint32());break;default:o.skipType(7&e);break}}return i},fromJSON(e){const t=Object.assign({},k);t.delegatorAddress=void 0!==e.delegatorAddress&&null!==e.delegatorAddress?String(e.delegatorAddress):"";t.validatorAddress=void 0!==e.validatorAddress&&null!==e.validatorAddress?String(e.validatorAddress):"";t.amount=void 0!==e.amount&&null!==e.amount?v.Coin.fromJSON(e.amount):void 0;return t},toJSON(e){const t={};void 0!==e.delegatorAddress&&(t.delegatorAddress=e.delegatorAddress);void 0!==e.validatorAddress&&(t.validatorAddress=e.validatorAddress);void 0!==e.amount&&(t.amount=e.amount?v.Coin.toJSON(e.amount):void 0);return t},fromPartial(e){var t,o;const s=Object.assign({},k);s.delegatorAddress=null!==(t=e.delegatorAddress)&&void 0!==t?t:"";s.validatorAddress=null!==(o=e.validatorAddress)&&void 0!==o?o:"";s.amount=void 0!==e.amount&&null!==e.amount?v.Coin.fromPartial(e.amount):void 0;return s}};const R={};a.MsgDelegateResponse={encode(e,t=m.default.Writer.create()){return t},decode(e,t){const o=e instanceof m.default.Reader?e:new m.default.Reader(e);let s=void 0===t?o.len:o.pos+t;const i=Object.assign({},R);while(o.pos<s){const e=o.uint32();switch(e>>>3){default:o.skipType(7&e);break}}return i},fromJSON(e){const t=Object.assign({},R);return t},toJSON(e){const t={};return t},fromPartial(e){const t=Object.assign({},R);return t}};const O={delegatorAddress:"",validatorSrcAddress:"",validatorDstAddress:""};a.MsgBeginRedelegate={encode(e,t=m.default.Writer.create()){""!==e.delegatorAddress&&t.uint32(10).string(e.delegatorAddress);""!==e.validatorSrcAddress&&t.uint32(18).string(e.validatorSrcAddress);""!==e.validatorDstAddress&&t.uint32(26).string(e.validatorDstAddress);void 0!==e.amount&&v.Coin.encode(e.amount,t.uint32(34).fork()).ldelim();return t},decode(e,t){const o=e instanceof m.default.Reader?e:new m.default.Reader(e);let s=void 0===t?o.len:o.pos+t;const i=Object.assign({},O);while(o.pos<s){const e=o.uint32();switch(e>>>3){case 1:i.delegatorAddress=o.string();break;case 2:i.validatorSrcAddress=o.string();break;case 3:i.validatorDstAddress=o.string();break;case 4:i.amount=v.Coin.decode(o,o.uint32());break;default:o.skipType(7&e);break}}return i},fromJSON(e){const t=Object.assign({},O);t.delegatorAddress=void 0!==e.delegatorAddress&&null!==e.delegatorAddress?String(e.delegatorAddress):"";t.validatorSrcAddress=void 0!==e.validatorSrcAddress&&null!==e.validatorSrcAddress?String(e.validatorSrcAddress):"";t.validatorDstAddress=void 0!==e.validatorDstAddress&&null!==e.validatorDstAddress?String(e.validatorDstAddress):"";t.amount=void 0!==e.amount&&null!==e.amount?v.Coin.fromJSON(e.amount):void 0;return t},toJSON(e){const t={};void 0!==e.delegatorAddress&&(t.delegatorAddress=e.delegatorAddress);void 0!==e.validatorSrcAddress&&(t.validatorSrcAddress=e.validatorSrcAddress);void 0!==e.validatorDstAddress&&(t.validatorDstAddress=e.validatorDstAddress);void 0!==e.amount&&(t.amount=e.amount?v.Coin.toJSON(e.amount):void 0);return t},fromPartial(e){var t,o,s;const i=Object.assign({},O);i.delegatorAddress=null!==(t=e.delegatorAddress)&&void 0!==t?t:"";i.validatorSrcAddress=null!==(o=e.validatorSrcAddress)&&void 0!==o?o:"";i.validatorDstAddress=null!==(s=e.validatorDstAddress)&&void 0!==s?s:"";i.amount=void 0!==e.amount&&null!==e.amount?v.Coin.fromPartial(e.amount):void 0;return i}};const D={};a.MsgBeginRedelegateResponse={encode(e,t=m.default.Writer.create()){void 0!==e.completionTime&&p.Timestamp.encode(e.completionTime,t.uint32(10).fork()).ldelim();return t},decode(e,t){const o=e instanceof m.default.Reader?e:new m.default.Reader(e);let s=void 0===t?o.len:o.pos+t;const i=Object.assign({},D);while(o.pos<s){const e=o.uint32();switch(e>>>3){case 1:i.completionTime=p.Timestamp.decode(o,o.uint32());break;default:o.skipType(7&e);break}}return i},fromJSON(e){const t=Object.assign({},D);t.completionTime=void 0!==e.completionTime&&null!==e.completionTime?fromJsonTimestamp(e.completionTime):void 0;return t},toJSON(e){const t={};void 0!==e.completionTime&&(t.completionTime=fromTimestamp(e.completionTime).toISOString());return t},fromPartial(e){const t=Object.assign({},D);t.completionTime=void 0!==e.completionTime&&null!==e.completionTime?p.Timestamp.fromPartial(e.completionTime):void 0;return t}};const T={delegatorAddress:"",validatorAddress:""};a.MsgUndelegate={encode(e,t=m.default.Writer.create()){""!==e.delegatorAddress&&t.uint32(10).string(e.delegatorAddress);""!==e.validatorAddress&&t.uint32(18).string(e.validatorAddress);void 0!==e.amount&&v.Coin.encode(e.amount,t.uint32(26).fork()).ldelim();return t},decode(e,t){const o=e instanceof m.default.Reader?e:new m.default.Reader(e);let s=void 0===t?o.len:o.pos+t;const i=Object.assign({},T);while(o.pos<s){const e=o.uint32();switch(e>>>3){case 1:i.delegatorAddress=o.string();break;case 2:i.validatorAddress=o.string();break;case 3:i.amount=v.Coin.decode(o,o.uint32());break;default:o.skipType(7&e);break}}return i},fromJSON(e){const t=Object.assign({},T);t.delegatorAddress=void 0!==e.delegatorAddress&&null!==e.delegatorAddress?String(e.delegatorAddress):"";t.validatorAddress=void 0!==e.validatorAddress&&null!==e.validatorAddress?String(e.validatorAddress):"";t.amount=void 0!==e.amount&&null!==e.amount?v.Coin.fromJSON(e.amount):void 0;return t},toJSON(e){const t={};void 0!==e.delegatorAddress&&(t.delegatorAddress=e.delegatorAddress);void 0!==e.validatorAddress&&(t.validatorAddress=e.validatorAddress);void 0!==e.amount&&(t.amount=e.amount?v.Coin.toJSON(e.amount):void 0);return t},fromPartial(e){var t,o;const s=Object.assign({},T);s.delegatorAddress=null!==(t=e.delegatorAddress)&&void 0!==t?t:"";s.validatorAddress=null!==(o=e.validatorAddress)&&void 0!==o?o:"";s.amount=void 0!==e.amount&&null!==e.amount?v.Coin.fromPartial(e.amount):void 0;return s}};const M={};a.MsgUndelegateResponse={encode(e,t=m.default.Writer.create()){void 0!==e.completionTime&&p.Timestamp.encode(e.completionTime,t.uint32(10).fork()).ldelim();return t},decode(e,t){const o=e instanceof m.default.Reader?e:new m.default.Reader(e);let s=void 0===t?o.len:o.pos+t;const i=Object.assign({},M);while(o.pos<s){const e=o.uint32();switch(e>>>3){case 1:i.completionTime=p.Timestamp.decode(o,o.uint32());break;default:o.skipType(7&e);break}}return i},fromJSON(e){const t=Object.assign({},M);t.completionTime=void 0!==e.completionTime&&null!==e.completionTime?fromJsonTimestamp(e.completionTime):void 0;return t},toJSON(e){const t={};void 0!==e.completionTime&&(t.completionTime=fromTimestamp(e.completionTime).toISOString());return t},fromPartial(e){const t=Object.assign({},M);t.completionTime=void 0!==e.completionTime&&null!==e.completionTime?p.Timestamp.fromPartial(e.completionTime):void 0;return t}};class MsgClientImpl{constructor(e){this.rpc=e;this.CreateValidator=this.CreateValidator.bind(this);this.EditValidator=this.EditValidator.bind(this);this.Delegate=this.Delegate.bind(this);this.BeginRedelegate=this.BeginRedelegate.bind(this);this.Undelegate=this.Undelegate.bind(this)}CreateValidator(e){const t=a.MsgCreateValidator.encode(e).finish();const o=this.rpc.request("cosmos.staking.v1beta1.Msg","CreateValidator",t);return o.then((e=>a.MsgCreateValidatorResponse.decode(new m.default.Reader(e))))}EditValidator(e){const t=a.MsgEditValidator.encode(e).finish();const o=this.rpc.request("cosmos.staking.v1beta1.Msg","EditValidator",t);return o.then((e=>a.MsgEditValidatorResponse.decode(new m.default.Reader(e))))}Delegate(e){const t=a.MsgDelegate.encode(e).finish();const o=this.rpc.request("cosmos.staking.v1beta1.Msg","Delegate",t);return o.then((e=>a.MsgDelegateResponse.decode(new m.default.Reader(e))))}BeginRedelegate(e){const t=a.MsgBeginRedelegate.encode(e).finish();const o=this.rpc.request("cosmos.staking.v1beta1.Msg","BeginRedelegate",t);return o.then((e=>a.MsgBeginRedelegateResponse.decode(new m.default.Reader(e))))}Undelegate(e){const t=a.MsgUndelegate.encode(e).finish();const o=this.rpc.request("cosmos.staking.v1beta1.Msg","Undelegate",t);return o.then((e=>a.MsgUndelegateResponse.decode(new m.default.Reader(e))))}}a.MsgClientImpl=MsgClientImpl;function toTimestamp(e){const t=numberToLong(e.getTime()/1e3);const o=e.getTime()%1e3*1e6;return{seconds:t,nanos:o}}function fromTimestamp(e){let t=1e3*e.seconds.toNumber();t+=e.nanos/1e6;return new Date(t)}function fromJsonTimestamp(e){return e instanceof Date?toTimestamp(e):"string"===typeof e?toTimestamp(new Date(e)):p.Timestamp.fromJSON(e)}function numberToLong(e){return c.default.fromNumber(e)}if(m.default.util.Long!==c.default){m.default.util.Long=c.default;m.default.configure()}const h=a.__esModule,C=a.MsgUndelegateResponse,J=a.MsgUndelegate,j=a.MsgBeginRedelegateResponse,N=a.MsgBeginRedelegate,w=a.MsgDelegateResponse,y=a.MsgDelegate,P=a.MsgEditValidatorResponse,V=a.MsgEditValidator,B=a.MsgCreateValidatorResponse,E=a.MsgCreateValidator,U=a.protobufPackage;const _=a.MsgClientImpl;export{N as MsgBeginRedelegate,j as MsgBeginRedelegateResponse,_ as MsgClientImpl,E as MsgCreateValidator,B as MsgCreateValidatorResponse,y as MsgDelegate,w as MsgDelegateResponse,V as MsgEditValidator,P as MsgEditValidatorResponse,J as MsgUndelegate,C as MsgUndelegateResponse,h as __esModule,a as default,U as protobufPackage};

