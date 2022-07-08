(function(){"use strict";var e={67319:function(e,t,a){a(66992),a(88674),a(19601),a(17727);var n=a(28935),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"parent"},[a("div",{staticStyle:{display:"none"}},[a("h3",[e._v("this is parent component")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{type:"text"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),a("p",[e._v("收到来自子组件的消息："+e._s(e.messageFromChild))]),a("HelloWorld",{attrs:{messageFromParent:e.message},on:{receive:e.receive}}),a("div",[e._v("vuex的值："+e._s(e.hellovalue))])],1),a("div",{staticStyle:{display:"none"}},[a("HelloTwo"),a("HelloThree")],1),a("HelloAa")],1)},r=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{padding:"50px"}},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"审批人"}},[a("el-select",{attrs:{multiple:"",filterable:e.iscreate,"allow-create":e.iscreate,"no-data-text":"请输入",placeholder:"请输入属性值"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),a("h2",[e._v("表格")]),a("el-scrollbar",{ref:"scrollbarRef"},[a("el-table",{ref:"singleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"row-key":"id",height:"400",border:""}},[a("el-table-column",{attrs:{label:"id",prop:"id",width:"50"}}),a("el-table-column",{attrs:{label:"日期",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return["add"==t.row.type?a("el-select",{attrs:{multiple:"",filterable:e.iscreate&&""==t.row.date,"allow-create":e.iscreate&&""==t.row.date,"no-data-text":"请输入",placeholder:"请输入属性值"},model:{value:t.row.date,callback:function(a){e.$set(t.row,"date",a)},expression:"scope.row.date"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value,disabled:""!=t.row.date}})})),1):a("span",[e._v(e._s(t.row.date))])]}}])}),a("el-table-column",{attrs:{label:"姓名",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return["add"==t.row.type?a("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:t.row.name,callback:function(a){e.$set(t.row,"name",a)},expression:"scope.row.name"}}):a("span",[e._v(e._s(t.row.name))])]}}])}),a("el-table-column",{attrs:{label:"地址"},scopedSlots:e._u([{key:"default",fn:function(t){return["add"==t.row.type?a("el-input",{attrs:{placeholder:"请输入地址",disabled:""==t.row.disable},model:{value:t.row.address,callback:function(a){e.$set(t.row,"address",a)},expression:"scope.row.address"}}):a("span",[e._v(e._s(t.row.address))])]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{on:{click:function(e){t.row.disable="11"}}},[e._v("编辑")]),a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.row.disable,callback:function(a){e.$set(t.row,"disable",a)},expression:"scope.row.disable"}})]}}])})],1)],1),a("div",{staticStyle:{"margin-top":"20px"}},[a("el-button",{on:{click:function(t){return e.add()}}},[e._v("新增")]),a("el-button",{on:{click:function(t){return e.sort()}}},[e._v("排序")])],1),a("h2",[e._v("tabel2")]),a("el-table",{ref:"dragTable",attrs:{data:e.list,border:"","highlight-current-row":"","row-key":"id"}},[a("el-table-column",{attrs:{label:"id",width:"60",prop:"id"}}),a("el-table-column",{attrs:{label:"name",prop:"name"}})],1),e._l(e.value,(function(t,n){return a("div",{key:n},e._l(e.options,(function(n,l){return a("div",{key:l},[a("p",{directives:[{name:"show",rawName:"v-show",value:t==n.value,expression:"item == item1.value"}]},[e._v(e._s(t))])])})),0)})),a("h2",[e._v("测试新排序")]),a("div",[a("transition-group",{staticClass:"list",attrs:{name:"drag",tag:"ul"}},e._l(e.sortList,(function(t,n){return a("li",{key:t.label,staticClass:"list-item",attrs:{draggable:""},on:{dragenter:function(t){return e.dragenter(t,n)},dragover:function(t){return e.dragover(t,n)},dragstart:function(t){return e.dragstart(n)}}},[e._v(" "+e._s(t.label)+" ")])})),0)],1),a("el-dropdown",{staticStyle:{"margin-bottom":"120px"},attrs:{"hide-on-click":!1}},[a("span",{staticClass:"el-dropdown-link"},[e._v(" 下拉菜单"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[a("el-checkbox",{on:{change:function(t){return e.dropChange(t,"0")}},model:{value:e.checked0,callback:function(t){e.checked0=t},expression:"checked0"}},[e._v("日期")])],1),a("el-dropdown-item",[a("el-checkbox",{on:{change:function(t){return e.dropChange(t,"1")}},model:{value:e.checked1,callback:function(t){e.checked1=t},expression:"checked1"}},[e._v("姓名")])],1),a("el-dropdown-item",[a("el-checkbox",{on:{change:function(t){return e.dropChange(t,"2")}},model:{value:e.checked2,callback:function(t){e.checked2=t},expression:"checked2"}},[e._v("地址")])],1)],1)],1),a("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:e.tableDataTest,"span-method":e.objectSpanMethod,"row-key":"id",border:"","tree-props":{children:"children",hasChildren:"hasChildren"}}},[e.checked0?a("el-table-column",{attrs:{prop:"date",label:"日期",sortable:""}}):e._e(),e.checked1?a("el-table-column",{attrs:{prop:"name",label:"姓名",sortable:""}}):e._e(),e.checked2?a("el-table-column",{attrs:{prop:"address",label:"地址"}}):e._e()],1)],2)},s=[],i=(a(40561),a(17493)),d={data:function(){return{checked0:!0,checked1:!0,checked2:!0,tableDataTest:[{id:1,no:"1",date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄",children:[{id:11,date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{id:12,date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"}]},{id:2,no:"2",date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄",children:[{id:13,date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{id:14,date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"}]},{id:3,no:"3",date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄",children:[{id:15,date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{id:16,date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"}]},{id:4,no:"4",date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄",children:[{id:17,date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{id:18,date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"}]}],iscreate:!0,options:[{value:"HTML",label:"HTML"},{value:"CSS",label:"CSS"}],value:["HTML","CSS"],tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄",id:"1"},{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄",id:"2"},{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄",id:"3"},{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄",id:"4"},{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄",id:"5"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄",id:"6"},{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄",id:"7"},{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄",id:"8"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄",id:"9"},{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄",id:"10"}],currentRow:null,list:[{id:1,name:"aa"},{id:2,name:"bb"},{id:3,name:"cc"}],sortList:[{label:"列表1"},{label:"列表2"},{label:"列表3"},{label:"列表4"},{label:"列表5"},{label:"列表6"}],dragIndex:"",enterIndex:""}},methods:{add:function(){var e=this,t=this.tableData.length+1;this.tableData.push({type:"add",date:"",name:"",address:"",id:t,disable:""}),this.$nextTick((function(){e.$refs.singleTable.bodyWrapper.scrollTop=e.$refs.singleTable.bodyWrapper.scrollHeight}))},sort:function(){this.setSort()},setSort:function(){var e=this,t=this.$refs.singleTable.$el.querySelectorAll(".el-table__body-wrapper > table > tbody")[0];this.sortable=i.ZP.create(t,{ghostClass:"sortable-ghost",setData:function(e){e.setData("Text","")},onEnd:function(t){var a=e.tableData.splice(t.oldIndex,1)[0];e.tableData.splice(t.newIndex,0,a)}})},shuffle:function(){this.sortList=this.$shuffle(this.sortList)},dragstart:function(e){this.dragIndex=e},dragenter:function(e,t){if(e.preventDefault(),this.dragIndex!==t){var a=this.sortList[this.dragIndex];this.sortList.splice(this.dragIndex,1),this.sortList.splice(t,0,a),this.dragIndex=t}},dragover:function(e){e.preventDefault()},objectSpanMethod:function(e){var t=e.row,a=e.columnIndex;if(2===a&&void 0==t.no)return{rowspan:"2",colspan:"2"}}}},c=d,u=a(43736),h=(0,u.Z)(c,o,s,!1,null,"6dfa0a05",null),m=h.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"child"},[a("h4",[e._v("this is child component")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{type:"text"},domProps:{value:e.message},on:{keyup:e.send,input:function(t){t.target.composing||(e.message=t.target.value)}}}),a("p",[e._v("收到来自父组件的消息："+e._s(e.messageFromParent))]),a("p",[e._v("子组件vuex的值："+e._s(e.hellovalue))])])},f=[],b={name:"HelloWorld",props:["messageFromParent"],data:function(){return{message:"子组件传递的值"}},methods:{send:function(){this.$emit("receive",this.message),this.$store.commit("newHello",this.message)}},computed:{hellovalue:function(){return this.$store.state.hello}}},v=b,g=(0,u.Z)(v,p,f,!1,null,"2037f26e",null),w=g.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ul",[a("li",{key:e.copyList.index},[e._v(e._s(e.copyList.name))])]),a("div",[e.list.length>1?a("el-button",{attrs:{disabled:"0"==e.copyList.index},on:{click:e.first}},[e._v("上一张")]):e._e(),e.copyList.index==e.list[e.list.length-1].index?a("el-button",[e._v("提交")]):e._e(),a("el-button",[e._v("返回")]),e.list.length>1?a("el-button",{attrs:{disabled:e.copyList.index==e.list[e.list.length-1].index},on:{click:e.next}},[e._v("下一张")]):e._e()],1),a("div",{staticStyle:{width:"600px",height:"400px"},attrs:{id:"zhuzhuangtu"}}),a("ul",{staticClass:"aaa"},e._l(e.list1,(function(t,n){return a("li",{key:n,class:{color:n==e.ins}},[e._v(e._s(t.name))])})),0),a("button",{on:{click:e.rrr}},[e._v("上")]),a("button",{on:{click:e.xxxxx}},[e._v("下")])])},_=[],y=(a(9653),a(47042),a(68309),{data:function(){return{ins:0,list:[{name:"结算单",index:"0"},{name:"结算单",index:"1"},{name:"结算单",index:"2"},{name:"结算单",index:"3"}],list1:[{name:"结算单",index:"0"},{name:"结算单",index:"1"},{name:"结算单",index:"2"},{name:"结算单",index:"3"}],copyList:[]}},mounted:function(){this.copyList=this.list[0],this.linCharts()},methods:{xxxxx:function(){this.ins+=1},rrr:function(){this.ins-=1},first:function(){var e=Number(this.copyList.index)-1;console.log(e),this.copyList=this.list[e]},next:function(){var e=Number(this.copyList.index)+1;console.log(e),this.copyList=this.list[e]},linCharts:function(){var e=this.$echarts.init(document.getElementById("zhuzhuangtu")),t={tooltip:{trigger:"item",formatter:function(e){var t=e.data.name.slice(0,4)+"：￥"+e.data.value;return t}},color:["rgb(251,188,0)","rgb(83,157,250)","rgb(147,76,244)"],series:[{type:"pie",roseType:"radius",radius:"55%",data:[{value:400,name:"商品金额:￥400"},{value:300,name:"相关费用:￥300"},{value:150,name:"平台佣金:￥150"}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};e.setOption(t)}}}),k=y,C=(0,u.Z)(k,x,_,!1,null,"03c1c7db",null),S=C.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{loading:e.loading}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData1,"row-key":"id",border:"",lazy:"",load:e.load,"tree-props":{children:"children",hasChildren:"hasChildren"}}},[a("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),a("el-table-column",{attrs:{prop:"address",label:"地址"}}),a("el-table-column",{attrs:{label:"地址"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.edit(t.row)}}},[e._v("编辑")])]}}])})],1),a("h2",[e._v("生成二维码")]),a("el-button",{attrs:{type:"primary"},on:{click:e.btnClick}},[e._v("生成")]),a("el-button",{attrs:{type:"primary"},on:{click:e.btnClear}},[e._v("清空")]),a("br"),e.isShow?a("span",{ref:"qrCodeUrl",staticClass:"qrcode"}):e._e()],1)},L=[],$=a(52308),D=a.n($),O={data:function(){return{tableData1:[{id:1,date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{id:2,date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{id:3,date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄",hasChildren:!0},{id:4,date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄",hasChildren:!0}],url:"https://www.baidu.com",isShow:!1,loading:!1}},methods:{btnClear:function(){this.isShow=!1},btnClick:function(){var e=this;this.isShow=!0,this.loading=!0,setTimeout((function(){e.createQrCode(),e.loading=!1}),1e3)},createQrCode:function(){var e=new(D())(this.$refs.qrCodeUrl,{text:this.url,width:200,height:200,colorDark:"black",colorLight:"white"}),t=new Image;t.crossOrigin="Anonymous",t.src="https://img2.baidu.com/it/u=3765512519,3278388264&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",t.onload=function(){var a=e._el.getElementsByTagName("img")[0],n=e._el.getElementsByTagName("canvas")[0],l=n.getContext("2d");l.drawImage(t,80,80,40,40),a.src=n.toDataURL(),t=null}},load:function(e,t,a){console.log(e),console.log(t),setTimeout((function(){a([{id:31,date:"2016-05-01",name:"王小王",address:"上海市普陀区金沙江路 1519 弄"}])}),1e3)},edit:function(e){console.log(e)}}},H=O,I=(0,u.Z)(H,T,L,!1,null,"a55ee4f6",null),P=I.exports,E={name:"App",components:{HelloTwo:m,HelloWorld:w,HelloThree:S,HelloAa:P},data:function(){return{message:"父组件想要传递的值",messageFromChild:""}},methods:{receive:function(e){this.messageFromChild=e}},computed:{hellovalue:function(){return this.$store.state.hello}}},j=E,Z=(0,u.Z)(j,l,r,!1,null,null,null),M=Z.exports,z=a(34665);n["default"].use(z.ZP);var F=new z.ZP.Store({state:{hello:"hello 你好"},mutations:{newHello:function(e,t){e.hello=t}}}),N=F,A=a(74549),W=a.n(A),q=a(84759),B=a.n(q);n["default"].use(z.ZP),n["default"].use(W(),{size:"small",zIndex:3e3}),n["default"].config.productionTip=!1,n["default"].prototype.$echarts=B(),new n["default"]({store:N,render:function(e){return e(M)}}).$mount("#app")}},t={};function a(n){var l=t[n];if(void 0!==l)return l.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,n,l,r){if(!n){var o=1/0;for(c=0;c<e.length;c++){n=e[c][0],l=e[c][1],r=e[c][2];for(var s=!0,i=0;i<n.length;i++)(!1&r||o>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[i])}))?n.splice(i--,1):(s=!1,r<o&&(o=r));if(s){e.splice(c--,1);var d=l();void 0!==d&&(t=d)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[n,l,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,r,o=n[0],s=n[1],i=n[2],d=0;if(o.some((function(t){return 0!==e[t]}))){for(l in s)a.o(s,l)&&(a.m[l]=s[l]);if(i)var c=i(a)}for(t&&t(n);d<o.length;d++)r=o[d],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(c)},n=self["webpackChunktest1"]=self["webpackChunktest1"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(67319)}));n=a.O(n)})();