/*! For license information please see component---src-pages-index-tsx-5a40461fd8bc373ed18f.js.LICENSE.txt */
"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[691],{294:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r=n(6125),i=n(7294);function a(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{c(r.next(e))}catch(t){a(t)}}function u(e){try{c(r.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,u)}c((r=r.apply(e,t||[])).next())}))}function o(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(u){a=[6,u],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}}var u,c=function(){},s=c(),f=Object,l=function(e){return e===s},d=function(e){return"function"==typeof e},v=function(e,t){return f.assign({},e,t)},b="undefined",h=function(){return typeof window!=b},g=new WeakMap,p=0,w=function e(t){var n,r,i=typeof t,a=t&&t.constructor,o=a==Date;if(f(t)!==t||o||a==RegExp)n=o?t.toJSON():"symbol"==i?t.toString():"string"==i?JSON.stringify(t):""+t;else{if(n=g.get(t))return n;if(n=++p+"~",g.set(t,n),a==Array){for(n="@",r=0;r<t.length;r++)n+=e(t[r])+",";g.set(t,n)}if(a==f){n="#";for(var u=f.keys(t).sort();!l(r=u.pop());)l(t[r])||(n+=r+":"+e(t[r])+",");g.set(t,n)}}return n},y=!0,m=h(),k=typeof document!=b,E=m&&window.addEventListener?window.addEventListener.bind(window):c,R=k?document.addEventListener.bind(document):c,S=m&&window.removeEventListener?window.removeEventListener.bind(window):c,O=k?document.removeEventListener.bind(document):c,x={isOnline:function(){return y},isVisible:function(){var e=k&&document.visibilityState;return l(e)||"hidden"!==e}},T={initFocus:function(e){return R("visibilitychange",e),E("focus",e),function(){O("visibilitychange",e),S("focus",e)}},initReconnect:function(e){var t=function(){y=!0,e()},n=function(){y=!1};return E("online",t),E("offline",n),function(){S("online",t),S("offline",n)}}},C=!h()||"Deno"in window,V=function(e){return h()&&typeof window.requestAnimationFrame!=b?window.requestAnimationFrame(e):setTimeout(e,1)},L=C?i.useEffect:i.useLayoutEffect,D="undefined"!=typeof navigator&&navigator.connection,I=!C&&D&&(["slow-2g","2g"].includes(D.effectiveType)||D.saveData),_=function(e){if(d(e))try{e=e()}catch(n){e=""}var t=[].concat(e);return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?w(e):"",t,e?"$err$"+e:"",e?"$req$"+e:""]},F=new WeakMap,P=function(e,t,n,r,i,a,o){void 0===o&&(o=!0);var u=F.get(e),c=u[0],s=u[1],f=u[4],l=c[t],d=s[t]||[];if(o&&d)for(var v=0;v<d.length;++v)d[v](n,r,i);return a&&(delete f[t],l&&l[0])?l[0](2).then((function(){return e.get(t)})):e.get(t)},j=0,M=function(){return++j},A=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return a(void 0,void 0,void 0,(function(){var t,n,r,i,a,u,c,f,l,v,b,h,g,p,w,y,m;return o(this,(function(o){switch(o.label){case 0:if(t=e[0],n=e[1],r=e[2],i=e[3],u=!1!==(a="boolean"==typeof i?{revalidate:i}:i||{}).revalidate,c=!1!==a.populateCache,f=_(n),l=f[0],v=f[2],!l)return[2];if(b=F.get(t),h=b[2],g=b[3],e.length<3)return[2,P(t,l,t.get(l),t.get(v),s,u,c)];if(p=r,y=h[l]=M(),g[l]=0,d(p))try{p=p(t.get(l))}catch(k){w=k}return p&&d(p.then)?[4,p.catch((function(e){w=e}))]:[3,2];case 1:if(p=o.sent(),y!==h[l]){if(w)throw w;return[2,p]}o.label=2;case 2:return c&&(w||t.set(l,p),t.set(v,w)),g[l]=M(),[4,P(t,l,p,w,s,u,c)];case 3:if(m=o.sent(),w)throw w;return[2,c?m:p]}}))}))},z=function(e,t){for(var n in e)e[n][0]&&e[n][0](t)},W=function(e,t){if(!F.has(e)){var n=v(T,t),r={},i=A.bind(s,e),a=c;if(F.set(e,[r,{},{},{},{},i]),!C){var o=n.initFocus(setTimeout.bind(s,z.bind(s,r,0))),u=n.initReconnect(setTimeout.bind(s,z.bind(s,r,1)));a=function(){o&&o(),u&&u(),F.delete(e)}}return[e,i,a]}return[e,F.get(e)[5]]},$=W(new Map),q=$[0],J=$[1],N=v({onLoadingSlow:c,onSuccess:c,onError:c,onErrorRetry:function(e,t,n,r,i){var a=n.errorRetryCount,o=i.retryCount,u=~~((Math.random()+.5)*(1<<(o<8?o:8)))*n.errorRetryInterval;!l(a)&&o>a||setTimeout(r,u,i)},onDiscarded:c,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:I?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:I?5e3:3e3,compare:function(e,t){return w(e)==w(t)},isPaused:function(){return!1},cache:q,mutate:J,fallback:{}},x),B=function(e,t){var n=v(e,t);if(t){var r=e.use,i=e.fallback,a=t.use,o=t.fallback;r&&a&&(n.use=r.concat(a)),i&&o&&(n.fallback=v(i,o))}return n},H=(0,i.createContext)({}),G=function(e){return d(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}]},K=function(){return v(N,(0,i.useContext)(H))},Q=function(e,t,n){var r=t[e]||(t[e]=[]);return r.push(n),function(){var e=r.indexOf(n);e>=0&&(r[e]=r[r.length-1],r.pop())}},U={dedupe:!0},X=(f.defineProperty((function(e){var t=e.value,n=B((0,i.useContext)(H),t),r=t&&t.provider,a=(0,i.useState)((function(){return r?W(r(n.cache||q),t):s}))[0];return a&&(n.cache=a[0],n.mutate=a[1]),L((function(){return a?a[2]:s}),[]),(0,i.createElement)(H.Provider,v(e,{value:n}))}),"default",{value:N}),u=function(e,t,n){var r=n.cache,u=n.compare,c=n.fallbackData,f=n.suspense,b=n.revalidateOnMount,h=n.refreshInterval,g=n.refreshWhenHidden,p=n.refreshWhenOffline,w=F.get(r),y=w[0],m=w[1],k=w[2],E=w[3],R=w[4],S=_(e),O=S[0],x=S[1],T=S[2],D=S[3],I=(0,i.useRef)(!1),j=(0,i.useRef)(!1),z=(0,i.useRef)(O),W=(0,i.useRef)(t),$=(0,i.useRef)(n),q=function(){return $.current},J=function(){return q().isVisible()&&q().isOnline()},N=r.get(O),B=l(c)?n.fallback[O]:c,H=l(N)?B:N,G=r.get(T),K=function(){return l(b)?!q().isPaused()&&(f?!l(H):l(H)||n.revalidateIfStale):b},X=!(!O||!t)&&(!!r.get(D)||!I.current&&K()),Y=function(e,t){var n=(0,i.useState)({})[1],r=(0,i.useRef)(e),a=(0,i.useRef)({data:!1,error:!1,isValidating:!1}),o=(0,i.useCallback)((function(e){var i=!1,o=r.current;for(var u in e){var c=u;o[c]!==e[c]&&(o[c]=e[c],a.current[c]&&(i=!0))}i&&!t.current&&n({})}),[]);return L((function(){r.current=e})),[r,a.current,o]}({data:H,error:G,isValidating:X},j),Z=Y[0],ee=Y[1],te=Y[2],ne=(0,i.useCallback)((function(e){return a(void 0,void 0,void 0,(function(){var t,i,a,c,f,d,v,b,h,g,p,w;return o(this,(function(o){switch(o.label){case 0:if(t=W.current,!O||!t||j.current||q().isPaused())return[2,!1];c=!0,f=e||{},d=!R[O]||!f.dedupe,v=function(){return!j.current&&O===z.current&&I.current},b=function(){var e=R[O];e&&e[1]===a&&delete R[O]},h={isValidating:!1},g=function(){r.set(D,!1),v()&&te(h)},r.set(D,!0),te({isValidating:!0}),o.label=1;case 1:return o.trys.push([1,3,,4]),d&&(P(r,O,Z.current.data,Z.current.error,!0),n.loadingTimeout&&!r.get(O)&&setTimeout((function(){c&&v()&&q().onLoadingSlow(O,n)}),n.loadingTimeout),R[O]=[t.apply(void 0,x),M()]),w=R[O],i=w[0],a=w[1],[4,i];case 2:return i=o.sent(),d&&setTimeout(b,n.dedupingInterval),R[O]&&R[O][1]===a?(r.set(T,s),h.error=s,!l(k[O])&&(a<=k[O]||a<=E[O]||0===E[O])?(g(),d&&v()&&q().onDiscarded(O),[2,!1]):(u(Z.current.data,i)?h.data=Z.current.data:h.data=i,u(r.get(O),i)||r.set(O,i),d&&v()&&q().onSuccess(i,O,n),[3,4])):(d&&v()&&q().onDiscarded(O),[2,!1]);case 3:return p=o.sent(),b(),q().isPaused()||(r.set(T,p),h.error=p,d&&v()&&(q().onError(p,O,n),n.shouldRetryOnError&&J()&&q().onErrorRetry(p,O,n,ne,{retryCount:(f.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return c=!1,g(),v()&&d&&P(r,O,h.data,h.error,!1),[2,!0]}}))}))}),[O]),re=(0,i.useCallback)(A.bind(s,r,(function(){return z.current})),[]);if(L((function(){W.current=t,$.current=n})),L((function(){if(O){var e=I.current,t=ne.bind(s,U),n=0,r=Q(O,m,(function(e,t,n){te(v({error:t,isValidating:n},u(Z.current.data,e)?s:{data:e}))})),i=Q(O,y,(function(e){if(0==e){var r=Date.now();q().revalidateOnFocus&&r>n&&J()&&(n=r+q().focusThrottleInterval,t())}else if(1==e)q().revalidateOnReconnect&&J()&&t();else if(2==e)return ne()}));return j.current=!1,z.current=O,I.current=!0,e&&te({data:H,error:G,isValidating:X}),K()&&(l(H)||C?t():V(t)),function(){j.current=!0,r(),i()}}}),[O,ne]),L((function(){var e;function t(){var t=d(h)?h(H):h;t&&-1!==e&&(e=setTimeout(n,t))}function n(){Z.current.error||!g&&!q().isVisible()||!p&&!q().isOnline()?t():ne(U).then(t)}return t(),function(){e&&(clearTimeout(e),e=-1)}}),[h,g,p,ne]),(0,i.useDebugValue)(H),f&&l(H)&&O)throw l(G)?ne(U):G;return{mutate:re,get data(){return ee.data=!0,H},get error(){return ee.error=!0,G},get isValidating(){return ee.isValidating=!0,X}}},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=K(),r=G(e),i=r[0],a=r[1],o=r[2],c=B(n,o),s=u,f=c.use;if(f)for(var l=f.length;l-- >0;)s=f[l](s);return s(i,a||c.fetcher,c)}),Y=n(8133);function Z(){var e=function(e){var t=X(e+"/additionals",Y.kM),n=t.data,r=t.error;return{data:n,isLoading:!r&&!n,isError:Boolean(r)}}((0,Y.f8)()),t=e.data,a=e.isLoading,o=e.isError;return console.log(t,a,o),i.createElement(i.Fragment,null,i.createElement(r.S,{src:"../assets/images/hero.jpg",alt:"Background pizza",__imageData:n(2832)}),i.createElement("h1",null,"Hello world!"))}},2832:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#886858","images":{"fallback":{"src":"/static/eab0c0b683bf422543d1439c64fdd764/8a549/hero.jpg","srcSet":"/static/eab0c0b683bf422543d1439c64fdd764/7284f/hero.jpg 750w,\\n/static/eab0c0b683bf422543d1439c64fdd764/3564b/hero.jpg 1500w,\\n/static/eab0c0b683bf422543d1439c64fdd764/8a549/hero.jpg 3000w","sizes":"(min-width: 3000px) 3000px, 100vw"},"sources":[{"srcSet":"/static/eab0c0b683bf422543d1439c64fdd764/57584/hero.webp 750w,\\n/static/eab0c0b683bf422543d1439c64fdd764/2b8d7/hero.webp 1500w,\\n/static/eab0c0b683bf422543d1439c64fdd764/48dc9/hero.webp 3000w","type":"image/webp","sizes":"(min-width: 3000px) 3000px, 100vw"}]},"width":3000,"height":2000}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-5a40461fd8bc373ed18f.js.map