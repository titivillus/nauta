window.Modernizr=function(e,t,n){function r(e){g.cssText=e}function o(e,t){return r(w.join(e+";")+(t||""))}function a(e,t){return typeof e===t}function i(e,t){return!!~(""+e).indexOf(t)}function c(e,t){for(var r in e){var o=e[r];if(!i(o,"-")&&g[o]!==n)return"pfx"!=t||o}return!1}function l(e,t,r){for(var o in e){var i=t[e[o]];if(i!==n)return!1===r?e[o]:a(i,"function")?i.bind(r||t):i}return!1}function s(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+C.join(r+" ")+r).split(" ");return a(t,"string")||a(t,"undefined")?c(o,t):(o=(e+" "+x.join(r+" ")+r).split(" "),l(o,t,n))}var u,f,d="2.7.1",p={},h=!0,m=t.documentElement,y="modernizr",v=t.createElement(y),g=v.style,b=":)",E={}.toString,w=" -webkit- -moz- -o- -ms- ".split(" "),S="Webkit Moz O ms",C=S.split(" "),x=S.toLowerCase().split(" "),j={svg:"http://www.w3.org/2000/svg"},T={},N=[],P=N.slice,k=function(e,n,r,o){var a,i,c,l,s=t.createElement("div"),u=t.body,f=u||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:y+(r+1),s.appendChild(c);return a=["&#173;",'<style id="s',y,'">',e,"</style>"].join(""),s.id=y,(u?s:f).innerHTML+=a,f.appendChild(s),u||(f.style.background="",f.style.overflow="hidden",l=m.style.overflow,m.style.overflow="hidden",m.appendChild(f)),i=n(s,e),u?s.parentNode.removeChild(s):(f.parentNode.removeChild(f),m.style.overflow=l),!!i},F={}.hasOwnProperty;f=a(F,"undefined")||a(F.call,"undefined")?function(e,t){return t in e&&a(e.constructor.prototype[t],"undefined")}:function(e,t){return F.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=P.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var a=new o,i=t.apply(a,n.concat(P.call(arguments)));return Object(i)===i?i:a}return t.apply(e,n.concat(P.call(arguments)))};return r}),T.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),i(g.backgroundColor,"rgba")},T.backgroundsize=function(){return s("backgroundSize")},T.borderradius=function(){return s("borderRadius")},T.boxshadow=function(){return s("boxShadow")},T.textshadow=function(){return""===t.createElement("div").style.textShadow},T.opacity=function(){return o("opacity:.55"),/^0.55$/.test(g.opacity)},T.csscolumns=function(){return s("columnCount")},T.csstransitions=function(){return s("transition")},T.fontface=function(){var e;return k('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),a=o.sheet||o.styleSheet,i=a?a.cssRules&&a.cssRules[0]?a.cssRules[0].cssText:a.cssText||"":"";e=/src/i.test(i)&&0===i.indexOf(r.split(" ")[0])}),e},T.generatedcontent=function(){var e;return k(["#",y,"{font:0/0 a}#",y,':after{content:"',b,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},T.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(e){}return n},T.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(e){}return n},T.svg=function(){return!!t.createElementNS&&!!t.createElementNS(j.svg,"svg").createSVGRect},T.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(E.call(t.createElementNS(j.svg,"clipPath")))};for(var O in T)f(T,O)&&(u=O.toLowerCase(),p[u]=T[O](),N.push((p[u]?"":"no-")+u));return p.addTest=function(e,t){if("object"==typeof e)for(var r in e)f(e,r)&&p.addTest(r,e[r]);else{if(e=e.toLowerCase(),p[e]!==n)return p;t="function"==typeof t?t():t,void 0!==h&&h&&(m.className+=" "+(t?"":"no-")+e),p[e]=t}return p},r(""),v=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=g.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=v[e[m]];return t||(t={},y++,e[m]=y,v[y]=t),t}function a(e,n,r){if(n||(n=t),u)return n.createElement(e);r||(r=o(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!a.canHaveChildren||p.test(e)||a.tagUrn?a:r.frag.appendChild(a)}function i(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||o(e);for(var a=n.frag.cloneNode(),i=0,c=r(),l=c.length;i<l;i++)a.createElement(c[i]);return a}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return g.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(g,t.frag)}function l(e){e||(e=t);var r=o(e);return g.shivCSS&&!s&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||c(e,r),e}var s,u,f="3.7.0",d=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m="_html5shiv",y=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",s="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(e){s=!0,u=!0}}();var g={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:f,shivCSS:!1!==d.shivCSS,supportsUnknownElements:u,shivMethods:!1!==d.shivMethods,type:"default",shivDocument:l,createElement:a,createDocumentFragment:i};e.html5=g,l(t)}(this,t),p._version=d,p._prefixes=w,p._domPrefixes=x,p._cssomPrefixes=C,p.testProp=function(e){return c([e])},p.testAllProps=s,p.testStyles=k,m.className=m.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(h?" js "+N.join(" "):""),p}(0,this.document),function(e,t,n){function r(e){return"[object Function]"==y.call(e)}function o(e){return"string"==typeof e}function a(){}function i(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=v.shift();g=1,e?e.t?h(function(){("c"==e.t?d.injectCss:d.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),c()):g=0}function l(e,n,r,o,a,l,s){function u(t){if(!p&&i(f.readyState)&&(b.r=p=1,!g&&c(),f.onload=f.onreadystatechange=null,t)){"img"!=e&&h(function(){w.removeChild(f)},50);for(var r in T[n])T[n].hasOwnProperty(r)&&T[n][r].onload()}}var s=s||d.errorTimeout,f=t.createElement(e),p=0,y=0,b={t:r,s:n,e:a,a:l,x:s};1===T[n]&&(y=1,T[n]=[]),"object"==e?f.data=n:(f.src=n,f.type=e),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){u.call(this,y)},v.splice(o,0,b),"img"!=e&&(y||2===T[n]?(w.insertBefore(f,E?null:m),h(u,s)):T[n].push(f))}function s(e,t,n,r,a){return g=0,t=t||"j",o(e)?l("c"==t?C:S,e,t,this.i++,n,r,a):(v.splice(this.i++,0,e),1==v.length&&c()),this}function u(){var e=d;return e.loader={load:s,i:0},e}var f,d,p=t.documentElement,h=e.setTimeout,m=t.getElementsByTagName("script")[0],y={}.toString,v=[],g=0,b="MozAppearance"in p.style,E=b&&!!t.createRange().compareNode,w=E?p:m.parentNode,p=e.opera&&"[object Opera]"==y.call(e.opera),p=!!t.attachEvent&&!p,S=b?"object":p?"script":"img",C=p?"script":S,x=Array.isArray||function(e){return"[object Array]"==y.call(e)},j=[],T={},N={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};d=function(e){function t(e){var t,n,r,e=e.split("!"),o=j.length,a=e.pop(),i=e.length,a={url:a,origUrl:a,prefixes:e};for(n=0;n<i;n++)r=e[n].split("="),(t=N[r.shift()])&&(a=t(a,r));for(n=0;n<o;n++)a=j[n](a);return a}function i(e,o,a,i,c){var l=t(e),s=l.autoCallback;l.url.split(".").pop().split("?").shift(),l.bypass||(o&&(o=r(o)?o:o[e]||o[i]||o[e.split("/").pop().split("?")[0]]),l.instead?l.instead(e,o,a,i,c):(T[l.url]?l.noexec=!0:T[l.url]=1,a.load(l.url,l.forceCSS||!l.forceJS&&"css"==l.url.split(".").pop().split("?").shift()?"c":n,l.noexec,l.attrs,l.timeout),(r(o)||r(s))&&a.load(function(){u(),o&&o(l.origUrl,c,i),s&&s(l.origUrl,c,i),T[l.url]=2})))}function c(e,t){function n(e,n){if(e){if(o(e))n||(f=function(){var e=[].slice.call(arguments);d.apply(this,e),p()}),i(e,f,t,0,s);else if(Object(e)===e)for(l in c=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(l)&&(!n&&!--c&&(r(f)?f=function(){var e=[].slice.call(arguments);d.apply(this,e),p()}:f[l]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(d[l])),i(e[l],f,t,l,s))}else!n&&p()}var c,l,s=!!e.test,u=e.load||e.both,f=e.callback||a,d=f,p=e.complete||a;n(s?e.yep:e.nope,!!u),u&&n(u)}var l,s,f=this.yepnope.loader;if(o(e))i(e,0,f,0);else if(x(e))for(l=0;l<e.length;l++)s=e[l],o(s)?i(s,0,f,0):x(s)?d(s):Object(s)===s&&c(s,f);else Object(e)===e&&c(e,f)},d.addPrefix=function(e,t){N[e]=t},d.addFilter=function(e){j.push(e)},d.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",f=function(){t.removeEventListener("DOMContentLoaded",f,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,r,o,l,s){var u,f,p=t.createElement("script"),o=o||d.errorTimeout;p.src=e;for(f in r)p.setAttribute(f,r[f]);n=s?c:n||a,p.onreadystatechange=p.onload=function(){!u&&i(p.readyState)&&(u=1,n(),p.onload=p.onreadystatechange=null)},h(function(){u||(u=1,n(1))},o),l?p.onload():m.parentNode.insertBefore(p,m)},e.yepnope.injectCss=function(e,n,r,o,i,l){var s,o=t.createElement("link"),n=l?c:n||a;o.href=e,o.rel="stylesheet",o.type="text/css";for(s in r)o.setAttribute(s,r[s]);i||(m.parentNode.insertBefore(o,m),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};