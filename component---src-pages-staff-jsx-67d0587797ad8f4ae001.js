(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"/b8u":function(e,t,a){var r=a("STAE");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},"2kc6":function(e){e.exports=JSON.parse('{"roles":[{"label":"Professor","people":["dan"]},{"label":"Head TA","people":["yolanda","shannon"]},{"label":"TA","people":[]},{"label":"Reader","people":[]},{"label":"Tutor","people":[]},{"label":"Academic Intern","people":[]}],"card-config":{"subheader":"pronouns","questions":["Where did you grow up? What was your path to Cal?","How much programming have you done? What languages?","What are your hobbies?","What are some of your talents and skills?","Have you done anything remarkable? Has anything memorable happened to you?","What commitments will be consuming your cycles this semester?"]}}')},"33Wh":function(e,t,a){var r=a("yoRg"),n=a("eDl+");e.exports=Object.keys||function(e){return r(e,n)}},"6LWA":function(e,t,a){var r=a("xrYK");e.exports=Array.isArray||function(e){return"Array"==r(e)}},A2ZE:function(e,t,a){var r=a("HAuM");e.exports=function(e,t,a){if(r(e),void 0===t)return e;switch(a){case 0:return function(){return e.call(t)};case 1:return function(a){return e.call(t,a)};case 2:return function(a,r){return e.call(t,a,r)};case 3:return function(a,r,n){return e.call(t,a,r,n)}}return function(){return e.apply(t,arguments)}}},BIHw:function(e,t,a){"use strict";var r=a("I+eb"),n=a("or9q"),o=a("ewvW"),l=a("UMSQ"),s=a("ppGB"),i=a("ZfDv");r({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=o(this),a=l(t.length),r=i(t,0);return r.length=n(r,t,t,a,0,void 0===e?1:s(e)),r}})},FNfD:function(e,t,a){"use strict";a.r(t);a("BIHw"),a("QGkA");var r=a("dI71"),n=a("q1tI"),o=a.n(n),l=a("a8qA"),s=a("qhky"),i=a("JX7q"),c=a("wx14"),m=a("zLVn"),u=a("TSYQ"),d=a.n(u),f=a("vUet"),p=a("YdCC"),h=a("U1MP"),b=a("Wzyw"),v=o.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,n=e.variant,l=e.as,s=void 0===l?"img":l,i=Object(m.a)(e,["bsPrefix","className","variant","as"]),u=Object(f.a)(a,"card-img");return o.a.createElement(s,Object(c.a)({ref:t,className:d()(n?u+"-"+n:u,r)},i))}));v.displayName="CardImg",v.defaultProps={variant:null};var y=v,g=Object(h.a)("h5"),E=Object(h.a)("h6"),w=Object(p.a)("card-body"),j=Object(p.a)("card-title",{Component:g}),O=Object(p.a)("card-subtitle",{Component:E}),N=Object(p.a)("card-link",{Component:"a"}),x=Object(p.a)("card-text",{Component:"p"}),k=Object(p.a)("card-header"),A=Object(p.a)("card-footer"),M=Object(p.a)("card-img-overlay"),S=o.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,l=e.bg,s=e.text,i=e.border,u=e.body,p=e.children,h=e.as,v=void 0===h?"div":h,y=Object(m.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),g=Object(f.a)(a,"card"),E=Object(n.useMemo)((function(){return{cardHeaderBsPrefix:g+"-header"}}),[g]);return o.a.createElement(b.a.Provider,{value:E},o.a.createElement(v,Object(c.a)({ref:t},y,{className:d()(r,g,l&&"bg-"+l,s&&"text-"+s,i&&"border-"+i)}),u?o.a.createElement(w,null,p):p))}));S.displayName="Card",S.defaultProps={body:!1},S.Img=y,S.Title=j,S.Subtitle=O,S.Body=w,S.Link=N,S.Text=x,S.Header=k,S.Footer=A,S.ImgOverlay=M;var P=S,I=a("zM5D"),T=a("kI1L"),W=a("Wbzz"),H=a("2kc6"),C=a("AINe"),D=a("dDCJ"),B=(a("Z5ya"),H["card-config"]),K=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={showModal:!1,name:"",imgPath:Object(W.c)("/course-data/staff/"+t.staffKey+"/profile_pic.png"),email:"",year:"",subheader:"",responses:[]},a.toggleModal=a.toggleModal.bind(Object(i.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.getBioData()},a.getBioData=function(){var e=this;Object(T.c)(this.props.staffKey).then((function(t){e.loadBioData(t)}))},a.loadBioData=function(e){var t=B.subheader,a=e.name,r=e[t],n=e.year,o=e.major,l=e.email,s=e.responses;this.setState({name:a,subheader:r,year:n,major:o,email:l,responses:s})},a.toggleModal=function(){var e=this.state.showModal;this.setState({showModal:!e})},a.render=function(){return void 0===this.state.name?null:o.a.createElement(P,{style:{width:"15rem"}},o.a.createElement(P.Img,{src:this.state.imgPath}),o.a.createElement(P.Body,null,o.a.createElement(P.Text,null,o.a.createElement("div",{className:"header"},this.state.name),o.a.createElement("div",{className:"role"},this.props.role),o.a.createElement("div",{className:"subheader"},this.state.subheader),o.a.createElement("div",{className:"staff-card-iconbar"},o.a.createElement(D.a,{placement:"top",overlay:o.a.createElement(C.a,{id:"tooltip-"+this.state.email},this.state.email)},o.a.createElement("a",{href:"mailto:"+this.state.email},o.a.createElement("span",{className:"material-icons"},"email"))),o.a.createElement(L,{toggleModal:this.toggleModal,showModal:this.state.showModal,name:this.state.name,email:this.state.email,role:this.props.role,year:this.state.year,major:this.state.major,subheader:this.state.subheader,imgPath:this.state.imgPath,responses:this.state.responses})))))},t}(o.a.Component);function L(e){var t=e.toggleModal,a=e.showModal,r=e.name,n=e.email,l=e.role,s=e.year,i=e.major,c=e.subheader,m=e.imgPath,u=e.responses;return o.a.createElement(o.a.Fragment,null,o.a.createElement(D.a,{key:"header",placement:"top",overlay:o.a.createElement(C.a,{id:"tooltip-"+r},"bio")},o.a.createElement("span",{className:"material-icons",onClick:t},"person")),o.a.createElement(I.a,{show:a,onHide:t,size:"lg",centered:!0},o.a.createElement(I.a.Header,{className:"content-modal-header"},o.a.createElement(I.a.Title,null,o.a.createElement("div",{className:"bio-modal-header"},o.a.createElement("img",{src:m,alt:"a picture of "+r+" should go here."}),o.a.createElement("div",{className:"general-info"},o.a.createElement("div",{className:"name"},r),o.a.createElement("div",{className:"role"},l),o.a.createElement("div",{className:"email"},n),o.a.createElement("div",{className:"additional-info"},s),o.a.createElement("div",{className:"additional-info"},i),o.a.createElement("div",{className:"additional-info"},c))))),o.a.createElement(I.a.Body,null,function(e){if(!e)return;for(var t=[],a=B.questions,r=0;r<e.length;r++){var n=e[r];if(null!==n){var o=a[r];t.push(R(o,n))}}return t}(u))))}function R(e,t){return o.a.createElement("div",{className:"bio-response-section"},o.a.createElement("div",{className:"header"},e),o.a.createElement("div",{className:"body"},t))}a("lp/k");var q=function(e){function t(){return e.apply(this,arguments)||this}Object(r.a)(t,e);var a=t.prototype;return a.renderStaff=function(){return H.roles.map((function(e){var t=e.label;return e.people.map((function(e){return function(e,t){return o.a.createElement(K,{staffKey:t,role:e})}(t,e)}))})).flat()},a.render=function(){return o.a.createElement("div",null,o.a.createElement(s.a,null,o.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0"}),o.a.createElement("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}),o.a.createElement("link",{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1",crossorigin:"anonymous"}),o.a.createElement("script",{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js",integrity:"sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW",crossorigin:"anonymous"})),o.a.createElement(l.a,null),o.a.createElement("div",{className:"container-fluid"},o.a.createElement("h1",null,"Staff"),o.a.createElement("div",{className:"staff-section"},this.renderStaff())))},t}(o.a.Component);t.default=q},"G+Rx":function(e,t,a){var r=a("0GbY");e.exports=r("document","documentElement")},"N+g0":function(e,t,a){var r=a("g6v/"),n=a("m/L8"),o=a("glrk"),l=a("33Wh");e.exports=r?Object.defineProperties:function(e,t){o(e);for(var a,r=l(t),s=r.length,i=0;s>i;)n.f(e,a=r[i++],t[a]);return e}},QGkA:function(e,t,a){a("RNIs")("flat")},RNIs:function(e,t,a){var r=a("tiKp"),n=a("fHMY"),o=a("m/L8"),l=r("unscopables"),s=Array.prototype;null==s[l]&&o.f(s,l,{configurable:!0,value:n(null)}),e.exports=function(e){s[l][e]=!0}},STAE:function(e,t,a){var r=a("0Dky");e.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},Z5ya:function(e,t,a){},ZfDv:function(e,t,a){var r=a("hh1v"),n=a("6LWA"),o=a("tiKp")("species");e.exports=function(e,t){var a;return n(e)&&("function"!=typeof(a=e.constructor)||a!==Array&&!n(a.prototype)?r(a)&&null===(a=a[o])&&(a=void 0):a=void 0),new(void 0===a?Array:a)(0===t?0:t)}},fHMY:function(e,t,a){var r,n=a("glrk"),o=a("N+g0"),l=a("eDl+"),s=a("0BK2"),i=a("G+Rx"),c=a("zBJ4"),m=a("93I0"),u=m("IE_PROTO"),d=function(){},f=function(e){return"<script>"+e+"<\/script>"},p=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(n){}var e,t;p=r?function(e){e.write(f("")),e.close();var t=e.parentWindow.Object;return e=null,t}(r):((t=c("iframe")).style.display="none",i.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(f("document.F=Object")),e.close(),e.F);for(var a=l.length;a--;)delete p.prototype[l[a]];return p()};s[u]=!0,e.exports=Object.create||function(e,t){var a;return null!==e?(d.prototype=n(e),a=new d,d.prototype=null,a[u]=e):a=p(),void 0===t?a:o(a,t)}},"lp/k":function(e,t,a){},or9q:function(e,t,a){"use strict";var r=a("6LWA"),n=a("UMSQ"),o=a("A2ZE"),l=function(e,t,a,s,i,c,m,u){for(var d,f=i,p=0,h=!!m&&o(m,u,3);p<s;){if(p in a){if(d=h?h(a[p],p,t):a[p],c>0&&r(d))f=l(e,t,d,n(d.length),f,c-1)-1;else{if(f>=9007199254740991)throw TypeError("Exceed the acceptable array length");e[f]=d}f++}p++}return f};e.exports=l},tiKp:function(e,t,a){var r=a("2oRo"),n=a("VpIT"),o=a("UTVS"),l=a("kOOl"),s=a("STAE"),i=a("/b8u"),c=n("wks"),m=r.Symbol,u=i?m:m&&m.withoutSetter||l;e.exports=function(e){return o(c,e)||(s&&o(m,e)?c[e]=m[e]:c[e]=u("Symbol."+e)),c[e]}}}]);
//# sourceMappingURL=component---src-pages-staff-jsx-67d0587797ad8f4ae001.js.map