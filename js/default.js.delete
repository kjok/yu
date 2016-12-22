
/*------------------------------------------------------------------------------------------------
openwin
--------------------------------------------------------------------------------------------------*/
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

/*------------------------------------------------------------------------------------------------
_blank ( rel="external")
--------------------------------------------------------------------------------------------------*/
  window.onload = function (windowonload)
  {
    var r1 = new RegExp ("external(=(\S+))?","i"),
        r2 = new RegExp ("^_+(\S+)$", "i"),
        r3 = new RegExp ("^(blank|self|parent|top)$", "i");
    return function ()
    {
      if (document.getElementsByTagName)
        {
          var anchors = document.getElementsByTagName ('a'),
              affix   = 0,
              count   = anchors.length,
              anchor, target, t;
          while (count > affix)
              if ((anchor = anchors [affix ++]).getAttribute ('href') || anchor.href)
                  if (r1.test (anchor.getAttribute ('rel') || anchor.rel || ""))
                      (target = (target = RegExp.$2)
                          ? (r2.test (target)
                              ? (r3.test (t = RegExp.$1)
                                  ? "_" + t
                                  : t)
                              : target)
                          : "_brank"),
                      ((anchor.setAttribute)
                        ? anchor.setAttribute ("target", target)
                        : (anchor.target = target));
        }
      if (windowonload)
        windowonload.apply (this, arguments);
    };
  } (window.onload);


/*------------------------------------------------------------------------------------------------
_rollover
--------------------------------------------------------------------------------------------------*/
function smartRollover() {
    if(document.getElementsByTagName) {
        var images = document.getElementsByTagName("img");

        for(var i=0; i < images.length; i++) {
            if(images[i].getAttribute("src").match("_off."))
            {
                images[i].onmouseover = function() {
                    this.setAttribute("src", this.getAttribute("src").replace("_off.", "_on."));
                }
                images[i].onmouseout = function() {
                    this.setAttribute("src", this.getAttribute("src").replace("_on.", "_off."));
                }
            }
        }
    }
}

// For INPUT
function smartRollover1() {
    if(document.getElementsByTagName) {
        var elements = document.getElementsByTagName("input");
        for(var i=0; i < elements.length; i++) {

            if ( elements[i].type == 'image' ) {
                elements[i].onmouseover = function() {
                    this.setAttribute("src", this.getAttribute("src").replace("_off.", "_on."));
                }
                elements[i].onmouseout = function() {
                    this.setAttribute("src", this.getAttribute("src").replace("_on.", "_off."));
                }
            }

        }
    }
}

if(window.addEventListener) {
    window.addEventListener("load", smartRollover, false);
    window.addEventListener("load", smartRollover1, false);
}
else if(window.attachEvent) {
    window.attachEvent("onload", smartRollover);
    window.attachEvent("onload", smartRollover1);
}


/*------------------------------------------------------------------------------------------------
 *  heightLine JavaScript Library beta4
 *  MIT-style license.
 *  2007 Kazuma Nishihata
 *  http://www.webcreativepark.net
 * _heightLine( class="heightLine" or class="heightLineParent")
--------------------------------------------------------------------------------------------------*/

