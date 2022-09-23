(function(){"use strict";var t={277:function(t,e,n){var i=n(144),r=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row"},[e("Banner")],1),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-2 col-xs-offset-2"},[e("div",{staticClass:"list-group"},[e("router-link",{staticClass:"list-group-item",attrs:{replace:!0,"active-class":"active",to:{name:"guanyu"}}},[t._v("About")]),e("router-link",{staticClass:"list-group-item",attrs:{replace:"","active-class":"active",to:"/home"}},[t._v("Home")])],1)]),e("div",{staticClass:"col-xs-6"},[e("div",{staticClass:"panel"},[e("div",{staticClass:"panel-body"},[e("router-view")],1)])])])])},o=[],s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-xs-offset-2 col-xs-8"},[e("div",{staticClass:"page-header"},[e("h2",[t._v("Vue Router Demo")]),e("button",{on:{click:t.back}},[t._v("后退")]),e("button",{on:{click:t.forward}},[t._v("前进")]),e("button",{on:{click:t.test}},[t._v("测试go")])])])},l=[],a={name:"Banner",methods:{back(){this.$router.back()},forward(){this.$router.forward()},test(){this.$router.go()}}},u=a,c=n(1),v=(0,c.Z)(u,s,l,!1,null,null,null),p=v.exports,f={name:"App",components:{Banner:p}},h=f,d=(0,c.Z)(h,r,o,!1,null,null,null),m=d.exports,_=n(345),g=function(){var t=this,e=t._self._c;return e("h2",[t._v("我是About的内容")])},w=[],b={name:"About",mounted(){console.log("About组件挂载完毕",this)},beforeRouteEnter(t,e,n){console.log(""),n()},beforeRouteLeave(t,e,n){console.log()}},y=b,x=(0,c.Z)(y,g,w,!1,null,null,null),k=x.exports,C=function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v("Home组件内容")]),e("div",[e("ul",{staticClass:"nav nav-tabs"},[e("li",[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/news"}},[t._v("News")])],1),e("li",[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/message"}},[t._v("Message")])],1)]),e("keep-alive",{attrs:{include:["News","Message"]}},[e("router-view")],1)],1)])},Z=[],O={name:"Home"},q=O,A=(0,c.Z)(q,C,Z,!1,null,null,null),P=A.exports,$=function(){var t=this,e=t._self._c;return e("ul",[e("li",{style:{opacity:t.opacity}},[t._v("欢迎学习Vue")]),t._m(0),t._m(1),t._m(2)])},j=[function(){var t=this,e=t._self._c;return e("li",[t._v("news001 "),e("input",{attrs:{type:"text"}})])},function(){var t=this,e=t._self._c;return e("li",[t._v("news002 "),e("input",{attrs:{type:"text"}})])},function(){var t=this,e=t._self._c;return e("li",[t._v("news003 "),e("input",{attrs:{type:"text"}})])}],H={name:"News",data(){return{a:!1,opacity:1}},activated(){this.timer=setInterval((()=>{console.log("@"),this.opacity-=.01,this.opacity<=0&&(this.opacity=1)}))},deactivated(){console.log("失活"),clearInterval(this.timer)}},S=H,B=(0,c.Z)(S,$,j,!1,null,null,null),L=B.exports,M=function(){var t=this,e=t._self._c;return e("div",[e("ul",t._l(t.messageList,(function(n){return e("li",{key:n.id},[e("router-link",{attrs:{to:{name:"xiangqing",query:{id:n.id,title:n.title}}}},[t._v(" "+t._s(n.title)+" ")]),e("button",{on:{click:function(e){return t.pushShow(n)}}},[t._v("push 查看")]),e("button",{on:{click:function(e){return t.replaceShow(n)}}},[t._v("replace 查看")])],1)})),0),e("hr"),e("router-view")],1)},N=[],R={name:"Message",data(){return{messageList:[{id:"001",title:"消息001"},{id:"002",title:"消息002"},{id:"003",title:"消息003"}]}},methods:{pushShow(t){this.$router.push({name:"xiangqing",query:{id:t.id,title:t.title}})},replaceShow(t){this.$router.replace({name:"xiangqing",query:{id:t.id,title:t.title}})}}},T=R,D=(0,c.Z)(T,M,N,!1,null,null,null),E=D.exports,I=function(){var t=this,e=t._self._c;return e("ul",[e("li",[t._v("消息编号："+t._s(t.id))]),e("li",[t._v("消息标题："+t._s(t.title))])])},V=[],z={name:"Detail",props:["id","title"],mounted(){console.log("Home组件挂载完毕了",this.$route)}},F=z,G=(0,c.Z)(F,I,V,!1,null,null,null),J=G.exports;const K=new _.ZP({mode:"history",routes:[{name:"guanyu",path:"/about",component:k,meta:{isAuth:!0,title:"关于"}},{path:"/home",name:"zhuye",component:P,meta:{title:"主页"},children:[{path:"news",name:"xinwen",component:L,meta:{isAuth:!0,title:"新闻"}},{path:"message",name:"xiaoxi",component:E,meta:{isAuth:!0,title:"消息"},children:[{name:"xiangqing",path:"detail/:id/:title",component:J,props({query:{id:t,title:e}}){return{id:t,title:e}}}]}]}]});var Q=K;i.ZP.config.productionTip=!1,i.ZP.use(_.ZP),new i.ZP({render:t=>t(m),router:Q}).$mount("#app")}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,i,r,o){if(!i){var s=1/0;for(c=0;c<t.length;c++){i=t[c][0],r=t[c][1],o=t[c][2];for(var l=!0,a=0;a<i.length;a++)(!1&o||s>=o)&&Object.keys(n.O).every((function(t){return n.O[t](i[a])}))?i.splice(a--,1):(l=!1,o<s&&(s=o));if(l){t.splice(c--,1);var u=r();void 0!==u&&(e=u)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[i,r,o]}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,o,s=i[0],l=i[1],a=i[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(a)var c=a(n)}for(e&&e(i);u<s.length;u++)o=s[u],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(c)},i=self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(277)}));i=n.O(i)})();
//# sourceMappingURL=app.494c2407.js.map