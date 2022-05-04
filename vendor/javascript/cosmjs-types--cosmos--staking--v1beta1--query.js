import*as e from"long";import*as o from"protobufjs/minimal";import t from"../../base/query/v1beta1/pagination.js";import{e as a}from"../../../_/71e5eed8.js";import"../../../_/cfce0dc2.js";import"../../../google/protobuf/timestamp.js";import"../../../_/3a1f5c86.js";import"../../../google/protobuf/any.js";import"../../../_/dbf775ab.js";import"../../base/v1beta1/coin.js";var n="default"in e?e.default:e;var i="default"in o?o.default:o;var r={};var d=r&&r.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:true});r.QueryClientImpl=r.QueryParamsResponse=r.QueryParamsRequest=r.QueryPoolResponse=r.QueryPoolRequest=r.QueryHistoricalInfoResponse=r.QueryHistoricalInfoRequest=r.QueryDelegatorValidatorResponse=r.QueryDelegatorValidatorRequest=r.QueryDelegatorValidatorsResponse=r.QueryDelegatorValidatorsRequest=r.QueryRedelegationsResponse=r.QueryRedelegationsRequest=r.QueryDelegatorUnbondingDelegationsResponse=r.QueryDelegatorUnbondingDelegationsRequest=r.QueryDelegatorDelegationsResponse=r.QueryDelegatorDelegationsRequest=r.QueryUnbondingDelegationResponse=r.QueryUnbondingDelegationRequest=r.QueryDelegationResponse=r.QueryDelegationRequest=r.QueryValidatorUnbondingDelegationsResponse=r.QueryValidatorUnbondingDelegationsRequest=r.QueryValidatorDelegationsResponse=r.QueryValidatorDelegationsRequest=r.QueryValidatorResponse=r.QueryValidatorRequest=r.QueryValidatorsResponse=r.QueryValidatorsRequest=r.protobufPackage=void 0;const s=d(n);const l=d(i);const g=t;const u=a;r.protobufPackage="cosmos.staking.v1beta1";const c={status:""};r.QueryValidatorsRequest={encode(e,o=l.default.Writer.create()){""!==e.status&&o.uint32(10).string(e.status);void 0!==e.pagination&&g.PageRequest.encode(e.pagination,o.uint32(18).fork()).ldelim();return o},decode(e,o){const t=e instanceof l.default.Reader?e:new l.default.Reader(e);let a=void 0===o?t.len:t.pos+o;const n=Object.assign({},c);while(t.pos<a){const e=t.uint32();switch(e>>>3){case 1:n.status=t.string();break;case 2:n.pagination=g.PageRequest.decode(t,t.uint32());break;default:t.skipType(7&e);break}}return n},fromJSON(e){const o=Object.assign({},c);o.status=void 0!==e.status&&null!==e.status?String(e.status):"";o.pagination=void 0!==e.pagination&&null!==e.pagination?g.PageRequest.fromJSON(e.pagination):void 0;return o},toJSON(e){const o={};void 0!==e.status&&(o.status=e.status);void 0!==e.pagination&&(o.pagination=e.pagination?g.PageRequest.toJSON(e.pagination):void 0);return o},fromPartial(e){var o;const t=Object.assign({},c);t.status=null!==(o=e.status)&&void 0!==o?o:"";t.pagination=void 0!==e.pagination&&null!==e.pagination?g.PageRequest.fromPartial(e.pagination):void 0;return t}};const p={};r.QueryValidatorsResponse={encode(e,o=l.default.Writer.create()){for(const t of e.validators)u.Validator.encode(t,o.uint32(10).fork()).ldelim();void 0!==e.pagination&&g.PageResponse.encode(e.pagination,o.uint32(18).fork()).ldelim();return o},decode(e,o){const t=e instanceof l.default.Reader?e:new l.default.Reader(e);let a=void 0===o?t.len:t.pos+o;const n=Object.assign({},p);n.validators=[];while(t.pos<a){const e=t.uint32();switch(e>>>3){case 1:n.validators.push(u.Validator.decode(t,t.uint32()));break;case 2:n.pagination=g.PageResponse.decode(t,t.uint32());break;default:t.skipType(7&e);break}}return n},fromJSON(e){var o;const t=Object.assign({},p);t.validators=(null!==(o=e.validators)&&void 0!==o?o:[]).map((e=>u.Validator.fromJSON(e)));t.pagination=void 0!==e.pagination&&null!==e.pagination?g.PageResponse.fromJSON(e.pagination):void 0;return t},toJSON(e){const o={};e.validators?o.validators=e.validators.map((e=>e?u.Validator.toJSON(e):void 0)):o.validators=[];void 0!==e.pagination&&(o.pagination=e.pagination?g.PageResponse.toJSON(e.pagination):void 0);return o},fromPartial(e){var o;const t=Object.assign({},p);t.validators=(null===(o=e.validators)||void 0===o?void 0:o.map((e=>u.Validator.fromPartial(e))))||[];t.pagination=void 0!==e.pagination&&null!==e.pagination?g.PageResponse.fromPartial(e.pagination):void 0;return t}};const v={validatorAddr:""};r.QueryValidatorRequest={encode(e,o=l.default.Writer.create()){""!==e.validatorAddr&&o.uint32(10).string(e.validatorAddr);return o},decode(e,o){const t=e instanceof l.default.Reader?e:new l.default.Reader(e);let a=void 0===o?t.len:t.pos+o;const n=Object.assign({},v);while(t.pos<a){const e=t.uint32();switch(e>>>3){case 1:n.validatorAddr=t.string();break;default:t.skipType(7&e);break}}return n},fromJSON(e){const o=Object.assign({},v);o.validatorAddr=void 0!==e.validatorAddr&&null!==e.validatorAddr?String(e.validatorAddr):"";return o},toJSON(e){const o={};void 0!==e.validatorAddr&&(o.validatorAddr=e.validatorAddr);return o},fromPartial(e){var o;const t=Object.assign({},v);t.validatorAddr=null!==(o=e.validatorAddr)&&void 0!==o?o:"";return t}};const f={};r.QueryValidatorResponse={encode(e,o=l.default.Writer.create()){void 0!==e.validator&&u.Validator.encode(e.validator,o.uint32(10).fork()).ldelim();return o},decode(e,o){const t=e instanceof l.default.Reader?e:new l.default.Reader(e);let a=void 0===o?t.len:t.pos+o;const n=Object.assign({},f);while(t.pos<a){const e=t.uint32();switch(e>>>3){case 1:n.validator=u.Validator.decode(t,t.uint32());break;default:t.skipType(7&e);break}}return n},fromJSON(e){const o=Object.assign({},f);o.validator=void 0!==e.validator&&null!==e.validator?u.Validator.fromJSON(e.validator):void 0;return o},toJSON(e){const o={};void 0!==e.validator&&(o.validator=e.validator?u.Validator.toJSON(e.validator):void 0);return o},fromPartial(e){const o=Object.assign({},f);o.validator=void 0!==e.validator&&null!==e.validator?u.Validator.fromPartial(e.validator):void 0;return o}};const R={validatorAddr:""};r.QueryValidatorDelegationsRequest={encode(e,o=l.default.Writer.create()){""!==e.validatorAddr&&o.uint32(10).string(e.validatorAddr);void 0!==e.pagination&&g.PageRequest.encode(e.pagination,o.uint32(18).fork()).ldelim();return o},decode(e,o){const t=e instanceof l.default.Reader?e:new l.default.Reader(e);let a=void 0===o?t.len:t.pos+o;const n=Object.assign({},R);while(t.pos<a){const e=t.uint32();switch(e>>>3){case 1:n.validatorAddr=t.string();break;case 2:n.pagination=g.PageRequest.decode(t,t.uint32());break;default:t.skipType(7&e);break}}return n},fromJSON(e){const o=Object.assign({},R);o.validatorAddr=void 0!==e.validatorAddr&&null!==e.validatorAddr?String(e.validatorAddr):"";o.pagination=void 0!==e.pagination&&null!==e.pagination?g.PageRequest.fromJSON(e.pagination):void 0;return o},toJSON(e){const o={};void 0!==e.validatorAddr&&(o.validatorAddr=e.validatorAddr);void 0!==e.pagination&&(o.pagination=e.pagination?g.PageRequest.toJSON(e.pagination):void 0);return o},fromPartial(e){var o;const t=Object.assign({},R);t.validatorAddr=null!==(o=e.validatorAddr)&&void 0!==o?o:"";t.pagination=void 0!==e.pagination&&null!==e.pagination?g.PageRequest.fromPartial(e.pagination):void 0;return t}};const b={};r.QueryValidatorDelegationsResponse={encode(e,o=l.default.Writer.create()){for(const t of e.delegationResponses)u.DelegationResponse.encode(t,o.uint32(10).fork()).ldelim();void 0!==e.pagination&&g.PageResponse.encode(e.pagination,o.uint32(18).fork()).ldelim();return o},decode(e,o){const t=e instanceof l.default.Reader?e:new l.default.Reader(e);let a=void 0===o?t.len:t.pos+o;const n=Object.assign({},b);n.delegationResponses=[];while(t.pos<a){const e=t.uint32();switch(e>>>3){case 1:n.delegationResponses.push(u.DelegationResponse.decode(t,t.uint32()));break;case 2:n.pagination=g.PageResponse.decode(t,t.uint32());break;default:t.skipType(7&e);break}}return n},fromJSON(e){var o;const t=Object.assign({},b);t.delegationResponses=(null!==(o=e.delegationResponses)&&void 0!==o?o:[]).map((e=>u.DelegationResponse.fromJSON(e)));t.pagination=void 0!==e.pagination&&null!==e.pagination?g.PageResponse.fromJSON(e.pagination):void 0;return t},toJSON(e){const o={};e.delegationResponses?o.delegationResponses=e.delegationResponses.map((e=>e?u.DelegationResponse.toJSON(e):void 0)):o.delegationResponses=[];void 0!==e.pagination&&(o.pagination=e.pagination?g.PageResponse.toJSON(e.pagination):void 0);return o},fromPartial(e){var o;const t=Object.assign({},b);t.delegationResponses=(null===(o=e.delegationResponses)||void 0===o?void 0:o.map((e=>u.DelegationResponse.fromPartial(e))))||[];t.pagination=void 0!==e.pagination&&null!==e.pagination?g.PageResponse.fromPartial(e.pagination):void 0;return t}};const m={validatorAddr:""};r.QueryValidatorUnbondingDelegationsRequest={encode(e,o=l.default.Writer.create()){""!==e.validatorAddr&&o.uint32(10).string(e.validatorAddr);void 0!==e.pagination&&g.PageRequest.encode(e.pagination,o.uint32(18).fork()).ldelim();return o},decode(e,o){const t=e instanceof l.default.Reader?e:new l.default.Reader(e);let a=void 0===o?t.len:t.pos+o;const n=Object.assign({},m);while(t.pos<a){const e=t.uint32();switch(e>>>3){case 1:n.validatorAddr=t.string();break;case 2:n.pagination=g.PageRequest.decode(t,t.uint32());break;default:t.skipType(7&e);break}}return n},fromJSON(e){const o=Object.assign({},m);o.validatorAddr=void 0!==e.validatorAddr&&null!==e.validatorAddr?String(e.validatorAddr):"";o.pagination=void 0!==e.pagination&&null!==e.pagination?g.PageRequest.fromJSON(e.pagination):void 0;return o},toJSON(e){const o={};void 0!==e.validatorAddr&&(o.validatorAddr=e.validatorAddr);void 0!==e.pagination&&(o.pagination=e.pagination?g.PageRequest.toJSON(e.pagination):void 0);return o},fromPartial(e){var o;const t=Object.assign({},m);t.validatorAddr=null!==(o=e.validatorAddr)&&void 0!==o?o:"";t.pagination=void 0!==e.pagination&&null!==e.pagination?g.PageRequest.fromPartial(e.pagination):void 0;return t}};const O={};r.QueryValidatorUnbondingDelegationsResponse={encode(e,o=l.default.Writer.create()){for(const t of e.unbondingResponses)u.UnbondingDelegation.encode(t,o.uint32(10).fork()).ldelim();void 0!==e.pagination&&g.PageResponse.encode(e.pagination,o.uint32(18).fork()).ldelim();return o},decode(e,o){const t=e instanceof l.default.Reader?e:new l.default.Reader(e);let a=void 0===o?t.len:t.pos+o;const n=Object.assign({},O);n.unbondingResponses=[];while(t.pos<a){const e=t.uint32();switch(e>>>3){case 1:n.unbondingResponses.push(u.UnbondingDelegation.decode(t,t.uint32()));break;case 2:n.pagination=g.PageResponse.decode(t,t.uint32());break;default:t.skipType(7&e);break}}return n},fromJSON(e){var o;const t=Object.assign({},O);t.unbondingResponses=(null!==(o=e.unbondingResponses)&&void 0!==o?o:[]).map((e=>u.UnbondingDelegation.fromJSON(e)));t.pagination=void 0!==e.pagination&&null!==e.pagination?g.PageResponse.fromJSON(e.pagination):void 0;return t},toJSON(e){const o={};e.unbondingResponses?o.unbondingResponses=e.unbondingResponses.map((e=>e?u.UnbondingDelegation.toJSON(e):void 0)):o.unbondingResponses=[];void 0!==e.pagination&&(o.pagination=e.pagination?g.PageResponse.toJSON(e.pagination):void 0);return o},fromPartial(e){var o;const t=Object.assign({},O);t.unbondingResponses=(null===(o=e.unbondingResponses)||void 0===o?void 0:o.map((e=>u.UnbondingDelegation.fromPartial(e))))||[];t.pagination=void 0!==e.pagination&&null!==e.pagination?g.PageResponse.fromPartial(e.pagination):void 0;return t}};const A={delegatorAddr:"",validatorAddr:""};r.QueryDelegationRequest={encode(e,o=l.default.Writer.create()){""!==e.delegatorAddr&&o.uint32(10).string(e.delegatorAddr);""!==e.validatorAddr&&o.uint32(18).string(e.validatorAddr);return o},decode(e,o){const t=e instanceof l.default.Reader?e:new l.default.Reader(e);let a=void 0===o?t.len:t.pos+o;const n=Object.assign({},A);while(t.pos<a){const e=t.uint32();switch(e>>>3){case 1:n.delegatorAddr=t.string();break;case 2:n.validatorAddr=t.string();break;default:t.skipType(7&e);break}}return n},fromJSON(e){const o=Object.assign({},A);o.delegatorAddr=void 0!==e.delegatorAddr&&null!==e.delegatorAddr?String(e.delegatorAddr):"";o.validatorAddr=void 0!==e.validatorAddr&&null!==e.validatorAddr?String(e.validatorAddr):"";return o},toJSON(e){const o={};void 0!==e.delegatorAddr&&(o.delegatorAddr=e.delegatorAddr);void 0!==e.validatorAddr&&(o.validatorAddr=e.validatorAddr);return o},fromPartial(e){var o,t;const a=Object.assign({},A);a.delegatorAddr=null!==(o=e.delegatorAddr)&&void 0!==o?o:"";a.validatorAddr=null!==(t=e.validatorAddr)&&void 0!==t?t:"";return a}};const h={};r.QueryDelegationResponse={encode(e,o=l.default.Writer.create()){void 0!==e.delegationResponse&&u.DelegationResponse.encode(e.delegationResponse,o.uint32(10).fork()).ldelim();return o},decode(e,o){const t=e instanceof l.default.Reader?e:new l.default.Reader(e);let a=void 0===o?t.len:t.pos+o;const n=Object.assign({},h);while(t.pos<a){const e=t.uint32();switch(e>>>3){case 1:n.delegationResponse=u.DelegationResponse.decode(t,t.uint32());break;default:t.skipType(7&e);break}}return n},fromJSON(e){const o=Object.assign({},h);o.delegationResponse=void 0!==e.delegationResponse&&null!==e.delegationResponse?u.DelegationResponse.fromJSON(e.delegationResponse):void 0;return o},toJSON(e){const o={};void 0!==e.delegationResponse&&(o.delegationResponse=e.delegationResponse?u.DelegationResponse.toJSON(e.delegationResponse):void 0);return o},fromPartial(e){const o=Object.assign({},h);o.delegationResponse=void 0!==e.delegationResponse&&null!==e.delegationResponse?u.DelegationResponse.fromPartial(e.delegationResponse):void 0;return o}};const P={delegatorAddr:"",validatorAddr:""};r.QueryUnbondingDelegationRequest={encode(e,o=l.default.Writer.create()){""!==e.delegatorAddr&&o.uint32(10).string(e.delegatorAddr);""!==e.validatorAddr&&o.uint32(18).string(e.validatorAddr);return o},decode(e,o){const t=e instanceof l.default.Reader?e:new l.default.Reader(e);let a=void 0===o?t.len:t.pos+o;const n=Object.assign({},P);while(t.pos<a){const e=t.uint32();switch(e>>>3){case 1:n.delegatorAddr=t.string();break;case 2:n.validatorAddr=t.string();break;default:t.skipType(7&e);break}}return n},fromJSON(e){const o=Object.assign({},P);o.delegatorAddr=void 0!==e.delegatorAddr&&null!==e.delegatorAddr?String(e.delegatorAddr):"";o.validatorAddr=void 0!==e.validatorAddr&&null!==e.validatorAddr?String(e.validatorAddr):"";return o},toJSON(e){const o={};void 0!==e.delegatorAddr&&(o.delegatorAddr=e.delegatorAddr);void 0!==e.validatorAddr&&(o.validatorAddr=e.validatorAddr);return o},fromPartial(e){var o,t;const a=Object.assign({},P);a.delegatorAddr=null!==(o=e.delegatorAddr)&&void 0!==o?o:"";a.validatorAddr=null!==(t=e.validatorAddr)&&void 0!==t?t:"";return a}};const y={};r.QueryUnbondingDelegationResponse={encode(e,o=l.default.Writer.create()){void 0!==e.unbond&&u.UnbondingDelegation.encode(e.unbond,o.uint32(10).fork()).ldelim();return o},decode(e,o){const t=e instanceof l.default.Reader?e:new l.default.Reader(e);let a=void 0===o?t.len:t.pos+o;const n=Object.assign({},y);while(t.pos<a){const e=t.uint32();switch(e>>>3){case 1:n.unbond=u.UnbondingDelegation.decode(t,t.uint32());break;default:t.skipType(7&e);break}}return n},fromJSON(e){const o=Object.assign({},y);o.unbond=void 0!==e.unbond&&null!==e.unbond?u.UnbondingDelegation.fromJSON(e.unbond):void 0;return o},toJSON(e){const o={};void 0!==e.unbond&&(o.unbond=e.unbond?u.UnbondingDelegation.toJSON(e.unbond):void 0);return o},fromPartial(e){const o=Object.assign({},y);o.unbond=void 0!==e.unbond&&null!==e.unbond?u.UnbondingDelegation.fromPartial(e.unbond):void 0;return o}};const D={delegatorAddr:""};r.QueryDelegatorDelegationsRequest={encode(e,o=l.default.Writer.create()){""!==e.delegatorAddr&&o.uint32(10).string(e.delegatorAddr);void 0!==e.pagination&&g.PageRequest.encode(e.pagination,o.uint32(18).fork()).ldelim();return o},decode(e,o){const t=e instanceof l.default.Reader?e:new l.default.Reader(e);let a=void 0===o?t.len:t.pos+o;const n=Object.assign({},D);while(t.pos<a){const e=t.uint32();switch(e>>>3){case 1:n.delegatorAddr=t.string();break;case 2:n.pagination=g.PageRequest.decode(t,t.uint32());break;default:t.skipType(7&e);break}}return n},fromJSON(e){const o=Object.assign({},D);o.delegatorAddr=void 0!==e.delegatorAddr&&null!==e.delegatorAddr?String(e.delegatorAddr):"";o.pagination=void 0!==e.pagination&&null!==e.pagination?g.PageRequest.fromJSON(e.pagination):void 0;return o},toJSON(e){const o={};void 0!==e.delegatorAddr&&(o.delegatorAddr=e.delegatorAddr);void 0!==e.pagination&&(o.pagination=e.pagination?g.PageRequest.toJSON(e.pagination):void 0);return o},fromPartial(e){var o;const t=Object.assign({},D);t.delegatorAddr=null!==(o=e.delegatorAddr)&&void 0!==o?o:"";t.pagination=void 0!==e.pagination&&null!==e.pagination?g.PageRequest.fromPartial(e.pagination):void 0;return t}};const k={};r.QueryDelegatorDelegationsResponse={encode(e,o=l.default.Writer.create()){for(const t of e.delegationResponses)u.DelegationResponse.encode(t,o.uint32(10).fork()).ldelim();void 0!==e.pagination&&g.PageResponse.encode(e.pagination,o.uint32(18).fork()).ldelim();return o},decode(e,o){const t=e instanceof l.default.Reader?e:new l.default.Reader(e);let a=void 0===o?t.len:t.pos+o;const n=Object.assign({},k);n.delegationResponses=[];while(t.pos<a){const e=t.uint32();switch(e>>>3){case 1:n.delegationResponses.push(u.DelegationResponse.decode(t,t.uint32()));break;case 2:n.pagination=g.PageResponse.decode(t,t.uint32());break;default:t.skipType(7&e);break}}return n},fromJSON(e){var o;const t=Object.assign({},k);t.delegationResponses=(null!==(o=e.delegationResponses)&&void 0!==o?o:[]).map((e=>u.DelegationResponse.fromJSON(e)));t.pagination=void 0!==e.pagination&&null!==e.pagination?g.PageResponse.fromJSON(e.pagination):void 0;return t},toJSON(e){const o={};e.delegationResponses?o.delegationResponses=e.delegationResponses.map((e=>e?u.DelegationResponse.toJSON(e):void 0)):o.delegationResponses=[];void 0!==e.pagination&&(o.pagination=e.pagination?g.PageResponse.toJSON(e.pagination):void 0);return o},fromPartial(e){var o;const t=Object.assign({},k);t.delegationResponses=(null===(o=e.delegationResponses)||void 0===o?void 0:o.map((e=>u.DelegationResponse.fromPartial(e))))||[];t.pagination=void 0!==e.pagination&&null!==e.pagination?g.PageResponse.fromPartial(e.pagination):void 0;return t}};const Q={delegatorAddr:""};r.QueryDelegatorUnbondingDelegationsRequest={encode(e,o=l.default.Writer.create()){""!==e.delegatorAddr&&o.uint32(10).string(e.delegatorAddr);void 0!==e.pagination&&g.PageRequest.encode(e.pagination,o.uint32(18).fork()).ldelim();return o},decode(e,o){const t=e instanceof l.default.Reader?e:new l.default.Reader(e);let a=void 0===o?t.len:t.pos+o;const n=Object.assign({},Q);while(t.pos<a){const e=t.uint32();switch(e>>>3){case 1:n.delegatorAddr=t.string();break;case 2:n.pagination=g.PageRequest.decode(t,t.uint32());break;default:t.skipType(7&e);break}}return n},fromJSON(e){const o=Object.assign({},Q);o.delegatorAddr=void 0!==e.delegatorAddr&&null!==e.delegatorAddr?String(e.delegatorAddr):"";o.pagination=void 0!==e.pagination&&null!==e.pagination?g.PageRequest.fromJSON(e.pagination):void 0;return o},toJSON(e){const o={};void 0!==e.delegatorAddr&&(o.delegatorAddr=e.delegatorAddr);void 0!==e.pagination&&(o.pagination=e.pagination?g.PageRequest.toJSON(e.pagination):void 0);return o},fromPartial(e){var o;const t=Object.assign({},Q);t.delegatorAddr=null!==(o=e.delegatorAddr)&&void 0!==o?o:"";t.pagination=void 0!==e.pagination&&null!==e.pagination?g.PageRequest.fromPartial(e.pagination):void 0;return t}};const S={};r.QueryDelegatorUnbondingDelegationsResponse={encode(e,o=l.default.Writer.create()){for(const t of e.unbondingResponses)u.UnbondingDelegation.encode(t,o.uint32(10).fork()).ldelim();void 0!==e.pagination&&g.PageResponse.encode(e.pagination,o.uint32(18).fork()).ldelim();return o},decode(e,o){const t=e instanceof l.default.Reader?e:new l.default.Reader(e);let a=void 0===o?t.len:t.pos+o;const n=Object.assign({},S);n.unbondingResponses=[];while(t.pos<a){const e=t.uint32();switch(e>>>3){case 1:n.unbondingResponses.push(u.UnbondingDelegation.decode(t,t.uint32()));break;case 2:n.pagination=g.PageResponse.decode(t,t.uint32());break;default:t.skipType(7&e);break}}return n},fromJSON(e){var o;const t=Object.assign({},S);t.unbondingResponses=(null!==(o=e.unbondingResponses)&&void 0!==o?o:[]).map((e=>u.UnbondingDelegation.fromJSON(e)));t.pagination=void 0!==e.pagination&&null!==e.pagination?g.PageResponse.fromJSON(e.pagination):void 0;return t},toJSON(e){const o={};e.unbondingResponses?o.unbondingResponses=e.unbondingResponses.map((e=>e?u.UnbondingDelegation.toJSON(e):void 0)):o.unbondingResponses=[];void 0!==e.pagination&&(o.pagination=e.pagination?g.PageResponse.toJSON(e.pagination):void 0);return o},fromPartial(e){var o;const t=Object.assign({},S);t.unbondingResponses=(null===(o=e.unbondingResponses)||void 0===o?void 0:o.map((e=>u.UnbondingDelegation.fromPartial(e))))||[];t.pagination=void 0!==e.pagination&&null!==e.pagination?g.PageResponse.fromPartial(e.pagination):void 0;return t}};const V={delegatorAddr:"",srcValidatorAddr:"",dstValidatorAddr:""};r.QueryRedelegationsRequest={encode(e,o=l.default.Writer.create()){""!==e.delegatorAddr&&o.uint32(10).string(e.delegatorAddr);""!==e.srcValidatorAddr&&o.uint32(18).string(e.srcValidatorAddr);""!==e.dstValidatorAddr&&o.uint32(26).string(e.dstValidatorAddr);void 0!==e.pagination&&g.PageRequest.encode(e.pagination,o.uint32(34).fork()).ldelim();return o},decode(e,o){const t=e instanceof l.default.Reader?e:new l.default.Reader(e);let a=void 0===o?t.len:t.pos+o;const n=Object.assign({},V);while(t.pos<a){const e=t.uint32();switch(e>>>3){case 1:n.delegatorAddr=t.string();break;case 2:n.srcValidatorAddr=t.string();break;case 3:n.dstValidatorAddr=t.string();break;case 4:n.pagination=g.PageRequest.decode(t,t.uint32());break;default:t.skipType(7&e);break}}return n},fromJSON(e){const o=Object.assign({},V);o.delegatorAddr=void 0!==e.delegatorAddr&&null!==e.delegatorAddr?String(e.delegatorAddr):"";o.srcValidatorAddr=void 0!==e.srcValidatorAddr&&null!==e.srcValidatorAddr?String(e.srcValidatorAddr):"";o.dstValidatorAddr=void 0!==e.dstValidatorAddr&&null!==e.dstValidatorAddr?String(e.dstValidatorAddr):"";o.pagination=void 0!==e.pagination&&null!==e.pagination?g.PageRequest.fromJSON(e.pagination):void 0;return o},toJSON(e){const o={};void 0!==e.delegatorAddr&&(o.delegatorAddr=e.delegatorAddr);void 0!==e.srcValidatorAddr&&(o.srcValidatorAddr=e.srcValidatorAddr);void 0!==e.dstValidatorAddr&&(o.dstValidatorAddr=e.dstValidatorAddr);void 0!==e.pagination&&(o.pagination=e.pagination?g.PageRequest.toJSON(e.pagination):void 0);return o},fromPartial(e){var o,t,a;const n=Object.assign({},V);n.delegatorAddr=null!==(o=e.delegatorAddr)&&void 0!==o?o:"";n.srcValidatorAddr=null!==(t=e.srcValidatorAddr)&&void 0!==t?t:"";n.dstValidatorAddr=null!==(a=e.dstValidatorAddr)&&void 0!==a?a:"";n.pagination=void 0!==e.pagination&&null!==e.pagination?g.PageRequest.fromPartial(e.pagination):void 0;return n}};const J={};r.QueryRedelegationsResponse={encode(e,o=l.default.Writer.create()){for(const t of e.redelegationResponses)u.RedelegationResponse.encode(t,o.uint32(10).fork()).ldelim();void 0!==e.pagination&&g.PageResponse.encode(e.pagination,o.uint32(18).fork()).ldelim();return o},decode(e,o){const t=e instanceof l.default.Reader?e:new l.default.Reader(e);let a=void 0===o?t.len:t.pos+o;const n=Object.assign({},J);n.redelegationResponses=[];while(t.pos<a){const e=t.uint32();switch(e>>>3){case 1:n.redelegationResponses.push(u.RedelegationResponse.decode(t,t.uint32()));break;case 2:n.pagination=g.PageResponse.decode(t,t.uint32());break;default:t.skipType(7&e);break}}return n},fromJSON(e){var o;const t=Object.assign({},J);t.redelegationResponses=(null!==(o=e.redelegationResponses)&&void 0!==o?o:[]).map((e=>u.RedelegationResponse.fromJSON(e)));t.pagination=void 0!==e.pagination&&null!==e.pagination?g.PageResponse.fromJSON(e.pagination):void 0;return t},toJSON(e){const o={};e.redelegationResponses?o.redelegationResponses=e.redelegationResponses.map((e=>e?u.RedelegationResponse.toJSON(e):void 0)):o.redelegationResponses=[];void 0!==e.pagination&&(o.pagination=e.pagination?g.PageResponse.toJSON(e.pagination):void 0);return o},fromPartial(e){var o;const t=Object.assign({},J);t.redelegationResponses=(null===(o=e.redelegationResponses)||void 0===o?void 0:o.map((e=>u.RedelegationResponse.fromPartial(e))))||[];t.pagination=void 0!==e.pagination&&null!==e.pagination?g.PageResponse.fromPartial(e.pagination):void 0;return t}};const N={delegatorAddr:""};r.QueryDelegatorValidatorsRequest={encode(e,o=l.default.Writer.create()){""!==e.delegatorAddr&&o.uint32(10).string(e.delegatorAddr);void 0!==e.pagination&&g.PageRequest.encode(e.pagination,o.uint32(18).fork()).ldelim();return o},decode(e,o){const t=e instanceof l.default.Reader?e:new l.default.Reader(e);let a=void 0===o?t.len:t.pos+o;const n=Object.assign({},N);while(t.pos<a){const e=t.uint32();switch(e>>>3){case 1:n.delegatorAddr=t.string();break;case 2:n.pagination=g.PageRequest.decode(t,t.uint32());break;default:t.skipType(7&e);break}}return n},fromJSON(e){const o=Object.assign({},N);o.delegatorAddr=void 0!==e.delegatorAddr&&null!==e.delegatorAddr?String(e.delegatorAddr):"";o.pagination=void 0!==e.pagination&&null!==e.pagination?g.PageRequest.fromJSON(e.pagination):void 0;return o},toJSON(e){const o={};void 0!==e.delegatorAddr&&(o.delegatorAddr=e.delegatorAddr);void 0!==e.pagination&&(o.pagination=e.pagination?g.PageRequest.toJSON(e.pagination):void 0);return o},fromPartial(e){var o;const t=Object.assign({},N);t.delegatorAddr=null!==(o=e.delegatorAddr)&&void 0!==o?o:"";t.pagination=void 0!==e.pagination&&null!==e.pagination?g.PageRequest.fromPartial(e.pagination):void 0;return t}};const q={};r.QueryDelegatorValidatorsResponse={encode(e,o=l.default.Writer.create()){for(const t of e.validators)u.Validator.encode(t,o.uint32(10).fork()).ldelim();void 0!==e.pagination&&g.PageResponse.encode(e.pagination,o.uint32(18).fork()).ldelim();return o},decode(e,o){const t=e instanceof l.default.Reader?e:new l.default.Reader(e);let a=void 0===o?t.len:t.pos+o;const n=Object.assign({},q);n.validators=[];while(t.pos<a){const e=t.uint32();switch(e>>>3){case 1:n.validators.push(u.Validator.decode(t,t.uint32()));break;case 2:n.pagination=g.PageResponse.decode(t,t.uint32());break;default:t.skipType(7&e);break}}return n},fromJSON(e){var o;const t=Object.assign({},q);t.validators=(null!==(o=e.validators)&&void 0!==o?o:[]).map((e=>u.Validator.fromJSON(e)));t.pagination=void 0!==e.pagination&&null!==e.pagination?g.PageResponse.fromJSON(e.pagination):void 0;return t},toJSON(e){const o={};e.validators?o.validators=e.validators.map((e=>e?u.Validator.toJSON(e):void 0)):o.validators=[];void 0!==e.pagination&&(o.pagination=e.pagination?g.PageResponse.toJSON(e.pagination):void 0);return o},fromPartial(e){var o;const t=Object.assign({},q);t.validators=(null===(o=e.validators)||void 0===o?void 0:o.map((e=>u.Validator.fromPartial(e))))||[];t.pagination=void 0!==e.pagination&&null!==e.pagination?g.PageResponse.fromPartial(e.pagination):void 0;return t}};const w={delegatorAddr:"",validatorAddr:""};r.QueryDelegatorValidatorRequest={encode(e,o=l.default.Writer.create()){""!==e.delegatorAddr&&o.uint32(10).string(e.delegatorAddr);""!==e.validatorAddr&&o.uint32(18).string(e.validatorAddr);return o},decode(e,o){const t=e instanceof l.default.Reader?e:new l.default.Reader(e);let a=void 0===o?t.len:t.pos+o;const n=Object.assign({},w);while(t.pos<a){const e=t.uint32();switch(e>>>3){case 1:n.delegatorAddr=t.string();break;case 2:n.validatorAddr=t.string();break;default:t.skipType(7&e);break}}return n},fromJSON(e){const o=Object.assign({},w);o.delegatorAddr=void 0!==e.delegatorAddr&&null!==e.delegatorAddr?String(e.delegatorAddr):"";o.validatorAddr=void 0!==e.validatorAddr&&null!==e.validatorAddr?String(e.validatorAddr):"";return o},toJSON(e){const o={};void 0!==e.delegatorAddr&&(o.delegatorAddr=e.delegatorAddr);void 0!==e.validatorAddr&&(o.validatorAddr=e.validatorAddr);return o},fromPartial(e){var o,t;const a=Object.assign({},w);a.delegatorAddr=null!==(o=e.delegatorAddr)&&void 0!==o?o:"";a.validatorAddr=null!==(t=e.validatorAddr)&&void 0!==t?t:"";return a}};const j={};r.QueryDelegatorValidatorResponse={encode(e,o=l.default.Writer.create()){void 0!==e.validator&&u.Validator.encode(e.validator,o.uint32(10).fork()).ldelim();return o},decode(e,o){const t=e instanceof l.default.Reader?e:new l.default.Reader(e);let a=void 0===o?t.len:t.pos+o;const n=Object.assign({},j);while(t.pos<a){const e=t.uint32();switch(e>>>3){case 1:n.validator=u.Validator.decode(t,t.uint32());break;default:t.skipType(7&e);break}}return n},fromJSON(e){const o=Object.assign({},j);o.validator=void 0!==e.validator&&null!==e.validator?u.Validator.fromJSON(e.validator):void 0;return o},toJSON(e){const o={};void 0!==e.validator&&(o.validator=e.validator?u.Validator.toJSON(e.validator):void 0);return o},fromPartial(e){const o=Object.assign({},j);o.validator=void 0!==e.validator&&null!==e.validator?u.Validator.fromPartial(e.validator):void 0;return o}};const U={height:s.default.ZERO};r.QueryHistoricalInfoRequest={encode(e,o=l.default.Writer.create()){e.height.isZero()||o.uint32(8).int64(e.height);return o},decode(e,o){const t=e instanceof l.default.Reader?e:new l.default.Reader(e);let a=void 0===o?t.len:t.pos+o;const n=Object.assign({},U);while(t.pos<a){const e=t.uint32();switch(e>>>3){case 1:n.height=t.int64();break;default:t.skipType(7&e);break}}return n},fromJSON(e){const o=Object.assign({},U);o.height=void 0!==e.height&&null!==e.height?s.default.fromString(e.height):s.default.ZERO;return o},toJSON(e){const o={};void 0!==e.height&&(o.height=(e.height||s.default.ZERO).toString());return o},fromPartial(e){const o=Object.assign({},U);o.height=void 0!==e.height&&null!==e.height?s.default.fromValue(e.height):s.default.ZERO;return o}};const T={};r.QueryHistoricalInfoResponse={encode(e,o=l.default.Writer.create()){void 0!==e.hist&&u.HistoricalInfo.encode(e.hist,o.uint32(10).fork()).ldelim();return o},decode(e,o){const t=e instanceof l.default.Reader?e:new l.default.Reader(e);let a=void 0===o?t.len:t.pos+o;const n=Object.assign({},T);while(t.pos<a){const e=t.uint32();switch(e>>>3){case 1:n.hist=u.HistoricalInfo.decode(t,t.uint32());break;default:t.skipType(7&e);break}}return n},fromJSON(e){const o=Object.assign({},T);o.hist=void 0!==e.hist&&null!==e.hist?u.HistoricalInfo.fromJSON(e.hist):void 0;return o},toJSON(e){const o={};void 0!==e.hist&&(o.hist=e.hist?u.HistoricalInfo.toJSON(e.hist):void 0);return o},fromPartial(e){const o=Object.assign({},T);o.hist=void 0!==e.hist&&null!==e.hist?u.HistoricalInfo.fromPartial(e.hist):void 0;return o}};const W={};r.QueryPoolRequest={encode(e,o=l.default.Writer.create()){return o},decode(e,o){const t=e instanceof l.default.Reader?e:new l.default.Reader(e);let a=void 0===o?t.len:t.pos+o;const n=Object.assign({},W);while(t.pos<a){const e=t.uint32();switch(e>>>3){default:t.skipType(7&e);break}}return n},fromJSON(e){const o=Object.assign({},W);return o},toJSON(e){const o={};return o},fromPartial(e){const o=Object.assign({},W);return o}};const I={};r.QueryPoolResponse={encode(e,o=l.default.Writer.create()){void 0!==e.pool&&u.Pool.encode(e.pool,o.uint32(10).fork()).ldelim();return o},decode(e,o){const t=e instanceof l.default.Reader?e:new l.default.Reader(e);let a=void 0===o?t.len:t.pos+o;const n=Object.assign({},I);while(t.pos<a){const e=t.uint32();switch(e>>>3){case 1:n.pool=u.Pool.decode(t,t.uint32());break;default:t.skipType(7&e);break}}return n},fromJSON(e){const o=Object.assign({},I);o.pool=void 0!==e.pool&&null!==e.pool?u.Pool.fromJSON(e.pool):void 0;return o},toJSON(e){const o={};void 0!==e.pool&&(o.pool=e.pool?u.Pool.toJSON(e.pool):void 0);return o},fromPartial(e){const o=Object.assign({},I);o.pool=void 0!==e.pool&&null!==e.pool?u.Pool.fromPartial(e.pool):void 0;return o}};const H={};r.QueryParamsRequest={encode(e,o=l.default.Writer.create()){return o},decode(e,o){const t=e instanceof l.default.Reader?e:new l.default.Reader(e);let a=void 0===o?t.len:t.pos+o;const n=Object.assign({},H);while(t.pos<a){const e=t.uint32();switch(e>>>3){default:t.skipType(7&e);break}}return n},fromJSON(e){const o=Object.assign({},H);return o},toJSON(e){const o={};return o},fromPartial(e){const o=Object.assign({},H);return o}};const _={};r.QueryParamsResponse={encode(e,o=l.default.Writer.create()){void 0!==e.params&&u.Params.encode(e.params,o.uint32(10).fork()).ldelim();return o},decode(e,o){const t=e instanceof l.default.Reader?e:new l.default.Reader(e);let a=void 0===o?t.len:t.pos+o;const n=Object.assign({},_);while(t.pos<a){const e=t.uint32();switch(e>>>3){case 1:n.params=u.Params.decode(t,t.uint32());break;default:t.skipType(7&e);break}}return n},fromJSON(e){const o=Object.assign({},_);o.params=void 0!==e.params&&null!==e.params?u.Params.fromJSON(e.params):void 0;return o},toJSON(e){const o={};void 0!==e.params&&(o.params=e.params?u.Params.toJSON(e.params):void 0);return o},fromPartial(e){const o=Object.assign({},_);o.params=void 0!==e.params&&null!==e.params?u.Params.fromPartial(e.params):void 0;return o}};class QueryClientImpl{constructor(e){this.rpc=e;this.Validators=this.Validators.bind(this);this.Validator=this.Validator.bind(this);this.ValidatorDelegations=this.ValidatorDelegations.bind(this);this.ValidatorUnbondingDelegations=this.ValidatorUnbondingDelegations.bind(this);this.Delegation=this.Delegation.bind(this);this.UnbondingDelegation=this.UnbondingDelegation.bind(this);this.DelegatorDelegations=this.DelegatorDelegations.bind(this);this.DelegatorUnbondingDelegations=this.DelegatorUnbondingDelegations.bind(this);this.Redelegations=this.Redelegations.bind(this);this.DelegatorValidators=this.DelegatorValidators.bind(this);this.DelegatorValidator=this.DelegatorValidator.bind(this);this.HistoricalInfo=this.HistoricalInfo.bind(this);this.Pool=this.Pool.bind(this);this.Params=this.Params.bind(this)}Validators(e){const o=r.QueryValidatorsRequest.encode(e).finish();const t=this.rpc.request("cosmos.staking.v1beta1.Query","Validators",o);return t.then((e=>r.QueryValidatorsResponse.decode(new l.default.Reader(e))))}Validator(e){const o=r.QueryValidatorRequest.encode(e).finish();const t=this.rpc.request("cosmos.staking.v1beta1.Query","Validator",o);return t.then((e=>r.QueryValidatorResponse.decode(new l.default.Reader(e))))}ValidatorDelegations(e){const o=r.QueryValidatorDelegationsRequest.encode(e).finish();const t=this.rpc.request("cosmos.staking.v1beta1.Query","ValidatorDelegations",o);return t.then((e=>r.QueryValidatorDelegationsResponse.decode(new l.default.Reader(e))))}ValidatorUnbondingDelegations(e){const o=r.QueryValidatorUnbondingDelegationsRequest.encode(e).finish();const t=this.rpc.request("cosmos.staking.v1beta1.Query","ValidatorUnbondingDelegations",o);return t.then((e=>r.QueryValidatorUnbondingDelegationsResponse.decode(new l.default.Reader(e))))}Delegation(e){const o=r.QueryDelegationRequest.encode(e).finish();const t=this.rpc.request("cosmos.staking.v1beta1.Query","Delegation",o);return t.then((e=>r.QueryDelegationResponse.decode(new l.default.Reader(e))))}UnbondingDelegation(e){const o=r.QueryUnbondingDelegationRequest.encode(e).finish();const t=this.rpc.request("cosmos.staking.v1beta1.Query","UnbondingDelegation",o);return t.then((e=>r.QueryUnbondingDelegationResponse.decode(new l.default.Reader(e))))}DelegatorDelegations(e){const o=r.QueryDelegatorDelegationsRequest.encode(e).finish();const t=this.rpc.request("cosmos.staking.v1beta1.Query","DelegatorDelegations",o);return t.then((e=>r.QueryDelegatorDelegationsResponse.decode(new l.default.Reader(e))))}DelegatorUnbondingDelegations(e){const o=r.QueryDelegatorUnbondingDelegationsRequest.encode(e).finish();const t=this.rpc.request("cosmos.staking.v1beta1.Query","DelegatorUnbondingDelegations",o);return t.then((e=>r.QueryDelegatorUnbondingDelegationsResponse.decode(new l.default.Reader(e))))}Redelegations(e){const o=r.QueryRedelegationsRequest.encode(e).finish();const t=this.rpc.request("cosmos.staking.v1beta1.Query","Redelegations",o);return t.then((e=>r.QueryRedelegationsResponse.decode(new l.default.Reader(e))))}DelegatorValidators(e){const o=r.QueryDelegatorValidatorsRequest.encode(e).finish();const t=this.rpc.request("cosmos.staking.v1beta1.Query","DelegatorValidators",o);return t.then((e=>r.QueryDelegatorValidatorsResponse.decode(new l.default.Reader(e))))}DelegatorValidator(e){const o=r.QueryDelegatorValidatorRequest.encode(e).finish();const t=this.rpc.request("cosmos.staking.v1beta1.Query","DelegatorValidator",o);return t.then((e=>r.QueryDelegatorValidatorResponse.decode(new l.default.Reader(e))))}HistoricalInfo(e){const o=r.QueryHistoricalInfoRequest.encode(e).finish();const t=this.rpc.request("cosmos.staking.v1beta1.Query","HistoricalInfo",o);return t.then((e=>r.QueryHistoricalInfoResponse.decode(new l.default.Reader(e))))}Pool(e){const o=r.QueryPoolRequest.encode(e).finish();const t=this.rpc.request("cosmos.staking.v1beta1.Query","Pool",o);return t.then((e=>r.QueryPoolResponse.decode(new l.default.Reader(e))))}Params(e){const o=r.QueryParamsRequest.encode(e).finish();const t=this.rpc.request("cosmos.staking.v1beta1.Query","Params",o);return t.then((e=>r.QueryParamsResponse.decode(new l.default.Reader(e))))}}r.QueryClientImpl=QueryClientImpl;if(l.default.util.Long!==s.default){l.default.util.Long=s.default;l.default.configure()}const C=r.__esModule,Z=r.QueryParamsResponse,E=r.QueryParamsRequest,M=r.QueryPoolResponse,L=r.QueryPoolRequest,x=r.QueryHistoricalInfoResponse,z=r.QueryHistoricalInfoRequest,B=r.QueryDelegatorValidatorResponse,F=r.QueryDelegatorValidatorRequest,G=r.QueryDelegatorValidatorsResponse,K=r.QueryDelegatorValidatorsRequest,X=r.QueryRedelegationsResponse,Y=r.QueryRedelegationsRequest,$=r.QueryDelegatorUnbondingDelegationsResponse,ee=r.QueryDelegatorUnbondingDelegationsRequest,oe=r.QueryDelegatorDelegationsResponse,te=r.QueryDelegatorDelegationsRequest,ae=r.QueryUnbondingDelegationResponse,ne=r.QueryUnbondingDelegationRequest,ie=r.QueryDelegationResponse,re=r.QueryDelegationRequest,de=r.QueryValidatorUnbondingDelegationsResponse,se=r.QueryValidatorUnbondingDelegationsRequest,le=r.QueryValidatorDelegationsResponse,ge=r.QueryValidatorDelegationsRequest,ue=r.QueryValidatorResponse,ce=r.QueryValidatorRequest,pe=r.QueryValidatorsResponse,ve=r.QueryValidatorsRequest,fe=r.protobufPackage;const Re=r.QueryClientImpl;export{Re as QueryClientImpl,re as QueryDelegationRequest,ie as QueryDelegationResponse,te as QueryDelegatorDelegationsRequest,oe as QueryDelegatorDelegationsResponse,ee as QueryDelegatorUnbondingDelegationsRequest,$ as QueryDelegatorUnbondingDelegationsResponse,F as QueryDelegatorValidatorRequest,B as QueryDelegatorValidatorResponse,K as QueryDelegatorValidatorsRequest,G as QueryDelegatorValidatorsResponse,z as QueryHistoricalInfoRequest,x as QueryHistoricalInfoResponse,E as QueryParamsRequest,Z as QueryParamsResponse,L as QueryPoolRequest,M as QueryPoolResponse,Y as QueryRedelegationsRequest,X as QueryRedelegationsResponse,ne as QueryUnbondingDelegationRequest,ae as QueryUnbondingDelegationResponse,ge as QueryValidatorDelegationsRequest,le as QueryValidatorDelegationsResponse,ce as QueryValidatorRequest,ue as QueryValidatorResponse,se as QueryValidatorUnbondingDelegationsRequest,de as QueryValidatorUnbondingDelegationsResponse,ve as QueryValidatorsRequest,pe as QueryValidatorsResponse,C as __esModule,r as default,fe as protobufPackage};

