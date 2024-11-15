import{F as C,d as b,b as p,a as T,v as U}from"./bootstrap-ffaf6d09.js";import{_ as u}from"./currency-feccde3d.js";import{_ as R}from"./_plugin-vue_export-helper-c27b6911.js";import{r as y,o as i,c as r,f as g,e as m,n as v,a as l,t as c,B,A as k,i as w,F as f,b as h,g as O}from"./runtime-core.esm-bundler-414a078a.js";import"./chart-2ccf8ff7.js";const M={name:"ns-create-coupons",mounted(){this.loadForm()},computed:{validTabs(){if(this.form){const e=[];for(let t in this.form.tabs)["selected_products","selected_categories","selected_groups","selected_customers"].includes(t)&&e.push(this.form.tabs[t]);return e}return[]},activeValidTab(){return this.validTabs.filter(e=>e.active)[0]},generalTab(){const e=[];for(let t in this.form.tabs)["general"].includes(t)&&e.push(this.form.tabs[t]);return e}},data(){return{formValidation:new C,form:{},labels:{},nsSnackBar:b,nsHttpClient:p}},props:["submitMethod","submitUrl","returnUrl","src","rules","popup"],methods:{__:u,popupResolver:T,setTabActive(e){this.validTabs.forEach(t=>t.active=!1),e.active=!0},submit(){if(this.formValidation.validateForm(this.form).length>0)return b.error(u("Unable to proceed the form is not valid."),u("Okay")).subscribe();if(this.submitUrl===void 0)return b.error(u("No submit URL was provided"),u("Okay")).subscribe();this.formValidation.disableForm(this.form);const e={...this.formValidation.extractForm(this.form)};p[this.submitMethod?this.submitMethod.toLowerCase():"post"](this.submitUrl,e).subscribe(t=>{if(t.status==="success")if(this.popup)this.popupResolver(t);else return document.location=this.returnUrl;this.formValidation.enableForm(this.form)},t=>{b.error(t.message||u("An unexpected error occurred."),void 0,{duration:5e3}).subscribe(),t.status==="error"&&this.formValidation.triggerError(this.form,t.data),this.formValidation.enableForm(this.form)})},handleGlobalChange(e){this.globallyChecked=e,this.rows.forEach(t=>t.$checked=e)},loadForm(){p.get(`${this.src}`).subscribe(t=>{this.labels=t.labels,this.form=this.parseForm(t.form)})},parseForm(e){e.main.value=e.main.value===void 0?"":e.main.value,e.main=this.formValidation.createFields([e.main])[0];let t=0;for(let n in e.tabs)t===1&&e.tabs[n].active===void 0&&(e.tabs[n].active=!0),e.tabs[n].active=e.tabs[n].active===void 0?!1:e.tabs[n].active,e.tabs[n].fields=this.formValidation.createFields(e.tabs[n].fields),t++;return e},addOption(e){const t=this.options.indexOf(e);t>=0&&(this.options[t].selected=!this.options[t].selected)},removeOption({option:e,index:t}){e.selected=!1},getRuleForm(){return this.form.ruleForm},addRule(){this.form.rules.push(this.getRuleForm())},removeRule(e){this.form.rules.splice(e,1)}}},N={class:"form flex-auto flex flex-col",id:"crud-form"},j={key:0,class:"flex items-center justify-center flex-auto"},A={class:"flex flex-col"},E={class:"flex justify-between items-center"},L={for:"title",class:"font-bold my-2 text-primary"},S={key:0,for:"title",class:"text-sm my-2"},q=["href"],D=["disabled"],z=["disabled"],G={key:0,class:"text-xs text-primary py-1"},H={id:"form-container",class:"-mx-4 flex flex-wrap mt-4"},I={class:"px-4 w-full md:w-1/2"},J={class:"px-4 w-full md:w-1/2"},K={id:"tabbed-card"},P={id:"card-header",class:"flex ml-4 flex-wrap ns-tab"},Q=["onClick"],W={class:"ns-tab-item"},X={class:"shadow p-2 rounded"};function Y(e,t,n,Z,s,a){const F=y("ns-spinner"),_=y("ns-field");return i(),r("div",N,[Object.values(s.form).length===0?(i(),r("div",j,[g(F)])):m("",!0),Object.values(s.form).length>0?(i(),r("div",{key:1,class:v(n.popup?"bg-box-background w-95vw md:w-2/3-screen h-3/4-screen overflow-y-auto p-4":"")},[l("div",A,[l("div",E,[l("label",L,c(n.submitMethod.toLowerCase()==="post"?s.labels.create_title:s.labels.edit_title),1),n.popup?m("",!0):(i(),r("div",S,[n.returnUrl?(i(),r("a",{key:0,href:n.returnUrl,class:"rounded-full border ns-inset-button error px-2 py-1"},c(a.__("Return")),9,q)):m("",!0)]))]),l("div",{class:v([s.form.main.disabled?"disabled":s.form.main.errors.length>0?"error":"info","input-group flex border-2 rounded overflow-hidden"])},[B(l("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>s.form.main.value=o),onBlur:t[1]||(t[1]=o=>s.formValidation.checkField(s.form.main)),onChange:t[2]||(t[2]=o=>s.formValidation.checkField(s.form.main)),disabled:s.form.main.disabled,type:"text",class:"flex-auto text-primary outline-none h-10 px-2"},null,40,D),[[U,s.form.main.value]]),l("button",{disabled:s.form.main.disabled,onClick:t[3]||(t[3]=o=>a.submit()),class:"outline-none px-4 h-10"},[k(e.$slots,"save",{},()=>[w(c(a.__("Save")),1)])],8,z)],2),s.form.main.description&&s.form.main.errors.length===0?(i(),r("p",G,c(s.form.main.description),1)):m("",!0),(i(!0),r(f,null,h(s.form.main.errors,(o,d)=>(i(),r("p",{class:"text-xs py-1 text-error-tertiary",key:d},[l("span",null,[k(e.$slots,"error-required",{},()=>[w(c(o.identifier),1)])])]))),128))]),l("div",H,[l("div",I,[(i(!0),r(f,null,h(a.generalTab,(o,d)=>(i(),r("div",{class:"rounded ns-box shadow p-2",key:d},[(i(!0),r(f,null,h(o.fields,(x,V)=>(i(),O(_,{key:V,field:x},null,8,["field"]))),128))]))),128))]),l("div",J,[l("div",K,[l("div",P,[(i(!0),r(f,null,h(a.validTabs,(o,d)=>(i(),r("div",{onClick:x=>a.setTabActive(o),class:v([o.active?"active":"inactive","tab cursor-pointer px-4 py-2 rounded-tl-lg rounded-tr-lg"]),key:d},c(o.label),11,Q))),128))]),l("div",W,[l("div",X,[(i(!0),r(f,null,h(a.activeValidTab.fields,(o,d)=>(i(),r("div",{class:"flex flex-col",key:d},[g(_,{field:o},null,8,["field"])]))),128))])])])])])],2)):m("",!0)])}const re=R(M,[["render",Y]]);export{re as default};
