!function(n){var t="/www/beta2/header/quick_menu.js";return n&&n._tpls?void(n._tpls[t]=n._tpls[t]||{main:function(e,s){var i="",o=n.dguid(),u={init:function(){this.v8=!!"".trim,this.result=this.v8?"":[]},push:function(n){this.v8?this.result+=n:this.result.push(n)},html:function(){return this.v8?this.result:this.result.join("")}};switch(s=s||n.guid(),u.init(),i+="#"+s+"{  position: relative;}",i+="#"+s+" .spliter{  display: inline-block;  margin: 0 3px;  height: 16px;  border-left: 1px dotted #7b7c7d;  vertical-align: middle;}",i+="#"+s+" .link-menu-list a.link-text-menu{  display: inline-block;  vertical-align: top;  height: 50px;  line-height: 50px;  color: #999 !important;  position: relative;}",i+="#"+s+" .link-menu-list a.link-text-menu:hover{  color: #fff !important;}",i+="#"+s+" .link-menu-list a.link-drop-menu{  color: #999 !important;}",i+="#"+s+" .drop-menu-group{  position: relative;  display: inline-block;  vertical-align: top;  _vertical-align:middle;}",i+="#"+s+" .drop-menu-group .drop-tips{  position: absolute;  top: 50px;  right: 0;  display: none;}",i+="#"+s+" .drop-menu-group-active a.link-drop-menu{  color: #fff !important;}",i+="#"+s+" .drop-menu-group-active .drop-tips{  display: block;}",n.ie6?n._fixcss(i):u.push("<style>"+i+"</style>"),u.push('<div id="'+s+'">\n  <div class="link-menu-list">\n    '),e.pageType){case 0:u.push('\n          <a class="link-text-menu" href="'),u.push(null==LT.Env.wwwRoot?"":LT.Env.wwwRoot),u.push('user/regh#sfrom=click-pc_homepage-front_navigation-hunter_new" target="_blank">我是猎头</a>\n          <a class="link-text-menu" href="'),u.push(null==LT.Env.wwwRoot?"":LT.Env.wwwRoot),u.push('user/lpt/#sfrom=click-pc_homepage-front_navigation-ecomphr_new" target="_blank">我是企业HR</a>\n      ');break;case 1:u.push('\n          <a class="link-text-menu" href="'),u.push(null==LT.Env.wwwRoot?"":LT.Env.wwwRoot),u.push('" target="_blank">我是求职者</a>\n          <a class="link-text-menu" href="'),u.push(null==LT.Env.wwwRoot?"":LT.Env.wwwRoot),u.push('user/lpt/" target="_blank">我是企业HR</a>\n          <a class="link-text-menu" href="'),u.push(null==LT.Env.cltRoot?"":LT.Env.cltRoot),u.push('" target="_blank">猎头公司</a>\n      ');break;case 2:u.push('\n          <a class="link-text-menu" href="'),u.push(null==LT.Env.wwwRoot?"":LT.Env.wwwRoot),u.push('" target="_blank">我是求职者</a>\n          <a class="link-text-menu" href="'),u.push(null==LT.Env.wwwRoot?"":LT.Env.wwwRoot),u.push('user/regh" target="_blank">我是猎头</a>\n      ');break;default:u.push('\n          <a class="link-text-menu" data-selector="link-login" href="'),u.push(null==LT.Env.wwwRoot?"":LT.Env.wwwRoot),u.push('user/login/">登录</a>\n          <a class="link-text-menu" data-selector="link-register" href="'),u.push(null==LT.Env.wwwRoot?"":LT.Env.wwwRoot),u.push('user/regc/regloginemail/">注册</a>\n    ')}return u.push('\n    <span class="spliter"></span>\n    <span class="drop-menu-group">\n      <a\n        class="link-drop-menu"\n        title="手机猎聘网"\n        target="_blank"\n        href="http://phone.liepin.com/liepinmishu/iphone/introduce.html?mscid=c_a1_050#sfrom=click-pc_homepage-front_navigation-mobile_new"\n      ><i\n        data-icon="icons16-mobile-gray"\n        data-icon-hover="icons16-mobile-white"\n        class="icons16 icons16-mobile-gray"\n      ></i>手机猎聘</a>\n      <div class="drop-tips"></div>\n    </span>\n  </div>\n</div>'),u.push("<script>"),u.push("(function(window, document, undefined){\n"),u.push('  var $ROOT = $("#'+s+'");\n'),u.push('  var $TPLS = NodeTpl._tpls["'+t+'"];\n'),u.push('  var $DATA = NodeTpl._data["'+o+'"];\n'),u.push("$ROOT.find('.drop-menu-group')\n"),u.push("  .bind('mouseenter', function(){\n"),u.push("    var dropTips = $(this).find('.drop-tips');\n"),u.push("    $(this).addClass('drop-menu-group-active');\n"),u.push("    if(!dropTips.attr('data-inited')){\n"),u.push("      dropTips.attr('data-inited', 'inited');\n"),u.push("      NodeTpl.get('www/beta2/header/menu_mobile', function(d){\n"),u.push("        dropTips.append(d);\n"),u.push("      });\n"),u.push("    }\n"),u.push("    $(this)\n"),u.push("      .find('i[data-icon]')\n"),u.push("        .removeClass()\n"),u.push("        .addClass(function(){\n"),u.push("          return 'icons16 ' + $(this).attr('data-icon-hover');\n"),u.push("        });\n"),u.push("  })\n"),u.push("  .bind('mouseleave', function(){\n"),u.push("    $(this).removeClass('drop-menu-group-active');\n"),u.push("    $(this).find('i[data-icon]').removeClass().addClass(function(){\n"),u.push("      return 'icons16 ' + $(this).attr('data-icon');\n"),u.push("    });\n"),u.push("  });\n"),u.push("$ROOT.find('a[data-selector=\"link-login\"]').bind('click', function(event){\n"),u.push("  LT.User.requireLogin({\n"),u.push("    register: false,\n"),u.push("    callback: function(){\n"),u.push('      if(location.href.indexOf("/user/logout") !== -1){\n'),u.push('        location.href = LT.Env.wwwRoot + "home";\n'),u.push("      } else {\n"),u.push("        location.reload();\n"),u.push("      }\n"),u.push("    }\n"),u.push("  });\n"),u.push("  event.preventDefault();\n"),u.push("});\n"),u.push("$ROOT.find('a[data-selector=\"link-register\"]').bind('click', function(event){\n"),u.push("  LT.User.requireLogin({\n"),u.push("    register: true\n"),u.push("  });\n"),u.push("  event.preventDefault();\n"),u.push("});\n"),u.push("// 统计\n"),u.push("$ROOT.find('.link-drop-menu').bind('mouseenter', function(){\n"),u.push("  tlog=window.tlog||[];\n"),u.push("  tlog.push('s:w_cover_appdw');\n"),u.push("});\n"),u.push("})(window, document);\n"),u.push('delete NodeTpl._data["'+o+'"];\n'),u.push("</script>\n"),e&&(n._data[o]=e),u.html()}}):!1}(window.NodeTpl);