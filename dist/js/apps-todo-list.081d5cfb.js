"use strict";(self["webpackChunkcork_vue3"]=self["webpackChunkcork_vue3"]||[]).push([[7752],{58503:function(e,s,i){i.r(s),i.d(s,{default:function(){return Pe}});var t=i(66252),a=i(3577),u=i(49963),l=i(2262),o=i(21174),r=i(56296);const n={class:"layout-px-spacing todo-list"},c=(0,t._)("ul",{class:"navbar-nav flex-row"},[(0,t._)("li",null,[(0,t._)("div",{class:"page-header"},[(0,t._)("nav",{class:"breadcrumb-one","aria-label":"breadcrumb"},[(0,t._)("ol",{class:"breadcrumb"},[(0,t._)("li",{class:"breadcrumb-item"},[(0,t._)("a",{href:"javascript:;"},"Apps")]),(0,t._)("li",{class:"breadcrumb-item active","aria-current":"page"},[(0,t._)("span",null,"Todo List")])])])])])],-1),d={class:"row layout-top-spacing"},m={class:"col-xl-12 col-lg-12 col-md-12"},p={class:"mail-box-container"},v={class:"row"},g=(0,t.uE)('<div class="col-md-12 col-sm-12 col-12 text-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clipboard"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg><h5 class="app-title">Todo List</h5></div>',1),h={class:"nav nav-pills d-block"},b=(0,t._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-list"},[(0,t._)("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),(0,t._)("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),(0,t._)("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),(0,t._)("line",{x1:"3",y1:"6",x2:"3",y2:"6"}),(0,t._)("line",{x1:"3",y1:"12",x2:"3",y2:"12"}),(0,t._)("line",{x1:"3",y1:"18",x2:"3",y2:"18"})],-1),_={class:"todo-badge badge"},w=(0,t._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-thumbs-up"},[(0,t._)("path",{d:"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"})],-1),q={class:"todo-badge badge"},k=(0,t._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-star"},[(0,t._)("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})],-1),x={class:"todo-badge badge"},f=(0,t._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-trash-2"},[(0,t._)("polyline",{points:"3 6 5 6 21 6"}),(0,t._)("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),(0,t._)("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),(0,t._)("line",{x1:"14",y1:"11",x2:"14",y2:"17"})],-1),y=(0,t._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-plus"},[(0,t._)("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),(0,t._)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),S={id:"todo-inbox",class:"accordion todo-inbox"},C={class:"search"},V=(0,t._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-menu mail-menu d-lg-none"},[(0,t._)("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),(0,t._)("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),(0,t._)("line",{x1:"3",y1:"18",x2:"21",y2:"18"})],-1),M=[V],D={class:"todo-box"},L={class:"todo-item-inner"},j={class:"checkbox-primary new-control custom-control custom-checkbox"},E=["id","checked","onChange"],N=["for"],O=["onClick"],T={class:"todo-heading"},H={class:"meta-date"},A={class:"todo-text"},B={class:"priority-dropdown"},U={class:"dropdown btn-group"},z={xmlns:"http://www.w3.org/2000/svg",style:{width:"24px",height:"24px"},viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-alert-octagon"},I=(0,t._)("polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"},null,-1),J=(0,t._)("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),R=(0,t._)("line",{x1:"12",y1:"16",x2:"12",y2:"16"},null,-1),P=[I,J,R],Y={class:"dropdown-menu dropdown-menu-end","aria-labelledby":"ddlPriority"},F=["onClick"],W=(0,t._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-alert-octagon"},[(0,t._)("polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}),(0,t._)("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),(0,t._)("line",{x1:"12",y1:"16",x2:"12",y2:"16"})],-1),K=["onClick"],$=(0,t._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-alert-octagon"},[(0,t._)("polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}),(0,t._)("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),(0,t._)("line",{x1:"12",y1:"16",x2:"12",y2:"16"})],-1),X=["onClick"],G=(0,t._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-alert-octagon"},[(0,t._)("polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}),(0,t._)("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),(0,t._)("line",{x1:"12",y1:"16",x2:"12",y2:"16"})],-1),Q={class:"action-dropdown"},Z={class:"dropdown btn-group"},ee=(0,t._)("a",{href:"javascript:;",id:"ddlMore",class:"btn dropdown-toggle btn-icon-only","data-bs-toggle":"dropdown","aria-expanded":"false"},[(0,t._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-more-vertical"},[(0,t._)("circle",{cx:"12",cy:"12",r:"1"}),(0,t._)("circle",{cx:"12",cy:"5",r:"1"}),(0,t._)("circle",{cx:"12",cy:"19",r:"1"})])],-1),se={class:"dropdown-menu dropdown-menu-end","aria-labelledby":"ddlMore"},ie=["onClick"],te=["onClick"],ae=["onClick"],ue={key:0},le=["onClick"],oe={key:1},re=["onClick"],ne=["onClick"],ce={id:"todoShowListItem",class:"modal fade","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},de={class:"modal-dialog modal-md modal-dialog-centered"},me={key:0,class:"modal-content todolist-popup"},pe={class:"modal-header"},ve={class:"modal-title task-heading"},ge=(0,t._)("button",{type:"button","data-dismiss":"modal","data-bs-dismiss":"modal","aria-label":"Close",class:"btn-close"},null,-1),he={class:"modal-body"},be={class:"compose-box"},_e={class:"compose-content"},we=["innerHTML"],qe=(0,t.uE)('<div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal" data-bs-dismiss="modal"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg> Close </button></div>',1),ke={id:"addTaskModal",class:"modal fade","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},xe={class:"modal-dialog modal-md modal-dialog-centered"},fe={class:"modal-content todolist-popup"},ye={class:"modal-header"},Se={class:"modal-title"},Ce=(0,t._)("button",{type:"button","data-dismiss":"modal","data-bs-dismiss":"modal","aria-label":"Close",class:"btn-close"},null,-1),Ve={class:"modal-body"},Me={class:"compose-box"},De={class:"compose-content"},Le={class:"row"},je={class:"col-md-12"},Ee={class:"form-group mb-4"},Ne=(0,t._)("label",null,"Title",-1),Oe={class:"w-100"},Te={class:"row"},He={class:"col-md-12"},Ae={class:"form-group"},Be=(0,t._)("label",null,"Description",-1),Ue={class:"w-100"},ze={class:"modal-footer"},Ie=(0,t._)("button",{type:"button",class:"btn btn-default","data-dismiss":"modal","data-bs-dismiss":"modal"},"Discard",-1);var Je={__name:"todo_list",setup(e){(0,r.j)({title:"Todo List"});const s=(0,l.iH)(!1),i=(0,l.iH)({task_id:null,title:"",description:""}),V=(0,l.iH)(0),I=(0,l.iH)([]),J=(0,l.iH)([]),R=(0,l.iH)(""),Je=(0,l.iH)(""),Re=(0,l.iH)(null),Pe=(0,l.iH)({modules:{toolbar:[[{header:[1,2,!1]}],["bold","italic","underline"],["image","code-block"]]}});let Ye=(0,l.iH)(null),Fe=(0,l.iH)(null);(0,t.bv)((()=>{We(),$e()}));const We=()=>{Ye=new window.bootstrap.Modal(document.getElementById("addTaskModal"))},Ke=e=>{Fe=e},$e=()=>{I.value=[{task_id:1,title:"Meeting with Shaun Park at 4:50pm",date:"Aug, 07 2020",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",description_text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",priority:"middle",status:""},{task_id:2,title:"Team meet at Starbucks",date:"Aug, 06 2020",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",description_text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",priority:"low",status:""},{task_id:3,title:"Meet Lisa to discuss project details",date:"Aug, 05 2020",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",description_text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",priority:"middle",status:"complete"},{task_id:4,title:"Download Complete",date:"Aug, 04 2020",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",description_text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",priority:"low",status:""},{task_id:5,title:"Conference call with Marketing Manager",date:"Aug, 03 2020",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",description_text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",priority:"high",status:"important"},{task_id:6,title:"New User Registered",date:"Aug, 02 2020",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",description_text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",priority:"middle",status:"important"},{task_id:7,title:"Fix issues in new project",date:"Aug, 01 2020",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",description_text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",priority:"middle",status:""},{task_id:8,title:"Check All functionality",date:"Aug, 07 2020",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",description_text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",priority:"middle",status:"important"},{task_id:9,title:"Check Repository",date:"Aug, 07 2020",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",description_text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",priority:"middle",status:"complete"},{task_id:10,title:"Trashed Tasks",date:"Aug, 08 2020",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",description_text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",priority:"middle",status:"trash"},{task_id:11,title:"Trashed Tasks 2",date:"Aug, 09 2020",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",description_text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",priority:"middle",status:"trash"},{task_id:12,title:"Trashed Tasks 3",date:"Aug, 10 2020",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",description_text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",priority:"middle",status:"trash"}],Ge()},Xe=e=>{Je.value=e,Ge(),s.value=!1},Ge=()=>{let e;e=Je.value?I.value.filter((e=>e.status==Je.value)):I.value.filter((e=>"trash"!=e.status)),J.value=e.filter((e=>e.title.toLowerCase().includes(R.value)))},Qe=e=>"low"==e.priority?"primary":"middle"==e.priority?"warning":"high"==e.priority?"danger":void 0,Ze=(e,s)=>{e.priority=s},es=e=>{e.status?e.status="":e.status="complete"},ss=e=>{"important"==e.status?(e.status="",V.value=0,Xe("")):e.status="important"},is=(e,s)=>{"delete"==s&&(e.status="trash"),"delete_permanent"==s?I.value=I.value.filter((s=>s.task_id!=e.task_id)):"restore"==s&&(e.status=""),Ge()},ts=e=>{Re.value=e},as=e=>{i.value={task_id:null,title:"",description:""},e&&(i.value=JSON.parse(JSON.stringify(e))),Ye.show()},us=()=>{if(!i.value.title)return ls("Title is required.","error"),!1;let e=Fe.getText();if(i.value.task_id){let s=I.value.find((e=>e.task_id==i.value.task_id));s.title=i.value.title,s.description=i.value.description,s.description_text=e}else{const l=I.value.reduce(((e,s)=>s.task_id>e?s.task_id:e),I.value[0].task_id);let o=new Date;var s=String(o.getDate()).padStart(2,"0"),t=String(o.getMonth()),a=o.getFullYear(),u=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];let r={task_id:l+1,title:i.value.title,description:i.value.description,description_text:e,date:u[t]+", "+s+" "+a,priority:"low",status:""};I.value.splice(0,0,r),Ge()}ls("Task saved successfully."),Ye.hide()},ls=(e="",s="success")=>{const i=window.Swal.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3});i.fire({icon:s,title:e,padding:"10px 20px"})};return(e,r)=>{const V=(0,t.up)("perfect-scrollbar");return(0,t.wg)(),(0,t.iD)("div",n,[((0,t.wg)(),(0,t.j4)(t.lR,{to:"#breadcrumb"},[c])),(0,t._)("div",d,[(0,t._)("div",m,[(0,t._)("div",p,[(0,t._)("div",{class:(0,a.C_)(["mail-overlay",{"mail-overlay-show":s.value}]),onClick:r[0]||(r[0]=e=>s.value=!1)},null,2),(0,t._)("div",{class:(0,a.C_)(["tab-title",{"mail-menu-show":s.value}])},[(0,t._)("div",v,[g,(0,t.Wm)(V,{class:"todoList-sidebar-scroll col-md-12 col-sm-12 col-12 mt-4 ps-0"},{default:(0,t.w5)((()=>[(0,t._)("ul",h,[(0,t._)("li",{class:"nav-item",onClick:r[1]||(r[1]=e=>Xe(""))},[(0,t._)("a",{id:"all-list",href:"javascript:;",class:(0,a.C_)(["nav-link",{active:""===Je.value}])},[b,(0,t.Uk)(" Inbox "),(0,t._)("span",_,(0,a.zw)(I.value&&I.value.filter((e=>"trash"!=e.status)).length),1)],2)]),(0,t._)("li",{class:"nav-item",onClick:r[2]||(r[2]=e=>Xe("complete"))},[(0,t._)("a",{id:"todo-task-done",href:"javascript:;",class:(0,a.C_)(["nav-link",{active:"complete"===Je.value}])},[w,(0,t.Uk)(" Done "),(0,t._)("span",q,(0,a.zw)(I.value&&I.value.filter((e=>"complete"==e.status)).length),1)],2)]),(0,t._)("li",{class:"nav-item",onClick:r[3]||(r[3]=e=>Xe("important"))},[(0,t._)("a",{id:"todo-task-important",href:"javascript:;",class:(0,a.C_)(["nav-link",{active:"important"===Je.value}])},[k,(0,t.Uk)(" Important "),(0,t._)("span",x,(0,a.zw)(I.value&&I.value.filter((e=>"important"==e.status)).length),1)],2)]),(0,t._)("li",{class:"nav-item",onClick:r[4]||(r[4]=e=>Xe("trash"))},[(0,t._)("a",{id:"todo-task-trash",href:"javascript:;",class:(0,a.C_)(["nav-link",{active:"trash"===Je.value}])},[f,(0,t.Uk)(" Trash ")],2)])])])),_:1}),(0,t._)("a",{class:"btn w-auto",id:"addTask",href:"javascript:;",onClick:r[5]||(r[5]=e=>as())},[y,(0,t.Uk)(" New Task ")])])],2),(0,t._)("div",S,[(0,t._)("div",C,[(0,t.wy)((0,t._)("input",{type:"text","onUpdate:modelValue":r[6]||(r[6]=e=>R.value=e),class:"input-search form-control",onKeyup:r[7]||(r[7]=e=>Ge()),placeholder:"Search Here..."},null,544),[[u.nr,R.value]]),(0,t._)("div",{class:"d-flex align-items-center",onClick:r[8]||(r[8]=e=>s.value=!s.value)},M)]),(0,t._)("div",D,[(0,t.Wm)(V,{class:"todo-box-scroll",options:{wheelSpeed:.5,swipeEasing:!0,minScrollbarLength:40,maxScrollbarLength:300,suppressScrollX:!0}},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(J.value,(e=>((0,t.wg)(),(0,t.iD)("div",{class:(0,a.C_)(["todo-item all-list",{"todo-task-done":"complete"==e.status}]),key:e.task_id},[(0,t._)("div",L,[(0,t._)("div",j,[(0,t._)("input",{type:"checkbox",id:`chk-${e.task_id}`,class:"custom-control-input",checked:"complete"==e.status,onChange:s=>es(e)},null,40,E),(0,t._)("label",{class:"custom-control-label",for:`chk-${e.task_id}`},null,8,N)]),(0,t._)("div",{class:"todo-content","data-bs-toggle":"modal","data-bs-target":"#todoShowListItem",onClick:s=>ts(e)},[(0,t._)("h5",T,(0,a.zw)(e.title),1),(0,t._)("p",H,(0,a.zw)(e.date),1),(0,t._)("p",A,(0,a.zw)(e.description_text),1)],8,O),(0,t._)("div",B,[(0,t._)("div",U,[(0,t._)("a",{href:"javascript:;",id:"ddlPriority",class:(0,a.C_)(["btn dropdown-toggle btn-icon-only",[Qe(e)]]),"data-bs-toggle":"dropdown","aria-expanded":"false"},[((0,t.wg)(),(0,t.iD)("svg",z,P))],2),(0,t._)("ul",Y,[(0,t._)("li",null,[(0,t._)("a",{href:"javascript:;",class:"dropdown-item danger",onClick:s=>Ze(e,"high")},[W,(0,t.Uk)(" High ")],8,F)]),(0,t._)("li",null,[(0,t._)("a",{href:"javascript:;",class:"dropdown-item warning",onClick:s=>Ze(e,"middle")},[$,(0,t.Uk)(" Middle ")],8,K)]),(0,t._)("li",null,[(0,t._)("a",{href:"javascript:;",class:"dropdown-item primary",onClick:s=>Ze(e,"low")},[G,(0,t.Uk)(" Low ")],8,X)])])])]),(0,t._)("div",Q,[(0,t._)("div",Z,[ee,(0,t._)("ul",se,["trash"==e.status?((0,t.wg)(),(0,t.iD)(t.HY,{key:0},[(0,t._)("li",null,[(0,t._)("a",{href:"javascript:;",class:"dropdown-item",onClick:s=>is(e,"delete_permanent")},"Permanent Delete",8,ie)]),(0,t._)("li",null,[(0,t._)("a",{href:"javascript:;",class:"dropdown-item",onClick:s=>is(e,"restore")},"Revive Task",8,te)])],64)):((0,t.wg)(),(0,t.iD)(t.HY,{key:1},[(0,t._)("li",null,[(0,t._)("a",{href:"javascript:;",class:"dropdown-item",onClick:s=>as(e)},"Edit",8,ae)]),"important"==e.status?((0,t.wg)(),(0,t.iD)("li",ue,[(0,t._)("a",{href:"javascript:;",class:"dropdown-item",onClick:s=>ss(e)},"Back to List",8,le)])):((0,t.wg)(),(0,t.iD)("li",oe,[(0,t._)("a",{href:"javascript:;",class:"dropdown-item",onClick:s=>ss(e)},"Important",8,re)])),(0,t._)("li",null,[(0,t._)("a",{href:"javascript:;",class:"dropdown-item",onClick:s=>is(e,"delete")},"Delete",8,ne)])],64))])])])])],2)))),128))])),_:1},8,["options"])])])]),(0,t._)("div",ce,[(0,t._)("div",de,[Re.value?((0,t.wg)(),(0,t.iD)("div",me,[(0,t._)("div",pe,[(0,t._)("h5",ve,(0,a.zw)(Re.value.title),1),ge]),(0,t._)("div",he,[(0,t._)("div",be,[(0,t._)("div",_e,[(0,t._)("p",{class:"task-text overflow-auto",innerHTML:Re.value.description},null,8,we)])])]),qe])):(0,t.kq)("",!0)])]),(0,t._)("div",ke,[(0,t._)("div",xe,[(0,t._)("div",fe,[(0,t._)("div",ye,[(0,t._)("h5",Se,(0,a.zw)(i.value.task_id?"Update Task":"Add Task"),1),Ce]),(0,t._)("div",Ve,[(0,t._)("div",Me,[(0,t._)("div",De,[(0,t._)("form",null,[(0,t._)("div",Le,[(0,t._)("div",je,[(0,t._)("div",Ee,[Ne,(0,t._)("div",Oe,[(0,t.wy)((0,t._)("input",{type:"text","onUpdate:modelValue":r[9]||(r[9]=e=>i.value.title=e),class:"form-control",placeholder:"Title"},null,512),[[u.nr,i.value.title]])])])])]),(0,t._)("div",Te,[(0,t._)("div",He,[(0,t._)("div",Ae,[Be,(0,t._)("div",Ue,[(0,t.Wm)((0,l.SU)(o.HL),{ref:"editor",value:i.value.description,"onUpdate:value":r[10]||(r[10]=e=>i.value.description=e),options:Pe.value,style:{"min-height":"200px"},onReady:r[11]||(r[11]=e=>Ke(e))},null,8,["value","options"])])])])])])])])]),(0,t._)("div",ze,[Ie,(0,t._)("button",{type:"button",class:"btn btn-primary",onClick:r[12]||(r[12]=e=>us())},(0,a.zw)(i.value.task_id?"Update":"Add"),1)])])])])])])])}}};const Re=Je;var Pe=Re}}]);
//# sourceMappingURL=apps-todo-list.081d5cfb.js.map