!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"9gVZ":function(t,o,n){"use strict";n.r(o),n.d(o,"ImageViewerPageModule",function(){return D});var s=n("ofXK"),a=n("fXoL");function l(e,t){if(1&e){var i=a.Wb();a.Vb(0,"div",2),a.dc("click",function(){return a.rc(i),a.fc().toggleZoom()}),a.Ub()}if(2&e){var o=a.fc();a.Ib("pz-zoom-button-out",o.isZoomedIn)}}var r,h,c=["*"],m={transitionDuration:200,doubleTap:!0,doubleTapScale:2,limitZoom:"original image size",autoZoomOut:!1,disabled:!1,overflow:"hidden",zoomControlScale:1,backgroundColor:"rgba(0,0,0,0.85)",minScale:0,minPanScale:1.0001,disableZoomControl:"auto",listeners:"mouse and touch",wheel:!0,wheelZoomFactor:.2,draggableImage:!1},u={"transition-duration":"transitionDuration","double-tap":"doubleTap","double-tap-scale":"doubleTapScale","zoom-button":"zoomButton","auto-zoom-out":"autoZoomOut","limit-zoom":"limitZoom"},p=function(){function t(i){var o=this;e(this,t),this.eventType=void 0,this.handlers={},this.startX=0,this.startY=0,this.lastTap=0,this.doubleTapMinTimeout=300,this.tapMinTimeout=200,this.touchstartTime=0,this.i=0,this.isMousedown=!1,this.touchListeners={touchstart:"handleTouchstart",touchmove:"handleTouchmove",touchend:"handleTouchend"},this.mouseListeners={mousedown:"handleMousedown",mousemove:"handleMousemove",mouseup:"handleMouseup",wheel:"handleWheel"},this.otherListeners={resize:"handleResize"},this.handleTouchstart=function(e){o.elementPosition=o.getElementPosition(),o.touchstartTime=(new Date).getTime(),void 0===o.eventType&&o.getTouchstartPosition(e),o.runHandler("touchstart",e)},this.handleTouchmove=function(e){o.detectPan(e.touches)&&o.runHandler("pan",e),o.detectPinch(e)&&o.runHandler("pinch",e)},this.handleTouchend=function(e){var t=e.touches;o.detectDoubleTap()&&o.runHandler("double-tap",e),o.detectTap(),o.runHandler("touchend",e),o.eventType="touchend",t&&0===t.length&&(o.eventType=void 0,o.i=0)},this.handleMousedown=function(e){o.isMousedown=!0,o.elementPosition=o.getElementPosition(),o.touchstartTime=(new Date).getTime(),void 0===o.eventType&&o.getMousedownPosition(e),o.runHandler("mousedown",e)},this.handleMousemove=function(e){if(o.isMousedown){switch(o.runHandler("pan",e),o.detectLinearSwipe(e)){case"horizontal-swipe":e.swipeType="horizontal-swipe",o.runHandler("horizontal-swipe",e);break;case"vertical-swipe":e.swipeType="vertical-swipe",o.runHandler("vertical-swipe",e)}(o.detectLinearSwipe(e)||"horizontal-swipe"===o.eventType||"vertical-swipe"===o.eventType)&&o.handleLinearSwipe(e)}},this.handleMouseup=function(e){o.detectTap(),o.isMousedown=!1,o.runHandler("mouseup",e),o.eventType=void 0,o.i=0},this.handleWheel=function(e){o.runHandler("wheel",e)},this.handleResize=function(e){o.runHandler("resize",e)},this.properties=i,this.element=this.properties.element,this.elementPosition=this.getElementPosition(),this.toggleEventListeners("addEventListener")}return i(t,[{key:"destroy",value:function(){this.toggleEventListeners("removeEventListener")}},{key:"toggleEventListeners",value:function(e){var t;for(var i in t="mouse and touch"===this.properties.listeners?Object.assign(this.touchListeners,this.mouseListeners):this.detectTouchScreen()?this.touchListeners:this.mouseListeners,this.properties.resize&&(t=Object.assign(t,this.otherListeners)),t){var o=t[i];"resize"===i?("addEventListener"===e&&window.addEventListener(i,this[o],!1),"removeEventListener"===e&&window.removeEventListener(i,this[o],!1)):"mouseup"===i||"mousemove"===i?("addEventListener"===e&&document.addEventListener(i,this[o],!1),"removeEventListener"===e&&document.removeEventListener(i,this[o],!1)):("addEventListener"===e&&this.element.addEventListener(i,this[o],!1),"removeEventListener"===e&&this.element.removeEventListener(i,this[o],!1))}}},{key:"handleLinearSwipe",value:function(e){this.i++,this.i>3&&(this.eventType=this.getLinearSwipeType(e)),"horizontal-swipe"===this.eventType&&this.runHandler("horizontal-swipe",e),"vertical-swipe"===this.eventType&&this.runHandler("vertical-swipe",e)}},{key:"runHandler",value:function(e,t){this.handlers[e]&&this.handlers[e](t)}},{key:"detectPan",value:function(e){return 1===e.length&&!this.eventType||"pan"===this.eventType}},{key:"detectDoubleTap",value:function(){var e=this;if(null==this.eventType){var t=(new Date).getTime(),i=t-this.lastTap;if(clearTimeout(this.doubleTapTimeout),i<this.doubleTapMinTimeout&&i>0)return!0;this.doubleTapTimeout=setTimeout(function(){clearTimeout(e.doubleTapTimeout)},this.doubleTapMinTimeout),this.lastTap=t}}},{key:"detectTap",value:function(){if(null==this.eventType){var e=(new Date).getTime()-this.touchstartTime;e>0&&this.runHandler(e<this.tapMinTimeout?"tap":"longtap",{})}}},{key:"detectPinch",value:function(e){return 2===e.touches.length&&void 0===this.eventType||"pinch"===this.eventType}},{key:"detectLinearSwipe",value:function(e){var t=e.touches;if(t){if(1===t.length&&!this.eventType||"horizontal-swipe"===this.eventType||"vertical-swipe"===this.eventType)return this.getLinearSwipeType(e)}else if(!this.eventType||"horizontal-swipe"===this.eventType||"vertical-swipe"===this.eventType)return this.getLinearSwipeType(e)}},{key:"getLinearSwipeType",value:function(e){if("horizontal-swipe"!==this.eventType&&"vertical-swipe"!==this.eventType){var t=Math.abs(this.moveLeft(0,e)-this.startX);return 3*Math.abs(this.moveTop(0,e)-this.startY)>t?"vertical-swipe":"horizontal-swipe"}return this.eventType}},{key:"getElementPosition",value:function(){return this.element.getBoundingClientRect()}},{key:"getTouchstartPosition",value:function(e){this.startX=e.touches[0].clientX-this.elementPosition.left,this.startY=e.touches[0].clientY-this.elementPosition.top}},{key:"getMousedownPosition",value:function(e){this.startX=e.clientX-this.elementPosition.left,this.startY=e.clientY-this.elementPosition.top}},{key:"moveLeft",value:function(e,t){var i=t.touches;return i?i[e].clientX-this.elementPosition.left:t.clientX-this.elementPosition.left}},{key:"moveTop",value:function(e,t){var i=t.touches;return i?i[e].clientY-this.elementPosition.top:t.clientY-this.elementPosition.top}},{key:"detectTouchScreen",value:function(){var e,t=" -webkit- -moz- -o- -ms- ".split(" ");return"ontouchstart"in window||(e=["(",t.join("touch-enabled),("),"heartz",")"].join(""),window.matchMedia(e).matches)}},{key:"on",value:function(e,t){e&&(this.handlers[e]=t)}}]),t}(),g={doubleTap:!0,doubleTapScale:2,transitionDuration:200,limitZoom:"original image size",minScale:0,minPanScale:1.0001,wheel:!0,wheelZoomFactor:.2,draggableImage:!0,listeners:"auto",zoomControlScale:2},d=function(){function t(i){var o=this;e(this,t),this.i=0,this.scale=1,this.initialScale=1,this.startX=0,this.startY=0,this.moveX=0,this.moveY=0,this.initialMoveX=0,this.initialMoveY=0,this.moveXC=0,this.moveYC=0,this.lastTap=0,this.draggingMode=!1,this.distance=0,this.doubleTapTimeout=0,this.initialDistance=0,this.events={},this.maxHtmlContentScale=3,this.maxScale=3,this.handleTouchstart=function(e){o.getElementPosition(),void 0===o.eventType&&o.getTouchstartPosition(e)},this.handleTouchend=function(e){if("touchend"===e.type){o.i=0,o.draggingMode=!1;var t=e.touches;o.scale<1&&(o.scale=1),o.properties.autoZoomOut&&"pinch"===o.eventType&&(o.scale=1),("pinch"===o.eventType||"pan"===o.eventType&&o.scale>o.properties.minPanScale)&&o.alignImage(),"pinch"!==o.eventType&&"pan"!==o.eventType&&"horizontal-swipe"!==o.eventType&&"vertical-swipe"!==o.eventType||o.updateInitialValues(),o.eventType="touchend",t&&0===t.length&&(o.eventType=void 0)}"mouseup"===e.type&&(o.draggingMode=!1,o.updateInitialValues(),o.eventType=void 0)},this.handlePan=function(e){if(!(o.scale<o.properties.minPanScale||o.properties.disablePan)){e.preventDefault();var t=o.getClientPosition(e),i=t.clientX,n=t.clientY;o.eventType||(o.startX=i-o.elementPosition.left,o.startY=n-o.elementPosition.top),o.eventType="pan",o.moveX=o.initialMoveX+(o.moveLeft(e,0)-o.startX),o.moveY=o.initialMoveY+(o.moveTop(e,0)-o.startY),o.properties.limitPan&&(o.limitPanY(),o.limitPanX()),"mousemove"===e.type&&o.scale>o.properties.minPanScale&&o.centeringImage(),o.transformElement(0)}},this.handleDoubleTap=function(e){o.toggleZoom(e)},this.handlePinch=function(e){if(e.preventDefault(),void 0===o.eventType||"pinch"===o.eventType){var t=e.touches;if(!o.eventType){o.initialDistance=o.getDistance(t);var i=o.moveLeft(e,0),n=o.moveLeft(e,1),s=o.moveTop(e,0),a=o.moveTop(e,1);o.moveXC=(i+n)/2-o.initialMoveX,o.moveYC=(s+a)/2-o.initialMoveY}o.eventType="pinch",o.distance=o.getDistance(t),o.scale=o.initialScale*(o.distance/o.initialDistance),o.moveX=o.initialMoveX-(o.distance/o.initialDistance*o.moveXC-o.moveXC),o.moveY=o.initialMoveY-(o.distance/o.initialDistance*o.moveYC-o.moveYC),o.handleLimitZoom(),o.properties.limitPan&&(o.limitPanY(),o.limitPanX()),o.transformElement(0)}},this.handleWheel=function(e){e.preventDefault();var t=o.properties.wheelZoomFactor||0,i=o.initialScale+(e.deltaY<0?t:-t);i<1+t?i=1:i<o.maxScale&&i>o.maxScale-t&&(i=o.maxScale),i<1||i>o.maxScale||i!==o.scale&&(o.getElementPosition(),o.scale=i,o.setZoom({scale:i,center:[e.clientX-o.elementPosition.left-o.initialMoveX,e.clientY-o.elementPosition.top-o.initialMoveY]}))},this.handleResize=function(e){o.setAutoHeight()},this.element=i.element,this.elementTarget=this.element.querySelector("*").tagName,this.parentElement=this.element.parentElement,this.properties=Object.assign({},g,i),this.pollLimitZoom(),this.touches=new p({element:i.element,listeners:this.properties.listeners,resize:this.properties.autoHeight}),this.setBasicStyles(),this.touches.on("touchstart",this.handleTouchstart),this.touches.on("touchend",this.handleTouchend),this.touches.on("mousedown",this.handleTouchstart),this.touches.on("mouseup",this.handleTouchend),this.touches.on("pan",this.handlePan),this.touches.on("mousemove",this.handlePan),this.touches.on("pinch",this.handlePinch),this.properties.wheel&&this.touches.on("wheel",this.handleWheel),this.properties.doubleTap&&this.touches.on("double-tap",this.handleDoubleTap),this.properties.autoHeight&&this.touches.on("resize",this.handleResize)}return i(t,[{key:"handleLimitZoom",value:function(){var e=this.maxScale,t=this.properties.minScale||0;if(this.scale>e||this.scale<=t){var i=this.getImageWidth(),o=this.getImageHeight(),n=this.moveX/(i*this.scale-i),s=this.moveY/(o*this.scale-o);this.scale>e&&(this.scale=e),this.scale<=t&&(this.scale=t);var a=o*this.scale;this.moveX=-Math.abs(n*(i*this.scale-i)),this.moveY=-Math.abs(-s*(a-o))}}},{key:"getLimitZoom",value:function(){if("original image size"!==this.properties.limitZoom)return this.maxScale=this.properties.limitZoom||0,this.maxScale;if("IMG"!==this.elementTarget)return this.maxScale=this.maxHtmlContentScale,this.maxScale;var e=this.element.getElementsByTagName("img")[0];return e.naturalWidth&&e.offsetWidth?(this.maxScale=e.naturalWidth/e.offsetWidth,this.maxScale):void 0}},{key:"moveLeft",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this.getClientPosition(e,t).clientX-this.elementPosition.left}},{key:"moveTop",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this.getClientPosition(e,t).clientY-this.elementPosition.top}},{key:"centeringImage",value:function(){var e=this.element.getElementsByTagName(this.elementTarget)[0],t=this.moveX,i=this.moveY;return this.moveY>0&&(this.moveY=0),this.moveX>0&&(this.moveX=0),e&&(this.limitPanY(),this.limitPanX()),e&&this.scale<1&&this.moveX<this.element.offsetWidth*(1-this.scale)&&(this.moveX=this.element.offsetWidth*(1-this.scale)),t!==this.moveX||i!==this.moveY}},{key:"limitPanY",value:function(){var e=this.getImageHeight(),t=e*this.scale,i=this.parentElement.offsetHeight,o=this.element.offsetHeight;if(t<i)this.moveY=(i-o*this.scale)/2;else{var n=(e-o)*this.scale/2;this.moveY>n?this.moveY=n:t+Math.abs(n)-i+this.moveY<0&&(this.moveY=-(t+Math.abs(n)-i))}}},{key:"limitPanX",value:function(){var e=this.getImageWidth(),t=e*this.scale,i=this.parentElement.offsetWidth,o=this.element.offsetWidth;if(t<i)this.moveX=(i-o*this.scale)/2;else{var n=(e-o)*this.scale/2;this.moveX>n?this.moveX=n:t+Math.abs(n)-i+this.moveX<0&&(this.moveX=-(e*this.scale+Math.abs(n)-i))}}},{key:"setBasicStyles",value:function(){this.element.style.display="flex",this.element.style.alignItems="center",this.element.style.justifyContent="center",this.element.style.transformOrigin="0 0",this.setImageSize(),this.setDraggableImage()}},{key:"removeBasicStyles",value:function(){this.element.style.display="",this.element.style.alignItems="",this.element.style.justifyContent="",this.element.style.transformOrigin="",this.removeImageSize(),this.removeDraggableImage()}},{key:"setDraggableImage",value:function(){var e=this.getImageElement();e&&(e.draggable=this.properties.draggableImage)}},{key:"removeDraggableImage",value:function(){var e=this.getImageElement();e&&(e.draggable=!0)}},{key:"setImageSize",value:function(){var e=this.element.getElementsByTagName(this.elementTarget);e.length&&(e[0].style.maxWidth="100%",e[0].style.maxHeight="100%",this.setAutoHeight())}},{key:"setAutoHeight",value:function(){var e=this.element.getElementsByTagName(this.elementTarget);if(this.properties.autoHeight&&e.length){var t=e[0].getAttribute("width"),i=e[0].getAttribute("height");e[0].style.maxHeight=this.parentElement.offsetWidth/(t/i)+"px"}}},{key:"removeImageSize",value:function(){var e=this.element.getElementsByTagName(this.elementTarget);e.length&&(e[0].style.maxWidth="",e[0].style.maxHeight="")}},{key:"getElementPosition",value:function(){this.elementPosition=this.element.parentElement.getBoundingClientRect()}},{key:"getTouchstartPosition",value:function(e){var t=this.getClientPosition(e),i=t.clientX,o=t.clientY;this.startX=i-this.elementPosition.left,this.startY=o-this.elementPosition.top}},{key:"getClientPosition",value:function(e){var t,i,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return"touchstart"!==e.type&&"touchmove"!==e.type||(t=e.touches[o].clientX,i=e.touches[o].clientY),"mousedown"!==e.type&&"mousemove"!==e.type||(t=e.clientX,i=e.clientY),{clientX:t,clientY:i}}},{key:"resetScale",value:function(){this.scale=1,this.moveX=0,this.moveY=0,this.updateInitialValues(),this.transformElement(this.properties.transitionDuration)}},{key:"updateInitialValues",value:function(){this.initialScale=this.scale,this.initialMoveX=this.moveX,this.initialMoveY=this.moveY}},{key:"getDistance",value:function(e){return Math.sqrt(Math.pow(e[0].pageX-e[1].pageX,2)+Math.pow(e[0].pageY-e[1].pageY,2))}},{key:"getImageHeight",value:function(){return this.element.getElementsByTagName(this.elementTarget)[0].offsetHeight}},{key:"getImageWidth",value:function(){return this.element.getElementsByTagName(this.elementTarget)[0].offsetWidth}},{key:"transformElement",value:function(e){this.element.style.transition="all "+e+"ms",this.element.style.transform="matrix("+Number(this.scale)+", 0, 0, "+Number(this.scale)+", "+Number(this.moveX)+", "+Number(this.moveY)+")"}},{key:"isTouchScreen",value:function(){var e=" -webkit- -moz- -o- -ms- ".split(" ");if("ontouchstart"in window)return!0;var t=["(",e.join("touch-enabled),("),"heartz",")"].join("");return this.getMatchMedia(t)}},{key:"getMatchMedia",value:function(e){return window.matchMedia(e).matches}},{key:"isDragging",value:function(){if(this.properties.disablePan)return!1;var e=this.getImageHeight(),t=this.getImageWidth();return this.scale>1?e*this.scale>this.parentElement.offsetHeight||t*this.scale>this.parentElement.offsetWidth:1===this.scale?e>this.parentElement.offsetHeight||t>this.parentElement.offsetWidth:void 0}},{key:"pollLimitZoom",value:function(){var e=this,t=setInterval(function(){e.getLimitZoom()&&clearInterval(t)},10)}},{key:"getImageElement",value:function(){var e=this.element.getElementsByTagName(this.elementTarget);if(e.length)return e[0]}},{key:"toggleZoom",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(1===this.initialScale){if(e&&e.changedTouches){if(void 0===this.properties.doubleTapScale)return;var t=e.changedTouches;this.scale=this.initialScale*this.properties.doubleTapScale,this.moveX=this.initialMoveX-(t[0].clientX-this.elementPosition.left)*(this.properties.doubleTapScale-1),this.moveY=this.initialMoveY-(t[0].clientY-this.elementPosition.top)*(this.properties.doubleTapScale-1)}else this.scale=this.initialScale*((this.properties.zoomControlScale||0)+1),this.moveX=this.initialMoveX-this.element.offsetWidth*(this.scale-1)/2,this.moveY=this.initialMoveY-this.element.offsetHeight*(this.scale-1)/2;this.centeringImage(),this.updateInitialValues(),this.transformElement(this.properties.transitionDuration)}else this.resetScale()}},{key:"setZoom",value:function(e){var t,i;this.scale=e.scale;var o=this.element.offsetWidth,n=o*this.scale/(o*this.initialScale);e.center?(t=e.center[0],i=e.center[1]):(t=o/2-this.initialMoveX,i=this.element.offsetHeight/2-this.initialMoveY),this.moveX=this.initialMoveX-(n*t-t),this.moveY=this.initialMoveY-(n*i-i),this.centeringImage(),this.updateInitialValues(),this.transformElement(this.properties.transitionDuration)}},{key:"alignImage",value:function(){this.centeringImage()&&(this.updateInitialValues(),this.transformElement(this.properties.transitionDuration))}},{key:"destroy",value:function(){this.removeBasicStyles(),this.touches.destroy()}}]),t}(),v=((h=function(){function t(i){e(this,t),this.elementRef=i,this.transitionDuration=200,this.doubleTap=!0,this.doubleTapScale=2,this.autoZoomOut=!1,this.disabled=!1,this.zoomControlScale=1,this.backgroundColor="rgba(0,0,0,0.85)",this.minPanScale=1.0001,this.minScale=0,this.listeners="mouse and touch",this.wheel=!0,this.autoHeight=!1,this.wheelZoomFactor=.2,this.draggableImage=!1,this.applyOptionsDefault(m,{})}return i(t,[{key:"properties",get:function(){return this._properties},set:function(e){e&&(this._properties=e)}},{key:"hostOverflow",get:function(){return this.properties.overflow}},{key:"hostBackgroundColor",get:function(){return this.properties.backgroundColor}},{key:"isTouchScreen",get:function(){var e,t=" -webkit- -moz- -o- -ms- ".split(" ");return"ontouchstart"in window||(e=["(",t.join("touch-enabled),("),"heartz",")"].join(""),window.matchMedia(e).matches)}},{key:"isDragging",get:function(){return this.pinchZoom.isDragging()}},{key:"isDisabled",get:function(){return this.properties.disabled}},{key:"scale",get:function(){return this.pinchZoom.scale}},{key:"isZoomedIn",get:function(){return this.scale>1}},{key:"ngOnInit",value:function(){this.initPinchZoom(),this.pollLimitZoom()}},{key:"ngOnChanges",value:function(e){var t=this.getProperties(e);t=this.renameProperties(t),this.applyOptionsDefault(m,t)}},{key:"ngOnDestroy",value:function(){this.destroy()}},{key:"initPinchZoom",value:function(){this.properties.disabled||(this.properties.element=this.elementRef.nativeElement.querySelector(".pinch-zoom-content"),this.pinchZoom=new d(this.properties))}},{key:"getProperties",value:function(e){var t={};for(var i in e)"properties"!==i&&(t[i]=e[i].currentValue),"properties"===i&&(t=e[i].currentValue);return t}},{key:"renameProperties",value:function(e){for(var t in e)u[t]&&(e[u[t]]=e[t],delete e[t]);return e}},{key:"applyOptionsDefault",value:function(e,t){this.properties=Object.assign({},e,t)}},{key:"toggleZoom",value:function(){this.pinchZoom.toggleZoom()}},{key:"isControl",value:function(){return!(this.isDisabled||"disable"===this.properties.disableZoomControl||this.isTouchScreen&&"auto"===this.properties.disableZoomControl)}},{key:"pollLimitZoom",value:function(){this.pinchZoom.pollLimitZoom()}},{key:"destroy",value:function(){this.pinchZoom.destroy()}}]),t}()).\u0275fac=function(e){return new(e||h)(a.Qb(a.n))},h.\u0275cmp=a.Kb({type:h,selectors:[["pinch-zoom"],["","pinch-zoom",""]],hostVars:4,hostBindings:function(e,t){2&e&&a.xc("overflow",t.hostOverflow)("background-color",t.hostBackgroundColor)},inputs:{transitionDuration:["transition-duration","transitionDuration"],doubleTap:["double-tap","doubleTap"],doubleTapScale:["double-tap-scale","doubleTapScale"],autoZoomOut:["auto-zoom-out","autoZoomOut"],disabled:"disabled",zoomControlScale:"zoomControlScale",backgroundColor:"backgroundColor",minPanScale:"minPanScale",minScale:"minScale",listeners:"listeners",wheel:"wheel",autoHeight:"autoHeight",wheelZoomFactor:"wheelZoomFactor",draggableImage:"draggableImage",properties:"properties",limitZoom:["limit-zoom","limitZoom"],disablePan:"disablePan",overflow:"overflow",disableZoomControl:"disableZoomControl",limitPan:"limitPan"},exportAs:["pinchZoom"],features:[a.Db],ngContentSelectors:c,decls:3,vars:3,consts:[[1,"pinch-zoom-content"],["class","pz-zoom-button pz-zoom-control-position-bottom",3,"pz-zoom-button-out","click",4,"ngIf"],[1,"pz-zoom-button","pz-zoom-control-position-bottom",3,"click"]],template:function(e,t){1&e&&(a.kc(),a.Vb(0,"div",0),a.jc(1),a.Ub(),a.yc(2,l,1,2,"div",1)),2&e&&(a.Ib("pz-dragging",t.isDragging),a.Fb(2),a.lc("ngIf",t.isControl()))},directives:[s.l],styles:["[_nghost-%COMP%]{display:block;overflow:hidden;position:relative}.pinch-zoom-content[_ngcontent-%COMP%]{height:inherit}.pz-dragging[_ngcontent-%COMP%]{cursor:all-scroll}.pz-zoom-button[_ngcontent-%COMP%]{-webkit-user-select:none;background-color:rgba(0,0,0,.8);background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgc3R5bGU9IiI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz48ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6IiBpZD0ic3ZnXzEiIGNsYXNzPSIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIvPjxwYXRoIGQ9Ik0xMiAxMGgtMnYySDl2LTJIN1Y5aDJWN2gxdjJoMnYxeiIgaWQ9InN2Z18zIiBjbGFzcz0iIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiLz48L2c+PC9zdmc+),url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz48ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6TTcgOWg1djFIN3oiIGlkPSJzdmdfMiIgY2xhc3M9IiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIi8+PC9nPjwvc3ZnPg==);background-position:50%,-1000px;background-repeat:no-repeat,no-repeat;background-size:40px;border-radius:4px;color:#fff;cursor:pointer;height:56px;opacity:.5;position:absolute;transition:opacity .1s;user-select:none;width:56px;z-index:1000}.pz-zoom-button-out[_ngcontent-%COMP%]{background-position:-1000px,50%}.pz-zoom-button[_ngcontent-%COMP%]:hover{opacity:.7}.pz-zoom-button.pz-zoom-control-position-right[_ngcontent-%COMP%]{margin-top:-28px;right:16px;top:50%}.pz-zoom-button.pz-zoom-control-position-right-bottom[_ngcontent-%COMP%]{bottom:32px;right:16px}.pz-zoom-button.pz-zoom-control-position-bottom[_ngcontent-%COMP%]{bottom:16px;left:50%;margin-left:-28px}.pz-zoom-control[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.8);border-radius:4px;overflow:hidden;position:absolute}.pz-zoom-control.pz-zoom-control-position-right[_ngcontent-%COMP%]{margin-top:-48px;right:16px;top:50%}.pz-zoom-control.pz-zoom-control-position-right-bottom[_ngcontent-%COMP%]{bottom:32px;right:16px}.pz-zoom-control.pz-zoom-control-position-bottom[_ngcontent-%COMP%]{bottom:16px;left:50%;margin-left:-48px}.pz-zoom-in[_ngcontent-%COMP%], .pz-zoom-out[_ngcontent-%COMP%]{background-position:50%;background-repeat:no-repeat;cursor:pointer;height:48px;opacity:1;width:48px}.pz-zoom-in[_ngcontent-%COMP%]:hover, .pz-zoom-out[_ngcontent-%COMP%]:hover{background-color:hsla(0,0%,100%,.2)}.pz-zoom-control-position-bottom[_ngcontent-%COMP%]   .pz-zoom-in[_ngcontent-%COMP%], .pz-zoom-control-position-bottom[_ngcontent-%COMP%]   .pz-zoom-out[_ngcontent-%COMP%]{float:right}.pz-disabled[_ngcontent-%COMP%]{cursor:default;opacity:.5}.pz-disabled[_ngcontent-%COMP%]:hover{background-color:hsla(0,0%,100%,0)}.pz-zoom-in[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgc3R5bGU9IiI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz48ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PHBhdGggZD0iTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ2MnoiIGlkPSJzdmdfMSIgY2xhc3M9IiIgc3Ryb2tlPSJub25lIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiLz48cGF0aCBkPSJNLTE1LjgzNjczNDQyMDQ2MTY1Myw0NC41MzU0MDkzMDY3MTAxOCBoNTguMjA0MDgwODI3NTkzMDkgdi02LjU3NjIyNjcyMzM2OTIyMTUgSC0xNS44MzY3MzQ0MjA0NjE2NTMgeiIgZmlsbD0ibm9uZSIgaWQ9InN2Z18yIiBjbGFzcz0iIiBzdHJva2U9Im5vbmUiLz48L2c+PC9zdmc+)}.pz-zoom-out[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz48ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PHBhdGggZD0iTTE5IDEzSDV2LTJoMTR2MnoiIGlkPSJzdmdfMSIgY2xhc3M9IiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIi8+PC9nPjwvc3ZnPg==)}"]}),h),f=((r=function t(){e(this,t)}).\u0275fac=function(e){return new(e||r)},r.\u0275mod=a.Ob({type:r}),r.\u0275inj=a.Nb({providers:[],imports:[[s.c]]}),r),y=n("PCNd"),b=n("tyNb"),I=n("lJxs"),T=n("/uUt"),z=n("KJy6"),M=n("jhN1"),S=n("zXXW"),P=n("9A8T");function w(e,t){if(1&e&&(a.Vb(0,"pinch-zoom"),a.Rb(1,"img",2),a.Ub()),2&e){var i=t.ngrxLet;a.Fb(1),a.lc("src",i,a.uc)}}var k,Z,x,C=[{path:"",component:(k=function t(i,o){var n=this;e(this,t),this.route=i,this.sanitizer=o,this.src$=this.route.paramMap.pipe(Object(I.a)(function(e){return e.get("src")}),Object(z.d)(),Object(T.a)(),Object(I.a)(function(e){return n.sanitizer.bypassSecurityTrustUrl(e)}))},k.\u0275fac=function(e){return new(e||k)(a.Qb(b.a),a.Qb(M.b))},k.\u0275cmp=a.Kb({type:k,selectors:[["app-image-viewer"]],decls:2,vars:2,consts:[["color","light",1,"dismiss",3,"standalone"],[4,"ngrxLet"],["decoding","async","loading","lazy",3,"src"]],template:function(e,t){1&e&&(a.Rb(0,"app-back-button",0),a.yc(1,w,2,1,"pinch-zoom",1)),2&e&&(a.lc("standalone",!0),a.Fb(1),a.lc("ngrxLet",t.src$))},directives:[S.a,P.a,v],styles:["[_nghost-%COMP%]{background:var(--ion-color-dark)}.dismiss[_ngcontent-%COMP%]{left:0;position:absolute;z-index:1}pinch-zoom[_ngcontent-%COMP%]{height:100%}"]}),k)}],L=((x=function t(){e(this,t)}).\u0275fac=function(e){return new(e||x)},x.\u0275mod=a.Ob({type:x}),x.\u0275inj=a.Nb({imports:[[b.j.forChild(C)],b.j]}),x),D=((Z=function t(){e(this,t)}).\u0275fac=function(e){return new(e||Z)},Z.\u0275mod=a.Ob({type:Z}),Z.\u0275inj=a.Nb({imports:[[y.a,L,f]]}),Z)}}])}();