"use strict";(self["webpackChunkcork_vue3"]=self["webpackChunkcork_vue3"]||[]).push([[6470],{49327:function(e,s,t){t.r(s),t.d(s,{default:function(){return T}});var i=t(66252),a=t(3577),l=t(38784),o=t(2262),n=t(56296);const r={class:"layout-px-spacing"},c={class:"coming-soon"},v={class:"coming-soon-container"},h={class:"coming-soon-cont"},u={class:"coming-soon-wrap"},d={class:"coming-soon-container"},g={class:"coming-soon-content"},p=(0,i._)("h4",{class:""},"Coming Soon",-1),w=(0,i._)("p",{class:""},"We will be here in a shortwhile.....",-1),m={id:"timer"},f={class:"days"},k={class:"count"},_=(0,i._)("span",{class:"text"},"Days",-1),x={class:"hours"},b={class:"count"},C=(0,i._)("span",{class:"text"},"Hours",-1),y={class:"min"},M={class:"count"},U=(0,i._)("span",{class:"text"},"Mins",-1),j={class:"sec"},z={class:"count"},A=(0,i._)("span",{class:"text"},"Secs",-1),D=(0,i.uE)('<h3>Subscribe to get notified!</h3><form class="text-start"><div class="coming-soon"><div class=""><div id="email-field" class="field-wrapper input"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-at-sign"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg><input type="email" placeholder="Email" class="form-control"><button type="submit" class="btn btn-primary">Subscribe</button></div></div></div></form><ul class="social list-inline"><li class="list-inline-item"><a class="" href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a></li><li class="list-inline-item"><a class="" href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a></li><li class="list-inline-item"><a class="" href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a></li><li class="list-inline-item"><a class="" href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li></ul>',3),H={class:"terms-conditions"},S=(0,i._)("a",{href:"javascript:void(0);"},"Cookie Preferences",-1),B=(0,i._)("a",{href:"javascript:void(0);"},"Privacy",-1),E=(0,i._)("a",{href:"javascript:void(0);"},"Terms",-1),I=(0,i._)("div",{class:"coming-soon-image"},[(0,i._)("div",{class:"l-image"},[(0,i._)("div",{class:"img-content"},[(0,i._)("img",{src:l,alt:"coming_soon"})])])],-1);var P={__name:"coming_soon",setup(e){(0,n.j)({title:"Comming Soon"});const s=(0,o.iH)(null),t=(0,o.iH)(null),l=(0,o.iH)(null),P=(0,o.iH)(null);(0,i.bv)((()=>{R()}));const R=()=>{let e=(new Date).getFullYear()+1,i=new Date("Dec 5, "+e+" 15:37:25").getTime(),a=setInterval((()=>{let e=(new Date).getTime(),o=i-e;s.value=Math.floor(o/864e5),t.value=Math.floor(o%864e5/36e5),l.value=Math.floor(o%36e5/6e4),P.value=Math.floor(o%6e4/1e3),o<0&&(clearInterval(a),document.getElementById("timer").innerHTML="EXPIRED")}),1e3)};return(e,o)=>{const n=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("div",c,[(0,i._)("div",v,[(0,i._)("div",h,[(0,i._)("div",u,[(0,i._)("div",d,[(0,i._)("div",g,[p,w,(0,i._)("div",m,[(0,i._)("div",f,[(0,i._)("span",k,(0,a.zw)(s.value?s.value:"--"),1),(0,i.Uk)(),_]),(0,i._)("div",x,[(0,i._)("span",b,(0,a.zw)(t.value?t.value:"--"),1),(0,i.Uk)(),C]),(0,i._)("div",y,[(0,i._)("span",M,(0,a.zw)(l.value?l.value:"--"),1),(0,i.Uk)(),U]),(0,i._)("div",j,[(0,i._)("span",z,(0,a.zw)(P.value?P.value:"--"),1),(0,i.Uk)(),A])]),D,(0,i._)("p",H,[(0,i.Uk)(" © 2021 All Rights Reserved. "),(0,i.Wm)(n,{to:"/"},{default:(0,i.w5)((()=>[(0,i.Uk)("CORK")])),_:1}),(0,i.Uk)(" is a product of Arrangic Solutions LLP. "),S,(0,i.Uk)(", "),B,(0,i.Uk)(", and "),E,(0,i.Uk)(". ")])])])])]),I])])])}}};const R=P;var T=R},38784:function(e,s,t){e.exports=t.p+"img/mindset.865e03f5.svg"}}]);
//# sourceMappingURL=pages-coming-soon.4c3f40ab.js.map