new function(){
    function heightLine(){
        this.className="heightLine";
        this.parentClassName="heightLineParent"
        reg = new RegExp(this.className+"-([a-zA-Z0-9-_]+)", "i");
        objCN =new Array();
        var objAll = document.getElementsByTagName ? document.getElementsByTagName("*") : document.all;
        for(var i = 0; i < objAll.length; i++) {

            if ( typeof objAll[i].className === 'string' ) {

                var eltClass = objAll[i].className.split(/\s+/);

                for(var j = 0; j < eltClass.length; j++) {
                    if(eltClass[j] == this.className) {
                        if(!objCN["main CN"]) objCN["main CN"] = new Array();
                        objCN["main CN"].push(objAll[i]);
                        break;
                    }else if(eltClass[j] == this.parentClassName){
                        if(!objCN["parent CN"]) objCN["parent CN"] = new Array();
                        objCN["parent CN"].push(objAll[i]);
                        break;
                    }else if(eltClass[j].match(reg)){
                        var OCN = eltClass[j].match(reg)
                        if(!objCN[OCN]) objCN[OCN]=new Array();
                        objCN[OCN].push(objAll[i]);
                        break;
                    }
                }

            }

        }

        //check font size
        var e = document.createElement("div");
        var s = document.createTextNode("S");
        e.appendChild(s);
        e.style.visibility="hidden"
        e.style.position="absolute"
        e.style.top="0"
        document.body.appendChild(e);
        var defHeight = e.offsetHeight;

        changeBoxSize = function(){
            for(var key in objCN){
                if (objCN.hasOwnProperty(key)) {
                    //parent type
                    if(key == "parent CN"){
                        for(var i=0 ; i<objCN[key].length ; i++){
                            var max_height=0;
                            var CCN = objCN[key][i].childNodes;
                            for(var j=0 ; j<CCN.length ; j++){
                                if(CCN[j] && CCN[j].nodeType == 1){
                                    CCN[j].style.height="auto";
                                    max_height = max_height>CCN[j].offsetHeight?max_height:CCN[j].offsetHeight;
                                }
                            }
                            for(var j=0 ; j<CCN.length ; j++){
                                if(CCN[j].style){
                                    var stylea = CCN[j].currentStyle || document.defaultView.getComputedStyle(CCN[j], '');
                                    var newheight = max_height;
                                    if(stylea.paddingTop)newheight -= stylea.paddingTop.replace("px","");
                                    if(stylea.paddingBottom)newheight -= stylea.paddingBottom.replace("px","");
                                    if(stylea.borderTopWidth && stylea.borderTopWidth != "medium")newheight-= stylea.borderTopWidth.replace("px","");
                                    if(stylea.borderBottomWidth && stylea.borderBottomWidth != "medium")newheight-= stylea.borderBottomWidth.replace("px","");
                                    CCN[j].style.height =newheight+"px";
                                }
                            }
                        }
                    }else{
                        var max_height=0;
                        for(var i=0 ; i<objCN[key].length ; i++){
                            objCN[key][i].style.height="auto";
                            max_height = max_height>objCN[key][i].offsetHeight?max_height:objCN[key][i].offsetHeight;
                        }
                        for(var i=0 ; i<objCN[key].length ; i++){
                            if(objCN[key][i].style){
                                var stylea = objCN[key][i].currentStyle || document.defaultView.getComputedStyle(objCN[key][i], '');
                                    var newheight = max_height;
                                    if(stylea.paddingTop)newheight-= stylea.paddingTop.replace("px","");
                                    if(stylea.paddingBottom)newheight-= stylea.paddingBottom.replace("px","");
                                    if(stylea.borderTopWidth && stylea.borderTopWidth != "medium")newheight-= stylea.borderTopWidth.replace("px","")
                                    if(stylea.borderBottomWidth && stylea.borderBottomWidth != "medium")newheight-= stylea.borderBottomWidth.replace("px","");
                                    objCN[key][i].style.height =newheight+"px";
                            }
                        }
                    }
                }
            }
        }

        checkBoxSize = function(){
            if(defHeight != e.offsetHeight){
                changeBoxSize();
                defHeight= e.offsetHeight;
            }
        }
        changeBoxSize();
        setInterval(checkBoxSize,1000)
        window.onresize=changeBoxSize;
    }

    function addEvent(elm,listener,fn){
        try{
            elm.addEventListener(listener,fn,false);
        }catch(e){
            elm.attachEvent("on"+listener,fn);
        }
    }
    addEvent(window,"load",heightLine);
}




/*------------------------------------------------------------------------------------------------
 * scrollsmoothly.js
 * Copyright (c) 2008 KAZUMiX
 * http://d.hatena.ne.jp/KAZUMiX/20080418/scrollsmoothly
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
--------------------------------------------------------------------------------------------------*/
(function(){
   var easing = 0.25;
   var interval = 20;
   var d = document;
   var targetX = 0;
   var targetY = 0;
   var targetHash = '';
   var scrolling = false;
   var splitHref = location.href.split('#');
   var currentHref_WOHash = splitHref[0];
   var incomingHash = splitHref[1];
   var prevX = null;
   var prevY = null;

   addEvent(window, 'load', init);

   function init(){

     setOnClickHandler();

     if(incomingHash){
       if(window.attachEvent && !window.opera){

         setTimeout(function(){scrollTo(0,0);setScroll('#'+incomingHash);},50);
       }else{

         scrollTo(0, 0);
         setScroll('#'+incomingHash);
       }
     }
   }


   function addEvent(eventTarget, eventName, func){
     if(eventTarget.addEventListener){

       eventTarget.addEventListener(eventName, func, false);
     }else if(window.attachEvent){
       // IE
       eventTarget.attachEvent('on'+eventName, function(){func.apply(eventTarget);});
     }
   }

   function setOnClickHandler(){
     var links = d.links;
     for(var i=0; i<links.length; i++){

       var link = links[i];
       var splitLinkHref = link.href.split('#');
       if(currentHref_WOHash == splitLinkHref[0] && d.getElementById(splitLinkHref[1])){
         addEvent(link, 'click', startScroll);
       }
     }
   }

   function startScroll(event){

     if(event){
       event.preventDefault();
       //alert('modern');
     }else if(window.event){ // IE
       window.event.returnValue = false;
       //alert('ie');
     }

     setScroll(this.hash);
   }

   function setScroll(hash){

     var targetEle = d.getElementById(hash.substr(1));
     if(!targetEle)return;
     //alert(scrollSize.height);

     var ele = targetEle;
     var x = 0;
     var y = 0;
     while(ele){
       x += ele.offsetLeft;
       y += ele.offsetTop;
       ele = ele.offsetParent;
     }
     var maxScroll = getScrollMaxXY();
     targetX = Math.min(x, maxScroll.x);
     targetY = Math.min(y, maxScroll.y);
     targetHash = hash;

     if(!scrolling){
       scrolling = true;
       scroll();
     }
   }

   function scroll(){
     var currentX = d.documentElement.scrollLeft||d.body.scrollLeft;
     var currentY = d.documentElement.scrollTop||d.body.scrollTop;
     var vx = (targetX - currentX) * easing;
     var vy = (targetY - currentY) * easing;
     var nextX = currentX + vx;
     var nextY = currentY + vy;
     if((Math.abs(vx) < 1 && Math.abs(vy) < 1)
       || (prevX === currentX && prevY === currentY)){

       scrollTo(targetX, targetY);
       scrolling = false;
       location.hash = targetHash;
       prevX = prevY = null;
       return;
     }else{

       scrollTo(parseInt(nextX), parseInt(nextY));
       prevX = currentX;
       prevY = currentY;
       setTimeout(function(){scroll()},interval);
     }
   }

   function getDocumentSize(){
     return {width:Math.max(document.body.scrollWidth, document.documentElement.scrollWidth), height:Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)};
   }

   function getWindowSize(){
     var result = {};
     if(window.innerWidth){
       var box = d.createElement('div');
       with(box.style){
         position = 'absolute';
         top = '0px';
         left = '0px';
         width = '100%';
         height = '100%';
         margin = '0px';
         padding = '0px';
         border = 'none';
         visibility = 'hidden';
       }
       d.body.appendChild(box);
       var width = box.offsetWidth;
       var height = box.offsetHeight;
       d.body.removeChild(box);
       result = {width:width, height:height};
     }else{
       result = {width:d.documentElement.clientWidth || d.body.clientWidth, height:d.documentElement.clientHeight || d.body.clientHeight};
     }
     return result;
   }

   function getScrollMaxXY() {
     if(window.scrollMaxX && window.scrollMaxY){
       return {x:window.scrollMaxX, y:window.scrollMaxY};
     }
     var documentSize = getDocumentSize();
     var windowSize = getWindowSize();
     return {x:documentSize.width - windowSize.width, y:documentSize.height - windowSize.height};
   }

 }());



