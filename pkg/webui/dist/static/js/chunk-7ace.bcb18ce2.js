(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7ace"],{"1XQY":function(e,t,n){"use strict";var a=n("jZRq");n.n(a).a},"27mv":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select"},on:{change:e.getList},model:{value:e.domain_id,callback:function(t){e.domain_id=t},expression:"domain_id"}},e._l(e.domainlist,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.getList}},[e._v("\n      "+e._s(e.$t("table.search"))+"\n    ")]),e._v(" "),n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["/auth-system/menu:add"],expression:"['/auth-system/menu:add']"}],staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v(e._s(e.$t("table.add"))+"\n    ")])],1),e._v(" "),e.domain_id&&e.list?[n("tree-table",{attrs:{data:e.list,"eval-func":e.func,"eval-args":e.args,columns:e.columns,"expand-all":e.expandAll,border:""}},[n("el-table-column",{attrs:{label:e.$t("menu.icon"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.icon?n("svg-icon",{attrs:{"icon-class":t.row.icon}}):e._e()]}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("menu.type"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.menu_type?n("el-tag",{attrs:{type:"info"}},[e._v("目录")]):e._e(),e._v(" "),1==t.row.menu_type?n("el-tag",{attrs:{type:"primary"}},[e._v("菜单")]):e._e(),e._v(" "),2==t.row.menu_type?n("el-tag",{attrs:{type:"success"}},[e._v("按钮")]):e._e()]}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("menu.topnum"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(t.row.order_num)+"\n        ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("menu.router"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(t.row.url)+"\n        ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("menu.auth"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(t.row.perms)+"\n        ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("menu.actions"),width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return t.row.id?[n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["/auth-system/menu:edit"],expression:"['/auth-system/menu:edit']"}],attrs:{type:"text"},on:{click:function(n){e.handleUpdate(t.row)}}},[e._v(e._s(e.$t("table.edit"))+"\n          ")]),e._v(" "),n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["/auth-system/menu:del"],expression:"['/auth-system/menu:del']"}],attrs:{type:"text"},on:{click:function(n){e.handleDelete(t.row)}}},[e._v(e._s(e.$t("table.delete"))+"\n          ")])]:void 0}}])})],1)]:e._e(),e._v(" "),n("el-dialog",{attrs:{name:e.$t("menu."+e.textMap[e.dialogStatus]),visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{ref:"dataForm",staticStyle:{margin:"0 50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"80px"}},[n("el-form-item",{attrs:{label:e.$t("menu.type")}},[n("el-radio-group",{attrs:{disabled:"create"!==e.dialogStatus},on:{change:e.typeChange},model:{value:e.temp.menu_type,callback:function(t){e.$set(e.temp,"menu_type",t)},expression:"temp.menu_type"}},[n("el-radio-button",{attrs:{label:"0"}},[e._v(e._s(e.$t("menu.type_directories")))]),e._v(" "),n("el-radio-button",{attrs:{label:"1"}},[e._v(e._s(e.$t("menu.type_menu")))]),e._v(" "),n("el-radio-button",{attrs:{label:"2"}},[e._v(e._s(e.$t("menu.type_button")))])],1)],1),e._v(" "),n("el-form-item",{attrs:{label:e.$t("menu.name"),prop:"name"}},[n("el-input",{model:{value:e.temp.name,callback:function(t){e.$set(e.temp,"name",t)},expression:"temp.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:e.$t("menu.parents")}},[n("el-cascader",{style:{width:"100%"},attrs:{options:e.data_options,props:e.cascader_props,"change-on-select":""},model:{value:e.temp.parents,callback:function(t){e.$set(e.temp,"parents",t)},expression:"temp.parents"}})],1),e._v(" "),"2"!==e.temp.menu_type?n("el-form-item",{attrs:{label:e.$t("menu.topnum"),prop:"order_num"}},[n("el-input",{model:{value:e.temp.order_num,callback:function(t){e.$set(e.temp,"order_num",t)},expression:"temp.order_num"}})],1):e._e(),e._v(" "),"1"===e.temp.menu_type?n("el-form-item",{attrs:{label:e.$t("menu.router")}},[n("el-input",{model:{value:e.temp.url,callback:function(t){e.$set(e.temp,"url",t)},expression:"temp.url"}})],1):e._e(),e._v(" "),n("el-form-item",[2==e.temp.menu_type?n("el-alert",{attrs:{title:"权限标识与别名说明",type:"warning",description:"标识，别名属同一个权限，主要用于前后分离,前后权限标识不一致,且前后两端皆需判定权限的项目。一般情况别名置空即可,如有多个别名可逗号分隔。"}}):e._e()],1),e._v(" "),2==e.temp.menu_type?n("el-form-item",{attrs:{label:e.$t("menu.auth")}},[n("el-input",{model:{value:e.temp.perms,callback:function(t){e.$set(e.temp,"perms",t)},expression:"temp.perms"}})],1):e._e(),e._v(" "),2==e.temp.menu_type?n("el-form-item",{attrs:{label:e.$t("menu.alias")}},[n("el-input",{model:{value:e.temp.alias,callback:function(t){e.$set(e.temp,"alias",t)},expression:"temp.alias"}})],1):e._e(),e._v(" "),2!=e.temp.menu_type?n("el-form-item",{attrs:{label:e.$t("menu.icon")}},[n("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select"},model:{value:e.temp.icon,callback:function(t){e.$set(e.temp,"icon",t)},expression:"temp.icon"}},e._l(e.icons,function(e){return n("el-option",{key:e,attrs:{label:e,value:e}},[n("svg-icon",{attrs:{"icon-class":e}})],1)}))],1):e._e()],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(e._s(e.$t("table.cancel")))]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){"create"===e.dialogStatus?e.createData():e.updateData()}}},[e._v(e._s(e.$t("table.confirm"))+"\n      ")])],1)],1)],2)},i=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i})},"6bP5":function(e,t,n){"use strict";var a=n("Qq1u");n.n(a).a},Dh5b:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("rfXi"));t.default=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;var l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;var s=[];(0,a.default)(t).forEach(function(t){void 0===t._expanded&&i.default.set(t,"_expanded",n);var a=1;if(void 0!==l&&null!==l&&(a=l+1),i.default.set(t,"_level",a),r&&i.default.set(t,"parent",r),s.push(t),t.children&&t.children.length>0){var u=e(t.children,n,t,a);s=s.concat(u)}});return s};var i=r(n("Kw5r"));function r(e){return e&&e.__esModule?e:{default:e}}},Hycs:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchMenuList=function(e){return(0,a.default)({url:"v1/menus",method:"get",params:e})},t.fetchMenu=function(e){return(0,a.default)({url:"v1/menus",method:"get",params:{id:e}})},t.createMenu=function(e){return(0,a.default)({url:"v1/menus",method:"post",data:i.default.stringify(e)})},t.updateMenu=function(e){return(0,a.default)({url:"v1/menus/"+e.id,method:"put",data:i.default.stringify(e)})},t.deleteMenu=function(e){return(0,a.default)({url:"v1/menus/"+e.id,method:"delete",data:i.default.stringify(e)})};var a=r(n("t3Un")),i=r(n("Qyje"));function r(e){return e&&e.__esModule?e:{default:e}}},MfHw:function(e,t,n){"use strict";n.r(t);var a=n("tIYE"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);t.default=i.a},Qd7o:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("rfXi"));t.default=function e(t,n,r,l,s){var u=[];var o=[];(0,a.default)(t).forEach(function(t){void 0===t._expanded&&i.default.set(t,"_expanded",n);var a=1;if(void 0!==l&&null!==l&&(a=l+1),i.default.set(t,"_level",a),r?(i.default.set(t,"parent",r),u[a]||(u[a]=0),i.default.set(t,"_marginLeft",u[a]+r._marginLeft),i.default.set(t,"_width",t[s]/r[s]*r._width),u[a]+=t._width):(u[t.id]=[],u[t.id][a]=0,i.default.set(t,"_marginLeft",0),i.default.set(t,"_width",1)),o.push(t),t.children&&t.children.length>0){var d=e(t.children,n,t,a,s);o=o.concat(d)}});return o};var i=r(n("Kw5r"));function r(e){return e&&e.__esModule?e:{default:e}}},Qq1u:function(e,t,n){},Sf9I:function(e,t,n){"use strict";n.r(t);var a=n("hc7K"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);t.default=i.a},"W+lF":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-table",e._b({attrs:{data:e.formatData,"row-style":e.showRow}},"el-table",e.$attrs,!1),[0===e.columns.length?n("el-table-column",{attrs:{width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._l(t.row._level,function(e){return n("span",{key:e,staticClass:"ms-tree-space"})}),e._v(" "),e.iconShow(0,t.row)?n("span",{staticClass:"tree-ctrl",on:{click:function(n){e.toggleExpanded(t.$index)}}},[t.row._expanded?n("i",{staticClass:"el-icon-minus"}):n("i",{staticClass:"el-icon-plus"})]):e._e(),e._v("\n      "+e._s(t.$index)+"\n    ")]}}])}):e._l(e.columns,function(t,a){return n("el-table-column",{key:t.value,attrs:{label:t.text,width:t.width},scopedSlots:e._u([{key:"default",fn:function(i){return[e._l(i.row._level,function(t){return 0===a?n("span",{key:t,staticClass:"ms-tree-space"}):e._e()}),e._v(" "),e.iconShow(a,i.row)?n("span",{staticClass:"tree-ctrl",on:{click:function(t){e.toggleExpanded(i.$index)}}},[i.row._expanded?n("i",{staticClass:"el-icon-minus"}):n("i",{staticClass:"el-icon-plus"})]):e._e(),e._v("\n      "+e._s(i.row[t.value])+"\n    ")]}}])})}),e._v(" "),e._t("default")],2)},i=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i})},WRkR:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchDomainList=function(e){return(0,a.default)({url:"v1/domains",method:"get",params:e})},t.fetchDomain=function(e){return(0,a.default)({url:"v1/domains"+e,method:"get"})},t.createDomain=function(e){return(0,a.default)({url:"v1/domains",method:"post",data:i.default.stringify(e)})},t.updateDomain=function(e,t){return(0,a.default)({url:"v1/domains/"+e,method:"put",data:i.default.stringify(t)})},t.deleteDomain=function(e,t){return(0,a.default)({url:"v1/domains/"+e,method:"delete",data:i.default.stringify(t)})};var a=r(n("t3Un")),i=r(n("Qyje"));function r(e){return e&&e.__esModule?e:{default:e}}},XYqI:function(e,t,n){"use strict";n.r(t);var a=n("27mv"),i=n("MfHw");for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);var l=n("KHd+"),s=Object(l.a)(i.default,a.a,a.b,!1,null,null,null);s.options.__file="menu.vue",t.default=s.exports},XwA0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=/\.\/(.*)\.svg/,i=function(e){return e.keys()}(n("Uf/o")).map(function(e){return e.match(a)[1]});t.default=i},hc7K:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("jr1U")),i=r(n("Dh5b"));function r(e){return e&&e.__esModule?e:{default:e}}t.default={name:"TreeTable",props:{data:{type:[Array,Object],required:!0},columns:{type:Array,default:function(){return[]}},evalFunc:Function,evalArgs:Array,expandAll:{type:Boolean,default:!1}},computed:{formatData:function(){var e=void 0;e=Array.isArray(this.data)?this.data:[this.data];var t=this.evalFunc||i.default,n=this.evalArgs?(0,a.default)([e,this.expandAll],this.evalArgs):[e,this.expandAll];return t.apply(null,n)}},methods:{showRow:function(e){var t=!e.row.parent||e.row.parent._expanded&&e.row.parent._show;return e.row._show=t,t?"animation:treeTableShow 1s;-webkit-animation:treeTableShow 1s;":"display:none;"},toggleExpanded:function(e){var t=this.formatData[e];t._expanded=!t._expanded},iconShow:function(e,t){return 0===e&&t.children&&t.children.length>0}}}},itRl:function(e,t,n){"use strict";n.r(t);var a=n("W+lF"),i=n("Sf9I");for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);n("6bP5"),n("1XQY");var l=n("KHd+"),s=Object(l.a)(i.default,a.a,a.b,!1,null,"60a8d106",null);s.options.__file="index.vue",t.default=s.exports},jZRq:function(e,t,n){},jr1U:function(e,t,n){e.exports={default:n("wObO"),__esModule:!0}},tIYE:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=d(n("P2sY")),i=d(n("gDS+")),r=d(n("itRl")),l=d(n("Qd7o")),s=d(n("XwA0")),u=n("Hycs"),o=n("WRkR");function d(e){return e&&e.__esModule?e:{default:e}}t.default={name:"Menu",components:{treeTable:r.default},filters:{tag:function(e){return 0===e?"目录":1===e?"菜单":"权限"}},data:function(){return{func:l.default,expandAll:!1,list:{},args:[null,null,"timeLine"],columns:[{value:"name",text:this.$t("menu.name")}],temp:{id:void 0,name:"",menu_type:"1",url:"",order_num:1,perms:"",icon:"",parents:["0"]},icons:s.default,dialogFormVisible:!1,dialogStatus:"create",textMap:{update:"Edit",create:"Create"},rules:{type:[{required:!0,message:"type is required",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"timestamp is required",trigger:"change"}],name:[{required:!0,message:"名称必须填写",trigger:"blur"}],order_num:[{required:!0,message:"排序必须填写",trigger:"blur"}]},index:1,data_copy:[],data_options:[],cascader_props:{value:"id",label:"name"},domainlist:[],domain_id:""}},mounted:function(){},created:function(){this.getDeptList()},methods:{typeChange:function(e){this.resetTemp(),this.temp.menu_type=e},os:function(e){var t=this;e.forEach(function(e){t.data_copy.push(e),e.children&&Array.isArray(e.children)&&t.os(e.children)})},oks:function(e){if(e<this.data_copy.length){var t=this;this.autoCreate(this.data_copy[e]).then(function(n){t.oks(e+1)})}},getDeptList:function(){var e=this;this.listLoading=!0,(0,o.fetchDomainList)().then(function(t){e.domainlist=t.data.result,""===e.domain_id&&e.domainlist&&e.domainlist.length>0&&(e.domain_id=e.domainlist[0].id,e.getList()),setTimeout(function(){e.listLoading=!1},1500)})},getList:function(){var e=this;this.listLoading=!0,(0,u.fetchMenuList)({q:"d="+this.domain_id}).then(function(t){var n=t.data.result;n&&n.length>0?(e.list=e.o(n,0),e.data_options=[{id:"0",name:"一级菜单",children:e.list}]):(e.list=[],e.data_options=[{id:"0",name:"一级菜单"}]),e.listLoading=!1})},o:function(e,t){var n=this,a=e.filter(function(e){return e.parent_id===t});return a.forEach(function(t){console.log(t.id);var a=n.o(e,t.id);a&&a.length>0&&(t.children=a)}),a},recursive:function(e,t){var n=this,a=[],r=[],l=1;return e.forEach(function(e){if(e.permission||!1!==e.permission){if(r={name:n.$t("route."+e.meta.title),label:n.$t("route."+e.meta.title),icon:e.meta.icon,id:n.index,value:n.index,order_num:l,url:"{}"===(0,i.default)(t)?e.path:t.url+"/"+e.path,parent_id:"{}"===(0,i.default)(t)?0:t.id,perms:"",alias:"",menu_type:"1"},n.index+=1,l+=1,e.children&&Array.isArray(e.children)&&(r.children=n.recursive(e.children,r)),e.auth&&Array.isArray(e.auth)){var s=[],u={},o=1;e.auth.forEach(function(e){u={name:e.name,label:e.name,icon:"",id:n.index,value:n.index,order_num:o,url:"",parent_id:r.id,perms:r.url+":"+e.code,menu_type:"2"},s.push(u),n.index+=1,o+=1}),r.children=s}a.push(r)}}),a},findParent:function(e,t,n){var a=this;return n.forEach(function(n){n.id===e&&(t.push(n.parent_id),a.findParent(n.parent_id,t,a.list)),n.children&&Array.isArray(n.children)&&a.findParent(e,t,n.children)}),t},resetTemp:function(){this.temp={id:void 0,name:"",menu_type:"1",url:"",order_num:1,perms:"",icon:"",parents:["0"]}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},handleUpdate:function(e){this.temp=(0,a.default)({},e),this.temp.timestamp=new Date(this.temp.timestamp),this.temp.parents=["0"],this.findParent(this.temp.id,this.temp.parents,this.list),this.dialogStatus="update",this.dialogFormVisible=!0},handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){(0,u.deleteMenu)({id:e.id}).then(function(){t.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3}),t.getList()}).catch(function(e){t.$message.error(e.msg)})}).catch(function(){})},createData:function(){var e=this;this.$refs.dataForm.validate(function(t){if(t){if(""===e.temp.url&&"1"===e.temp.menu_type)return void e.$message.error("请输入路由地址");if(""===e.temp.perms&&"2"===e.temp.menu_type)return void e.$message.error("请输入授权标识");e.temp.id=parseInt(100*Math.random())+1024,e.temp.author="vue-element-admin",e.temp.domain_id=e.domain_id,e.temp.parent_id=e.temp.parents[e.temp.parents.length-1],delete e.temp.parent,(0,u.createMenu)(e.temp).then(function(){e.getList(),e.dialogFormVisible=!1,e.$notify({name:"成功",message:"创建成功",type:"success",duration:2e3})}).catch(function(t){e.$message.error(t.msg)})}})},autoCreate:function(e){return this.temp=e,this.temp.name=e.name,this.temp.url=e.url,this.temp.perms=e.perms,this.temp.menu_type=e.menu_type,this.temp.parent_id=e.parent_id,this.temp.domain_id=this.domain_id,delete this.temp.children,(0,u.createMenu)(this.temp)},updateData:function(){var e=this;this.$refs.dataForm.validate(function(t){if(t){if(""===e.temp.url&&"1"===e.temp.menu_type)return void e.$message.error("请输入路由地址");if(""===e.temp.perms&&"2"===e.temp.menu_type)return void e.$message.error("请输入授权标识");delete e.temp.children,e.temp.domain_id=e.domain_id;var n=(0,a.default)({},e.temp);n.timestamp=+new Date(n.timestamp),n.parent_id=n.parents[e.temp.parents.length-1],delete n.parent,(0,u.updateMenu)(n).then(function(){e.getList(),e.dialogFormVisible=!1,e.$notify({name:"成功",message:"更新成功",type:"success",duration:2e3})}).catch(function(t){e.$message.error(t.msg)})}})}}}},wObO:function(e,t){e.exports=function(){return Function.call.apply(Array.prototype.concat,arguments)}}}]);