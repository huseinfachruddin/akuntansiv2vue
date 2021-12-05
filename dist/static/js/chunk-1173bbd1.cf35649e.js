(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1173bbd1"],{"04a1":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("div",{staticClass:"filter-container"},[i("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"Title"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.title,callback:function(t){e.$set(e.listQuery,"title",t)},expression:"listQuery.title"}}),i("el-select",{staticClass:"filter-item",staticStyle:{width:"90px"},attrs:{placeholder:"Imp",clearable:""},model:{value:e.listQuery.importance,callback:function(t){e.$set(e.listQuery,"importance",t)},expression:"listQuery.importance"}},e._l(e.importanceOptions,(function(e){return i("el-option",{key:e,attrs:{label:e,value:e}})})),1),i("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{placeholder:"Type",clearable:""},model:{value:e.listQuery.type,callback:function(t){e.$set(e.listQuery,"type",t)},expression:"listQuery.type"}},e._l(e.calendarTypeOptions,(function(e){return i("el-option",{key:e.key,attrs:{label:e.display_name+"("+e.key+")",value:e.key}})})),1),i("el-select",{staticClass:"filter-item",staticStyle:{width:"140px"},on:{change:e.handleFilter},model:{value:e.listQuery.sort,callback:function(t){e.$set(e.listQuery,"sort",t)},expression:"listQuery.sort"}},e._l(e.sortOptions,(function(e){return i("el-option",{key:e.key,attrs:{label:e.label,value:e.key}})})),1),i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v(" Search ")]),i("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v(" Tambah Akun ")]),i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{loading:e.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:e.handleDownload}},[e._v(" Export ")]),i("el-checkbox",{staticClass:"filter-item",staticStyle:{"margin-left":"15px"},on:{change:function(t){e.tableKey=e.tableKey+1}},model:{value:e.showReviewer,callback:function(t){e.showReviewer=t},expression:"showReviewer"}},[e._v(" reviewer ")])],1),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""},on:{"sort-change":e.sortChange}},[i("el-table-column",{attrs:{label:"ID",prop:"id",sortable:"custom",align:"center",width:"80","class-name":e.getSortClass("id")},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[i("span",[e._v(e._s(a.id))])]}}])}),i("el-table-column",{attrs:{label:"Name","min-width":"150px"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[i("span",{staticClass:"link-type",on:{click:function(t){return e.handleUpdate(a)}}},[e._v(e._s(a.name))])]}}])}),i("el-table-column",{attrs:{label:"Description",width:"150px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[i("span",[e._v(e._s(a.desc))])]}}])}),i("el-table-column",{attrs:{label:"Total",width:"150px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[i("span",[e._v(e._s(a.total))])]}}])}),i("el-table-column",{attrs:{label:"Actions",align:"center",width:"230","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row,n=t.$index;return[i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleUpdate(a)}}},[e._v(" Edit ")]),"deleted"!=a.status?i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handleDelete(a,n)}}},[e._v(" Delete ")]):e._e()]}}])})],1),i("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.limit},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"limit",t)},pagination:e.getList}}),i("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("el-form",{ref:"dataForm",staticStyle:{width:"520px","margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"120px"}},[i("el-form-item",{attrs:{label:"Nama Akun"}},[i("el-input",{attrs:{placeholder:"Nama Akun"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),i("el-form-item",{attrs:{label:"Deskripsi"}},[i("el-input",{attrs:{placeholder:"deskripsi"},model:{value:e.desc,callback:function(t){e.desc=t},expression:"desc"}})],1),i("el-form-item",[i("el-checkbox",{model:{value:e.kas,callback:function(t){e.kas=t},expression:"kas"}},[e._v("Bank / Kas")])],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(" Cancel ")]),i("el-button",{attrs:{type:"primary"},on:{click:function(t){"create"===e.dialogStatus?e.createData():e.updateData()}}},[e._v(" Confirm ")])],1)],1),i("el-dialog",{attrs:{visible:e.dialogPvVisible,title:"Reading statistics"},on:{"update:visible":function(t){e.dialogPvVisible=t}}},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:e.pvData,border:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{prop:"key",label:"Channel"}}),i("el-table-column",{attrs:{prop:"pv",label:"Pv"}})],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogPvVisible=!1}}},[e._v("Confirm")])],1)],1),i("h1")],1)},n=[],l=(i("d3b7"),i("4e82"),i("b0c0"),i("a434"),i("3ca3"),i("ddb0"),i("d81d"),i("2423")),s=i("6724"),o=i("ed08"),r=i("333d"),c=i("0d5e"),u=[{key:"CN",display_name:"China"},{key:"US",display_name:"USA"},{key:"JP",display_name:"Japan"},{key:"EU",display_name:"Eurozone"}],d=u.reduce((function(e,t){return e[t.key]=t.display_name,e}),{}),p={name:"ComplexTable",components:{Pagination:r["a"]},directives:{waves:s["a"]},filters:{statusFilter:function(e){var t={published:"success",draft:"info",deleted:"danger"};return t[e]},typeFilter:function(e){return d[e]}},data:function(){return{id:"",kas:"",category:"",name:"",desc:"",tableKey:0,list:null,total:0,listLoading:!0,listQuery:{page:1,limit:20,importance:void 0,title:void 0,type:void 0,sort:"+id"},importanceOptions:[1,2,3],calendarTypeOptions:u,sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],statusOptions:["published","draft","deleted"],showReviewer:!1,temp:{id:void 0,cash:"",desc:"",timestamp:new Date,name:"",total_masuk:"",total:""},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,pvData:[],rules:{type:[{required:!0,message:"type is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"blur"}]},downloadLoading:!1}},created:function(){this.$store.dispatch("user/isLicenceActived"),this.getList()},methods:{getList:function(){var e=this;this.listLoading=!0,c["a"].get("/category/akun/detail/".concat(this.$route.params.id)).then((function(t){console.log(t),e.list=t.data.menu,e.total=t.data.menu.length,setTimeout((function(){e.listLoading=!1}),1500)}))},handleFilter:function(){this.listQuery.page=1,this.getList()},handleModifyStatus:function(e,t){this.$message({message:"操作Success",type:"success"}),e.status=t},sortChange:function(e){var t=e.prop,i=e.order;"id"===t&&this.sortByID(i)},sortByID:function(e){this.listQuery.sort="ascending"===e?"+id":"-id",this.handleFilter()},resetTemp:function(){this.temp={id:void 0,importance:1,remark:"",timestamp:new Date,title:"",status:"published",type:""}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},createData:function(){var e=this,t=this.$route.params.id,i={name:this.name,desc:this.desc,category:t,iscash:this.kas};this.listLoading=!0,this.dialogFormVisible=!1,c["a"].post("/akun/create",i).then((function(t){e.getList(),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Created Successfully",type:"success",duration:2e3})})).catch((function(t){e.listLoading=!1,e.$notify({title:"Error",message:"Server Error",type:"warning",duration:2e3})}))},handleUpdate:function(e){var t=this;this.id=e.id,this.kas=1==e.iscash,this.name=e.name,this.desc=e.desc,this.category=this.$route.params.id,this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},updateData:function(){var e=this;this.dialogFormVisible=!1,this.listLoading=!0;var t={name:this.name,desc:this.desc,category:this.category,iscash:this.kas};c["a"].put("/akun/edit/".concat(this.id),t).then((function(t){e.getList(),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3})})).catch((function(t){e.listLoading=!1,e.$notify({title:"Error",message:"Server Error",type:"warning",duration:2e3})}))},handleDelete:function(e,t){var i=this;this.listLoading=!0,c["a"].delete("/akun/delete/".concat(e.id)).then((function(e){i.listLoading=!1,console.log(e),i.$notify({title:"Success",message:"Delete Successfully",type:"success",duration:2e3}),i.list.splice(t,1)})).catch((function(e){i.listLoading=!1,i.$notify({title:"Error",message:"Server Error",type:"warning",duration:2e3})}))},handleFetchPv:function(e){var t=this;Object(l["c"])(e).then((function(e){t.pvData=e.data.pvData,t.dialogPvVisible=!0}))},handleDownload:function(){var e=this;this.downloadLoading=!0,Promise.all([i.e("chunk-519483dc"),i.e("chunk-181fab9f"),i.e("chunk-2141e892")]).then(i.bind(null,"4bf8")).then((function(t){var i=["timestamp","title","type","importance","status"],a=["timestamp","title","type","importance","status"],n=e.formatJson(a);t.export_json_to_excel({header:i,data:n,filename:"table-list"}),e.downloadLoading=!1}))},formatJson:function(e){return this.list.map((function(t){return e.map((function(e){return"timestamp"===e?Object(o["d"])(t[e]):t[e]}))}))},getSortClass:function(e){var t=this.listQuery.sort;return t==="+".concat(e)?"ascending":"descending"}}},m=p,f=i("2877"),h=Object(f["a"])(m,a,n,!1,null,null,null);t["default"]=h.exports},"1c18":function(e,t,i){},2423:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return l})),i.d(t,"a",(function(){return s})),i.d(t,"d",(function(){return o}));var a=i("b775");function n(e){return Object(a["a"])({url:"/vue-element-admin/article/list",method:"get",params:e})}function l(e){return Object(a["a"])({url:"/vue-element-admin/article/pv",method:"get",params:{pv:e}})}function s(e){return Object(a["a"])({url:"/vue-element-admin/article/create",method:"post",data:e})}function o(e){return Object(a["a"])({url:"/vue-element-admin/article/update",method:"post",data:e})}},"333d":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[i("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},n=[];i("a9e3");Math.easeInOutQuad=function(e,t,i,a){return e/=a/2,e<1?i/2*e*e+t:(e--,-i/2*(e*(e-2)-1)+t)};var l=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function s(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function o(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function r(e,t,i){var a=o(),n=e-a,r=20,c=0;t="undefined"===typeof t?500:t;var u=function e(){c+=r;var o=Math.easeInOutQuad(c,a,n,t);s(o),c<t?l(e):i&&"function"===typeof i&&i()};u()}var c={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&r(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&r(0,800)}}},u=c,d=(i("e498"),i("2877")),p=Object(d["a"])(u,a,n,!1,null,"6af373ef",null);t["a"]=p.exports},6724:function(e,t,i){"use strict";i("8d41");var a="@@wavesContext";function n(e,t){function i(i){var a=Object.assign({},t.value),n=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},a),l=n.ele;if(l){l.style.position="relative",l.style.overflow="hidden";var s=l.getBoundingClientRect(),o=l.querySelector(".waves-ripple");switch(o?o.className="waves-ripple":(o=document.createElement("span"),o.className="waves-ripple",o.style.height=o.style.width=Math.max(s.width,s.height)+"px",l.appendChild(o)),n.type){case"center":o.style.top=s.height/2-o.offsetHeight/2+"px",o.style.left=s.width/2-o.offsetWidth/2+"px";break;default:o.style.top=(i.pageY-s.top-o.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",o.style.left=(i.pageX-s.left-o.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return o.style.backgroundColor=n.color,o.className="waves-ripple z-active",!1}}return e[a]?e[a].removeHandle=i:e[a]={removeHandle:i},i}var l={bind:function(e,t){e.addEventListener("click",n(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[a].removeHandle,!1),e.addEventListener("click",n(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[a].removeHandle,!1),e[a]=null,delete e[a]}},s=function(e){e.directive("waves",l)};window.Vue&&(window.waves=l,Vue.use(s)),l.install=s;t["a"]=l},"8d41":function(e,t,i){},e498:function(e,t,i){"use strict";i("1c18")}}]);