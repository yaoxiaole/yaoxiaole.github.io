webpackJsonp([0],{163:function(e,l,t){function s(e){t(172)}var r=t(6)(t(165),t(170),s,"data-v-221fef54",null);e.exports=r.exports},165:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var s=t(12),r=t.n(s),i=t(51),a=t.n(i);l.default={data:function(){return{collection:!1}},props:{seller:{type:Object,default:function(){return{}}},foods:{type:Array}},methods:{clickCollection:function(){this.collection=!this.collection},initScroll:function(){this.scroll?this.scroll.refresh():this.scroll=new r.a(this.$refs.seller,{click:!0})},initPics:function(){this.$refs.pic.style.width=126*this.seller.pics.length-6,this.picScroll?this.picScroll.refresh():this.picScroll=new r.a(this.$refs.picswarp,{scrollX:!0,eventPassthrough:"vertical"})}},computed:{collectionText:function(){return this.collection?"已收藏":"收藏"},countSellCount:function(){var e=0;return this.foods.forEach(function(l){l.foods.forEach(function(l){e+=l.sellCount})}),e}},mounted:function(){this.$nextTick(function(){this.initScroll(),this.initPics()})},components:{"v-ShopCar":a.a}}},167:function(e,l,t){l=e.exports=t(3)(),l.push([e.i,'.seller[data-v-221fef54]{position:fixed;top:176px;bottom:0;width:100%;overflow:hidden;z-index:9}.seller .seller-warp .seller-des[data-v-221fef54]{padding:18px}.seller .seller-warp .seller-des .seller-header[data-v-221fef54]{padding-bottom:18px;position:relative}.seller .seller-warp .seller-des .seller-header[data-v-221fef54]:after{display:block;width:100%;position:absolute;left:0;bottom:0;border-top:1px solid rgba(7,17,27,.1);content:""}.seller .seller-warp .seller-des .seller-header h2[data-v-221fef54]{font-size:14px;color:#07111b}.seller .seller-warp .seller-des .seller-header .el-rate[data-v-221fef54]{display:inline-block;margin:8px 0 0}.seller .seller-warp .seller-des .seller-header .sellCount[data-v-221fef54]{display:inline-block;font-size:0;padding-top:10px}.seller .seller-warp .seller-des .seller-header .sellCount span[data-v-221fef54]{font-size:10px;color:#4d555d}.seller .seller-warp .seller-des .seller-header .sellCount .s1[data-v-221fef54]{margin-left:12px}.seller .seller-warp .seller-des .seller-header .collection[data-v-221fef54]{position:absolute;top:0;right:0;text-align:center}.seller .seller-warp .seller-des .seller-header .collection .icon-favorite[data-v-221fef54]{font-size:24px;color:#4d555d}.seller .seller-warp .seller-des .seller-header .collection .icon-favorite.active[data-v-221fef54]{color:#f01414}.seller .seller-warp .seller-des .seller-header .collection p[data-v-221fef54]{margin-top:4px;font-size:10px;color:#4d555d}.seller .seller-warp .seller-des .seller-bottom[data-v-221fef54]{padding-top:18px;display:flex}.seller .seller-warp .seller-des .seller-bottom .item[data-v-221fef54]{flex:1;text-align:center;font-size:0}.seller .seller-warp .seller-des .seller-bottom .item p[data-v-221fef54]{margin-bottom:4px;font-size:10px;color:#93999f}.seller .seller-warp .seller-des .seller-bottom .item span[data-v-221fef54]{font-size:24px;font-weight:200;color:#07111b}.seller .seller-warp .seller-des .seller-bottom .item b[data-v-221fef54]{font-size:10px}.seller .seller-warp .seller-des .seller-bottom .deliveryPrice[data-v-221fef54],.seller .seller-warp .seller-des .seller-bottom .minPrice[data-v-221fef54]{border-right:1px solid rgba(7,17,27,.1)}.seller .seller-warp .bg[data-v-221fef54]{width:100%;height:16px;background:#f3f5f7;border-top:1px solid rgba(7,17,27,.1);border-bottom:1px solid rgba(7,17,27,.1)}.seller .seller-warp .notice[data-v-221fef54]{padding:18px 18px 0}.seller .seller-warp .notice .notice-warp[data-v-221fef54]{border-bottom:1px solid rgba(7,17,27,.1)}.seller .seller-warp .notice .notice-warp h2[data-v-221fef54]{font-size:14px;color:#07111b}.seller .seller-warp .notice .notice-warp .notice-info[data-v-221fef54]{padding:0 12px;margin-top:8px}.seller .seller-warp .notice .notice-warp .notice-info p[data-v-221fef54]{font-size:12px;font-weight:200;line-height:24px;color:#f01414}.seller .seller-warp .item-list[data-v-221fef54]{padding:0 18px}.seller .seller-warp .item-list .item[data-v-221fef54]{height:48px;padding:0 12px;line-height:48px;position:relative}.seller .seller-warp .item-list .item[data-v-221fef54]:after{display:block;width:100%;position:absolute;left:0;bottom:0;border-top:1px solid rgba(7,17,27,.1);content:""}.seller .seller-warp .item-list .item[data-v-221fef54]:last-child:after{display:none}.seller .seller-warp .item-list .item img[data-v-221fef54]{vertical-align:top;margin-top:16px}.seller .seller-warp .item-list .item span[data-v-221fef54]{font-size:12px;font-weight:200;color:#07111b;margin-left:6px;vertical-align:top}.seller .seller-warp .seller-img[data-v-221fef54]{padding:18px}.seller .seller-warp .seller-img h2[data-v-221fef54]{font-size:14px;color:#07111b}.seller .seller-warp .seller-img .img-warp[data-v-221fef54]{margin-top:12px;width:100%;overflow:hidden;white-space:nowrap}.seller .seller-warp .seller-img .img-warp .item-img[data-v-221fef54]{display:inline-block;margin-right:6px}.seller .seller-warp .seller-img .img-warp .item-img[data-v-221fef54]:last-child{margin-right:0}.seller .seller-warp .seller-info[data-v-221fef54]{padding:18px}.seller .seller-warp .seller-info h2[data-v-221fef54]{font-size:14px;color:#07111b}.seller .seller-warp .seller-info ul[data-v-221fef54]{margin-top:12px}.seller .seller-warp .seller-info ul li[data-v-221fef54]{white-space:warp;height:16px;padding:16px 12px;color:#07111b;font-size:12px;font-weight:200;position:relative;line-height:16px}.seller .seller-warp .seller-info ul li[data-v-221fef54]:after{display:block;width:100%;position:absolute;left:0;bottom:0;border-top:1px solid rgba(7,17,27,.1);content:""}.seller .seller-warp .seller-info ul li[data-v-221fef54]:last-child:after{display:none}.seller .seller-warp .seller-info ul li[data-v-221fef54]:first-child{border-top:1px solid rgba(7,17,27,.1)}',""])},168:function(e,l,t){e.exports=t.p+"decrease_2@2x.png?b66f67c6bed9f38a718257fb0b266606"},170:function(e,l,t){e.exports={render:function(){var e=this,l=e.$createElement,s=e._self._c||l;return s("div",{ref:"seller",staticClass:"seller"},[s("div",{staticClass:"seller-warp"},[s("div",{staticClass:"seller-des"},[s("div",{staticClass:"seller-header"},[s("h2",[e._v(e._s(e.seller.name))]),e._v(" "),s("el-rate",{staticClass:"score",attrs:{disabled:"","text-color":"#f90","text-template":"{value}"},model:{value:e.seller.score,callback:function(l){e.seller.score=l},expression:"seller.score"}}),e._v(" "),s("div",{staticClass:"sellCount"},[s("span",[e._v("("+e._s(e.seller.ratingCount)+")")]),e._v(" "),s("span",{staticClass:"s1"},[e._v("月售"+e._s(e.countSellCount)+"单")])]),e._v(" "),s("div",{staticClass:"collection"},[s("i",{staticClass:"icon-favorite",class:{active:e.collection},on:{click:e.clickCollection}}),e._v(" "),s("p",[e._v(e._s(e.collectionText))])])],1),e._v(" "),s("div",{staticClass:"seller-bottom"},[s("div",{staticClass:"minPrice item"},[s("p",[e._v("起送价")]),e._v(" "),s("span",[e._v(e._s(e.seller.minPrice))]),e._v(" "),s("b",[e._v("元")])]),e._v(" "),s("div",{staticClass:"deliveryPrice item"},[s("p",[e._v("商家配送")]),e._v(" "),s("span",[e._v(e._s(e.seller.deliveryPrice))]),e._v(" "),s("b",[e._v("元")])]),e._v(" "),s("div",{staticClass:"deliveryTime item"},[s("p",[e._v("平均配送时间")]),e._v(" "),s("span",[e._v(e._s(e.seller.deliveryTime))]),e._v(" "),s("b",[e._v("分钟")])])])]),e._v(" "),s("div",{staticClass:"bg"}),e._v(" "),s("div",{staticClass:"notice"},[s("div",{staticClass:"notice-warp"},[s("h2",[e._v("公告与活动")]),e._v(" "),s("div",{staticClass:"notice-info"},[s("p",[e._v(e._s(e.seller.bulletin))])])])]),e._v(" "),s("ul",{staticClass:"item-list"},e._l(e.seller.supports,function(l,r){return s("li",{key:r,staticClass:"item"},[s("img",{attrs:{src:t(168),alt:"",width:"16",height:"16"}}),s("span",[e._v(e._s(l.description))])])})),e._v(" "),s("div",{staticClass:"bg"}),e._v(" "),s("div",{staticClass:"seller-img"},[s("h2",[e._v("商家实景")]),e._v(" "),s("div",{ref:"picswarp",staticClass:"img-warp"},[s("ul",{ref:"pic"},e._l(e.seller.pics,function(l,t){return s("li",{key:t,staticClass:"item-img"},[s("img",{attrs:{src:e.seller.pics[t],alt:"",width:"120",height:"90"}})])}))])]),e._v(" "),s("div",{staticClass:"bg"}),e._v(" "),s("div",{staticClass:"seller-info"},[s("h2",[e._v("商家信息")]),e._v(" "),s("ul",e._l(e.seller.infos,function(l,t){return s("li",{key:t},[e._v("\n\t\t\t\t\t"+e._s(l)+"\n\t\t\t\t")])}))])])])},staticRenderFns:[]}},172:function(e,l,t){var s=t(167);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);t(7)("33ccda8e",s,!0)}});
//# sourceMappingURL=0.build.js.map