import{s as w,F as J,r as nt,_ as h,i as H,h as Ft,k as U}from"./theme.2ff1939a.js";const zt=w.table.withConfig({displayName:"Table"})(["width:100%;border-top:1px solid ",";border-right:1px solid ",";td,th{text-align:left;padding:0.25rem;border-bottom:1px solid ",";border-left:1px solid ",";}"],r=>r.theme.color.border,r=>r.theme.color.border,r=>r.theme.color.border,r=>r.theme.color.border),Jt=w.button.withConfig({displayName:"Button"})(["background-color:",";color:",";border:none;outline:none;cursor:pointer;&:hover{background-color:",";}"],r=>r.theme.color.secondary,r=>r.theme.color.primary,r=>r.theme.color.secondary15),Vt=w.input.withConfig({displayName:"StyledInput"})(["padding:0.5rem;"]),Xt=w(J).attrs({center:!0,column:!0,padding:"1rem",width:"100%"}).withConfig({displayName:"Card"})(["background-color:",";color:",";"],r=>r.theme.color.secondary,r=>r.theme.color.primary),te=w.div.withConfig({displayName:"StyledQuery"})(["word-wrap:break-word;white-space:pre-wrap;word-break:break-word;"]),ee=w.img.attrs({src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",alt:"react logo"}).withConfig({displayName:"ReactLogo"})(["height:200px;width:200px;"]),ne=w(J).attrs({as:"ul",column:!0,gap:"0.25rem",padding:"0",margin:"0"}).withConfig({displayName:"List"})([""]),ie=w(J).attrs({as:"li",gap:"1rem",alignItems:"center",padding:"0.5rem"}).withConfig({displayName:"Item"})(["list-style-type:none;font-weight:bold;color:",";background-color:",";"],r=>r.theme.color.secondary,r=>r.theme.color.primary20),re=w.img.attrs({loading:"lazy",alt:"country flag"}).withConfig({displayName:"Flag"})(["height:1.25rem;width:2rem;"]),ae=r=>{const n=nt.exports.useRef(1);return nt.exports.useEffect(()=>{n.current+=1},r),n.current};var B=function(){function r(){this.listeners=[]}var n=r.prototype;return n.subscribe=function(t){var e=this,a=t||function(){};return this.listeners.push(a),this.onSubscribe(),function(){e.listeners=e.listeners.filter(function(s){return s!==a}),e.onUnsubscribe()}},n.hasListeners=function(){return this.listeners.length>0},n.onSubscribe=function(){},n.onUnsubscribe=function(){},r}(),ct=typeof window=="undefined";function b(){}function Ot(r,n){return typeof r=="function"?r(n):r}function Pt(r){return typeof r=="number"&&r>=0&&r!==1/0}function L(r){return Array.isArray(r)?r:[r]}function wt(r,n){return Math.max(r+(n||0)-Date.now(),0)}function W(r,n,i){return Z(r)?typeof n=="function"?h({},i,{queryKey:r,queryFn:n}):h({},n,{queryKey:r}):r}function _(r,n,i){return Z(r)?[h({},n,{queryKey:r}),i]:[r||{},n]}function qt(r,n){if(r===!0&&n===!0||r==null&&n==null)return"all";if(r===!1&&n===!1)return"none";var i=r!=null?r:!n;return i?"active":"inactive"}function it(r,n){var i=r.active,t=r.exact,e=r.fetching,a=r.inactive,s=r.predicate,u=r.queryKey,o=r.stale;if(Z(u)){if(t){if(n.queryHash!==V(u,n.options))return!1}else if(!T(n.queryKey,u))return!1}var c=qt(i,a);if(c==="none")return!1;if(c!=="all"){var f=n.isActive();if(c==="active"&&!f||c==="inactive"&&f)return!1}return!(typeof o=="boolean"&&n.isStale()!==o||typeof e=="boolean"&&n.isFetching()!==e||s&&!s(n))}function rt(r,n){var i=r.exact,t=r.fetching,e=r.predicate,a=r.mutationKey;if(Z(a)){if(!n.options.mutationKey)return!1;if(i){if(S(n.options.mutationKey)!==S(a))return!1}else if(!T(n.options.mutationKey,a))return!1}return!(typeof t=="boolean"&&n.state.status==="loading"!==t||e&&!e(n))}function V(r,n){var i=(n==null?void 0:n.queryKeyHashFn)||S;return i(r)}function S(r){var n=L(r);return At(n)}function At(r){return JSON.stringify(r,function(n,i){return z(i)?Object.keys(i).sort().reduce(function(t,e){return t[e]=i[e],t},{}):i})}function T(r,n){return lt(L(r),L(n))}function lt(r,n){return r===n?!0:typeof r!=typeof n?!1:r&&n&&typeof r=="object"&&typeof n=="object"?!Object.keys(n).some(function(i){return!lt(r[i],n[i])}):!1}function ft(r,n){if(r===n)return r;var i=Array.isArray(r)&&Array.isArray(n);if(i||z(r)&&z(n)){for(var t=i?r.length:Object.keys(r).length,e=i?n:Object.keys(n),a=e.length,s=i?[]:{},u=0,o=0;o<a;o++){var c=i?o:e[o];s[c]=ft(r[c],n[c]),s[c]===r[c]&&u++}return t===a&&u===t?r:s}return n}function z(r){if(!at(r))return!1;var n=r.constructor;if(typeof n=="undefined")return!0;var i=n.prototype;return!(!at(i)||!i.hasOwnProperty("isPrototypeOf"))}function at(r){return Object.prototype.toString.call(r)==="[object Object]"}function Z(r){return typeof r=="string"||Array.isArray(r)}function Mt(r){return new Promise(function(n){setTimeout(n,r)})}function st(r){Promise.resolve().then(r).catch(function(n){return setTimeout(function(){throw n})})}function ht(){if(typeof AbortController=="function")return new AbortController}var _t=function(r){H(n,r);function n(){var t;return t=r.call(this)||this,t.setup=function(e){var a;if(!ct&&((a=window)==null?void 0:a.addEventListener)){var s=function(){return e()};return window.addEventListener("visibilitychange",s,!1),window.addEventListener("focus",s,!1),function(){window.removeEventListener("visibilitychange",s),window.removeEventListener("focus",s)}}},t}var i=n.prototype;return i.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},i.onUnsubscribe=function(){if(!this.hasListeners()){var e;(e=this.cleanup)==null||e.call(this),this.cleanup=void 0}},i.setEventListener=function(e){var a,s=this;this.setup=e,(a=this.cleanup)==null||a.call(this),this.cleanup=e(function(u){typeof u=="boolean"?s.setFocused(u):s.onFocus()})},i.setFocused=function(e){this.focused=e,e&&this.onFocus()},i.onFocus=function(){this.listeners.forEach(function(e){e()})},i.isFocused=function(){return typeof this.focused=="boolean"?this.focused:typeof document=="undefined"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)},n}(B),j=new _t,Dt=function(r){H(n,r);function n(){var t;return t=r.call(this)||this,t.setup=function(e){var a;if(!ct&&((a=window)==null?void 0:a.addEventListener)){var s=function(){return e()};return window.addEventListener("online",s,!1),window.addEventListener("offline",s,!1),function(){window.removeEventListener("online",s),window.removeEventListener("offline",s)}}},t}var i=n.prototype;return i.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},i.onUnsubscribe=function(){if(!this.hasListeners()){var e;(e=this.cleanup)==null||e.call(this),this.cleanup=void 0}},i.setEventListener=function(e){var a,s=this;this.setup=e,(a=this.cleanup)==null||a.call(this),this.cleanup=e(function(u){typeof u=="boolean"?s.setOnline(u):s.onOnline()})},i.setOnline=function(e){this.online=e,e&&this.onOnline()},i.onOnline=function(){this.listeners.forEach(function(e){e()})},i.isOnline=function(){return typeof this.online=="boolean"?this.online:typeof navigator=="undefined"||typeof navigator.onLine=="undefined"?!0:navigator.onLine},n}(B),$=new Dt;function Qt(r){return Math.min(1e3*Math.pow(2,r),3e4)}function G(r){return typeof(r==null?void 0:r.cancel)=="function"}var dt=function(n){this.revert=n==null?void 0:n.revert,this.silent=n==null?void 0:n.silent};function Y(r){return r instanceof dt}var vt=function(n){var i=this,t=!1,e,a,s,u;this.abort=n.abort,this.cancel=function(d){return e==null?void 0:e(d)},this.cancelRetry=function(){t=!0},this.continueRetry=function(){t=!1},this.continue=function(){return a==null?void 0:a()},this.failureCount=0,this.isPaused=!1,this.isResolved=!1,this.isTransportCancelable=!1,this.promise=new Promise(function(d,l){s=d,u=l});var o=function(l){i.isResolved||(i.isResolved=!0,n.onSuccess==null||n.onSuccess(l),a==null||a(),s(l))},c=function(l){i.isResolved||(i.isResolved=!0,n.onError==null||n.onError(l),a==null||a(),u(l))},f=function(){return new Promise(function(l){a=l,i.isPaused=!0,n.onPause==null||n.onPause()}).then(function(){a=void 0,i.isPaused=!1,n.onContinue==null||n.onContinue()})},v=function d(){if(!i.isResolved){var l;try{l=n.fn()}catch(y){l=Promise.reject(y)}e=function(m){if(!i.isResolved&&(c(new dt(m)),i.abort==null||i.abort(),G(l)))try{l.cancel()}catch{}},i.isTransportCancelable=G(l),Promise.resolve(l).then(o).catch(function(y){var m,q;if(!i.isResolved){var C=(m=n.retry)!=null?m:3,g=(q=n.retryDelay)!=null?q:Qt,F=typeof g=="function"?g(i.failureCount,y):g,I=C===!0||typeof C=="number"&&i.failureCount<C||typeof C=="function"&&C(i.failureCount,y);if(t||!I){c(y);return}i.failureCount++,n.onFail==null||n.onFail(i.failureCount,y),Mt(F).then(function(){if(!j.isFocused()||!$.isOnline())return f()}).then(function(){t?c(y):d()})}})}};v()},St=function(){function r(){this.queue=[],this.transactions=0,this.notifyFn=function(i){i()},this.batchNotifyFn=function(i){i()}}var n=r.prototype;return n.batch=function(t){var e;this.transactions++;try{e=t()}finally{this.transactions--,this.transactions||this.flush()}return e},n.schedule=function(t){var e=this;this.transactions?this.queue.push(t):st(function(){e.notifyFn(t)})},n.batchCalls=function(t){var e=this;return function(){for(var a=arguments.length,s=new Array(a),u=0;u<a;u++)s[u]=arguments[u];e.schedule(function(){t.apply(void 0,s)})}},n.flush=function(){var t=this,e=this.queue;this.queue=[],e.length&&st(function(){t.batchNotifyFn(function(){e.forEach(function(a){t.notifyFn(a)})})})},n.setNotifyFunction=function(t){this.notifyFn=t},n.setBatchNotifyFunction=function(t){this.batchNotifyFn=t},r}(),p=new St,yt=console;function pt(){return yt}function xt(r){yt=r}var It=function(){function r(i){this.abortSignalConsumed=!1,this.hadObservers=!1,this.defaultOptions=i.defaultOptions,this.setOptions(i.options),this.observers=[],this.cache=i.cache,this.queryKey=i.queryKey,this.queryHash=i.queryHash,this.initialState=i.state||this.getDefaultState(this.options),this.state=this.initialState,this.meta=i.meta,this.scheduleGc()}var n=r.prototype;return n.setOptions=function(t){var e;this.options=h({},this.defaultOptions,t),this.meta=t==null?void 0:t.meta,this.cacheTime=Math.max(this.cacheTime||0,(e=this.options.cacheTime)!=null?e:5*60*1e3)},n.setDefaultOptions=function(t){this.defaultOptions=t},n.scheduleGc=function(){var t=this;this.clearGcTimeout(),Pt(this.cacheTime)&&(this.gcTimeout=setTimeout(function(){t.optionalRemove()},this.cacheTime))},n.clearGcTimeout=function(){clearTimeout(this.gcTimeout),this.gcTimeout=void 0},n.optionalRemove=function(){this.observers.length||(this.state.isFetching?this.hadObservers&&this.scheduleGc():this.cache.remove(this))},n.setData=function(t,e){var a,s,u=this.state.data,o=Ot(t,u);return(a=(s=this.options).isDataEqual)!=null&&a.call(s,u,o)?o=u:this.options.structuralSharing!==!1&&(o=ft(u,o)),this.dispatch({data:o,type:"success",dataUpdatedAt:e==null?void 0:e.updatedAt}),o},n.setState=function(t,e){this.dispatch({type:"setState",state:t,setStateOptions:e})},n.cancel=function(t){var e,a=this.promise;return(e=this.retryer)==null||e.cancel(t),a?a.then(b).catch(b):Promise.resolve()},n.destroy=function(){this.clearGcTimeout(),this.cancel({silent:!0})},n.reset=function(){this.destroy(),this.setState(this.initialState)},n.isActive=function(){return this.observers.some(function(t){return t.options.enabled!==!1})},n.isFetching=function(){return this.state.isFetching},n.isStale=function(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(function(t){return t.getCurrentResult().isStale})},n.isStaleByTime=function(t){return t===void 0&&(t=0),this.state.isInvalidated||!this.state.dataUpdatedAt||!wt(this.state.dataUpdatedAt,t)},n.onFocus=function(){var t,e=this.observers.find(function(a){return a.shouldFetchOnWindowFocus()});e&&e.refetch(),(t=this.retryer)==null||t.continue()},n.onOnline=function(){var t,e=this.observers.find(function(a){return a.shouldFetchOnReconnect()});e&&e.refetch(),(t=this.retryer)==null||t.continue()},n.addObserver=function(t){this.observers.indexOf(t)===-1&&(this.observers.push(t),this.hadObservers=!0,this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:t}))},n.removeObserver=function(t){this.observers.indexOf(t)!==-1&&(this.observers=this.observers.filter(function(e){return e!==t}),this.observers.length||(this.retryer&&(this.retryer.isTransportCancelable||this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.cacheTime?this.scheduleGc():this.cache.remove(this)),this.cache.notify({type:"observerRemoved",query:this,observer:t}))},n.getObserversCount=function(){return this.observers.length},n.invalidate=function(){this.state.isInvalidated||this.dispatch({type:"invalidate"})},n.fetch=function(t,e){var a=this,s,u,o;if(this.state.isFetching){if(this.state.dataUpdatedAt&&(e==null?void 0:e.cancelRefetch))this.cancel({silent:!0});else if(this.promise){var c;return(c=this.retryer)==null||c.continueRetry(),this.promise}}if(t&&this.setOptions(t),!this.options.queryFn){var f=this.observers.find(function(g){return g.options.queryFn});f&&this.setOptions(f.options)}var v=L(this.queryKey),d=ht(),l={queryKey:v,pageParam:void 0,meta:this.meta};Object.defineProperty(l,"signal",{enumerable:!0,get:function(){if(d)return a.abortSignalConsumed=!0,d.signal}});var y=function(){return a.options.queryFn?(a.abortSignalConsumed=!1,a.options.queryFn(l)):Promise.reject("Missing queryFn")},m={fetchOptions:e,options:this.options,queryKey:v,state:this.state,fetchFn:y,meta:this.meta};if((s=this.options.behavior)!=null&&s.onFetch){var q;(q=this.options.behavior)==null||q.onFetch(m)}if(this.revertState=this.state,!this.state.isFetching||this.state.fetchMeta!==((u=m.fetchOptions)==null?void 0:u.meta)){var C;this.dispatch({type:"fetch",meta:(C=m.fetchOptions)==null?void 0:C.meta})}return this.retryer=new vt({fn:m.fetchFn,abort:d==null||(o=d.abort)==null?void 0:o.bind(d),onSuccess:function(F){a.setData(F),a.cache.config.onSuccess==null||a.cache.config.onSuccess(F,a),a.cacheTime===0&&a.optionalRemove()},onError:function(F){Y(F)&&F.silent||a.dispatch({type:"error",error:F}),Y(F)||(a.cache.config.onError==null||a.cache.config.onError(F,a),pt().error(F)),a.cacheTime===0&&a.optionalRemove()},onFail:function(){a.dispatch({type:"failed"})},onPause:function(){a.dispatch({type:"pause"})},onContinue:function(){a.dispatch({type:"continue"})},retry:m.options.retry,retryDelay:m.options.retryDelay}),this.promise=this.retryer.promise,this.promise},n.dispatch=function(t){var e=this;this.state=this.reducer(this.state,t),p.batch(function(){e.observers.forEach(function(a){a.onQueryUpdate(t)}),e.cache.notify({query:e,type:"queryUpdated",action:t})})},n.getDefaultState=function(t){var e=typeof t.initialData=="function"?t.initialData():t.initialData,a=typeof t.initialData!="undefined",s=a?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0,u=typeof e!="undefined";return{data:e,dataUpdateCount:0,dataUpdatedAt:u?s!=null?s:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchMeta:null,isFetching:!1,isInvalidated:!1,isPaused:!1,status:u?"success":"idle"}},n.reducer=function(t,e){var a,s;switch(e.type){case"failed":return h({},t,{fetchFailureCount:t.fetchFailureCount+1});case"pause":return h({},t,{isPaused:!0});case"continue":return h({},t,{isPaused:!1});case"fetch":return h({},t,{fetchFailureCount:0,fetchMeta:(a=e.meta)!=null?a:null,isFetching:!0,isPaused:!1},!t.dataUpdatedAt&&{error:null,status:"loading"});case"success":return h({},t,{data:e.data,dataUpdateCount:t.dataUpdateCount+1,dataUpdatedAt:(s=e.dataUpdatedAt)!=null?s:Date.now(),error:null,fetchFailureCount:0,isFetching:!1,isInvalidated:!1,isPaused:!1,status:"success"});case"error":var u=e.error;return Y(u)&&u.revert&&this.revertState?h({},this.revertState):h({},t,{error:u,errorUpdateCount:t.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:t.fetchFailureCount+1,isFetching:!1,isPaused:!1,status:"error"});case"invalidate":return h({},t,{isInvalidated:!0});case"setState":return h({},t,e.state);default:return t}},r}(),Et=function(r){H(n,r);function n(t){var e;return e=r.call(this)||this,e.config=t||{},e.queries=[],e.queriesMap={},e}var i=n.prototype;return i.build=function(e,a,s){var u,o=a.queryKey,c=(u=a.queryHash)!=null?u:V(o,a),f=this.get(c);return f||(f=new It({cache:this,queryKey:o,queryHash:c,options:e.defaultQueryOptions(a),state:s,defaultOptions:e.getQueryDefaults(o),meta:a.meta}),this.add(f)),f},i.add=function(e){this.queriesMap[e.queryHash]||(this.queriesMap[e.queryHash]=e,this.queries.push(e),this.notify({type:"queryAdded",query:e}))},i.remove=function(e){var a=this.queriesMap[e.queryHash];a&&(e.destroy(),this.queries=this.queries.filter(function(s){return s!==e}),a===e&&delete this.queriesMap[e.queryHash],this.notify({type:"queryRemoved",query:e}))},i.clear=function(){var e=this;p.batch(function(){e.queries.forEach(function(a){e.remove(a)})})},i.get=function(e){return this.queriesMap[e]},i.getAll=function(){return this.queries},i.find=function(e,a){var s=_(e,a),u=s[0];return typeof u.exact=="undefined"&&(u.exact=!0),this.queries.find(function(o){return it(u,o)})},i.findAll=function(e,a){var s=_(e,a),u=s[0];return Object.keys(u).length>0?this.queries.filter(function(o){return it(u,o)}):this.queries},i.notify=function(e){var a=this;p.batch(function(){a.listeners.forEach(function(s){s(e)})})},i.onFocus=function(){var e=this;p.batch(function(){e.queries.forEach(function(a){a.onFocus()})})},i.onOnline=function(){var e=this;p.batch(function(){e.queries.forEach(function(a){a.onOnline()})})},n}(B),Rt=function(){function r(i){this.options=h({},i.defaultOptions,i.options),this.mutationId=i.mutationId,this.mutationCache=i.mutationCache,this.observers=[],this.state=i.state||Kt(),this.meta=i.meta}var n=r.prototype;return n.setState=function(t){this.dispatch({type:"setState",state:t})},n.addObserver=function(t){this.observers.indexOf(t)===-1&&this.observers.push(t)},n.removeObserver=function(t){this.observers=this.observers.filter(function(e){return e!==t})},n.cancel=function(){return this.retryer?(this.retryer.cancel(),this.retryer.promise.then(b).catch(b)):Promise.resolve()},n.continue=function(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()},n.execute=function(){var t=this,e,a=this.state.status==="loading",s=Promise.resolve();return a||(this.dispatch({type:"loading",variables:this.options.variables}),s=s.then(function(){t.mutationCache.config.onMutate==null||t.mutationCache.config.onMutate(t.state.variables,t)}).then(function(){return t.options.onMutate==null?void 0:t.options.onMutate(t.state.variables)}).then(function(u){u!==t.state.context&&t.dispatch({type:"loading",context:u,variables:t.state.variables})})),s.then(function(){return t.executeMutation()}).then(function(u){e=u,t.mutationCache.config.onSuccess==null||t.mutationCache.config.onSuccess(e,t.state.variables,t.state.context,t)}).then(function(){return t.options.onSuccess==null?void 0:t.options.onSuccess(e,t.state.variables,t.state.context)}).then(function(){return t.options.onSettled==null?void 0:t.options.onSettled(e,null,t.state.variables,t.state.context)}).then(function(){return t.dispatch({type:"success",data:e}),e}).catch(function(u){return t.mutationCache.config.onError==null||t.mutationCache.config.onError(u,t.state.variables,t.state.context,t),pt().error(u),Promise.resolve().then(function(){return t.options.onError==null?void 0:t.options.onError(u,t.state.variables,t.state.context)}).then(function(){return t.options.onSettled==null?void 0:t.options.onSettled(void 0,u,t.state.variables,t.state.context)}).then(function(){throw t.dispatch({type:"error",error:u}),u})})},n.executeMutation=function(){var t=this,e;return this.retryer=new vt({fn:function(){return t.options.mutationFn?t.options.mutationFn(t.state.variables):Promise.reject("No mutationFn found")},onFail:function(){t.dispatch({type:"failed"})},onPause:function(){t.dispatch({type:"pause"})},onContinue:function(){t.dispatch({type:"continue"})},retry:(e=this.options.retry)!=null?e:0,retryDelay:this.options.retryDelay}),this.retryer.promise},n.dispatch=function(t){var e=this;this.state=Ut(this.state,t),p.batch(function(){e.observers.forEach(function(a){a.onMutationUpdate(t)}),e.mutationCache.notify(e)})},r}();function Kt(){return{context:void 0,data:void 0,error:null,failureCount:0,isPaused:!1,status:"idle",variables:void 0}}function Ut(r,n){switch(n.type){case"failed":return h({},r,{failureCount:r.failureCount+1});case"pause":return h({},r,{isPaused:!0});case"continue":return h({},r,{isPaused:!1});case"loading":return h({},r,{context:n.context,data:void 0,error:null,isPaused:!1,status:"loading",variables:n.variables});case"success":return h({},r,{data:n.data,error:null,status:"success",isPaused:!1});case"error":return h({},r,{data:void 0,error:n.error,failureCount:r.failureCount+1,isPaused:!1,status:"error"});case"setState":return h({},r,n.state);default:return r}}var Nt=function(r){H(n,r);function n(t){var e;return e=r.call(this)||this,e.config=t||{},e.mutations=[],e.mutationId=0,e}var i=n.prototype;return i.build=function(e,a,s){var u=new Rt({mutationCache:this,mutationId:++this.mutationId,options:e.defaultMutationOptions(a),state:s,defaultOptions:a.mutationKey?e.getMutationDefaults(a.mutationKey):void 0,meta:a.meta});return this.add(u),u},i.add=function(e){this.mutations.push(e),this.notify(e)},i.remove=function(e){this.mutations=this.mutations.filter(function(a){return a!==e}),e.cancel(),this.notify(e)},i.clear=function(){var e=this;p.batch(function(){e.mutations.forEach(function(a){e.remove(a)})})},i.getAll=function(){return this.mutations},i.find=function(e){return typeof e.exact=="undefined"&&(e.exact=!0),this.mutations.find(function(a){return rt(e,a)})},i.findAll=function(e){return this.mutations.filter(function(a){return rt(e,a)})},i.notify=function(e){var a=this;p.batch(function(){a.listeners.forEach(function(s){s(e)})})},i.onFocus=function(){this.resumePausedMutations()},i.onOnline=function(){this.resumePausedMutations()},i.resumePausedMutations=function(){var e=this.mutations.filter(function(a){return a.state.isPaused});return p.batch(function(){return e.reduce(function(a,s){return a.then(function(){return s.continue().catch(b)})},Promise.resolve())})},n}(B);function jt(){return{onFetch:function(n){n.fetchFn=function(){var i,t,e,a,s,u,o=(i=n.fetchOptions)==null||(t=i.meta)==null?void 0:t.refetchPage,c=(e=n.fetchOptions)==null||(a=e.meta)==null?void 0:a.fetchMore,f=c==null?void 0:c.pageParam,v=(c==null?void 0:c.direction)==="forward",d=(c==null?void 0:c.direction)==="backward",l=((s=n.state.data)==null?void 0:s.pages)||[],y=((u=n.state.data)==null?void 0:u.pageParams)||[],m=ht(),q=m==null?void 0:m.signal,C=y,g=!1,F=n.options.queryFn||function(){return Promise.reject("Missing queryFn")},I=function(A,x,O,R){return C=R?[x].concat(C):[].concat(C,[x]),R?[O].concat(A):[].concat(A,[O])},E=function(A,x,O,R){if(g)return Promise.reject("Cancelled");if(typeof O=="undefined"&&!x&&A.length)return Promise.resolve(A);var M={queryKey:n.queryKey,signal:q,pageParam:O,meta:n.meta},Q=F(M),N=Promise.resolve(Q).then(function(Ct){return I(A,O,Ct,R)});if(G(Q)){var k=N;k.cancel=Q.cancel}return N},P;if(!l.length)P=E([]);else if(v){var X=typeof f!="undefined",mt=X?f:ut(n.options,l);P=E(l,X,mt)}else if(d){var tt=typeof f!="undefined",gt=tt?f:$t(n.options,l);P=E(l,tt,gt,!0)}else(function(){C=[];var D=typeof n.options.getNextPageParam=="undefined",A=o&&l[0]?o(l[0],0,l):!0;P=A?E([],D,y[0]):Promise.resolve(I([],y[0],l[0]));for(var x=function(M){P=P.then(function(Q){var N=o&&l[M]?o(l[M],M,l):!0;if(N){var k=D?y[M]:ut(n.options,Q);return E(Q,D,k)}return Promise.resolve(I(Q,y[M],l[M]))})},O=1;O<l.length;O++)x(O)})();var et=P.then(function(D){return{pages:D,pageParams:C}}),bt=et;return bt.cancel=function(){g=!0,m==null||m.abort(),G(P)&&P.cancel()},et}}}}function ut(r,n){return r.getNextPageParam==null?void 0:r.getNextPageParam(n[n.length-1],n)}function $t(r,n){return r.getPreviousPageParam==null?void 0:r.getPreviousPageParam(n[0],n)}var Lt=function(){function r(i){i===void 0&&(i={}),this.queryCache=i.queryCache||new Et,this.mutationCache=i.mutationCache||new Nt,this.defaultOptions=i.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[]}var n=r.prototype;return n.mount=function(){var t=this;this.unsubscribeFocus=j.subscribe(function(){j.isFocused()&&$.isOnline()&&(t.mutationCache.onFocus(),t.queryCache.onFocus())}),this.unsubscribeOnline=$.subscribe(function(){j.isFocused()&&$.isOnline()&&(t.mutationCache.onOnline(),t.queryCache.onOnline())})},n.unmount=function(){var t,e;(t=this.unsubscribeFocus)==null||t.call(this),(e=this.unsubscribeOnline)==null||e.call(this)},n.isFetching=function(t,e){var a=_(t,e),s=a[0];return s.fetching=!0,this.queryCache.findAll(s).length},n.isMutating=function(t){return this.mutationCache.findAll(h({},t,{fetching:!0})).length},n.getQueryData=function(t,e){var a;return(a=this.queryCache.find(t,e))==null?void 0:a.state.data},n.getQueriesData=function(t){return this.getQueryCache().findAll(t).map(function(e){var a=e.queryKey,s=e.state,u=s.data;return[a,u]})},n.setQueryData=function(t,e,a){var s=W(t),u=this.defaultQueryOptions(s);return this.queryCache.build(this,u).setData(e,a)},n.setQueriesData=function(t,e,a){var s=this;return p.batch(function(){return s.getQueryCache().findAll(t).map(function(u){var o=u.queryKey;return[o,s.setQueryData(o,e,a)]})})},n.getQueryState=function(t,e){var a;return(a=this.queryCache.find(t,e))==null?void 0:a.state},n.removeQueries=function(t,e){var a=_(t,e),s=a[0],u=this.queryCache;p.batch(function(){u.findAll(s).forEach(function(o){u.remove(o)})})},n.resetQueries=function(t,e,a){var s=this,u=_(t,e,a),o=u[0],c=u[1],f=this.queryCache,v=h({},o,{active:!0});return p.batch(function(){return f.findAll(o).forEach(function(d){d.reset()}),s.refetchQueries(v,c)})},n.cancelQueries=function(t,e,a){var s=this,u=_(t,e,a),o=u[0],c=u[1],f=c===void 0?{}:c;typeof f.revert=="undefined"&&(f.revert=!0);var v=p.batch(function(){return s.queryCache.findAll(o).map(function(d){return d.cancel(f)})});return Promise.all(v).then(b).catch(b)},n.invalidateQueries=function(t,e,a){var s,u,o,c=this,f=_(t,e,a),v=f[0],d=f[1],l=h({},v,{active:(s=(u=v.refetchActive)!=null?u:v.active)!=null?s:!0,inactive:(o=v.refetchInactive)!=null?o:!1});return p.batch(function(){return c.queryCache.findAll(v).forEach(function(y){y.invalidate()}),c.refetchQueries(l,d)})},n.refetchQueries=function(t,e,a){var s=this,u=_(t,e,a),o=u[0],c=u[1],f=p.batch(function(){return s.queryCache.findAll(o).map(function(d){return d.fetch(void 0,h({},c,{meta:{refetchPage:o==null?void 0:o.refetchPage}}))})}),v=Promise.all(f).then(b);return c!=null&&c.throwOnError||(v=v.catch(b)),v},n.fetchQuery=function(t,e,a){var s=W(t,e,a),u=this.defaultQueryOptions(s);typeof u.retry=="undefined"&&(u.retry=!1);var o=this.queryCache.build(this,u);return o.isStaleByTime(u.staleTime)?o.fetch(u):Promise.resolve(o.state.data)},n.prefetchQuery=function(t,e,a){return this.fetchQuery(t,e,a).then(b).catch(b)},n.fetchInfiniteQuery=function(t,e,a){var s=W(t,e,a);return s.behavior=jt(),this.fetchQuery(s)},n.prefetchInfiniteQuery=function(t,e,a){return this.fetchInfiniteQuery(t,e,a).then(b).catch(b)},n.cancelMutations=function(){var t=this,e=p.batch(function(){return t.mutationCache.getAll().map(function(a){return a.cancel()})});return Promise.all(e).then(b).catch(b)},n.resumePausedMutations=function(){return this.getMutationCache().resumePausedMutations()},n.executeMutation=function(t){return this.mutationCache.build(this,t).execute()},n.getQueryCache=function(){return this.queryCache},n.getMutationCache=function(){return this.mutationCache},n.getDefaultOptions=function(){return this.defaultOptions},n.setDefaultOptions=function(t){this.defaultOptions=t},n.setQueryDefaults=function(t,e){var a=this.queryDefaults.find(function(s){return S(t)===S(s.queryKey)});a?a.defaultOptions=e:this.queryDefaults.push({queryKey:t,defaultOptions:e})},n.getQueryDefaults=function(t){var e;return t?(e=this.queryDefaults.find(function(a){return T(t,a.queryKey)}))==null?void 0:e.defaultOptions:void 0},n.setMutationDefaults=function(t,e){var a=this.mutationDefaults.find(function(s){return S(t)===S(s.mutationKey)});a?a.defaultOptions=e:this.mutationDefaults.push({mutationKey:t,defaultOptions:e})},n.getMutationDefaults=function(t){var e;return t?(e=this.mutationDefaults.find(function(a){return T(t,a.mutationKey)}))==null?void 0:e.defaultOptions:void 0},n.defaultQueryOptions=function(t){if(t!=null&&t._defaulted)return t;var e=h({},this.defaultOptions.queries,this.getQueryDefaults(t==null?void 0:t.queryKey),t,{_defaulted:!0});return!e.queryHash&&e.queryKey&&(e.queryHash=V(e.queryKey,e)),e},n.defaultQueryObserverOptions=function(t){return this.defaultQueryOptions(t)},n.defaultMutationOptions=function(t){return t!=null&&t._defaulted?t:h({},this.defaultOptions.mutations,this.getMutationDefaults(t==null?void 0:t.mutationKey),t,{_defaulted:!0})},n.clear=function(){this.queryCache.clear(),this.mutationCache.clear()},r}(),Tt=Ft.unstable_batchedUpdates;p.setBatchNotifyFunction(Tt);var Gt=console;xt(Gt);var ot=U.createContext(void 0),Ht=U.createContext(!1);function Bt(r){return r&&typeof window!="undefined"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=ot),window.ReactQueryClientContext):ot}var se=function(n){var i=n.client,t=n.contextSharing,e=t===void 0?!1:t,a=n.children;U.useEffect(function(){return i.mount(),function(){i.unmount()}},[i]);var s=Bt(e);return U.createElement(Ht.Provider,{value:e},U.createElement(s.Provider,{value:i},a))};const ue=new Lt({defaultOptions:{queries:{suspense:!0,retry:!1,refetchOnWindowFocus:!1}}}),Zt=r=>new Promise(n=>setTimeout(n,r)),kt=async r=>{const n=await fetch(r),i=await n.json();return await Zt(500),n.status===404?[]:i},K=new Map,Wt=r=>{if(K.has(r)){const{promise:i,data:t,error:e}=K.get(r);if(i)throw i;if(e)throw e;return t}const n=kt(r).then(i=>K.set(r,{data:i})).catch(i=>K.set(r,{error:i}));throw K.set(r,{promise:n}),n},oe=r=>Wt(r);export{Jt as B,Xt as C,re as F,ie as I,ne as L,se as Q,ee as R,Vt as S,zt as T,te as a,oe as b,ue as q,ae as u};
