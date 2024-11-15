import{k as y}from"./print-DOU-TAfv.js";import{a as h,b as g}from"./bootstrap-DN_KIGH5.js";import{_ as s}from"./currency-gBUix5n2.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as u,o as t,c as o,h as d,f as m,b as a,F as _,e as v,g as C,w as x,j as F,t as q}from"./runtime-core.esm-bundler-DDZT2pc5.js";import"./chart-Ozef1QaY.js";const B={data:()=>({form:new y,fields:[],processing:!1,steps:[],failure:0,maxFailure:2,__:s}),methods:{validate(){},verifyDBConnectivity(){},saveConfiguration(e){this.form.disableFields(this.fields);const i=this.form.getValue(this.fields);return i.language=ns.language,this.processing=!0,h.post("/api/setup/configuration",i).subscribe({next:r=>{document.location="/sign-in"},error:r=>{this.processing=!1,this.form.enableFields(this.fields),this.form.triggerFieldsErrors(this.fields,r.data),g.error(r.message,"OK").subscribe()}})},divide(e){var i=Math.floor(e.length/2),r=e.slice(0,i),f=e.slice(i);return[r,f]},checkDatabase(){h.get("/api/setup/database").subscribe({next:e=>{this.fields=this.form.createFields([{label:s("Application"),description:s("That is the application name."),name:"ns_store_name",validation:"required"},{label:s("Username"),description:s("Provide the administrator username."),name:"admin_username",validation:"required"},{label:s("Email"),description:s("Provide the administrator email."),name:"admin_email",validation:"required"},{label:s("Password"),type:"password",description:s("What should be the password required for authentication."),name:"password",validation:"required"},{label:s("Confirm Password"),type:"password",description:s("Should be the same as the password above."),name:"confirm_password",validation:"required"}])},error:e=>{nsRouter.push("/database"),g.error("You need to define database settings","OKAY",{duration:3e3}).subscribe()}})}},mounted(){this.checkDatabase()}},V={key:1,class:"bg-white rounded shadow my-2"},N={class:"welcome-box border-b border-gray-300 p-3 text-gray-700"},P=["innerHTML"],S={class:"flex -mx-2"},D={class:"px-2 w-full md:w-1/2"},O={class:"px-2 w-full md:w-1/2"},T={class:"bg-gray-200 p-3 flex justify-between items-center"};function E(e,i,r,f,H,l){const p=u("ns-spinner"),b=u("ns-field"),w=u("ns-button");return t(),o("div",null,[e.fields.length===0?(t(),d(p,{key:0,size:"12",border:"4",animation:"fast"})):m("",!0),e.fields.length>0?(t(),o("div",V,[a("div",N,[a("div",{class:"border-b pb-3 mb-3",innerHTML:e.__("<strong>NexoPOS</strong> is now able to connect to the database. Start by creating the administrator account and giving a name to your installation. Once installed, this page will no longer be accessible.")},null,8,P),a("div",S,[a("div",D,[(t(!0),o(_,null,v(l.divide(e.fields)[0],(n,c)=>(t(),d(b,{key:c,field:n},null,8,["field"]))),128))]),a("div",O,[(t(!0),o(_,null,v(l.divide(e.fields)[1],(n,c)=>(t(),d(b,{key:c,field:n},null,8,["field"]))),128))])])]),a("div",T,[a("div",null,[e.processing?(t(),d(p,{key:0,size:"8",border:"4"})):m("",!0)]),C(w,{disabled:e.processing,onClick:i[0]||(i[0]=n=>l.saveConfiguration()),type:"info"},{default:x(()=>[F(q(e.__("Install")),1)]),_:1},8,["disabled"])])])):m("",!0)])}const Y=k(B,[["render",E]]);export{Y as default};
