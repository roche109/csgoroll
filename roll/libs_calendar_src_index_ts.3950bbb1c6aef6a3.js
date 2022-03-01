"use strict";(self.webpackChunkcsgoroll=self.webpackChunkcsgoroll||[]).push([["libs_calendar_src_index_ts"],{5758:(ge,N,i)=>{i.r(N),i.d(N,{CalendarModule:()=>le});var d=i(69808),C=i(35357),v=i(45990),S=i(70655),e=i(5e3),D=i(48966),F=i(24750),u=i(23600),M=i(72755),f=i(44987),E=i(13302),R=i(52457),x=i(95698),w=i(18505),Y=i(39300),$=i(63900),A=i(54004),k=i(28746),c=i(77093),L=i(47423);let b=(()=>{class n{constructor(t){this.ref=t,this.openCalendar=new e.vpe}ngOnDestroy(){this.openCalendar.complete()}close(){this.ref.close()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(D.so))},n.\u0275cmp=e.Xpm({type:n,selectors:[["cw-calendar-deposit-dialog"]],outputs:{openCalendar:"openCalendar"},decls:9,vars:0,consts:function(){let a,t,o,r;return a=$localize`:␟7fb18e25acdf1244d6482d960d3b5c683caffa67␟9046140310586661421:Want higher chances?`,t=$localize`:␟ca909bc6af30c6d61e5f97d8fe9876042934656a␟5580274462145256924: You have not deposited 10 Coins or more within the last 7 days. If you open this, you will only have a 4% chance of receiving one ticket for the Giveaway. Make a deposit first for a much better chance of receiving tickets.
`,o=$localize`:␟cb6f92b2f935884ac898340ff9caa8dceef4dba1␟8858880583426914591:Deposit now`,r=$localize`:␟dbe8c333970b2ac63a280c4e3c96fd8926e71bc6␟7160695860793845579:Open anyway`,[[1,"title"],a,[1,"mb-4"],t,["fxLayout","","fxLayoutAlign","end","fxLayoutGap","1rem"],["mat-flat-button","","color","accent","routerLink","top-up",1,"mat-button-3d",3,"click"],o,["mat-flat-button","","color","primary",1,"mat-button","mat-button-3d",3,"click"],r]},template:function(t,o){1&t&&(e.TgZ(0,"h3",0),e.SDv(1,1),e.qZA(),e.TgZ(2,"div",2),e.SDv(3,3),e.qZA(),e.TgZ(4,"div",4),e.TgZ(5,"button",5),e.NdJ("click",function(){return o.close()}),e.SDv(6,6),e.qZA(),e.TgZ(7,"button",7),e.NdJ("click",function(){return o.openCalendar.next()}),e.SDv(8,8),e.qZA(),e.qZA())},directives:[c.xw,c.Wh,c.SQ,L.lW,C.rH],styles:[".title[_ngcontent-%COMP%]{text-transform:uppercase;font-family:var(--font-accent);color:#00c74d;font-size:1.25rem}"],changeDetection:0}),n})();var T=i(39478);const Q=T.Ps`
  query Calendars {
    calendars(first: 1, orderBy: ID_DESC) {
      edges {
        node {
          id
          dailyOpenCount
          name
          startAt
          endAt
          rewards {
            chance
            lastDeposit
            minAmount
            maxAmount
          }
        }
      }
    }
  }
`,J=T.Ps`
  query CalendarEntries($calendarId: ID!, $userId: ID!) {
    calendarEntries(calendarId: $calendarId, userId: $userId, orderBy: ID_DESC) {
      edges {
        node {
          id
          createdAt
          rewardCount
        }
      }
    }
  }
`,W=T.Ps`
  mutation OpenCalendar($input: CreateCalendarEntryInput!) {
    createCalendarEntry(input: $input) {
      calendarEntry {
        id
        rewardCount
      }
    }
  }
`;var X=i(23322),G=i(4323),z=i(79586),V=i(57963);function q(n,a){if(1&n&&(e.ynx(0),e.TgZ(1,"div",8),e.TgZ(2,"div",9),e._uU(3),e.ALo(4,"date"),e.qZA(),e._UZ(5,"cw-user-ticket-balance",10),e.qZA(),e.BQk()),2&n){const t=e.oxw().$implicit;e.xp6(3),e.Oqu(e.xi3(4,3,t.date,"d LLL")),e.xp6(2),e.Q6J("amount",(null==t.entries[0]?null:t.entries[0].rewardCount)||0)("showTimes",!0)}}function j(n,a){if(1&n&&(e.tHW(0,12,1),e.GkF(1),e.N_p()),2&n){const t=e.oxw(2).$implicit,o=e.oxw(2);e.xp6(1),e.pQV(o.calendar.dailyOpenCount-t.entries.length)(o.calendar.dailyOpenCount),e.QtT(0)}}function H(n,a){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",11),e.NdJ("click",function(){e.CHM(t);const r=e.oxw(3);return r.open(r.calendar)}),e.tHW(2,12),e.TgZ(3,"cw-loader",13),e.YNc(4,j,2,2,"ng-container",6),e.qZA(),e.N_p(),e.qZA(),e.BQk()}if(2&n){const t=e.oxw().$implicit,o=e.oxw(2);e.xp6(1),e.Q6J("disabled",o.opening||o.isDayOpened(t)),e.xp6(2),e.Q6J("loading",o.opening),e.xp6(1),e.Q6J("ngIf",o.calendar.dailyOpenCount>1)}}function K(n,a){if(1&n&&e._UZ(0,"cw-countdown",15),2&n){const t=e.oxw(2).$implicit;e.Q6J("until",t.date)}}function ee(n,a){if(1&n&&(e.ynx(0),e.TgZ(1,"div",9),e._uU(2),e.ALo(3,"date"),e.qZA(),e.TgZ(4,"div"),e.YNc(5,K,1,1,"cw-countdown",14),e.qZA(),e.BQk()),2&n){const t=e.oxw(),o=t.$implicit,r=t.index,s=e.oxw(2);e.xp6(2),e.Oqu(e.xi3(3,2,o.date,"d LLL")),e.xp6(3),e.Q6J("ngIf","PRESENT"===(null==s.days[r-1]?null:s.days[r-1].state))}}function te(n,a){if(1&n&&(e.TgZ(0,"div",3),e.ALo(1,"lowercase"),e.TgZ(2,"div"),e.TgZ(3,"div",4),e._UZ(4,"img",5),e.qZA(),e.YNc(5,q,6,6,"ng-container",6),e.YNc(6,H,5,3,"ng-container",6),e.YNc(7,ee,6,5,"ng-container",6),e._UZ(8,"div",7),e.qZA(),e.qZA()),2&n){const t=a.$implicit,o=e.oxw(2);e.ekj("opened",o.isDayOpened(t)),e.Q6J("ngClass",e.lcZ(1,7,t.state)),e.xp6(4),e.Q6J("src",t.image,e.LSH),e.xp6(1),e.Q6J("ngIf","PAST"===t.state||"PRESENT"===t.state&&o.isDayOpened(t)),e.xp6(1),e.Q6J("ngIf","PRESENT"===t.state&&!o.isDayOpened(t)),e.xp6(1),e.Q6J("ngIf","FUTURE"===t.state)}}function ne(n,a){if(1&n&&(e.TgZ(0,"section",1),e.YNc(1,te,9,9,"div",2),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.days)("ngForTrackBy",t.getDayIdentity)}}let g=class{constructor(a,t,o,r,s,l,m,p,_){this.appConfig=a,this.apollo=t,this.cd=o,this.recaptchaDialogService=r,this.recaptchaService=s,this.toastr=l,this.userService=m,this.authDialogService=p,this.dialogService=_,this.opening=!1,this.days=[]}get calendar(){return this._calendar}set calendar(a){this._calendar=a,this.days=this.getDays()}get calendarEntries(){return this._calendarEntries}set calendarEntries(a){this._calendarEntries=a,this.calendar&&(this.days=this.getDays())}isDayOpened(a){return a.entries.length>=this.calendar.dailyOpenCount}isLastDepositWithinLastSevenDays(a){return new Date(a)>=new Date((new Date).getTime()-6048e5)}open(a){this.userService.user$.pipe((0,x.q)(1),(0,w.b)(t=>{t||this.authDialogService.openAuthModal()}),(0,Y.h)(t=>!!t),(0,w.b)(t=>{if(this.isLastDepositWithinLastSevenDays(t.lastDepositAt))return this.openCalendar(a);const r=this.dialogService.open(b,{panelClass:"deposit-coins",backdropClass:"deposit-coins-backdrop"});return r.componentInstance.openCalendar.pipe((0,f.t)(this)).subscribe(()=>{this.openCalendar(a),r.close()})}),(0,f.t)(this)).subscribe()}openCalendar(a){return this.opening=!0,this.recaptchaService.setRequest("createCalendarEntry",{calendarId:a.id}).pipe((0,$.w)(t=>this.getMutation(t).pipe(this.recaptchaDialogService.errorOp(o=>this.getMutation(Object.assign(Object.assign({},t),{visualRecaptcha:o}))))),(0,x.q)(1),(0,A.U)(({data:t})=>t.createCalendarEntry.calendarEntry),(0,k.x)(()=>{this.opening=!1,this.cd.markForCheck()}),(0,f.t)(this)).subscribe(t=>{const o=t?t.rewardCount:0;this.toastr.success(o?`${o} tickets unboxed`:"No tickets unboxed. Better luck next time!");const s=this.days.find(l=>"PRESENT"===l.state);s&&(s.entries=s.entries.concat(t),this.cd.detectChanges())})}getDayIdentity(a,t){return t.date.toISOString()}getDays(){if(!this.calendar)return[];const a=new Date,t=Date.UTC(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate()),o=new Date(this.calendar.startAt),r=new Date(this.calendar.endAt),s=Math.ceil((r.getTime()-o.getTime())/1e3/60/60/24),l=new Date(o);return Array.from({length:s}).map((m,p)=>{const _=new Date(l),y=new Date(Date.UTC(_.getUTCFullYear(),_.getUTCMonth(),_.getUTCDate())).getTime();let h="PRESENT",U=[];y<t?h="PAST":y>t&&(h="FUTURE"),"FUTURE"!==h&&(U=(this.calendarEntries||[]).filter(de=>{const I=new Date(de.createdAt);return new Date(Date.UTC(I.getUTCFullYear(),I.getUTCMonth(),I.getUTCDate())).getTime()===y})),l.setDate(l.getDate()+1);const{calendar:O}=this.appConfig;return{image:O?O.images[p%O.images.length]:[],entries:U,state:h,date:_}})}getMutation(a){return this.apollo.mutate({mutation:W,variables:{input:a}})}};g.\u0275fac=function(a){return new(a||g)(e.Y36(u.qBz),e.Y36(E._M),e.Y36(e.sBO),e.Y36(M.fQ),e.Y36(u.KvH),e.Y36(R._W),e.Y36(u.KDu),e.Y36(F.AuthDialogService),e.Y36(D.uw))},g.\u0275cmp=e.Xpm({type:g,selectors:[["cw-calendar-day-grid"]],inputs:{calendar:"calendar",calendarEntries:"calendarEntries"},decls:1,vars:1,consts:function(){let n;return n=$localize`:␟8f620a5a80b8e5b527e024c315fb29ea4e102421␟9158359618215014069:${"\ufffd#3\ufffd"}:START_TAG_CW_LOADER: Open ${"\ufffd*4:1\ufffd\ufffd#1:1\ufffd"}:START_TAG_NG_CONTAINER:${"\ufffd0:1\ufffd"}:INTERPOLATION:/${"\ufffd1:1\ufffd"}:INTERPOLATION_1:${"\ufffd/#1:1\ufffd\ufffd/*4:1\ufffd"}:CLOSE_TAG_NG_CONTAINER:${"\ufffd/#3\ufffd"}:CLOSE_TAG_CW_LOADER:`,[["class","day-grid",4,"ngIf"],[1,"day-grid"],["class","tile",3,"ngClass","opened",4,"ngFor","ngForOf","ngForTrackBy"],[1,"tile",3,"ngClass"],[1,"img-container"],["loading","lazy",1,"img","mb-3",3,"src"],[4,"ngIf"],[1,"rarity-line"],["fxLayout","","fxLayoutAlign","space-between center"],[1,"date"],[3,"amount","showTimes"],["mat-flat-button","","color","accent",3,"disabled","click"],n,[3,"loading"],[3,"until",4,"ngIf"],[3,"until"]]},template:function(a,t){1&a&&e.YNc(0,ne,2,2,"section",0),2&a&&e.Q6J("ngIf",t.days.length)},directives:[d.O5,d.sg,d.mk,X.oO,c.xw,c.Wh,G.c,L.lW,z.R,V.M],pipes:[d.i8,d.uU],styles:['.day-grid[_ngcontent-%COMP%]{display:grid;grid-gap:1rem;gap:1rem;grid-template-columns:repeat(auto-fill,minmax(10rem,1fr));grid-auto-rows:1fr}.day-grid[_ngcontent-%COMP%]:before{content:"";padding-bottom:100%;width:0;grid-row:1/1;grid-column:1/1}.day-grid[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{grid-row:1/1;grid-column:1/1}cw-user-ticket-balance[_ngcontent-%COMP%]{display:block;width:-moz-fit-content;width:fit-content;padding:.5rem;line-height:1;background:rgba(0,0,0,.3);color:#fff;border-radius:8px;margin-left:.375rem}.tile[_ngcontent-%COMP%]{position:relative;background:var(--item-bg);display:flex;justify-content:center;text-align:center;padding:1rem;border-radius:8px;overflow:hidden}.tile.past[_ngcontent-%COMP%], .tile.present.opened[_ngcontent-%COMP%]{opacity:.45}.tile.present[_ngcontent-%COMP%]:not(.opened):hover   .img[_ngcontent-%COMP%], .tile.future[_ngcontent-%COMP%]:hover   .img[_ngcontent-%COMP%]{transform:scale(1.1)}.tile[_ngcontent-%COMP%]     cw-countdown{color:#00e258}.tile[_ngcontent-%COMP%]     cw-countdown .countdown-label{margin-right:.25rem}.date[_ngcontent-%COMP%]{font-weight:500;color:#fff}.img[_ngcontent-%COMP%]{transition:.2s ease-in-out;height:7rem}.rarity-line[_ngcontent-%COMP%]:before{background:rgba(255,255,255,.2)}'],changeDetection:0}),g=(0,S.gn)([(0,f.c)(),(0,S.w6)("design:paramtypes",[Object,E._M,e.sBO,M.fQ,u.KvH,R._W,u.KDu,F.AuthDialogService,D.uw])],g);var P=i(39841),ae=i(39646);function oe(n,a){if(1&n&&(e.TgZ(0,"div",8),e.TgZ(1,"span",9),e._uU(2,"Your tickets"),e.qZA(),e._UZ(3,"cw-user-ticket-balance",10),e.qZA()),2&n){const t=a.ngIf;e.xp6(3),e.Q6J("amount",t.tickets.total)("showTimes",!0)}}function ie(n,a){if(1&n&&(e.ynx(0),e.TgZ(1,"header",1),e.TgZ(2,"div"),e.TgZ(3,"h1",2),e._uU(4),e.qZA(),e.TgZ(5,"p"),e._uU(6," Open the calendar slots below to get free Jackpot tickets every day."),e._UZ(7,"br"),e._uU(8," More Jackpot tickets increase your chances of winning prizes from the Christmas Jackpot."),e._UZ(9,"br"),e._uU(10," The higher your level, the more tickets you will win from the calendar. "),e.qZA(),e.TgZ(11,"div",3),e.TgZ(12,"span"),e._uU(13,"More tickets = higher chance of winning our Christmas Jackpot here"),e.qZA(),e.TgZ(14,"button",4),e._uU(15,"View"),e.qZA(),e.qZA(),e.qZA(),e.YNc(16,oe,4,2,"div",5),e.ALo(17,"async"),e.qZA(),e.TgZ(18,"div",6),e._UZ(19,"cw-calendar-day-grid",7),e.qZA(),e.BQk()),2&n){const t=a.ngIf,o=e.oxw();e.xp6(4),e.Oqu(t.calendar.name),e.xp6(12),e.Q6J("ngIf",e.lcZ(17,4,o.user$)),e.xp6(3),e.Q6J("calendar",t.calendar)("calendarEntries",t.entries)}}let Z=(()=>{class n{constructor(t,o){this.userService=o,this.user$=this.userService.user$,this.calendar$=t.watchQuery({query:Q}).valueChanges.pipe((0,A.U)(({data:r})=>{const s=r.calendars.edges.map(l=>l.node);return s.length?s[0]:null})),this.entries$=(0,P.a)([this.calendar$,o.userId$]).pipe((0,$.w)(([r,s])=>r&&s?t.watchQuery({query:J,variables:{calendarId:r.id,userId:s}}).valueChanges.pipe((0,A.U)(({data:m})=>m.calendarEntries.edges.map(p=>p.node))):(0,ae.of)([]))),this.data$=(0,P.a)([this.calendar$,this.entries$]).pipe((0,A.U)(([r,s])=>({calendar:r,entries:s})))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(E._M),e.Y36(u.KDu))},n.\u0275cmp=e.Xpm({type:n,selectors:[["cw-calendar"]],decls:2,vars:3,consts:[[4,"ngIf"],["fxLayout","","fxLayout.lt-sm","column","fxLayoutAlign","space-between center","fxLayoutGap","2rem",1,"mb-4"],[1,"text-uppercase","mb-2"],["fxLayout","","fxLayoutAlign"," center","fxLayoutGap","2rem"],["mat-flat-button","","color","accent","routerLink","/jackpots/view",1,"mat-button-3d"],["fxLayout","column","fxLayoutGap","0.25rem",4,"ngIf"],[1,"calendar"],[3,"calendar","calendarEntries"],["fxLayout","column","fxLayoutGap","0.25rem"],[1,"label","text-uppercase"],[3,"amount","showTimes"]],template:function(t,o){1&t&&(e.YNc(0,ie,20,6,"ng-container",0),e.ALo(1,"async")),2&t&&e.Q6J("ngIf",e.lcZ(1,1,o.data$))},directives:[d.O5,c.xw,c.Wh,c.SQ,L.lW,C.rH,g,G.c],pipes:[d.Ov],styles:[".calendar[_ngcontent-%COMP%]{display:flex}cw-calendar-day-grid[_ngcontent-%COMP%]{flex:1;margin-right:1rem}.label[_ngcontent-%COMP%]{font-size:.75rem;font-weight:600}cw-user-ticket-balance[_ngcontent-%COMP%]{font-size:1.5rem;line-height:1;padding:1rem;background:var(--item-bg);color:#fff;border-radius:8px;min-width:8rem;display:flex;justify-content:center}@media (min-width: 576px){cw-user-ticket-balance[_ngcontent-%COMP%]{margin-right:1rem}}"],changeDetection:0}),n})();var B=i(75424);const se=[v.vY,B.SharedUserModule];let ce=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[se,v.vY,B.SharedUserModule]}),n})(),le=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[d.ez,ce,C.Bz.forChild([{path:"",pathMatch:"full",component:Z}])]]}),n})()}}]);