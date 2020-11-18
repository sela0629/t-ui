(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{607:function(t,n,e){"use strict";e.r(n);var a=e(35),s=Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"基本使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[t._v("#")]),t._v(" 基本使用")]),t._v(" "),e("hr"),t._v(" "),e("common-code-format",[e("docsComponents-TTable-base"),t._v(" "),e("highlight-code",{attrs:{slot:"codeText"},slot:"codeText"},[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("<template>\n    <div class=\"t-table\" style=\"width:100%;\">\n        <t-table :table=\"table\" />\n    </div>\n</template>\n<script>\n    export default {\n        data () {\n            return {\n                table: {\n                    data: [\n                    {\n                        id: '1',\n                        date: '2019-09-25',\n                        name: '张三',\n                        status: '2',\n                        address: '广东省广州市天河区'\n                    },\n                    {\n                        id: '2',\n                        date: '2019-09-26',\n                        name: '张三1',\n                        status: '1',\n                        address: '广东省广州市天广东省广州市天河区2广东省广州市天河区2河区2'\n                    },\n                    {\n                        id: '3',\n                        date: '2019-09-27',\n                        name: '张三2',\n                        status: '3',\n                        address: '广东省广州市天河区3'\n                    }\n                    ],\n                   column: [\n                        { prop: 'name', label: '姓名', minWidth: '100', sort: true, noShowColumn: true },\n                        { prop: 'date', label: '日期', minWidth: '180', sort: true },\n                        { prop: 'address', label: '地址', minWidth: '220', sort: true, noShowTip: true },\n                        { prop: 'date', label: '日期', minWidth: '180', sort: true },\n                        { prop: 'address', label: '地址', minWidth: '220' }\n                    ]\n                }\n            }\n        }\n    }\n<\/script>\n")])])])])],1),t._v(" "),e("h1",{attrs:{id:"双击单元格复制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#双击单元格复制"}},[t._v("#")]),t._v(" 双击单元格复制")]),t._v(" "),e("hr"),t._v(" "),e("common-code-format",{attrs:{description:"在组件中需配置：新增isCopy或isCopy='true'属性"}},[e("docsComponents-TTable-copy"),t._v(" "),e("highlight-code",{attrs:{slot:"codeText"},slot:"codeText"},[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("<template>\n    <div class=\"t-table\" style=\"width:100%;\">\n        <t-table :table=\"table\" isCopy/>\n    </div>\n</template>\n<script>\n    export default {\n        data () {\n            return {\n                table: {\n                    data: [\n                    {\n                        id: '1',\n                        date: '2019-09-25',\n                        name: '张三',\n                        status: '2',\n                        address: '广东省广州市天河区'\n                    },\n                    {\n                        id: '2',\n                        date: '2019-09-26',\n                        name: '张三1',\n                        status: '1',\n                        address: '广东省广州市天广东省广州市天河区2广东省广州市天河区2河区2'\n                    },\n                    {\n                        id: '3',\n                        date: '2019-09-27',\n                        name: '张三2',\n                        status: '3',\n                        address: '广东省广州市天河区3'\n                    }\n                    ],\n                    column: [\n                    { prop: 'name', label: '姓名', minWidth: '100', sort: true },\n                    { prop: 'date', label: '日期', minWidth: '180', sort: true },\n                    { prop: 'address', label: '地址', minWidth: '220', sort: true },\n                    { prop: 'date', label: '日期', minWidth: '180', sort: true },\n                    { prop: 'address', label: '地址', minWidth: '220' }\n                    ]\n                }\n            }\n        }\n    }\n<\/script>\n")])])])])],1),t._v(" "),e("h1",{attrs:{id:"文字变色"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文字变色"}},[t._v("#")]),t._v(" 文字变色")]),t._v(" "),e("hr"),t._v(" "),e("common-code-format",{attrs:{description:"在组件中需配置：changeColor对象"}},[e("docsComponents-TTable-textColor"),t._v(" "),e("highlight-code",{attrs:{slot:"codeText"},slot:"codeText"},[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("<template>\n    <div class=\"t-table\" style=\"width:100%;\">\n        <t-table :table=\"table\" />\n    </div>\n</template>\n<script>\n    export default {\n        data () {\n            return {\n                table: {\n                    data: [\n                    {\n                        id: '1',\n                        date: '2019-09-25',\n                        name: '张三',\n                        status: '2',\n                        address: '广东省广州市天河区'\n                    },\n                    {\n                        id: '2',\n                        date: '2019-09-26',\n                        name: '张三1',\n                        status: '1',\n                        address: '广东省广州市天广东省广州市天河区2广东省广州市天河区2河区2'\n                    },\n                    {\n                        id: '3',\n                        date: '2019-09-27',\n                        name: '张三2',\n                        status: '3',\n                        address: '广东省广州市天河区3'\n                    }\n                    ],\n                    column: [\n                    { prop: 'name', label: '姓名', minWidth: '100', sort: true },\n                    { prop: 'date', label: '日期', minWidth: '180', sort: true },\n                    { prop: 'address', label: '地址', minWidth: '220', sort: true },\n                    { prop: 'date', label: '日期', minWidth: '180', sort: true },\n                    { prop: 'address', label: '地址', minWidth: '220' }\n                    ],\n                    // 状态值为3时，文字变色\n                    changeColor: { key: 'status', val: '3', txtStyle: '#ef473a' }\n                }\n            }\n        }\n    }\n<\/script>\n")])])])])],1),t._v(" "),e("h1",{attrs:{id:"第一列显示序列号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第一列显示序列号"}},[t._v("#")]),t._v(" 第一列显示序列号")]),t._v(" "),e("hr"),t._v(" "),e("common-code-format",{attrs:{description:"在组件中需配置：firstColumn: { type: 'index', label: '序列' }"}},[e("docsComponents-TTable-sequence"),t._v(" "),e("highlight-code",{attrs:{slot:"codeText"},slot:"codeText"},[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("<template>\n    <div class=\"t-table\" style=\"width:100%;\">\n        <t-table :table=\"table\" isShowPagination/>\n    </div>\n</template>\n<script>\n    export default {\n        data () {\n            return {\n                table: {\n                    total: 0,\n                    currentPage: 1,\n                    pageSize: 10,\n                    // 是否显示复选框或序列号\n                    // firstColumn: { type: 'selection' },\n                    firstColumn: { type: 'index', label: '序列' },\n                    data: [\n                    {\n                        id: '1',\n                        date: '2019-09-25',\n                        name: '张三',\n                        status: '2',\n                        address: '广东省广州市天河区'\n                    },\n                    {\n                        id: '2',\n                        date: '2019-09-26',\n                        name: '张三1',\n                        status: '1',\n                        address: '广东省广州市天广东省广州市天河区2广东省广州市天河区2河区2'\n                    },\n                    {\n                        id: '3',\n                        date: '2019-09-27',\n                        name: '张三2',\n                        status: '3',\n                        address: '广东省广州市天河区3'\n                    }\n                    ],\n                    column: [\n                    { prop: 'name', label: '姓名', minWidth: '100', sort: true },\n                    { prop: 'date', label: '日期', minWidth: '180', sort: true },\n                    { prop: 'address', label: '地址', minWidth: '220', sort: true },\n                    { prop: 'date', label: '日期', minWidth: '180', sort: true },\n                    { prop: 'address', label: '地址', minWidth: '220' }\n                    ]\n                }\n            }\n        }\n    }\n<\/script>\n")])])])])],1)],1)}),[],!1,null,null,null);n.default=s.exports}}]);