"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[686,680,219],{680:function(t,e,n){n.r(e);var r=n(5861),a=n(885),s=n(7757),u=n.n(s),c=n(2791),i=n(6871),o=n(517),E=n(9930),l=n(2219),f=n(184);e.default=function(){var t=(0,c.useState)(null),e=(0,a.Z)(t,2),n=e[0],s=e[1],d=(0,c.useState)(l.Status.IDLE),S=(0,a.Z)(d,2),p=S[0],v=S[1],D=(0,i.TH)();return(0,c.useEffect)((function(){function t(){return(t=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.getTrending)();case 3:e=t.sent,s(e.results),v(l.Status.RESOLVED),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0),v(l.Status.REJECTED);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}v(l.Status.PENDING),function(){t.apply(this,arguments)}()}),[]),(0,f.jsxs)(f.Fragment,{children:[p===l.Status.IDLE&&(0,f.jsx)(f.Fragment,{}),p===l.Status.PENDING&&(0,f.jsx)(E.Loader,{}),p===l.Status.REJECTED&&(0,f.jsx)(E.Error,{}),p===l.Status.RESOLVED&&n&&(0,f.jsx)(E.MoviesGallery,{movies:n,title:"Trending today:",locationState:D})]})}},1686:function(t,e,n){n.r(e),n.d(e,{default:function(){return r.default}});var r=n(680)},2219:function(t,e,n){n.r(e),n.d(e,{Status:function(){return r}});var r={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}}}]);
//# sourceMappingURL=686.4249feae.chunk.js.map