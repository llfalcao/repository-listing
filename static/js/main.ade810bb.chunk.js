(this.webpackJsonpreactjs=this.webpackJsonpreactjs||[]).push([[0],{62:function(e,n,t){},63:function(e,n,t){"use strict";t.r(n);var r,a,i,o,c,s=t(0),d=t.n(s),l=t(30),b=t.n(l),u=t(11),j=t(2),f=t(15),h=t(31),m=t.n(h),p=t(7),g=t(8),O="'Segoe UI', sans-serif",x=g.a.div(r||(r=Object(p.a)(["\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n"]))),y=g.a.div(a||(a=Object(p.a)(["\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),v=g.a.input(i||(i=Object(p.a)(["\n    width: 20rem;\n    border: 1px solid #78aeff;\n    border-right: transparent;\n    height: 3rem;\n    padding: 0 0.5rem;\n    border-radius: 0.25rem 0 0 0.25rem;\n    font-family: ",";\n\n    &:focus,\n    &:active {\n        outline: none;\n        box-shadow: none;\n    }\n"])),O),w=g.a.button(o||(o=Object(p.a)(["\n    height: 3.1rem;\n    padding: 0 2rem;\n    background: #092250;\n    color: #eee;\n    border: 1px solid #78aeff;\n    border-left: transparent;\n    border-radius: 0 0.25rem 0.25rem 0;\n    cursor: pointer;\n    font-family: ",";\n    font-size: 1rem;\n\n    &:focus,\n    &:active {\n        outline: none;\n        box-shadow: none;\n    }\n"])),O),S=g.a.span(c||(c=Object(p.a)(["\n    display: block;\n    font-size: 0.9rem;\n    color: #dadada;\n    font-weight: 600;\n    margin: 1rem;\n"]))),k=t(1);var I,N,J,U,z,A=function(e){var n=Object(j.f)(""),t=Object(s.useState)(""),r=Object(f.a)(t,2),a=r[0],i=r[1],o=Object(s.useState)(!1),c=Object(f.a)(o,2),d=c[0],l=c[1];return Object(k.jsxs)(x,{children:[Object(k.jsxs)(y,{children:[Object(k.jsx)(v,{className:"userInput",placeholder:"User",value:a,onChange:function(e){i(e.target.value)}}),Object(k.jsx)(w,{type:"submit",onClick:function(){m.a.get("https://api.github.com/users/".concat(a,"/repos")).then((function(e){var t=e.data,r=[];t.map((function(e){return r.push(e.name)})),localStorage.setItem("repositoriesName",JSON.stringify(r)),n.push("/repository-listing/repositories")})).catch((function(e){l(!0)}))},children:"Search"})]}),d?Object(k.jsx)(S,{children:"An error occurred. Please try again."}):""]})},B=g.a.div(I||(I=Object(p.a)(["\n    width: 100vw;\n    height: 100vh;\n    max-width: 991px;\n    margin: 0 auto;\n"]))),C=g.a.h1(N||(N=Object(p.a)(['\n    text-align: center;\n    font-family: "Segoe UI", sans-serif;\n    font-weight: 600;\n    font-size: 2rem;\n    color: #cccccc;\n    padding: 2rem;\n']))),E=g.a.ul(J||(J=Object(p.a)(["\n    list-style: none;\n    padding: 0;\n    font-family: sans-serif;\n"]))),R=g.a.li(U||(U=Object(p.a)(['\n    margin: 0.5rem 0;\n    background: #72cbff1d;\n    color: #dadada;\n    padding: 0.5rem;\n    border-radius: 0.25rem;\n    font-weight: 600;\n    font-family: "Segoe UI", sans-serif;\n']))),G=Object(g.a)(u.b)(z||(z=Object(p.a)(["\n    display: block;\n    width: 4rem;\n    text-align: center;\n    margin: 2rem auto;\n    background-color: #2c627a;\n    color: #dadada;\n    padding: 0.5rem 0;\n    text-decoration: none;\n    border-radius: 0.25rem;\n    font-weight: 600;\n"])));var H=function(){var e=Object(j.f)(""),n=Object(s.useState)([]),t=Object(f.a)(n,2),r=t[0],a=t[1];return Object(s.useEffect)((function(){var n=localStorage.getItem("repositoriesName");null!==n?(n=JSON.parse(n),a(n),localStorage.clear()):e.push("/repository-listing/")}),[]),Object(k.jsxs)(B,{children:[Object(k.jsx)(C,{children:"Repositories"}),Object(k.jsx)(E,{children:r.map((function(e){return Object(k.jsxs)(R,{children:["Repository: ",e]},e)}))}),Object(k.jsx)(G,{to:"/repository-listing/",children:"Back"})]})};var M=function(){return Object(k.jsx)(u.a,{children:Object(k.jsxs)(j.c,{children:[Object(k.jsx)(j.a,{path:"/repository-listing/",exact:!0,component:A}),Object(k.jsx)(j.a,{path:"/repository-listing/repositories/",component:H})]})})};t(62);var P=function(){return Object(k.jsx)(M,{})};b.a.render(Object(k.jsx)(d.a.StrictMode,{children:Object(k.jsx)(P,{title:"Hello",user:"Gama Academy"})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.ade810bb.chunk.js.map