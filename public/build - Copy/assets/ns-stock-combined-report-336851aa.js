import{h as u}from"./bootstrap-ffaf6d09.js";import{_ as r}from"./currency-feccde3d.js";import{s as h}from"./select-api-entities-3523a486.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";import{r as m,o as a,c as _,a as s,f as y,t,F as x,b as f,e as v}from"./runtime-core.esm-bundler-414a078a.js";import"./chart-2ccf8ff7.js";import"./ns-prompt-popup-24cc8d6f.js";import"./join-array-28744963.js";const g={props:["storeLogo","storeName"],data(){return{__:r,ns,moment:u,categoriesNames:"",unitsNames:"",categories:[],products:[],units:[],selectedCategories:[],selectedUnits:[],categoryField:{value:[],label:r("Filter by Category")},unitField:{value:[],label:r("Filter by Units")},datePicker:{type:"datetimepicker",name:"date",value:"",validation:"required"}}},methods:{loadReport(){nsHttpClient.post("/api/reports/product-history-combined",{date:this.datePicker.value,categories:this.categoryField.value,units:this.unitField.value}).subscribe({next:o=>{this.products=o},error:o=>{nsSnackBar.error(o.message).subscribe()}})},printSaleReport(){this.$htmlToPaper("combined-report")},async generateReport(){try{const o=await new Promise((n,c)=>{nsHttpClient.post("/api/reports/compute-combined-report",{date:this.datePicker.value}).subscribe({next:d=>{n(d)},error:d=>{c(d)}})});nsSnackBar.success(o.message).subscribe()}catch(o){nsSnackBar.error(o.message).subscribe()}},async selectCategories(){try{const o=await h("/api/categories",this.categoryField.label,this.categoryField.value);this.categoryField.value=o.values,this.categoriesNames=o.labels,this.loadReport()}catch(o){if(o!==!1)return nsSnackBar.error(r("An error has occured while loading the categories")).subscribe()}},async selectUnits(){try{const o=await h("/api/units",this.unitField.label,this.unitField.value);this.unitField.value=o.values,this.unitsNames=o.labels,this.loadReport()}catch(o){if(o!==!1)return nsSnackBar.error(r("An error has occured while loading the units")).subscribe()}}}},k={id:"report-section",class:"px-4"},w={class:"flex -mx-2"},C={class:"px-2 flex -mx-2"},F={class:"px-2"},N={class:"px-2"},S={class:"ns-button"},Q=s("i",{class:"las la-sync-alt text-xl"},null,-1),R={class:"pl-2"},B={class:"px-2"},P={class:"ns-button"},A=s("i",{class:"las la-print text-xl"},null,-1),j={class:"pl-2"},q={class:"px-2 flex -mx-2"},L={class:"px-2"},U={class:"ns-button"},D=s("i",{class:"las la-filter text-xl"},null,-1),H={class:"pl-2"},T={class:"px-2"},V={class:"ns-button"},E=s("i",{class:"las la-filter text-xl"},null,-1),I={class:"pl-2"},M={class:"px-2"},G={class:"ns-button"},z=s("i",{class:"las la-sync-alt"},null,-1),J={class:"pl-2"},K={id:"combined-report"},O={class:"flex w-full mb-4"},W={class:"flex justify-between w-full"},X={class:"text-secondary"},Y=["innerHTML"],Z={class:"pb-1 border-b border-dashed"},$={class:"pb-1 border-b border-dashed"},ss=["src","alt"],es={class:"box bg-box-background"},ts={class:"box-body text-primary"},os={class:"min-w-fit w-full table-auto"},is={class:"text-sm"},ls={class:"font-bold"},rs={class:"border p-2 w-1/3"},cs={class:"border p-2"},ds={class:"hidden md:inline-block"},as={class:"inline-block md:hidden"},_s={class:"border p-2"},hs={class:"hidden md:inline-block"},ps={class:"inline-block md:hidden"},us={class:"border p-2"},bs={class:"hidden md:inline-block"},ms={class:"inline-block md:hidden"},ys={class:"border p-2"},xs={class:"hidden md:inline-block"},fs={class:"inline-block md:hidden"},vs={class:"border p-2"},gs={class:"hidden md:inline-block"},ks={class:"inline-block md:hidden"},ws={class:"text-xs"},Cs={class:"border p-2"},Fs={class:"border p-2"},Ns={class:"border p-2"},Ss={class:"border p-2"},Qs={class:"border p-2"},Rs={class:"border p-2"},Bs={key:0},Ps={colspan:"6",class:"border p-2 text-center"};function As(o,n,c,d,e,l){const p=m("ns-field");return a(),_("div",k,[s("div",w,[s("div",C,[s("div",F,[y(p,{field:e.datePicker},null,8,["field"])]),s("div",N,[s("div",S,[s("button",{onClick:n[0]||(n[0]=i=>l.loadReport()),class:"rounded flex justify-between shadow py-1 items-center text-primary px-2"},[Q,s("span",R,t(e.__("Load")),1)])])]),s("div",B,[s("div",P,[s("button",{onClick:n[1]||(n[1]=i=>l.printSaleReport()),class:"rounded flex justify-between shadow py-1 items-center text-primary px-2"},[A,s("span",j,t(e.__("Print")),1)])])])]),s("div",q,[s("div",L,[s("div",U,[s("button",{onClick:n[2]||(n[2]=i=>l.selectCategories()),class:"rounded flex justify-between shadow py-1 items-center text-primary px-2"},[D,s("span",H,t(e.__("Categories"))+": "+t(e.categoriesNames||e.__("All Categories")),1)])])]),s("div",T,[s("div",V,[s("button",{onClick:n[3]||(n[3]=i=>l.selectUnits()),class:"rounded flex justify-between shadow py-1 items-center text-primary px-2"},[E,s("span",I,t(e.__("Units"))+": "+t(e.unitsNames||e.__("All Units")),1)])])]),s("div",M,[s("div",G,[s("button",{onClick:n[4]||(n[4]=i=>l.generateReport()),class:"rounded flex justify-between shadow py-1 items-center text-primary px-2"},[z,s("span",J,t(e.__("Generate Report")),1)])])])])]),s("div",K,[s("div",O,[s("div",W,[s("div",X,[s("ul",null,[s("li",{class:"pb-1 border-b border-dashed",innerHTML:e.__("Date : {date}").replace("{date}",e.moment(e.datePicker.value).format(e.ns.date.format))},null,8,Y),s("li",Z,t(e.__("Document : Combined Products History")),1),s("li",$,t(e.__("By : {user}").replace("{user}",e.ns.user.username)),1)])]),s("div",null,[s("img",{class:"w-24",src:c.storeLogo,alt:c.storeName},null,8,ss)])])]),s("div",es,[s("div",ts,[s("table",os,[s("thead",is,[s("tr",ls,[s("td",rs,t(e.__("Name")),1),s("td",cs,[s("span",ds,t(e.__("Initial Quantity")),1),s("span",as,t(e.__("Ini. Qty")),1)]),s("td",_s,[s("span",hs,t(e.__("Added Quantity")),1),s("span",ps,t(e.__("Add. Qty")),1)]),s("td",us,[s("span",bs,t(e.__("Sold Quantity")),1),s("span",ms,t(e.__("Sold Qty")),1)]),s("td",ys,[s("span",xs,t(e.__("Defective Quantity")),1),s("span",fs,t(e.__("Defec. Qty")),1)]),s("td",vs,[s("span",gs,t(e.__("Final Quantity")),1),s("span",ks,t(e.__("Final Qty")),1)])])]),s("tbody",ws,[(a(!0),_(x,null,f(e.products,i=>(a(),_("tr",{key:i.id},[s("td",Cs,t(i.history_name)+" ("+t(i.unit_name)+")",1),s("td",Fs,t(i.history_initial_quantity),1),s("td",Ns,t(i.history_procured_quantity),1),s("td",Ss,t(i.history_sold_quantity),1),s("td",Qs,t(i.history_defective_quantity),1),s("td",Rs,t(i.history_final_quantity),1)]))),128)),e.products.length===0?(a(),_("tr",Bs,[s("td",Ps,t(e.__("No data available")),1)])):v("",!0)])])])])])])}const Es=b(g,[["render",As]]);export{Es as default};
