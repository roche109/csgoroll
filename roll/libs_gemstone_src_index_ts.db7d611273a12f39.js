"use strict";(self.webpackChunkcsgoroll=self.webpackChunkcsgoroll||[]).push([["libs_gemstone_src_index_ts"],{15997:(y,p,a)=>{a.r(p),a.d(p,{GemstoneModule:()=>V,gemstonBoostInfoFragment:()=>s.sM,gemstoneBoostActivationCreatedSubscription:()=>s.ZU,gemstoneBoostActivationFragment:()=>s.uD,gemstoneBoostActivationsQuery:()=>s.Xd,gemstoneBoostInfoQuery:()=>s.Ws,gemstoneBoostItemVariantFragment:()=>s.kY,gemstoneLeaderboardItemFragment:()=>s.CF,gemstoneLeaderboardQuery:()=>s.bY,updateGemstoneBoostInfoSubscription:()=>s.CO});var s=a(66769),h=a(8639),c=a(35357),u=a(70655),f=a(48966),r=a(23600),M=a(70653),_=a(44987),m=a(9124),E=a(64440),F=a(53079),e=a(5e3),d=a(69808),O=a(83460),T=a(40942),C=a(77093),x=a(47423),I=a(66754),w=a(53511),b=a(59864);function N(t,o){if(1&t&&(e.tHW(0,4,1),e.GkF(1),e.N_p()),2&t){const n=o.ngIf;e.xp6(1),e.pQV(n.name),e.QtT(0)}}function v(t,o){if(1&t&&e._uU(0),2&t){const n=e.oxw();e.Oqu(null==n.appConfig.teams?null:n.appConfig.teams.noTeamName)}}function S(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"div",13),e.TgZ(1,"div"),e.SDv(2,14),e.qZA(),e._UZ(3,"cw-user-gemstone-balance",15),e.TgZ(4,"div",16),e.NdJ("click",function(){return e.CHM(n),e.oxw().openInfoModal()}),e.SDv(5,17),e.qZA(),e.qZA()}if(2&t){const n=e.oxw();e.Q6J("@fadeInLeft",void 0),e.xp6(2),e.pQV(n.appConfig.gemstones.pluralLabel),e.QtT(2),e.xp6(1),e.Q6J("withBoxShadow",!0),e.xp6(2),e.pQV(n.appConfig.gemstones.pluralLabel),e.QtT(5)}}function G(t,o){if(1&t&&(e.TgZ(0,"div",18),e.TgZ(1,"div",19),e._uU(2),e.qZA(),e._UZ(3,"cw-box-grid",20),e.qZA()),2&t){const n=e.oxw();e.Q6J("@fadeInLeft",void 0),e.xp6(2),e.Oqu(n.appConfig.gemstones.prizeSubtitle),e.xp6(1),e.Q6J("@fadeInOnEnter",void 0)("filters",n.boxFilters)("showViewButton",!1)("showOpenCaseButton",!1)("showRightViewButton",!0)("showBoxName",!1)}}function L(t,o){1&t&&e._UZ(0,"img",21),2&t&&e.Q6J("src","assets/teams/large/"+o.ngIf.id+".png",e.LSH)("@fadeInRight",void 0)}function P(t,o){1&t&&(e._UZ(0,"img",21),e.ALo(1,"seasonalBranding")),2&t&&e.Q6J("src",e.lcZ(1,2,"/assets/gemstone/gemstone-jason.png"),e.LSH)("@fadeInRight",void 0)}function A(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"div",23),e.TgZ(1,"header",24),e.TgZ(2,"div",25),e._uU(3,"Leaderboards"),e.qZA(),e.TgZ(4,"p"),e._uU(5),e.ALo(6,"date"),e.qZA(),e.TgZ(7,"button",26),e.NdJ("click",function(){return e.CHM(n),e.oxw(2).openTeamSelectDialog()}),e._uU(8,"Pick team"),e.qZA(),e.qZA(),e._UZ(9,"cw-gemstone-teams",27),e.ALo(10,"async"),e.qZA()}if(2&t){const n=e.oxw(2);e.Q6J("@fadeInLeft",void 0),e.xp6(5),e.hij("Counting ends at ",e.xi3(6,3,n.appConfig.gemstones.maxDate,"long"),""),e.xp6(4),e.Q6J("team",e.lcZ(10,6,n.team$))}}function D(t,o){if(1&t&&(e.ynx(0),e.YNc(1,A,11,8,"div",22),e.BQk()),2&t){const n=e.oxw(),i=e.MAs(18);e.xp6(1),e.Q6J("ngIf",null==n.appConfig.teams?null:n.appConfig.teams.enabled)("ngIfElse",i)}}function Z(t,o){if(1&t&&(e.TgZ(0,"div",23),e.TgZ(1,"div",19),e._uU(2,"Leaderboard"),e.qZA(),e.TgZ(3,"p"),e._uU(4),e.ALo(5,"date"),e.qZA(),e._UZ(6,"cw-gemstone-leaderboard"),e.qZA()),2&t){const n=e.oxw();e.Q6J("@fadeInLeft",void 0),e.xp6(4),e.hij("Counting ends at ",e.xi3(5,2,n.appConfig.gemstones.maxDate,"long"),"")}}let l=class{constructor(o,n,i,g,$){this.appConfig=o,this.dialog=n,this.route=i,this.isUserLoggedIn$=g.isUserLoggedIn$,this.team$=$.team$,this.route.paramMap.pipe((0,_.t)(this)).subscribe(B=>{this.boxFilters={first:250,purchasable:!0,openable:!0,sellable:!0,free:!1,orderBy:["ORDER_ASC"],marketSlug:B.get("marketSlug"),walletRestrictions:[M.w.GEMSTONE]}})}ngOnInit(){const{modal:o}=this.route.snapshot.queryParams;"info-modal"===o&&this.openInfoModal()}openInfoModal(){this.dialog.open(E.V,{width:"860px",panelClass:["gemstone-modal","modal-full-mobile","modal-no-padding"]})}openTeamSelectDialog(){this.dialog.open(F.h,{width:"860px",panelClass:["modal-full-mobile"],closeOnNavigation:!1,disableClose:!0})}};l.\u0275fac=function(o){return new(o||l)(e.Y36(r.qBz),e.Y36(f.uw),e.Y36(c.gz),e.Y36(r.KDu),e.Y36(r.U1h))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cw-gemstone-view"]],inputs:{userId:"userId"},decls:19,vars:15,consts:function(){let t,o,n,i;return t=$localize`:␟044c206bbec998f0bb8573d7cf75c63ac0feace0␟1105345226801758340:${"\ufffd0\ufffd"}:INTERPOLATION:`,o=$localize`:␟69de9cf069e99a82c345105d7c5b6c8be4343124␟7122017593029378075: Welcome, ${"\ufffd*5:1\ufffd\ufffd#1:1\ufffd"}:START_TAG_NG_CONTAINER:${"\ufffd0:1\ufffd"}:INTERPOLATION:${"\ufffd/#1:1\ufffd\ufffd/*5:1\ufffd"}:CLOSE_TAG_NG_CONTAINER:`,n=$localize`:␟71cd8afadfa188f0417f7b57b7d58e235d3d9bd2␟4131795611510656917:Your ${"\ufffd0\ufffd"}:INTERPOLATION:`,i=$localize`:␟16f13a016dffe9200647d986eb358b6c1ea3037d␟7970492929442013388:How To Earn ${"\ufffd0\ufffd"}:INTERPOLATION:`,[[1,"title"],[1,"accent-color"],t,[1,"greeting"],o,[4,"ngIf","ngIfElse"],["noTeam",""],["class","info",4,"ngIf"],["class","bonuses",4,"ngIf"],["class","bg-image",3,"src",4,"ngIf","ngIfElse"],["noTeamImage",""],[4,"ngIf"],["gemstoneLeaderboard",""],[1,"info"],n,[3,"withBoxShadow"],[1,"pointer","accent-color",3,"click"],i,[1,"bonuses"],[1,"subtitle","mb-4"],[3,"filters","showViewButton","showOpenCaseButton","showRightViewButton","showBoxName"],[1,"bg-image",3,"src"],["class","leaderboard",4,"ngIf","ngIfElse"],[1,"leaderboard"],["fxLayout","row wrap","fxLayoutAlign","start center",1,"mb-4"],[1,"subtitle","mr-3"],["mat-flat-button","","color","primary",3,"click"],[3,"team"]]},template:function(o,n){if(1&o&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.SDv(2,2),e.qZA(),e.TgZ(3,"div",3),e.tHW(4,4),e.YNc(5,N,2,1,"ng-container",5),e.ALo(6,"async"),e.N_p(),e.qZA(),e.qZA(),e.YNc(7,v,1,1,"ng-template",null,6,e.W1O),e.YNc(9,S,6,4,"div",7),e.ALo(10,"async"),e.YNc(11,G,4,8,"div",8),e.YNc(12,L,1,2,"img",9),e.ALo(13,"async"),e.YNc(14,P,2,4,"ng-template",null,10,e.W1O),e.YNc(16,D,2,2,"ng-container",11),e.YNc(17,Z,7,5,"ng-template",null,12,e.W1O)),2&o){const i=e.MAs(8),g=e.MAs(15);e.Q6J("@fadeInLeft",void 0),e.xp6(2),e.pQV(n.appConfig.gemstones.pageLabel),e.QtT(2),e.xp6(3),e.Q6J("ngIf",e.lcZ(6,9,(null==n.appConfig.teams?null:n.appConfig.teams.enabled)&&n.team$))("ngIfElse",i),e.xp6(4),e.Q6J("ngIf",e.lcZ(10,11,n.isUserLoggedIn$)),e.xp6(2),e.Q6J("ngIf",n.boxFilters),e.xp6(1),e.Q6J("ngIf",e.lcZ(13,13,(null==n.appConfig.teams?null:n.appConfig.teams.enabled)&&n.team$))("ngIfElse",g),e.xp6(4),e.Q6J("ngIf",n.appConfig.gemstones.showLeaderboard)}},directives:[d.O5,O.D,T.K,C.xw,C.Wh,x.lW,I.j,w.X],pipes:[d.Ov,b.A,d.uU],styles:[".no-scrollbar[_ngcontent-%COMP%]{scrollbar-width:none;-ms-overflow-style:none}.no-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}[_nghost-%COMP%]{--gemstone-view-gap: 2.5rem;position:relative;display:flex;flex-direction:column;padding:var(--gemstone-view-gap);grid-gap:var(--gemstone-view-gap);gap:var(--gemstone-view-gap);z-index:1}@media only screen and (max-width: 1366px){[_nghost-%COMP%]   .bg-image[_ngcontent-%COMP%]{height:auto;width:50%}}@media (min-width: 768px){[_nghost-%COMP%]   .bonuses[_ngcontent-%COMP%]{max-width:1200px}}@media (max-width: 991.98px){[_nghost-%COMP%]{padding:0}[_nghost-%COMP%]   .bg-image[_ngcontent-%COMP%]{width:auto;height:66vh;top:96px;left:0;right:0;margin-left:auto;margin-right:auto}[_nghost-%COMP%]   .title[_ngcontent-%COMP%]{text-align:center;font-size:32px;line-height:1.5}[_nghost-%COMP%]   .info[_ngcontent-%COMP%]{margin-top:66vh;place-content:center}[_nghost-%COMP%]   .bonuses[_ngcontent-%COMP%]{width:auto}}@media (max-width: 991.98px) and (max-width: 991.98px){[_nghost-%COMP%]   .bonuses[_ngcontent-%COMP%]{scrollbar-width:none;-ms-overflow-style:none;max-height:100%;overflow-y:auto}[_nghost-%COMP%]   .bonuses[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}}@media (max-width: 767.98px){[_nghost-%COMP%]   .subtitle[_ngcontent-%COMP%]{text-align:center}[_nghost-%COMP%]   .bg-image[_ngcontent-%COMP%]{width:calc(100% + 2 * var(--horizontal-spacing));left:calc(var(--horizontal-spacing) * -1);right:calc(var(--horizontal-spacing) * -1)}[_nghost-%COMP%]   .info[_ngcontent-%COMP%]{grid-gap:.5rem;gap:.5rem}[_nghost-%COMP%]   cw-user-gemstone-balance[_ngcontent-%COMP%]     cw-gemstone-balance{padding-right:1.25rem}}.bg-image[_ngcontent-%COMP%]{position:absolute;z-index:-1;top:var(--gemstone-view-gap);height:calc(100vh - 4.375rem + var(--vertical-spacing) + var(--gemstone-view-gap));right:0;object-fit:contain}.title[_ngcontent-%COMP%]{font-family:var(--font-accent);font-weight:900;font-size:56px;line-height:64px;text-transform:uppercase}cw-box-grid[_ngcontent-%COMP%]{z-index:2}cw-box-grid[_ngcontent-%COMP%]     cw-box-grid-item{border-radius:.625rem}cw-box-grid[_ngcontent-%COMP%]     cw-box-grid-item.scale-on-hover:hover .img{transform:rotate3d(0,1,1,6deg) scale(1.2)!important}cw-box-grid[_ngcontent-%COMP%]     cw-box-grid-item .cost-container{justify-content:space-between}cw-box-grid[_ngcontent-%COMP%]     cw-box-grid-item .box, cw-box-grid[_ngcontent-%COMP%]     cw-box-grid-item cw-background{border-radius:.625rem}@media (min-width: 768px){.leaderboard[_ngcontent-%COMP%]{z-index:2}}.subtitle[_ngcontent-%COMP%]{font-family:var(--font-accent);font-weight:900;font-size:24px;line-height:1;text-transform:uppercase}.info[_ngcontent-%COMP%]{display:flex;align-items:center;text-transform:uppercase;grid-gap:2.5rem;gap:2.5rem;font-size:.75rem;font-weight:600!important}cw-user-gemstone-balance[_ngcontent-%COMP%]     cw-gemstone-balance{font-size:1.25rem;padding-left:1.25rem;padding-right:3.75rem;height:3.75rem;min-width:9.375rem;background:var(--gemstone-view-balance-bg)}cw-gemstone-teams[_ngcontent-%COMP%]{display:block;max-width:1000px}.accent-color[_ngcontent-%COMP%]{color:var(--success)}"],data:{animation:[(0,m.Sf)({anchor:"fadeInLeft",duration:750}),(0,m.ev)({anchor:"fadeInRight",duration:750}),(0,m.QP)({duration:750,delay:750})]},changeDetection:0}),l=(0,u.gn)([(0,_.c)(),(0,u.w6)("design:paramtypes",[Object,f.uw,c.gz,r.KDu,r.U1h])],l);let V=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[h.S,c.Bz.forChild([{path:":marketSlug",pathMatch:"full",component:l}])]]}),t})()}}]);