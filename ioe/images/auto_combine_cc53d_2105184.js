var query=require("assets/js/module/query.js");window.local={zh:{install:"下载"},en:{install:"Install"}},window.market=window.marketAd={},marketAd.trackAdAction=market.loadAppScreenshotsPage=market.registerViewStatus=market.registerAppStatus=market.checkAppsOnMobile=market.checkApis=market.install=market.recordCountEvent=market.open=function(){};var ajaxData={os:"1.1.1",model:"unknown",ro:"unknown",marketVersion:1914102,imei:"cfcd208495d565ef66e7dff9f98764da",miuiBigVersionName:"unknown",resolution:"1080*1920",webResVersion:0,clientId:"cfcd208495d565ef66e7dff9f98764da",densityScaleFactor:3,co:"CN",pageConfigVersion:0,session:"cfcd208495d565ef66e7dff9f98764da",deviceType:0,la:"zh",sdk:"19",mobileWeb:1};market.getDeviceInfo=function(){return JSON.stringify(ajaxData)},market.back=function(){history.back()};var host="http://app.xiaomi.com",alternateHost="http://r.app.xiaomi.com";localStorage.removeItem("v-index13"),market.loadPage=function(e){if(e){var t=JSON.parse(e),a=t.url,r=/([a-z]+):\/\/(([^\?]+)\??(\S*))/i.exec(a);if(r){var i=r[1],s=r[3],n=r[4];if(i)switch(i){case"http":case"https":window.location=a;break;case"file":var o,l=n?"?"+n:"";l+="&back=true&ref=mobileWeb",/^index\.html/.test(s)?o="/home":/^subject\.html/.test(s)?o="/collections":/^app\.html/.test(s)?o=alternateHost+"/app":/^feed\-app\.html/.test(s)?o=alternateHost+"/feed-app":/^subject\-list\.html/.test(s)?o=alternateHost+"/subject-list":/^campaign\-list\.html/.test(s)&&(o=alternateHost+"/campaign-list"),o&&(window.location=o+l);break;case"mimarket":if("details"===s){var c,m={};if(t.extra_params&&(c=t.extra_params.pName),m.ref=t.ref,m.extra_query_params=JSON.stringify(t.extra_params),n){var d=query.getQueryObject(n);for(var p in d)m[p]=d[p]}{btoa(JSON.stringify(m))}window.location=host+"/details?id="+c+"&back=true&ref=mobileWeb"}}}}};var pathname=location.pathname;if(/^\/home|index.html/.test(pathname)&&($(".search-placeholder").hide(),document.body.style.cssText="padding-top: 12px"),/^\/details|detail.html/.test(pathname)){var style=document.createElement("style");style.type="text/css",style.innerHTML=".search-icon {opacity: 0 !important;}.card-score,.icon-favorite,.icon-share,.video-play,.app-assessment {display: none !important;}";var head=document.getElementsByTagName("head")[0];head.appendChild(style)}
;define("assets/js/module/replacer.js",function(){var r=function(r,e){var n=r.replace(/{{([^{}]+)}}/g,function(r,n){var t=e[n];return t=void 0!==t?t.toString():""});return n};return r});
;define("assets/js/module/itemData.js",function(e,t,n){function c(e){return e.cacheId=++s,r[s]=e,s}function a(e){return r[e]}var r={},s=0;n.exports={cache:c,get:a}});
;define("components/app-list-horizon/app-list-horizon.js",function(a,s){function e(a){var s=this.dataset,e=o.get(s.cacheid),t=e.packageName,i=e.id,n=this.tagName.toLowerCase(),c=$(this).closest(".J_recApps").data("ref"),m=p({elem:this,posPrefix:r,newRef:d,customRef:c,cacheItem:e});if("button"===n){var h=this.disabled;if(h)return;if("true"!==s.installed){var v=$.extend(m,{pName:t,appId:i});l.install(v)}else market.openApp(JSON.stringify({pName:t}))}else{m.extra_params.refs=ajaxData.refs+"-detail/"+i;var u=$.extend(m,{url:"mimarket://details?appId="+i,title:e.displayName,launchMode:loadDetailMethod});market.loadPage(JSON.stringify(u))}a.stopPropagation()}var t='<li>\n  <div class="applist-horizon-item">\n    <div class="tap J_exposure" data-cacheid="{{cacheId}}">\n      <div class="icon-placeholder">\n        <img class="J_lazyload lazyload" data-src="{{icon}}"/>\n      </div>\n      <h3 class="horizonal-ad"><span class="applist-horizon-name ellipsis">{{displayName}}</span>{{flag}}</h3>\n      <div class="icon-star-wrap icon-star icon-star{{ratingScore}}">\n        <div class="icon-star icon-star-light"></div>\n      </div>\n      <div class="applist-horizon-size">{{apkSize}}M</div>\n    </div>\n    <div class="J_btnInstall install-btn" data-pname="{{packageName}}">\n  <button type="button" class="touch J_install" data-cacheid="{{cacheId}}" data-pname="{{packageName}}"></button>\n  <div class="install-btn-display">\n    <span class="J_appProgress install-progress"></span>\n    <span class="J_appStatusProgress">{{status}}</span>\n  </div>\n</div></div>\n</li>',i=a("assets/js/module/render.js"),n=a("assets/js/module/tap.js"),l=a("assets/js/device.js"),p=a("assets/js/createReqQuery.js"),o=a("assets/js/module/itemData.js"),r="applistHorizon",d=!1;l.registerAppStatus();var c=function(a,s){var p=a.contain,o=s.listApp;a.newRef?d=a.newRef:"",a.posPrefix?r=a.posPrefix:"";var c={contain:p,tpl:t,list:o};i(c),n.on(p),$(p).on("tap",".tap,.J_install",e),l.checkAppsStatus(p,o)};s.render=c});
;define("components/rec-apps/rec-apps.js",function(e,a){function s(e){e.more=local.more;var a;a=$(e.link?i(p,e):i(c,e));var s=document.createElement("ul");return n.render({contain:s,posPrefix:h,newRef:!0},e),a.append(s),a[0]}function r(e){var a=this.dataset,s=f.get(a.cacheid)||{},r=(s.packageName||"",s.id||"",this.tagName.toLowerCase(),$(this).closest(".J_recApps").data("ref")),n=o({elem:this,posPrefix:h,newRef:!0,customRef:r,cacheItem:s}),p=$.extend(n,{url:t.add(s.link,n.extra_params)});market.loadPage(JSON.stringify(p)),e.stopPropagation()}var t=e("assets/js/module/query.js"),n=e("components/app-list-horizon/app-list-horizon.js"),p='<div class="J_recApps rec-apps card-both" data-ref="{{ref}}">\r\n  <h3 class="J_recAppsHeader rec-apps-header tap cf" data-cacheid="{{cacheId}}">\r\n  	<div class="rec-apps-title card-font-left fl">{{title}}</div>\r\n    <div class="rec-apps-more fr">\r\n      <span class="card-font-right">{{more}}</span><span class="icon-arrow"></span>\r\n    </div>\r\n  </h3>\r\n</div>\r\n',c='<div class="J_recApps rec-apps card-both" data-ref="{{ref}}">\r\n  <h3 class="rec-apps-header">\r\n    <div class="rec-apps-title card-font-left">{{title}}</div>\r\n  </h3>\r\n</div>\r\n',i=e("assets/js/module/replacer.js"),d=e("assets/js/module/tap.js"),l=e("assets/js/device.js"),o=e("assets/js/createReqQuery.js"),f=e("assets/js/module/itemData.js"),h="recApps",m=!1,u=function(e,a){var t=e.contain,n=a.listApp;if(e.diff&&!m){var p=s(a),c=t.querySelector(".rec-apps"),i=$(p),o=$(c),f=i.find("h3"),h=o.find("h3");f.outerHTML!==h.outerHTML&&h.replaceWith(f);var u=i.find("li"),v=o.find("li");u.each(function(e,a){var s=$(a),r=s.find(".J_install").data("pname"),t=v.eq(e);return 0===t.length?(o.append(i.find("li").slice(e)),!1):(r!==t.find(".J_install").data("pname")&&t.replaceWith(s),void(p=null))}),m=!0}else{var j=s(a);t.appendChild(j);var g=$(j).find(".J_recAppsHeader");g.length>0&&(d.on(g[0]),g.on("tap",r))}l.checkAppsStatus(t,n)};a.render=u});
;define("assets/js/module/unfold.js",function(){function e(e,t){var n=e.getPropertyValue(t);return n.replace("px","")}function t(t,n,s,i){var r,a=getComputedStyle(t,"");r=i?i*e(a,"font-size"):e(a,"line-height");var l=e(a,"height"),o=Math.floor(l/r),c=n*r,u=!1,d="height:"+c+"px;overflow: hidden; white-space: normal;",f="height:auto; white-space: pre-wrap;";if(o>n){t.style.cssText+=d,u=!0;var h=document.createElement("div");h.className="unfold-more",h.addEventListener("click",function(){u?(t.style.cssText+=f,u=!1,h.className="hide"):(t.style.cssText+=d,u=!0)}),h.innerHTML='<span class="unfold-ellipsis">…</span>'+s,t.parentNode.insertBefore(h,t.nextSibling)}}function n(e,n,s,i){return new t(e,n,s,i)}return n});
;define("components/nav-bar/nav-bar.js",function(a,n){function r(a){var n=$(e);return a.prepend(n),n.on("click",".icon-circle",function(){"back"===$(this).data("action")?market.back():market.loadPage(JSON.stringify({url:"mimarket://search",type:2,ref:ref}))}),n}{var e='<div class="nav-bar">\r\n  <span class="icon-circle" data-action="back">\r\n    <svg width="38" height="38" viewBox="0 0 38 38">\r\n      <use xlink:href="#arrow"></use>\r\n    </svg>\r\n  </span>\r\n  <span id="J_navBarTitle" class="nav-bar-title"></span>\r\n  <span class="icon-circle search-icon" data-action="search">\r\n    <svg width="34" height="34" viewBox="0 0 34 34">\r\n      <use xlink:href="#search"></use>\r\n    </svg>\r\n  </span>\r\n</div>';a("assets/js/module/replacer.js")}n.render=r});
;define("components/list-panel/list-panel.js",function(e,n,t){function a(e){var n=this.contain=document.createElement("div");n.className="list-pannel";var t=document.createElement("h4");t.innerHTML=e,n.appendChild(t);var a=this.content=document.createElement("ul");a.className="list-pannel-con",n.appendChild(a)}function l(e){return new a(e)}t.exports={createPanel:l}});
;define("assets/js/module/randomNoRepeat.js",function(n,e,t){function o(n){var e=[],t=!1;return function o(){if(n){var r=Math.floor(n*Math.random());return e.indexOf(r)>=0?r=o(n):(t&&(e=[],t=!1),e.push(r),e.length>=n&&(e=[r],t=!0)),r}}}t.exports=o});
;define("assets/js/module/labelOptimizeSort.js",function(r,e,t){function o(r,e){var t;r=Array.prototype.slice.call(r),t=r.map(function(r){var e=$(r),t=e.width()+parseFloat(e.css("margin-right"))+parseFloat(e.css("margin-left"));return{dom:r,width:t}});for(var o=[],s=0,a=[],n=0,i=0;i<t.length;i++){var l=t[i];if(!l.used){var h=s;if(s+=l.width,e>=s)l.used=!0,a.push(l);else{n=e-h;for(var u=[],f=i;f<t.length;f++){var c=t[f];if(c.width<=n){var p=n-c.width;c.lengthPoorClose=p,u.push(c)}}if(u.length>0){var d="";u.forEach(function(r,e){(0==e||r.lengthPoorClose<d.lengthPoorClose)&&(d=r)}),d.used=!0,a.push(d)}o.push(a.slice(0)),a=[],s=0,i--}}}o.push(a.slice(0));for(var g=[],i=0;i<o.length;i++)o[i]=o[i].map(function(r){return r.dom}),g=g.concat(o[i]);return{linearArray:g,twoDimensionArray:o}}t.exports=o});
;define("components/labels/labels.js",function(e,a){function l(){var e=r(),a="";switch(e){case 0:a="label-orange";break;case 1:a="label-green";break;case 2:a="label-purple";break;case 3:a="label-blue";break;case 4:a="label-red";break;case 5:a="label-yellow";break;default:a="label-red"}return a}var s='<li class="{{color}} J_exposure" data-cacheid="{{cacheId}}">{{tagName}}</li>',n=e("assets/js/module/render.js"),t=e("components/list-panel/list-panel.js"),r=e("assets/js/module/randomNoRepeat.js")(6),c=e("assets/js/module/labelOptimizeSort.js"),i=function(e,a){var r=t.createPanel(a.title),i=r.content;n({contain:i,tpl:s,list:a.list});var o=$(i);o.addClass("labels-wrap J_labelsWrap"),e.appendChild(r.contain),setTimeout(function(){var e=o.find("li"),a=o.width(),s=c(e,a).linearArray;s.forEach(function(e){e.classList.add(l()),o.append(e)})},0)};a.render=i});
;define("components/no-index/no-index.js",function(t,e){var a='<div id="J_noResult" class="no-index-search-noresult">\n  <img width="120" height="120" src="//res.static.xiaomi.net/appweb/v-tip_face2_7ac3ec0.png">\n  <p id="J_emptyReason" style="display: none;"></p>\n  <p id="J_emptyTip">应用商店暂未收录该应用</p>\n  <div id="J_btn">\n  </div>\n</div>',n='<br><br>\n<button class="no-index-radius-btn" data-src="{{icon}}" data-type="{{type}}" data-name="{{marketName}}"><img class="list-icon" src="{{icon}}" data-src="{{icon}}" data-type="{{type}}" data-name="{{marketName}}">去{{marketName}}搜索</button>',i=t("assets/js/module/render.js"),s=t("assets/js/module/tap.js"),r=function(t,e){function r(t){var e=t.target.dataset,a={type:e.type,marketName:e.name,searchFrom:d,keyword:c,iconUrl:e.src};market.loadThirdpartSearch(JSON.stringify(a))}$(t).append(a);var o=$("#J_btn")[0],d=e.searchFrom,c=e.keyword,p=e.supportMarketList;p&&(p.map(function(t){t.icon="http://t1.market.xiaomi.com/thumbnail/webp/l79q80/"+t.icon}),i({contain:o,tpl:n,list:p}),s.on(o),o.addEventListener("tap",r))};e.render=r});
;define("assets/js/module/number.js",function(n,e){var r=function(n,e){var r="",t=String(n);return t.length<e&&(r=new Array(e-t.length+1).join("0")),r+t};e.pad=r});
;define("assets/js/module/date.js",function(e,a,t){var d={zh:{monday:"星期一",tuesday:"星期二",wednesday:"星期三",thursday:"星期四",friday:"星期五",saturday:"星期六",sunday:"星期日",today:"今天",yesterday:"昨天",dateFormate:"MM月dd日"},en:{monday:"Mon",tuesday:"Tues",wednesday:"Wed",thursday:"Thur",friday:"Fri",saturday:"Sat",sunday:"Sun",today:"Today",yesterday:"Yesterday",dateFormate:"MM/dd"}};d=d[lang];var r=e("assets/js/module/number.js").pad,n=function(e,a){function t(e,t){a=a.replace(e,t)}var d=new Date(e),n=d.getFullYear(),s=d.getMonth()+1,o=d.getDate(),y=d.getHours(),u=d.getMinutes(),g=d.getSeconds();return t(/yyyy/g,r(n,4)),t(/yy/g,r(parseInt(n.toString().slice(2),10),2)),t(/MM/g,r(s,2)),t(/M/g,s),t(/dd/g,r(o,2)),t(/d/g,o),t(/HH/g,r(y,2)),t(/H/g,y),t(/hh/g,r(y%12,2)),t(/h/g,y%12),t(/mm/g,r(u,2)),t(/m/g,u),t(/ss/g,r(g,2)),t(/s/g,g),a},s=function(e){var a=Date.now(),t="",r=a-e;return t=864e5>r?d.today:1728e5>r>864e5?d.yesterday:n(e,d.dateFormate)},o=function(e){var a={0:d.sunday,1:d.monday,2:d.tuesday,3:d.wednesday,4:d.thursday,5:d.friday,6:d.saturday},t=new Date(e).getDay();return a[t]},y=function(e,a){function t(e,t){a=a.replace(e,t)}e=parseInt(e/1e3,10);var d=Math.floor(e/86400),n=Math.floor((e-86400*d)/3600),s=Math.floor((e-86400*d-3600*n)/60),o=Math.floor(e-86400*d-3600*n-60*s);return t(/dd/g,r(d,2)),t(/d/g,d),t(/HH/g,r(n,2)),t(/H/g,n),t(/mm/g,r(s,2)),t(/m/g,s),t(/ss/g,r(o,2)),t(/s/g,o),a};t.exports={format:n,formatTimeline:s,formatWeek:o,formatCountDown:y}});
;define("views/detail/detail.js",function(a){function e(e){function d(){function a(){market.share(JSON.stringify({flag:0,subject:"分享一个应用："+g.displayName,text:g.displayName+"这个应用不错，推荐一下。获取地址："+t+"来自@小米应用商店",url:t,title:"分享",image:r.replace(/^.*?,/,"")}))}var e=this.dataset;switch(e.action){case"install":switch(e.installed){case"installing":market.pause(JSON.stringify(ae));break;case"paused":market.resume(ae.appId);break;case"true":market.openApp(JSON.stringify({pName:Z}));break;case"false":c(),O.install(ae);break;case"disabled":break;default:market.pause(JSON.stringify(ae))}break;case"favorite":G=!G,market.favorite(JSON.stringify({appId:S,favorite:G,callBack:"setFavorite"}));break;case"share":var t="http://app.mi.com/detail/"+S,i=document.createElement("img");i.src=g.icon;var r;i.onload=function(){r=s(i),a(r)},i.onerror=function(){a()}}}if(!e.app||!e.app.displayName)return void m(F.packageName,e.supportMarketList);var u=e.thumbnail,g=J(u+"webp/l168q80/",e.app),_=a("assets/js/module/date.js").format;g.updateTime=_(g.updateTime,"yyyy年MM月dd日");var b=u+"webp/rw240q80/",x=u+"webp/rw540q80/";$.extend(g,M);var S=g.id,A=$(h(E,g));H.prepend(A),e.app.editorHint||$("#J_tip").hide();var D=market.checkApis(JSON.stringify({apiNames:[{name:"viewPermissionDetailsV2"}]}));D&&($(".J_replaceSection").toggleClass("hide"),$(".J_replaceSpan").toggleClass("hide"),$(".J_permissionDetail").on("click",function(){market.viewPermissionDetailsV2(S)})),e.app.briefUseIntro&&$("#J_appBrief").hide();var B=$("#J_appSize");B.css({left:-B.width()});var C=$("#J_screenshot"),T=C[0],L=g.screenshot.split(",").map(function(a,e){return{screenshot:b+a,$index:e}}),R=g.screenshot.split(",").map(function(a){return x+a});j({contain:T,list:L,tpl:'<div class="screenshot J_screenshot" data-index="{{$index}}"><img width="131" class="J_lazyload lazyload" data-src="{{screenshot}}"></div>'}),I.on(T),C.on("tap",".J_screenshot",function(){market.loadAppScreenshotsPage(JSON.stringify({screenshot:R,screen_index:$(this).data("index")}))}),t(g,C),N(y.id("J_appDesc"),2,"更多",1.4),g.changeLog?N(y.id("J_appUpdate"),2,"更多",1.4):$("#J_appUpdateWrap").hide(),l(g.appArticleInfoList[0]),p($("#J_labels")[0],g.appTags,ajaxData.sid);var K=g.moduleInfoList;K&&K.forEach(function(a){switch(a.type){case"relate":r(a,u);break;case"same_tag":n(a,u);break;case"same_cateogry":n(a,u)}}),o(g.hasSameDevApp,S),O.registerAppStatus();var U=y.id("J_intallBar");O.checkAppsStatus(H[0],[g]),I.on(U),$(U).on("tap",".action",d);var V=e.app.detailHeaderImage;V&&(z=!0),z&&f?(v=!0,market.setStatusBarStyle(JSON.stringify({layoutAsHide:!0,darkMode:v})),$(".J_appBannerImg").addClass("J_lazyload").data("src","http://t1.market.xiaomi.com/thumbnail/jpeg/l720/"+V),$(".J_app").addClass("app-has-banner")):$(".J_appBanner").addClass(f?"app-no-banner2":"app-no-banner"),$(".nav-bar").css(f?{"padding-top":"30px",opacity:1}:{opacity:1});var W=new k({buffer:2e3,extralDoms:"#J_screenshot, #J_relativeApp ul, #J_relativeHotApp ul"});W.update();var Q=new w({extralDoms:"#J_screenshot, #J_relativeApp ul, #J_relativeHotApp ul"});Q.update();var G=g.isFavorite;setFavorite(G.toString());var X=g.displayName;i(X);var Z=g.packageName;$("#J_score").on("click",function(){market.loadPage(JSON.stringify({url:"mimarket://comments?appId="+S,title:"评论："+X}))});var ae=(y.id("J_detailInstallBtn"),$.extend(F,{pName:Z,appId:S}));if(ae.extra_params=Y,2===g.grantCode&&market.allowDownloadDirectly){var ee=market.allowDownloadDirectly(JSON.stringify({clientId:F.appClientId,grantCode:g.grantCode,pName:Z,appId:S,version:g.versionCode}));ee&&O.install(ae)}else 3===g.grantCode&&O.install(ae);q=$(".J_anchor").offset().top-$(".nav-bar").height()-8,P=$("#J_content")}function s(a){var e=document.createElement("canvas"),s=a.width,t=a.height;e.width=s,e.height=t;var i=e.getContext("2d");i.drawImage(a,0,0,s,t);var r=e.toDataURL("image/png");return r}function t(a,e){if(0!=a.videoId){videoData=JSON.parse(JSON.stringify(ajaxData)),videoData.videoId=a.videoId,videoData.packageName=a.packageName,videoData.displayName=a.displayName;var s="video";g.getJSON({url:HOST+s,data:videoData,key:s,callBack:function(a){{var s=e.find(".J_screenshot").eq(0);$()}s.append('<div class="video-play"></div>'),I.on(s[0]),s.on("tap",function(e){market.loadPage(JSON.stringify({url:"intent:"+a.videoUrl+" #Intent;action=duokan.intent.action.VIDEO_PLAY;S.mediaTitle="+encodeURIComponent(videoData.displayName)+";end",external:!0})),market.recordCountEvent(JSON.stringify({category:"mimarket_video",key:"pv",params:{ref:"detail"}})),e.stopPropagation()})}})}}function i(a){var e=$("#J_navBarTitle");U.addClass("nav-bar-fadein"),e.text(a);var s=f?90:70;z&&(s=$(".app-banner").height()+9);var t=!0,i=1/s,r=.9,n=1/(s*(1-r)),p=.15;$(window).on("scroll",function(){var a=window.scrollY;if(s>=a){var l=a*i,o=(a-s*r)*n,d=l*p;U.css({"background-color":"rgba(255, 255, 255, "+l+")","background-image":"linear-gradient(180deg, transparent, transparent 67%, rgba(0, 0, 0, "+d+") 67%)"}),e.css({opacity:o}),t=!0}else t&&(U.css({"background-color":"rgba(255, 255, 255, 1)","background-image":"linear-gradient(180deg, transparent, transparent 67%, rgba(0, 0, 0, "+p+") 67%)"}),e.css({opacity:1}),t=!1);.7*s>=a?z&&f&&v===!1&&(v=!0,market.setStatusBarStyle(JSON.stringify({layoutAsHide:!0,darkMode:v}))):z&&f&&v===!0&&(v=!1,market.setStatusBarStyle(JSON.stringify({layoutAsHide:!0,darkMode:v}))),R=a<L.scrollHeight-L.clientHeight-100?!0:!1})}function r(a,e){if(a.list){var s,t=a.list;if(0!==t.length){s=_({thumbnail:e,listApp:t}),Q(s);var i=y.id("J_relativeApp");i.style.display="block",x.render({contain:i},{listApp:s,title:M.relativeApp,ref:"relate_app"})}}}function n(a,e){if(a.list){var s,t=a.list;if(0!==t.length){s=_({thumbnail:e,listApp:t}),Q(s);var i=y.id("J_relativeHotApp");i.style.display="block",x.render({contain:i},{listApp:s,title:a.title,ref:"relate_hot_app"})}}}function p(a,e,s){s=s||"";var t=$(a);return!e||e.length<=0?void t.prev("hr").hide():(G(e),B.render(a,{title:"应用标签",list:e}),t.addClass("J_feed"),a.dataset.sid=s,void t.on("click","li",function(){var a=T.get(this.dataset.cacheid),e=D({elem:this,posPrefix:"labels",cacheItem:a}),s=$.extend(e.extra_params,{link:decodeURIComponent(a.link)}),t=u.add(PROTOCOL+"feed-app.html",s),i=$.extend(e,{url:t,title:a.tagName});market.loadPage(JSON.stringify(i))}))}function l(a){if(a){var e=$("#J_appAssessment");e.data("articleid",a.articleId).removeClass("hide"),e.find(".J_appAssessmentTitle").html(a.title),e.find(".J_appAssessmentDesc").html(M.mediaReviews+"&nbsp;|&nbsp;"+a.mediaName),e.find(".J_appAssessmentIcon").attr("src","http://t1.market.xiaomi.com/thumbnail/webp/l99q80/"+a.mediaIcon),e.on("click",function(){var a=this.dataset.articleid,e=u.add(PROTOCOL+"subscribe-article.html","articleid",a),s={refs:ajaxData.refs,h5:h5};e=u.add(e,"refs",ajaxData.refs),market.loadPage(JSON.stringify({url:e,title:M.reviews,ref:ref,extra_params:s}))})}}function o(a,e){if(a){var s=$(".J_sameApp");s.show(),s.on("click",function(){var a=u.add(PROTOCOL+"app.html",{ref:"samedev",refs:ajaxData.refs,link:"samedev",appId:e});market.loadPage(JSON.stringify({url:a,title:M.sameDevApps}))})}}function d(){var a=0;return function(e){for(var s=0,t=e.length;t>s;s++){var i=e[s];i.$index=a+"_"+s,T.cache(i)}a++}}function c(){R&&(window.scrollTo(0,q),P.addClass("translateY100"),P.on("webkitAnimationEnd animationEnd",function(){P.removeClass("scroll-animate translateY100")}).addClass("scroll-animate"))}function m(a,e){a=a||"",C.render(H[0],{searchFrom:"detail_"+a,keyword:a,supportMarketList:e})}a("assets/js/global.js");var v=!1,f=market.checkApis(JSON.stringify({apiNames:[{name:"setStatusBarStyle"}]}));f&&market.setStatusBarStyle(JSON.stringify({layoutAsHide:!0}));var u=a("assets/js/module/query.js"),h=a("assets/js/module/replacer.js"),g=a("assets/js/request.js"),J=a("assets/js/formate/formateApp.js"),_=a("assets/js/formate/applist.js"),y=a("assets/js/module/dom.js"),k=a("assets/js/module/lazyLoad.js"),w=a("assets/js/module/exposure.js"),b=a("components/load/load.js"),x=a("components/rec-apps/rec-apps.js"),S=b("#J_load"),N=a("assets/js/module/unfold.js"),j=a("assets/js/module/render.js"),A=a("components/nav-bar/nav-bar.js"),D=a("assets/js/createReqQuery.js"),O=a("assets/js/device.js"),I=a("assets/js/module/tap.js"),B=a("components/labels/labels.js"),C=a("components/no-index/no-index.js"),T=a("assets/js/module/itemData.js"),H=$("body"),L=document.documentElement,P="",q=0,R=!0,z=!1,K="#F35D02",U=A.render(H),E='<section id="J_content">\r\n  <section class="card detail-card">\r\n    <div class="app-banner J_appBanner">\r\n      <img class="lazyload J_appBannerImg">\r\n    </div>\r\n    <div class="app J_app">\r\n      <div class="app-icon"><img src="{{icon}}" width="64" height="64"></div>\r\n      <h1>{{displayName}}</h1>\r\n      <div class="app-info">\r\n        <span id="J_appSize" class="app-info-l">{{apkSize}} M</span><span class="app-info-delimter"></span><div class="icon-star icon-star{{ratingScore}}">\r\n        <div class="icon-star icon-star-light"></div>\r\n      </div><span class="app-info-delimter"></span><span class="app-info-r J_replaceSpan">{{level1CategoryName}}</span><span class="app-info-r J_replaceSpan hide J_permissionDetail">\r\n        {{permissionDetail}}\r\n        <svg class="icon-arrow-r icon-arrow-r-small" width="38" height="38" viewBox="0 0 38 38">\r\n          <use xlink:href="#arrow"></use>\r\n        </svg>\r\n      </span>\r\n      </div>\r\n      <div id="J_appBrief">\r\n        <hr>\r\n        <p class="J_appBrief app-brief">“{{briefShow}}”</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div id="J_screenshot" class="scroll-x"></div>\r\n    <div class="tip" id="J_tip"><span class="orange">小编提示：</span><span>{{editorHint}}</span></div>\r\n  </section>\r\n  <section class="card detail-card app-assessment hide" id="J_appAssessment" data-articleid="{{appArticleInfoList}}">\r\n    <div class="app-assessment-icon">\r\n      <img class="J_appAssessmentIcon" src="http://t1.market.xiaomi.com/thumbnail/webp/l168q80/AppStore/05e0725a98f6f40112ceaba441e5921f168c8235e">\r\n    </div>\r\n    <div class="app-assessment-content">\r\n      <div class="app-assessment-title J_appAssessmentTitle"></div>\r\n      <div class="app-assessment-desc J_appAssessmentDesc"></div>\r\n    </div>\r\n    <div class="assessment-arrow-r">\r\n      <svg class="icon-arrow-r" width="38" height="38" viewBox="0 0 38 38">\r\n        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow"></use>\r\n      </svg>\r\n    </div>\r\n  </section>\r\n  <section class="card detail-card pd13 app-p">\r\n    <h3>{{appDesc}}</h3>\r\n    <div class="unfolde">\r\n      <p id="J_appDesc">{{introduction}}</p>\r\n    </div>\r\n    <hr>\r\n    <div id="J_appUpdateWrap">\r\n      <h3>{{updateLog}}</h3>\r\n      <div class="unfolde">\r\n        <p id="J_appUpdate">{{changeLog}}</p>\r\n      </div>\r\n      <hr>\r\n    </div>\r\n    <h3>{{otherInfo}}</h3>\r\n    <p>{{publicNameKey}}：{{publisherName}}\r\n      {{updateTimeKey}}：{{updateTime}}\r\n      {{versionKey}}：{{versionName}}</p>\r\n    <hr>\r\n    <div class="labels" id="J_labels"></div>\r\n  </section>\r\n  <section class="card detail-card card-score" id="J_score">\r\n    <div class="item1">\r\n      <span class="ellipsis">{{ratingTotalCount}}人评分</span>\r\n      <svg class="icon-arrow-r" width="38" height="38" viewBox="0 0 38 38">\r\n        <use xlink:href="#arrow"></use>\r\n      </svg>\r\n    </div>\r\n  </section>\r\n  <div class="J_anchor"></div>\r\n  <section class="card detail-card" id="J_relativeApp" style="display:none;"></section>\r\n  <section class="card detail-card" id="J_relativeHotApp" style="display:none;"></section>\r\n  <section class="card detail-card" id="J_hotApp" style="display:none;"></section>\r\n  <section class="card detail-card J_replaceSection J_sameApp" style="display:none;">\r\n    <div class="item1">\r\n      <span class="ellipsis">{{sameDevApps}}</span>\r\n      <svg class="icon-arrow-r" width="38" height="38" viewBox="0 0 38 38">\r\n        <use xlink:href="#arrow"></use>\r\n      </svg>\r\n    </div>\r\n  </section>\r\n  <section class="card detail-card J_replaceSection hide">\r\n    <div class="item1 card-item J_sameApp" style="display:none;">\r\n      <span class="ellipsis">{{sameDevApps}}</span>\r\n      <svg class="icon-arrow-r" width="38" height="38" viewBox="0 0 38 38">\r\n        <use xlink:href="#arrow"></use>\r\n      </svg>\r\n    </div>\r\n    <div class="item1 card-item J_permissionDetail">\r\n      <span class="ellipsis">{{permissionDetail}}</span>\r\n      <svg class="icon-arrow-r" width="38" height="38" viewBox="0 0 38 38">\r\n        <use xlink:href="#arrow"></use>\r\n      </svg>\r\n    </div>\r\n  </section>\r\n</section>\r\n\r\n<section class=\'detail-btn line-top\' id="J_intallBar">\r\n  <span id="J_favorite" class="icon-circle action icon-favorite" data-action="favorite">\r\n    <svg width="55" height="55" viewBox="0 0 55 55">\r\n      <use xlink:href="#favorite"></use>\r\n    </svg>\r\n  </span>\r\n  <div class="J_btnInstall install-btn" data-pname="{{packageName}}">\r\n    <button id="J_detailInstallBtn" type="button" data-pname="{{packageName}}" class="touch action" data-appid="{{id}}" data-installed="{{installed}}" data-action="install"></button>\r\n    <div class="install-btn-display">\r\n      <span class="J_appProgress install-progress"></span>\r\n      <span class="J_appStatus">{{status}}</span>\r\n    </div>\r\n  </div>\r\n  <span class="icon-circle action icon-share" data-action="share">\r\n    <svg width="55" height="55" viewBox="0 0 55 55">\r\n      <use xlink:href="#share"></use>\r\n    </svg>\r\n  </span>\r\n</section>',M={zh:{appDesc:"应用描述",updateLog:"更新日志",otherInfo:"其他信息",publicNameKey:"开发者",updateTimeKey:"更新时间",versionKey:"版本",relativeApp:"安装过该应用的用户还喜欢",sameDevApps:"同开发者其他应用",permissionDetail:"权限详情",reviews:"评测",mediaReviews:"媒体测评"},en:{appDesc:"应用描述",updateLog:"更新日志",otherInfo:"其他信息",publicNameKey:"开发者",updateTimeKey:"更新时间",versionKey:"版本",relativeApp:"安装过该应用的用户还喜欢",sameDevApps:"同开发者其他应用",permissionDetail:"权限详情",reviews:"评测",mediaReviews:"媒体测评"}};M=M[lang];var F=u.get("detailparams");F=F?JSON.parse(atob(F)):{packageName:u.get("id"),ref:u.get("ref")};var Y={};F.extra_query_params&&(Y=JSON.parse(F.extra_query_params)),ajaxData=$.extend(ajaxData,Y),window.ref=ajaxData.ref=F.ref,ajaxData.refs=Y.refs;var V,W,Q=d(),G=d();F.appId?(W="app/id/",V=HOST+W+F.appId):(W="app/package/",V=HOST+W+F.packageName);var X={url:V,data:ajaxData,key:W,load:S,callBack:e};g.getJSON(X),window.setFavorite=function(a){var e=$("#J_favorite"),s=$("#favorite"),t=s.find("g"),i=s.find("path");"true"===a?(e.addClass("favorited"),t.attr("stroke",K),i.attr("fill",K)):(e.removeClass("favorited"),t.attr("stroke","#666"),i.attr("fill","#fff"))}});