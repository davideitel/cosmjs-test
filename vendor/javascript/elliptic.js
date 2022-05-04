import t from"../package.json.js";import"bn.js";import"minimalistic-assert";import"minimalistic-crypto-utils";import{e}from"../_/dbd5c805.js";import r from"brorand";import{e as i,a as n,_ as s}from"../_/14d6449c.js";import"inherits";import o from"hash.js";import"./elliptic/precomputed/secp256k1.js";import"hmac-drbg";import"./elliptic/ec/key.js";import"./elliptic/ec/signature.js";import a from"./elliptic/eddsa/signature.js";var c={};var u=e;var h=u.assert;var p=u.parseBytes;var d=u.cachedProperty;
/**
* @param {EDDSA} eddsa - instance
* @param {Object} params - public/private key parameters
*
* @param {Array<Byte>} [params.secret] - secret seed bytes
* @param {Point} [params.pub] - public key point (aka `A` in eddsa terms)
* @param {Array<Byte>} [params.pub] - public key point encoded as bytes
*
*/function KeyPair(t,e){this.eddsa=t;this._secret=p(e.secret);t.isPoint(e.pub)?this._pub=e.pub:this._pubBytes=p(e.pub)}KeyPair.fromPublic=function fromPublic(t,e){return e instanceof KeyPair?e:new KeyPair(t,{pub:e})};KeyPair.fromSecret=function fromSecret(t,e){return e instanceof KeyPair?e:new KeyPair(t,{secret:e})};KeyPair.prototype.secret=function secret(){return this._secret};d(KeyPair,"pubBytes",(function pubBytes(){return this.eddsa.encodePoint(this.pub())}));d(KeyPair,"pub",(function pub(){return this._pubBytes?this.eddsa.decodePoint(this._pubBytes):this.eddsa.g.mul(this.priv())}));d(KeyPair,"privBytes",(function privBytes(){var t=this.eddsa;var e=this.hash();var r=t.encodingLength-1;var i=e.slice(0,t.encodingLength);i[0]&=248;i[r]&=127;i[r]|=64;return i}));d(KeyPair,"priv",(function priv(){return this.eddsa.decodeInt(this.privBytes())}));d(KeyPair,"hash",(function hash(){return this.eddsa.hash().update(this.secret()).digest()}));d(KeyPair,"messagePrefix",(function messagePrefix(){return this.hash().slice(this.eddsa.encodingLength)}));KeyPair.prototype.sign=function sign(t){h(this._secret,"KeyPair can only verify");return this.eddsa.sign(t,this)};KeyPair.prototype.verify=function verify(t,e){return this.eddsa.verify(t,e,this)};KeyPair.prototype.getSecret=function getSecret(t){h(this._secret,"KeyPair is public only");return u.encode(this.secret(),t)};KeyPair.prototype.getPublic=function getPublic(t){return u.encode(this.pubBytes(),t)};c=KeyPair;var y=c;var v={};var m=o;var f=i;var g=e;var P=g.assert;var l=g.parseBytes;var b=y;var D=a;function EDDSA(t){P("ed25519"===t,"only tested with ed25519 so far");if(!(this instanceof EDDSA))return new EDDSA(t);t=f[t].curve;this.curve=t;this.g=t.g;this.g.precompute(t.n.bitLength()+1);this.pointClass=t.point().constructor;this.encodingLength=Math.ceil(t.n.bitLength()/8);this.hash=m.sha512}v=EDDSA;
/**
* @param {Array|String} message - message bytes
* @param {Array|String|KeyPair} secret - secret bytes or a keypair
* @returns {Signature} - signature
*/EDDSA.prototype.sign=function sign(t,e){t=l(t);var r=this.keyFromSecret(e);var i=this.hashInt(r.messagePrefix(),t);var n=this.g.mul(i);var s=this.encodePoint(n);var o=this.hashInt(s,r.pubBytes(),t).mul(r.priv());var a=i.add(o).umod(this.curve.n);return this.makeSignature({R:n,S:a,Rencoded:s})};
/**
* @param {Array} message - message bytes
* @param {Array|String|Signature} sig - sig bytes
* @param {Array|String|Point|KeyPair} pub - public key
* @returns {Boolean} - true if public key matches sig of message
*/EDDSA.prototype.verify=function verify(t,e,r){t=l(t);e=this.makeSignature(e);var i=this.keyFromPublic(r);var n=this.hashInt(e.Rencoded(),i.pubBytes(),t);var s=this.g.mul(e.S());var o=e.R().add(i.pub().mul(n));return o.eq(s)};EDDSA.prototype.hashInt=function hashInt(){var t=this.hash();for(var e=0;e<arguments.length;e++)t.update(arguments[e]);return g.intFromLE(t.digest()).umod(this.curve.n)};EDDSA.prototype.keyFromPublic=function keyFromPublic(t){return b.fromPublic(this,t)};EDDSA.prototype.keyFromSecret=function keyFromSecret(t){return b.fromSecret(this,t)};EDDSA.prototype.makeSignature=function makeSignature(t){return t instanceof D?t:new D(this,t)};EDDSA.prototype.encodePoint=function encodePoint(t){var e=t.getY().toArray("le",this.encodingLength);e[this.encodingLength-1]|=t.getX().isOdd()?128:0;return e};EDDSA.prototype.decodePoint=function decodePoint(t){t=g.parseBytes(t);var e=t.length-1;var r=t.slice(0,e).concat(-129&t[e]);var i=0!==(128&t[e]);var n=g.intFromLE(r);return this.curve.pointFromY(n,i)};EDDSA.prototype.encodeInt=function encodeInt(t){return t.toArray("le",this.encodingLength)};EDDSA.prototype.decodeInt=function decodeInt(t){return g.intFromLE(t)};EDDSA.prototype.isPoint=function isPoint(t){return t instanceof this.pointClass};var S=v;var K={};var E=K;E.version=t.version;E.utils=e;E.rand=r;E.curve=n;E.curves=i;E.ec=s;E.eddsa=S;export default K;

