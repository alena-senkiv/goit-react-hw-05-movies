"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[290,389,219],{9290:function(t,n,e){e.r(n);var o=e(5861),r=e(885),i=e(7757),s=e.n(i),a=e(2791),u=e(6871),l=e(517),c=e(9930),d=e(2219),v=e(3389),f=e(184);n.default=function(){var t,n,e,i,E,h,m=(0,u.UO)().movieId,p=(0,a.useState)(null),x=(0,r.Z)(p,2),S=x[0],j=x[1],k=(0,a.useState)(d.Status.IDLE),D=(0,r.Z)(k,2),g=D[0],b=D[1],L=(0,u.TH)();return(0,a.useEffect)((function(){function t(){return(t=(0,o.Z)(s().mark((function t(){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,l.getMovieDetails)(m);case 3:n=t.sent,j(n),b(d.Status.RESOLVED),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0),b(d.Status.REJECTED);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}b(d.Status.PENDING),function(){t.apply(this,arguments)}()}),[m]),(0,f.jsxs)(f.Fragment,{children:[g===d.Status.IDLE&&(0,f.jsx)(f.Fragment,{}),g===d.Status.PENDING&&(0,f.jsx)(c.Loader,{}),g===d.Status.REJECTED&&(0,f.jsx)(c.Error,{}),g===d.Status.RESOLVED&&S&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(v.BackLink,{to:null!==(t=null===L||void 0===L||null===(n=L.state)||void 0===n?void 0:n.from)&&void 0!==t?t:"/",children:"Go back"}),(0,f.jsx)(c.MovieDetailsCard,{movieDetails:S}),(0,f.jsxs)(v.AdditionalBlock,{children:[(0,f.jsx)("p",{children:"Additional information:"}),(0,f.jsx)(v.Button,{to:"cast",state:{from:null!==(e=null===L||void 0===L||null===(i=L.state)||void 0===i?void 0:i.from)&&void 0!==e?e:"/"},children:"Cast"}),(0,f.jsx)(v.Button,{to:"reviews",state:{from:null!==(E=null===L||void 0===L||null===(h=L.state)||void 0===h?void 0:h.from)&&void 0!==E?E:"/"},children:"Reviews"})]}),(0,f.jsx)(a.Suspense,{fallback:"",children:(0,f.jsx)(u.j3,{})})]})]})}},3389:function(t,n,e){e.r(n),e.d(n,{Button:function(){return c},BackLink:function(){return d},AdditionalBlock:function(){return v}});var o,r,i,s=e(168),a=e(5751),u=e(501),l=e(2624),c=(0,a.ZP)(u.OL)(o||(o=(0,s.Z)(["\n  &.active {\n    background-color: ",";\n  }\n  ","\n  margin-right: 20px;\n"])),(function(t){return t.theme.colors.secondary}),l.buttonStyles),d=(0,a.ZP)(u.rU)(r||(r=(0,s.Z)(["\n  ","\n"])),l.buttonStyles),v=a.ZP.div(i||(i=(0,s.Z)(["\n  margin-bottom: 25px;\n  & p {\n    margin-bottom: 10px;\n    font-weight: 500;\n  }\n"])))},2219:function(t,n,e){e.r(n),e.d(n,{Status:function(){return o}});var o={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}}}]);
//# sourceMappingURL=290.01ddb1b1.chunk.js.map