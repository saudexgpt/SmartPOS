import b from"./ns-pos-cart-Dob2SB5V.js";import v from"./ns-pos-grid-BcN_qU5k.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r,o as e,c as o,b as i,F as h,e as x,h as S,k as w,n as l,g as c,f as a}from"./runtime-core.esm-bundler-DDZT2pc5.js";import"./bootstrap-DN_KIGH5.js";import"./print-DOU-TAfv.js";import"./currency-gBUix5n2.js";import"./chart-Ozef1QaY.js";import"./pos-section-switch-DmfccXVX.js";import"./ns-pos-order-type-popup-DoeTq_ot.js";import"./ns-prompt-popup-CDVMGRH6.js";import"./ns-orders-preview-popup-BNomZ-nn.js";import"./index.es-BamOKBrQ.js";import"./ns-pos-shipping-popup-B9YtSciS.js";const k={name:"ns-pos",computed:{buttons(){return POS.header.buttons}},mounted(){this.visibleSectionSubscriber=POS.visibleSection.subscribe(n=>{this.visibleSection=n});const s=document.getElementById("loader");s.classList.remove("fade-in-entrance"),s.classList.add("fade-out-exit"),setTimeout(()=>{s.remove(),POS.reset()},500)},unmounted(){this.visibleSectionSubscriber.unsubscribe()},data(){return{visibleSection:null,visibleSectionSubscriber:null}},components:{nsPosCart:b,nsPosGrid:v}},g={class:"h-full flex-auto flex flex-col",id:"pos-container"},P={class:"flex overflow-hidden flex-shrink-0 px-2 pt-2"},y={class:"-mx-2 flex overflow-x-auto pb-1"},B={class:"flex-auto overflow-hidden flex p-2"},C={class:"flex flex-auto overflow-hidden -m-2"};function L(s,n,N,O,t,d){const m=r("ns-pos-cart"),p=r("ns-pos-grid");return e(),o("div",g,[i("div",P,[i("div",y,[(e(!0),o(h,null,x(d.buttons,(u,f)=>(e(),o("div",{class:"header-buttons flex px-2 flex-shrink-0",key:f},[(e(),S(w(u)))]))),128))])]),i("div",B,[i("div",C,[["both","cart"].includes(t.visibleSection)?(e(),o("div",{key:0,class:l([t.visibleSection==="both"?"w-1/2":"w-full","flex overflow-hidden p-2"])},[c(m)],2)):a("",!0),["both","grid"].includes(t.visibleSection)?(e(),o("div",{key:1,class:l([t.visibleSection==="both"?"w-1/2":"w-full","p-2 flex overflow-hidden"])},[c(p)],2)):a("",!0)])])])}const M=_(k,[["render",L]]);export{M as default};