/*------------------------------------------------------------------------------------------------

insomnia!
http://insomnia.jp/
http://insomnia.jp/workshop/
--------------------------------------------------------------------------------------------------*/


/*

*/
uaName = navigator.userAgent;
appName = navigator.appVersion;


/*

*/


var fontSizeUnit = "%";

var perOrder = 10;

var defaultSize = 75;

var ckName = "FSCb";

var ckDays = 1;

var ckPath = "/"


/*
*/

var fsCK = GetCookie(ckName);

if ( fsCK == null ) {
  currentSize = defaultSize;
}
else{
  currentSize = Number(fsCK);
}


/*===================================
====================================*/

function fscRef(){

  if (( document.layers )||(( appName.indexOf("Mac",0) != -1 ) && ( uaName.indexOf("MSIE 4.0",0) != -1 ))){
    return false;
  }

  else if( document.body ){
    document.body.style.fontSize = currentSize + fontSizeUnit;
  }

}

// _______________________________________ end of function fscRef() ___


function fsc( CMD ){

  if( CMD == "larger" ){
    var newSize = Number( currentSize + perOrder );
    SetCookie( ckName , newSize );
  }

  if( CMD == "smaller" ){
    if ( currentSize != perOrder ){
      var newSize = Number( currentSize - perOrder );
      SetCookie( ckName , newSize );
    }
    else{
      var newSize=Number(currentSize);
    }
  }

  if( CMD == "default" ){
    var newSize = defaultSize;
    DeleteCookie( ckName );
  }

  if( document.layers ){
    window.alert( "Netscape Communicator4" );
    return false;
  }

  else if(( appName.indexOf("Mac",0) != -1 ) && ( uaName.indexOf("MSIE 4.0",0) != -1)){
    window.alert( "Sorry! MacIE4.0 is not supported." );
    return false;
  }

  else{

  currentSize = newSize;

  fscRef();
  }
}

// _______________________________________ end of function fsc() ___


function SetCookie(name,value){
  var dobj = new Date();
  dobj.setTime( dobj.getTime() + 24 * 60 * 60 * ckDays * 1000);
  var expiryDate = dobj.toGMTString();
  document.cookie = name + '=' + escape(value)+ ';expires=' + expiryDate + ';path=' + ckPath;
}

function GetCookie (name){
  var arg  = name + "=";
  var alen = arg.length;
  var clen = document.cookie.length;
  var i = 0;
  while (i < clen){
    var j = i + alen;
    if (document.cookie.substring(i, j) == arg)
    return getCookieVal (j);
    i = document.cookie.indexOf(" ", i) + 1;
    if (i == 0) break;
  }
   return null;
}

function getCookieVal (offset){
  var endstr = document.cookie.indexOf (";", offset);
  if (endstr == -1)
  endstr = document.cookie.length;
  return unescape(document.cookie.substring(offset,endstr));
}

function DeleteCookie(name){
  if (GetCookie(name)) {
    document.cookie = name + '=' +
    '; expires=Thu, 01-Jan-70 00:00:01 GMT;path='+ckPath;
  }
}

//EOF



