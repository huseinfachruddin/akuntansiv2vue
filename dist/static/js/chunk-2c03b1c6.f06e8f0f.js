(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c03b1c6"],{1:function(e,t){},"1c18":function(e,t,n){},2423:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return s}));var a=n("b775");function i(e){return Object(a["a"])({url:"/vue-element-admin/article/list",method:"get",params:e})}function o(e){return Object(a["a"])({url:"/vue-element-admin/article/pv",method:"get",params:{pv:e}})}function r(e){return Object(a["a"])({url:"/vue-element-admin/article/create",method:"post",data:e})}function s(e){return Object(a["a"])({url:"/vue-element-admin/article/update",method:"post",data:e})}},"333d":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[n("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},i=[];n("a9e3");Math.easeInOutQuad=function(e,t,n,a){return e/=a/2,e<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)};var o=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function r(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function s(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function l(e,t,n){var a=s(),i=e-a,l=20,c=0;t="undefined"===typeof t?500:t;var u=function e(){c+=l;var s=Math.easeInOutQuad(c,a,i,t);r(s),c<t?o(e):n&&"function"===typeof n&&n()};u()}var c={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&l(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&l(0,800)}}},u=c,d=(n("e498"),n("2877")),p=Object(d["a"])(u,a,i,!1,null,"6af373ef",null);t["a"]=p.exports},6724:function(e,t,n){"use strict";n("8d41");var a="@@wavesContext";function i(e,t){function n(n){var a=Object.assign({},t.value),i=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},a),o=i.ele;if(o){o.style.position="relative",o.style.overflow="hidden";var r=o.getBoundingClientRect(),s=o.querySelector(".waves-ripple");switch(s?s.className="waves-ripple":(s=document.createElement("span"),s.className="waves-ripple",s.style.height=s.style.width=Math.max(r.width,r.height)+"px",o.appendChild(s)),i.type){case"center":s.style.top=r.height/2-s.offsetHeight/2+"px",s.style.left=r.width/2-s.offsetWidth/2+"px";break;default:s.style.top=(n.pageY-r.top-s.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",s.style.left=(n.pageX-r.left-s.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return s.style.backgroundColor=i.color,s.className="waves-ripple z-active",!1}}return e[a]?e[a].removeHandle=n:e[a]={removeHandle:n},n}var o={bind:function(e,t){e.addEventListener("click",i(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[a].removeHandle,!1),e.addEventListener("click",i(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[a].removeHandle,!1),e[a]=null,delete e[a]}},r=function(e){e.directive("waves",o)};window.Vue&&(window.waves=o,Vue.use(r)),o.install=r;t["a"]=o},"8d41":function(e,t,n){},d65a:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"Cari"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),n("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v(" Tambah ")]),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{loading:e.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:e.handleDownload}},[e._v(" Export ")])],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list.filter((function(t){var n=t.name;return!e.search||n.toLowerCase().includes(e.search.toLowerCase())})),border:"",fit:"","highlight-current-row":""},on:{"sort-change":e.sortChange}},[n("el-table-column",{attrs:{label:"ID",prop:"id",sortable:"custom",align:"center",width:"80","class-name":e.getSortClass("id")},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.id))])]}}])}),n("el-table-column",{attrs:{label:"Nama Barang","min-width":"150px"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.product.name))])]}}])}),n("el-table-column",{attrs:{label:"QTY",width:"150px",align:"center",sortable:"",prop:"cashin"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.qty))])]}}])}),n("el-table-column",{attrs:{label:"Total",width:"150px",align:"center",sortable:"",prop:"date"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(e.handleCurrency(a.total)))])]}}])}),n("el-table-column",{attrs:{label:"Date",width:"150px",align:"center",sortable:"",prop:"date"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.created_at))])]}}])})],1),n("el-dialog",{attrs:{visible:e.dialogPvVisible,title:"Reading statistics"},on:{"update:visible":function(t){e.dialogPvVisible=t}}},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.pvData,border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{prop:"key",label:"Channel"}}),n("el-table-column",{attrs:{prop:"pv",label:"Pv"}})],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{loading:e.loading,type:"primary"},on:{click:function(t){e.dialogPvVisible=!1}}},[e._v("Confirm")])],1)],1)],1)},i=[],o=(n("d3b7"),n("4e82"),n("b0c0"),n("a434"),n("3ca3"),n("ddb0"),n("d81d"),n("2423")),r=n("6724"),s=(n("ed08"),n("333d")),l=n("0d5e"),c=(n("4328"),n("e350")),u=[{key:"cash",display_name:"cash"},{key:"modal",display_name:"modal"}],d=u.reduce((function(e,t){return e[t.key]=t.display_name,e}),{}),p={name:"ComplexTable",components:{Pagination:s["a"]},directives:{waves:r["a"]},filters:{statusFilter:function(e){var t={published:"success",draft:"info",deleted:"danger"};return t[e]},typeFilter:function(e){return d[e]}},data:function(){return{search:"",loading:!1,config:{spinner:!1,step:10,prefix:"Rp ",precision:0,decimal:",",thousands:".",bootstrap:!0,amend:!1,masked:!1},category:"",producttype:"",jenis_barang:"",keterangan:"",name:"",selling_price:"",purchase_price:"",qty:"",unit:"",from:"",to_item:"",total_kasIn:"",pemasukan:"",kasIn:{all:[{modal:"",total:"",desc:""}]},tableKey:0,list:null,total:0,listLoading:!0,listQuery:{page:1,limit:20,importance:void 0,title:void 0,type:void 0,sort:"+id"},units:"",importanceOptions:[1,2,3],calendarTypeOptions:u,cash:[],modal:[],sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],statusOptions:["published","draft","deleted"],showReviewer:!1,temp:{id:void 0,code:"",date:"",timestamp:new Date,title:"",to:"",chasin:"",total:""},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,pvData:[],rules:{type:[{required:!0,message:"type is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"blur"}]},downloadLoading:!1}},created:function(){this.$store.dispatch("user/isLicenceActived"),this.getList()},methods:{checkPermission:c["a"],getList:function(){var e=this;this.listLoading=!0,l["a"].get("/stock/nonmony/detail/".concat(this.$route.params.id)).then((function(t){console.log(t),e.list=t.data.stocktransaction[0].substocktransaction,e.total=t.data.stocktransaction[0].substocktransaction.length,setTimeout((function(){e.listLoading=!1}),1500)}))},handleCurrency:function(e){var t=new Intl.NumberFormat("in-IN",{style:"currency",currency:"IDR"}).format(e);return t},handleFilter:function(){this.listQuery.page=1,this.getList()},handleModifyStatus:function(e,t){this.$message({message:"操作Success",type:"success"}),e.status=t},sortChange:function(e){var t=e.prop,n=e.order;"id"===t&&this.sortByID(n)},sortByID:function(e){this.listQuery.sort="ascending"===e?"+id":"-id",this.handleFilter()},resetTemp:function(){this.temp={id:void 0,importance:1,remark:"",timestamp:new Date,title:"",status:"published",type:""}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},createData:function(){var e=this,t={name:this.name,selling_price:this.selling_price,purchase_price:this.purchase_price,unit:this.unit,producttype:parseInt(this.producttype)};this.loading=!0,l["a"].post("/product/create",t).then((function(t){e.loading=!1,e.getList(),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Created Successfully",type:"success",duration:2e3})})).catch((function(t){e.loading=!1,e.listLoading=!1,e.$notify({title:"Error",message:"Server Error",type:"warning",duration:2e3})}))},handleUpdate:function(e){var t=this;this.name=e.name,this.id=e.id,this.selling_price=e.selling_price,this.purchase_price=e.purchase_price,this.unit=e.unit,this.producttype=""==e.producttype.id?e.producttype:e.producttype.id,this.qty=e.qty,this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},updateData:function(){var e=this;this.listLoading=!0;var t={name:this.name,selling_price:this.selling_price,purchase_price:this.purchase_price,unit:this.unit,producttype:this.producttype};this.loading=!0,l["a"].put("/product/edit/".concat(this.id),t).then((function(t){throw e.loading=!1,e.getList(),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3}),new Error("Something went badly wrong!")})).catch((function(t){e.loading=!1}))},handleDelete:function(e,t){var n=this;this.listLoading=!0,this.$confirm("Apakah anda serius mau menghapus ?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then((function(){l["a"].delete("/product/delete/".concat(e.id)).then((function(e){n.listLoading=!1,n.$notify({title:"Success",message:"Delete Successfully",type:"success",duration:2e3}),n.list.splice(t,1)})).catch((function(e){n.listLoading=!1,n.$notify({title:"Error",message:"Server Error",type:"warning",duration:2e3})}))})).catch((function(){n.listLoading=!1,n.$message({type:"info",message:"Delete canceled"})}))},handleFetchPv:function(e){var t=this;Object(o["c"])(e).then((function(e){t.pvData=e.data.pvData,t.dialogPvVisible=!0}))},handleDownload:function(){var e=this;this.downloadLoading=!0,Promise.all([n.e("chunk-519483dc"),n.e("chunk-181fab9f"),n.e("chunk-2141e892")]).then(n.bind(null,"4bf8")).then((function(t){var n=["id","Nama Produk","QTY","Harga Beli","Harga Jual","Unit","Jenis Barang"],a=["id","name","qty","selling_price","purchase_price","unit","type"],i=e.formatJson(a);t.export_json_to_excel({header:n,data:i,filename:"produk"}),e.downloadLoading=!1}))},formatJson:function(e){return this.list.map((function(t){return e.map((function(e){return t["type"]=t.producttype.name,t[e]}))}))},getSortClass:function(e){var t=this.listQuery.sort;return t==="+".concat(e)?"ascending":"descending"},onChangeCash:function(e){console.log(e)},onChangeModal:function(e){console.log(e)},addFind:function(){this.kasIn.all.push({modal:"",desc:"",total:""}),console.log(this.kasIn,this.to_item,this.from)},onChangeTotal:function(){var e=this.kasIn.all.reduce((function(e,t){return console.log(t.total),e+parseInt(t.total)}),0);this.total_kasIn=e}}},h=p,f=n("2877"),g=Object(f["a"])(h,a,i,!1,null,null,null);t["default"]=g.exports},e350:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("d3b7"),n("caad"),n("2532");var a=n("4360");function i(e){if(e&&e instanceof Array&&e.length>0){var t=a["a"].getters&&a["a"].getters.roles,n=e,i=t.some((function(e){return n.includes(e)}));return i}return console.error("need roles! Like v-permission=\"['admin','editor']\""),!1}},e498:function(e,t,n){"use strict";n("1c18")}}]);