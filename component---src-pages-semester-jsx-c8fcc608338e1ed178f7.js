(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"0xec":function(e){e.exports=JSON.parse('{"weekly-schedule":{"lectures":"#0074FD","discussion":"#FF4B4B","labs":"#F3B200","projects":"#38CA05","readings":"#8445C2"}}')},"2mbF":function(e,t,a){},"6BAc":function(e){e.exports=JSON.parse('{"work session":"Work Session","catchup lab":"Catchup Lab","election_day":"Election Day! Go Vote!","none":"No Section"}')},"82xa":function(e){e.exports=JSON.parse('[{"label":"CS10 Zoom","link":"http://bjc.link/zoomroomfa20","icon":"video_call"},{"label":"Shannon\'s Tutoring","link":"https://berkeley.zoom.us/j/94523199723","icon":"video_call"},{"label":"Discord","link":"https://discord.gg/44mnVeG","icon":"exit_to_app"},{"label":"Gradescope","link":"https://www.gradescope.com/courses/164713","icon":"spellcheck"},{"label":"Piazza","link":"https://piazza.com/class/ke94crp1bn9ce","icon":"supervisor_account"}]')},CnGb:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a("q1tI"),r=a.n(n),l=a("JX7q"),c=a("dI71"),o=a("zM5D"),s=a("AINe"),i=a("dDCJ"),u=(a("2mbF"),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={show:!1},a.show=a.show.bind(Object(l.a)(a)),a.hide=a.hide.bind(Object(l.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.show=function(){this.setState({show:!0})},a.hide=function(){this.setState({show:!1})},a.render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:this.show,className:"content-modal-button"},r.a.createElement(i.a,{key:"header",placement:"top",overlay:r.a.createElement(s.a,{id:"tooltip-"+this.props.header},"more details")},r.a.createElement("span",{className:"material-icons"},"read_more"))),r.a.createElement(o.a,{show:this.state.show,onHide:this.hide,size:"lg",centered:!0},r.a.createElement(o.a.Header,{className:"content-modal-header"},r.a.createElement(o.a.Title,null,this.props.header),r.a.createElement("div",{className:"label",style:{backgroundColor:this.props.contentColor}},this.props.subheader)),r.a.createElement(o.a.Body,null,this.props.modalContent)))},t}(r.a.Component)),m=a("JdhN"),d=(a("Iiz4"),a("3k3m")),h=a("U9WC");function f(e,t){return t?t[e]:{}}function p(e){var t=new Date(e),a=t.getDate()-t.getDay();return new Date(t.setDate(a))}var v=a("6BAc"),b=a("0xec"),k=a("Hxa2"),E=(a("q4sD"),b["weekly-schedule"]);function g(e,t){console.log(t);for(var a,n=d[e],l=Object.keys(n),c=[],o=0;o<l.length;o++){var u=l[o],m=n[u];if(0!==m.length)for(var h=k[u],p=f(u,t),b=0;b<m.length;b++){var E=m[b],g=p[E];if(void 0===g){if(void 0===(g=v[E]))continue;c.push(r.a.createElement("div",{className:"divider"})),c.push((a=g,r.a.createElement("div",{className:"content-item"},r.a.createElement("div",{className:"content-header"},r.a.createElement("div",{className:"label",style:{backgroundColor:"#7eb2ff"}},"No Content"),r.a.createElement(i.a,{key:"header",placement:"top",overlay:r.a.createElement(s.a,{id:"tooltip-"+a},a)},r.a.createElement("div",{className:"title"},a))))))}else c.push(r.a.createElement("div",{className:"divider"})),c.push(N(u,E,g,h,t))}}return c}function N(e,t,a,n,l){var c=n.label,o=function(e,t){for(var a=Object.keys(d).length,n={},r=1,l=1;l<=a;l++)for(var c=d[l][e],o=f(e,t),s=0;s<c.length;s++){var i=c[s];void 0!==o[i]&&void 0===n[i]&&(n[i]=r,r+=1)}return n}(e,l)[t],h=a.title,p=c+" "+o,v=function(e,t){for(var a=[],n=e["displayed-links"],l=0;l<n.length;l++){var c=n[l],o=t[c];if(void 0!==o){var u=e["core-links"][c];a.push((m=u.label,d=o,h=u.icon,null==d?r.a.createElement("span",{className:"material-icons icon-link disabled"},h):r.a.createElement("a",{className:"icon-link",href:d,target:"_blank",rel:"noreferrer"},r.a.createElement(i.a,{key:"header",placement:"top",overlay:r.a.createElement(s.a,{id:"tooltip-"+m},m)},r.a.createElement("span",{className:"material-icons"},h)))))}}var m,d,h;return a}(n,a),b=E[e];return function(e,t,a,n,l){return r.a.createElement("div",{className:"content-item"},r.a.createElement("div",{className:"content-header"},r.a.createElement("div",{className:"label",style:{backgroundColor:a}},t),r.a.createElement(i.a,{key:"header",placement:"top",overlay:r.a.createElement(s.a,{id:"tooltip-"+e},e)},r.a.createElement("div",{className:"title"},e))),r.a.createElement("div",{className:"links"},n,l))}(h,p,b,v,function(e,t,a,n,l){var c=function(e,t){var a=function(e,t){for(var a=Object.keys(t),n=[],l=0;l<a.length;l++){var c=a[l],o=e[c];if(void 0!==o){var s=t[c],i=s.icon,u=s.label;null===o?n.push(new m.b(i,u)):n.push(new m.a(i,u,o))}}return r.a.createElement("div",{className:"quick-link-bar"},n)}(t,e["core-links"]),n=function(e,t){for(var a=[],n=0;n<t.length;n++){var r=t[n],l=r.label,c=r.key,o=e[c];0!==o.length&&a.push(y(o,l))}return a}(t,e["extra-links"]),l=function(e,t){for(var a=[],n=0;n<t.length;n++){var l=t[n],c=l.key,o=e[c];if(0!==o.length){var s=l.format;a.push(r.a.createElement("div",{className:"modal-section static-content"},r.a.createElement("h4",null,l.label),w(o,s)))}}return r.a.createElement("div",null,a)}(t,e["static-contents"]);return r.a.createElement(r.a.Fragment,null,a,l,n)}(n,l);return r.a.createElement(u,{header:e,subheader:t,modalContent:c,contentColor:a})}(h,p,b,n,a))}function y(e,t){for(var a=[],n=0;n<e.length;n++){var l=e[n];a.push(r.a.createElement("a",{href:l.link,target:"_blank",rel:"noreferrer"},l.title))}return r.a.createElement("div",{className:"modal-section"},r.a.createElement("h4",null,t),r.a.createElement("div",{className:"extra-links"},a))}function w(e,t){var a=[];return"p"===t&&e.forEach((function(e){return a.push(r.a.createElement("p",null,e))})),"ul"===t&&a.push(function e(t){for(var a=[],n=0;n<t.length;n++){var l=t[n];Array.isArray(l)?a.push(e(l)):a.push(r.a.createElement("li",null,l))}return r.a.createElement("ul",null,a)}(e)),"ol"===t&&a.push(function e(t){for(var a=[],n=0;n<t.length;n++){var l=t[n];Array.isArray(l)?a.push(e(l)):a.push(r.a.createElement("li",null,l))}return r.a.createElement("ol",null,a)}(e)),r.a.createElement("div",null,a)}t.b=function(e){if(0!==Object.keys(e).length){var t=(n=(p(new Date)-p(h["semester-start-date"]))/864e5,Math.min(Math.floor(n/7),15)),a=g(t,e);return r.a.createElement("div",{className:"week-content"},r.a.createElement("h5",null,"Week ",t),a)}var n}},Iiz4:function(e,t,a){},JdhN:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return s}));var n=a("q1tI"),r=a.n(n),l=(a("Wh5u"),a("82xa"));function c(e,t,a){return r.a.createElement("a",{href:a,className:"quick-link-anchor",target:"_blank",rel:"noreferrer"},r.a.createElement("div",{className:"quick-link"},r.a.createElement("span",{className:"material-icons"},e),r.a.createElement("div",{className:"quick-link-label"},t)))}function o(e,t){return r.a.createElement("a",{className:"quick-link-anchor",target:"_blank",rel:"noreferrer"},r.a.createElement("div",{className:"quick-link disabled"},r.a.createElement("span",{className:"material-icons"},e),r.a.createElement("div",{className:"quick-link-label"},t)))}function s(){var e=[];return l.forEach((function(t){return e.push(c(t.icon,t.label,t.link))})),r.a.createElement("div",{className:"quick-link-bar"},e)}},L6br:function(e,t,a){},U9WC:function(e){e.exports=JSON.parse('{"semester-start-date":"8/26/2020","semester-end-date":"12/18/2020","active":true}')},Wh5u:function(e,t,a){},q4sD:function(e,t,a){},"t/aD":function(e,t,a){"use strict";a.r(t);var n=a("JX7q"),r=a("dI71"),l=a("q1tI"),c=a.n(l),o=a("a8qA"),s=a("qhky"),i=a("CnGb"),u=a("kI1L"),m=(a("+5i3"),a("L6br"),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={course_data:{}},a.testGetContentSource=a.testGetContentSource.bind(Object(n.a)(a)),a.finishedLoadingData=a.finishedLoadingData.bind(Object(n.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){for(var e=this,t=Object(u.b)(),a=function(a){var n=t[a],r=e.state.course_data;Object(u.a)(n).then((function(t){return e.setAndReturn(r,n,t)})).then((function(t){return e.setState({course_data:t})}))},n=0;n<t.length;n++)a(n)},a.setAndReturn=function(e,t,a){return e[t]=a,e},a.testGetContentSource=function(){console.log(this.state)},a.finishedLoadingData=function(){return Object.keys(this.state.course_data).length===Object(u.b)().length},a.loadHomeScreen=function(){if(this.finishedLoadingData()){for(var e=[],t=1;t<=15;t++)e.push(c.a.createElement("div",{className:"week-content col-5",style:{marginTop:"40px"}},c.a.createElement("h5",null,"Week ",t),Object(i.a)(t,this.state.course_data)));return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("h1",null,"Semester Calendar"),c.a.createElement("div",{class:"semester-calendar-body"},e))}return c.a.createElement("div",null,"Loading ;_;")},a.render=function(){return c.a.createElement("div",null,c.a.createElement(s.a,null,c.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0"}),c.a.createElement("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}),c.a.createElement("link",{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1",crossorigin:"anonymous"}),c.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",integrity:"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk",crossorigin:"anonymous"})),c.a.createElement(o.a,null),this.loadHomeScreen())},t}(c.a.Component));t.default=m}}]);
//# sourceMappingURL=component---src-pages-semester-jsx-c8fcc608338e1ed178f7.js.map