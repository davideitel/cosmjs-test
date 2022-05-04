import*as e from"long";import*as n from"protobufjs/minimal";import o from"./connection.js";import t from"../../client/v1/client.js";import i from"../../../../cosmos/base/query/v1beta1/pagination.js";import r from"../../../../google/protobuf/any.js";import"../../commitment/v1/commitment.js";import"../../../../confio/proofs.js";var s="default"in e?e.default:e;var c="default"in n?n.default:n;var a="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var d={};var u=d&&d.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(d,"__esModule",{value:true});d.QueryClientImpl=d.QueryConnectionConsensusStateResponse=d.QueryConnectionConsensusStateRequest=d.QueryConnectionClientStateResponse=d.QueryConnectionClientStateRequest=d.QueryClientConnectionsResponse=d.QueryClientConnectionsRequest=d.QueryConnectionsResponse=d.QueryConnectionsRequest=d.QueryConnectionResponse=d.QueryConnectionRequest=d.protobufPackage=void 0;const l=u(s);const f=u(c);const p=o;const g=t;const h=i;const v=r;d.protobufPackage="ibc.core.connection.v1";const C={connectionId:""};d.QueryConnectionRequest={encode(e,n=f.default.Writer.create()){""!==e.connectionId&&n.uint32(10).string(e.connectionId);return n},decode(e,n){const o=e instanceof f.default.Reader?e:new f.default.Reader(e);let t=void 0===n?o.len:o.pos+n;const i=Object.assign({},C);while(o.pos<t){const e=o.uint32();switch(e>>>3){case 1:i.connectionId=o.string();break;default:o.skipType(7&e);break}}return i},fromJSON(e){const n=Object.assign({},C);n.connectionId=void 0!==e.connectionId&&null!==e.connectionId?String(e.connectionId):"";return n},toJSON(e){const n={};void 0!==e.connectionId&&(n.connectionId=e.connectionId);return n},fromPartial(e){var n;const o=Object.assign({},C);o.connectionId=null!==(n=e.connectionId)&&void 0!==n?n:"";return o}};const b={};d.QueryConnectionResponse={encode(e,n=f.default.Writer.create()){void 0!==e.connection&&p.ConnectionEnd.encode(e.connection,n.uint32(10).fork()).ldelim();0!==e.proof.length&&n.uint32(18).bytes(e.proof);void 0!==e.proofHeight&&g.Height.encode(e.proofHeight,n.uint32(26).fork()).ldelim();return n},decode(e,n){const o=e instanceof f.default.Reader?e:new f.default.Reader(e);let t=void 0===n?o.len:o.pos+n;const i=Object.assign({},b);i.proof=new Uint8Array;while(o.pos<t){const e=o.uint32();switch(e>>>3){case 1:i.connection=p.ConnectionEnd.decode(o,o.uint32());break;case 2:i.proof=o.bytes();break;case 3:i.proofHeight=g.Height.decode(o,o.uint32());break;default:o.skipType(7&e);break}}return i},fromJSON(e){const n=Object.assign({},b);n.connection=void 0!==e.connection&&null!==e.connection?p.ConnectionEnd.fromJSON(e.connection):void 0;n.proof=void 0!==e.proof&&null!==e.proof?bytesFromBase64(e.proof):new Uint8Array;n.proofHeight=void 0!==e.proofHeight&&null!==e.proofHeight?g.Height.fromJSON(e.proofHeight):void 0;return n},toJSON(e){const n={};void 0!==e.connection&&(n.connection=e.connection?p.ConnectionEnd.toJSON(e.connection):void 0);void 0!==e.proof&&(n.proof=base64FromBytes(void 0!==e.proof?e.proof:new Uint8Array));void 0!==e.proofHeight&&(n.proofHeight=e.proofHeight?g.Height.toJSON(e.proofHeight):void 0);return n},fromPartial(e){var n;const o=Object.assign({},b);o.connection=void 0!==e.connection&&null!==e.connection?p.ConnectionEnd.fromPartial(e.connection):void 0;o.proof=null!==(n=e.proof)&&void 0!==n?n:new Uint8Array;o.proofHeight=void 0!==e.proofHeight&&null!==e.proofHeight?g.Height.fromPartial(e.proofHeight):void 0;return o}};const m={};d.QueryConnectionsRequest={encode(e,n=f.default.Writer.create()){void 0!==e.pagination&&h.PageRequest.encode(e.pagination,n.uint32(10).fork()).ldelim();return n},decode(e,n){const o=e instanceof f.default.Reader?e:new f.default.Reader(e);let t=void 0===n?o.len:o.pos+n;const i=Object.assign({},m);while(o.pos<t){const e=o.uint32();switch(e>>>3){case 1:i.pagination=h.PageRequest.decode(o,o.uint32());break;default:o.skipType(7&e);break}}return i},fromJSON(e){const n=Object.assign({},m);n.pagination=void 0!==e.pagination&&null!==e.pagination?h.PageRequest.fromJSON(e.pagination):void 0;return n},toJSON(e){const n={};void 0!==e.pagination&&(n.pagination=e.pagination?h.PageRequest.toJSON(e.pagination):void 0);return n},fromPartial(e){const n=Object.assign({},m);n.pagination=void 0!==e.pagination&&null!==e.pagination?h.PageRequest.fromPartial(e.pagination):void 0;return n}};const S={};d.QueryConnectionsResponse={encode(e,n=f.default.Writer.create()){for(const o of e.connections)p.IdentifiedConnection.encode(o,n.uint32(10).fork()).ldelim();void 0!==e.pagination&&h.PageResponse.encode(e.pagination,n.uint32(18).fork()).ldelim();void 0!==e.height&&g.Height.encode(e.height,n.uint32(26).fork()).ldelim();return n},decode(e,n){const o=e instanceof f.default.Reader?e:new f.default.Reader(e);let t=void 0===n?o.len:o.pos+n;const i=Object.assign({},S);i.connections=[];while(o.pos<t){const e=o.uint32();switch(e>>>3){case 1:i.connections.push(p.IdentifiedConnection.decode(o,o.uint32()));break;case 2:i.pagination=h.PageResponse.decode(o,o.uint32());break;case 3:i.height=g.Height.decode(o,o.uint32());break;default:o.skipType(7&e);break}}return i},fromJSON(e){var n;const o=Object.assign({},S);o.connections=(null!==(n=e.connections)&&void 0!==n?n:[]).map((e=>p.IdentifiedConnection.fromJSON(e)));o.pagination=void 0!==e.pagination&&null!==e.pagination?h.PageResponse.fromJSON(e.pagination):void 0;o.height=void 0!==e.height&&null!==e.height?g.Height.fromJSON(e.height):void 0;return o},toJSON(e){const n={};e.connections?n.connections=e.connections.map((e=>e?p.IdentifiedConnection.toJSON(e):void 0)):n.connections=[];void 0!==e.pagination&&(n.pagination=e.pagination?h.PageResponse.toJSON(e.pagination):void 0);void 0!==e.height&&(n.height=e.height?g.Height.toJSON(e.height):void 0);return n},fromPartial(e){var n;const o=Object.assign({},S);o.connections=(null===(n=e.connections)||void 0===n?void 0:n.map((e=>p.IdentifiedConnection.fromPartial(e))))||[];o.pagination=void 0!==e.pagination&&null!==e.pagination?h.PageResponse.fromPartial(e.pagination):void 0;o.height=void 0!==e.height&&null!==e.height?g.Height.fromPartial(e.height):void 0;return o}};const y={clientId:""};d.QueryClientConnectionsRequest={encode(e,n=f.default.Writer.create()){""!==e.clientId&&n.uint32(10).string(e.clientId);return n},decode(e,n){const o=e instanceof f.default.Reader?e:new f.default.Reader(e);let t=void 0===n?o.len:o.pos+n;const i=Object.assign({},y);while(o.pos<t){const e=o.uint32();switch(e>>>3){case 1:i.clientId=o.string();break;default:o.skipType(7&e);break}}return i},fromJSON(e){const n=Object.assign({},y);n.clientId=void 0!==e.clientId&&null!==e.clientId?String(e.clientId):"";return n},toJSON(e){const n={};void 0!==e.clientId&&(n.clientId=e.clientId);return n},fromPartial(e){var n;const o=Object.assign({},y);o.clientId=null!==(n=e.clientId)&&void 0!==n?n:"";return o}};const H={connectionPaths:""};d.QueryClientConnectionsResponse={encode(e,n=f.default.Writer.create()){for(const o of e.connectionPaths)n.uint32(10).string(o);0!==e.proof.length&&n.uint32(18).bytes(e.proof);void 0!==e.proofHeight&&g.Height.encode(e.proofHeight,n.uint32(26).fork()).ldelim();return n},decode(e,n){const o=e instanceof f.default.Reader?e:new f.default.Reader(e);let t=void 0===n?o.len:o.pos+n;const i=Object.assign({},H);i.connectionPaths=[];i.proof=new Uint8Array;while(o.pos<t){const e=o.uint32();switch(e>>>3){case 1:i.connectionPaths.push(o.string());break;case 2:i.proof=o.bytes();break;case 3:i.proofHeight=g.Height.decode(o,o.uint32());break;default:o.skipType(7&e);break}}return i},fromJSON(e){var n;const o=Object.assign({},H);o.connectionPaths=(null!==(n=e.connectionPaths)&&void 0!==n?n:[]).map((e=>String(e)));o.proof=void 0!==e.proof&&null!==e.proof?bytesFromBase64(e.proof):new Uint8Array;o.proofHeight=void 0!==e.proofHeight&&null!==e.proofHeight?g.Height.fromJSON(e.proofHeight):void 0;return o},toJSON(e){const n={};e.connectionPaths?n.connectionPaths=e.connectionPaths.map((e=>e)):n.connectionPaths=[];void 0!==e.proof&&(n.proof=base64FromBytes(void 0!==e.proof?e.proof:new Uint8Array));void 0!==e.proofHeight&&(n.proofHeight=e.proofHeight?g.Height.toJSON(e.proofHeight):void 0);return n},fromPartial(e){var n,o;const t=Object.assign({},H);t.connectionPaths=(null===(n=e.connectionPaths)||void 0===n?void 0:n.map((e=>e)))||[];t.proof=null!==(o=e.proof)&&void 0!==o?o:new Uint8Array;t.proofHeight=void 0!==e.proofHeight&&null!==e.proofHeight?g.Height.fromPartial(e.proofHeight):void 0;return t}};const R={connectionId:""};d.QueryConnectionClientStateRequest={encode(e,n=f.default.Writer.create()){""!==e.connectionId&&n.uint32(10).string(e.connectionId);return n},decode(e,n){const o=e instanceof f.default.Reader?e:new f.default.Reader(e);let t=void 0===n?o.len:o.pos+n;const i=Object.assign({},R);while(o.pos<t){const e=o.uint32();switch(e>>>3){case 1:i.connectionId=o.string();break;default:o.skipType(7&e);break}}return i},fromJSON(e){const n=Object.assign({},R);n.connectionId=void 0!==e.connectionId&&null!==e.connectionId?String(e.connectionId):"";return n},toJSON(e){const n={};void 0!==e.connectionId&&(n.connectionId=e.connectionId);return n},fromPartial(e){var n;const o=Object.assign({},R);o.connectionId=null!==(n=e.connectionId)&&void 0!==n?n:"";return o}};const I={};d.QueryConnectionClientStateResponse={encode(e,n=f.default.Writer.create()){void 0!==e.identifiedClientState&&g.IdentifiedClientState.encode(e.identifiedClientState,n.uint32(10).fork()).ldelim();0!==e.proof.length&&n.uint32(18).bytes(e.proof);void 0!==e.proofHeight&&g.Height.encode(e.proofHeight,n.uint32(26).fork()).ldelim();return n},decode(e,n){const o=e instanceof f.default.Reader?e:new f.default.Reader(e);let t=void 0===n?o.len:o.pos+n;const i=Object.assign({},I);i.proof=new Uint8Array;while(o.pos<t){const e=o.uint32();switch(e>>>3){case 1:i.identifiedClientState=g.IdentifiedClientState.decode(o,o.uint32());break;case 2:i.proof=o.bytes();break;case 3:i.proofHeight=g.Height.decode(o,o.uint32());break;default:o.skipType(7&e);break}}return i},fromJSON(e){const n=Object.assign({},I);n.identifiedClientState=void 0!==e.identifiedClientState&&null!==e.identifiedClientState?g.IdentifiedClientState.fromJSON(e.identifiedClientState):void 0;n.proof=void 0!==e.proof&&null!==e.proof?bytesFromBase64(e.proof):new Uint8Array;n.proofHeight=void 0!==e.proofHeight&&null!==e.proofHeight?g.Height.fromJSON(e.proofHeight):void 0;return n},toJSON(e){const n={};void 0!==e.identifiedClientState&&(n.identifiedClientState=e.identifiedClientState?g.IdentifiedClientState.toJSON(e.identifiedClientState):void 0);void 0!==e.proof&&(n.proof=base64FromBytes(void 0!==e.proof?e.proof:new Uint8Array));void 0!==e.proofHeight&&(n.proofHeight=e.proofHeight?g.Height.toJSON(e.proofHeight):void 0);return n},fromPartial(e){var n;const o=Object.assign({},I);o.identifiedClientState=void 0!==e.identifiedClientState&&null!==e.identifiedClientState?g.IdentifiedClientState.fromPartial(e.identifiedClientState):void 0;o.proof=null!==(n=e.proof)&&void 0!==n?n:new Uint8Array;o.proofHeight=void 0!==e.proofHeight&&null!==e.proofHeight?g.Height.fromPartial(e.proofHeight):void 0;return o}};const O={connectionId:"",revisionNumber:l.default.UZERO,revisionHeight:l.default.UZERO};d.QueryConnectionConsensusStateRequest={encode(e,n=f.default.Writer.create()){""!==e.connectionId&&n.uint32(10).string(e.connectionId);e.revisionNumber.isZero()||n.uint32(16).uint64(e.revisionNumber);e.revisionHeight.isZero()||n.uint32(24).uint64(e.revisionHeight);return n},decode(e,n){const o=e instanceof f.default.Reader?e:new f.default.Reader(e);let t=void 0===n?o.len:o.pos+n;const i=Object.assign({},O);while(o.pos<t){const e=o.uint32();switch(e>>>3){case 1:i.connectionId=o.string();break;case 2:i.revisionNumber=o.uint64();break;case 3:i.revisionHeight=o.uint64();break;default:o.skipType(7&e);break}}return i},fromJSON(e){const n=Object.assign({},O);n.connectionId=void 0!==e.connectionId&&null!==e.connectionId?String(e.connectionId):"";n.revisionNumber=void 0!==e.revisionNumber&&null!==e.revisionNumber?l.default.fromString(e.revisionNumber):l.default.UZERO;n.revisionHeight=void 0!==e.revisionHeight&&null!==e.revisionHeight?l.default.fromString(e.revisionHeight):l.default.UZERO;return n},toJSON(e){const n={};void 0!==e.connectionId&&(n.connectionId=e.connectionId);void 0!==e.revisionNumber&&(n.revisionNumber=(e.revisionNumber||l.default.UZERO).toString());void 0!==e.revisionHeight&&(n.revisionHeight=(e.revisionHeight||l.default.UZERO).toString());return n},fromPartial(e){var n;const o=Object.assign({},O);o.connectionId=null!==(n=e.connectionId)&&void 0!==n?n:"";o.revisionNumber=void 0!==e.revisionNumber&&null!==e.revisionNumber?l.default.fromValue(e.revisionNumber):l.default.UZERO;o.revisionHeight=void 0!==e.revisionHeight&&null!==e.revisionHeight?l.default.fromValue(e.revisionHeight):l.default.UZERO;return o}};const k={clientId:""};d.QueryConnectionConsensusStateResponse={encode(e,n=f.default.Writer.create()){void 0!==e.consensusState&&v.Any.encode(e.consensusState,n.uint32(10).fork()).ldelim();""!==e.clientId&&n.uint32(18).string(e.clientId);0!==e.proof.length&&n.uint32(26).bytes(e.proof);void 0!==e.proofHeight&&g.Height.encode(e.proofHeight,n.uint32(34).fork()).ldelim();return n},decode(e,n){const o=e instanceof f.default.Reader?e:new f.default.Reader(e);let t=void 0===n?o.len:o.pos+n;const i=Object.assign({},k);i.proof=new Uint8Array;while(o.pos<t){const e=o.uint32();switch(e>>>3){case 1:i.consensusState=v.Any.decode(o,o.uint32());break;case 2:i.clientId=o.string();break;case 3:i.proof=o.bytes();break;case 4:i.proofHeight=g.Height.decode(o,o.uint32());break;default:o.skipType(7&e);break}}return i},fromJSON(e){const n=Object.assign({},k);n.consensusState=void 0!==e.consensusState&&null!==e.consensusState?v.Any.fromJSON(e.consensusState):void 0;n.clientId=void 0!==e.clientId&&null!==e.clientId?String(e.clientId):"";n.proof=void 0!==e.proof&&null!==e.proof?bytesFromBase64(e.proof):new Uint8Array;n.proofHeight=void 0!==e.proofHeight&&null!==e.proofHeight?g.Height.fromJSON(e.proofHeight):void 0;return n},toJSON(e){const n={};void 0!==e.consensusState&&(n.consensusState=e.consensusState?v.Any.toJSON(e.consensusState):void 0);void 0!==e.clientId&&(n.clientId=e.clientId);void 0!==e.proof&&(n.proof=base64FromBytes(void 0!==e.proof?e.proof:new Uint8Array));void 0!==e.proofHeight&&(n.proofHeight=e.proofHeight?g.Height.toJSON(e.proofHeight):void 0);return n},fromPartial(e){var n,o;const t=Object.assign({},k);t.consensusState=void 0!==e.consensusState&&null!==e.consensusState?v.Any.fromPartial(e.consensusState):void 0;t.clientId=null!==(n=e.clientId)&&void 0!==n?n:"";t.proof=null!==(o=e.proof)&&void 0!==o?o:new Uint8Array;t.proofHeight=void 0!==e.proofHeight&&null!==e.proofHeight?g.Height.fromPartial(e.proofHeight):void 0;return t}};class QueryClientImpl{constructor(e){this.rpc=e;this.Connection=this.Connection.bind(this);this.Connections=this.Connections.bind(this);this.ClientConnections=this.ClientConnections.bind(this);this.ConnectionClientState=this.ConnectionClientState.bind(this);this.ConnectionConsensusState=this.ConnectionConsensusState.bind(this)}Connection(e){const n=d.QueryConnectionRequest.encode(e).finish();const o=this.rpc.request("ibc.core.connection.v1.Query","Connection",n);return o.then((e=>d.QueryConnectionResponse.decode(new f.default.Reader(e))))}Connections(e){const n=d.QueryConnectionsRequest.encode(e).finish();const o=this.rpc.request("ibc.core.connection.v1.Query","Connections",n);return o.then((e=>d.QueryConnectionsResponse.decode(new f.default.Reader(e))))}ClientConnections(e){const n=d.QueryClientConnectionsRequest.encode(e).finish();const o=this.rpc.request("ibc.core.connection.v1.Query","ClientConnections",n);return o.then((e=>d.QueryClientConnectionsResponse.decode(new f.default.Reader(e))))}ConnectionClientState(e){const n=d.QueryConnectionClientStateRequest.encode(e).finish();const o=this.rpc.request("ibc.core.connection.v1.Query","ConnectionClientState",n);return o.then((e=>d.QueryConnectionClientStateResponse.decode(new f.default.Reader(e))))}ConnectionConsensusState(e){const n=d.QueryConnectionConsensusStateRequest.encode(e).finish();const o=this.rpc.request("ibc.core.connection.v1.Query","ConnectionConsensusState",n);return o.then((e=>d.QueryConnectionConsensusStateResponse.decode(new f.default.Reader(e))))}}d.QueryClientImpl=QueryClientImpl;var w=(()=>{if("undefined"!==typeof w)return w;if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof a)return a;throw"Unable to locate global object"})();const N=w.atob||(e=>w.Buffer.from(e,"base64").toString("binary"));function bytesFromBase64(e){const n=N(e);const o=new Uint8Array(n.length);for(let e=0;e<n.length;++e)o[e]=n.charCodeAt(e);return o}const Q=w.btoa||(e=>w.Buffer.from(e,"binary").toString("base64"));function base64FromBytes(e){const n=[];for(const o of e)n.push(String.fromCharCode(o));return Q(n.join(""))}if(f.default.util.Long!==l.default){f.default.util.Long=l.default;f.default.configure()}const P=d.__esModule,J=d.QueryConnectionConsensusStateResponse,j=d.QueryConnectionConsensusStateRequest,q=d.QueryConnectionClientStateResponse,U=d.QueryConnectionClientStateRequest,A=d.QueryClientConnectionsResponse,E=d.QueryClientConnectionsRequest,B=d.QueryConnectionsResponse,T=d.QueryConnectionsRequest,F=d.QueryConnectionResponse,W=d.QueryConnectionRequest,Z=d.protobufPackage;const _=d.QueryClientImpl;export{E as QueryClientConnectionsRequest,A as QueryClientConnectionsResponse,_ as QueryClientImpl,U as QueryConnectionClientStateRequest,q as QueryConnectionClientStateResponse,j as QueryConnectionConsensusStateRequest,J as QueryConnectionConsensusStateResponse,W as QueryConnectionRequest,F as QueryConnectionResponse,T as QueryConnectionsRequest,B as QueryConnectionsResponse,P as __esModule,d as default,Z as protobufPackage};

