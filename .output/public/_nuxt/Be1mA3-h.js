import{L as T,r as j,K as z,M as I,N as S,O as L,C as N,P as E,Q as q,R as F,i as o,J as U,S as V,y as H,T as K,E as W,U as Z,z as y,s as G,A as J,c as v,a as l,t as m,x as k,d as M,l as Q,j as X,v as Y,V as A,o as w}from"./CDjqcE0o.js";const ee=n=>n==="defer"||n===!1;function te(...n){var P;const i=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(i);let[s,e,t={}]=n;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const a=q(),d=e,f=()=>null,b=()=>a.isHydrating?a.payload.data[s]:a.static.data[s];t.server=t.server??!0,t.default=t.default??f,t.getCachedData=t.getCachedData??b,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0,t.deep=t.deep??T.deep,t.dedupe=t.dedupe??"cancel";const x=()=>t.getCachedData(s,a)!=null;if(!a._asyncData[s]||!t.immediate){(P=a.payload._errors)[s]??(P[s]=null);const u=t.deep?j:z;a._asyncData[s]={data:u(t.getCachedData(s,a)??t.default()),pending:j(!x()),error:I(a.payload._errors,s),status:j("idle")}}const r={...a._asyncData[s]};r.refresh=r.execute=(u={})=>{if(a._asyncDataPromises[s]){if(ee(u.dedupe??t.dedupe))return a._asyncDataPromises[s];a._asyncDataPromises[s].cancelled=!0}if((u._initial||a.isHydrating&&u._initial!==!1)&&x())return Promise.resolve(t.getCachedData(s,a));r.pending.value=!0,r.status.value="pending";const g=new Promise((h,c)=>{try{h(d(a))}catch(_){c(_)}}).then(async h=>{if(g.cancelled)return a._asyncDataPromises[s];let c=h;t.transform&&(c=await t.transform(h)),t.pick&&(c=se(c,t.pick)),a.payload.data[s]=c,r.data.value=c,r.error.value=null,r.status.value="success"}).catch(h=>{if(g.cancelled)return a._asyncDataPromises[s];r.error.value=F(h),r.data.value=o(t.default()),r.status.value="error"}).finally(()=>{g.cancelled||(r.pending.value=!1,delete a._asyncDataPromises[s])});return a._asyncDataPromises[s]=g,a._asyncDataPromises[s]},r.clear=()=>ae(a,s);const C=()=>r.refresh({_initial:!0}),O=t.server!==!1&&a.payload.serverRendered;{const u=U();if(u&&!u._nuxtOnBeforeMountCbs){u._nuxtOnBeforeMountCbs=[];const c=u._nuxtOnBeforeMountCbs;S(()=>{c.forEach(_=>{_()}),c.splice(0,c.length)}),L(()=>c.splice(0,c.length))}O&&a.isHydrating&&(r.error.value||x())?(r.pending.value=!1,r.status.value=r.error.value?"error":"success"):u&&(a.payload.serverRendered&&a.isHydrating||t.lazy)&&t.immediate?u._nuxtOnBeforeMountCbs.push(C):t.immediate&&C();const g=V();if(t.watch){const c=N(t.watch,()=>r.refresh());g&&E(c)}const h=a.hook("app:data:refresh",async c=>{(!c||c.includes(s))&&await r.refresh()});g&&E(h)}const D=Promise.resolve(a._asyncDataPromises[s]).then(()=>r);return Object.assign(D,r),D}function ae(n,i){i in n.payload.data&&(n.payload.data[i]=void 0),i in n.payload._errors&&(n.payload._errors[i]=null),n._asyncData[i]&&(n._asyncData[i].data.value=void 0,n._asyncData[i].error.value=null,n._asyncData[i].pending.value=!1,n._asyncData[i].status.value="idle"),i in n._asyncDataPromises&&(n._asyncDataPromises[i].cancelled=!0,n._asyncDataPromises[i]=void 0)}function se(n,i){const s={};for(const e of i)s[e]=n[e];return s}function ne(n,i,s){const[e={},t]=[{},i],a=H(()=>y(n)),d=e.key||K([t,typeof a.value=="string"?a.value:"",...oe(e)]);if(!d||typeof d!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+d);if(!n)throw new Error("[nuxt] [useFetch] request is missing.");const f=d===t?"$f"+d:d;if(!e.baseURL&&typeof a.value=="string"&&a.value[0]==="/"&&a.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:b,lazy:x,default:r,transform:C,pick:O,watch:D,immediate:P,getCachedData:u,deep:g,dedupe:h,...c}=e,_=W({...Z,...c,cache:typeof e.cache=="boolean"?void 0:e.cache}),R={server:b,lazy:x,default:r,transform:C,pick:O,immediate:P,getCachedData:u,deep:g,dedupe:h,watch:D===!1?[]:[_,a,...D||[]]};let p;return te(f,()=>{var B;(B=p==null?void 0:p.abort)==null||B.call(p),p=typeof AbortController<"u"?new AbortController:{};const $=y(e.timeout);return $&&setTimeout(()=>p.abort(),$),(e.$fetch||globalThis.$fetch)(a.value,{signal:p.signal,..._})},R)}function oe(n){var s;const i=[((s=y(n.method))==null?void 0:s.toUpperCase())||"GET",y(n.baseURL)];for(const e of[n.params||n.query]){const t=y(e);if(!t)continue;const a={};for(const[d,f]of Object.entries(t))a[y(d)]=y(f);i.push(a)}return i}const re={class:"py-6 px-4 sm:p-6 md:py-10 md:px-8"},ie={class:"card max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2"},le={class:"card-body relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1"},ce={class:"mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white"},de=l("p",{class:"text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400"},"Categoryname",-1),ue={class:"grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0"},me=["src","alt"],fe=["src","alt"],he=["src","alt"],ge=["src","alt"],pe=["src","alt"],ye={class:"mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2"},_e=l("dt",{class:"sr-only"},"Reviews",-1),ve={class:"text-indigo-600 flex items-center dark:text-indigo-400"},we=l("svg",{width:"24",height:"24",fill:"none","aria-hidden":"true",class:"mr-1 stroke-current dark:stroke-indigo-500"},[l("path",{d:"m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),be=l("span",{class:"text-slate-400 font-normal"},"(128)",-1),xe=l("dt",{class:"sr-only"},"Location",-1),De={class:"flex items-center"},ke=A('<svg width="2" height="2" aria-hidden="true" fill="currentColor" class="mx-3 text-slate-300"><circle cx="1" cy="1" r="1"></circle></svg><svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true"><path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z"></path><path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"></path></svg>',2),Ce={class:"mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4"},Pe=l("button",{type:"submit",class:"bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"},"Buy Ticket",-1),je=l("span",null,[l("span",{class:"text-slate-400 font-normal"})],-1),Oe=l("button",{type:"button",class:"bg-yellow-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"},"Add to Cart",-1),$e={class:"mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400"},Re={__name:"[eventId]",setup(n){const s=G().params.eventId,{data:e}=ne(`https://8f7532c3-ae66-446a-9029-19b1eeebab3b-00-30hfb3eka4tfa.kirk.replit.dev/events/${s}`,"$DBxtfsckbW"),t=j({quantity:1}),a=()=>{if(!e.value)return;PaystackPop.setup({key:"pk_test_35d147ab629a9ccb014d192254e94403fe934449",email:"customer@example.com",amount:e.value.price*t.value.quantity*100,currency:"XOF",onClose:()=>alert("Window closed."),callback:f=>alert(`Payment complete! Reference: ${f.reference}`)}).openIframe()};return J(()=>{const d=document.createElement("script");d.src="https://js.paystack.co/v1/inline.js",document.body.appendChild(d)}),(d,f)=>(w(),v("main",re,[l("div",ie,[l("div",le,[l("h1",ce,m(o(e).name),1),de]),l("div",ue,[o(e).images&&o(e).images.length>0?(w(),v("img",{key:0,src:o(e).images[0],alt:`Image of ${o(e).name}`,class:"w-full h-60 object-cover rounded-lg",loading:"lazy"},null,8,me)):k("",!0),o(e).images&&o(e).images.length>0?(w(),v("img",{key:1,src:o(e).images[0],alt:`Image of ${o(e).name}`,class:"hidden w-full h-60 object-cover rounded-lg",loading:"lazy"},null,8,fe)):k("",!0),o(e).images&&o(e).images.length>0?(w(),v("img",{key:2,src:o(e).images[0],alt:`Image of ${o(e).name}`,class:"hidden w-full h-60 object-cover rounded-lg",loading:"lazy"},null,8,he)):k("",!0),o(e).images&&o(e).images.length>0?(w(),v("img",{key:3,src:o(e).images[0],alt:`Image of ${o(e).name}`,class:"hidden w-full h-60 object-cover rounded-lg",loading:"lazy"},null,8,ge)):k("",!0),o(e).images&&o(e).images.length>0?(w(),v("img",{key:4,src:o(e).images[0],alt:`Image of ${o(e).name}`,class:"hidden w-full h-60 object-cover rounded-lg",loading:"lazy"},null,8,pe)):k("",!0)]),l("dl",ye,[_e,l("dd",ve,[we,l("span",null,[M("5 "+m(o(e).rating),1),be])]),xe,l("dd",De,[ke,M(" "+m(o(e).location),1)])]),l("div",Ce,[l("form",{onSubmit:Q(a,["prevent"]),class:"space-y-4"},[X(l("input",{type:"number","onUpdate:modelValue":f[0]||(f[0]=b=>t.value.quantity=b),min:"1",max:"10",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",placeholder:"Number of Tickets"},null,512),[[Y,t.value.quantity]]),Pe,je,Oe],32)]),l("p",$e,m(o(e).description)+m(o(e).description)+m(o(e).description)+m(o(e).description)+m(o(e).description)+m(o(e).description)+m(o(e).description)+m(o(e).description),1)])]))}};export{Re as default};