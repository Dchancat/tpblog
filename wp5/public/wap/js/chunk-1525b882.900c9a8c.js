(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1525b882"],{"48a3":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"group_detail"},[s("navbar",{attrs:{text:t.eventinfo.title}}),s("scroller",[s("div",{staticClass:"detail_card"},[s("div",{staticClass:"active_img"},[s("div",{staticClass:"active_tag"},[t._v(t._s(t.eventinfo.member_limit)+"人团")]),s("img",{staticClass:"good_img",attrs:{src:t.goods.cover}})]),s("div",{staticClass:"active_time"},[s("div",[2==t.group.status?s("span",[s("span",{staticClass:"active_price"},[t._v("拼团失败")]),s("span",{staticClass:"countdown"},[t._v("该团已给微信提交退款申请")])]):2!=t.group.status&&0!=t.group.need_count?s("span",[s("span",{staticClass:"active_price"},[t._v("已开团，还差"+t._s(t.group.need_count)+"人成团--")]),s("span",{staticClass:"countdown"},[t._v("剩余时间:"+t._s(t.str))])]):2!=t.group.status&&0==t.group.need_count?s("span",[s("span",{staticClass:"active_price"},[t._v("赞！开团成功！")]),s("span",{staticClass:"countdown"},[t._v("商家会尽快为你发货")])]):t._e()])]),s("div",{staticClass:"good_detail"},[s("p",{staticClass:"red active_price"},[s("span",{staticClass:"price-icon"},[t._v("¥"+t._s(t.goods.sale_price))])]),s("p",{staticClass:"cost_price"},[s("small",{staticClass:"tag"},[t._v("拼团价")]),s("br"),s("del",{staticClass:"market_price"},[s("span",{staticClass:"prize-icon"},[t._v("¥")]),t._v("原价"+t._s(t.goods.market_price))])]),s("p",{staticClass:"good_name"},[t._v(t._s(t.goods.title))]),s("router-link",{staticClass:"red",attrs:{to:"/collage/instruction/"+t.eventinfo.id}},[t._v("活动说明"),s("i",{staticClass:"iconfont icon-warning1 f12 f-ml-base"})])],1)]),null!=t.memberlists?s("div",{staticClass:"attendance_record"},[s("h4",{staticClass:"attendance_record_title"},[t._v("参团记录")]),t._l(t.memberlists,function(e,i){return 1==e.is_pay?s("div",{key:i,staticClass:"attendance_record_content"},[s("div",{staticClass:"record_header"},[s("img",{staticClass:"headimgurl",attrs:{src:e.headimgurl}})]),e.uid==t.group.uid?s("div",{staticClass:"record_content"},[s("p",[t._v(t._s(e.nickname)+"\n            "),s("span",{staticClass:"tag"},[t._v("团长")])]),s("p",{staticClass:"record_time"},[s("small",[t._v(t._s(e.create_time_str)+"开团")])])]):s("div",{staticClass:"record_content"},[s("p",[t._v(t._s(e.nickname)+"\n            "),s("span",{staticClass:"tag-b"},[t._v("团员")])]),s("p",{staticClass:"record_time"},[s("small",[t._v(t._s(e.create_time_str)+"参团")])])]),s("div",{staticClass:"clear"})]):t._e()})],2):t._e()]),0==t.group.need_count?s("div",{staticClass:"bottom-btn"},[s("a",{staticClass:"go_collage",on:{click:t.gocollage}},[t._v("我要开团")])]):0!=t.group.need_count&&0==t.orderid?s("div",{staticClass:"bottom-btn"},[s("a",{staticClass:"join_collage",on:{click:t.joincollage}},[t._v("我要参团")])]):0!=t.orderid?s("div",{staticClass:"bottom-btn"},[s("a",{staticClass:"view_order",on:{click:t.vieworder}},[t._v("查看订单详情")]),s("button",{staticClass:"invite_friends",on:{click:t.find_help}},[t._v("邀请好友参团")])]):t._e(),s("transition",{attrs:{name:"fade"}},[t.show?s("div",{staticClass:"dialog",on:{click:function(e){t.show=!1}}},[s("div",{staticClass:"share_tips"},[s("img",{attrs:{src:"https://leyao.tv/yi/images/share_tips.png"}})])]):t._e()])],1)},a=[],o=(s("ff66"),s("ea23"),s("dbff"),s("ed08")),r=s("fade"),c=s("9d8d"),n={data:function(){return{cd:{day:0,hour:0,min:0,sec:0,starttime:0,endtime:0,nowtime:0},createtime:"",str:"",userdata:[],eventinfo:{},goods:{},group:{},groupid:0,memberlists:[{}],orderid:0,show:!1}},components:{navbar:c["a"]},methods:{gocollage:function(){var t=this;Object(o["h"])(o["g"]+"/collage/Api/buy_now",{goods_id:this.goods.id,PHPSESSID:window.localStorage.getItem("PHPSESSID")}).then(function(e){if(0==e.code)Object(r["d"])(e.msg);else{var s=/goods_id\/(\d+)\/event_type\/(\d+)\/event_id\/(\d+)\/pbid\/(\d+)/.exec(e.url),i=s[1],a=s[2],o=s[3],c=s[4],n=t.goods.sale_price,d={goods_id:i,event_type:a,event_id:o,pbid:c,activePrice:n,PHPSESSID:window.localStorage.getItem("PHPSESSID")};t.$store.commit("saveData",{key:"activeOrderParams",value:JSON.stringify(d)}),t.$router.push("/confirm_order/"+t.goods.goods_id)}})},joincollage:function(){var t=this;Object(o["h"])(o["g"]+"/collage/Api/buy_now",{goods_id:this.goods.id,group_id:this.groupid,PHPSESSID:window.localStorage.getItem("PHPSESSID")}).then(function(e){if(0==e.code)Object(r["d"])(e.msg);else{var s=/goods_id\/(\d+)\/event_type\/(\d+)\/event_id\/(\d+)\/pbid\/(\d+)/.exec(e.url),i=s[1],a=s[2],o=s[3],c=s[4],n=t.goods.sale_price,d={goods_id:i,event_type:a,event_id:o,pbid:c,activePrice:n,PHPSESSID:window.localStorage.getItem("PHPSESSID")};t.$store.commit("saveData",{key:"activeOrderParams",value:JSON.stringify(d)}),t.$router.push("/confirm_order/"+t.goods.goods_id)}})},vieworder:function(){this.$router.push("/order_detail/"+this.orderid)},cdtime:function(){var t=this;setInterval(function(){var e=t.group.left_time--,s=parseInt(e/60/60/24),i=parseInt(e/60/60%24),a=parseInt(e/60%60),o=parseInt(e%60);t.str=s+"天"+i+":"+a+":"+o},1e3)},getData:function(t){},find_help:function(){this.show=!this.show},formatDate:function(){}},computed:{memberlistsData:function(){return this.memberlists}},created:function(){var t=this,e=this.$route.params.id,s=window.localStorage.getItem("pbid");this.userdata=JSON.parse(window.localStorage.getItem("userInfo")),Object(o["h"])(o["g"]+"/collage/Api/group_detail",{id:e,PHPSESSID:window.localStorage.getItem("PHPSESSID")}).then(function(e){if(0==e.code)Object(r["d"])(e.msg);else{t.eventinfo=e.event_info,t.goods=e.goods,t.group=e.group,t.groupid=e.group_id,t.memberlists=e.member_lists,t.orderid=e.order_id;t.userdata.nickName;var i=e.goods.title,a=e.goods.cover,c={title:i,desc:"邀请您参加拼团",link:"https://leyao.tv/yi/public/wap/index.html?pbid="+s+"#/collage/group_detail/"+t.groupid,imgUrl:a,type:"link"};Object(o["f"])(c)}}),this.cdtime()}},d=n,l=(s("eaae"),s("048f")),_=Object(l["a"])(d,i,a,!1,null,"53e706e6",null);_.options.__file="index.vue";e["default"]=_.exports},"7a79":function(t,e,s){},eaae:function(t,e,s){"use strict";var i=s("7a79"),a=s.n(i);a.a}}]);
//# sourceMappingURL=chunk-1525b882.900c9a8c.js.map