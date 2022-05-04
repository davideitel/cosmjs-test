import*as e from"protobufjs/minimal";import*as t from"@noble/hashes/ripemd160";import*as r from"@noble/hashes/sha256";import*as n from"@noble/hashes/sha512";var o="default"in e?e.default:e;var i={};var s=o;var c=s.Reader,a=s.Writer,f=s.util;var l=s.roots.default||(s.roots.default={});l.ics23=function(){var e={};e.HashOp=function(){var e={},t=Object.create(e);t[e[0]="NO_HASH"]=0;t[e[1]="SHA256"]=1;t[e[2]="SHA512"]=2;t[e[3]="KECCAK"]=3;t[e[4]="RIPEMD160"]=4;t[e[5]="BITCOIN"]=5;t[e[6]="SHA512_256"]=6;return t}();e.LengthOp=function(){var e={},t=Object.create(e);t[e[0]="NO_PREFIX"]=0;t[e[1]="VAR_PROTO"]=1;t[e[2]="VAR_RLP"]=2;t[e[3]="FIXED32_BIG"]=3;t[e[4]="FIXED32_LITTLE"]=4;t[e[5]="FIXED64_BIG"]=5;t[e[6]="FIXED64_LITTLE"]=6;t[e[7]="REQUIRE_32_BYTES"]=7;t[e[8]="REQUIRE_64_BYTES"]=8;return t}();e.ExistenceProof=function(){
/**
     * Constructs a new ExistenceProof.
     * @memberof ics23
     * @classdesc ExistenceProof takes a key and a value and a set of steps to perform on it.
     * The result of peforming all these steps will provide a "root hash", which can
     * be compared to the value in a header.
     * 
     * Since it is computationally infeasible to produce a hash collission for any of the used
     * cryptographic hash functions, if someone can provide a series of operations to transform
     * a given key and value into a root hash that matches some trusted root, these key and values
     * must be in the referenced merkle tree.
     * 
     * The only possible issue is maliablity in LeafOp, such as providing extra prefix data,
     * which should be controlled by a spec. Eg. with lengthOp as NONE,
     * prefix = FOO, key = BAR, value = CHOICE
     * and
     * prefix = F, key = OOBAR, value = CHOICE
     * would produce the same value.
     * 
     * With LengthOp this is tricker but not impossible. Which is why the "leafPrefixEqual" field
     * in the ProofSpec is valuable to prevent this mutability. And why all trees should
     * length-prefix the data before hashing it.
     * @implements IExistenceProof
     * @constructor
     * @param {ics23.IExistenceProof=} [properties] Properties to set
     */
function ExistenceProof(e){this.path=[];if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}ExistenceProof.prototype.key=f.newBuffer([]);ExistenceProof.prototype.value=f.newBuffer([]);ExistenceProof.prototype.leaf=null;ExistenceProof.prototype.path=f.emptyArray;
/**
     * Creates a new ExistenceProof instance using the specified properties.
     * @function create
     * @memberof ics23.ExistenceProof
     * @static
     * @param {ics23.IExistenceProof=} [properties] Properties to set
     * @returns {ics23.ExistenceProof} ExistenceProof instance
     */ExistenceProof.create=function create(e){return new ExistenceProof(e)};
/**
     * Encodes the specified ExistenceProof message. Does not implicitly {@link ics23.ExistenceProof.verify|verify} messages.
     * @function encode
     * @memberof ics23.ExistenceProof
     * @static
     * @param {ics23.IExistenceProof} message ExistenceProof message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */ExistenceProof.encode=function encode(e,t){t||(t=a.create());null!=e.key&&e.hasOwnProperty("key")&&t.uint32(10).bytes(e.key);null!=e.value&&e.hasOwnProperty("value")&&t.uint32(18).bytes(e.value);null!=e.leaf&&e.hasOwnProperty("leaf")&&l.ics23.LeafOp.encode(e.leaf,t.uint32(26).fork()).ldelim();if(null!=e.path&&e.path.length)for(var r=0;r<e.path.length;++r)l.ics23.InnerOp.encode(e.path[r],t.uint32(34).fork()).ldelim();return t};
/**
     * Encodes the specified ExistenceProof message, length delimited. Does not implicitly {@link ics23.ExistenceProof.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ics23.ExistenceProof
     * @static
     * @param {ics23.IExistenceProof} message ExistenceProof message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */ExistenceProof.encodeDelimited=function encodeDelimited(e,t){return this.encode(e,t).ldelim()};
/**
     * Decodes an ExistenceProof message from the specified reader or buffer.
     * @function decode
     * @memberof ics23.ExistenceProof
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ics23.ExistenceProof} ExistenceProof
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */ExistenceProof.decode=function decode(e,t){e instanceof c||(e=c.create(e));var r=void 0===t?e.len:e.pos+t,n=new l.ics23.ExistenceProof;while(e.pos<r){var o=e.uint32();switch(o>>>3){case 1:n.key=e.bytes();break;case 2:n.value=e.bytes();break;case 3:n.leaf=l.ics23.LeafOp.decode(e,e.uint32());break;case 4:n.path&&n.path.length||(n.path=[]);n.path.push(l.ics23.InnerOp.decode(e,e.uint32()));break;default:e.skipType(7&o);break}}return n};
/**
     * Decodes an ExistenceProof message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ics23.ExistenceProof
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ics23.ExistenceProof} ExistenceProof
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */ExistenceProof.decodeDelimited=function decodeDelimited(e){e instanceof c||(e=new c(e));return this.decode(e,e.uint32())};
/**
     * Verifies an ExistenceProof message.
     * @function verify
     * @memberof ics23.ExistenceProof
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */ExistenceProof.verify=function verify(e){if("object"!==typeof e||null===e)return"object expected";if(null!=e.key&&e.hasOwnProperty("key")&&!(e.key&&"number"===typeof e.key.length||f.isString(e.key)))return"key: buffer expected";if(null!=e.value&&e.hasOwnProperty("value")&&!(e.value&&"number"===typeof e.value.length||f.isString(e.value)))return"value: buffer expected";if(null!=e.leaf&&e.hasOwnProperty("leaf")){var t=l.ics23.LeafOp.verify(e.leaf);if(t)return"leaf."+t}if(null!=e.path&&e.hasOwnProperty("path")){if(!Array.isArray(e.path))return"path: array expected";for(var r=0;r<e.path.length;++r){t=l.ics23.InnerOp.verify(e.path[r]);if(t)return"path."+t}}return null};
/**
     * Creates an ExistenceProof message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ics23.ExistenceProof
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ics23.ExistenceProof} ExistenceProof
     */ExistenceProof.fromObject=function fromObject(e){if(e instanceof l.ics23.ExistenceProof)return e;var t=new l.ics23.ExistenceProof;null!=e.key&&("string"===typeof e.key?f.base64.decode(e.key,t.key=f.newBuffer(f.base64.length(e.key)),0):e.key.length&&(t.key=e.key));null!=e.value&&("string"===typeof e.value?f.base64.decode(e.value,t.value=f.newBuffer(f.base64.length(e.value)),0):e.value.length&&(t.value=e.value));if(null!=e.leaf){if("object"!==typeof e.leaf)throw TypeError(".ics23.ExistenceProof.leaf: object expected");t.leaf=l.ics23.LeafOp.fromObject(e.leaf)}if(e.path){if(!Array.isArray(e.path))throw TypeError(".ics23.ExistenceProof.path: array expected");t.path=[];for(var r=0;r<e.path.length;++r){if("object"!==typeof e.path[r])throw TypeError(".ics23.ExistenceProof.path: object expected");t.path[r]=l.ics23.InnerOp.fromObject(e.path[r])}}return t};
/**
     * Creates a plain object from an ExistenceProof message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ics23.ExistenceProof
     * @static
     * @param {ics23.ExistenceProof} message ExistenceProof
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */ExistenceProof.toObject=function toObject(e,t){t||(t={});var r={};(t.arrays||t.defaults)&&(r.path=[]);if(t.defaults){if(t.bytes===String)r.key="";else{r.key=[];t.bytes!==Array&&(r.key=f.newBuffer(r.key))}if(t.bytes===String)r.value="";else{r.value=[];t.bytes!==Array&&(r.value=f.newBuffer(r.value))}r.leaf=null}null!=e.key&&e.hasOwnProperty("key")&&(r.key=t.bytes===String?f.base64.encode(e.key,0,e.key.length):t.bytes===Array?Array.prototype.slice.call(e.key):e.key);null!=e.value&&e.hasOwnProperty("value")&&(r.value=t.bytes===String?f.base64.encode(e.value,0,e.value.length):t.bytes===Array?Array.prototype.slice.call(e.value):e.value);null!=e.leaf&&e.hasOwnProperty("leaf")&&(r.leaf=l.ics23.LeafOp.toObject(e.leaf,t));if(e.path&&e.path.length){r.path=[];for(var n=0;n<e.path.length;++n)r.path[n]=l.ics23.InnerOp.toObject(e.path[n],t)}return r};
/**
     * Converts this ExistenceProof to JSON.
     * @function toJSON
     * @memberof ics23.ExistenceProof
     * @instance
     * @returns {Object.<string,*>} JSON object
     */ExistenceProof.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,s.util.toJSONOptions)};return ExistenceProof}();e.NonExistenceProof=function(){
/**
     * Constructs a new NonExistenceProof.
     * @memberof ics23
     * @classdesc Represents a NonExistenceProof.
     * @implements INonExistenceProof
     * @constructor
     * @param {ics23.INonExistenceProof=} [properties] Properties to set
     */
function NonExistenceProof(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}NonExistenceProof.prototype.key=f.newBuffer([]);NonExistenceProof.prototype.left=null;NonExistenceProof.prototype.right=null;
/**
     * Creates a new NonExistenceProof instance using the specified properties.
     * @function create
     * @memberof ics23.NonExistenceProof
     * @static
     * @param {ics23.INonExistenceProof=} [properties] Properties to set
     * @returns {ics23.NonExistenceProof} NonExistenceProof instance
     */NonExistenceProof.create=function create(e){return new NonExistenceProof(e)};
/**
     * Encodes the specified NonExistenceProof message. Does not implicitly {@link ics23.NonExistenceProof.verify|verify} messages.
     * @function encode
     * @memberof ics23.NonExistenceProof
     * @static
     * @param {ics23.INonExistenceProof} message NonExistenceProof message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */NonExistenceProof.encode=function encode(e,t){t||(t=a.create());null!=e.key&&e.hasOwnProperty("key")&&t.uint32(10).bytes(e.key);null!=e.left&&e.hasOwnProperty("left")&&l.ics23.ExistenceProof.encode(e.left,t.uint32(18).fork()).ldelim();null!=e.right&&e.hasOwnProperty("right")&&l.ics23.ExistenceProof.encode(e.right,t.uint32(26).fork()).ldelim();return t};
/**
     * Encodes the specified NonExistenceProof message, length delimited. Does not implicitly {@link ics23.NonExistenceProof.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ics23.NonExistenceProof
     * @static
     * @param {ics23.INonExistenceProof} message NonExistenceProof message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */NonExistenceProof.encodeDelimited=function encodeDelimited(e,t){return this.encode(e,t).ldelim()};
/**
     * Decodes a NonExistenceProof message from the specified reader or buffer.
     * @function decode
     * @memberof ics23.NonExistenceProof
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ics23.NonExistenceProof} NonExistenceProof
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */NonExistenceProof.decode=function decode(e,t){e instanceof c||(e=c.create(e));var r=void 0===t?e.len:e.pos+t,n=new l.ics23.NonExistenceProof;while(e.pos<r){var o=e.uint32();switch(o>>>3){case 1:n.key=e.bytes();break;case 2:n.left=l.ics23.ExistenceProof.decode(e,e.uint32());break;case 3:n.right=l.ics23.ExistenceProof.decode(e,e.uint32());break;default:e.skipType(7&o);break}}return n};
/**
     * Decodes a NonExistenceProof message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ics23.NonExistenceProof
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ics23.NonExistenceProof} NonExistenceProof
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */NonExistenceProof.decodeDelimited=function decodeDelimited(e){e instanceof c||(e=new c(e));return this.decode(e,e.uint32())};
/**
     * Verifies a NonExistenceProof message.
     * @function verify
     * @memberof ics23.NonExistenceProof
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */NonExistenceProof.verify=function verify(e){if("object"!==typeof e||null===e)return"object expected";if(null!=e.key&&e.hasOwnProperty("key")&&!(e.key&&"number"===typeof e.key.length||f.isString(e.key)))return"key: buffer expected";if(null!=e.left&&e.hasOwnProperty("left")){var t=l.ics23.ExistenceProof.verify(e.left);if(t)return"left."+t}if(null!=e.right&&e.hasOwnProperty("right")){t=l.ics23.ExistenceProof.verify(e.right);if(t)return"right."+t}return null};
/**
     * Creates a NonExistenceProof message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ics23.NonExistenceProof
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ics23.NonExistenceProof} NonExistenceProof
     */NonExistenceProof.fromObject=function fromObject(e){if(e instanceof l.ics23.NonExistenceProof)return e;var t=new l.ics23.NonExistenceProof;null!=e.key&&("string"===typeof e.key?f.base64.decode(e.key,t.key=f.newBuffer(f.base64.length(e.key)),0):e.key.length&&(t.key=e.key));if(null!=e.left){if("object"!==typeof e.left)throw TypeError(".ics23.NonExistenceProof.left: object expected");t.left=l.ics23.ExistenceProof.fromObject(e.left)}if(null!=e.right){if("object"!==typeof e.right)throw TypeError(".ics23.NonExistenceProof.right: object expected");t.right=l.ics23.ExistenceProof.fromObject(e.right)}return t};
/**
     * Creates a plain object from a NonExistenceProof message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ics23.NonExistenceProof
     * @static
     * @param {ics23.NonExistenceProof} message NonExistenceProof
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */NonExistenceProof.toObject=function toObject(e,t){t||(t={});var r={};if(t.defaults){if(t.bytes===String)r.key="";else{r.key=[];t.bytes!==Array&&(r.key=f.newBuffer(r.key))}r.left=null;r.right=null}null!=e.key&&e.hasOwnProperty("key")&&(r.key=t.bytes===String?f.base64.encode(e.key,0,e.key.length):t.bytes===Array?Array.prototype.slice.call(e.key):e.key);null!=e.left&&e.hasOwnProperty("left")&&(r.left=l.ics23.ExistenceProof.toObject(e.left,t));null!=e.right&&e.hasOwnProperty("right")&&(r.right=l.ics23.ExistenceProof.toObject(e.right,t));return r};
/**
     * Converts this NonExistenceProof to JSON.
     * @function toJSON
     * @memberof ics23.NonExistenceProof
     * @instance
     * @returns {Object.<string,*>} JSON object
     */NonExistenceProof.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,s.util.toJSONOptions)};return NonExistenceProof}();e.CommitmentProof=function(){
/**
     * Constructs a new CommitmentProof.
     * @memberof ics23
     * @classdesc Represents a CommitmentProof.
     * @implements ICommitmentProof
     * @constructor
     * @param {ics23.ICommitmentProof=} [properties] Properties to set
     */
function CommitmentProof(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}CommitmentProof.prototype.exist=null;CommitmentProof.prototype.nonexist=null;CommitmentProof.prototype.batch=null;CommitmentProof.prototype.compressed=null;var e;Object.defineProperty(CommitmentProof.prototype,"proof",{get:f.oneOfGetter(e=["exist","nonexist","batch","compressed"]),set:f.oneOfSetter(e)});
/**
     * Creates a new CommitmentProof instance using the specified properties.
     * @function create
     * @memberof ics23.CommitmentProof
     * @static
     * @param {ics23.ICommitmentProof=} [properties] Properties to set
     * @returns {ics23.CommitmentProof} CommitmentProof instance
     */CommitmentProof.create=function create(e){return new CommitmentProof(e)};
/**
     * Encodes the specified CommitmentProof message. Does not implicitly {@link ics23.CommitmentProof.verify|verify} messages.
     * @function encode
     * @memberof ics23.CommitmentProof
     * @static
     * @param {ics23.ICommitmentProof} message CommitmentProof message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */CommitmentProof.encode=function encode(e,t){t||(t=a.create());null!=e.exist&&e.hasOwnProperty("exist")&&l.ics23.ExistenceProof.encode(e.exist,t.uint32(10).fork()).ldelim();null!=e.nonexist&&e.hasOwnProperty("nonexist")&&l.ics23.NonExistenceProof.encode(e.nonexist,t.uint32(18).fork()).ldelim();null!=e.batch&&e.hasOwnProperty("batch")&&l.ics23.BatchProof.encode(e.batch,t.uint32(26).fork()).ldelim();null!=e.compressed&&e.hasOwnProperty("compressed")&&l.ics23.CompressedBatchProof.encode(e.compressed,t.uint32(34).fork()).ldelim();return t};
/**
     * Encodes the specified CommitmentProof message, length delimited. Does not implicitly {@link ics23.CommitmentProof.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ics23.CommitmentProof
     * @static
     * @param {ics23.ICommitmentProof} message CommitmentProof message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */CommitmentProof.encodeDelimited=function encodeDelimited(e,t){return this.encode(e,t).ldelim()};
/**
     * Decodes a CommitmentProof message from the specified reader or buffer.
     * @function decode
     * @memberof ics23.CommitmentProof
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ics23.CommitmentProof} CommitmentProof
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */CommitmentProof.decode=function decode(e,t){e instanceof c||(e=c.create(e));var r=void 0===t?e.len:e.pos+t,n=new l.ics23.CommitmentProof;while(e.pos<r){var o=e.uint32();switch(o>>>3){case 1:n.exist=l.ics23.ExistenceProof.decode(e,e.uint32());break;case 2:n.nonexist=l.ics23.NonExistenceProof.decode(e,e.uint32());break;case 3:n.batch=l.ics23.BatchProof.decode(e,e.uint32());break;case 4:n.compressed=l.ics23.CompressedBatchProof.decode(e,e.uint32());break;default:e.skipType(7&o);break}}return n};
/**
     * Decodes a CommitmentProof message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ics23.CommitmentProof
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ics23.CommitmentProof} CommitmentProof
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */CommitmentProof.decodeDelimited=function decodeDelimited(e){e instanceof c||(e=new c(e));return this.decode(e,e.uint32())};
/**
     * Verifies a CommitmentProof message.
     * @function verify
     * @memberof ics23.CommitmentProof
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */CommitmentProof.verify=function verify(e){if("object"!==typeof e||null===e)return"object expected";var t={};if(null!=e.exist&&e.hasOwnProperty("exist")){t.proof=1;var r=l.ics23.ExistenceProof.verify(e.exist);if(r)return"exist."+r}if(null!=e.nonexist&&e.hasOwnProperty("nonexist")){if(1===t.proof)return"proof: multiple values";t.proof=1;r=l.ics23.NonExistenceProof.verify(e.nonexist);if(r)return"nonexist."+r}if(null!=e.batch&&e.hasOwnProperty("batch")){if(1===t.proof)return"proof: multiple values";t.proof=1;r=l.ics23.BatchProof.verify(e.batch);if(r)return"batch."+r}if(null!=e.compressed&&e.hasOwnProperty("compressed")){if(1===t.proof)return"proof: multiple values";t.proof=1;r=l.ics23.CompressedBatchProof.verify(e.compressed);if(r)return"compressed."+r}return null};
/**
     * Creates a CommitmentProof message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ics23.CommitmentProof
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ics23.CommitmentProof} CommitmentProof
     */CommitmentProof.fromObject=function fromObject(e){if(e instanceof l.ics23.CommitmentProof)return e;var t=new l.ics23.CommitmentProof;if(null!=e.exist){if("object"!==typeof e.exist)throw TypeError(".ics23.CommitmentProof.exist: object expected");t.exist=l.ics23.ExistenceProof.fromObject(e.exist)}if(null!=e.nonexist){if("object"!==typeof e.nonexist)throw TypeError(".ics23.CommitmentProof.nonexist: object expected");t.nonexist=l.ics23.NonExistenceProof.fromObject(e.nonexist)}if(null!=e.batch){if("object"!==typeof e.batch)throw TypeError(".ics23.CommitmentProof.batch: object expected");t.batch=l.ics23.BatchProof.fromObject(e.batch)}if(null!=e.compressed){if("object"!==typeof e.compressed)throw TypeError(".ics23.CommitmentProof.compressed: object expected");t.compressed=l.ics23.CompressedBatchProof.fromObject(e.compressed)}return t};
/**
     * Creates a plain object from a CommitmentProof message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ics23.CommitmentProof
     * @static
     * @param {ics23.CommitmentProof} message CommitmentProof
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */CommitmentProof.toObject=function toObject(e,t){t||(t={});var r={};if(null!=e.exist&&e.hasOwnProperty("exist")){r.exist=l.ics23.ExistenceProof.toObject(e.exist,t);t.oneofs&&(r.proof="exist")}if(null!=e.nonexist&&e.hasOwnProperty("nonexist")){r.nonexist=l.ics23.NonExistenceProof.toObject(e.nonexist,t);t.oneofs&&(r.proof="nonexist")}if(null!=e.batch&&e.hasOwnProperty("batch")){r.batch=l.ics23.BatchProof.toObject(e.batch,t);t.oneofs&&(r.proof="batch")}if(null!=e.compressed&&e.hasOwnProperty("compressed")){r.compressed=l.ics23.CompressedBatchProof.toObject(e.compressed,t);t.oneofs&&(r.proof="compressed")}return r};
/**
     * Converts this CommitmentProof to JSON.
     * @function toJSON
     * @memberof ics23.CommitmentProof
     * @instance
     * @returns {Object.<string,*>} JSON object
     */CommitmentProof.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,s.util.toJSONOptions)};return CommitmentProof}();e.LeafOp=function(){
/**
     * Constructs a new LeafOp.
     * @memberof ics23
     * @classdesc LeafOp represents the raw key-value data we wish to prove, and
     * must be flexible to represent the internal transformation from
     * the original key-value pairs into the basis hash, for many existing
     * merkle trees.
     * 
     * key and value are passed in. So that the signature of this operation is:
     * leafOp(key, value) -> output
     * 
     * To process this, first prehash the keys and values if needed (ANY means no hash in this case):
     * hkey = prehashKey(key)
     * hvalue = prehashValue(value)
     * 
     * Then combine the bytes, and hash it
     * output = hash(prefix || length(hkey) || hkey || length(hvalue) || hvalue)
     * @implements ILeafOp
     * @constructor
     * @param {ics23.ILeafOp=} [properties] Properties to set
     */
function LeafOp(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}LeafOp.prototype.hash=0;LeafOp.prototype.prehashKey=0;LeafOp.prototype.prehashValue=0;LeafOp.prototype.length=0;LeafOp.prototype.prefix=f.newBuffer([]);
/**
     * Creates a new LeafOp instance using the specified properties.
     * @function create
     * @memberof ics23.LeafOp
     * @static
     * @param {ics23.ILeafOp=} [properties] Properties to set
     * @returns {ics23.LeafOp} LeafOp instance
     */LeafOp.create=function create(e){return new LeafOp(e)};
/**
     * Encodes the specified LeafOp message. Does not implicitly {@link ics23.LeafOp.verify|verify} messages.
     * @function encode
     * @memberof ics23.LeafOp
     * @static
     * @param {ics23.ILeafOp} message LeafOp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */LeafOp.encode=function encode(e,t){t||(t=a.create());null!=e.hash&&e.hasOwnProperty("hash")&&t.uint32(8).int32(e.hash);null!=e.prehashKey&&e.hasOwnProperty("prehashKey")&&t.uint32(16).int32(e.prehashKey);null!=e.prehashValue&&e.hasOwnProperty("prehashValue")&&t.uint32(24).int32(e.prehashValue);null!=e.length&&e.hasOwnProperty("length")&&t.uint32(32).int32(e.length);null!=e.prefix&&e.hasOwnProperty("prefix")&&t.uint32(42).bytes(e.prefix);return t};
/**
     * Encodes the specified LeafOp message, length delimited. Does not implicitly {@link ics23.LeafOp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ics23.LeafOp
     * @static
     * @param {ics23.ILeafOp} message LeafOp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */LeafOp.encodeDelimited=function encodeDelimited(e,t){return this.encode(e,t).ldelim()};
/**
     * Decodes a LeafOp message from the specified reader or buffer.
     * @function decode
     * @memberof ics23.LeafOp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ics23.LeafOp} LeafOp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */LeafOp.decode=function decode(e,t){e instanceof c||(e=c.create(e));var r=void 0===t?e.len:e.pos+t,n=new l.ics23.LeafOp;while(e.pos<r){var o=e.uint32();switch(o>>>3){case 1:n.hash=e.int32();break;case 2:n.prehashKey=e.int32();break;case 3:n.prehashValue=e.int32();break;case 4:n.length=e.int32();break;case 5:n.prefix=e.bytes();break;default:e.skipType(7&o);break}}return n};
/**
     * Decodes a LeafOp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ics23.LeafOp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ics23.LeafOp} LeafOp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */LeafOp.decodeDelimited=function decodeDelimited(e){e instanceof c||(e=new c(e));return this.decode(e,e.uint32())};
/**
     * Verifies a LeafOp message.
     * @function verify
     * @memberof ics23.LeafOp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */LeafOp.verify=function verify(e){if("object"!==typeof e||null===e)return"object expected";if(null!=e.hash&&e.hasOwnProperty("hash"))switch(e.hash){default:return"hash: enum value expected";case 0:case 1:case 2:case 3:case 4:case 5:case 6:break}if(null!=e.prehashKey&&e.hasOwnProperty("prehashKey"))switch(e.prehashKey){default:return"prehashKey: enum value expected";case 0:case 1:case 2:case 3:case 4:case 5:case 6:break}if(null!=e.prehashValue&&e.hasOwnProperty("prehashValue"))switch(e.prehashValue){default:return"prehashValue: enum value expected";case 0:case 1:case 2:case 3:case 4:case 5:case 6:break}if(null!=e.length&&e.hasOwnProperty("length"))switch(e.length){default:return"length: enum value expected";case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:break}return null!=e.prefix&&e.hasOwnProperty("prefix")&&!(e.prefix&&"number"===typeof e.prefix.length||f.isString(e.prefix))?"prefix: buffer expected":null};
/**
     * Creates a LeafOp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ics23.LeafOp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ics23.LeafOp} LeafOp
     */LeafOp.fromObject=function fromObject(e){if(e instanceof l.ics23.LeafOp)return e;var t=new l.ics23.LeafOp;switch(e.hash){case"NO_HASH":case 0:t.hash=0;break;case"SHA256":case 1:t.hash=1;break;case"SHA512":case 2:t.hash=2;break;case"KECCAK":case 3:t.hash=3;break;case"RIPEMD160":case 4:t.hash=4;break;case"BITCOIN":case 5:t.hash=5;break;case"SHA512_256":case 6:t.hash=6;break}switch(e.prehashKey){case"NO_HASH":case 0:t.prehashKey=0;break;case"SHA256":case 1:t.prehashKey=1;break;case"SHA512":case 2:t.prehashKey=2;break;case"KECCAK":case 3:t.prehashKey=3;break;case"RIPEMD160":case 4:t.prehashKey=4;break;case"BITCOIN":case 5:t.prehashKey=5;break;case"SHA512_256":case 6:t.prehashKey=6;break}switch(e.prehashValue){case"NO_HASH":case 0:t.prehashValue=0;break;case"SHA256":case 1:t.prehashValue=1;break;case"SHA512":case 2:t.prehashValue=2;break;case"KECCAK":case 3:t.prehashValue=3;break;case"RIPEMD160":case 4:t.prehashValue=4;break;case"BITCOIN":case 5:t.prehashValue=5;break;case"SHA512_256":case 6:t.prehashValue=6;break}switch(e.length){case"NO_PREFIX":case 0:t.length=0;break;case"VAR_PROTO":case 1:t.length=1;break;case"VAR_RLP":case 2:t.length=2;break;case"FIXED32_BIG":case 3:t.length=3;break;case"FIXED32_LITTLE":case 4:t.length=4;break;case"FIXED64_BIG":case 5:t.length=5;break;case"FIXED64_LITTLE":case 6:t.length=6;break;case"REQUIRE_32_BYTES":case 7:t.length=7;break;case"REQUIRE_64_BYTES":case 8:t.length=8;break}null!=e.prefix&&("string"===typeof e.prefix?f.base64.decode(e.prefix,t.prefix=f.newBuffer(f.base64.length(e.prefix)),0):e.prefix.length&&(t.prefix=e.prefix));return t};
/**
     * Creates a plain object from a LeafOp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ics23.LeafOp
     * @static
     * @param {ics23.LeafOp} message LeafOp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */LeafOp.toObject=function toObject(e,t){t||(t={});var r={};if(t.defaults){r.hash=t.enums===String?"NO_HASH":0;r.prehashKey=t.enums===String?"NO_HASH":0;r.prehashValue=t.enums===String?"NO_HASH":0;r.length=t.enums===String?"NO_PREFIX":0;if(t.bytes===String)r.prefix="";else{r.prefix=[];t.bytes!==Array&&(r.prefix=f.newBuffer(r.prefix))}}null!=e.hash&&e.hasOwnProperty("hash")&&(r.hash=t.enums===String?l.ics23.HashOp[e.hash]:e.hash);null!=e.prehashKey&&e.hasOwnProperty("prehashKey")&&(r.prehashKey=t.enums===String?l.ics23.HashOp[e.prehashKey]:e.prehashKey);null!=e.prehashValue&&e.hasOwnProperty("prehashValue")&&(r.prehashValue=t.enums===String?l.ics23.HashOp[e.prehashValue]:e.prehashValue);null!=e.length&&e.hasOwnProperty("length")&&(r.length=t.enums===String?l.ics23.LengthOp[e.length]:e.length);null!=e.prefix&&e.hasOwnProperty("prefix")&&(r.prefix=t.bytes===String?f.base64.encode(e.prefix,0,e.prefix.length):t.bytes===Array?Array.prototype.slice.call(e.prefix):e.prefix);return r};
/**
     * Converts this LeafOp to JSON.
     * @function toJSON
     * @memberof ics23.LeafOp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */LeafOp.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,s.util.toJSONOptions)};return LeafOp}();e.InnerOp=function(){
/**
     * Constructs a new InnerOp.
     * @memberof ics23
     * @classdesc InnerOp represents a merkle-proof step that is not a leaf.
     * It represents concatenating two children and hashing them to provide the next result.
     * 
     * The result of the previous step is passed in, so the signature of this op is:
     * innerOp(child) -> output
     * 
     * The result of applying InnerOp should be:
     * output = op.hash(op.prefix || child || op.suffix)
     * 
     * where the || operator is concatenation of binary data,
     * and child is the result of hashing all the tree below this step.
     * 
     * Any special data, like prepending child with the length, or prepending the entire operation with
     * some value to differentiate from leaf nodes, should be included in prefix and suffix.
     * If either of prefix or suffix is empty, we just treat it as an empty string
     * @implements IInnerOp
     * @constructor
     * @param {ics23.IInnerOp=} [properties] Properties to set
     */
function InnerOp(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}InnerOp.prototype.hash=0;InnerOp.prototype.prefix=f.newBuffer([]);InnerOp.prototype.suffix=f.newBuffer([]);
/**
     * Creates a new InnerOp instance using the specified properties.
     * @function create
     * @memberof ics23.InnerOp
     * @static
     * @param {ics23.IInnerOp=} [properties] Properties to set
     * @returns {ics23.InnerOp} InnerOp instance
     */InnerOp.create=function create(e){return new InnerOp(e)};
/**
     * Encodes the specified InnerOp message. Does not implicitly {@link ics23.InnerOp.verify|verify} messages.
     * @function encode
     * @memberof ics23.InnerOp
     * @static
     * @param {ics23.IInnerOp} message InnerOp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */InnerOp.encode=function encode(e,t){t||(t=a.create());null!=e.hash&&e.hasOwnProperty("hash")&&t.uint32(8).int32(e.hash);null!=e.prefix&&e.hasOwnProperty("prefix")&&t.uint32(18).bytes(e.prefix);null!=e.suffix&&e.hasOwnProperty("suffix")&&t.uint32(26).bytes(e.suffix);return t};
/**
     * Encodes the specified InnerOp message, length delimited. Does not implicitly {@link ics23.InnerOp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ics23.InnerOp
     * @static
     * @param {ics23.IInnerOp} message InnerOp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */InnerOp.encodeDelimited=function encodeDelimited(e,t){return this.encode(e,t).ldelim()};
/**
     * Decodes an InnerOp message from the specified reader or buffer.
     * @function decode
     * @memberof ics23.InnerOp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ics23.InnerOp} InnerOp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */InnerOp.decode=function decode(e,t){e instanceof c||(e=c.create(e));var r=void 0===t?e.len:e.pos+t,n=new l.ics23.InnerOp;while(e.pos<r){var o=e.uint32();switch(o>>>3){case 1:n.hash=e.int32();break;case 2:n.prefix=e.bytes();break;case 3:n.suffix=e.bytes();break;default:e.skipType(7&o);break}}return n};
/**
     * Decodes an InnerOp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ics23.InnerOp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ics23.InnerOp} InnerOp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */InnerOp.decodeDelimited=function decodeDelimited(e){e instanceof c||(e=new c(e));return this.decode(e,e.uint32())};
/**
     * Verifies an InnerOp message.
     * @function verify
     * @memberof ics23.InnerOp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */InnerOp.verify=function verify(e){if("object"!==typeof e||null===e)return"object expected";if(null!=e.hash&&e.hasOwnProperty("hash"))switch(e.hash){default:return"hash: enum value expected";case 0:case 1:case 2:case 3:case 4:case 5:case 6:break}return null!=e.prefix&&e.hasOwnProperty("prefix")&&!(e.prefix&&"number"===typeof e.prefix.length||f.isString(e.prefix))?"prefix: buffer expected":null!=e.suffix&&e.hasOwnProperty("suffix")&&!(e.suffix&&"number"===typeof e.suffix.length||f.isString(e.suffix))?"suffix: buffer expected":null};
/**
     * Creates an InnerOp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ics23.InnerOp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ics23.InnerOp} InnerOp
     */InnerOp.fromObject=function fromObject(e){if(e instanceof l.ics23.InnerOp)return e;var t=new l.ics23.InnerOp;switch(e.hash){case"NO_HASH":case 0:t.hash=0;break;case"SHA256":case 1:t.hash=1;break;case"SHA512":case 2:t.hash=2;break;case"KECCAK":case 3:t.hash=3;break;case"RIPEMD160":case 4:t.hash=4;break;case"BITCOIN":case 5:t.hash=5;break;case"SHA512_256":case 6:t.hash=6;break}null!=e.prefix&&("string"===typeof e.prefix?f.base64.decode(e.prefix,t.prefix=f.newBuffer(f.base64.length(e.prefix)),0):e.prefix.length&&(t.prefix=e.prefix));null!=e.suffix&&("string"===typeof e.suffix?f.base64.decode(e.suffix,t.suffix=f.newBuffer(f.base64.length(e.suffix)),0):e.suffix.length&&(t.suffix=e.suffix));return t};
/**
     * Creates a plain object from an InnerOp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ics23.InnerOp
     * @static
     * @param {ics23.InnerOp} message InnerOp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */InnerOp.toObject=function toObject(e,t){t||(t={});var r={};if(t.defaults){r.hash=t.enums===String?"NO_HASH":0;if(t.bytes===String)r.prefix="";else{r.prefix=[];t.bytes!==Array&&(r.prefix=f.newBuffer(r.prefix))}if(t.bytes===String)r.suffix="";else{r.suffix=[];t.bytes!==Array&&(r.suffix=f.newBuffer(r.suffix))}}null!=e.hash&&e.hasOwnProperty("hash")&&(r.hash=t.enums===String?l.ics23.HashOp[e.hash]:e.hash);null!=e.prefix&&e.hasOwnProperty("prefix")&&(r.prefix=t.bytes===String?f.base64.encode(e.prefix,0,e.prefix.length):t.bytes===Array?Array.prototype.slice.call(e.prefix):e.prefix);null!=e.suffix&&e.hasOwnProperty("suffix")&&(r.suffix=t.bytes===String?f.base64.encode(e.suffix,0,e.suffix.length):t.bytes===Array?Array.prototype.slice.call(e.suffix):e.suffix);return r};
/**
     * Converts this InnerOp to JSON.
     * @function toJSON
     * @memberof ics23.InnerOp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */InnerOp.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,s.util.toJSONOptions)};return InnerOp}();e.ProofSpec=function(){
/**
     * Constructs a new ProofSpec.
     * @memberof ics23
     * @classdesc ProofSpec defines what the expected parameters are for a given proof type.
     * This can be stored in the client and used to validate any incoming proofs.
     * 
     * verify(ProofSpec, Proof) -> Proof | Error
     * 
     * As demonstrated in tests, if we don't fix the algorithm used to calculate the
     * LeafHash for a given tree, there are many possible key-value pairs that can
     * generate a given hash (by interpretting the preimage differently).
     * We need this for proper security, requires client knows a priori what
     * tree format server uses. But not in code, rather a configuration object.
     * @implements IProofSpec
     * @constructor
     * @param {ics23.IProofSpec=} [properties] Properties to set
     */
function ProofSpec(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}ProofSpec.prototype.leafSpec=null;ProofSpec.prototype.innerSpec=null;ProofSpec.prototype.maxDepth=0;ProofSpec.prototype.minDepth=0;
/**
     * Creates a new ProofSpec instance using the specified properties.
     * @function create
     * @memberof ics23.ProofSpec
     * @static
     * @param {ics23.IProofSpec=} [properties] Properties to set
     * @returns {ics23.ProofSpec} ProofSpec instance
     */ProofSpec.create=function create(e){return new ProofSpec(e)};
/**
     * Encodes the specified ProofSpec message. Does not implicitly {@link ics23.ProofSpec.verify|verify} messages.
     * @function encode
     * @memberof ics23.ProofSpec
     * @static
     * @param {ics23.IProofSpec} message ProofSpec message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */ProofSpec.encode=function encode(e,t){t||(t=a.create());null!=e.leafSpec&&e.hasOwnProperty("leafSpec")&&l.ics23.LeafOp.encode(e.leafSpec,t.uint32(10).fork()).ldelim();null!=e.innerSpec&&e.hasOwnProperty("innerSpec")&&l.ics23.InnerSpec.encode(e.innerSpec,t.uint32(18).fork()).ldelim();null!=e.maxDepth&&e.hasOwnProperty("maxDepth")&&t.uint32(24).int32(e.maxDepth);null!=e.minDepth&&e.hasOwnProperty("minDepth")&&t.uint32(32).int32(e.minDepth);return t};
/**
     * Encodes the specified ProofSpec message, length delimited. Does not implicitly {@link ics23.ProofSpec.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ics23.ProofSpec
     * @static
     * @param {ics23.IProofSpec} message ProofSpec message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */ProofSpec.encodeDelimited=function encodeDelimited(e,t){return this.encode(e,t).ldelim()};
/**
     * Decodes a ProofSpec message from the specified reader or buffer.
     * @function decode
     * @memberof ics23.ProofSpec
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ics23.ProofSpec} ProofSpec
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */ProofSpec.decode=function decode(e,t){e instanceof c||(e=c.create(e));var r=void 0===t?e.len:e.pos+t,n=new l.ics23.ProofSpec;while(e.pos<r){var o=e.uint32();switch(o>>>3){case 1:n.leafSpec=l.ics23.LeafOp.decode(e,e.uint32());break;case 2:n.innerSpec=l.ics23.InnerSpec.decode(e,e.uint32());break;case 3:n.maxDepth=e.int32();break;case 4:n.minDepth=e.int32();break;default:e.skipType(7&o);break}}return n};
/**
     * Decodes a ProofSpec message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ics23.ProofSpec
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ics23.ProofSpec} ProofSpec
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */ProofSpec.decodeDelimited=function decodeDelimited(e){e instanceof c||(e=new c(e));return this.decode(e,e.uint32())};
/**
     * Verifies a ProofSpec message.
     * @function verify
     * @memberof ics23.ProofSpec
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */ProofSpec.verify=function verify(e){if("object"!==typeof e||null===e)return"object expected";if(null!=e.leafSpec&&e.hasOwnProperty("leafSpec")){var t=l.ics23.LeafOp.verify(e.leafSpec);if(t)return"leafSpec."+t}if(null!=e.innerSpec&&e.hasOwnProperty("innerSpec")){t=l.ics23.InnerSpec.verify(e.innerSpec);if(t)return"innerSpec."+t}return null!=e.maxDepth&&e.hasOwnProperty("maxDepth")&&!f.isInteger(e.maxDepth)?"maxDepth: integer expected":null!=e.minDepth&&e.hasOwnProperty("minDepth")&&!f.isInteger(e.minDepth)?"minDepth: integer expected":null};
/**
     * Creates a ProofSpec message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ics23.ProofSpec
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ics23.ProofSpec} ProofSpec
     */ProofSpec.fromObject=function fromObject(e){if(e instanceof l.ics23.ProofSpec)return e;var t=new l.ics23.ProofSpec;if(null!=e.leafSpec){if("object"!==typeof e.leafSpec)throw TypeError(".ics23.ProofSpec.leafSpec: object expected");t.leafSpec=l.ics23.LeafOp.fromObject(e.leafSpec)}if(null!=e.innerSpec){if("object"!==typeof e.innerSpec)throw TypeError(".ics23.ProofSpec.innerSpec: object expected");t.innerSpec=l.ics23.InnerSpec.fromObject(e.innerSpec)}null!=e.maxDepth&&(t.maxDepth=0|e.maxDepth);null!=e.minDepth&&(t.minDepth=0|e.minDepth);return t};
/**
     * Creates a plain object from a ProofSpec message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ics23.ProofSpec
     * @static
     * @param {ics23.ProofSpec} message ProofSpec
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */ProofSpec.toObject=function toObject(e,t){t||(t={});var r={};if(t.defaults){r.leafSpec=null;r.innerSpec=null;r.maxDepth=0;r.minDepth=0}null!=e.leafSpec&&e.hasOwnProperty("leafSpec")&&(r.leafSpec=l.ics23.LeafOp.toObject(e.leafSpec,t));null!=e.innerSpec&&e.hasOwnProperty("innerSpec")&&(r.innerSpec=l.ics23.InnerSpec.toObject(e.innerSpec,t));null!=e.maxDepth&&e.hasOwnProperty("maxDepth")&&(r.maxDepth=e.maxDepth);null!=e.minDepth&&e.hasOwnProperty("minDepth")&&(r.minDepth=e.minDepth);return r};
/**
     * Converts this ProofSpec to JSON.
     * @function toJSON
     * @memberof ics23.ProofSpec
     * @instance
     * @returns {Object.<string,*>} JSON object
     */ProofSpec.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,s.util.toJSONOptions)};return ProofSpec}();e.InnerSpec=function(){
/**
     * Constructs a new InnerSpec.
     * @memberof ics23
     * @classdesc Represents an InnerSpec.
     * @implements IInnerSpec
     * @constructor
     * @param {ics23.IInnerSpec=} [properties] Properties to set
     */
function InnerSpec(e){this.childOrder=[];if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}InnerSpec.prototype.childOrder=f.emptyArray;InnerSpec.prototype.childSize=0;InnerSpec.prototype.minPrefixLength=0;InnerSpec.prototype.maxPrefixLength=0;InnerSpec.prototype.emptyChild=f.newBuffer([]);InnerSpec.prototype.hash=0;
/**
     * Creates a new InnerSpec instance using the specified properties.
     * @function create
     * @memberof ics23.InnerSpec
     * @static
     * @param {ics23.IInnerSpec=} [properties] Properties to set
     * @returns {ics23.InnerSpec} InnerSpec instance
     */InnerSpec.create=function create(e){return new InnerSpec(e)};
/**
     * Encodes the specified InnerSpec message. Does not implicitly {@link ics23.InnerSpec.verify|verify} messages.
     * @function encode
     * @memberof ics23.InnerSpec
     * @static
     * @param {ics23.IInnerSpec} message InnerSpec message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */InnerSpec.encode=function encode(e,t){t||(t=a.create());if(null!=e.childOrder&&e.childOrder.length){t.uint32(10).fork();for(var r=0;r<e.childOrder.length;++r)t.int32(e.childOrder[r]);t.ldelim()}null!=e.childSize&&e.hasOwnProperty("childSize")&&t.uint32(16).int32(e.childSize);null!=e.minPrefixLength&&e.hasOwnProperty("minPrefixLength")&&t.uint32(24).int32(e.minPrefixLength);null!=e.maxPrefixLength&&e.hasOwnProperty("maxPrefixLength")&&t.uint32(32).int32(e.maxPrefixLength);null!=e.emptyChild&&e.hasOwnProperty("emptyChild")&&t.uint32(42).bytes(e.emptyChild);null!=e.hash&&e.hasOwnProperty("hash")&&t.uint32(48).int32(e.hash);return t};
/**
     * Encodes the specified InnerSpec message, length delimited. Does not implicitly {@link ics23.InnerSpec.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ics23.InnerSpec
     * @static
     * @param {ics23.IInnerSpec} message InnerSpec message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */InnerSpec.encodeDelimited=function encodeDelimited(e,t){return this.encode(e,t).ldelim()};
/**
     * Decodes an InnerSpec message from the specified reader or buffer.
     * @function decode
     * @memberof ics23.InnerSpec
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ics23.InnerSpec} InnerSpec
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */InnerSpec.decode=function decode(e,t){e instanceof c||(e=c.create(e));var r=void 0===t?e.len:e.pos+t,n=new l.ics23.InnerSpec;while(e.pos<r){var o=e.uint32();switch(o>>>3){case 1:n.childOrder&&n.childOrder.length||(n.childOrder=[]);if(2===(7&o)){var i=e.uint32()+e.pos;while(e.pos<i)n.childOrder.push(e.int32())}else n.childOrder.push(e.int32());break;case 2:n.childSize=e.int32();break;case 3:n.minPrefixLength=e.int32();break;case 4:n.maxPrefixLength=e.int32();break;case 5:n.emptyChild=e.bytes();break;case 6:n.hash=e.int32();break;default:e.skipType(7&o);break}}return n};
/**
     * Decodes an InnerSpec message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ics23.InnerSpec
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ics23.InnerSpec} InnerSpec
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */InnerSpec.decodeDelimited=function decodeDelimited(e){e instanceof c||(e=new c(e));return this.decode(e,e.uint32())};
/**
     * Verifies an InnerSpec message.
     * @function verify
     * @memberof ics23.InnerSpec
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */InnerSpec.verify=function verify(e){if("object"!==typeof e||null===e)return"object expected";if(null!=e.childOrder&&e.hasOwnProperty("childOrder")){if(!Array.isArray(e.childOrder))return"childOrder: array expected";for(var t=0;t<e.childOrder.length;++t)if(!f.isInteger(e.childOrder[t]))return"childOrder: integer[] expected"}if(null!=e.childSize&&e.hasOwnProperty("childSize")&&!f.isInteger(e.childSize))return"childSize: integer expected";if(null!=e.minPrefixLength&&e.hasOwnProperty("minPrefixLength")&&!f.isInteger(e.minPrefixLength))return"minPrefixLength: integer expected";if(null!=e.maxPrefixLength&&e.hasOwnProperty("maxPrefixLength")&&!f.isInteger(e.maxPrefixLength))return"maxPrefixLength: integer expected";if(null!=e.emptyChild&&e.hasOwnProperty("emptyChild")&&!(e.emptyChild&&"number"===typeof e.emptyChild.length||f.isString(e.emptyChild)))return"emptyChild: buffer expected";if(null!=e.hash&&e.hasOwnProperty("hash"))switch(e.hash){default:return"hash: enum value expected";case 0:case 1:case 2:case 3:case 4:case 5:case 6:break}return null};
/**
     * Creates an InnerSpec message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ics23.InnerSpec
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ics23.InnerSpec} InnerSpec
     */InnerSpec.fromObject=function fromObject(e){if(e instanceof l.ics23.InnerSpec)return e;var t=new l.ics23.InnerSpec;if(e.childOrder){if(!Array.isArray(e.childOrder))throw TypeError(".ics23.InnerSpec.childOrder: array expected");t.childOrder=[];for(var r=0;r<e.childOrder.length;++r)t.childOrder[r]=0|e.childOrder[r]}null!=e.childSize&&(t.childSize=0|e.childSize);null!=e.minPrefixLength&&(t.minPrefixLength=0|e.minPrefixLength);null!=e.maxPrefixLength&&(t.maxPrefixLength=0|e.maxPrefixLength);null!=e.emptyChild&&("string"===typeof e.emptyChild?f.base64.decode(e.emptyChild,t.emptyChild=f.newBuffer(f.base64.length(e.emptyChild)),0):e.emptyChild.length&&(t.emptyChild=e.emptyChild));switch(e.hash){case"NO_HASH":case 0:t.hash=0;break;case"SHA256":case 1:t.hash=1;break;case"SHA512":case 2:t.hash=2;break;case"KECCAK":case 3:t.hash=3;break;case"RIPEMD160":case 4:t.hash=4;break;case"BITCOIN":case 5:t.hash=5;break;case"SHA512_256":case 6:t.hash=6;break}return t};
/**
     * Creates a plain object from an InnerSpec message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ics23.InnerSpec
     * @static
     * @param {ics23.InnerSpec} message InnerSpec
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */InnerSpec.toObject=function toObject(e,t){t||(t={});var r={};(t.arrays||t.defaults)&&(r.childOrder=[]);if(t.defaults){r.childSize=0;r.minPrefixLength=0;r.maxPrefixLength=0;if(t.bytes===String)r.emptyChild="";else{r.emptyChild=[];t.bytes!==Array&&(r.emptyChild=f.newBuffer(r.emptyChild))}r.hash=t.enums===String?"NO_HASH":0}if(e.childOrder&&e.childOrder.length){r.childOrder=[];for(var n=0;n<e.childOrder.length;++n)r.childOrder[n]=e.childOrder[n]}null!=e.childSize&&e.hasOwnProperty("childSize")&&(r.childSize=e.childSize);null!=e.minPrefixLength&&e.hasOwnProperty("minPrefixLength")&&(r.minPrefixLength=e.minPrefixLength);null!=e.maxPrefixLength&&e.hasOwnProperty("maxPrefixLength")&&(r.maxPrefixLength=e.maxPrefixLength);null!=e.emptyChild&&e.hasOwnProperty("emptyChild")&&(r.emptyChild=t.bytes===String?f.base64.encode(e.emptyChild,0,e.emptyChild.length):t.bytes===Array?Array.prototype.slice.call(e.emptyChild):e.emptyChild);null!=e.hash&&e.hasOwnProperty("hash")&&(r.hash=t.enums===String?l.ics23.HashOp[e.hash]:e.hash);return r};
/**
     * Converts this InnerSpec to JSON.
     * @function toJSON
     * @memberof ics23.InnerSpec
     * @instance
     * @returns {Object.<string,*>} JSON object
     */InnerSpec.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,s.util.toJSONOptions)};return InnerSpec}();e.BatchProof=function(){
/**
     * Constructs a new BatchProof.
     * @memberof ics23
     * @classdesc Represents a BatchProof.
     * @implements IBatchProof
     * @constructor
     * @param {ics23.IBatchProof=} [properties] Properties to set
     */
function BatchProof(e){this.entries=[];if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}BatchProof.prototype.entries=f.emptyArray;
/**
     * Creates a new BatchProof instance using the specified properties.
     * @function create
     * @memberof ics23.BatchProof
     * @static
     * @param {ics23.IBatchProof=} [properties] Properties to set
     * @returns {ics23.BatchProof} BatchProof instance
     */BatchProof.create=function create(e){return new BatchProof(e)};
/**
     * Encodes the specified BatchProof message. Does not implicitly {@link ics23.BatchProof.verify|verify} messages.
     * @function encode
     * @memberof ics23.BatchProof
     * @static
     * @param {ics23.IBatchProof} message BatchProof message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */BatchProof.encode=function encode(e,t){t||(t=a.create());if(null!=e.entries&&e.entries.length)for(var r=0;r<e.entries.length;++r)l.ics23.BatchEntry.encode(e.entries[r],t.uint32(10).fork()).ldelim();return t};
/**
     * Encodes the specified BatchProof message, length delimited. Does not implicitly {@link ics23.BatchProof.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ics23.BatchProof
     * @static
     * @param {ics23.IBatchProof} message BatchProof message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */BatchProof.encodeDelimited=function encodeDelimited(e,t){return this.encode(e,t).ldelim()};
/**
     * Decodes a BatchProof message from the specified reader or buffer.
     * @function decode
     * @memberof ics23.BatchProof
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ics23.BatchProof} BatchProof
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */BatchProof.decode=function decode(e,t){e instanceof c||(e=c.create(e));var r=void 0===t?e.len:e.pos+t,n=new l.ics23.BatchProof;while(e.pos<r){var o=e.uint32();switch(o>>>3){case 1:n.entries&&n.entries.length||(n.entries=[]);n.entries.push(l.ics23.BatchEntry.decode(e,e.uint32()));break;default:e.skipType(7&o);break}}return n};
/**
     * Decodes a BatchProof message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ics23.BatchProof
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ics23.BatchProof} BatchProof
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */BatchProof.decodeDelimited=function decodeDelimited(e){e instanceof c||(e=new c(e));return this.decode(e,e.uint32())};
/**
     * Verifies a BatchProof message.
     * @function verify
     * @memberof ics23.BatchProof
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */BatchProof.verify=function verify(e){if("object"!==typeof e||null===e)return"object expected";if(null!=e.entries&&e.hasOwnProperty("entries")){if(!Array.isArray(e.entries))return"entries: array expected";for(var t=0;t<e.entries.length;++t){var r=l.ics23.BatchEntry.verify(e.entries[t]);if(r)return"entries."+r}}return null};
/**
     * Creates a BatchProof message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ics23.BatchProof
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ics23.BatchProof} BatchProof
     */BatchProof.fromObject=function fromObject(e){if(e instanceof l.ics23.BatchProof)return e;var t=new l.ics23.BatchProof;if(e.entries){if(!Array.isArray(e.entries))throw TypeError(".ics23.BatchProof.entries: array expected");t.entries=[];for(var r=0;r<e.entries.length;++r){if("object"!==typeof e.entries[r])throw TypeError(".ics23.BatchProof.entries: object expected");t.entries[r]=l.ics23.BatchEntry.fromObject(e.entries[r])}}return t};
/**
     * Creates a plain object from a BatchProof message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ics23.BatchProof
     * @static
     * @param {ics23.BatchProof} message BatchProof
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */BatchProof.toObject=function toObject(e,t){t||(t={});var r={};(t.arrays||t.defaults)&&(r.entries=[]);if(e.entries&&e.entries.length){r.entries=[];for(var n=0;n<e.entries.length;++n)r.entries[n]=l.ics23.BatchEntry.toObject(e.entries[n],t)}return r};
/**
     * Converts this BatchProof to JSON.
     * @function toJSON
     * @memberof ics23.BatchProof
     * @instance
     * @returns {Object.<string,*>} JSON object
     */BatchProof.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,s.util.toJSONOptions)};return BatchProof}();e.BatchEntry=function(){
/**
     * Constructs a new BatchEntry.
     * @memberof ics23
     * @classdesc Represents a BatchEntry.
     * @implements IBatchEntry
     * @constructor
     * @param {ics23.IBatchEntry=} [properties] Properties to set
     */
function BatchEntry(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}BatchEntry.prototype.exist=null;BatchEntry.prototype.nonexist=null;var e;Object.defineProperty(BatchEntry.prototype,"proof",{get:f.oneOfGetter(e=["exist","nonexist"]),set:f.oneOfSetter(e)});
/**
     * Creates a new BatchEntry instance using the specified properties.
     * @function create
     * @memberof ics23.BatchEntry
     * @static
     * @param {ics23.IBatchEntry=} [properties] Properties to set
     * @returns {ics23.BatchEntry} BatchEntry instance
     */BatchEntry.create=function create(e){return new BatchEntry(e)};
/**
     * Encodes the specified BatchEntry message. Does not implicitly {@link ics23.BatchEntry.verify|verify} messages.
     * @function encode
     * @memberof ics23.BatchEntry
     * @static
     * @param {ics23.IBatchEntry} message BatchEntry message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */BatchEntry.encode=function encode(e,t){t||(t=a.create());null!=e.exist&&e.hasOwnProperty("exist")&&l.ics23.ExistenceProof.encode(e.exist,t.uint32(10).fork()).ldelim();null!=e.nonexist&&e.hasOwnProperty("nonexist")&&l.ics23.NonExistenceProof.encode(e.nonexist,t.uint32(18).fork()).ldelim();return t};
/**
     * Encodes the specified BatchEntry message, length delimited. Does not implicitly {@link ics23.BatchEntry.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ics23.BatchEntry
     * @static
     * @param {ics23.IBatchEntry} message BatchEntry message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */BatchEntry.encodeDelimited=function encodeDelimited(e,t){return this.encode(e,t).ldelim()};
/**
     * Decodes a BatchEntry message from the specified reader or buffer.
     * @function decode
     * @memberof ics23.BatchEntry
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ics23.BatchEntry} BatchEntry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */BatchEntry.decode=function decode(e,t){e instanceof c||(e=c.create(e));var r=void 0===t?e.len:e.pos+t,n=new l.ics23.BatchEntry;while(e.pos<r){var o=e.uint32();switch(o>>>3){case 1:n.exist=l.ics23.ExistenceProof.decode(e,e.uint32());break;case 2:n.nonexist=l.ics23.NonExistenceProof.decode(e,e.uint32());break;default:e.skipType(7&o);break}}return n};
/**
     * Decodes a BatchEntry message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ics23.BatchEntry
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ics23.BatchEntry} BatchEntry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */BatchEntry.decodeDelimited=function decodeDelimited(e){e instanceof c||(e=new c(e));return this.decode(e,e.uint32())};
/**
     * Verifies a BatchEntry message.
     * @function verify
     * @memberof ics23.BatchEntry
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */BatchEntry.verify=function verify(e){if("object"!==typeof e||null===e)return"object expected";var t={};if(null!=e.exist&&e.hasOwnProperty("exist")){t.proof=1;var r=l.ics23.ExistenceProof.verify(e.exist);if(r)return"exist."+r}if(null!=e.nonexist&&e.hasOwnProperty("nonexist")){if(1===t.proof)return"proof: multiple values";t.proof=1;r=l.ics23.NonExistenceProof.verify(e.nonexist);if(r)return"nonexist."+r}return null};
/**
     * Creates a BatchEntry message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ics23.BatchEntry
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ics23.BatchEntry} BatchEntry
     */BatchEntry.fromObject=function fromObject(e){if(e instanceof l.ics23.BatchEntry)return e;var t=new l.ics23.BatchEntry;if(null!=e.exist){if("object"!==typeof e.exist)throw TypeError(".ics23.BatchEntry.exist: object expected");t.exist=l.ics23.ExistenceProof.fromObject(e.exist)}if(null!=e.nonexist){if("object"!==typeof e.nonexist)throw TypeError(".ics23.BatchEntry.nonexist: object expected");t.nonexist=l.ics23.NonExistenceProof.fromObject(e.nonexist)}return t};
/**
     * Creates a plain object from a BatchEntry message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ics23.BatchEntry
     * @static
     * @param {ics23.BatchEntry} message BatchEntry
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */BatchEntry.toObject=function toObject(e,t){t||(t={});var r={};if(null!=e.exist&&e.hasOwnProperty("exist")){r.exist=l.ics23.ExistenceProof.toObject(e.exist,t);t.oneofs&&(r.proof="exist")}if(null!=e.nonexist&&e.hasOwnProperty("nonexist")){r.nonexist=l.ics23.NonExistenceProof.toObject(e.nonexist,t);t.oneofs&&(r.proof="nonexist")}return r};
/**
     * Converts this BatchEntry to JSON.
     * @function toJSON
     * @memberof ics23.BatchEntry
     * @instance
     * @returns {Object.<string,*>} JSON object
     */BatchEntry.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,s.util.toJSONOptions)};return BatchEntry}();e.CompressedBatchProof=function(){
/**
     * Constructs a new CompressedBatchProof.
     * @memberof ics23
     * @classdesc Represents a CompressedBatchProof.
     * @implements ICompressedBatchProof
     * @constructor
     * @param {ics23.ICompressedBatchProof=} [properties] Properties to set
     */
function CompressedBatchProof(e){this.entries=[];this.lookupInners=[];if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}CompressedBatchProof.prototype.entries=f.emptyArray;CompressedBatchProof.prototype.lookupInners=f.emptyArray;
/**
     * Creates a new CompressedBatchProof instance using the specified properties.
     * @function create
     * @memberof ics23.CompressedBatchProof
     * @static
     * @param {ics23.ICompressedBatchProof=} [properties] Properties to set
     * @returns {ics23.CompressedBatchProof} CompressedBatchProof instance
     */CompressedBatchProof.create=function create(e){return new CompressedBatchProof(e)};
/**
     * Encodes the specified CompressedBatchProof message. Does not implicitly {@link ics23.CompressedBatchProof.verify|verify} messages.
     * @function encode
     * @memberof ics23.CompressedBatchProof
     * @static
     * @param {ics23.ICompressedBatchProof} message CompressedBatchProof message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */CompressedBatchProof.encode=function encode(e,t){t||(t=a.create());if(null!=e.entries&&e.entries.length)for(var r=0;r<e.entries.length;++r)l.ics23.CompressedBatchEntry.encode(e.entries[r],t.uint32(10).fork()).ldelim();if(null!=e.lookupInners&&e.lookupInners.length)for(r=0;r<e.lookupInners.length;++r)l.ics23.InnerOp.encode(e.lookupInners[r],t.uint32(18).fork()).ldelim();return t};
/**
     * Encodes the specified CompressedBatchProof message, length delimited. Does not implicitly {@link ics23.CompressedBatchProof.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ics23.CompressedBatchProof
     * @static
     * @param {ics23.ICompressedBatchProof} message CompressedBatchProof message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */CompressedBatchProof.encodeDelimited=function encodeDelimited(e,t){return this.encode(e,t).ldelim()};
/**
     * Decodes a CompressedBatchProof message from the specified reader or buffer.
     * @function decode
     * @memberof ics23.CompressedBatchProof
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ics23.CompressedBatchProof} CompressedBatchProof
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */CompressedBatchProof.decode=function decode(e,t){e instanceof c||(e=c.create(e));var r=void 0===t?e.len:e.pos+t,n=new l.ics23.CompressedBatchProof;while(e.pos<r){var o=e.uint32();switch(o>>>3){case 1:n.entries&&n.entries.length||(n.entries=[]);n.entries.push(l.ics23.CompressedBatchEntry.decode(e,e.uint32()));break;case 2:n.lookupInners&&n.lookupInners.length||(n.lookupInners=[]);n.lookupInners.push(l.ics23.InnerOp.decode(e,e.uint32()));break;default:e.skipType(7&o);break}}return n};
/**
     * Decodes a CompressedBatchProof message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ics23.CompressedBatchProof
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ics23.CompressedBatchProof} CompressedBatchProof
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */CompressedBatchProof.decodeDelimited=function decodeDelimited(e){e instanceof c||(e=new c(e));return this.decode(e,e.uint32())};
/**
     * Verifies a CompressedBatchProof message.
     * @function verify
     * @memberof ics23.CompressedBatchProof
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */CompressedBatchProof.verify=function verify(e){if("object"!==typeof e||null===e)return"object expected";if(null!=e.entries&&e.hasOwnProperty("entries")){if(!Array.isArray(e.entries))return"entries: array expected";for(var t=0;t<e.entries.length;++t){var r=l.ics23.CompressedBatchEntry.verify(e.entries[t]);if(r)return"entries."+r}}if(null!=e.lookupInners&&e.hasOwnProperty("lookupInners")){if(!Array.isArray(e.lookupInners))return"lookupInners: array expected";for(t=0;t<e.lookupInners.length;++t){r=l.ics23.InnerOp.verify(e.lookupInners[t]);if(r)return"lookupInners."+r}}return null};
/**
     * Creates a CompressedBatchProof message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ics23.CompressedBatchProof
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ics23.CompressedBatchProof} CompressedBatchProof
     */CompressedBatchProof.fromObject=function fromObject(e){if(e instanceof l.ics23.CompressedBatchProof)return e;var t=new l.ics23.CompressedBatchProof;if(e.entries){if(!Array.isArray(e.entries))throw TypeError(".ics23.CompressedBatchProof.entries: array expected");t.entries=[];for(var r=0;r<e.entries.length;++r){if("object"!==typeof e.entries[r])throw TypeError(".ics23.CompressedBatchProof.entries: object expected");t.entries[r]=l.ics23.CompressedBatchEntry.fromObject(e.entries[r])}}if(e.lookupInners){if(!Array.isArray(e.lookupInners))throw TypeError(".ics23.CompressedBatchProof.lookupInners: array expected");t.lookupInners=[];for(r=0;r<e.lookupInners.length;++r){if("object"!==typeof e.lookupInners[r])throw TypeError(".ics23.CompressedBatchProof.lookupInners: object expected");t.lookupInners[r]=l.ics23.InnerOp.fromObject(e.lookupInners[r])}}return t};
/**
     * Creates a plain object from a CompressedBatchProof message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ics23.CompressedBatchProof
     * @static
     * @param {ics23.CompressedBatchProof} message CompressedBatchProof
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */CompressedBatchProof.toObject=function toObject(e,t){t||(t={});var r={};if(t.arrays||t.defaults){r.entries=[];r.lookupInners=[]}if(e.entries&&e.entries.length){r.entries=[];for(var n=0;n<e.entries.length;++n)r.entries[n]=l.ics23.CompressedBatchEntry.toObject(e.entries[n],t)}if(e.lookupInners&&e.lookupInners.length){r.lookupInners=[];for(n=0;n<e.lookupInners.length;++n)r.lookupInners[n]=l.ics23.InnerOp.toObject(e.lookupInners[n],t)}return r};
/**
     * Converts this CompressedBatchProof to JSON.
     * @function toJSON
     * @memberof ics23.CompressedBatchProof
     * @instance
     * @returns {Object.<string,*>} JSON object
     */CompressedBatchProof.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,s.util.toJSONOptions)};return CompressedBatchProof}();e.CompressedBatchEntry=function(){
/**
     * Constructs a new CompressedBatchEntry.
     * @memberof ics23
     * @classdesc Represents a CompressedBatchEntry.
     * @implements ICompressedBatchEntry
     * @constructor
     * @param {ics23.ICompressedBatchEntry=} [properties] Properties to set
     */
function CompressedBatchEntry(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}CompressedBatchEntry.prototype.exist=null;CompressedBatchEntry.prototype.nonexist=null;var e;Object.defineProperty(CompressedBatchEntry.prototype,"proof",{get:f.oneOfGetter(e=["exist","nonexist"]),set:f.oneOfSetter(e)});
/**
     * Creates a new CompressedBatchEntry instance using the specified properties.
     * @function create
     * @memberof ics23.CompressedBatchEntry
     * @static
     * @param {ics23.ICompressedBatchEntry=} [properties] Properties to set
     * @returns {ics23.CompressedBatchEntry} CompressedBatchEntry instance
     */CompressedBatchEntry.create=function create(e){return new CompressedBatchEntry(e)};
/**
     * Encodes the specified CompressedBatchEntry message. Does not implicitly {@link ics23.CompressedBatchEntry.verify|verify} messages.
     * @function encode
     * @memberof ics23.CompressedBatchEntry
     * @static
     * @param {ics23.ICompressedBatchEntry} message CompressedBatchEntry message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */CompressedBatchEntry.encode=function encode(e,t){t||(t=a.create());null!=e.exist&&e.hasOwnProperty("exist")&&l.ics23.CompressedExistenceProof.encode(e.exist,t.uint32(10).fork()).ldelim();null!=e.nonexist&&e.hasOwnProperty("nonexist")&&l.ics23.CompressedNonExistenceProof.encode(e.nonexist,t.uint32(18).fork()).ldelim();return t};
/**
     * Encodes the specified CompressedBatchEntry message, length delimited. Does not implicitly {@link ics23.CompressedBatchEntry.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ics23.CompressedBatchEntry
     * @static
     * @param {ics23.ICompressedBatchEntry} message CompressedBatchEntry message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */CompressedBatchEntry.encodeDelimited=function encodeDelimited(e,t){return this.encode(e,t).ldelim()};
/**
     * Decodes a CompressedBatchEntry message from the specified reader or buffer.
     * @function decode
     * @memberof ics23.CompressedBatchEntry
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ics23.CompressedBatchEntry} CompressedBatchEntry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */CompressedBatchEntry.decode=function decode(e,t){e instanceof c||(e=c.create(e));var r=void 0===t?e.len:e.pos+t,n=new l.ics23.CompressedBatchEntry;while(e.pos<r){var o=e.uint32();switch(o>>>3){case 1:n.exist=l.ics23.CompressedExistenceProof.decode(e,e.uint32());break;case 2:n.nonexist=l.ics23.CompressedNonExistenceProof.decode(e,e.uint32());break;default:e.skipType(7&o);break}}return n};
/**
     * Decodes a CompressedBatchEntry message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ics23.CompressedBatchEntry
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ics23.CompressedBatchEntry} CompressedBatchEntry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */CompressedBatchEntry.decodeDelimited=function decodeDelimited(e){e instanceof c||(e=new c(e));return this.decode(e,e.uint32())};
/**
     * Verifies a CompressedBatchEntry message.
     * @function verify
     * @memberof ics23.CompressedBatchEntry
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */CompressedBatchEntry.verify=function verify(e){if("object"!==typeof e||null===e)return"object expected";var t={};if(null!=e.exist&&e.hasOwnProperty("exist")){t.proof=1;var r=l.ics23.CompressedExistenceProof.verify(e.exist);if(r)return"exist."+r}if(null!=e.nonexist&&e.hasOwnProperty("nonexist")){if(1===t.proof)return"proof: multiple values";t.proof=1;r=l.ics23.CompressedNonExistenceProof.verify(e.nonexist);if(r)return"nonexist."+r}return null};
/**
     * Creates a CompressedBatchEntry message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ics23.CompressedBatchEntry
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ics23.CompressedBatchEntry} CompressedBatchEntry
     */CompressedBatchEntry.fromObject=function fromObject(e){if(e instanceof l.ics23.CompressedBatchEntry)return e;var t=new l.ics23.CompressedBatchEntry;if(null!=e.exist){if("object"!==typeof e.exist)throw TypeError(".ics23.CompressedBatchEntry.exist: object expected");t.exist=l.ics23.CompressedExistenceProof.fromObject(e.exist)}if(null!=e.nonexist){if("object"!==typeof e.nonexist)throw TypeError(".ics23.CompressedBatchEntry.nonexist: object expected");t.nonexist=l.ics23.CompressedNonExistenceProof.fromObject(e.nonexist)}return t};
/**
     * Creates a plain object from a CompressedBatchEntry message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ics23.CompressedBatchEntry
     * @static
     * @param {ics23.CompressedBatchEntry} message CompressedBatchEntry
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */CompressedBatchEntry.toObject=function toObject(e,t){t||(t={});var r={};if(null!=e.exist&&e.hasOwnProperty("exist")){r.exist=l.ics23.CompressedExistenceProof.toObject(e.exist,t);t.oneofs&&(r.proof="exist")}if(null!=e.nonexist&&e.hasOwnProperty("nonexist")){r.nonexist=l.ics23.CompressedNonExistenceProof.toObject(e.nonexist,t);t.oneofs&&(r.proof="nonexist")}return r};
/**
     * Converts this CompressedBatchEntry to JSON.
     * @function toJSON
     * @memberof ics23.CompressedBatchEntry
     * @instance
     * @returns {Object.<string,*>} JSON object
     */CompressedBatchEntry.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,s.util.toJSONOptions)};return CompressedBatchEntry}();e.CompressedExistenceProof=function(){
/**
     * Constructs a new CompressedExistenceProof.
     * @memberof ics23
     * @classdesc Represents a CompressedExistenceProof.
     * @implements ICompressedExistenceProof
     * @constructor
     * @param {ics23.ICompressedExistenceProof=} [properties] Properties to set
     */
function CompressedExistenceProof(e){this.path=[];if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}CompressedExistenceProof.prototype.key=f.newBuffer([]);CompressedExistenceProof.prototype.value=f.newBuffer([]);CompressedExistenceProof.prototype.leaf=null;CompressedExistenceProof.prototype.path=f.emptyArray;
/**
     * Creates a new CompressedExistenceProof instance using the specified properties.
     * @function create
     * @memberof ics23.CompressedExistenceProof
     * @static
     * @param {ics23.ICompressedExistenceProof=} [properties] Properties to set
     * @returns {ics23.CompressedExistenceProof} CompressedExistenceProof instance
     */CompressedExistenceProof.create=function create(e){return new CompressedExistenceProof(e)};
/**
     * Encodes the specified CompressedExistenceProof message. Does not implicitly {@link ics23.CompressedExistenceProof.verify|verify} messages.
     * @function encode
     * @memberof ics23.CompressedExistenceProof
     * @static
     * @param {ics23.ICompressedExistenceProof} message CompressedExistenceProof message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */CompressedExistenceProof.encode=function encode(e,t){t||(t=a.create());null!=e.key&&e.hasOwnProperty("key")&&t.uint32(10).bytes(e.key);null!=e.value&&e.hasOwnProperty("value")&&t.uint32(18).bytes(e.value);null!=e.leaf&&e.hasOwnProperty("leaf")&&l.ics23.LeafOp.encode(e.leaf,t.uint32(26).fork()).ldelim();if(null!=e.path&&e.path.length){t.uint32(34).fork();for(var r=0;r<e.path.length;++r)t.int32(e.path[r]);t.ldelim()}return t};
/**
     * Encodes the specified CompressedExistenceProof message, length delimited. Does not implicitly {@link ics23.CompressedExistenceProof.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ics23.CompressedExistenceProof
     * @static
     * @param {ics23.ICompressedExistenceProof} message CompressedExistenceProof message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */CompressedExistenceProof.encodeDelimited=function encodeDelimited(e,t){return this.encode(e,t).ldelim()};
/**
     * Decodes a CompressedExistenceProof message from the specified reader or buffer.
     * @function decode
     * @memberof ics23.CompressedExistenceProof
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ics23.CompressedExistenceProof} CompressedExistenceProof
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */CompressedExistenceProof.decode=function decode(e,t){e instanceof c||(e=c.create(e));var r=void 0===t?e.len:e.pos+t,n=new l.ics23.CompressedExistenceProof;while(e.pos<r){var o=e.uint32();switch(o>>>3){case 1:n.key=e.bytes();break;case 2:n.value=e.bytes();break;case 3:n.leaf=l.ics23.LeafOp.decode(e,e.uint32());break;case 4:n.path&&n.path.length||(n.path=[]);if(2===(7&o)){var i=e.uint32()+e.pos;while(e.pos<i)n.path.push(e.int32())}else n.path.push(e.int32());break;default:e.skipType(7&o);break}}return n};
/**
     * Decodes a CompressedExistenceProof message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ics23.CompressedExistenceProof
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ics23.CompressedExistenceProof} CompressedExistenceProof
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */CompressedExistenceProof.decodeDelimited=function decodeDelimited(e){e instanceof c||(e=new c(e));return this.decode(e,e.uint32())};
/**
     * Verifies a CompressedExistenceProof message.
     * @function verify
     * @memberof ics23.CompressedExistenceProof
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */CompressedExistenceProof.verify=function verify(e){if("object"!==typeof e||null===e)return"object expected";if(null!=e.key&&e.hasOwnProperty("key")&&!(e.key&&"number"===typeof e.key.length||f.isString(e.key)))return"key: buffer expected";if(null!=e.value&&e.hasOwnProperty("value")&&!(e.value&&"number"===typeof e.value.length||f.isString(e.value)))return"value: buffer expected";if(null!=e.leaf&&e.hasOwnProperty("leaf")){var t=l.ics23.LeafOp.verify(e.leaf);if(t)return"leaf."+t}if(null!=e.path&&e.hasOwnProperty("path")){if(!Array.isArray(e.path))return"path: array expected";for(var r=0;r<e.path.length;++r)if(!f.isInteger(e.path[r]))return"path: integer[] expected"}return null};
/**
     * Creates a CompressedExistenceProof message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ics23.CompressedExistenceProof
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ics23.CompressedExistenceProof} CompressedExistenceProof
     */CompressedExistenceProof.fromObject=function fromObject(e){if(e instanceof l.ics23.CompressedExistenceProof)return e;var t=new l.ics23.CompressedExistenceProof;null!=e.key&&("string"===typeof e.key?f.base64.decode(e.key,t.key=f.newBuffer(f.base64.length(e.key)),0):e.key.length&&(t.key=e.key));null!=e.value&&("string"===typeof e.value?f.base64.decode(e.value,t.value=f.newBuffer(f.base64.length(e.value)),0):e.value.length&&(t.value=e.value));if(null!=e.leaf){if("object"!==typeof e.leaf)throw TypeError(".ics23.CompressedExistenceProof.leaf: object expected");t.leaf=l.ics23.LeafOp.fromObject(e.leaf)}if(e.path){if(!Array.isArray(e.path))throw TypeError(".ics23.CompressedExistenceProof.path: array expected");t.path=[];for(var r=0;r<e.path.length;++r)t.path[r]=0|e.path[r]}return t};
/**
     * Creates a plain object from a CompressedExistenceProof message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ics23.CompressedExistenceProof
     * @static
     * @param {ics23.CompressedExistenceProof} message CompressedExistenceProof
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */CompressedExistenceProof.toObject=function toObject(e,t){t||(t={});var r={};(t.arrays||t.defaults)&&(r.path=[]);if(t.defaults){if(t.bytes===String)r.key="";else{r.key=[];t.bytes!==Array&&(r.key=f.newBuffer(r.key))}if(t.bytes===String)r.value="";else{r.value=[];t.bytes!==Array&&(r.value=f.newBuffer(r.value))}r.leaf=null}null!=e.key&&e.hasOwnProperty("key")&&(r.key=t.bytes===String?f.base64.encode(e.key,0,e.key.length):t.bytes===Array?Array.prototype.slice.call(e.key):e.key);null!=e.value&&e.hasOwnProperty("value")&&(r.value=t.bytes===String?f.base64.encode(e.value,0,e.value.length):t.bytes===Array?Array.prototype.slice.call(e.value):e.value);null!=e.leaf&&e.hasOwnProperty("leaf")&&(r.leaf=l.ics23.LeafOp.toObject(e.leaf,t));if(e.path&&e.path.length){r.path=[];for(var n=0;n<e.path.length;++n)r.path[n]=e.path[n]}return r};
/**
     * Converts this CompressedExistenceProof to JSON.
     * @function toJSON
     * @memberof ics23.CompressedExistenceProof
     * @instance
     * @returns {Object.<string,*>} JSON object
     */CompressedExistenceProof.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,s.util.toJSONOptions)};return CompressedExistenceProof}();e.CompressedNonExistenceProof=function(){
/**
     * Constructs a new CompressedNonExistenceProof.
     * @memberof ics23
     * @classdesc Represents a CompressedNonExistenceProof.
     * @implements ICompressedNonExistenceProof
     * @constructor
     * @param {ics23.ICompressedNonExistenceProof=} [properties] Properties to set
     */
function CompressedNonExistenceProof(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}CompressedNonExistenceProof.prototype.key=f.newBuffer([]);CompressedNonExistenceProof.prototype.left=null;CompressedNonExistenceProof.prototype.right=null;
/**
     * Creates a new CompressedNonExistenceProof instance using the specified properties.
     * @function create
     * @memberof ics23.CompressedNonExistenceProof
     * @static
     * @param {ics23.ICompressedNonExistenceProof=} [properties] Properties to set
     * @returns {ics23.CompressedNonExistenceProof} CompressedNonExistenceProof instance
     */CompressedNonExistenceProof.create=function create(e){return new CompressedNonExistenceProof(e)};
/**
     * Encodes the specified CompressedNonExistenceProof message. Does not implicitly {@link ics23.CompressedNonExistenceProof.verify|verify} messages.
     * @function encode
     * @memberof ics23.CompressedNonExistenceProof
     * @static
     * @param {ics23.ICompressedNonExistenceProof} message CompressedNonExistenceProof message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */CompressedNonExistenceProof.encode=function encode(e,t){t||(t=a.create());null!=e.key&&e.hasOwnProperty("key")&&t.uint32(10).bytes(e.key);null!=e.left&&e.hasOwnProperty("left")&&l.ics23.CompressedExistenceProof.encode(e.left,t.uint32(18).fork()).ldelim();null!=e.right&&e.hasOwnProperty("right")&&l.ics23.CompressedExistenceProof.encode(e.right,t.uint32(26).fork()).ldelim();return t};
/**
     * Encodes the specified CompressedNonExistenceProof message, length delimited. Does not implicitly {@link ics23.CompressedNonExistenceProof.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ics23.CompressedNonExistenceProof
     * @static
     * @param {ics23.ICompressedNonExistenceProof} message CompressedNonExistenceProof message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */CompressedNonExistenceProof.encodeDelimited=function encodeDelimited(e,t){return this.encode(e,t).ldelim()};
/**
     * Decodes a CompressedNonExistenceProof message from the specified reader or buffer.
     * @function decode
     * @memberof ics23.CompressedNonExistenceProof
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ics23.CompressedNonExistenceProof} CompressedNonExistenceProof
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */CompressedNonExistenceProof.decode=function decode(e,t){e instanceof c||(e=c.create(e));var r=void 0===t?e.len:e.pos+t,n=new l.ics23.CompressedNonExistenceProof;while(e.pos<r){var o=e.uint32();switch(o>>>3){case 1:n.key=e.bytes();break;case 2:n.left=l.ics23.CompressedExistenceProof.decode(e,e.uint32());break;case 3:n.right=l.ics23.CompressedExistenceProof.decode(e,e.uint32());break;default:e.skipType(7&o);break}}return n};
/**
     * Decodes a CompressedNonExistenceProof message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ics23.CompressedNonExistenceProof
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ics23.CompressedNonExistenceProof} CompressedNonExistenceProof
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */CompressedNonExistenceProof.decodeDelimited=function decodeDelimited(e){e instanceof c||(e=new c(e));return this.decode(e,e.uint32())};
/**
     * Verifies a CompressedNonExistenceProof message.
     * @function verify
     * @memberof ics23.CompressedNonExistenceProof
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */CompressedNonExistenceProof.verify=function verify(e){if("object"!==typeof e||null===e)return"object expected";if(null!=e.key&&e.hasOwnProperty("key")&&!(e.key&&"number"===typeof e.key.length||f.isString(e.key)))return"key: buffer expected";if(null!=e.left&&e.hasOwnProperty("left")){var t=l.ics23.CompressedExistenceProof.verify(e.left);if(t)return"left."+t}if(null!=e.right&&e.hasOwnProperty("right")){t=l.ics23.CompressedExistenceProof.verify(e.right);if(t)return"right."+t}return null};
/**
     * Creates a CompressedNonExistenceProof message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ics23.CompressedNonExistenceProof
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ics23.CompressedNonExistenceProof} CompressedNonExistenceProof
     */CompressedNonExistenceProof.fromObject=function fromObject(e){if(e instanceof l.ics23.CompressedNonExistenceProof)return e;var t=new l.ics23.CompressedNonExistenceProof;null!=e.key&&("string"===typeof e.key?f.base64.decode(e.key,t.key=f.newBuffer(f.base64.length(e.key)),0):e.key.length&&(t.key=e.key));if(null!=e.left){if("object"!==typeof e.left)throw TypeError(".ics23.CompressedNonExistenceProof.left: object expected");t.left=l.ics23.CompressedExistenceProof.fromObject(e.left)}if(null!=e.right){if("object"!==typeof e.right)throw TypeError(".ics23.CompressedNonExistenceProof.right: object expected");t.right=l.ics23.CompressedExistenceProof.fromObject(e.right)}return t};
/**
     * Creates a plain object from a CompressedNonExistenceProof message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ics23.CompressedNonExistenceProof
     * @static
     * @param {ics23.CompressedNonExistenceProof} message CompressedNonExistenceProof
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */CompressedNonExistenceProof.toObject=function toObject(e,t){t||(t={});var r={};if(t.defaults){if(t.bytes===String)r.key="";else{r.key=[];t.bytes!==Array&&(r.key=f.newBuffer(r.key))}r.left=null;r.right=null}null!=e.key&&e.hasOwnProperty("key")&&(r.key=t.bytes===String?f.base64.encode(e.key,0,e.key.length):t.bytes===Array?Array.prototype.slice.call(e.key):e.key);null!=e.left&&e.hasOwnProperty("left")&&(r.left=l.ics23.CompressedExistenceProof.toObject(e.left,t));null!=e.right&&e.hasOwnProperty("right")&&(r.right=l.ics23.CompressedExistenceProof.toObject(e.right,t));return r};
/**
     * Converts this CompressedNonExistenceProof to JSON.
     * @function toJSON
     * @memberof ics23.CompressedNonExistenceProof
     * @instance
     * @returns {Object.<string,*>} JSON object
     */CompressedNonExistenceProof.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,s.util.toJSONOptions)};return CompressedNonExistenceProof}();return e}();i=l;var p=i;var h={};Object.defineProperty(h,"__esModule",{value:true});h.decompress=h.compress=void 0;const u=p;function compress(e){return e.batch?{compressed:compressBatch(e.batch)}:e}h.compress=compress;function decompress(e){return e.compressed?{batch:decompressBatch(e.compressed)}:e}h.decompress=decompress;function compressBatch(e){const t=[];const r=[];const n=new Map;for(const o of e.entries)if(o.exist){const e={exist:compressExist(o.exist,r,n)};t.push(e)}else{if(!o.nonexist)throw new Error("Unexpected batch entry during compress");{const e=o.nonexist;const i={nonexist:{key:e.key,left:compressExist(e.left,r,n),right:compressExist(e.right,r,n)}};t.push(i)}}return{entries:t,lookupInners:r}}function compressExist(e,t,r){if(!e)return;const n=e.path.map((e=>{const n=u.ics23.InnerOp.encode(e).finish();let o=r.get(n);if(void 0===o){o=t.length;t.push(e);r.set(n,o)}return o}));return{key:e.key,value:e.value,leaf:e.leaf,path:n}}function decompressBatch(e){const t=e.lookupInners;const r=e.entries.map((e=>{if(e.exist)return{exist:decompressExist(e.exist,t)};if(e.nonexist){const r=e.nonexist;return{nonexist:{key:r.key,left:decompressExist(r.left,t),right:decompressExist(r.right,t)}}}throw new Error("Unexpected batch entry during compress")}));return{entries:r}}function decompressExist(e,t){if(!e)return;const{key:r,value:n,leaf:o,path:i}=e;const s=(i||[]).map((e=>t[e]));return{key:r,value:n,leaf:o,path:s}}var d="default"in t?t.default:t;var y="default"in r?r.default:r;var x="default"in n?n.default:n;var m={};Object.defineProperty(m,"__esModule",{value:true});m.doHash=m.applyInner=m.applyLeaf=void 0;const b=d;const O=y;const P=x;const g=p;function applyLeaf(e,t,r){if(0===t.length)throw new Error("Missing key");if(0===r.length)throw new Error("Missing value");const n=prepareLeafData(ensureHash(e.prehashKey),ensureLength(e.length),t);const o=prepareLeafData(ensureHash(e.prehashValue),ensureLength(e.length),r);const i=new Uint8Array([...ensureBytes(e.prefix),...n,...o]);return doHash(ensureHash(e.hash),i)}m.applyLeaf=applyLeaf;function applyInner(e,t){if(0===t.length)throw new Error("Inner op needs child value");const r=new Uint8Array([...ensureBytes(e.prefix),...t,...ensureBytes(e.suffix)]);return doHash(ensureHash(e.hash),r)}m.applyInner=applyInner;function ensure(e,t){return void 0===e||null===e?t:e}const ensureHash=e=>ensure(e,g.ics23.HashOp.NO_HASH);const ensureLength=e=>ensure(e,g.ics23.LengthOp.NO_PREFIX);const ensureBytes=e=>ensure(e,new Uint8Array([]));function prepareLeafData(e,t,r){const n=doHashOrNoop(e,r);return doLengthOp(t,n)}function doHashOrNoop(e,t){return e===g.ics23.HashOp.NO_HASH?t:doHash(e,t)}function doHash(e,t){switch(e){case g.ics23.HashOp.SHA256:return(0,O.sha256)(t);case g.ics23.HashOp.SHA512:return(0,P.sha512)(t);case g.ics23.HashOp.RIPEMD160:return(0,b.ripemd160)(t);case g.ics23.HashOp.BITCOIN:return(0,b.ripemd160)((0,O.sha256)(t));case g.ics23.HashOp.SHA512_256:return(0,P.sha512_256)(t)}throw new Error(`Unsupported hashop: ${e}`)}m.doHash=doHash;function doLengthOp(e,t){switch(e){case g.ics23.LengthOp.NO_PREFIX:return t;case g.ics23.LengthOp.VAR_PROTO:return new Uint8Array([...encodeVarintProto(t.length),...t]);case g.ics23.LengthOp.REQUIRE_32_BYTES:if(32!==t.length)throw new Error(`Length is ${t.length}, not 32 bytes`);return t;case g.ics23.LengthOp.REQUIRE_64_BYTES:if(64!==t.length)throw new Error(`Length is ${t.length}, not 64 bytes`);return t;case g.ics23.LengthOp.FIXED32_LITTLE:return new Uint8Array([...encodeFixed32Le(t.length),...t])}throw new Error(`Unsupported lengthop: ${e}`)}function encodeVarintProto(e){let t=[];let r=e;while(r>=128){const e=r%128+128;t=[...t,e];r/=128}t=[...t,r];return new Uint8Array(t)}function encodeFixed32Le(e){const t=new Uint8Array(4);let r=e;for(let e=t.length;e>0;e--){t[Math.abs(e-t.length)]=r%256;r=Math.floor(r/256)}return t}var E={};Object.defineProperty(E,"__esModule",{value:true});E.bytesBefore=E.ensureBytesBefore=E.bytesEqual=E.ensureBytesEqual=E.ensureInner=E.ensureLeaf=void 0;function ensureLeaf(e,t){if(e.hash!==t.hash)throw new Error(`Unexpected hashOp: ${e.hash}`);if(e.prehashKey!==t.prehashKey)throw new Error(`Unexpected prehashKey: ${e.prehashKey}`);if(e.prehashValue!==t.prehashValue)throw new Error(`Unexpected prehashValue: ${e.prehashValue}`);if(e.length!==t.length)throw new Error(`Unexpected length op: ${e.length}`);ensurePrefix(e.prefix,t.prefix)}E.ensureLeaf=ensureLeaf;function ensureInner(e,t,r){if(e.hash!==r.hash)throw new Error(`Unexpected hashOp: ${e.hash}`);if(!e.prefix)throw new Error("No prefix set for inner node");if(hasPrefix(e.prefix,t))throw new Error("Inner node has leaf prefix");if(e.prefix.length<(r.minPrefixLength||0))throw new Error(`Prefix too short: ${e.prefix.length} bytes`);const n=(r.childOrder.length-1)*r.childSize;if(e.prefix.length>(r.maxPrefixLength||0)+n)throw new Error(`Prefix too long: ${e.prefix.length} bytes`)}E.ensureInner=ensureInner;function ensurePrefix(e,t){if(t&&0!==t.length){if(!e)throw new Error("Target bytes missing");ensureBytesEqual(t,e.slice(0,t.length))}}function ensureBytesEqual(e,t){if(e.length!==t.length)throw new Error(`Different lengths ${e.length} vs ${t.length}`);for(let r=0;r<e.length;r++)if(e[r]!==t[r])throw new Error(`Arrays differ at index ${r}: ${e[r]} vs ${t[r]}`)}E.ensureBytesEqual=ensureBytesEqual;function bytesEqual(e,t){if(e.length!==t.length)return false;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return false;return true}E.bytesEqual=bytesEqual;function hasPrefix(e,t){if(!t||0===t.length)return false;if(!e)return false;if(e.length<=t.length)return false;for(let r=0;r<t.length;r++)if(e[r]!==t[r])return false;throw true}function ensureBytesBefore(e,t){if(!bytesBefore(e,t))throw new Error("first is after last")}E.ensureBytesBefore=ensureBytesBefore;function bytesBefore(e,t){const r=e.length<t.length?e.length:t.length;for(let n=0;n<r;n++){if(e[n]<t[n])return true;if(e[n]>t[n])return false}return e.length<t.length}E.bytesBefore=bytesBefore;var w={};Object.defineProperty(w,"__esModule",{value:true});w.ensureLeftNeighbor=w.ensureSpec=w.calculateExistenceRoot=w.verifyNonExistence=w.verifyExistence=w.smtSpec=w.tendermintSpec=w.iavlSpec=void 0;const v=p;const k=m;const S=E;w.iavlSpec={leafSpec:{prefix:Uint8Array.from([0]),hash:v.ics23.HashOp.SHA256,prehashValue:v.ics23.HashOp.SHA256,prehashKey:v.ics23.HashOp.NO_HASH,length:v.ics23.LengthOp.VAR_PROTO},innerSpec:{childOrder:[0,1],minPrefixLength:4,maxPrefixLength:12,childSize:33,hash:v.ics23.HashOp.SHA256}};w.tendermintSpec={leafSpec:{prefix:Uint8Array.from([0]),hash:v.ics23.HashOp.SHA256,prehashValue:v.ics23.HashOp.SHA256,prehashKey:v.ics23.HashOp.NO_HASH,length:v.ics23.LengthOp.VAR_PROTO},innerSpec:{childOrder:[0,1],minPrefixLength:1,maxPrefixLength:1,childSize:32,hash:v.ics23.HashOp.SHA256}};w.smtSpec={leafSpec:{hash:v.ics23.HashOp.SHA256,prehashKey:v.ics23.HashOp.NO_HASH,prehashValue:v.ics23.HashOp.SHA256,length:v.ics23.LengthOp.NO_PREFIX,prefix:Uint8Array.from([0])},innerSpec:{childOrder:[0,1],childSize:32,minPrefixLength:1,maxPrefixLength:1,emptyChild:new Uint8Array(32),hash:v.ics23.HashOp.SHA256},maxDepth:256};function verifyExistence$1(e,t,r,n,o){ensureSpec(e,t);const i=calculateExistenceRoot$1(e);(0,S.ensureBytesEqual)(i,r);(0,S.ensureBytesEqual)(n,e.key);(0,S.ensureBytesEqual)(o,e.value)}w.verifyExistence=verifyExistence$1;function verifyNonExistence$1(e,t,r,n){let o;let i;if(e.left){verifyExistence$1(e.left,t,r,e.left.key,e.left.value);o=e.left.key}if(e.right){verifyExistence$1(e.right,t,r,e.right.key,e.right.value);i=e.right.key}if(!o&&!i)throw new Error("neither left nor right proof defined");o&&(0,S.ensureBytesBefore)(o,n);i&&(0,S.ensureBytesBefore)(n,i);if(!t.innerSpec)throw new Error("no inner spec");o?i?ensureLeftNeighbor(t.innerSpec,e.left.path,e.right.path):ensureRightMost(t.innerSpec,e.left.path):ensureLeftMost(t.innerSpec,e.right.path)}w.verifyNonExistence=verifyNonExistence$1;function calculateExistenceRoot$1(e){if(!e.key||!e.value)throw new Error("Existence proof needs key and value set");if(!e.leaf)throw new Error("Existence proof must start with a leaf operation");const t=e.path||[];let r=(0,k.applyLeaf)(e.leaf,e.key,e.value);for(const e of t)r=(0,k.applyInner)(e,r);return r}w.calculateExistenceRoot=calculateExistenceRoot$1;function ensureSpec(e,t){if(!e.leaf)throw new Error("Existence proof must start with a leaf operation");if(!t.leafSpec)throw new Error("Spec must include leafSpec");if(!t.innerSpec)throw new Error("Spec must include innerSpec");(0,S.ensureLeaf)(e.leaf,t.leafSpec);const r=e.path||[];if(t.minDepth&&r.length<t.minDepth)throw new Error(`Too few inner nodes ${r.length}`);if(t.maxDepth&&r.length>t.maxDepth)throw new Error(`Too many inner nodes ${r.length}`);for(const e of r)(0,S.ensureInner)(e,t.leafSpec.prefix,t.innerSpec)}w.ensureSpec=ensureSpec;function ensureLeftMost(e,t){const{minPrefix:r,maxPrefix:n,suffix:o}=getPadding(e,0);for(const e of t)if(!hasPadding(e,r,n,o))throw new Error("Step not leftmost")}function ensureRightMost(e,t){const r=e.childOrder.length-1;const{minPrefix:n,maxPrefix:o,suffix:i}=getPadding(e,r);for(const e of t)if(!hasPadding(e,n,o,i))throw new Error("Step not leftmost")}function ensureLeftNeighbor(e,t,r){const n=[...t];const o=[...r];let i=n.pop();let s=o.pop();while((0,S.bytesEqual)(i.prefix,s.prefix)&&(0,S.bytesEqual)(i.suffix,s.suffix)){i=n.pop();s=o.pop()}if(!isLeftStep(e,i,s))throw new Error("Not left neightbor at first divergent step");ensureRightMost(e,n);ensureLeftMost(e,o)}w.ensureLeftNeighbor=ensureLeftNeighbor;function isLeftStep(e,t,r){const n=orderFromPadding(e,t);const o=orderFromPadding(e,r);return o===n+1}function orderFromPadding(e,t){for(let r=0;r<e.childOrder.length;r++){const{minPrefix:n,maxPrefix:o,suffix:i}=getPadding(e,r);if(hasPadding(t,n,o,i))return r}throw new Error("Cannot find any valid spacing for this node")}function hasPadding(e,t,r,n){return!((e.prefix||[]).length<t)&&(!((e.prefix||[]).length>r)&&(e.suffix||[]).length===n)}function getPadding(e,t){const r=getPosition(e.childOrder,t);const n=r*e.childSize;const o=n+e.minPrefixLength;const i=n+e.maxPrefixLength;const s=(e.childOrder.length-1-r)*e.childSize;return{minPrefix:o,maxPrefix:i,suffix:s}}function getPosition(e,t){if(t<0||t>=e.length)throw new Error(`Invalid branch: ${t}`);return e.findIndex((e=>e===t))}var j={};Object.defineProperty(j,"__esModule",{value:true});j.batchVerifyNonMembership=j.batchVerifyMembership=j.verifyNonMembership=j.verifyMembership=void 0;const C=h;const B=w;const I=E;function verifyMembership$1(e,t,r,n,o){const i=(0,C.decompress)(e);const s=getExistForKey(i,n);if(!s)return false;try{(0,B.verifyExistence)(s,t,r,n,o);return true}catch(e){return false}}j.verifyMembership=verifyMembership$1;function verifyNonMembership$1(e,t,r,n){const o=(0,C.decompress)(e);const i=getNonExistForKey(o,n);if(!i)return false;try{(0,B.verifyNonExistence)(i,t,r,n);return true}catch(e){return false}}j.verifyNonMembership=verifyNonMembership$1;function batchVerifyMembership(e,t,r,n){const o=(0,C.decompress)(e);for(const[e,i]of n.entries())if(!verifyMembership$1(o,t,r,e,i))return false;return true}j.batchVerifyMembership=batchVerifyMembership;function batchVerifyNonMembership(e,t,r,n){const o=(0,C.decompress)(e);for(const e of n)if(!verifyNonMembership$1(o,t,r,e))return false;return true}j.batchVerifyNonMembership=batchVerifyNonMembership;function getExistForKey(e,t){const match=e=>!!e&&(0,I.bytesEqual)(t,e.key);return match(e.exist)?e.exist:e.batch?e.batch.entries.map((e=>e.exist||null)).find(match):void 0}function getNonExistForKey(e,t){const match=e=>!!e&&(!e.left||(0,I.bytesBefore)(e.left.key,t))&&(!e.right||(0,I.bytesBefore)(t,e.right.key));return match(e.nonexist)?e.nonexist:e.batch?e.batch.entries.map((e=>e.nonexist||null)).find(match):void 0}var N={};Object.defineProperty(N,"__esModule",{value:true});N.verifyNonExistence=N.verifyExistence=N.tendermintSpec=N.iavlSpec=N.calculateExistenceRoot=N.verifyNonMembership=N.verifyMembership=N.ics23=void 0;var L=p;Object.defineProperty(N,"ics23",{enumerable:true,get:function(){return L.ics23}});var A=j;Object.defineProperty(N,"verifyMembership",{enumerable:true,get:function(){return A.verifyMembership}});Object.defineProperty(N,"verifyNonMembership",{enumerable:true,get:function(){return A.verifyNonMembership}});var D=w;Object.defineProperty(N,"calculateExistenceRoot",{enumerable:true,get:function(){return D.calculateExistenceRoot}});Object.defineProperty(N,"iavlSpec",{enumerable:true,get:function(){return D.iavlSpec}});Object.defineProperty(N,"tendermintSpec",{enumerable:true,get:function(){return D.tendermintSpec}});Object.defineProperty(N,"verifyExistence",{enumerable:true,get:function(){return D.verifyExistence}});Object.defineProperty(N,"verifyNonExistence",{enumerable:true,get:function(){return D.verifyNonExistence}});const H=N.__esModule,_=N.verifyNonExistence,T=N.verifyExistence,R=N.tendermintSpec,M=N.iavlSpec,V=N.calculateExistenceRoot,K=N.verifyNonMembership,J=N.verifyMembership,$=N.ics23;export{H as __esModule,V as calculateExistenceRoot,N as default,M as iavlSpec,$ as ics23,R as tendermintSpec,T as verifyExistence,J as verifyMembership,_ as verifyNonExistence,K as verifyNonMembership};

