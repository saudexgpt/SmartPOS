import{k as w,$ as F,w as S}from"./print-DOU-TAfv.js";import{a as d,n as p,b as u}from"./bootstrap-DN_KIGH5.js";import{_ as a}from"./currency-gBUix5n2.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as f,o as s,c as t,b as i,F as V,e as B,h as v,f as l,g as h,t as _,w as y,j as R}from"./runtime-core.esm-bundler-DDZT2pc5.js";import"./chart-Ozef1QaY.js";const X={name:"ns-login",props:["showRecoveryLink","showRegisterButton"],data(){return{fields:[],xXsrfToken:null,validation:new w,isSubitting:!1}},mounted(){F({login:d.get("/api/fields/ns.login"),csrf:d.get("/sanctum/csrf-cookie")}).subscribe({next:n=>{this.fields=this.validation.createFields(n.login),this.xXsrfToken=d.response.config.headers["X-XSRF-TOKEN"],setTimeout(()=>p.doAction("ns-login-mounted",this),100)},error:n=>{u.error(n.message||a("An unexpected error occurred."),a("OK"),{duration:0}).subscribe()}})},methods:{__:a,signIn(){if(!this.validation.validateFields(this.fields))return u.error(a("Unable to proceed the form is not valid.")).subscribe();this.validation.disableFields(this.fields),p.applyFilters("ns-login-submit",!0)&&(this.isSubitting=!0,d.post("/auth/sign-in",this.validation.getValue(this.fields),{headers:{"X-XSRF-TOKEN":this.xXsrfToken}}).subscribe({next:e=>{document.location=e.data.redirectTo},error:e=>{this.isSubitting=!1,this.validation.enableFields(this.fields),e.data&&this.validation.triggerFieldsErrors(this.fields,e.data),u.error(e.message||a("An unexpected error occured.")).subscribe()}}))}}},N={class:"ns-box rounded shadow overflow-hidden transition-all duration-100"},j={class:"ns-box-body"},C={class:"p-3 -my-2"},K={key:0,class:"flex items-center justify-center py-10"},E={key:1,class:"flex w-full items-center justify-center py-4"},I={href:"/password-lost",class:"hover:underline text-blue-600 text-sm"},L={class:"flex justify-between items-center border-t ns-box-footer p-3"},A={key:0};function O(n,e,m,z,o,r){const k=f("ns-field"),g=f("ns-spinner"),b=f("ns-button");return s(),t("div",N,[i("div",j,[i("div",C,[o.fields.length>0?(s(),t("div",{key:0,class:"py-2 fade-in-entrance anim-duration-300",onKeyup:e[0]||(e[0]=S(c=>r.signIn(),["enter"]))},[(s(!0),t(V,null,B(o.fields,(c,x)=>(s(),v(k,{key:x,field:c},null,8,["field"]))),128))],32)):l("",!0)]),o.fields.length===0?(s(),t("div",K,[h(g,{border:"4",size:"16"})])):l("",!0),m.showRecoveryLink?(s(),t("div",E,[i("a",I,_(r.__("Password Forgotten ?")),1)])):l("",!0)]),i("div",L,[i("div",null,[h(b,{disabled:o.isSubitting,onClick:e[1]||(e[1]=c=>r.signIn()),class:"justify-between",type:"info"},{default:y(()=>[o.isSubitting?(s(),v(g,{key:0,class:"mr-2",size:"6"})):l("",!0),i("span",null,_(r.__("Sign In")),1)]),_:1},8,["disabled"])]),m.showRegisterButton?(s(),t("div",A,[h(b,{link:!0,href:"/sign-up",type:"success"},{default:y(()=>[R(_(r.__("Register")),1)]),_:1})])):l("",!0)])])}const G=T(X,[["render",O]]);export{G as default};