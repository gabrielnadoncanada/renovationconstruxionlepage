var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(a){a.fn.quicksand=function(b,c){var e={duration:750,easing:"swing",attribute:"data-id",adjustHeight:"auto",useScaling:true,enhancement:function(a){},selector:"> *",dx:0,dy:0};a.extend(e,c);if(a.browser.msie||typeof a.fn.scale=="undefined"){e.useScaling=false}var f;if(typeof arguments[1]=="function"){var f=arguments[1]}else if(typeof (arguments[2]=="function")){var f=arguments[2]}return this.each(function(c){var g;var h=[];var i=a(b).clone();var j=a(this);var k=a(this).css("height");var l;var m=false;var n=a(j).offset();var o=[];var p=a(this).find(e.selector);if(a.browser.msie&&a.browser.version.substr(0,1)<7){j.html("").append(i);return}var q=0;var r=function(){if(!q){q=1;$toDelete=j.find("> *");j.prepend(w.find("> *"));$toDelete.remove();if(m){j.css("height",l)}e.enhancement(j);if(typeof f=="function"){f.call(this)}}};var s=j.offsetParent();var t=s.offset();if(s.css("position")=="relative"){if(s.get(0).nodeName.toLowerCase()=="body"){}else{t.top+=parseFloat(s.css("border-top-width"))||0;t.left+=parseFloat(s.css("border-left-width"))||0}}else{t.top-=parseFloat(s.css("border-top-width"))||0;t.left-=parseFloat(s.css("border-left-width"))||0;t.top-=parseFloat(s.css("margin-top"))||0;t.left-=parseFloat(s.css("margin-left"))||0}if(isNaN(t.left)){t.left=0}if(isNaN(t.top)){t.top=0}t.left-=e.dx;t.top-=e.dy;j.css("height",a(this).height());p.each(function(b){o[b]=a(this).offset()});a(this).stop();var u=0;var v=0;p.each(function(b){a(this).stop();var c=a(this).get(0);if(c.style.position=="absolute"){u=-e.dx;v=-e.dy}else{u=e.dx;v=e.dy}c.style.position="absolute";c.style.margin="0";c.style.top=o[b].top-parseFloat(c.style.marginTop)-t.top+v+"px";c.style.left=o[b].left-parseFloat(c.style.marginLeft)-t.left+u+"px"});var w=a(j).clone();var x=w.get(0);x.innerHTML="";x.setAttribute("id","");x.style.height="auto";x.style.width=j.width()+"px";w.append(i);w.insertBefore(j);w.css("opacity",0);x.style.zIndex=-1;x.style.margin="0";x.style.position="absolute";x.style.top=n.top-t.top+"px";x.style.left=n.left-t.left+"px";if(e.adjustHeight==="dynamic"){j.animate({height:w.height()},e.duration,e.easing)}else if(e.adjustHeight==="auto"){l=w.height();if(parseFloat(k)<parseFloat(l)){j.css("height",l)}else{m=true}}p.each(function(b){var c=[];if(typeof e.attribute=="function"){g=e.attribute(a(this));i.each(function(){if(e.attribute(this)==g){c=a(this);return false}})}else{c=i.filter("["+e.attribute+"="+a(this).attr(e.attribute)+"]")}if(c.length){if(!e.useScaling){h.push({element:a(this),animation:{top:c.offset().top-t.top,left:c.offset().left-t.left,opacity:1}})}else{h.push({element:a(this),animation:{top:c.offset().top-t.top,left:c.offset().left-t.left,opacity:1,scale:"1.0"}})}}else{if(!e.useScaling){h.push({element:a(this),animation:{opacity:"0.0"}})}else{h.push({element:a(this),animation:{opacity:"0.0",scale:"0.0"}})}}});i.each(function(b){var c=[];var f=[];if(typeof e.attribute=="function"){g=e.attribute(a(this));p.each(function(){if(e.attribute(this)==g){c=a(this);return false}});i.each(function(){if(e.attribute(this)==g){f=a(this);return false}})}else{c=p.filter("["+e.attribute+"="+a(this).attr(e.attribute)+"]");f=i.filter("["+e.attribute+"="+a(this).attr(e.attribute)+"]")}var k;if(c.length===0){if(!e.useScaling){k={opacity:"1.0"}}else{k={opacity:"1.0",scale:"1.0"}}d=f.clone();var l=d.get(0);l.style.position="absolute";l.style.margin="0";l.style.top=f.offset().top-t.top+"px";l.style.left=f.offset().left-t.left+"px";d.css("opacity",0);if(e.useScaling){d.css("transform","scale(0.0)")}d.appendTo(j);h.push({element:a(d),animation:k})}});w.remove();e.enhancement(j);for(c=0;c<h.length;c++){h[c].element.animate(h[c].animation,e.duration,e.easing,r)}})}})(jQuery)

}
/*
     FILE ARCHIVED ON 17:40:57 Aug 26, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:40:56 Sep 17, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots.policy: 0.188
  LoadShardBlock: 1209.881 (3)
  load_resource: 874.116 (2)
  RedisCDXSource: 625.597
  captures_list: 1864.022
  esindex: 0.014
  PetaboxLoader3.resolve: 799.11 (4)
  exclusion.robots: 0.203
  PetaboxLoader3.datanode: 1091.421 (5)
  CDXLines.iter: 24.046 (3)
*/