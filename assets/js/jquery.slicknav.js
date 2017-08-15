!function(n,e,t){function a(e,t){this.element=e,this.settings=n.extend({},i,t),this._defaults=i,this._name=s,this.init()}var i={label:"MENU",duplicate:!0,duration:200,easingOpen:"swing",easingClose:"swing",closedSymbol:"&#9658;",openedSymbol:"&#9660;",prependTo:"body",parentTag:"a",closeOnClick:!1,allowParentLinks:!1,nestedParentLinks:!0,showChildren:!1,removeIds:!1,removeClasses:!1,brand:"",init:function(){},beforeOpen:function(){},beforeClose:function(){},afterOpen:function(){},afterClose:function(){}},s="slicknav",l="slicknav";a.prototype.init=function(){var t,a,i=this,s=n(this.element),o=this.settings;if(o.duplicate?(i.mobileNav=s.clone(),i.mobileNav.removeAttr("id"),i.mobileNav.find("*").each(function(e,t){n(t).removeAttr("id")})):(i.mobileNav=s,i.mobileNav.removeAttr("id"),i.mobileNav.find("*").each(function(e,t){n(t).removeAttr("id")})),o.removeClasses&&(i.mobileNav.removeAttr("class"),i.mobileNav.find("*").each(function(e,t){n(t).removeAttr("class")})),t=l+"_icon",""===o.label&&(t+=" slicknav_no-text"),"a"==o.parentTag&&(o.parentTag='a href="#"'),i.mobileNav.attr("class",l+"_nav"),a=n('<div class="slicknav_menu"></div>'),""!==o.brand){var r=n('<div class="slicknav_brand">'+o.brand+"</div>");n(a).append(r)}i.btn=n(["<"+o.parentTag+' aria-haspopup="true" tabindex="0" class="'+l+"_btn "+l+'_collapsed">','<span class="slicknav_menutxt">'+o.label+"</span>",'<span class="'+t+'">','<span class="slicknav_icon-bar"></span>','<span class="slicknav_icon-bar"></span>','<span class="slicknav_icon-bar"></span>',"</span>","</"+o.parentTag+">"].join("")),n(a).append(i.btn),n(o.prependTo).prepend(a),a.append(i.mobileNav);var c=i.mobileNav.find("li");n(c).each(function(){var e=n(this),t={};if(t.children=e.children("ul").attr("role","menu"),e.data("menu",t),t.children.length>0){var a=e.contents(),s=!1,r=[];n(a).each(function(){if(n(this).is("ul"))return!1;r.push(this),n(this).is("a")&&(s=!0)});var c=n("<"+o.parentTag+' role="menuitem" aria-haspopup="true" tabindex="-1" class="'+l+'_item"/>');o.allowParentLinks&&!o.nestedParentLinks&&s?n(r).wrapAll('<span class="slicknav_parent-link slicknav_row"/>').parent():n(r).wrapAll(c).parent().addClass(l+"_row"),o.showChildren?e.addClass(l+"_open"):e.addClass(l+"_collapsed"),e.addClass(l+"_parent");var d=n('<span class="slicknav_arrow">'+(o.showChildren?o.openedSymbol:o.closedSymbol)+"</span>");o.allowParentLinks&&!o.nestedParentLinks&&s&&(d=d.wrap(c).parent()),n(r).last().after(d)}else 0===e.children().length&&e.addClass(l+"_txtnode");e.children("a").attr("role","menuitem").click(function(e){o.closeOnClick&&!n(e.target).parent().closest("li").hasClass(l+"_parent")&&n(i.btn).click()}),o.closeOnClick&&o.allowParentLinks&&(e.children("a").children("a").click(function(e){n(i.btn).click()}),e.find(".slicknav_parent-link a:not(.slicknav_item)").click(function(e){n(i.btn).click()}))}),n(c).each(function(){var e=n(this).data("menu");o.showChildren||i._visibilityToggle(e.children,null,!1,null,!0)}),i._visibilityToggle(i.mobileNav,null,!1,"init",!0),i.mobileNav.attr("role","menu"),n(e).mousedown(function(){i._outlines(!1)}),n(e).keyup(function(){i._outlines(!0)}),n(i.btn).click(function(n){n.preventDefault(),i._menuToggle()}),i.mobileNav.on("click",".slicknav_item",function(e){e.preventDefault(),i._itemClick(n(this))}),n(i.btn).keydown(function(n){13==(n||event).keyCode&&(n.preventDefault(),i._menuToggle())}),i.mobileNav.on("keydown",".slicknav_item",function(e){13==(e||event).keyCode&&(e.preventDefault(),i._itemClick(n(e.target)))}),o.allowParentLinks&&o.nestedParentLinks&&n(".slicknav_item a").click(function(n){n.stopImmediatePropagation()})},a.prototype._menuToggle=function(n){var e=this,t=e.btn,a=e.mobileNav;t.hasClass(l+"_collapsed")?(t.removeClass(l+"_collapsed"),t.addClass(l+"_open")):(t.removeClass(l+"_open"),t.addClass(l+"_collapsed")),t.addClass(l+"_animating"),e._visibilityToggle(a,t.parent(),!0,t)},a.prototype._itemClick=function(n){var e=this,t=e.settings,a=n.data("menu");a||((a={}).arrow=n.children(".slicknav_arrow"),a.ul=n.next("ul"),a.parent=n.parent(),a.parent.hasClass(l+"_parent-link")&&(a.parent=n.parent().parent(),a.ul=n.parent().next("ul")),n.data("menu",a)),a.parent.hasClass(l+"_collapsed")?(a.arrow.html(t.openedSymbol),a.parent.removeClass(l+"_collapsed"),a.parent.addClass(l+"_open"),a.parent.addClass(l+"_animating"),e._visibilityToggle(a.ul,a.parent,!0,n)):(a.arrow.html(t.closedSymbol),a.parent.addClass(l+"_collapsed"),a.parent.removeClass(l+"_open"),a.parent.addClass(l+"_animating"),e._visibilityToggle(a.ul,a.parent,!0,n))},a.prototype._visibilityToggle=function(e,t,a,i,s){var o=this,r=o.settings,c=o._getActionItems(e),d=0;a&&(d=r.duration),e.hasClass(l+"_hidden")?(e.removeClass(l+"_hidden"),s||r.beforeOpen(i),e.slideDown(d,r.easingOpen,function(){n(i).removeClass(l+"_animating"),n(t).removeClass(l+"_animating"),s||r.afterOpen(i)}),e.attr("aria-hidden","false"),c.attr("tabindex","0"),o._setVisAttr(e,!1)):(e.addClass(l+"_hidden"),s||r.beforeClose(i),e.slideUp(d,this.settings.easingClose,function(){e.attr("aria-hidden","true"),c.attr("tabindex","-1"),o._setVisAttr(e,!0),e.hide(),n(i).removeClass(l+"_animating"),n(t).removeClass(l+"_animating"),s?"init"==i&&r.init():r.afterClose(i)}))},a.prototype._setVisAttr=function(e,t){var a=this,i=e.children("li").children("ul").not(".slicknav_hidden");t?i.each(function(){var e=n(this);e.attr("aria-hidden","true"),a._getActionItems(e).attr("tabindex","-1"),a._setVisAttr(e,t)}):i.each(function(){var e=n(this);e.attr("aria-hidden","false"),a._getActionItems(e).attr("tabindex","0"),a._setVisAttr(e,t)})},a.prototype._getActionItems=function(n){var e=n.data("menu");if(!e){e={};var t=n.children("li"),a=t.find("a");e.links=a.add(t.find(".slicknav_item")),n.data("menu",e)}return e.links},a.prototype._outlines=function(e){e?n(".slicknav_item, .slicknav_btn").css("outline",""):n(".slicknav_item, .slicknav_btn").css("outline","none")},a.prototype.toggle=function(){this._menuToggle()},a.prototype.open=function(){var n=this;n.btn.hasClass(l+"_collapsed")&&n._menuToggle()},a.prototype.close=function(){var n=this;n.btn.hasClass(l+"_open")&&n._menuToggle()},n.fn[s]=function(e){var t=arguments;if(void 0===e||"object"==typeof e)return this.each(function(){n.data(this,"plugin_"+s)||n.data(this,"plugin_"+s,new a(this,e))});if("string"==typeof e&&"_"!==e[0]&&"init"!==e){var i;return this.each(function(){var l=n.data(this,"plugin_"+s);l instanceof a&&"function"==typeof l[e]&&(i=l[e].apply(l,Array.prototype.slice.call(t,1)))}),void 0!==i?i:this}}}(jQuery,document,window);