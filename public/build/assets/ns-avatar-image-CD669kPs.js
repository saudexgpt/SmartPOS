import{c as i,s as l}from"./index.es-BamOKBrQ.js";import{_ as a}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as s,f as t,n as c}from"./runtime-core.esm-bundler-DDZT2pc5.js";const u={name:"ns-avatar-image",props:["url","name","size"],data(){return{svg:"",currentSize:8}},mounted(){this.currentSize=this.size||8,this.svg=i(l,{seed:this.name})}},o=["src","alt"],m=["innerHTML"];function _(d,f,e,h,r,v){return n(),s("div",{class:c("h-"+r.currentSize+" w-"+r.currentSize)},[e.url!==""&&e.url!==null?(n(),s("img",{key:0,src:e.url,class:"overflow-hidden rounded-full",alt:e.name,srcset:""},null,8,o)):t("",!0),e.url===""||e.url===null?(n(),s("div",{key:1,class:c("h-"+r.currentSize+" w-"+r.currentSize),innerHTML:r.svg},null,10,m)):t("",!0)],2)}const k=a(u,[["render",_]]);export{k as n};
