import t from"symbol-observable/ponyfill";import e from"globalthis";var r={};var o=r&&r.__extends||function(){var extendStatics=function(t,e){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return extendStatics(t,e)};return function(t,e){extendStatics(t,e);function __(){this.constructor=t}t.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}}();Object.defineProperty(r,"__esModule",{value:true});r.NO_IL=r.NO=r.MemoryStream=r.Stream=void 0;var i=t;var n=e;var s=i.default(n.getPolyfill());var a={};r.NO=a;function noop(){}function cp(t){var e=t.length;var r=Array(e);for(var o=0;o<e;++o)r[o]=t[o];return r}function and(t,e){return function andFn(r){return t(r)&&e(r)}}function _try(t,e,r){try{return t.f(e)}catch(t){r._e(t);return a}}var h={_n:noop,_e:noop,_c:noop};r.NO_IL=h;function internalizeProducer(t){t._start=function _start(t){t.next=t._n;t.error=t._e;t.complete=t._c;this.start(t)};t._stop=t.stop}var p=function(){function StreamSub(t,e){this._stream=t;this._listener=e}StreamSub.prototype.unsubscribe=function(){this._stream._remove(this._listener)};return StreamSub}();var u=function(){function Observer(t){this._listener=t}Observer.prototype.next=function(t){this._listener._n(t)};Observer.prototype.error=function(t){this._listener._e(t)};Observer.prototype.complete=function(){this._listener._c()};return Observer}();var c=function(){function FromObservable(t){this.type="fromObservable";this.ins=t;this.active=false}FromObservable.prototype._start=function(t){this.out=t;this.active=true;this._sub=this.ins.subscribe(new u(t));this.active||this._sub.unsubscribe()};FromObservable.prototype._stop=function(){this._sub&&this._sub.unsubscribe();this.active=false};return FromObservable}();var f=function(){function Merge(t){this.type="merge";this.insArr=t;this.out=a;this.ac=0}Merge.prototype._start=function(t){this.out=t;var e=this.insArr;var r=e.length;this.ac=r;for(var o=0;o<r;o++)e[o]._add(this)};Merge.prototype._stop=function(){var t=this.insArr;var e=t.length;for(var r=0;r<e;r++)t[r]._remove(this);this.out=a};Merge.prototype._n=function(t){var e=this.out;e!==a&&e._n(t)};Merge.prototype._e=function(t){var e=this.out;e!==a&&e._e(t)};Merge.prototype._c=function(){if(--this.ac<=0){var t=this.out;if(t===a)return;t._c()}};return Merge}();var _=function(){function CombineListener(t,e,r){this.i=t;this.out=e;this.p=r;r.ils.push(this)}CombineListener.prototype._n=function(t){var e=this.p,r=this.out;if(r!==a&&e.up(t,this.i)){var o=cp(e.vals);r._n(o)}};CombineListener.prototype._e=function(t){var e=this.out;e!==a&&e._e(t)};CombineListener.prototype._c=function(){var t=this.p;t.out!==a&&0===--t.Nc&&t.out._c()};return CombineListener}();var m=function(){function Combine(t){this.type="combine";this.insArr=t;this.out=a;this.ils=[];this.Nc=this.Nn=0;this.vals=[]}Combine.prototype.up=function(t,e){var r=this.vals[e];var o=this.Nn?r===a?--this.Nn:this.Nn:0;this.vals[e]=t;return 0===o};Combine.prototype._start=function(t){this.out=t;var e=this.insArr;var r=this.Nc=this.Nn=e.length;var o=this.vals=new Array(r);if(0===r){t._n([]);t._c()}else for(var i=0;i<r;i++){o[i]=a;e[i]._add(new _(i,t,this))}};Combine.prototype._stop=function(){var t=this.insArr;var e=t.length;var r=this.ils;for(var o=0;o<e;o++)t[o]._remove(r[o]);this.out=a;this.ils=[];this.vals=[]};return Combine}();var l=function(){function FromArray(t){this.type="fromArray";this.a=t}FromArray.prototype._start=function(t){var e=this.a;for(var r=0,o=e.length;r<o;r++)t._n(e[r]);t._c()};FromArray.prototype._stop=function(){};return FromArray}();var y=function(){function FromPromise(t){this.type="fromPromise";this.on=false;this.p=t}FromPromise.prototype._start=function(t){var e=this;this.on=true;this.p.then((function(r){if(e.on){t._n(r);t._c()}}),(function(e){t._e(e)})).then(noop,(function(t){setTimeout((function(){throw t}))}))};FromPromise.prototype._stop=function(){this.on=false};return FromPromise}();var v=function(){function Periodic(t){this.type="periodic";this.period=t;this.intervalID=-1;this.i=0}Periodic.prototype._start=function(t){var e=this;function intervalHandler(){t._n(e.i++)}this.intervalID=setInterval(intervalHandler,this.period)};Periodic.prototype._stop=function(){-1!==this.intervalID&&clearInterval(this.intervalID);this.intervalID=-1;this.i=0};return Periodic}();var d=function(){function Debug(t,e){this.type="debug";this.ins=t;this.out=a;this.s=noop;this.l="";"string"===typeof e?this.l=e:"function"===typeof e&&(this.s=e)}Debug.prototype._start=function(t){this.out=t;this.ins._add(this)};Debug.prototype._stop=function(){this.ins._remove(this);this.out=a};Debug.prototype._n=function(t){var e=this.out;if(e!==a){var r=this.s,o=this.l;if(r!==noop)try{r(t)}catch(t){e._e(t)}else o?console.log(o+":",t):console.log(t);e._n(t)}};Debug.prototype._e=function(t){var e=this.out;e!==a&&e._e(t)};Debug.prototype._c=function(){var t=this.out;t!==a&&t._c()};return Debug}();var S=function(){function Drop(t,e){this.type="drop";this.ins=e;this.out=a;this.max=t;this.dropped=0}Drop.prototype._start=function(t){this.out=t;this.dropped=0;this.ins._add(this)};Drop.prototype._stop=function(){this.ins._remove(this);this.out=a};Drop.prototype._n=function(t){var e=this.out;e!==a&&this.dropped++>=this.max&&e._n(t)};Drop.prototype._e=function(t){var e=this.out;e!==a&&e._e(t)};Drop.prototype._c=function(){var t=this.out;t!==a&&t._c()};return Drop}();var b=function(){function EndWhenListener(t,e){this.out=t;this.op=e}EndWhenListener.prototype._n=function(){this.op.end()};EndWhenListener.prototype._e=function(t){this.out._e(t)};EndWhenListener.prototype._c=function(){this.op.end()};return EndWhenListener}();var w=function(){function EndWhen(t,e){this.type="endWhen";this.ins=e;this.out=a;this.o=t;this.oil=h}EndWhen.prototype._start=function(t){this.out=t;this.o._add(this.oil=new b(t,this));this.ins._add(this)};EndWhen.prototype._stop=function(){this.ins._remove(this);this.o._remove(this.oil);this.out=a;this.oil=h};EndWhen.prototype.end=function(){var t=this.out;t!==a&&t._c()};EndWhen.prototype._n=function(t){var e=this.out;e!==a&&e._n(t)};EndWhen.prototype._e=function(t){var e=this.out;e!==a&&e._e(t)};EndWhen.prototype._c=function(){this.end()};return EndWhen}();var g=function(){function Filter(t,e){this.type="filter";this.ins=e;this.out=a;this.f=t}Filter.prototype._start=function(t){this.out=t;this.ins._add(this)};Filter.prototype._stop=function(){this.ins._remove(this);this.out=a};Filter.prototype._n=function(t){var e=this.out;if(e!==a){var r=_try(this,t,e);r!==a&&r&&e._n(t)}};Filter.prototype._e=function(t){var e=this.out;e!==a&&e._e(t)};Filter.prototype._c=function(){var t=this.out;t!==a&&t._c()};return Filter}();var F=function(){function FlattenListener(t,e){this.out=t;this.op=e}FlattenListener.prototype._n=function(t){this.out._n(t)};FlattenListener.prototype._e=function(t){this.out._e(t)};FlattenListener.prototype._c=function(){this.op.inner=a;this.op.less()};return FlattenListener}();var M=function(){function Flatten(t){this.type="flatten";this.ins=t;this.out=a;this.open=true;this.inner=a;this.il=h}Flatten.prototype._start=function(t){this.out=t;this.open=true;this.inner=a;this.il=h;this.ins._add(this)};Flatten.prototype._stop=function(){this.ins._remove(this);this.inner!==a&&this.inner._remove(this.il);this.out=a;this.open=true;this.inner=a;this.il=h};Flatten.prototype.less=function(){var t=this.out;t!==a&&(this.open||this.inner!==a||t._c())};Flatten.prototype._n=function(t){var e=this.out;if(e!==a){var r=this,o=r.inner,i=r.il;o!==a&&i!==h&&o._remove(i);(this.inner=t)._add(this.il=new F(e,this))}};Flatten.prototype._e=function(t){var e=this.out;e!==a&&e._e(t)};Flatten.prototype._c=function(){this.open=false;this.less()};return Flatten}();var O=function(){function Fold(t,e,r){var o=this;this.type="fold";this.ins=r;this.out=a;this.f=function(e){return t(o.acc,e)};this.acc=this.seed=e}Fold.prototype._start=function(t){this.out=t;this.acc=this.seed;t._n(this.acc);this.ins._add(this)};Fold.prototype._stop=function(){this.ins._remove(this);this.out=a;this.acc=this.seed};Fold.prototype._n=function(t){var e=this.out;if(e!==a){var r=_try(this,t,e);r!==a&&e._n(this.acc=r)}};Fold.prototype._e=function(t){var e=this.out;e!==a&&e._e(t)};Fold.prototype._c=function(){var t=this.out;t!==a&&t._c()};return Fold}();var L=function(){function Last(t){this.type="last";this.ins=t;this.out=a;this.has=false;this.val=a}Last.prototype._start=function(t){this.out=t;this.has=false;this.ins._add(this)};Last.prototype._stop=function(){this.ins._remove(this);this.out=a;this.val=a};Last.prototype._n=function(t){this.has=true;this.val=t};Last.prototype._e=function(t){var e=this.out;e!==a&&e._e(t)};Last.prototype._c=function(){var t=this.out;if(t!==a)if(this.has){t._n(this.val);t._c()}else t._e(new Error("last() failed because input stream completed"))};return Last}();var D=function(){function MapOp(t,e){this.type="map";this.ins=e;this.out=a;this.f=t}MapOp.prototype._start=function(t){this.out=t;this.ins._add(this)};MapOp.prototype._stop=function(){this.ins._remove(this);this.out=a};MapOp.prototype._n=function(t){var e=this.out;if(e!==a){var r=_try(this,t,e);r!==a&&e._n(r)}};MapOp.prototype._e=function(t){var e=this.out;e!==a&&e._e(t)};MapOp.prototype._c=function(){var t=this.out;t!==a&&t._c()};return MapOp}();var E=function(){function Remember(t){this.type="remember";this.ins=t;this.out=a}Remember.prototype._start=function(t){this.out=t;this.ins._add(t)};Remember.prototype._stop=function(){this.ins._remove(this.out);this.out=a};return Remember}();var N=function(){function ReplaceError(t,e){this.type="replaceError";this.ins=e;this.out=a;this.f=t}ReplaceError.prototype._start=function(t){this.out=t;this.ins._add(this)};ReplaceError.prototype._stop=function(){this.ins._remove(this);this.out=a};ReplaceError.prototype._n=function(t){var e=this.out;e!==a&&e._n(t)};ReplaceError.prototype._e=function(t){var e=this.out;if(e!==a)try{this.ins._remove(this);(this.ins=this.f(t))._add(this)}catch(t){e._e(t)}};ReplaceError.prototype._c=function(){var t=this.out;t!==a&&t._c()};return ReplaceError}();var W=function(){function StartWith(t,e){this.type="startWith";this.ins=t;this.out=a;this.val=e}StartWith.prototype._start=function(t){this.out=t;this.out._n(this.val);this.ins._add(t)};StartWith.prototype._stop=function(){this.ins._remove(this.out);this.out=a};return StartWith}();var x=function(){function Take(t,e){this.type="take";this.ins=e;this.out=a;this.max=t;this.taken=0}Take.prototype._start=function(t){this.out=t;this.taken=0;this.max<=0?t._c():this.ins._add(this)};Take.prototype._stop=function(){this.ins._remove(this);this.out=a};Take.prototype._n=function(t){var e=this.out;if(e!==a){var r=++this.taken;if(r<this.max)e._n(t);else if(r===this.max){e._n(t);e._c()}}};Take.prototype._e=function(t){var e=this.out;e!==a&&e._e(t)};Take.prototype._c=function(){var t=this.out;t!==a&&t._c()};return Take}();var A=function(){function Stream(t){this._prod=t||a;this._ils=[];this._stopID=a;this._dl=a;this._d=false;this._target=null;this._err=a}Stream.prototype._n=function(t){var e=this._ils;var r=e.length;this._d&&this._dl._n(t);if(1==r)e[0]._n(t);else{if(0==r)return;var o=cp(e);for(var i=0;i<r;i++)o[i]._n(t)}};Stream.prototype._e=function(t){if(this._err===a){this._err=t;var e=this._ils;var r=e.length;this._x();this._d&&this._dl._e(t);if(1==r)e[0]._e(t);else{if(0==r)return;var o=cp(e);for(var i=0;i<r;i++)o[i]._e(t)}if(!this._d&&0==r)throw this._err}};Stream.prototype._c=function(){var t=this._ils;var e=t.length;this._x();this._d&&this._dl._c();if(1==e)t[0]._c();else{if(0==e)return;var r=cp(t);for(var o=0;o<e;o++)r[o]._c()}};Stream.prototype._x=function(){if(0!==this._ils.length){this._prod!==a&&this._prod._stop();this._err=a;this._ils=[]}};Stream.prototype._stopNow=function(){this._prod._stop();this._err=a;this._stopID=a};Stream.prototype._add=function(t){var e=this._target;if(e)return e._add(t);var r=this._ils;r.push(t);if(!(r.length>1))if(this._stopID!==a){clearTimeout(this._stopID);this._stopID=a}else{var o=this._prod;o!==a&&o._start(this)}};Stream.prototype._remove=function(t){var e=this;var r=this._target;if(r)return r._remove(t);var o=this._ils;var i=o.indexOf(t);if(i>-1){o.splice(i,1);if(this._prod!==a&&o.length<=0){this._err=a;this._stopID=setTimeout((function(){return e._stopNow()}))}else 1===o.length&&this._pruneCycles()}};Stream.prototype._pruneCycles=function(){this._hasNoSinks(this,[])&&this._remove(this._ils[0])};Stream.prototype._hasNoSinks=function(t,e){if(-1!==e.indexOf(t))return true;if(t.out===this)return true;if(t.out&&t.out!==a)return this._hasNoSinks(t.out,e.concat(t));if(t._ils){for(var r=0,o=t._ils.length;r<o;r++)if(!this._hasNoSinks(t._ils[r],e.concat(t)))return false;return true}return false};Stream.prototype.ctor=function(){return this instanceof I?I:Stream};
/**
   * Adds a Listener to the Stream.
   *
   * @param {Listener} listener
   */Stream.prototype.addListener=function(t){t._n=t.next||noop;t._e=t.error||noop;t._c=t.complete||noop;this._add(t)};
/**
   * Removes a Listener from the Stream, assuming the Listener was added to it.
   *
   * @param {Listener<T>} listener
   */Stream.prototype.removeListener=function(t){this._remove(t)};
/**
   * Adds a Listener to the Stream returning a Subscription to remove that
   * listener.
   *
   * @param {Listener} listener
   * @returns {Subscription}
   */Stream.prototype.subscribe=function(t){this.addListener(t);return new p(this,t)};
/**
   * Add interop between most.js and RxJS 5
   *
   * @returns {Stream}
   */Stream.prototype[s]=function(){return this};
/**
   * Creates a new Stream given a Producer.
   *
   * @factory true
   * @param {Producer} producer An optional Producer that dictates how to
   * start, generate events, and stop the Stream.
   * @return {Stream}
   */Stream.create=function(t){if(t){if("function"!==typeof t.start||"function"!==typeof t.stop)throw new Error("producer requires both start and stop functions");internalizeProducer(t)}return new Stream(t)};
/**
   * Creates a new MemoryStream given a Producer.
   *
   * @factory true
   * @param {Producer} producer An optional Producer that dictates how to
   * start, generate events, and stop the Stream.
   * @return {MemoryStream}
   */Stream.createWithMemory=function(t){t&&internalizeProducer(t);return new I(t)};Stream.never=function(){return new Stream({_start:noop,_stop:noop})};Stream.empty=function(){return new Stream({_start:function(t){t._c()},_stop:noop})};
/**
   * Creates a Stream that immediately emits an "error" notification with the
   * value you passed as the `error` argument when the stream starts, and that's
   * it.
   *
   * Marble diagram:
   *
   * ```text
   * throw(X)
   * -X
   * ```
   *
   * @factory true
   * @param error The error event to emit on the created stream.
   * @return {Stream}
   */Stream.throw=function(t){return new Stream({_start:function(e){e._e(t)},_stop:noop})};
/**
   * Creates a stream from an Array, Promise, or an Observable.
   *
   * @factory true
   * @param {Array|PromiseLike|Observable} input The input to make a stream from.
   * @return {Stream}
   */Stream.from=function(t){if("function"===typeof t[s])return Stream.fromObservable(t);if("function"===typeof t.then)return Stream.fromPromise(t);if(Array.isArray(t))return Stream.fromArray(t);throw new TypeError("Type of input to from() must be an Array, Promise, or Observable")};
/**
   * Creates a Stream that immediately emits the arguments that you give to
   * *of*, then completes.
   *
   * Marble diagram:
   *
   * ```text
   * of(1,2,3)
   * 123|
   * ```
   *
   * @factory true
   * @param a The first value you want to emit as an event on the stream.
   * @param b The second value you want to emit as an event on the stream. One
   * or more of these values may be given as arguments.
   * @return {Stream}
   */Stream.of=function(){var t=[];for(var e=0;e<arguments.length;e++)t[e]=arguments[e];return Stream.fromArray(t)};
/**
   * Converts an array to a stream. The returned stream will emit synchronously
   * all the items in the array, and then complete.
   *
   * Marble diagram:
   *
   * ```text
   * fromArray([1,2,3])
   * 123|
   * ```
   *
   * @factory true
   * @param {Array} array The array to be converted as a stream.
   * @return {Stream}
   */Stream.fromArray=function(t){return new Stream(new l(t))};
/**
   * Converts a promise to a stream. The returned stream will emit the resolved
   * value of the promise, and then complete. However, if the promise is
   * rejected, the stream will emit the corresponding error.
   *
   * Marble diagram:
   *
   * ```text
   * fromPromise( ----42 )
   * -----------------42|
   * ```
   *
   * @factory true
   * @param {PromiseLike} promise The promise to be converted as a stream.
   * @return {Stream}
   */Stream.fromPromise=function(t){return new Stream(new y(t))};
/**
   * Converts an Observable into a Stream.
   *
   * @factory true
   * @param {any} observable The observable to be converted as a stream.
   * @return {Stream}
   */Stream.fromObservable=function(t){if(void 0!==t.endWhen)return t;var e="function"===typeof t[s]?t[s]():t;return new Stream(new c(e))};
/**
   * Creates a stream that periodically emits incremental numbers, every
   * `period` milliseconds.
   *
   * Marble diagram:
   *
   * ```text
   *     periodic(1000)
   * ---0---1---2---3---4---...
   * ```
   *
   * @factory true
   * @param {number} period The interval in milliseconds to use as a rate of
   * emission.
   * @return {Stream}
   */Stream.periodic=function(t){return new Stream(new v(t))};Stream.prototype._map=function(t){return new(this.ctor())(new D(t,this))};
/**
   * Transforms each event from the input Stream through a `project` function,
   * to get a Stream that emits those transformed events.
   *
   * Marble diagram:
   *
   * ```text
   * --1---3--5-----7------
   *    map(i => i * 10)
   * --10--30-50----70-----
   * ```
   *
   * @param {Function} project A function of type `(t: T) => U` that takes event
   * `t` of type `T` from the input Stream and produces an event of type `U`, to
   * be emitted on the output Stream.
   * @return {Stream}
   */Stream.prototype.map=function(t){return this._map(t)};
/**
   * It's like `map`, but transforms each input event to always the same
   * constant value on the output Stream.
   *
   * Marble diagram:
   *
   * ```text
   * --1---3--5-----7-----
   *       mapTo(10)
   * --10--10-10----10----
   * ```
   *
   * @param projectedValue A value to emit on the output Stream whenever the
   * input Stream emits any value.
   * @return {Stream}
   */Stream.prototype.mapTo=function(t){var e=this.map((function(){return t}));var r=e._prod;r.type="mapTo";return e};
/**
   * Only allows events that pass the test given by the `passes` argument.
   *
   * Each event from the input stream is given to the `passes` function. If the
   * function returns `true`, the event is forwarded to the output stream,
   * otherwise it is ignored and not forwarded.
   *
   * Marble diagram:
   *
   * ```text
   * --1---2--3-----4-----5---6--7-8--
   *     filter(i => i % 2 === 0)
   * ------2--------4---------6----8--
   * ```
   *
   * @param {Function} passes A function of type `(t: T) => boolean` that takes
   * an event from the input stream and checks if it passes, by returning a
   * boolean.
   * @return {Stream}
   */Stream.prototype.filter=function(t){var e=this._prod;return new Stream(e instanceof g?new g(and(e.f,t),e.ins):new g(t,this))};
/**
   * Lets the first `amount` many events from the input stream pass to the
   * output stream, then makes the output stream complete.
   *
   * Marble diagram:
   *
   * ```text
   * --a---b--c----d---e--
   *    take(3)
   * --a---b--c|
   * ```
   *
   * @param {number} amount How many events to allow from the input stream
   * before completing the output stream.
   * @return {Stream}
   */Stream.prototype.take=function(t){return new(this.ctor())(new x(t,this))};
/**
   * Ignores the first `amount` many events from the input stream, and then
   * after that starts forwarding events from the input stream to the output
   * stream.
   *
   * Marble diagram:
   *
   * ```text
   * --a---b--c----d---e--
   *       drop(3)
   * --------------d---e--
   * ```
   *
   * @param {number} amount How many events to ignore from the input stream
   * before forwarding all events from the input stream to the output stream.
   * @return {Stream}
   */Stream.prototype.drop=function(t){return new Stream(new S(t,this))};Stream.prototype.last=function(){return new Stream(new L(this))};
/**
   * Prepends the given `initial` value to the sequence of events emitted by the
   * input stream. The returned stream is a MemoryStream, which means it is
   * already `remember()`'d.
   *
   * Marble diagram:
   *
   * ```text
   * ---1---2-----3---
   *   startWith(0)
   * 0--1---2-----3---
   * ```
   *
   * @param initial The value or event to prepend.
   * @return {MemoryStream}
   */Stream.prototype.startWith=function(t){return new I(new W(this,t))};
/**
   * Uses another stream to determine when to complete the current stream.
   *
   * When the given `other` stream emits an event or completes, the output
   * stream will complete. Before that happens, the output stream will behaves
   * like the input stream.
   *
   * Marble diagram:
   *
   * ```text
   * ---1---2-----3--4----5----6---
   *   endWhen( --------a--b--| )
   * ---1---2-----3--4--|
   * ```
   *
   * @param other Some other stream that is used to know when should the output
   * stream of this operator complete.
   * @return {Stream}
   */Stream.prototype.endWhen=function(t){return new(this.ctor())(new w(t,this))};
/**
   * "Folds" the stream onto itself.
   *
   * Combines events from the past throughout
   * the entire execution of the input stream, allowing you to accumulate them
   * together. It's essentially like `Array.prototype.reduce`. The returned
   * stream is a MemoryStream, which means it is already `remember()`'d.
   *
   * The output stream starts by emitting the `seed` which you give as argument.
   * Then, when an event happens on the input stream, it is combined with that
   * seed value through the `accumulate` function, and the output value is
   * emitted on the output stream. `fold` remembers that output value as `acc`
   * ("accumulator"), and then when a new input event `t` happens, `acc` will be
   * combined with that to produce the new `acc` and so forth.
   *
   * Marble diagram:
   *
   * ```text
   * ------1-----1--2----1----1------
   *   fold((acc, x) => acc + x, 3)
   * 3-----4-----5--7----8----9------
   * ```
   *
   * @param {Function} accumulate A function of type `(acc: R, t: T) => R` that
   * takes the previous accumulated value `acc` and the incoming event from the
   * input stream and produces the new accumulated value.
   * @param seed The initial accumulated value, of type `R`.
   * @return {MemoryStream}
   */Stream.prototype.fold=function(t,e){return new I(new O(t,e,this))};
/**
   * Replaces an error with another stream.
   *
   * When (and if) an error happens on the input stream, instead of forwarding
   * that error to the output stream, *replaceError* will call the `replace`
   * function which returns the stream that the output stream will replicate.
   * And, in case that new stream also emits an error, `replace` will be called
   * again to get another stream to start replicating.
   *
   * Marble diagram:
   *
   * ```text
   * --1---2-----3--4-----X
   *   replaceError( () => --10--| )
   * --1---2-----3--4--------10--|
   * ```
   *
   * @param {Function} replace A function of type `(err) => Stream` that takes
   * the error that occurred on the input stream or on the previous replacement
   * stream and returns a new stream. The output stream will behave like the
   * stream that this function returns.
   * @return {Stream}
   */Stream.prototype.replaceError=function(t){return new(this.ctor())(new N(t,this))};Stream.prototype.flatten=function(){return new Stream(new M(this))};
/**
   * Passes the input stream to a custom operator, to produce an output stream.
   *
   * *compose* is a handy way of using an existing function in a chained style.
   * Instead of writing `outStream = f(inStream)` you can write
   * `outStream = inStream.compose(f)`.
   *
   * @param {function} operator A function that takes a stream as input and
   * returns a stream as well.
   * @return {Stream}
   */Stream.prototype.compose=function(t){return t(this)};Stream.prototype.remember=function(){return new I(new E(this))};
/**
   * Returns an output stream that identically behaves like the input stream,
   * but also runs a `spy` function for each event, to help you debug your app.
   *
   * *debug* takes a `spy` function as argument, and runs that for each event
   * happening on the input stream. If you don't provide the `spy` argument,
   * then *debug* will just `console.log` each event. This helps you to
   * understand the flow of events through some operator chain.
   *
   * Please note that if the output stream has no listeners, then it will not
   * start, which means `spy` will never run because no actual event happens in
   * that case.
   *
   * Marble diagram:
   *
   * ```text
   * --1----2-----3-----4--
   *         debug
   * --1----2-----3-----4--
   * ```
   *
   * @param {function} labelOrSpy A string to use as the label when printing
   * debug information on the console, or a 'spy' function that takes an event
   * as argument, and does not need to return anything.
   * @return {Stream}
   */Stream.prototype.debug=function(t){return new(this.ctor())(new d(this,t))};
/**
   * *imitate* changes this current Stream to emit the same events that the
   * `other` given Stream does. This method returns nothing.
   *
   * This method exists to allow one thing: **circular dependency of streams**.
   * For instance, let's imagine that for some reason you need to create a
   * circular dependency where stream `first$` depends on stream `second$`
   * which in turn depends on `first$`:
   *
   * <!-- skip-example -->
   * ```js
   * import delay from 'xstream/extra/delay'
   *
   * var first$ = second$.map(x => x * 10).take(3);
   * var second$ = first$.map(x => x + 1).startWith(1).compose(delay(100));
   * ```
   *
   * However, that is invalid JavaScript, because `second$` is undefined
   * on the first line. This is how *imitate* can help solve it:
   *
   * ```js
   * import delay from 'xstream/extra/delay'
   *
   * var secondProxy$ = xs.create();
   * var first$ = secondProxy$.map(x => x * 10).take(3);
   * var second$ = first$.map(x => x + 1).startWith(1).compose(delay(100));
   * secondProxy$.imitate(second$);
   * ```
   *
   * We create `secondProxy$` before the others, so it can be used in the
   * declaration of `first$`. Then, after both `first$` and `second$` are
   * defined, we hook `secondProxy$` with `second$` with `imitate()` to tell
   * that they are "the same". `imitate` will not trigger the start of any
   * stream, it just binds `secondProxy$` and `second$` together.
   *
   * The following is an example where `imitate()` is important in Cycle.js
   * applications. A parent component contains some child components. A child
   * has an action stream which is given to the parent to define its state:
   *
   * <!-- skip-example -->
   * ```js
   * const childActionProxy$ = xs.create();
   * const parent = Parent({...sources, childAction$: childActionProxy$});
   * const childAction$ = parent.state$.map(s => s.child.action$).flatten();
   * childActionProxy$.imitate(childAction$);
   * ```
   *
   * Note, though, that **`imitate()` does not support MemoryStreams**. If we
   * would attempt to imitate a MemoryStream in a circular dependency, we would
   * either get a race condition (where the symptom would be "nothing happens")
   * or an infinite cyclic emission of values. It's useful to think about
   * MemoryStreams as cells in a spreadsheet. It doesn't make any sense to
   * define a spreadsheet cell `A1` with a formula that depends on `B1` and
   * cell `B1` defined with a formula that depends on `A1`.
   *
   * If you find yourself wanting to use `imitate()` with a
   * MemoryStream, you should rework your code around `imitate()` to use a
   * Stream instead. Look for the stream in the circular dependency that
   * represents an event stream, and that would be a candidate for creating a
   * proxy Stream which then imitates the target Stream.
   *
   * @param {Stream} target The other stream to imitate on the current one. Must
   * not be a MemoryStream.
   */Stream.prototype.imitate=function(t){if(t instanceof I)throw new Error("A MemoryStream was given to imitate(), but it only "+"supports a Stream. Read more about this restriction here: "+"https://github.com/staltz/xstream#faq");this._target=t;for(var e=this._ils,r=e.length,o=0;o<r;o++)t._add(e[o]);this._ils=[]};
/**
   * Forces the Stream to emit the given value to its listeners.
   *
   * As the name indicates, if you use this, you are most likely doing something
   * The Wrong Way. Please try to understand the reactive way before using this
   * method. Use it only when you know what you are doing.
   *
   * @param value The "next" value you want to broadcast to all listeners of
   * this Stream.
   */Stream.prototype.shamefullySendNext=function(t){this._n(t)};
/**
   * Forces the Stream to emit the given error to its listeners.
   *
   * As the name indicates, if you use this, you are most likely doing something
   * The Wrong Way. Please try to understand the reactive way before using this
   * method. Use it only when you know what you are doing.
   *
   * @param {any} error The error you want to broadcast to all the listeners of
   * this Stream.
   */Stream.prototype.shamefullySendError=function(t){this._e(t)};Stream.prototype.shamefullySendComplete=function(){this._c()};
/**
   * Adds a "debug" listener to the stream. There can only be one debug
   * listener, that's why this is 'setDebugListener'. To remove the debug
   * listener, just call setDebugListener(null).
   *
   * A debug listener is like any other listener. The only difference is that a
   * debug listener is "stealthy": its presence/absence does not trigger the
   * start/stop of the stream (or the producer inside the stream). This is
   * useful so you can inspect what is going on without changing the behavior
   * of the program. If you have an idle stream and you add a normal listener to
   * it, the stream will start executing. But if you set a debug listener on an
   * idle stream, it won't start executing (not until the first normal listener
   * is added).
   *
   * As the name indicates, we don't recommend using this method to build app
   * logic. In fact, in most cases the debug operator works just fine. Only use
   * this one if you know what you're doing.
   *
   * @param {Listener<T>} listener
   */Stream.prototype.setDebugListener=function(t){if(t){this._d=true;t._n=t.next||noop;t._e=t.error||noop;t._c=t.complete||noop;this._dl=t}else{this._d=false;this._dl=a}};
/**
   * Blends multiple streams together, emitting events from all of them
   * concurrently.
   *
   * *merge* takes multiple streams as arguments, and creates a stream that
   * behaves like each of the argument streams, in parallel.
   *
   * Marble diagram:
   *
   * ```text
   * --1----2-----3--------4---
   * ----a-----b----c---d------
   *            merge
   * --1-a--2--b--3-c---d--4---
   * ```
   *
   * @factory true
   * @param {Stream} stream1 A stream to merge together with other streams.
   * @param {Stream} stream2 A stream to merge together with other streams. Two
   * or more streams may be given as arguments.
   * @return {Stream}
   */Stream.merge=function merge(){var t=[];for(var e=0;e<arguments.length;e++)t[e]=arguments[e];return new Stream(new f(t))};
/**
   * Combines multiple input streams together to return a stream whose events
   * are arrays that collect the latest events from each input stream.
   *
   * *combine* internally remembers the most recent event from each of the input
   * streams. When any of the input streams emits an event, that event together
   * with all the other saved events are combined into an array. That array will
   * be emitted on the output stream. It's essentially a way of joining together
   * the events from multiple streams.
   *
   * Marble diagram:
   *
   * ```text
   * --1----2-----3--------4---
   * ----a-----b-----c--d------
   *          combine
   * ----1a-2a-2b-3b-3c-3d-4d--
   * ```
   *
   * @factory true
   * @param {Stream} stream1 A stream to combine together with other streams.
   * @param {Stream} stream2 A stream to combine together with other streams.
   * Multiple streams, not just two, may be given as arguments.
   * @return {Stream}
   */Stream.combine=function combine(){var t=[];for(var e=0;e<arguments.length;e++)t[e]=arguments[e];return new Stream(new m(t))};return Stream}();r.Stream=A;var I=function(t){o(MemoryStream,t);function MemoryStream(e){var r=t.call(this,e)||this;r._has=false;return r}MemoryStream.prototype._n=function(e){this._v=e;this._has=true;t.prototype._n.call(this,e)};MemoryStream.prototype._add=function(t){var e=this._target;if(e)return e._add(t);var r=this._ils;r.push(t);if(r.length>1)this._has&&t._n(this._v);else if(this._stopID!==a){this._has&&t._n(this._v);clearTimeout(this._stopID);this._stopID=a}else if(this._has)t._n(this._v);else{var o=this._prod;o!==a&&o._start(this)}};MemoryStream.prototype._stopNow=function(){this._has=false;t.prototype._stopNow.call(this)};MemoryStream.prototype._x=function(){this._has=false;t.prototype._x.call(this)};MemoryStream.prototype.map=function(t){return this._map(t)};MemoryStream.prototype.mapTo=function(e){return t.prototype.mapTo.call(this,e)};MemoryStream.prototype.take=function(e){return t.prototype.take.call(this,e)};MemoryStream.prototype.endWhen=function(e){return t.prototype.endWhen.call(this,e)};MemoryStream.prototype.replaceError=function(e){return t.prototype.replaceError.call(this,e)};MemoryStream.prototype.remember=function(){return this};MemoryStream.prototype.debug=function(e){return t.prototype.debug.call(this,e)};return MemoryStream}(A);r.MemoryStream=I;var P=A;r.default=P;const k=r.__esModule;const T=r.NO_IL,C=r.NO,R=r.MemoryStream,z=r.Stream;export default r;export{R as MemoryStream,C as NO,T as NO_IL,z as Stream,k as __esModule};

