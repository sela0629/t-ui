(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{608:function(e,t,n){"use strict";n.r(t);var o=n(35),l=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"弹窗组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#弹窗组件"}},[e._v("#")]),e._v(" 弹窗组件")]),e._v(" "),n("hr"),e._v(" "),n("common-code-format",{attrs:{title:"基本弹窗",description:"在组件中需配置：属性visible是否显示弹窗；title：弹窗标题（默认：温馨提示）；@update:visible 右上删除或取消事件；新增v-dialogDrag指令可按头部拖拽弹窗；ElementUI中el-dialog的属性皆可用(如：close-on-click-modal属性——点击空白区域是否关闭弹窗)"}},[n("docsComponents-TDialog-index"),e._v(" "),n("highlight-code",{attrs:{slot:"codeText"},slot:"codeText"},[n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('<template>\n   <div class="t-dialog-demo" style="width:100%;min-height:100px;">\n    <el-button type="danger" @click="openDialog">点击打开弹窗</el-button>\n    <t-dialog title="请选择企业" class="ent-choose" :visible="dialogSelectEnt" @update:visible="cancel">\n      <div class="select-ent-box flex-box flex-col">\n        <div\n          style="width:100%;"\n          v-for="item in entList"\n          :key="item.id"\n          class="radio-line-item t-overflow-hidden"\n          :class="entSelectType===item.id?\'radioSelected\':\'\'"\n          @click="selectType(item)">\n          <i v-if="entSelectType===item.id" class="el-icon-check icon-check"></i>\n          上海某某电子商务有限公司\n          <span style="color:#999;">`(企业编码:60003627)`</span>\n        </div>\n      </div>\n    </t-dialog>\n  </div>\n</template>\n<script>\n    export default {\n         data () {\n        return {\n          dialogSelectEnt: false,\n          entSelectType: \'\',\n          entList: [{ \'id\': 107, \'entName\': \'上海某某电子商务有限公司\', \'entCode\': \'60003627\', \'entType\': null, \'entIdPcloud\': \'717380413542105088\' }]\n        }\n      },\n      mounted () {\n        this.entSelectType = this.entList[0].id\n      },\n      // 方法\n      methods: {\n        openDialog () {\n          this.dialogSelectEnt = true\n        },\n        // 选择企业\n        selectType (item) {\n          this.entSelectType = item.id\n          this.dialogSelectEnt = false\n        },\n        cancel () {\n          this.dialogSelectEnt = false\n        }\n      }\n    }\n<\/script>\n')])])])])],1),e._v(" "),n("h1",{attrs:{id:"短信验证"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#短信验证"}},[e._v("#")]),e._v(" 短信验证")]),e._v(" "),n("hr"),e._v(" "),n("common-code-format",{attrs:{title:"短信验证弹窗",description:"在组件中需配置：属性phoneVisible是否显示弹窗；legalPhone：展示的手机号码；personTxt：展示谁的手机号码；@update:visible 右上删除或取消事件；新增v-dialogDrag指令可按头部拖拽弹窗；ElementUI中el-dialog的属性皆可用(如：close-on-click-modal属性——点击空白区域是否关闭弹窗)"}},[n("docsComponents-TDialog-sms"),e._v(" "),n("highlight-code",{attrs:{slot:"codeText"},slot:"codeText"},[n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('<template>\n   <el-button type="danger" @click="openDialog">短信验证弹窗</el-button>\n    <t-phone\n      :phoneVisible="phoneVisible"\n      :legalPhone="legalPhone"\n      @update:visible="phoneHide"\n      :personTxt="personTxt"\n      @phoneConfirm="phoneConfirm"\n    />\n</template>\n<script>\n    export default {\n        data () {\n          return {\n            phoneVisible: false,\n            personTxt:\'法人\',\n            legalPhone: \'13888888888\' // 法人手机号码\n          }\n      },\n      methods: {\n        openDialog () {\n          this.phoneVisible = true\n        },\n        // 点击确定\n        phoneConfirm (smsCode) {\n          console.log(\'点击确定按钮\', smsCode)\n          this.phoneVisible = false\n        },\n        phoneHide () {\n          this.phoneVisible = false\n        }\n      }\n    }\n<\/script>\n')])])])])],1),e._v(" "),n("h1",{attrs:{id:"pdf文件预览"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pdf文件预览"}},[e._v("#")]),e._v(" pdf文件预览")]),e._v(" "),n("hr"),e._v(" "),n("common-code-format",{attrs:{title:"pdf文件预览弹窗",description:"在组件中需配置：属性protocolVisible是否显示弹窗；protocolTitle：pdf文件名；@update:visible 右上删除或取消事件；新增v-dialogDrag指令可按头部拖拽弹窗；ElementUI中el-dialog的属性皆可用(如：close-on-click-modal属性——点击空白区域是否关闭弹窗)"}},[n("docsComponents-TDialog-protocol"),e._v(" "),n("highlight-code",{attrs:{slot:"codeText"},slot:"codeText"},[n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('<template>\n   <div class="t-dialog-demo" style="width:100%;min-height:100px;padding:15px;">\n    <el-button type="danger" @click="openDialog">PDF预览弹窗</el-button>\n    <t-protocol\n      :protocolVisible="protocolVisible"\n      :protocolTitle="protocolTitle"\n      :protocolSrc="protocolSrc"\n      ref="pdf"\n      @update:visible="protocolHide"\n    />\n  </div>\n</template>\n<script>\n    export default {\n       data () {\n        return {\n          protocolVisible: false,\n          protocolTitle: \'协议预览\',\n          protocolSrc: \'\' // 协议路径\n        }\n      },\n      methods: {\n        openDialog () {\n          this.protocolVisible = true\n        },\n        protocolHide () {\n          this.protocolVisible = false\n        }\n      }\n    }\n<\/script>\n')])])])])],1)],1)}),[],!1,null,null,null);t.default=l.exports}}]);