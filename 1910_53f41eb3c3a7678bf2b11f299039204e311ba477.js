(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1910],{1910:(a,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>p});var u=s(2346);const p={op:function(a,e){return"sqsum"===e.SUMMED_AREA_TABLE.squared?u.sh(a,2):u.gm(a,2)},tick:function(a,e){var s=e.canvas,p=e.operation,t=e.output,n=e.session;u.UN(s),n.runOp(p,a,t);for(var r=Math.max(t.get(t.shape[0]-1,t.shape[1]-1,0),t.get(t.shape[0]-1,t.shape[1]-1,1),t.get(t.shape[0]-1,t.shape[1]-1,2)),m=t.data,h=0;h<t.size;h+=4)m[h]/=r,m[h+1]/=r,m[h+2]/=r,m[h+3]=255;u.t4(s,t)},params:{SUMMED_AREA_TABLE:{name:"Summed Area Table",squared:{name:"Type",type:"constant",values:[{name:"Sum",value:"sum"},{name:"Squared sum",value:"sqsum"}]}}}}}}]);