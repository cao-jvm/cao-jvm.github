
  lastScrollY=0;
  function heartBeat(){
  var diffY;
  if (document.documentElement && document.documentElement.scrollTop)
   diffY = document.documentElement.scrollTop;
  else if (document.body)
   diffY = document.body.scrollTop
  else
      {/*Netscape stuff*/}
  //alert(diffY);
  percent=.1*(diffY-lastScrollY);
  if(percent>0)percent=Math.ceil(percent);
  else percent=Math.floor(percent);
  document.getElementById("zzjs_net_1").style.top=parseInt(document.getElementById
  ("zzjs_net_1").style.top)+percent+"px";
  lastScrollY=lastScrollY+percent;
  //alert(lastScrollY);
  }
  j1="<div id=\"zzjs_net_1\" style='left:2px;position:absolute;top:120px;'>"+
  "<a href='http://www.cao-jvm.github.io' target='_blank'><img src='image/dmz.jpg'/></a></div>"
  document.write(j1);
  window.setInterval("heartBeat()",1);
