(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{457:function(t,e,n){},458:function(t,e,n){},459:function(t,e,n){},460:function(t,e,n){},489:function(t,e,n){"use strict";var a=n(457);n.n(a).a},490:function(t,e,n){"use strict";var a=n(458);n.n(a).a},494:function(t,e,n){},495:function(t,e,n){"use strict";var a=n(459);n.n(a).a},496:function(t,e,n){"use strict";var a=n(460);n.n(a).a},498:function(t,e,n){"use strict";n(153),n(101),n(154),n(247),n(26),n(463),n(63),n(155),n(455),n(103),n(36),n(248),n(102);var a=n(464),i=n(507),s=n.n(i),r=n(508),l={name:"TBreadcrumb",computed:Object(a.a)({},Object(r.a)(["permissionRoutes"])),data:function(){return{levelList:null}},watch:{$route:function(){this.getBreadcrumb()}},created:function(){this.getBreadcrumb()},methods:{findPathByLeafId:function(t,e,n){void 0===n&&(n={}),void 0===e&&(e=[]);for(var a=0;a<e.length;a++){var i=n;if(t===e[a].path)return i=e[a];if(e[a].children){var s=this.findPathByLeafId(t,e[a].children,i);if(s)return s}}},getBreadcrumb:function(){var t=this,e=this.$route.matched.filter((function(t){return t&&t.name})),n=e?e[0]:{};this.isDashboard(n)||(e=[{path:"/home",name:"首页",meta:{title:"首页"}}].concat(e));var a=e.find((function(t){return t.meta&&t.meta.parent}));if(a&&a.meta.parent)if(-1!==a.meta.parent.indexOf("/"))a.meta.parent.split("/").forEach((function(n){var a=t.findPathByLeafId(n,t.permissionRoutes);a&&e.splice(e.length-1,0,a)}));else{var i=this.findPathByLeafId(a.meta.parent,this.permissionRoutes);i&&e.splice(e.length-1,0,i)}this.levelList=e.filter((function(t){return t&&t.name&&!1!==t.meta.breadcrumb}))},isDashboard:function(t){var e=t&&t.name;return!!e&&"首页"===e},pathCompile:function(t){var e=this.$route.params;return s.a.compile(t)(e)},handleLink:function(t){var e=t.redirect,n=t.path;if(this.$route.path!==e){if(e)return void this.$router.push(e);this.$router.push(this.pathCompile(n))}}}},o=(n(489),n(35)),c={name:"TLayout",components:{TBreadcrumb:Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-breadcrumb",{staticClass:"app-breadcrumb",attrs:{separator:"/"}},[n("transition-group",{attrs:{name:"breadcrumb"}},t._l(t.levelList,(function(e,a){return n("el-breadcrumb-item",{key:e.path},["noRedirect"===e.redirect||a==t.levelList.length-1?n("span",{staticClass:"no-redirect"},[t._v(t._s(e.name))]):n("a",{on:{click:function(n){return n.preventDefault(),t.handleLink(e)}}},[t._v(t._s(e.name))])])})),1)],1)}),[],!1,null,"1d11e46d",null).exports},props:{isShowTitle:{type:Boolean,default:!1},returnBtn:{type:Boolean,default:!1},isShowFooter:{type:Boolean,default:!0}},computed:{sectionTitleHeight:function(){return this.isShowTitle?50:0}},watch:{},mounted:function(){var t=this.isShow("fixBtn")?40:0;this.$refs.section.style.height=window.innerHeight-113+"px",this.$refs.layoutContent.style.height=window.innerHeight-166+"px",this.$refs.layoutContent.children[0].style.minHeight=window.innerHeight-185-t-this.sectionTitleHeight+"px";var e=this;window.onresize=function(){e.$refs.section.style.height=window.innerHeight-113+"px",e.$refs.layoutContent.style.height=window.innerHeight-166+"px",e.$refs.layoutContent.children[0].style.minHeight=window.innerHeight-185-t-e.sectionTitleHeight+"px"},e.$on("hook:beforeDestroy",(function(){window.onresize=null}))},methods:{isShow:function(t){return Object.keys(this.$slots).includes(t)}}},u=(n(490),Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"i_layout"},[n("div",{ref:"section",staticClass:"section"},[t.isShowTitle?n("header",{staticClass:"sectionTitle"},[n("t-breadcrumb"),t._v(" "),n("div",{on:{click:function(e){return t.$emit("click")}}},[t.returnBtn?n("el-button",{attrs:{plain:"",size:"small"}},[t._v("返回")]):t._e(),t._v(" "),t._t("head-right")],2)],1):t._e(),t._v(" "),n("div",{ref:"layoutContent",staticClass:"layout-content"},[t._t("default"),t._v(" "),n("div",{staticClass:"flex-box flex-ver fix-btn"},[t._t("fixBtn")],2),t._v(" "),t.isShowFooter?n("div",{staticClass:"footer"},[n("div",[t._v("**************有限公司版权所有 粤ICP备**********号-2")]),t._v(" "),n("div",{staticClass:"t-margin-top-5"},[t._v("©2017-2023 JIANDANH INFORMATION TECH (GUANGZHOU) CO., LTD All Rights Reserved.")])]):t._e()],2)])])}),[],!1,null,"3b620d20",null));e.a=u.exports},499:function(t,e,n){"use strict";n(62),n(245),n(495);var a=n(35),i={name:"TStepWizard",components:{FixBtn:Object(a.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"fix-btn flex-box flex-ver bottom-tool-bar bar-fixed-bottom"},[this._t("default")],2)}),[],!1,null,"6326c579",null).exports},props:{stepData:{type:Array,default:function(){return[]},required:!0},successTitle:{type:String,default:""},lastBtnTitle:{type:String,default:"完成"},active:{type:Number,default:0,required:!0},isShowLastSuccess:{type:Boolean,default:!0}},methods:{stepContent:function(){return this.isShowLastSuccess?this.stepData&&this.stepData.slice(0,this.stepData.length-1):this.stepData},complete:function(){this.$emit("complete",this.active)}}},s=(n(496),Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"step-wizard"},[n("el-steps",t._b({attrs:{active:t.active,simple:"","finish-status":"success"}},"el-steps",t.$attrs,!1),t._l(t.stepData,(function(e,a){return n("el-step",t._b({key:a,attrs:{title:a+1+" "+e.title}},"el-step",t.$attrs,!1))})),1),t._v(" "),n("div",{staticClass:"content-step-main step-content"},[t._l(t.stepContent(),(function(e,a){return n("div",{directives:[{name:"show",rawName:"v-show",value:t.active===a,expression:"active===key"}],key:a,staticClass:"step-first flex-box flex-col flex-ver-h"},[e.slotName?[t._t(e.slotName)]:t._e(),t._v(" "),n("fix-btn",t._l(e.btnArr,(function(a,i){return n("el-button",{key:i,attrs:{type:a.type||"danger",disabled:e.disable||!1},on:{click:function(t){return a.fn(a)}}},[t._v(t._s(a.btnTitle))])})),1)],2)})),t._v(" "),t.active===t.stepData.length&&t.isShowLastSuccess?n("div",{staticClass:"step-last flex-box flex-col flex-ver"},[t._m(0),t._v(" "),n("h2",{staticClass:"success-margin",domProps:{innerHTML:t._s(t.successTitle)}}),t._v(" "),n("fix-btn",[t.stepData[t.stepData.length-1].lastBtnArr?t._l(t.stepData[t.stepData.length-1].lastBtnArr,(function(e,a){return n("el-button",{key:a,attrs:{type:e.type||"danger",disabled:e.disable||!1},on:{click:function(t){return e.fn(e)}}},[t._v(t._s(e.btnTitle))])})):n("el-button",{attrs:{type:"danger"},on:{click:t.complete}},[t._v(t._s(t.lastBtnTitle))])],2)],1):t._e()],2)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"icon-success"},[e("i",{staticClass:"el-icon-success"})])}],!1,null,null,null));e.a=s.exports},510:function(t,e){},555:function(t,e){},556:function(t,e){},557:function(t,e,n){"use strict";var a=n(494);n.n(a).a},567:function(t,e,n){"use strict";n.r(e);n(103);var a=n(498),i=(n(10),n(550)),s=n.n(i),r={name:"TUploadExcel",props:{beforeUpload:Function,onSuccess:Function,templateText:{type:String,default:"点击选择上传模板"},selectedFileText:{type:String}},data:function(){return{loading:!1,filesName:this.selectedFileText,excelData:{header:null,results:null}}},methods:{generateData:function(t){var e=t.header,n=t.results;this.excelData.header=e,this.excelData.results=n,this.onSuccess&&this.onSuccess(this.excelData)},handleDrop:function(t){if(t.stopPropagation(),t.preventDefault(),!this.loading){var e=t.dataTransfer.files;if(1===e.length){var n=e[0];if(!this.isExcel(n))return this.$message.error("只支持上传 .xlsx， .xls， .csv后缀文件"),!1;this.upload(n),t.stopPropagation(),t.preventDefault()}else this.$message.error("只支持上传一个文件!")}},handleDragover:function(t){t.stopPropagation(),t.preventDefault(),t.dataTransfer.dropEffect="copy"},handleUpload:function(){this.$refs["excel-upload-input"].click()},handleClick:function(t){var e=t.target.files[0];this.filesName=e.name,e&&this.upload(e)},upload:function(t){(this.$refs["excel-upload-input"].value=null,this.beforeUpload)?this.beforeUpload(t)&&this.readerData(t):this.readerData(t)},readerData:function(t){var e=this;return this.loading=!0,new Promise((function(n,a){var i=new FileReader;i.onload=function(t){var a=t.target.result,i=s.a.read(a,{type:"array"}),r=i.SheetNames[0],l=i.Sheets[r],o=e.getHeaderRow(l),c=s.a.utils.sheet_to_json(l);e.generateData({header:o,results:c}),e.loading=!1,n()},i.readAsArrayBuffer(t)}))},getHeaderRow:function(t){var e,n=[],a=s.a.utils.decode_range(t["!ref"]),i=a.s.r;for(e=a.s.c;e<=a.e.c;++e){var r=t[s.a.utils.encode_cell({c:e,r:i})],l="UNKNOWN "+e;r&&r.t&&(l=s.a.utils.format_cell(r)),n.push(l)}return n},isExcel:function(t){return/\.(xlsx|xls|csv)$/.test(t.name)}}},l=(n(557),n(35)),o=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"upload-excel"},[n("input",{ref:"excel-upload-input",staticClass:"excel-upload-input",attrs:{type:"file",accept:".xlsx, .xls"},on:{change:t.handleClick}}),t._v(" "),n("div",{staticClass:"drop",on:{drop:t.handleDrop,dragover:t.handleDragover,dragenter:t.handleDragover,click:t.handleUpload}},[t.filesName?t._e():n("span",[n("i",{staticClass:"i-icon icon iconfont icon-hand-pointer"}),t._v("\n      "+t._s(t.templateText)+"\n    ")]),t._v(" "),t.filesName?n("span",[n("span",{staticClass:"text-primary"},[t._v("已选:")]),t._v("\n      "+t._s(t.filesName)+"\n    ")]):t._e()])])}),[],!1,null,"f86d6ccc",null).exports,c=n(499),u={name:"excelUpload",components:{TLayout:a.a,TUploadExcel:o,TStepWizard:c.a},data:function(){return{active:0,stepData:[{id:1,title:"上传文件",slotName:"first",btnArr:[{btnTitle:"下一步",fn:this.next}]},{id:2,title:"核对信息",slotName:"second",btnArr:[{btnTitle:"上一步",fn:this.stepBack},{btnTitle:"下一步",fn:this.submitBtn}]},{id:3,title:"完成"}],lastBtnTitle:"完成",successTitle:"发票导入完成...",fileName:"",importRecNum:0,tableData:[],tableHeader:[]}},created:function(){},methods:{beforeUpload:function(t){return this.fileName=t.name,t.size/1024/1024<1||(this.$message({message:"请不要上传大于1m的文件.",type:"warning"}),!1)},handleSuccess:function(t){var e=t.results,n=t.header;this.importRecNum=e.length,this.tableData=e,this.tableHeader=n},submitBtn:function(t){this.active+=2,this.fileName=""},next:function(){if(!this.fileName)return this.$message({message:"请先上传文件.",type:"warning"}),!1;this.active+=1},stepBack:function(){this.active-=1},complete:function(){this.active=0},downloadTemplate:function(){console.log("下载模板")}}},d=Object(l.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"excel-upload",staticStyle:{width:"100%"}},[n("t-layout",{attrs:{sectionTitle:"Excel上传组件"}},[n("t-step-wizard",{staticStyle:{"min-height":"400px"},attrs:{stepData:t.stepData,lastBtnTitle:t.lastBtnTitle,active:t.active,successTitle:t.successTitle},on:{complete:t.complete},scopedSlots:t._u([{key:"first",fn:function(){return[n("div",{staticClass:"content-main"},[n("t-upload-excel",{attrs:{"on-success":t.handleSuccess,"before-upload":t.beforeUpload,selectedFileText:t.fileName}}),t._v(" "),n("div",{staticClass:"hint t-margin-top-10"},[n("i",{staticClass:"i-icon icon iconfont icon-prompt t-padding5 text-primary"}),t._v(" \n            "),n("b",[t._v("提示：")]),t._v(" "),n("span",{staticClass:"text-muted"},[t._v("\n              1、如果您还没有导入模板，请点击\n              "),n("a",{on:{click:t.downloadTemplate}},[t._v("发票导入模板下载.xlsx")])]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"text-muted",staticStyle:{"margin-left":"76px"}},[t._v("2、相同的发票不能重复上传，若已上传的数据不正确，请先删除，再重新上传。(发票号码和发票代码相同的为同一张发票)")])])],1)]},proxy:!0},{key:"second",fn:function(){return[n("div",{staticClass:"content-main"},[n("div",{staticClass:"alert-content"},[n("div",{staticClass:"alert alert-info text-center"},[n("i",{staticClass:"i-icon icon iconfont icon-prompt t-padding5 text-primary"}),t._v(" \n              "),n("span",[t._v("\n                您本次共导入\n                "),n("span",{staticClass:"text-danger"},[t._v(t._s(t.importRecNum))]),t._v("条记录\n              ")])])]),t._v(" "),n("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.tableData,border:"","highlight-current-row":""}},t._l(t.tableHeader,(function(t){return n("el-table-column",{key:t,attrs:{prop:t,label:t,"show-overflow-tooltip":"","min-width":"220",align:"center"}})})),1)],1)]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.default=d.exports}}]);