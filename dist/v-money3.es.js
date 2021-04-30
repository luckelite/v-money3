import{defineComponent as e,reactive as t,watch as n,resolveDirective as i,withDirectives as a,openBlock as u,createBlock as o}from"vue";var r={prefix:"",suffix:"",thousands:",",decimal:".",precision:2,disableNegative:!1};function l(e,t=r){"number"==typeof e&&(e=e.toFixed(s(t.precision)));const n=t.disableNegative?"":e.indexOf("-")>=0?"-":"",i=d(f(c(e.replace(t.prefix,"").replace(t.suffix,"")),t.precision)).split(".");let a=i[0];const u=i[1];return a=function(e,t){return e.replace(/(\d)(?=(?:\d{3})+\b)/gm,`$1${t}`)}(a,t.thousands),t.prefix+n+function(e,t,n){return t?e+n+t:e}(a,u,t.decimal)+t.suffix}function c(e){return d(e).replace(/\D+/g,"")||"0"}function s(e){return t=0,n=e,i=20,Math.max(t,Math.min(n,i));var t,n,i}function f(e,t){const n=Math.pow(10,t);return(parseFloat(e)/n).toFixed(s(t))}function d(e){return e?e.toString():""}function p(e,t){const n=function(){e.setSelectionRange(t,t)};e===document.activeElement&&(n(),setTimeout(n,1))}function m(e){const t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}function g(e,t){if(!t.value)return;const n=(i=r,a=t.value,i=i||{},a=a||{},Object.keys(i).concat(Object.keys(a)).reduce((function(e,t){return e[t]=void 0===a[t]?i[t]:a[t],e}),{}));var i,a;if("INPUT"!==e.tagName.toLocaleUpperCase()){const t=e.getElementsByTagName("input");1!==t.length||(e=t[0])}e.oninput=function(){let t=e.value.length-e.selectionEnd;e.value=l(e.value,n),t=Math.max(t,n.suffix.length),t=e.value.length-t,t=Math.max(t,n.prefix.length+1),p(e,t),e.dispatchEvent(m("change"))},e.onfocus=function(){p(e,e.value.length-n.suffix.length)},e.oninput(),e.dispatchEvent(m("input"))}const v=e({name:"Money3",props:{id:{required:!1,type:[Number,String],default:0},modelValue:{required:!0,type:[Number,String,void 0],default:void 0},masked:{type:Boolean,default:!1},precision:{type:Number,default:()=>r.precision},decimal:{type:String,default:()=>r.decimal},thousands:{type:String,default:()=>r.thousands},prefix:{type:String,default:()=>r.prefix},suffix:{type:String,default:()=>r.suffix},disableNegative:{type:Boolean,default:!1}},directives:{money3:g},setup(e,{emit:i}){const a=t({formattedValue:""});return n((()=>e.modelValue),(t=>{const n=l(t,e);n!==a.formattedValue&&(a.formattedValue=n)})),{data:a,change:function(t){i("update:model-value",e.masked?t.target.value:function(e,t=r){const n=t.disableNegative?1:e.indexOf("-")>=0?-1:1,i=f(c(e.replace(t.prefix,"").replace(t.suffix,"")),t.precision);return parseFloat(i)*n}(t.target.value,e))}}}});v.render=function(e,t,n,r,l,c){const s=i("money3");return a((u(),o("input",{type:"tel",id:e.id,value:e.data.formattedValue,onChange:t[1]||(t[1]=(...t)=>e.change&&e.change(...t)),class:"v-money3"},null,40,["id","value"])),[[s,{precision:e.precision,decimal:e.decimal,thousands:e.thousands,prefix:e.prefix,suffix:e.suffix,disableNegative:e.disableNegative}]])};export{v as Money3,g as VMoney3};
