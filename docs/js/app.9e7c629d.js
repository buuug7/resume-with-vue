(function(e){function t(t){for(var s,c,r=t[0],o=t[1],l=t[2],p=0,_=[];p<r.length;p++)c=r[p],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&_.push(i[c][0]),i[c]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);u&&u(t);while(_.length)_.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],s=!0,r=1;r<n.length;r++){var o=n[r];0!==i[o]&&(s=!1)}s&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var s={},i={app:0},a=[];function c(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=s,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)c.d(n,s,function(t){return e[t]}.bind(null,s));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/your-resume/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=o;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var s=n("64a9"),i=n.n(s);i.a},"151d":function(e,t,n){},2630:function(e,t){const n=[{basicInfo:{name:"蒲国红",sex:"男",education:"本科",workExperience:"5年经验",status:"离职",location:"西安市",born:1986,contact:{phone:18309467501,email:"youpp@126.com"},socialAccounts:[{name:"github",url:"https://github.com/buuug7"},{name:"stack-overflow",url:"https://stackoverflow.com/users/6080636/puguohong"}]},selfDescription:{description:"本人工作服从纪律，有责任心。热爱互联网，喜欢编程，对新事物新技术充满好奇。最近几年从事web开发，熟悉常用的 web 开发框架。"},skills:[{name:"Common= Git/Basic Terminal knowlege/Github",level:70},{name:"Language= Javascript/HTML/CSS/TypeScript/Java",level:70},{name:"BackendFramework= Express/Koa/Laravel/SpringBoot",level:70},{name:"JavaScriptFramwork= Vue/React/Angular/RN",level:75},{name:"CssFramwork= Bootstrap/Material-ui/Bulma/ant-design",level:70},{name:"Database= Mysql",level:65}],jobIntention:{position:"web前端",location:"西安",salary:"10k - 20k",jobTime:"全职"},educationExperiences:[{id:0,durationTime:"2007.9 - 2011.6",educationName:"兰州理工大学",educationSubject:"电子信息科学与技术",educationLevel:"本科"}],workExperiences:[{id:1,time:"2018.7 - now",companyName:"西安图迹",workPosition:"web前端",workContents:[{id:0,text:"负责公司web项目前端开发"},{id:1,text:"负责公司移动应用开发"}]},{id:0,time:"2015.7 - 2017.9",companyName:"甘肃天奇",workPosition:"web前后端",workContents:[{id:0,text:"维护公司web项目, 移动应用项目，参与公司web项目前后端的设计、开发以及部署"},{id:2,text:"与美工、后端配合，改进产品易用性、界面展示优化和性能优化"}]}],projectExperiences:[{id:6,name:"中国华电竞争报价（电力现货）系统",url:"none",position:"web前端",description:"提供电力批发市场全流程信息化支撑,为电厂和售电公司在市场售购电交易业务提供辅助决策"},{id:5,name:"南方电网工程服务系统",url:"none",position:"web前端",description:"南方电网工程服务应用，管理南方电网供应商的一个系统"},{id:4,name:"华润电力移动EAM",url:"none",position:"web前端",description:"华润电力移动资产管理系统，管理资产的一个移动应用"},{id:3,name:"渭源县电子商务公共服务中心",url:"http://ds8.com.cn/",position:"全栈",description:"渭源县商务局，渭源县电子商务公共服务中心。"},{id:2,name:"定西人大官网",url:"http://dxrdw.gov.cn/",position:"全栈",description:"定西人大官方官网"},{id:1,name:"定西社会组织",url:"http://dxsh.gov.cn/",position:"全栈",description:"定西市民间组织管理局官方网站"}]}];e.exports=n.length<=1?n[0]:n},"46da":function(e,t,n){"use strict";var s=n("5ea6"),i=n.n(s);i.a},"4c45":function(e,t,n){},"4f87":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Resume")],1)},a=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"resume"},[n("Header",{staticClass:"mb-2",attrs:{basicInfo:e.resume.basicInfo}}),n("SelfDescription",{staticClass:"mb-2",attrs:{selfDescription:e.resume.selfDescription}}),n("Skills",{staticClass:"mb-2",attrs:{skills:e.resume.skills}}),n("JobIntention",{staticClass:"mb-2",attrs:{jobIntention:e.resume.jobIntention}}),n("EducationExperience",{staticClass:"mb-2",attrs:{educationExperiences:e.resume.educationExperiences}}),n("WorkExperience",{staticClass:"mb-2",attrs:{workExperiences:e.resume.workExperiences}}),n("ProjectExperience",{staticClass:"mb-1",attrs:{projectExperiences:e.resume.projectExperiences}}),n("Footer")],1)},r=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.basicInfo?n("div",{staticClass:"header"},[n("div",{staticClass:"header__top"},[n("img",{staticClass:"header__avatar",attrs:{src:e.avatar,alt:""}})]),n("div",{staticClass:"header__down"},[n("ul",{staticClass:"header__personal-info"},[n("li",[e._v(e._s(e.basicInfo.name))]),n("li",[e._v(e._s(e.basicInfo.sex))]),n("li",[e._v(e._s(e.basicInfo.education))]),n("li",[e._v(e._s(e.basicInfo.location))]),n("li",[e._v(e._s(e.basicInfo.born))]),n("li",[e._v(e._s(e.basicInfo.workExperience))]),n("li",[e._v(e._s(e.basicInfo.status))])]),n("ul",{staticClass:"header__contact"},[n("li",[n("i",{staticClass:"fa fa-envelope"}),e._v(" "+e._s(e.basicInfo.contact.email))]),n("li",[n("i",{staticClass:"fa fa-phone"}),e._v(" "+e._s(e.basicInfo.contact.phone))])]),n("ul",{staticClass:"header__social-links"},e._l(e.basicInfo.socialAccounts,(function(e){return n("li",{key:e.name},[n("a",{attrs:{href:e.url,target:"_blank"}},[n("i",{class:"fa fa-"+e.name})])])})),0)])]):e._e()},l=[],u=n("915e"),p=n.n(u),_={name:"ResumeHeader",props:["basicInfo"],components:{},data:function(){return{avatar:p.a}}},d=_,m=(n("cbe7"),n("2877")),f=Object(m["a"])(d,o,l,!1,null,"45648a7c",null),b=f.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.selfDescription?n("div",{staticClass:"self-description"},[n("h4",{staticClass:"self-description__title text-center mb-2"},[e._v("自我描述")]),n("p",{staticClass:"self-description__description"},[e._v("\n    "+e._s(e.selfDescription.description))])]):e._e()},x=[],k={name:"ResumeSelfDescription",props:["selfDescription"],components:{}},C=k,w=(n("7913"),Object(m["a"])(C,v,x,!1,null,"39e55f81",null)),h=w.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.skills?n("div",{staticClass:"skills"},[n("h4",{staticClass:"skills__title text-center mb-2"},[e._v("技能")]),n("ul",{staticClass:"skills__skills"},e._l(e.skills,(function(t){return n("li",{key:t.name,staticClass:"skills__item-skill mb-3"},[n("div",{staticClass:"skills__item-skill-name text-secondary"},[e._v(e._s(t.name))]),n("div",{staticClass:"progress progress--skill"},[n("div",{staticClass:"progress-bar",style:{width:t.level+"%"},attrs:{role:"progressbar"}})])])})),0)]):e._e()},E=[],y={name:"ResumeSkills",props:["skills"],components:{}},g=y,I=(n("e127"),Object(m["a"])(g,j,E,!1,null,"4a5959cc",null)),O=I.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.jobIntention?n("div",{staticClass:"job-intention"},[n("h4",{staticClass:"job-intention__title text-center mb-2"},[e._v("求职意向")]),n("ul",{staticClass:"job-intention__content"},[n("li",[e._v(e._s(e.jobIntention.position))]),n("li",[e._v(e._s(e.jobIntention.location))]),n("li",[e._v(e._s(e.jobIntention.salary))]),n("li",[e._v(e._s(e.jobIntention.jobTime))])])]):e._e()},P=[],R={name:"ResumeJobIntention",props:["jobIntention"],components:{}},D=R,$=(n("e7dc"),Object(m["a"])(D,S,P,!1,null,null,null)),T=$.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.workExperiences?n("div",{staticClass:"work-experience"},[n("h4",{staticClass:"work-experience__title text-center mb-2"},[e._v("工作经历")]),n("ul",{staticClass:"work-experience__time-line"},e._l(e.workExperiences,(function(t){return n("li",{key:t.id,staticClass:"work-experience__item"},[n("div",{staticClass:"work-experience__item-time mb-2 text-secondary small"},[e._v("\n        "+e._s(t.time)+"\n      ")]),n("div",{staticClass:"work-experience__company mb-2"},[n("span",{staticClass:"work-experience__company-name"},[e._v(e._s(t.companyName))]),n("em",{staticClass:"vline"}),n("span",{staticClass:"work-experience__company-work-position text-secondary"},[e._v(e._s(t.workPosition))])]),n("div",{staticClass:"work-experience__work-content-title mb-2"},[e._v("工作内容")]),n("ul",{staticClass:"work-experience__work-content text-secondary"},e._l(t.workContents,(function(t){return n("li",{key:t.id},[e._v(e._s(t.text))])})),0)])})),0)]):e._e()},M=[],F={name:"ResumeWorkExperience",props:["workExperiences"],components:{}},B=F,N=(n("46da"),Object(m["a"])(B,J,M,!1,null,"b77e007a",null)),L=N.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.projectExperiences?n("div",{staticClass:"project-experience"},[n("h4",{staticClass:"project-experience__title text-center font-size-22 mb-2"},[e._v("项目经验")]),n("ul",{staticClass:"project-experience__time-line"},e._l(e.projectExperiences,(function(t){return n("li",{key:t.id,staticClass:"project-experience__item"},[n("div",{staticClass:"work-experience__project mb-2"},["none"!==t.url?n("a",{staticClass:"work-experience__project-name",attrs:{href:t.url,target:"_blank"}},[e._v("\n          "+e._s(t.name)+"\n        ")]):n("span",{staticClass:"work-experience__project-name"},[e._v(e._s(t.name))]),n("em",{staticClass:"vline"}),n("span",{staticClass:"project-experience__project-position text-secondary"},[e._v("\n          "+e._s(t.position)+"\n        ")])]),n("p",{staticClass:"project-experience__project-description text-secondary"},[e._v("\n        "+e._s(t.description)+"\n      ")])])})),0)]):e._e()},H=[],W={name:"ResumeProjectExperience",props:["projectExperiences"],components:{}},G=W,q=(n("fd2b"),Object(m["a"])(G,A,H,!1,null,"c3caa84c",null)),z=q.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.educationExperiences?n("div",{staticClass:"education-experience"},[n("h4",{staticClass:"education-experience__title text-center mb-2"},[e._v("教育经历")]),n("ul",{staticClass:"education-experience__time-line"},e._l(e.educationExperiences,(function(t){return n("li",{key:t.id,staticClass:"education-experience__item"},[n("div",{staticClass:"education-experience__duration-time mb-2 text-secondary"},[e._v("\n        "+e._s(t.durationTime)+"\n      ")]),n("div",{staticClass:"education-experience__item-education-info"},[n("span",{staticClass:"education-experience__education-name"},[e._v("\n          "+e._s(t.educationName)+"\n        ")]),n("em",{staticClass:"vline"}),n("span",{staticClass:"education-experience__education-subject"},[e._v("\n          "+e._s(t.educationSubject)+"\n        ")]),n("em",{staticClass:"vline"}),n("span",{staticClass:"education-experience__education-level"},[e._v("\n          "+e._s(t.educationLevel)+"\n        ")])])])})),0)]):e._e()},V=[],Y={name:"ResumeEducationExperience",props:["educationExperiences"],components:{}},Q=Y,U=(n("7c82"),Object(m["a"])(Q,K,V,!1,null,"0ab30b38",null)),X=U.exports,Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer text-muted"},[n("p",[e._v("\n    Copyright "),n("i",{staticClass:"fa fa-copyright"}),e._v(" "+e._s((new Date).getFullYear())+" "),n("a",{attrs:{href:"https://github.com/buuug7",target:"_blank"}},[e._v("Buuug7")])])])},ee=[],te={name:"ResumeFooter"},ne=te,se=(n("f5c3"),Object(m["a"])(ne,Z,ee,!1,null,"acd6b5dc",null)),ie=se.exports,ae=n("2630"),ce=n.n(ae),re={name:"ResumeIndex",data:function(){return{resume:{basicInfo:null,selfDescription:null,skills:null,jobIntention:null,educationExperiences:null,workExperiences:null,projectExperiences:null},flag:!1}},mounted:function(){this.resume=ce.a},components:{Header:b,SelfDescription:h,Skills:O,JobIntention:T,WorkExperience:L,ProjectExperience:z,EducationExperience:X,Footer:ie}},oe=re,le=(n("bdd7"),Object(m["a"])(oe,c,r,!1,null,"29af6b6d",null)),ue=le.exports,pe={name:"app",components:{Resume:ue}},_e=pe,de=(n("034f"),Object(m["a"])(_e,i,a,!1,null,null,null)),me=de.exports;n("4f87");s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(me)}}).$mount("#app")},"5b15":function(e,t,n){},"5ea6":function(e,t,n){},"64a9":function(e,t,n){},7913:function(e,t,n){"use strict";var s=n("151d"),i=n.n(s);i.a},"7c82":function(e,t,n){"use strict";var s=n("7d55"),i=n.n(s);i.a},"7d55":function(e,t,n){},"915e":function(e,t,n){e.exports=n.p+"img/avatar.e5a277cc.jpg"},"94dc":function(e,t,n){},aabd:function(e,t,n){},b152:function(e,t,n){},bdd7:function(e,t,n){"use strict";var s=n("b152"),i=n.n(s);i.a},be5b:function(e,t,n){},cbe7:function(e,t,n){"use strict";var s=n("94dc"),i=n.n(s);i.a},e127:function(e,t,n){"use strict";var s=n("4c45"),i=n.n(s);i.a},e7dc:function(e,t,n){"use strict";var s=n("5b15"),i=n.n(s);i.a},f5c3:function(e,t,n){"use strict";var s=n("aabd"),i=n.n(s);i.a},fd2b:function(e,t,n){"use strict";var s=n("be5b"),i=n.n(s);i.a}});
//# sourceMappingURL=app.9e7c629d.js.map