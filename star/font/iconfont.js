(function(window){var svgSprite='<svg><symbol id="icon-pingfen" viewBox="0 0 1024 1024"><path d="M541.93664 840.76032l219.4688 132.38272c39.08096 23.59808 87.42912-11.41248 77.0304-55.91552l-58.05568-249.63072c-4.29056-18.6368 2.02752-38.17472 16.49152-50.7136l193.82784-167.84896c34.56512-29.93664 16.1536-86.63552-29.36832-90.58816l-255.49824-21.9136c-19.08736-1.58208-35.69152-13.66528-43.14624-31.2832l-99.7376-235.39712c-17.8432-42.02496-77.37344-42.02496-95.10912 0l-99.7376 235.39712c-7.45472 17.61792-24.05888 29.70112-43.14624 31.2832L69.2224 358.33344C23.7056 362.28608 5.29408 418.99008 39.85408 448.9216l193.82784 167.84896c14.45888 12.53888 20.7872 32.08192 16.49152 50.7136l-58.0608 249.63072c-10.38848 44.50304 37.95456 79.5136 77.03552 55.91552l219.47392-132.27008C505.00096 830.92992 525.55776 830.92992 541.93664 840.76032L541.93664 840.76032z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)