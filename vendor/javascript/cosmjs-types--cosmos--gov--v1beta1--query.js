import*as o from"long";import*as e from"protobufjs/minimal";import t from"./gov.js";import a from"../../base/query/v1beta1/pagination.js";import"../../../google/protobuf/any.js";import"../../../google/protobuf/timestamp.js";import"../../../_/dbf775ab.js";import"../../base/v1beta1/coin.js";var s="default"in o?o.default:o;var r="default"in e?e.default:e;var n={};var i=n&&n.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(n,"__esModule",{value:true});n.QueryClientImpl=n.QueryTallyResultResponse=n.QueryTallyResultRequest=n.QueryDepositsResponse=n.QueryDepositsRequest=n.QueryDepositResponse=n.QueryDepositRequest=n.QueryParamsResponse=n.QueryParamsRequest=n.QueryVotesResponse=n.QueryVotesRequest=n.QueryVoteResponse=n.QueryVoteRequest=n.QueryProposalsResponse=n.QueryProposalsRequest=n.QueryProposalResponse=n.QueryProposalRequest=n.protobufPackage=void 0;const p=i(s);const l=i(r);const d=t;const u=a;n.protobufPackage="cosmos.gov.v1beta1";const c={proposalId:p.default.UZERO};n.QueryProposalRequest={encode(o,e=l.default.Writer.create()){o.proposalId.isZero()||e.uint32(8).uint64(o.proposalId);return e},decode(o,e){const t=o instanceof l.default.Reader?o:new l.default.Reader(o);let a=void 0===e?t.len:t.pos+e;const s=Object.assign({},c);while(t.pos<a){const o=t.uint32();switch(o>>>3){case 1:s.proposalId=t.uint64();break;default:t.skipType(7&o);break}}return s},fromJSON(o){const e=Object.assign({},c);e.proposalId=void 0!==o.proposalId&&null!==o.proposalId?p.default.fromString(o.proposalId):p.default.UZERO;return e},toJSON(o){const e={};void 0!==o.proposalId&&(e.proposalId=(o.proposalId||p.default.UZERO).toString());return e},fromPartial(o){const e=Object.assign({},c);e.proposalId=void 0!==o.proposalId&&null!==o.proposalId?p.default.fromValue(o.proposalId):p.default.UZERO;return e}};const v={};n.QueryProposalResponse={encode(o,e=l.default.Writer.create()){void 0!==o.proposal&&d.Proposal.encode(o.proposal,e.uint32(10).fork()).ldelim();return e},decode(o,e){const t=o instanceof l.default.Reader?o:new l.default.Reader(o);let a=void 0===e?t.len:t.pos+e;const s=Object.assign({},v);while(t.pos<a){const o=t.uint32();switch(o>>>3){case 1:s.proposal=d.Proposal.decode(t,t.uint32());break;default:t.skipType(7&o);break}}return s},fromJSON(o){const e=Object.assign({},v);e.proposal=void 0!==o.proposal&&null!==o.proposal?d.Proposal.fromJSON(o.proposal):void 0;return e},toJSON(o){const e={};void 0!==o.proposal&&(e.proposal=o.proposal?d.Proposal.toJSON(o.proposal):void 0);return e},fromPartial(o){const e=Object.assign({},v);e.proposal=void 0!==o.proposal&&null!==o.proposal?d.Proposal.fromPartial(o.proposal):void 0;return e}};const f={proposalStatus:0,voter:"",depositor:""};n.QueryProposalsRequest={encode(o,e=l.default.Writer.create()){0!==o.proposalStatus&&e.uint32(8).int32(o.proposalStatus);""!==o.voter&&e.uint32(18).string(o.voter);""!==o.depositor&&e.uint32(26).string(o.depositor);void 0!==o.pagination&&u.PageRequest.encode(o.pagination,e.uint32(34).fork()).ldelim();return e},decode(o,e){const t=o instanceof l.default.Reader?o:new l.default.Reader(o);let a=void 0===e?t.len:t.pos+e;const s=Object.assign({},f);while(t.pos<a){const o=t.uint32();switch(o>>>3){case 1:s.proposalStatus=t.int32();break;case 2:s.voter=t.string();break;case 3:s.depositor=t.string();break;case 4:s.pagination=u.PageRequest.decode(t,t.uint32());break;default:t.skipType(7&o);break}}return s},fromJSON(o){const e=Object.assign({},f);e.proposalStatus=void 0!==o.proposalStatus&&null!==o.proposalStatus?d.proposalStatusFromJSON(o.proposalStatus):0;e.voter=void 0!==o.voter&&null!==o.voter?String(o.voter):"";e.depositor=void 0!==o.depositor&&null!==o.depositor?String(o.depositor):"";e.pagination=void 0!==o.pagination&&null!==o.pagination?u.PageRequest.fromJSON(o.pagination):void 0;return e},toJSON(o){const e={};void 0!==o.proposalStatus&&(e.proposalStatus=d.proposalStatusToJSON(o.proposalStatus));void 0!==o.voter&&(e.voter=o.voter);void 0!==o.depositor&&(e.depositor=o.depositor);void 0!==o.pagination&&(e.pagination=o.pagination?u.PageRequest.toJSON(o.pagination):void 0);return e},fromPartial(o){var e,t,a;const s=Object.assign({},f);s.proposalStatus=null!==(e=o.proposalStatus)&&void 0!==e?e:0;s.voter=null!==(t=o.voter)&&void 0!==t?t:"";s.depositor=null!==(a=o.depositor)&&void 0!==a?a:"";s.pagination=void 0!==o.pagination&&null!==o.pagination?u.PageRequest.fromPartial(o.pagination):void 0;return s}};const g={};n.QueryProposalsResponse={encode(o,e=l.default.Writer.create()){for(const t of o.proposals)d.Proposal.encode(t,e.uint32(10).fork()).ldelim();void 0!==o.pagination&&u.PageResponse.encode(o.pagination,e.uint32(18).fork()).ldelim();return e},decode(o,e){const t=o instanceof l.default.Reader?o:new l.default.Reader(o);let a=void 0===e?t.len:t.pos+e;const s=Object.assign({},g);s.proposals=[];while(t.pos<a){const o=t.uint32();switch(o>>>3){case 1:s.proposals.push(d.Proposal.decode(t,t.uint32()));break;case 2:s.pagination=u.PageResponse.decode(t,t.uint32());break;default:t.skipType(7&o);break}}return s},fromJSON(o){var e;const t=Object.assign({},g);t.proposals=(null!==(e=o.proposals)&&void 0!==e?e:[]).map((o=>d.Proposal.fromJSON(o)));t.pagination=void 0!==o.pagination&&null!==o.pagination?u.PageResponse.fromJSON(o.pagination):void 0;return t},toJSON(o){const e={};o.proposals?e.proposals=o.proposals.map((o=>o?d.Proposal.toJSON(o):void 0)):e.proposals=[];void 0!==o.pagination&&(e.pagination=o.pagination?u.PageResponse.toJSON(o.pagination):void 0);return e},fromPartial(o){var e;const t=Object.assign({},g);t.proposals=(null===(e=o.proposals)||void 0===e?void 0:e.map((o=>d.Proposal.fromPartial(o))))||[];t.pagination=void 0!==o.pagination&&null!==o.pagination?u.PageResponse.fromPartial(o.pagination):void 0;return t}};const m={proposalId:p.default.UZERO,voter:""};n.QueryVoteRequest={encode(o,e=l.default.Writer.create()){o.proposalId.isZero()||e.uint32(8).uint64(o.proposalId);""!==o.voter&&e.uint32(18).string(o.voter);return e},decode(o,e){const t=o instanceof l.default.Reader?o:new l.default.Reader(o);let a=void 0===e?t.len:t.pos+e;const s=Object.assign({},m);while(t.pos<a){const o=t.uint32();switch(o>>>3){case 1:s.proposalId=t.uint64();break;case 2:s.voter=t.string();break;default:t.skipType(7&o);break}}return s},fromJSON(o){const e=Object.assign({},m);e.proposalId=void 0!==o.proposalId&&null!==o.proposalId?p.default.fromString(o.proposalId):p.default.UZERO;e.voter=void 0!==o.voter&&null!==o.voter?String(o.voter):"";return e},toJSON(o){const e={};void 0!==o.proposalId&&(e.proposalId=(o.proposalId||p.default.UZERO).toString());void 0!==o.voter&&(e.voter=o.voter);return e},fromPartial(o){var e;const t=Object.assign({},m);t.proposalId=void 0!==o.proposalId&&null!==o.proposalId?p.default.fromValue(o.proposalId):p.default.UZERO;t.voter=null!==(e=o.voter)&&void 0!==e?e:"";return t}};const R={};n.QueryVoteResponse={encode(o,e=l.default.Writer.create()){void 0!==o.vote&&d.Vote.encode(o.vote,e.uint32(10).fork()).ldelim();return e},decode(o,e){const t=o instanceof l.default.Reader?o:new l.default.Reader(o);let a=void 0===e?t.len:t.pos+e;const s=Object.assign({},R);while(t.pos<a){const o=t.uint32();switch(o>>>3){case 1:s.vote=d.Vote.decode(t,t.uint32());break;default:t.skipType(7&o);break}}return s},fromJSON(o){const e=Object.assign({},R);e.vote=void 0!==o.vote&&null!==o.vote?d.Vote.fromJSON(o.vote):void 0;return e},toJSON(o){const e={};void 0!==o.vote&&(e.vote=o.vote?d.Vote.toJSON(o.vote):void 0);return e},fromPartial(o){const e=Object.assign({},R);e.vote=void 0!==o.vote&&null!==o.vote?d.Vote.fromPartial(o.vote):void 0;return e}};const P={proposalId:p.default.UZERO};n.QueryVotesRequest={encode(o,e=l.default.Writer.create()){o.proposalId.isZero()||e.uint32(8).uint64(o.proposalId);void 0!==o.pagination&&u.PageRequest.encode(o.pagination,e.uint32(18).fork()).ldelim();return e},decode(o,e){const t=o instanceof l.default.Reader?o:new l.default.Reader(o);let a=void 0===e?t.len:t.pos+e;const s=Object.assign({},P);while(t.pos<a){const o=t.uint32();switch(o>>>3){case 1:s.proposalId=t.uint64();break;case 2:s.pagination=u.PageRequest.decode(t,t.uint32());break;default:t.skipType(7&o);break}}return s},fromJSON(o){const e=Object.assign({},P);e.proposalId=void 0!==o.proposalId&&null!==o.proposalId?p.default.fromString(o.proposalId):p.default.UZERO;e.pagination=void 0!==o.pagination&&null!==o.pagination?u.PageRequest.fromJSON(o.pagination):void 0;return e},toJSON(o){const e={};void 0!==o.proposalId&&(e.proposalId=(o.proposalId||p.default.UZERO).toString());void 0!==o.pagination&&(e.pagination=o.pagination?u.PageRequest.toJSON(o.pagination):void 0);return e},fromPartial(o){const e=Object.assign({},P);e.proposalId=void 0!==o.proposalId&&null!==o.proposalId?p.default.fromValue(o.proposalId):p.default.UZERO;e.pagination=void 0!==o.pagination&&null!==o.pagination?u.PageRequest.fromPartial(o.pagination):void 0;return e}};const y={};n.QueryVotesResponse={encode(o,e=l.default.Writer.create()){for(const t of o.votes)d.Vote.encode(t,e.uint32(10).fork()).ldelim();void 0!==o.pagination&&u.PageResponse.encode(o.pagination,e.uint32(18).fork()).ldelim();return e},decode(o,e){const t=o instanceof l.default.Reader?o:new l.default.Reader(o);let a=void 0===e?t.len:t.pos+e;const s=Object.assign({},y);s.votes=[];while(t.pos<a){const o=t.uint32();switch(o>>>3){case 1:s.votes.push(d.Vote.decode(t,t.uint32()));break;case 2:s.pagination=u.PageResponse.decode(t,t.uint32());break;default:t.skipType(7&o);break}}return s},fromJSON(o){var e;const t=Object.assign({},y);t.votes=(null!==(e=o.votes)&&void 0!==e?e:[]).map((o=>d.Vote.fromJSON(o)));t.pagination=void 0!==o.pagination&&null!==o.pagination?u.PageResponse.fromJSON(o.pagination):void 0;return t},toJSON(o){const e={};o.votes?e.votes=o.votes.map((o=>o?d.Vote.toJSON(o):void 0)):e.votes=[];void 0!==o.pagination&&(e.pagination=o.pagination?u.PageResponse.toJSON(o.pagination):void 0);return e},fromPartial(o){var e;const t=Object.assign({},y);t.votes=(null===(e=o.votes)||void 0===e?void 0:e.map((o=>d.Vote.fromPartial(o))))||[];t.pagination=void 0!==o.pagination&&null!==o.pagination?u.PageResponse.fromPartial(o.pagination):void 0;return t}};const O={paramsType:""};n.QueryParamsRequest={encode(o,e=l.default.Writer.create()){""!==o.paramsType&&e.uint32(10).string(o.paramsType);return e},decode(o,e){const t=o instanceof l.default.Reader?o:new l.default.Reader(o);let a=void 0===e?t.len:t.pos+e;const s=Object.assign({},O);while(t.pos<a){const o=t.uint32();switch(o>>>3){case 1:s.paramsType=t.string();break;default:t.skipType(7&o);break}}return s},fromJSON(o){const e=Object.assign({},O);e.paramsType=void 0!==o.paramsType&&null!==o.paramsType?String(o.paramsType):"";return e},toJSON(o){const e={};void 0!==o.paramsType&&(e.paramsType=o.paramsType);return e},fromPartial(o){var e;const t=Object.assign({},O);t.paramsType=null!==(e=o.paramsType)&&void 0!==e?e:"";return t}};const b={};n.QueryParamsResponse={encode(o,e=l.default.Writer.create()){void 0!==o.votingParams&&d.VotingParams.encode(o.votingParams,e.uint32(10).fork()).ldelim();void 0!==o.depositParams&&d.DepositParams.encode(o.depositParams,e.uint32(18).fork()).ldelim();void 0!==o.tallyParams&&d.TallyParams.encode(o.tallyParams,e.uint32(26).fork()).ldelim();return e},decode(o,e){const t=o instanceof l.default.Reader?o:new l.default.Reader(o);let a=void 0===e?t.len:t.pos+e;const s=Object.assign({},b);while(t.pos<a){const o=t.uint32();switch(o>>>3){case 1:s.votingParams=d.VotingParams.decode(t,t.uint32());break;case 2:s.depositParams=d.DepositParams.decode(t,t.uint32());break;case 3:s.tallyParams=d.TallyParams.decode(t,t.uint32());break;default:t.skipType(7&o);break}}return s},fromJSON(o){const e=Object.assign({},b);e.votingParams=void 0!==o.votingParams&&null!==o.votingParams?d.VotingParams.fromJSON(o.votingParams):void 0;e.depositParams=void 0!==o.depositParams&&null!==o.depositParams?d.DepositParams.fromJSON(o.depositParams):void 0;e.tallyParams=void 0!==o.tallyParams&&null!==o.tallyParams?d.TallyParams.fromJSON(o.tallyParams):void 0;return e},toJSON(o){const e={};void 0!==o.votingParams&&(e.votingParams=o.votingParams?d.VotingParams.toJSON(o.votingParams):void 0);void 0!==o.depositParams&&(e.depositParams=o.depositParams?d.DepositParams.toJSON(o.depositParams):void 0);void 0!==o.tallyParams&&(e.tallyParams=o.tallyParams?d.TallyParams.toJSON(o.tallyParams):void 0);return e},fromPartial(o){const e=Object.assign({},b);e.votingParams=void 0!==o.votingParams&&null!==o.votingParams?d.VotingParams.fromPartial(o.votingParams):void 0;e.depositParams=void 0!==o.depositParams&&null!==o.depositParams?d.DepositParams.fromPartial(o.depositParams):void 0;e.tallyParams=void 0!==o.tallyParams&&null!==o.tallyParams?d.TallyParams.fromPartial(o.tallyParams):void 0;return e}};const S={proposalId:p.default.UZERO,depositor:""};n.QueryDepositRequest={encode(o,e=l.default.Writer.create()){o.proposalId.isZero()||e.uint32(8).uint64(o.proposalId);""!==o.depositor&&e.uint32(18).string(o.depositor);return e},decode(o,e){const t=o instanceof l.default.Reader?o:new l.default.Reader(o);let a=void 0===e?t.len:t.pos+e;const s=Object.assign({},S);while(t.pos<a){const o=t.uint32();switch(o>>>3){case 1:s.proposalId=t.uint64();break;case 2:s.depositor=t.string();break;default:t.skipType(7&o);break}}return s},fromJSON(o){const e=Object.assign({},S);e.proposalId=void 0!==o.proposalId&&null!==o.proposalId?p.default.fromString(o.proposalId):p.default.UZERO;e.depositor=void 0!==o.depositor&&null!==o.depositor?String(o.depositor):"";return e},toJSON(o){const e={};void 0!==o.proposalId&&(e.proposalId=(o.proposalId||p.default.UZERO).toString());void 0!==o.depositor&&(e.depositor=o.depositor);return e},fromPartial(o){var e;const t=Object.assign({},S);t.proposalId=void 0!==o.proposalId&&null!==o.proposalId?p.default.fromValue(o.proposalId):p.default.UZERO;t.depositor=null!==(e=o.depositor)&&void 0!==e?e:"";return t}};const I={};n.QueryDepositResponse={encode(o,e=l.default.Writer.create()){void 0!==o.deposit&&d.Deposit.encode(o.deposit,e.uint32(10).fork()).ldelim();return e},decode(o,e){const t=o instanceof l.default.Reader?o:new l.default.Reader(o);let a=void 0===e?t.len:t.pos+e;const s=Object.assign({},I);while(t.pos<a){const o=t.uint32();switch(o>>>3){case 1:s.deposit=d.Deposit.decode(t,t.uint32());break;default:t.skipType(7&o);break}}return s},fromJSON(o){const e=Object.assign({},I);e.deposit=void 0!==o.deposit&&null!==o.deposit?d.Deposit.fromJSON(o.deposit):void 0;return e},toJSON(o){const e={};void 0!==o.deposit&&(e.deposit=o.deposit?d.Deposit.toJSON(o.deposit):void 0);return e},fromPartial(o){const e=Object.assign({},I);e.deposit=void 0!==o.deposit&&null!==o.deposit?d.Deposit.fromPartial(o.deposit):void 0;return e}};const h={proposalId:p.default.UZERO};n.QueryDepositsRequest={encode(o,e=l.default.Writer.create()){o.proposalId.isZero()||e.uint32(8).uint64(o.proposalId);void 0!==o.pagination&&u.PageRequest.encode(o.pagination,e.uint32(18).fork()).ldelim();return e},decode(o,e){const t=o instanceof l.default.Reader?o:new l.default.Reader(o);let a=void 0===e?t.len:t.pos+e;const s=Object.assign({},h);while(t.pos<a){const o=t.uint32();switch(o>>>3){case 1:s.proposalId=t.uint64();break;case 2:s.pagination=u.PageRequest.decode(t,t.uint32());break;default:t.skipType(7&o);break}}return s},fromJSON(o){const e=Object.assign({},h);e.proposalId=void 0!==o.proposalId&&null!==o.proposalId?p.default.fromString(o.proposalId):p.default.UZERO;e.pagination=void 0!==o.pagination&&null!==o.pagination?u.PageRequest.fromJSON(o.pagination):void 0;return e},toJSON(o){const e={};void 0!==o.proposalId&&(e.proposalId=(o.proposalId||p.default.UZERO).toString());void 0!==o.pagination&&(e.pagination=o.pagination?u.PageRequest.toJSON(o.pagination):void 0);return e},fromPartial(o){const e=Object.assign({},h);e.proposalId=void 0!==o.proposalId&&null!==o.proposalId?p.default.fromValue(o.proposalId):p.default.UZERO;e.pagination=void 0!==o.pagination&&null!==o.pagination?u.PageRequest.fromPartial(o.pagination):void 0;return e}};const k={};n.QueryDepositsResponse={encode(o,e=l.default.Writer.create()){for(const t of o.deposits)d.Deposit.encode(t,e.uint32(10).fork()).ldelim();void 0!==o.pagination&&u.PageResponse.encode(o.pagination,e.uint32(18).fork()).ldelim();return e},decode(o,e){const t=o instanceof l.default.Reader?o:new l.default.Reader(o);let a=void 0===e?t.len:t.pos+e;const s=Object.assign({},k);s.deposits=[];while(t.pos<a){const o=t.uint32();switch(o>>>3){case 1:s.deposits.push(d.Deposit.decode(t,t.uint32()));break;case 2:s.pagination=u.PageResponse.decode(t,t.uint32());break;default:t.skipType(7&o);break}}return s},fromJSON(o){var e;const t=Object.assign({},k);t.deposits=(null!==(e=o.deposits)&&void 0!==e?e:[]).map((o=>d.Deposit.fromJSON(o)));t.pagination=void 0!==o.pagination&&null!==o.pagination?u.PageResponse.fromJSON(o.pagination):void 0;return t},toJSON(o){const e={};o.deposits?e.deposits=o.deposits.map((o=>o?d.Deposit.toJSON(o):void 0)):e.deposits=[];void 0!==o.pagination&&(e.pagination=o.pagination?u.PageResponse.toJSON(o.pagination):void 0);return e},fromPartial(o){var e;const t=Object.assign({},k);t.deposits=(null===(e=o.deposits)||void 0===e?void 0:e.map((o=>d.Deposit.fromPartial(o))))||[];t.pagination=void 0!==o.pagination&&null!==o.pagination?u.PageResponse.fromPartial(o.pagination):void 0;return t}};const Q={proposalId:p.default.UZERO};n.QueryTallyResultRequest={encode(o,e=l.default.Writer.create()){o.proposalId.isZero()||e.uint32(8).uint64(o.proposalId);return e},decode(o,e){const t=o instanceof l.default.Reader?o:new l.default.Reader(o);let a=void 0===e?t.len:t.pos+e;const s=Object.assign({},Q);while(t.pos<a){const o=t.uint32();switch(o>>>3){case 1:s.proposalId=t.uint64();break;default:t.skipType(7&o);break}}return s},fromJSON(o){const e=Object.assign({},Q);e.proposalId=void 0!==o.proposalId&&null!==o.proposalId?p.default.fromString(o.proposalId):p.default.UZERO;return e},toJSON(o){const e={};void 0!==o.proposalId&&(e.proposalId=(o.proposalId||p.default.UZERO).toString());return e},fromPartial(o){const e=Object.assign({},Q);e.proposalId=void 0!==o.proposalId&&null!==o.proposalId?p.default.fromValue(o.proposalId):p.default.UZERO;return e}};const J={};n.QueryTallyResultResponse={encode(o,e=l.default.Writer.create()){void 0!==o.tally&&d.TallyResult.encode(o.tally,e.uint32(10).fork()).ldelim();return e},decode(o,e){const t=o instanceof l.default.Reader?o:new l.default.Reader(o);let a=void 0===e?t.len:t.pos+e;const s=Object.assign({},J);while(t.pos<a){const o=t.uint32();switch(o>>>3){case 1:s.tally=d.TallyResult.decode(t,t.uint32());break;default:t.skipType(7&o);break}}return s},fromJSON(o){const e=Object.assign({},J);e.tally=void 0!==o.tally&&null!==o.tally?d.TallyResult.fromJSON(o.tally):void 0;return e},toJSON(o){const e={};void 0!==o.tally&&(e.tally=o.tally?d.TallyResult.toJSON(o.tally):void 0);return e},fromPartial(o){const e=Object.assign({},J);e.tally=void 0!==o.tally&&null!==o.tally?d.TallyResult.fromPartial(o.tally):void 0;return e}};class QueryClientImpl{constructor(o){this.rpc=o;this.Proposal=this.Proposal.bind(this);this.Proposals=this.Proposals.bind(this);this.Vote=this.Vote.bind(this);this.Votes=this.Votes.bind(this);this.Params=this.Params.bind(this);this.Deposit=this.Deposit.bind(this);this.Deposits=this.Deposits.bind(this);this.TallyResult=this.TallyResult.bind(this)}Proposal(o){const e=n.QueryProposalRequest.encode(o).finish();const t=this.rpc.request("cosmos.gov.v1beta1.Query","Proposal",e);return t.then((o=>n.QueryProposalResponse.decode(new l.default.Reader(o))))}Proposals(o){const e=n.QueryProposalsRequest.encode(o).finish();const t=this.rpc.request("cosmos.gov.v1beta1.Query","Proposals",e);return t.then((o=>n.QueryProposalsResponse.decode(new l.default.Reader(o))))}Vote(o){const e=n.QueryVoteRequest.encode(o).finish();const t=this.rpc.request("cosmos.gov.v1beta1.Query","Vote",e);return t.then((o=>n.QueryVoteResponse.decode(new l.default.Reader(o))))}Votes(o){const e=n.QueryVotesRequest.encode(o).finish();const t=this.rpc.request("cosmos.gov.v1beta1.Query","Votes",e);return t.then((o=>n.QueryVotesResponse.decode(new l.default.Reader(o))))}Params(o){const e=n.QueryParamsRequest.encode(o).finish();const t=this.rpc.request("cosmos.gov.v1beta1.Query","Params",e);return t.then((o=>n.QueryParamsResponse.decode(new l.default.Reader(o))))}Deposit(o){const e=n.QueryDepositRequest.encode(o).finish();const t=this.rpc.request("cosmos.gov.v1beta1.Query","Deposit",e);return t.then((o=>n.QueryDepositResponse.decode(new l.default.Reader(o))))}Deposits(o){const e=n.QueryDepositsRequest.encode(o).finish();const t=this.rpc.request("cosmos.gov.v1beta1.Query","Deposits",e);return t.then((o=>n.QueryDepositsResponse.decode(new l.default.Reader(o))))}TallyResult(o){const e=n.QueryTallyResultRequest.encode(o).finish();const t=this.rpc.request("cosmos.gov.v1beta1.Query","TallyResult",e);return t.then((o=>n.QueryTallyResultResponse.decode(new l.default.Reader(o))))}}n.QueryClientImpl=QueryClientImpl;if(l.default.util.Long!==p.default){l.default.util.Long=p.default;l.default.configure()}const N=n.__esModule,j=n.QueryTallyResultResponse,q=n.QueryTallyResultRequest,w=n.QueryDepositsResponse,T=n.QueryDepositsRequest,V=n.QueryDepositResponse,D=n.QueryDepositRequest,Z=n.QueryParamsResponse,E=n.QueryParamsRequest,U=n.QueryVotesResponse,W=n.QueryVotesRequest,_=n.QueryVoteResponse,C=n.QueryVoteRequest,M=n.QueryProposalsResponse,L=n.QueryProposalsRequest,x=n.QueryProposalResponse,F=n.QueryProposalRequest,z=n.protobufPackage;const A=n.QueryClientImpl;export{A as QueryClientImpl,D as QueryDepositRequest,V as QueryDepositResponse,T as QueryDepositsRequest,w as QueryDepositsResponse,E as QueryParamsRequest,Z as QueryParamsResponse,F as QueryProposalRequest,x as QueryProposalResponse,L as QueryProposalsRequest,M as QueryProposalsResponse,q as QueryTallyResultRequest,j as QueryTallyResultResponse,C as QueryVoteRequest,_ as QueryVoteResponse,W as QueryVotesRequest,U as QueryVotesResponse,N as __esModule,n as default,z as protobufPackage};
