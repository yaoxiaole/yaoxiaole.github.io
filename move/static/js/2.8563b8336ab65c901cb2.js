webpackJsonp([2],{A6cU:function(t,e){},wHgX:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{detail:[]}},mounted:function(){var t=this,e=this.$route.params.id;this.$axios.get("/api/movie/subject/"+e).then(function(e){t.detail=e.data}).catch(function(t){console.log(t)})},computed:{reversedMessage:function(){for(var t=[],e=0;e<this.detail.casts.length;e++)t.push(this.detail.casts[e].name);return t.join(" ")},moveType:function(){for(var t=[],e=0;e<this.detail.genres.length;e++)t.push(this.detail.genres[e]);return t.join(" ")}},methods:{goBack:function(){history.back()}}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"detail"}},[i("div",[i("p",[i("img",{attrs:{src:t.detail.images.small,alt:"",width:"100%",height:"300"}})]),t._v(" "),i("h3",[t._v("片名："+t._s(t.detail.original_title))]),t._v(" "),i("h3",[t._v("导演："+t._s(t.detail.directors[0].name))]),t._v(" "),i("h3",[t._v("主演："+t._s(t.reversedMessage))]),t._v(" "),i("h3",[t._v("类型:"+t._s(t.moveType)+" ")]),t._v(" "),i("h3",[t._v("年份："+t._s(t.detail.year)+" ")]),t._v(" "),i("h3",[t._v("上映地区："+t._s(t.detail.countries[0]))]),t._v(" "),i("h3",[t._v("影片简介："+t._s(t.detail.summary))]),t._v(" "),i("yd-button",{attrs:{type:"primary",size:"large"},nativeOn:{click:function(e){return t.goBack(e)}}},[t._v("返回")])],1)])},staticRenderFns:[]};var s=i("VU/8")(a,n,!1,function(t){i("A6cU")},null,null);e.default=s.exports}});
//# sourceMappingURL=2.8563b8336ab65c901cb2.js.map