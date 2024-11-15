import{a as v,b as f}from"./bootstrap-DN_KIGH5.js";import{s as P}from"./pos-section-switch-DmfccXVX.js";import{d as T,p as I,v as k,w as j}from"./print-DOU-TAfv.js";import{_ as g,n as V}from"./currency-gBUix5n2.js";import{n as O}from"./ns-prompt-popup-CDVMGRH6.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as x,o as l,c as n,b as s,t as u,g as y,C as S,F as p,e as b,f as a,n as w,j as _,w as L}from"./runtime-core.esm-bundler-DDZT2pc5.js";import"./chart-Ozef1QaY.js";const H={name:"ns-pos-search-product",props:["popup"],data(){return{searchValue:"",products:[],isLoading:!1,debounce:null}},watch:{searchValue(){clearTimeout(this.debounce),this.debounce=setTimeout(()=>{this.search()},500)}},mounted(){this.$refs.searchField.focus(),this.$refs.searchField.addEventListener("keydown",t=>{t.keyCode===27&&this.popupResolver(!1)}),this.popupCloser()},methods:{__:g,popupCloser:T,popupResolver:I,addToCart(t){if(this.popup.close(),parseInt(t.accurate_tracking)===1)return Popup.show(O,{title:g("Unable to add the product"),message:g(`The product "{product}" can't be added from a search field, as "Accurate Tracking" is enabled. Would you like to learn more ?`).replace("{product}",t.name),onAction:e=>{e&&window.open("https://my.nexopos.com/en/documentation/troubleshooting/accurate-tracking","_blank")}});POS.addToCart(t)},search(){this.isLoading=!0,v.post("/api/products/search",{search:this.searchValue}).subscribe({next:t=>{if(this.isLoading=!1,this.products=t,this.products.length===1&&this.addToCart(this.products[0]),this.products.length===0)return f.info(g("No result to result match the search value provided.")).subscribe()},error:t=>{this.isLoading=!1,f.error(t.message).subscribe()}})}}},W={id:"product-search",class:"ns-box shadow-lg w-95vw h-95vh md:h-3/5-screen md:w-2/4-screen flex flex-col overflow-hidden"},B={class:"p-2 border-b ns-box-header flex justify-between items-center"},F={class:"text-primary"},N={class:"flex-auto overflow-hidden flex flex-col"},U={class:"p-2 border-b ns-box-body"},q={class:"flex input-group info border-2 rounded overflow-hidden"},A={class:"overflow-y-auto ns-scrollbar flex-auto relative"},z={class:"ns-vertical-menu"},E=["onClick"],D={class:""},M={class:"text-primary"},G={class:"text-soft-secondary text-xs"},K={key:0},R={class:"text-primary text-center p-2"},J={key:1,class:"absolute h-full w-full flex items-center justify-center z-10 top-0",style:{background:"rgb(187 203 214 / 29%)"}};function Q(t,e,d,h,o,i){const m=x("ns-close-button"),r=x("ns-spinner");return l(),n("div",W,[s("div",B,[s("h3",F,u(i.__("Search Product")),1),s("div",null,[y(m,{onClick:e[0]||(e[0]=c=>d.popup.close())})])]),s("div",N,[s("div",U,[s("div",q,[S(s("input",{onKeyup:e[1]||(e[1]=j(c=>i.search(),["enter"])),"onUpdate:modelValue":e[2]||(e[2]=c=>o.searchValue=c),ref:"searchField",type:"text",class:"p-2 outline-none flex-auto text-primary"},null,544),[[k,o.searchValue]]),s("button",{onClick:e[3]||(e[3]=c=>i.search()),class:"px-2"},u(i.__("Search")),1)])]),s("div",A,[s("ul",z,[(l(!0),n(p,null,b(o.products,c=>(l(),n("li",{key:c.id,onClick:Be=>i.addToCart(c),class:"cursor-pointer p-2 flex justify-between border-b"},[s("div",D,[s("h2",M,u(c.name),1),s("small",G,u(c.category.name),1)]),e[4]||(e[4]=s("div",null,null,-1))],8,E))),128))]),o.products.length===0?(l(),n("ul",K,[s("li",R,u(i.__("There is nothing to display. Have you started the search ?")),1)])):a("",!0),o.isLoading?(l(),n("div",J,[y(r)])):a("",!0)])])])}const X=C(H,[["render",Q]]),Y={name:"ns-pos-grid",data(){return{items:Array.from({length:1e3},(t,e)=>({data:"#"+e})),products:[],categories:[],breadcrumbs:[],barcode:"",previousCategory:null,order:null,visibleSection:null,breadcrumbsSubsribe:null,orderSubscription:null,visibleSectionSubscriber:null,currentCategory:null,settings:{},settingsSubscriber:null,options:!1,optionsSubscriber:null,interval:null,searchTimeout:null,gridItemsWidth:0,gridItemsHeight:0,isLoading:!1}},computed:{hasCategories(){return this.categories.length>0},hasProducts(){return this.products.length>0},createCategoryUrl(){return POS.settings.getValue().urls.categories_url}},watch:{options:{handler(){this.options.ns_pos_force_autofocus&&(clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.submitSearch(this.barcode)},200))},deep:!0},barcode(){this.options.ns_pos_force_autofocus&&(clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.submitSearch(this.barcode)},200))}},mounted(){this.loadCategories(),this.settingsSubscriber=POS.settings.subscribe(t=>{this.settings=t,this.$forceUpdate()}),this.optionsSubscriber=POS.options.subscribe(t=>{this.options=t,this.$forceUpdate()}),this.breadcrumbsSubsribe=POS.breadcrumbs.subscribe(t=>{this.breadcrumbs=t,this.$forceUpdate()}),this.visibleSectionSubscriber=POS.visibleSection.subscribe(t=>{this.visibleSection=t,this.$forceUpdate()}),this.orderSubscription=POS.order.subscribe(t=>this.order=t),this.interval=setInterval(()=>this.checkFocus(),500);for(let t in nsShortcuts)["ns_pos_keyboard_quick_search"].includes(t)&&nsHotPress.create("search-popup").whenNotVisible([".is-popup","#product-search"]).whenPressed(nsShortcuts[t]!==null?nsShortcuts[t].join("+"):null,e=>{e.preventDefault(),this.openSearchPopup()}),["ns_pos_keyboard_toggle_merge"].includes(t)&&nsHotPress.create("toggle-merge").whenNotVisible([".is-popup"]).whenPressed(nsShortcuts[t]!==null?nsShortcuts[t].join("+"):null,e=>{e.preventDefault(),this.posToggleMerge()})},unmounted(){this.orderSubscription.unsubscribe(),this.breadcrumbsSubsribe.unsubscribe(),this.visibleSectionSubscriber.unsubscribe(),this.settingsSubscriber.unsubscribe(),this.optionsSubscriber.unsubscribe(),clearInterval(this.interval),nsHotPress.destroy("search-popup"),nsHotPress.destroy("toggle-merge")},methods:{__:g,nsCurrency:V,switchTo:P,posToggleMerge(){POS.set("ns_pos_items_merge",!this.settings.ns_pos_items_merge)},computeGridWidth(){document.getElementById("grid-items")!==null&&(this.gridItemsWidth=document.getElementById("grid-items").offsetWidth,this.gridItemsHeight=document.getElementById("grid-items").offsetHeight)},cellSizeAndPositionGetter(t,e){const d={xs:{width:this.gridItemsWidth/2,items:2,height:200},sm:{width:this.gridItemsWidth/2,items:2,height:200},md:{width:this.gridItemsWidth/3,items:3,height:150},lg:{width:this.gridItemsWidth/4,items:4,height:150},xl:{width:this.gridItemsWidth/6,items:6,height:150}},h=d[POS.responsive.screenIs].width,o=d[POS.responsive.screenIs].height,i=0;return{width:h-i,height:o,x:e%d[POS.responsive.screenIs].items*h-i,y:parseInt(e/d[POS.responsive.screenIs].items)*o}},openSearchPopup(){Popup.show(X)},hasNoFeatured(t){return t.galleries&&t.galleries.length>0&&t.galleries.filter(e=>e.featured).length===0},submitSearch(t){t.length>0&&v.get(`/api/products/search/using-barcode/${t}`).subscribe({next:e=>{this.barcode="",POS.addToCart(e.product)},error:e=>{this.barcode="",f.error(e.message).subscribe()}})},checkFocus(){this.options.ns_pos_force_autofocus&&document.querySelectorAll(".is-popup").length===0&&this.$refs.search.focus()},loadCategories(t){this.isLoading=!0,v.get(`/api/categories/pos/${t?t.id:""}`).subscribe({next:e=>{this.categories=e.categories,this.products=e.products,this.previousCategory=e.previousCategory,this.currentCategory=e.currentCategory,this.updateBreadCrumb(this.currentCategory),this.isLoading=!1},error:e=>(this.isLoading=!1,f.error(g("An unexpected error occurred.")).subscribe())})},updateBreadCrumb(t){if(t){const e=this.breadcrumb.filter(d=>d.id===t.id);if(e.length>0){let d=!0;const h=this.breadcrumb.filter(o=>o.id===e[0].id&&d?(d=!1,!0):d);this.breadcrumb=h}else this.breadcrumb.push(t)}else this.breadcrumb=[];POS.breadcrumbs.next(this.breadcrumb)},addToTheCart(t){POS.addToCart(t)}}},Z={id:"pos-grid",class:"flex-auto flex flex-col"},$={key:0,id:"tools",class:"flex pl-2"},ee={key:0,class:"products-count flex items-center justify-center text-sm rounded-full h-6 w-6 ml-1"},se={id:"grid-container",class:"rounded shadow overflow-hidden flex-auto flex flex-col"},te={id:"grid-header",class:"p-2 border-b"},re={class:"border rounded flex overflow-hidden"},ie=["title"],oe=["title"],le=["title"],ne={style:{height:"0px"}},ce={key:0,class:"fade-in-entrance ns-loader"},ue={id:"grid-breadscrumb",class:"p-2"},ae={class:"flex"},de=["onClick"],he={id:"grid-items",class:"overflow-y-auto h-full flex-col flex"},pe={key:0,class:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"},ge=["onClick"],be={class:"h-full w-full flex items-center justify-center"},fe=["src","alt"],me={key:1,class:"las la-image text-6xl"},_e={class:"w-full absolute z-10 -bottom-10"},ve={class:"cell-item-label relative w-full flex items-center justify-center -top-10 h-20 py-2"},xe={class:"text-sm font-bold py-2 text-center"},ye={key:1,class:"h-full w-full flex flex-col items-center justify-center"},we={class:"w-1/2 md:w-2/3 text-center text-primary"},ke={key:2,class:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"},Ce=["onClick"],Se={class:"h-full w-full flex items-center justify-center overflow-hidden"},Pe=["src","alt"],Te=["src","alt"],Ie={key:2,class:"las la-image text-6xl"},je={class:"w-full absolute z-10 -bottom-10"},Ve={class:"cell-item-label relative w-full flex flex-col items-center justify-center -top-10 h-20 p-2"},Oe={class:"text-sm text-center w-full"},Le={key:0,class:"text-sm"},He={key:0,class:"text-sm"};function We(t,e,d,h,o,i){const m=x("ns-link");return l(),n("div",Z,[o.visibleSection==="grid"?(l(),n("div",$,[s("div",{onClick:e[0]||(e[0]=r=>i.switchTo("cart")),class:"switch-cart flex cursor-pointer rounded-tl-lg rounded-tr-lg px-3 py-2 border-t border-r border-l"},[s("span",null,u(i.__("Cart")),1),o.order?(l(),n("span",ee,u(o.order.products.length),1)):a("",!0)]),s("div",{onClick:e[1]||(e[1]=r=>i.switchTo("grid")),class:"switch-grid cursor-pointer rounded-tl-lg rounded-tr-lg px-3 py-2 font-semibold"},u(i.__("Products")),1)])):a("",!0),s("div",se,[s("div",te,[s("div",re,[s("button",{title:i.__("Search for products."),onClick:e[2]||(e[2]=r=>i.openSearchPopup()),class:"w-10 h-10 border-r outline-none"},e[7]||(e[7]=[s("i",{class:"las la-search"},null,-1)]),8,ie),s("button",{title:i.__("Toggle merging similar products."),onClick:e[3]||(e[3]=r=>i.posToggleMerge()),class:w([o.settings.ns_pos_items_merge?"pos-button-clicked":"","outline-none w-10 h-10 border-r"])},e[8]||(e[8]=[s("i",{class:"las la-compress-arrows-alt"},null,-1)]),10,oe),s("button",{title:i.__("Toggle auto focus."),onClick:e[4]||(e[4]=r=>o.options.ns_pos_force_autofocus=!o.options.ns_pos_force_autofocus),class:w([o.options.ns_pos_force_autofocus?"pos-button-clicked":"","outline-none w-10 h-10 border-r"])},e[9]||(e[9]=[s("i",{class:"las la-barcode"},null,-1)]),10,le),S(s("input",{ref:"search","onUpdate:modelValue":e[5]||(e[5]=r=>o.barcode=r),type:"text",class:"flex-auto outline-none px-2"},null,512),[[k,o.barcode]])])]),s("div",ne,[o.isLoading?(l(),n("div",ce,e[10]||(e[10]=[s("div",{class:"bar"},null,-1)]))):a("",!0)]),s("div",ue,[s("ul",ae,[s("li",null,[s("a",{onClick:e[6]||(e[6]=r=>i.loadCategories()),href:"javascript:void(0)",class:"px-3"},u(i.__("Home")),1),e[11]||(e[11]=_()),e[12]||(e[12]=s("i",{class:"las la-angle-right"},null,-1))]),s("li",null,[(l(!0),n(p,null,b(o.breadcrumbs,r=>(l(),n("a",{onClick:c=>i.loadCategories(r),key:r.id,href:"javascript:void(0)",class:"px-3"},[_(u(r.name)+" ",1),e[13]||(e[13]=s("i",{class:"las la-angle-right"},null,-1))],8,de))),128))])])]),s("div",he,[i.hasCategories?(l(),n("div",pe,[(l(!0),n(p,null,b(o.categories,r=>(l(),n("div",{onClick:c=>i.loadCategories(r),key:r.id,class:"cell-item w-full h-36 cursor-pointer border flex flex-col items-center justify-center overflow-hidden relative"},[s("div",be,[r.preview_url?(l(),n("img",{key:0,src:r.preview_url,class:"object-cover h-full",alt:r.name},null,8,fe)):a("",!0),r.preview_url?a("",!0):(l(),n("i",me))]),s("div",_e,[s("div",ve,[s("h3",xe,u(r.name),1)])])],8,ge))),128))])):a("",!0),!i.hasCategories&&!i.hasProducts&&!o.isLoading?(l(),n("div",ye,[e[14]||(e[14]=s("i",{class:"las la-frown-open text-8xl text-primary"},null,-1)),s("p",we,u(i.__("Looks like there is either no products and no categories. How about creating those first to get started ?")),1),e[15]||(e[15]=s("br",null,null,-1)),y(m,{target:"blank",type:"info",href:i.createCategoryUrl},{default:L(()=>[_(u(i.__("Create Categories")),1)]),_:1},8,["href"])])):a("",!0),i.hasCategories?a("",!0):(l(),n("div",ke,[(l(!0),n(p,null,b(o.products,r=>(l(),n("div",{onClick:c=>i.addToTheCart(r),key:r.id,class:"cell-item w-full h-36 cursor-pointer border flex flex-col items-center justify-center overflow-hidden relative"},[s("div",Se,[r.galleries&&r.galleries.filter(c=>c.featured).length>0?(l(),n("img",{key:0,src:r.galleries.filter(c=>c.featured)[0].url,class:"object-cover h-full",alt:r.name},null,8,Pe)):i.hasNoFeatured(r)?(l(),n("img",{key:1,src:r.galleries[0].url,class:"object-cover h-full",alt:r.name},null,8,Te)):(l(),n("i",Ie))]),s("div",je,[s("div",Ve,[s("h3",Oe,u(r.name),1),o.options.ns_pos_gross_price_used==="yes"?(l(),n(p,{key:0},[r.unit_quantities&&r.unit_quantities.length===1?(l(),n("span",Le,u(i.nsCurrency(r.unit_quantities[0].sale_price_without_tax)),1)):a("",!0)],64)):a("",!0),o.options.ns_pos_gross_price_used==="no"?(l(),n(p,{key:1},[r.unit_quantities&&r.unit_quantities.length===1?(l(),n("span",He,u(i.nsCurrency(r.unit_quantities[0].sale_price_with_tax)),1)):a("",!0)],64)):a("",!0)])])],8,Ce))),128))]))])])])}const Me=C(Y,[["render",We]]);export{Me as default};
