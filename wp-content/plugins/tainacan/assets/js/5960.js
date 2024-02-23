"use strict";(self.webpackChunktainacan=self.webpackChunktainacan||[]).push([[5960],{88534:(a,n,t)=>{t.d(n,{Z:()=>c});var e=t(3176),i=t(58751),o=t.n(i);const c={name:"ViewModeMasonry",mixins:[e.N],data:function(){return{masonry:!1,shouldUseLegacyMasonyCols:!1}},watch:{isLoading:{handler:function(){var a=this;this.items&&this.items.length>0&&!this.isLoading&&this.$nextTick((function(){!1!==a.masonry&&a.masonry.destroy(),a.masonry=new(o())(".tainacan-masonry-container",{itemSelector:"li",columnWidth:".tainacan-masonry-grid-sizer",gutter:25,percentPosition:!0})}))},immediate:!0}},created:function(){this.shouldUseLegacyMasonyCols=void 0!==wp&&void 0!==wp.hooks&&wp.hooks.hasFilter("tainacan_use_legacy_masonry_view_mode_cols")&&wp.hooks.applyFilters("tainacan_use_legacy_masonry_view_mode_cols",!1)},beforeDestroy:function(){!1!==this.masonry&&this.masonry.destroy()},methods:{randomHeightForMasonryItem:function(){return Math.floor(261*Math.random()+120)}}}},36354:(a,n,t)=>{t.d(n,{s:()=>e,x:()=>i});var e=function(){var a=this,n=a._self._c;return n("div",{staticClass:"table-container"},[n("div",{staticClass:"table-wrapper"},[a._t("default"),a._v(" "),a.isLoading?n("div",{staticClass:"tainacan-masonry-container--skeleton",class:{"tainacan-masonry-container--legacy":a.shouldUseLegacyMasonyCols}},a._l(12,(function(t){return n("div",{key:t,staticClass:"skeleton",style:{"min-height":a.randomHeightForMasonryItem()+"px"}})})),0):a._e(),a._v(" "),a.isLoading?a._e():n("ul",{staticClass:"tainacan-masonry-container",class:{"tainacan-masonry-container--legacy":a.shouldUseLegacyMasonyCols}},a._l(a.items,(function(t,e){return n("li",{key:e,class:{"tainacan-masonry-grid-sizer":0==e},attrs:{"data-tainacan-item-id":t.id,"aria-setsize":a.totalItems,"aria-posinset":a.getPosInSet(e)}},[n("a",{staticClass:"tainacan-masonry-item",attrs:{href:a.getItemLink(t.url,e)}},[a.hasBeforeHook()?n("div",{staticClass:"faceted-search-hook faceted-search-hook-item-before",domProps:{innerHTML:a._s(a.getBeforeHook(t))}}):a._e(),a._v(" "),n("div",{staticClass:"metadata-title"},[n("p",{domProps:{innerHTML:a._s(null!=t.title?t.title:"")}}),a._v(" "),a.isSlideshowViewModeEnabled?n("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{delay:{shown:500,hide:100},content:a.$i18n.get("label_see_on_fullscreen"),placement:"auto-start",popperClass:["tainacan-tooltip","tooltip"]},expression:"{\n                                    delay: {\n                                        shown: 500,\n                                        hide: 100,\n                                    },\n                                    content: $i18n.get('label_see_on_fullscreen'),\n                                    placement: 'auto-start',\n                                    popperClass: ['tainacan-tooltip', 'tooltip']\n                                }"}],staticClass:"icon slideshow-icon",on:{click:function(n){return n.preventDefault(),a.starSlideshowFromHere(e)}}},[n("i",{staticClass:"tainacan-icon tainacan-icon-viewgallery tainacan-icon-1-125em"})]):a._e()]),a._v(" "),null!=t.thumbnail?n("blur-hash-image",{staticClass:"tainacan-masonry-item-thumbnail",attrs:{width:a.$thumbHelper.getWidth(t.thumbnail,a.shouldUseLegacyMasonyCols?"tainacan-medium-full":"tainacan-large-full",280),height:a.$thumbHelper.getHeight(t.thumbnail,a.shouldUseLegacyMasonyCols?"tainacan-medium-full":"tainacan-large-full",280),hash:a.$thumbHelper.getBlurhashString(t.thumbnail,a.shouldUseLegacyMasonyCols?"tainacan-medium-full":"tainacan-large-full"),src:a.$thumbHelper.getSrc(t.thumbnail,a.shouldUseLegacyMasonyCols?"tainacan-medium-full":"tainacan-large-full",t.document_mimetype),srcset:a.$thumbHelper.getSrcSet(t.thumbnail,a.shouldUseLegacyMasonyCols?"tainacan-medium-full":"tainacan-large-full",t.document_mimetype),alt:t.thumbnail_alt?t.thumbnail_alt:a.$i18n.get("label_thumbnail"),"transition-duration":500}}):a._e(),a._v(" "),a.hasAfterHook()?n("div",{staticClass:"faceted-search-hook faceted-search-hook-item-after",domProps:{innerHTML:a._s(a.getAfterHook(t))}}):a._e()],1)])})),0)],2)])},i=[]},3176:(a,n,t)=>{t.d(n,{N:()=>l});var e=t(80129),i=t.n(e);function o(a){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},o(a)}function c(a,n){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),t.push.apply(t,e)}return t}function r(a){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){s(a,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(t,n))}))}return a}function s(a,n,t){return(n=function(a){var n=function(a,n){if("object"!==o(a)||null===a)return a;var t=a[Symbol.toPrimitive];if(void 0!==t){var e=t.call(a,n||"default");if("object"!==o(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(a)}(a,"string");return"symbol"===o(n)?n:String(n)}(n))in a?Object.defineProperty(a,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[n]=t,a}var l={data:function(){return{isSlideshowViewModeEnabled:!1}},props:{collectionId:Number,displayedMetadata:Array,items:{type:Array,default:function(){return[]},required:!0},isLoading:!1,totalItems:Number,isFiltersMenuCompressed:Boolean,enabledViewModes:Array},computed:{queries:function(){var a=JSON.parse(JSON.stringify(this.$route.query));return a&&(delete a.view_mode,delete a.fetch_only,delete a.fetch_only_meta),a},titleItemMetadatum:function(){var a=this.displayedMetadata.find((function(a){return a.display&&a.metadata_type_object&&"title"==a.metadata_type_object.related_mapped_prop}));return a||!1},descriptionItemMetadatum:function(){var a=this.displayedMetadata.find((function(a){return a.display&&a.metadata_type_object&&"description"==a.metadata_type_object.related_mapped_prop}));return a||!1}},mounted:function(){this.isSlideshowViewModeEnabled=!(!this.enabledViewModes||!Array.isArray(this.enabledViewModes))&&this.enabledViewModes.findIndex((function(a){return"slideshow"==a}))>=0},methods:{hasBeforeHook:function(){return void 0!==wp&&void 0!==wp.hooks&&(wp.hooks.hasFilter("tainacan_faceted_search_item_before")||wp.hooks.hasFilter("tainacan_faceted_search_collection_".concat(this.collectionId,"_item_before")))},hasAfterHook:function(){return void 0!==wp&&void 0!==wp.hooks&&(wp.hooks.hasFilter("tainacan_faceted_search_collection_item_after")||wp.hooks.hasFilter("tainacan_faceted_search_collection_".concat(this.collectionId,"_item_after")))},getBeforeHook:function(a){return void 0!==wp&&void 0!==wp.hooks?wp.hooks.applyFilters("tainacan_faceted_search_collection_".concat(this.collectionId,"_item_before"),wp.hooks.applyFilters("tainacan_faceted_search_item_before","",a),a):""},getAfterHook:function(a){return void 0!==wp&&void 0!==wp.hooks?wp.hooks.applyFilters("tainacan_faceted_search_collection_".concat(this.collectionId,"_item_after"),wp.hooks.applyFilters("tainacan_faceted_search_item_after","",a),a):""},getItemLink:function(a,n){return this.queries?(this.queries.pos=(this.queries.paged-1)*this.queries.perpage+n,this.queries.source_list=this.$root.termId?"term":this.$root.collectionId&&"default"!=this.$root.collectionId?"collection":"repository",this.queries.ref=this.$route.path,a+"?"+i().stringify(this.queries)):a},renderMetadata:function(a,n,t){var e=!1;if(a&&a.metadata&&null!=a.metadata[n.slug])e=a.metadata[n.slug];else if(n&&n.metadata_type_object&&n.metadata_type_object.core&&n.metadata_type_object.related_mapped_prop&&a[n.metadata_type_object.related_mapped_prop])return a[n.metadata_type_object.related_mapped_prop];if(!e)return"";if(null!=t&&e.value[t]){if(!Array.isArray(e.value[t])&&e.value[t].value_as_html)return e.value[t].value_as_html;if(Array.isArray(e.value[t])){var i="";return e.value[t].forEach((function(a){a.value_as_html&&(i+=a.value_as_html+"<br>")})),i}}return e.value_as_html},starSlideshowFromHere:function(a){var n=this;this.$router.replace({query:r(r({},this.$route.query),{"slideshow-from":a})}).catch((function(a){return n.$console.log(a)}))},getPosInSet:function(a){if(NaN!==Number(this.queries.paged)&&NaN!==Number(this.queries.perpage))return(Number(this.queries.paged)-1)*Number(this.queries.perpage)+a+1}}}},10461:(a,n,t)=>{t.d(n,{Z:()=>r});var e=t(8081),i=t.n(e),o=t(23645),c=t.n(o)()(i());c.push([a.id,".tainacan-masonry-container[data-v-174cfcb9]{min-height:50vh;margin-left:25px;padding:0;display:flex;flex-wrap:wrap;flex-grow:1;flex-shrink:1;justify-content:space-evenly;list-style:none;animation-name:appear;animation-duration:0.5s}.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>li[data-v-174cfcb9],.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>.tainacan-masonry-grid-sizer[data-v-174cfcb9]{list-style-type:none;width:calc(14.285% - 25px)}@media screen and (max-width: 2560px){.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>li[data-v-174cfcb9],.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>.tainacan-masonry-grid-sizer[data-v-174cfcb9]{width:calc(16.666% - 25px)}}@media screen and (max-width: 1920px){.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>li[data-v-174cfcb9],.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>.tainacan-masonry-grid-sizer[data-v-174cfcb9]{width:calc(20% - 25px)}}@media screen and (max-width: 1740px){.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>li[data-v-174cfcb9],.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>.tainacan-masonry-grid-sizer[data-v-174cfcb9]{width:calc(25% - 25px)}}@media screen and (max-width: 1440px){.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>li[data-v-174cfcb9],.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>.tainacan-masonry-grid-sizer[data-v-174cfcb9]{width:calc(33.333% - 25px)}}@media screen and (max-width: 1024px){.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>li[data-v-174cfcb9],.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>.tainacan-masonry-grid-sizer[data-v-174cfcb9]{width:calc(50% - 25px)}}@media screen and (max-width: 620px){.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>li[data-v-174cfcb9],.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>.tainacan-masonry-grid-sizer[data-v-174cfcb9]{width:calc(100% - 25px)}}.tainacan-masonry-container.tainacan-masonry-container--legacy>li[data-v-174cfcb9],.tainacan-masonry-container.tainacan-masonry-container--legacy>.tainacan-masonry-grid-sizer[data-v-174cfcb9]{list-style-type:none;width:calc(14.285% - 25px)}@media screen and (max-width: 1920px){.tainacan-masonry-container.tainacan-masonry-container--legacy>li[data-v-174cfcb9],.tainacan-masonry-container.tainacan-masonry-container--legacy>.tainacan-masonry-grid-sizer[data-v-174cfcb9]{width:calc(16.666% - 25px)}}@media screen and (max-width: 1440px){.tainacan-masonry-container.tainacan-masonry-container--legacy>li[data-v-174cfcb9],.tainacan-masonry-container.tainacan-masonry-container--legacy>.tainacan-masonry-grid-sizer[data-v-174cfcb9]{width:calc(20% - 25px)}}@media screen and (max-width: 1360px){.tainacan-masonry-container.tainacan-masonry-container--legacy>li[data-v-174cfcb9],.tainacan-masonry-container.tainacan-masonry-container--legacy>.tainacan-masonry-grid-sizer[data-v-174cfcb9]{width:calc(25% - 25px)}}@media screen and (max-width: 1024px){.tainacan-masonry-container.tainacan-masonry-container--legacy>li[data-v-174cfcb9],.tainacan-masonry-container.tainacan-masonry-container--legacy>.tainacan-masonry-grid-sizer[data-v-174cfcb9]{width:calc(33.333% - 25px)}}@media screen and (max-width: 768px){.tainacan-masonry-container.tainacan-masonry-container--legacy>li[data-v-174cfcb9],.tainacan-masonry-container.tainacan-masonry-container--legacy>.tainacan-masonry-grid-sizer[data-v-174cfcb9]{width:calc(50% - 25px)}}.tainacan-masonry-container .tainacan-masonry-item[data-v-174cfcb9]{display:block;width:100%;flex-basis:0;margin-bottom:var(--tainacan-container-padding);text-align:center;text-decoration:none;transition:background-color 0.2s ease}.tainacan-masonry-container .tainacan-masonry-item[data-v-174cfcb9]:hover:not(.skeleton){background-color:var(--tainacan-item-heading-hover-background-color)}.tainacan-masonry-container .tainacan-masonry-item.selected-masonry-item[data-v-174cfcb9]:not(.skeleton){background-color:var(--tainacan-turquoise1)}.tainacan-masonry-container .tainacan-masonry-item[data-v-174cfcb9]:not(.skeleton){background-color:var(--tainacan-item-background-color)}.tainacan-masonry-container .tainacan-masonry-item .masonry-item-checkbox[data-v-174cfcb9]{position:absolute;margin-top:8px;margin-left:1em;z-index:9}.tainacan-masonry-container .tainacan-masonry-item .actions-area[data-v-174cfcb9]{position:relative;float:right;width:100%;height:0px;display:flex;justify-content:flex-end;visibility:hidden;overflow:hidden;opacity:0;padding:2px 8px;transition:visibility 0.2s, opacity 0.2s;margin-top:0px;background-color:var(--tainacan-item-heading-hover-background-color);transition:visibility 0.2s ease, opacity 0.2s ease, height 0.2s ease, margin-top 0.2s ease}.tainacan-masonry-container .tainacan-masonry-item .actions-area a[data-v-174cfcb9]{margin-left:12px;opacity:0;transition:opacity 0.3s ease-in}.tainacan-masonry-container .tainacan-masonry-item:hover .actions-area[data-v-174cfcb9]{visibility:visible;opacity:1.0;height:32px;margin-top:-30px;background-color:var(--tainacan-item-heading-hover-background-color)}.tainacan-masonry-container .tainacan-masonry-item:hover .actions-area a[data-v-174cfcb9]{opacity:1}.tainacan-masonry-container .tainacan-masonry-item.selected-masonry-item .actions-area[data-v-174cfcb9]{background-color:var(--tainacan-turquoise1)}.tainacan-masonry-container .tainacan-masonry-item .tainacan-masonry-item-thumbnail[data-v-174cfcb9]{background-size:cover;background-color:var(--tainacan-gray0);background-blend-mode:multiply;border-radius:0px}.tainacan-masonry-container .tainacan-masonry-item .tainacan-masonry-item-thumbnail[data-v-174cfcb9]:hover{cursor:pointer}.tainacan-masonry-container .tainacan-masonry-item .tainacan-masonry-item-thumbnail img[data-v-174cfcb9]{width:100%;height:auto;transition:height 0.2s ease;display:block}.tainacan-masonry-container .tainacan-masonry-item .metadata-title[data-v-174cfcb9]{flex-shrink:0;margin:0px 6px 0px 24px;padding:8px 1em;min-height:41px;cursor:pointer;position:relative}.tainacan-masonry-container .tainacan-masonry-item .metadata-title p[data-v-174cfcb9]{font-size:0.875em !important;color:var(--tainacan-heading-color) !important;text-align:left !important;margin-bottom:0 !important;line-height:1.875em;word-break:break-word;margin:0}.tainacan-masonry-container .tainacan-masonry-item .metadata-title .slideshow-icon[data-v-174cfcb9]{color:var(--tainacan-info-color);position:absolute;right:7px;top:9px;transform:scale(0);transition:transform 0.2s ease}.tainacan-masonry-container .tainacan-masonry-item .metadata-title .icon[data-v-174cfcb9]:not(.slideshow-icon){float:left;margin-top:1px}.tainacan-masonry-container .tainacan-masonry-item:hover .slideshow-icon[data-v-174cfcb9],.tainacan-masonry-container .tainacan-masonry-item:focus .slideshow-icon[data-v-174cfcb9]{transform:scale(1)}.tainacan-masonry-container.hide-items-selection .tainacan-masonry-item[data-v-174cfcb9]:hover{background-color:transparent;cursor:default}.tainacan-masonry-container.hide-items-selection .tainacan-masonry-item:hover .tainacan-masonry-item-thumbnail[data-v-174cfcb9]{cursor:default}.tainacan-masonry-container.hide-items-selection .tainacan-masonry-item .metadata-title[data-v-174cfcb9]{margin-left:6px}.tainacan-masonry-container--skeleton[data-v-174cfcb9]{display:block;min-height:50vh;padding-left:25px;padding-right:25px;column-gap:25px;height:auto !important}.tainacan-masonry-container--skeleton .skeleton[data-v-174cfcb9]{width:100%;margin-bottom:25px;break-inside:avoid}.tainacan-masonry-container--skeleton[data-v-174cfcb9]:not(.tainacan-masonry-container--legacy){column-count:7}@media screen and (max-width: 2560px){.tainacan-masonry-container--skeleton[data-v-174cfcb9]:not(.tainacan-masonry-container--legacy){column-count:6}}@media screen and (max-width: 1920px){.tainacan-masonry-container--skeleton[data-v-174cfcb9]:not(.tainacan-masonry-container--legacy){column-count:5}}@media screen and (max-width: 1740px){.tainacan-masonry-container--skeleton[data-v-174cfcb9]:not(.tainacan-masonry-container--legacy){column-count:4}}@media screen and (max-width: 1440px){.tainacan-masonry-container--skeleton[data-v-174cfcb9]:not(.tainacan-masonry-container--legacy){column-count:3}}@media screen and (max-width: 1024px){.tainacan-masonry-container--skeleton[data-v-174cfcb9]:not(.tainacan-masonry-container--legacy){column-count:2}}@media screen and (max-width: 620px){.tainacan-masonry-container--skeleton[data-v-174cfcb9]:not(.tainacan-masonry-container--legacy){column-count:1}}.tainacan-masonry-container--skeleton.tainacan-masonry-container--legacy[data-v-174cfcb9]{column-count:7}@media screen and (max-width: 1920px){.tainacan-masonry-container--skeleton.tainacan-masonry-container--legacy[data-v-174cfcb9]{column-count:6}}@media screen and (max-width: 1440px){.tainacan-masonry-container--skeleton.tainacan-masonry-container--legacy[data-v-174cfcb9]{column-count:5}}@media screen and (max-width: 1360px){.tainacan-masonry-container--skeleton.tainacan-masonry-container--legacy[data-v-174cfcb9]{column-count:4}}@media screen and (max-width: 1024px){.tainacan-masonry-container--skeleton.tainacan-masonry-container--legacy[data-v-174cfcb9]{column-count:3}}@media screen and (max-width: 768px){.tainacan-masonry-container--skeleton.tainacan-masonry-container--legacy[data-v-174cfcb9]{column-count:2}}.tainacan-masonry-container .tainacan-masonry-item .metadata-title[data-v-174cfcb9]{margin:0px 3px}\n",""]);const r=c},32292:(a,n,t)=>{var e=t(93379),i=t.n(e),o=t(7795),c=t.n(o),r=t(90569),s=t.n(r),l=t(3565),m=t.n(l),d=t(19216),y=t.n(d),u=t(44589),p=t.n(u),h=t(10461),f={};f.styleTagTransform=p(),f.setAttributes=m(),f.insert=s().bind(null,"head"),f.domAPI=c(),f.insertStyleElement=y();i()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals},25960:(a,n,t)=>{t.r(n),t.d(n,{default:()=>o});var e=t(36354),i=t(26632);t(3706);const o=(0,t(51900).Z)(i.Z,e.s,e.x,!1,null,"174cfcb9",null).exports},26632:(a,n,t)=>{t.d(n,{Z:()=>e});const e=t(88534).Z},3706:(a,n,t)=>{t(32292)}}]);