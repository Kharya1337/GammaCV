(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4062],{4062:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var a=n(2346);function l(e,t,n,a,l){e.fillStyle=a,e.fillText("".concat(t,": ").concat(n),e.canvas.width-10,e.canvas.height-10-28*l)}const o={op:function(e,t){return a.DV(e,t.MEAN_STD.layers)},params:{MEAN_STD:{name:"MEAN STD",layers:{name:"Number of Layers",type:"constant",min:1,max:10,step:1,default:2}}},tick:function(e,t){var n=t.canvas,o=t.operation,c=t.output,i=t.session,r=t.input;i.runOp(o,e,c),a.t4(n,r);var s=n.getContext("2d");s.textAlign="right",s.font="bold ".concat(18,"px ").concat(getComputedStyle(document.body).fontFamily),s.fillStyle="#fff",s.textBaseline="middle",l(s,"Mean R",c.get(0,0,0),"red",1),l(s,"Mean G",c.get(0,0,1),"green",2),l(s,"Mean B",c.get(0,0,2),"blue",3),l(s,"STD R",c.get(1,0,0),"red",4),l(s,"STD G",c.get(1,0,1),"green",5),l(s,"STD B",c.get(1,0,2),"blue",6)}}}}]);