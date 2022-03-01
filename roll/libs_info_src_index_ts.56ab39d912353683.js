"use strict";(self.webpackChunkcsgoroll=self.webpackChunkcsgoroll||[]).push([["libs_info_src_index_ts"],{7329:(b,l,s)=>{s.r(l),s.d(l,{InfoModule:()=>I});var r=s(35357),m=s(45990),c=s(84528),p=s(54004);const g=s(39478).Ps`
  query TabGroup($slug: String) {
    getTabGroupList(filter: { match: { slug: $slug } }) {
      items {
        ...TabGroup
      }
    }
  }

  ${c.yd}
  ${c.k9}
`;var n=s(5e3),i=s(69808),d=s(42576);function y(o,e){if(1&o&&(n.ynx(0),n._UZ(1,"cw-tab-group",1),n.BQk()),2&o){const t=e.ngIf;n.xp6(1),n.Q6J("data",t)}}let u=(()=>{class o{constructor(t){this.cmsService=t,this.tabGroup$=this.cmsService.client.watchQuery({query:g,variables:{slug:"info"}}).valueChanges.pipe((0,p.U)(({data:a})=>a.getTabGroupList.items[0]))}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(c.ct))},o.\u0275cmp=n.Xpm({type:o,selectors:[["cw-info"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"data"]],template:function(t,a){1&t&&(n.YNc(0,y,2,1,"ng-container",0),n.ALo(1,"async")),2&t&&n.Q6J("ngIf",n.lcZ(1,1,a.tabGroup$))},directives:[i.O5,d.Q],pipes:[i.Ov],styles:[".no-scrollbar[_ngcontent-%COMP%]{scrollbar-width:none;-ms-overflow-style:none}.no-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}[_nghost-%COMP%]{display:block}@media (min-width: 768px){[_nghost-%COMP%]{padding:1rem 15%}}  cw-copy{font-size:.8125rem}  cw-copy h1{margin-top:1rem;padding-bottom:0}  cw-copy h4{margin-top:2rem;margin-bottom:1rem}"],changeDetection:0}),o})();const h=[{path:"",component:u},{path:":slug",component:u}];let v=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[r.Bz.forChild(h)],r.Bz]}),o})(),I=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[m.vY,v,c.Bt,r.Bz]]}),o})()}}]);