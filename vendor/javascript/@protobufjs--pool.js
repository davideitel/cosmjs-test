var r={};r=pool;function pool(r,a,l){var o=l||8192;var n=o>>>1;var t=null;var u=o;return function pool_alloc(l){if(l<1||l>n)return r(l);if(u+l>o){t=r(o);u=0}var v=a.call(t,u,u+=l);7&u&&(u=(7|u)+1);return v}}var a=r;export default a;

