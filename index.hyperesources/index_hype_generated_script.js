//	HYPE.documents["index"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="index.hyperesources",f="index",g="index_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/index_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_664F||null!=window.HYPE_dtl_664F)||false==!0||null!=c&&10>c;a=!0==d?"HYPE-664.full.min.js":"HYPE-664.thin.min.js";c=!0==d?"F":"T";d=d?"":
"";if(false==!1&&(a=k("HYPE_664"+c,"HYPE_dtl_664"+c,a,d),false==!0&&(a=a||k("HYPE_w_664","HYPE_wdtl_664","HYPE-664.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_664","HYPE-664.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=document.getElementsByTagName("div"),
b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[{name:"initialize",source:"function(hypeDocument, element, event) {\t\n\tdocument.getElementById(\"countText\").style.visibility = \"hidden\";\n\tdocument.getElementById(\"launchText\").style.visibility = \"hidden\";\n\tdocument.getElementById(\"countText\").innerHTML = \"1000\";\n\n}",identifier:"13"},{name:"startCountdown",source:"function(hypeDocument, element, event) {\t\n\t// if the user clicks the countdown button, the scene will reset\n\tdocument.getElementById(\"countText\").style.visibility = \"hidden\";\n\tdocument.getElementById(\"launchText\").style.visibility = \"hidden\";\n\tdocument.getElementById(\"countText\").innerHTML = \"1000\";\n\thypeDocument.pauseTimelineNamed('moveRocket');\n\thypeDocument.goToTimeInTimelineNamed(0, 'moveRocket');\n\t\n\tdocument.getElementById(\"countText\").style.visibility = \"visible\";\n\tvar interval1 = setInterval(decrement, 10);\n\t\n\tfunction decrement() {\n\t\tvar currentValue = parseInt(document.getElementById(\"countText\").innerHTML);\n\t\tif (currentValue > 0) {\n\t\t\tcurrentValue = currentValue - 1;\n\t\t\tdocument.getElementById(\"countText\").innerHTML = currentValue;\n\t\t} else {\n\t\t\tdocument.getElementById(\"countText\").style.visibility = \"hidden\";\n\t\t\tdocument.getElementById(\"launchText\").style.visibility = \"visible\";\n\t\t\thypeDocument.startTimelineNamed('moveRocket');\n\t\t\tclearInterval(interval1);\n\t\t}\n\t}\n}",identifier:"14"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_664"+c](f,g,{"0":{p:1,n:"rocket.png",g:"5",t:"@1x"},"-1":{n:"PIE.htc"},"-2":{n:"blank.gif"}},l,[],e,[{n:"Untitled Scene",o:"1",X:[0]}],
[{A:{a:[{p:4,h:"13"}]},o:"3",p:"600px",cA:false,Y:800,Z:600,c:"#FFBAAE",L:[],bY:1,d:800,U:{},T:{"7_pressed":{q:false,z:1,i:"7_pressed",n:"7_pressed",a:[{f:"c",y:0,z:1,i:"g",e:"#9BA",s:"#D5F0EF",o:"18"},{y:1,i:"g",s:"#9BA",z:0,o:"18",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{y:0,i:"B",s:"#FFF",z:0,o:"18",f:"c"},{y:0,i:"C",s:"#FFF",z:0,o:"18",f:"c"},{y:0,i:"D",s:"#FFF",z:0,o:"18",f:"c"},{y:0,i:"A",s:"#FFF",z:0,o:"18",f:"c"},{y:0,i:"b",s:120,z:0,o:"18",f:"c"},{y:0,i:"a",s:162,z:0,o:"18",f:"c"},{y:0,i:"N",s:5,z:0,o:"18",f:"c"},{y:0,i:"O",s:5,z:0,o:"18",f:"c"},{y:0,i:"P",s:5,z:0,o:"18",f:"c"},{y:0,i:"M",s:5,z:0,o:"18",f:"c"}],f:30,b:[]},"12":{q:false,z:2,i:"12",n:"moveRocket",a:[{f:"c",y:0,z:2,i:"b",e:-165,s:398,o:"16"},{f:"c",y:0,z:2,i:"a",e:497,s:497,o:"16"},{y:2,i:"a",s:497,z:0,o:"16",f:"c"},{y:2,i:"b",s:-165,z:0,o:"16",f:"c"}],f:30,b:[]},"7_hover":{q:false,z:1,i:"7_hover",n:"7_hover",a:[{f:"c",y:0,z:1,i:"g",e:"#BDC",s:"#D5F0EF",o:"18"},{y:1,i:"g",s:"#BDC",z:0,o:"18",f:"c"}],f:30,b:[]}},bZ:180,O:["18","15","17","16"],n:"Untitled Layout","_":0,v:{"17":{aU:8,bB:2,G:"#2C25BD",b:330,aT:8,aV:8,r:"inline",d:49,e:1,s:"Copperplate,sans-serif",bC:2,gg:"0",t:36,c:244,Z:"break-word",i:"launchText",w:"LAUNCH",j:"absolute",x:"visible",aZ:3,k:"div",y:"preserve",z:4,Q:0,aS:8,R:"#000",S:0,a:104,bA:"#012BFF",T:0,F:"center"},"16":{h:"5",p:"no-repeat",x:"visible",a:497,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:1,k:"div",b:398,d:150,c:84},"15":{aU:8,bB:2,G:"#2C25BD",b:215,aT:8,aV:8,r:"inline",d:37,e:1,s:"Copperplate,sans-serif",bC:2,gg:"0",t:36,c:119,Z:"break-word",i:"countText",w:"10",j:"absolute",x:"visible",aZ:3,k:"div",y:"preserve",z:3,Q:0,aS:8,R:"#000",S:0,a:166,bA:"#012BFF",T:0,F:"center"},"18":{b:120,z:2,K:"Solid",c:121,L:"Solid",d:15,aS:6,M:5,bD:"none",N:5,aT:6,dB:"button",O:5,g:"#D5F0EF",aU:6,P:5,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#FFF",B:"#FFF",aM:"7_hover",r:"inline",C:"#FFF",Z:"break-word",s:"Copperplate,sans-serif",aN:"7_pressed",D:"#FFF",t:16,F:"center",aA:{a:[{p:4,h:"14"}]},G:"#2C25BD",aP:"pointer",w:"COUNTDOWN",x:"visible",I:"Solid",a:162,y:"preserve",J:"Solid"}}}],{},h,{},null,false,true,-1,true,true,false,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();
