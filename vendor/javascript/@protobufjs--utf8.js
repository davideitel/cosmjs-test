var e={};var r=e;r.length=function utf8_length(e){var r=0,t=0;for(var i=0;i<e.length;++i){t=e.charCodeAt(i);if(t<128)r+=1;else if(t<2048)r+=2;else if(55296===(64512&t)&&56320===(64512&e.charCodeAt(i+1))){++i;r+=4}else r+=3}return r};r.read=function utf8_read(e,r,t){var i=t-r;if(i<1)return"";var f=null,n=[],l=0,a;while(r<t){a=e[r++];if(a<128)n[l++]=a;else if(a>191&&a<224)n[l++]=(31&a)<<6|63&e[r++];else if(a>239&&a<365){a=((7&a)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;n[l++]=55296+(a>>10);n[l++]=56320+(1023&a)}else n[l++]=(15&a)<<12|(63&e[r++])<<6|63&e[r++];if(l>8191){(f||(f=[])).push(String.fromCharCode.apply(String,n));l=0}}if(f){l&&f.push(String.fromCharCode.apply(String,n.slice(0,l)));return f.join("")}return String.fromCharCode.apply(String,n.slice(0,l))};r.write=function utf8_write(e,r,t){var i=t,f,n;for(var l=0;l<e.length;++l){f=e.charCodeAt(l);if(f<128)r[t++]=f;else if(f<2048){r[t++]=f>>6|192;r[t++]=63&f|128}else if(55296===(64512&f)&&56320===(64512&(n=e.charCodeAt(l+1)))){f=65536+((1023&f)<<10)+(1023&n);++l;r[t++]=f>>18|240;r[t++]=f>>12&63|128;r[t++]=f>>6&63|128;r[t++]=63&f|128}else{r[t++]=f>>12|224;r[t++]=f>>6&63|128;r[t++]=63&f|128}}return t-i};export default e;
