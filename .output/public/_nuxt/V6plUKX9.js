import{c,a as r,o as s}from"./CDjqcE0o.js";const i="pk_test_35d147ab629a9ccb014d192254e94403fe934449",l="customer@example.com",p=5e3,f={__name:"payment",setup(m){function o(){PaystackPop.setup({key:i,email:l,amount:p*100,currency:"XOF",ref:""+Math.floor(Math.random()*1e9+1),callback:function(e){a(e.reference)},onClose:function(){alert("Transaction stopped")}}).openIframe()}const a=async t=>{try{const e=await fetch("/api/verify-payment",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({reference:t})});if(!e.ok)throw new Error("Payment verification failed");const n=await e.json();console.log("Payment successful:",n)}catch(e){console.error("Error verifying payment:",e)}};return(t,e)=>(s(),c("div",null,[r("button",{onClick:e[0]||(e[0]=n=>o())},"Buy Tickets")]))}};export{f as default};