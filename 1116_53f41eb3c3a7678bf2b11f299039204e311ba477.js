(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1116],{1116:(a,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>r});var s=e(2346);const r={op:function(a,t){var e=a;return e=s.se(a),s.T4(e,t.HOG.step,"visualize")},tick:function(a,t){var e=t.canvas,r=t.params,p=t.operation,n=t.output,o=t.session,u=p.shape[1],c=p.shape[0],v=r.HOG.step,f=r.HOG.step/2;o.runOp(p,a,n),s.qX(e,"rgb(0, 0, 0)");for(var i=0;i<u/3;i+=1)for(var h=0;h<c/3;h+=1){for(var g=1/0,k=-1/0,l=0;l<9;l+=1){var m=~~(l/3),H=l-3*m,O=n.get(3*h+m,3*i+H,0);O<g&&(g=O),O>k&&(k=O)}for(var b=0;b<9;b+=1){var d=~~(b/3),G=b-3*d,M=(n.get(3*h+d,3*i+G,0)-g)/(k-g),w=n.get(3*h+d,3*i+G,1)+Math.PI/20,C=Math.sin(w),q=Math.cos(w),x=i*v+f,y=h*v+f,z=i*v-x,I=h*v+f-y,P=(i+1)*v-x,S=(h+1)*v-f-y,T=z*q-I*C+x,X=P*C+S*q+y,j=P*q-S*C+x,A=z*C+I*q+y;s.dH(e,[j,A,T,X],"rgba(255, 255, 255, ".concat(M/4,")"))}}},params:{HOG:{step:{name:"Step",type:"constant",min:1,max:30,step:1,default:20}}}}}}]);