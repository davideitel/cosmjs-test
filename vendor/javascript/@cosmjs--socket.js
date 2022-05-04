import*as e from"@cosmjs/stream";import*as t from"xstream";import*as n from"isomorphic-ws";import o from"process";var s="default"in n?n.default:n;var c={};var r=o;var i=c&&c.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(c,"__esModule",{value:true});c.SocketWrapper=void 0;const u=i(s);function environmentIsNodeJs(){return"undefined"!==typeof r&&"undefined"!==typeof r.versions&&"undefined"!==typeof r.versions.node}class SocketWrapper$1{constructor(e,t,n,o,s,c=1e4){this.closed=false;this.connected=new Promise(((e,t)=>{this.connectedResolver=e;this.connectedRejecter=t}));this.url=e;this.messageHandler=t;this.errorHandler=n;this.openHandler=o;this.closeHandler=s;this.timeout=c}connect(){const e=new u.default(this.url);e.onerror=e=>{this.clearTimeout();this.errorHandler&&this.errorHandler(e)};e.onmessage=e=>{this.messageHandler({type:e.type,data:e.data})};e.onopen=e=>{this.clearTimeout();this.connectedResolver();this.openHandler&&this.openHandler()};e.onclose=e=>{this.closed=true;this.closeHandler&&this.closeHandler(e)};const t=Date.now();this.timeoutId=setTimeout((()=>{e.onmessage=()=>0;e.onerror=()=>0;e.onopen=()=>0;e.onclose=()=>0;e.close();this.socket=void 0;const n=Math.floor(Date.now()-t);this.connectedRejecter(`Connection attempt timed out after ${n} ms`)}),this.timeout);this.socket=e}disconnect(){if(!this.socket)throw new Error("Socket undefined. This must be called after connecting.");this.clearTimeout();switch(this.socket.readyState){case u.default.OPEN:this.socket.close(1e3);break;case u.default.CLOSED:break;case u.default.CONNECTING:this.socket.onopen=()=>0;this.socket.onclose=()=>0;this.socket.onerror=()=>0;this.socket.onmessage=()=>0;this.socket=void 0;this.closeHandler&&this.closeHandler({wasClean:false,code:4001});break;case u.default.CLOSING:break;default:throw new Error(`Unknown readyState: ${this.socket.readyState}`)}}async send(e){return new Promise(((t,n)=>{if(!this.socket)throw new Error("Socket undefined. This must be called after connecting.");if(this.closed)throw new Error("Socket was closed, so no data can be sent anymore.");if(this.socket.readyState!==u.default.OPEN)throw new Error("Websocket is not open");if(environmentIsNodeJs())this.socket.send(e,(e=>e?n(e):t()));else{this.socket.send(e);t()}}))}clearTimeout(){if(!this.timeoutId)throw new Error("Timeout ID not set. This should not happen and usually means connect() was not called.");clearTimeout(this.timeoutId)}}c.SocketWrapper=SocketWrapper$1;var a="default"in t?t.default:t;var d={};Object.defineProperty(d,"__esModule",{value:true});d.StreamingSocket=void 0;const h=a;const l=c;class StreamingSocket$1{constructor(e,t=1e4){this.socket=new l.SocketWrapper(e,(e=>{this.eventProducerListener&&this.eventProducerListener.next(e)}),(e=>{this.eventProducerListener&&this.eventProducerListener.error(e)}),(()=>{}),(e=>{this.eventProducerListener&&(e.wasClean?this.eventProducerListener.complete():this.eventProducerListener.error("Socket was closed unclean"))}),t);this.connected=this.socket.connected;const n={start:e=>this.eventProducerListener=e,stop:()=>this.eventProducerListener=void 0};this.events=h.Stream.create(n)}connect(){this.socket.connect()}disconnect(){this.socket.disconnect()}async send(e){return this.socket.send(e)}}d.StreamingSocket=StreamingSocket$1;var S="default"in e?e.default:e;var k="default"in t?t.default:t;var m={};Object.defineProperty(m,"__esModule",{value:true});m.QueueingStreamingSocket=m.ConnectionStatus=void 0;const f=S;const p=k;const v=d;var g;(function(e){e[e.Unconnected=0]="Unconnected";e[e.Connecting=1]="Connecting";e[e.Connected=2]="Connected";e[e.Disconnected=3]="Disconnected"})(g=m.ConnectionStatus||(m.ConnectionStatus={}));class QueueingStreamingSocket$1{constructor(e,t=1e4,n){this.queue=[];this.isProcessingQueue=false;this.url=e;this.timeout=t;this.reconnectedHandler=n;const o={start:e=>this.eventProducerListener=e,stop:()=>this.eventProducerListener=void 0};this.events=p.Stream.create(o);this.connectionStatusProducer=new f.DefaultValueProducer(g.Unconnected);this.connectionStatus=new f.ValueAndUpdates(this.connectionStatusProducer);this.socket=new v.StreamingSocket(this.url,this.timeout);this.socket.events.subscribe({next:e=>{if(!this.eventProducerListener)throw new Error("No event producer listener set");this.eventProducerListener.next(e)},error:()=>this.connectionStatusProducer.update(g.Disconnected)})}connect(){this.connectionStatusProducer.update(g.Connecting);this.socket.connected.then((async()=>{this.connectionStatusProducer.update(g.Connected);return this.processQueue()}),(()=>this.connectionStatusProducer.update(g.Disconnected)));this.socket.connect()}disconnect(){this.connectionStatusProducer.update(g.Disconnected);this.socket.disconnect()}reconnect(){this.socket=new v.StreamingSocket(this.url,this.timeout);this.socket.events.subscribe({next:e=>{if(!this.eventProducerListener)throw new Error("No event producer listener set");this.eventProducerListener.next(e)},error:()=>this.connectionStatusProducer.update(g.Disconnected)});this.socket.connected.then((()=>{this.reconnectedHandler&&this.reconnectedHandler()}));this.connect()}getQueueLength(){return this.queue.length}queueRequest(e){this.queue.push(e);this.processQueue()}async processQueue(){if(this.isProcessingQueue||this.connectionStatus.value!==g.Connected)return;this.isProcessingQueue=true;let e;while(e=this.queue.shift())try{await this.socket.send(e);this.isProcessingQueue=false}catch(t){this.queue.unshift(e);this.isProcessingQueue=false;return}}}m.QueueingStreamingSocket=QueueingStreamingSocket$1;var P="default"in t?t.default:t;var w={};Object.defineProperty(w,"__esModule",{value:true});w.ReconnectingSocket=void 0;const b=P;const y=m;class ReconnectingSocket$1{constructor(e,t=1e4,n){this.unconnected=true;this.disconnected=false;this.timeoutIndex=0;this.reconnectTimeout=null;const o={start:e=>this.eventProducerListener=e,stop:()=>this.eventProducerListener=void 0};this.events=b.Stream.create(o);this.socket=new y.QueueingStreamingSocket(e,t,n);this.socket.events.subscribe({next:e=>{this.eventProducerListener&&this.eventProducerListener.next(e)},error:e=>{this.eventProducerListener&&this.eventProducerListener.error(e)}});this.connectionStatus=this.socket.connectionStatus;this.connectionStatus.updates.subscribe({next:e=>{e===y.ConnectionStatus.Connected&&(this.timeoutIndex=0);if(e===y.ConnectionStatus.Disconnected){if(this.reconnectTimeout){clearTimeout(this.reconnectTimeout);this.reconnectTimeout=null}this.reconnectTimeout=setTimeout((()=>this.socket.reconnect()),ReconnectingSocket$1.calculateTimeout(this.timeoutIndex++))}}})}static calculateTimeout(e){return Math.min(2**e*100,5e3)}connect(){if(!this.unconnected)throw new Error("Cannot connect: socket has already connected");this.socket.connect();this.unconnected=false}disconnect(){if(this.unconnected)throw new Error("Cannot disconnect: socket has not yet connected");this.socket.disconnect();this.eventProducerListener&&this.eventProducerListener.complete();this.disconnected=true}queueRequest(e){if(this.disconnected)throw new Error("Cannot queue request: socket has disconnected");this.socket.queueRequest(e)}}w.ReconnectingSocket=ReconnectingSocket$1;var C={};Object.defineProperty(C,"__esModule",{value:true});C.StreamingSocket=C.SocketWrapper=C.ReconnectingSocket=C.QueueingStreamingSocket=C.ConnectionStatus=void 0;var L=m;Object.defineProperty(C,"ConnectionStatus",{enumerable:true,get:function(){return L.ConnectionStatus}});Object.defineProperty(C,"QueueingStreamingSocket",{enumerable:true,get:function(){return L.QueueingStreamingSocket}});var T=w;Object.defineProperty(C,"ReconnectingSocket",{enumerable:true,get:function(){return T.ReconnectingSocket}});var Q=c;Object.defineProperty(C,"SocketWrapper",{enumerable:true,get:function(){return Q.SocketWrapper}});var H=d;Object.defineProperty(C,"StreamingSocket",{enumerable:true,get:function(){return H.StreamingSocket}});const R=C.__esModule,_=C.StreamingSocket,E=C.SocketWrapper,O=C.ReconnectingSocket,j=C.QueueingStreamingSocket,q=C.ConnectionStatus;export{q as ConnectionStatus,j as QueueingStreamingSocket,O as ReconnectingSocket,E as SocketWrapper,_ as StreamingSocket,R as __esModule,C as default};
