const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ns-pos-order-type-popup-DoeTq_ot.js","./print-DOU-TAfv.js","./currency-gBUix5n2.js","./runtime-core.esm-bundler-DDZT2pc5.js","./bootstrap-DN_KIGH5.js","./chart-Ozef1QaY.js","./ns-prompt-popup-CDVMGRH6.js","./_plugin-vue_export-helper-DlAUqK2U.js","./ns-prompt-popup-CVxzoclS.css","./ns-orders-preview-popup-BNomZ-nn.js","./index.es-BamOKBrQ.js"])))=>i.map(i=>d[i]);
import{_ as r}from"./preload-helper-C1FmrZbK.js";import{j as n}from"./print-DOU-TAfv.js";import{_ as u}from"./currency-gBUix5n2.js";import{_ as a}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as p,o as _,c as l,b as t,t as m}from"./runtime-core.esm-bundler-DDZT2pc5.js";const c={name:"ns-pos-customers-button",methods:{__:u,openCustomerPopup(){n.show(p({loader:()=>r(()=>import("./ns-pos-order-type-popup-DoeTq_ot.js").then(e=>e.d),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url)}))}},beforeDestroy(){nsHotPress.destroy("ns_pos_keyboard_create_customer")},mounted(){for(let e in nsShortcuts)["ns_pos_keyboard_create_customer"].includes(e)&&nsHotPress.create("ns_pos_keyboard_create_customer").whenNotVisible([".is-popup"]).whenPressed(nsShortcuts[e]!==null?nsShortcuts[e].join("+"):null,s=>{s.preventDefault(),this.openCustomerPopup()})}},i={class:"ns-button default"};function d(e,s,f,h,P,o){return _(),l("div",i,[t("button",{onClick:s[0]||(s[0]=b=>o.openCustomerPopup()),class:"rounded shadow flex-shrink-0 h-12 flex items-center px-2 py-1 text-sm"},[s[1]||(s[1]=t("i",{class:"mr-1 text-xl lar la-user-circle"},null,-1)),t("span",null,m(o.__("Customers")),1)])])}const w=a(c,[["render",d]]);export{w as default};