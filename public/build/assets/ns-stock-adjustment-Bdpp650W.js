import{a as y,b as h}from"./bootstrap-DN_KIGH5.js";import{$ as P,j as b,v as S,w as C}from"./print-DOU-TAfv.js";import{n as q}from"./ns-procurement-quantity-D3jYhg7w.js";import{n as v,e as A,b as x}from"./ns-prompt-popup-CDVMGRH6.js";import{_ as c,n as g}from"./currency-gBUix5n2.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as V,o as l,c as u,b as s,C as U,t as r,F as j,e as k,f as p,j as f,h as L,w,g as N}from"./runtime-core.esm-bundler-DDZT2pc5.js";import"./chart-Ozef1QaY.js";const Q={name:"ns-stock-adjustment",props:["actions"],data(){return{search:"",timeout:null,suggestions:[],products:[]}},mounted(){},methods:{__:c,nsCurrency:g,searchProduct(e){e.length>0&&y.post("/api/procurements/products/search-procurement-product",{argument:e}).subscribe(t=>{if(t.from==="products")if(t.products.length>0)t.products.length===1?this.addSuggestion(t.products[0]):this.suggestions=t.products;else return this.closeSearch(),h.error(c("Looks like no valid products matched the searched term.")).subscribe();else if(t.from==="procurements"){if(t.product===null)return this.closeSearch(),h.error(c("Looks like no valid products matched the searched term.")).subscribe();this.addProductToList(t.product)}})},addProductToList(e){if(this.products.filter(n=>n.procurement_product_id===e.id).length>0)return this.closeSearch(),h.error(c("The product already exists on the table.")).subscribe();const a=this.actions.filter(n=>n.value==="deleted");let d=a.length===1?a[0]:{value:"deleted"};const o=new Object;e.unit_quantity.unit=e.unit,o.selected=!1,o.quantities=[e.unit_quantity],o.name=e.name,o.adjust_unit=e.unit_quantity,o.adjust_quantity=1,o.adjust_action=d.value,o.adjust_reason="",o.adjust_value=0,o.id=e.product_id,o.accurate_tracking=1,o.available_quantity=e.available_quantity,o.procurement_product_id=e.id,o.procurement_history=[{label:`${e.procurement.name} (${e.available_quantity})`,value:e.id}],this.recalculateProduct(o),this.products.unshift(o),this.clearSearch()},addSuggestion(e){const t=this.products.filter(a=>a.id===e.id).length>0;P([y.get(`/api/products/${e.id}/units/quantities`)]).subscribe(a=>{if(a[0].length>0){const d=a[0].filter(_=>_.unit.base_unit),o=this.actions.filter(_=>_.value==="set");let n=o.length===1?o[0]:{value:"set"};e.selected=!1,e.quantities=a[0],e.adjust_quantity=1,e.adjust_action=n.value,e.adjust_reason="",e.adjust_unit=d.length>0&&!t?d[0]:"",e.adjust_value=0,e.procurement_product_id=0,this.recalculateProduct(e),this.products.unshift(e),this.clearSearch()}else return h.error(c("This product doesn't have any stock to adjust.")).subscribe();e.accurate_tracking})},closeSearch(){this.$refs.searchField.select(),this.suggestions=[]},clearSearch(){this.search="",this.suggestions=[]},recalculateProduct(e){e.adjust_unit!==""&&(["deleted","defective","lost"].includes(e.adjust_action)?e.adjust_value=-(e.adjust_quantity*e.adjust_unit.sale_price):e.adjust_value=e.adjust_quantity*e.adjust_unit.sale_price),this.$forceUpdate()},openQuantityPopup(e){e.quantity,new Promise((a,d)=>{b.show(q,{resolve:a,reject:d,quantity:e.adjust_quantity})}).then(a=>{if(!["added","set"].includes(e.adjust_action)){if(e.accurate_tracking!==void 0&&a.quantity>e.available_quantity)return h.error(c("The specified quantity exceed the available quantity.")).subscribe();if(a.quantity>e.adjust_unit.quantity)return h.error(c("The specified quantity exceed the available quantity.")).subscribe()}e.adjust_quantity=a.quantity,this.recalculateProduct(e)})},proceedStockAdjustment(){if(this.products.length===0)return h.error(c("Unable to proceed as the table is empty.")).subscribe();b.show(v,{title:c("Confirm Your Action"),message:c("The stock adjustment is about to be made. Would you like to confirm ?"),onAction:e=>{e&&y.post("/api/products/adjustments",{products:this.products}).subscribe(t=>{h.success(t.message).subscribe(),this.products=[]},t=>{h.error(t.message).subscribe()})}})},provideReason(e){new Promise((a,d)=>{b.show(A,{title:c("More Details"),resolve:a,reject:d,message:c("Useful to describe better what are the reasons that leaded to this adjustment."),input:e.adjust_reason,onAction:o=>{o!==!1&&(e.adjust_reason=o)}})}).then(a=>{h.success(c("The reason has been updated.")).susbcribe()}).catch(a=>{})},async selectAdjustmentUnit(e){try{const t=await new Promise((n,_)=>{b.show(x,{label:c("Select Unit"),resolve:n,reject:_,description:c("Select the unit that you want to adjust the stock with."),name:"adjust_unit",options:e.quantities.map(i=>({label:i.unit.name,value:i}))})}),a=this.products.indexOf(e);if(this.products.filter((n,_)=>_!==a).filter(n=>n.adjust_unit.unit.id===t.unit.id&&n.adjust_unit.product_id===t.product_id).length>0)return h.error(c("A similar product with the same unit already exists.")).subscribe();e.adjust_unit=t,this.recalculateProduct(e)}catch{}},async selectProcurement(e){try{console.log(e);const t=await new Promise((a,d)=>{b.show(x,{label:c("Select Procurement"),resolve:a,reject:d,description:c("Select the procurement that you want to adjust the stock with."),name:"adjust_procurement",options:e.procurement_history})});e.procurement_product_id=t,this.recalculateProduct(e)}catch(t){throw t}},async selectStockAdjustementAction(e){try{const t=await new Promise((a,d)=>{b.show(x,{label:c("Select Action"),resolve:a,reject:d,description:c("Select the action that you want to perform on the stock."),name:"adjust_action",options:this.actions})});e.adjust_action=t}catch(t){throw t}},removeProduct(e){b.show(v,{title:c("Confirm Your Action"),message:c("Would you like to remove this product from the table ?"),onAction:t=>{if(t){const a=this.products.indexOf(e);this.products.splice(a,1)}}})},getAdjustActionLabel(e){const t=this.actions.filter(a=>a.value===e);return t.length>0?t[0].label:c("N/A")},deleteSelectedProducts(){b.show(v,{title:c("Confirm Your Action"),message:c("Would you like to remove the selected products from the table ?"),onAction:e=>{e&&(this.products=this.products.filter(t=>!t.selected))}})}},watch:{search(){this.search.length>0?(clearTimeout(this.timeout),this.timeout=setTimeout(()=>{this.searchProduct(this.search)},500)):this.closeSearch()}}},B={class:"input-field flex border-2 input-group rounded"},R={class:"px-3 py-2 rounded-none"},F={key:0,class:"h-0"},O={class:""},D={class:"shadow h-96 relative z-10 ns-vertical-menu zoom-in-entrance anim-duration-300 overflow-y-auto"},W=["onClick"],Y={class:"ns-box rounded shadow my-2 w-full"},z={class:"table w-full ns-table"},K={class:"border-b"},M={class:"p-2"},E={width:"120",class:"p-2 text-center hidden md:table-cell"},H={width:"120",class:"p-2 text-center hidden md:table-cell"},J={key:0},G={class:"p-2 border-b text-center hidden md:table-cell",colspan:"6"},I={class:"p-2 border-b text-center table-cell md:hidden",colspan:"4"},X={class:"p-2 border"},Z={class:"flex justify-between"},$=["onClick"],ee=["checked"],te=["onClick"],se={class:"flex -mx-2 md:flex-row flex-wrap"},ne=["onClick"],ie={class:"text-xs cursor-pointer border-b border-dashed border-info-secondary py-1"},oe={class:"text-xs"},ae={key:0,class:""},re={key:1},ce=["onClick"],de={class:"text-xs cursor-pointer border-b border-dashed border-info-secondary py-1"},le={class:"text-xs"},ue={class:""},he=["onClick"],_e={class:"text-xs cursor-pointer border-b border-dashed border-info-secondary py-1"},me={class:"text-xs"},be={class:""},pe=["onClick"],fe={class:"text-xs cursor-pointer border-b border-dashed border-info-secondary py-1"},ye={class:"text-xs"},ve={key:0},xe={key:1},je=["onClick"],ke={class:"text-xs cursor-pointer border-b border-dashed border-danger-secondary py-1"},we={class:"text-xs"},Pe=["onClick"],Se={class:"flex items-center justify-center cursor-pointer"},Ce={class:"border-b border-dashed border-info-secondary py-2 px-4"},qe={class:"p-2 border hidden md:table-cell"},Ae={class:"flex items-center justify-center"},ge={class:"border-b border-dashed border-info-secondary py-2 px-4"},Te={class:"ns-box-footer p-2 flex justify-end"},Ve={class:"-mx-2 flex"},Ue={class:"px-2"},Le={class:"hidden md:inline-block"},Ne={class:"px-2"};function Qe(e,t,a,d,o,n){const _=V("ns-button");return l(),u("div",null,[s("div",B,[U(s("input",{onKeyup:t[0]||(t[0]=C(i=>n.closeSearch(),["esc"])),ref:"searchField","onUpdate:modelValue":t[1]||(t[1]=i=>o.search=i),type:"text",class:"p-2 flex-auto outline-none"},null,544),[[S,o.search]]),s("button",R,r(n.__("Search")),1)]),o.suggestions.length>0?(l(),u("div",F,[s("div",O,[s("ul",D,[(l(!0),u(j,null,k(o.suggestions,i=>(l(),u("li",{onClick:m=>n.addSuggestion(i),key:i.id,class:"cursor-pointer border-b p-2 flex justify-between"},[s("span",null,r(i.name),1)],8,W))),128))])])])):p("",!0),s("div",Y,[s("table",z,[s("thead",K,[s("tr",null,[s("td",M,r(n.__("Product")),1),s("td",E,r(n.__("Quantity")),1),s("td",H,r(n.__("Value")),1)])]),s("tbody",null,[o.products.length===0?(l(),u("tr",J,[s("td",G,r(n.__("Search and add some products")),1),s("td",I,r(n.__("Search and add some products")),1)])):p("",!0),(l(!0),u(j,null,k(o.products,i=>(l(),u("tr",{key:i.id},[s("td",X,[s("div",Z,[s("div",null,[s("h3",{class:"font-bold cursor-pointer",onClick:m=>i.selected=!i.selected},[s("input",{type:"checkbox",checked:i.selected,name:"",id:""},null,8,ee),f(" "+r(i.name)+" ("+r((i.accurate_tracking===1?i.available_quantity:i.adjust_unit.quantity)||0)+")",1)],8,$)]),s("div",null,[s("span",{class:"md:hidden cursor-pointer border-dashed border-b border-info-secondary",onClick:m=>n.openQuantityPopup(i)},r(n.__("Quantity"))+" : "+r(i.adjust_quantity),9,te)])]),s("div",se,[s("div",{class:"px-2 w-1/2 md:w-auto",onClick:m=>n.selectAdjustmentUnit(i)},[s("div",ie,[s("span",oe,r(n.__("Unit:")),1),t[4]||(t[4]=f("  ")),i.adjust_unit.unit?(l(),u("span",ae,r(i.adjust_unit.unit.name),1)):p("",!0),i.adjust_unit.unit?p("",!0):(l(),u("span",re,r(n.__("N/A")),1))])],8,ne),s("div",{class:"px-2 w-1/2 md:w-auto",onClick:m=>n.selectStockAdjustementAction(i)},[s("div",de,[s("span",le,r(n.__("Operation:")),1),t[5]||(t[5]=f("  ")),s("span",ue,r(n.getAdjustActionLabel(i.adjust_action)),1)])],8,ce),i.accurate_tracking===1?(l(),u("div",{key:0,class:"px-2 w-1/2 md:w-auto",onClick:m=>n.selectProcurement(i)},[s("div",_e,[s("span",me,r(n.__("Procurement:")),1),t[6]||(t[6]=f("  ")),s("span",be,r(i.procurement_history.filter(m=>m.value===i.procurement_product_id)[0].label),1)])],8,he)):p("",!0),s("div",{class:"px-2 w-1/2 md:w-auto",onClick:m=>n.provideReason(i)},[s("div",fe,[s("span",ye,r(n.__("Reason:")),1),t[7]||(t[7]=f("  ")),i.adjust_reason?(l(),u("span",ve,r(n.__("Provided")),1)):(l(),u("span",xe,r(n.__("Not Provided")),1))])],8,pe),s("div",{class:"px-2 w-1/2 md:w-auto",onClick:m=>n.removeProduct(i)},[s("div",ke,[s("span",we,r(n.__("Remove")),1)])],8,je)])]),s("td",{class:"p-2 border hidden md:table-cell",onClick:m=>n.openQuantityPopup(i)},[s("div",Se,[s("span",Ce,r(i.adjust_quantity),1)])],8,Pe),s("td",qe,[s("div",Ae,[s("span",ge,r(n.nsCurrency(i.adjust_value)),1)])])]))),128))])]),s("div",Te,[s("div",Ve,[s("div",Ue,[o.products.filter(i=>i.selected).length>0?(l(),L(_,{key:0,onClick:t[2]||(t[2]=i=>n.deleteSelectedProducts()),type:"error"},{default:w(()=>[t[8]||(t[8]=s("div",{class:"flex items-center justify-center h-6"},[s("i",{class:"las la-trash"})],-1)),s("span",Le,r(n.__("Remove Selected")),1)]),_:1})):p("",!0)]),s("div",Ne,[N(_,{onClick:t[3]||(t[3]=i=>n.proceedStockAdjustment()),type:"info"},{default:w(()=>[f(r(n.__("Proceed")),1)]),_:1})])])])])])}const Ke=T(Q,[["render",Qe]]);export{Ke as default};
