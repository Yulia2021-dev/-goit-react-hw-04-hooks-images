(this["webpackJsonp-goit-react-hw-04-hooks-images"]=this["webpackJsonp-goit-react-hw-04-hooks-images"]||[]).push([[0],{23:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(7),o=n.n(a),s=(n(23),n(5)),i=n.n(s),u=n(4),b=n(9),l=n(3),j=n(16),f=n.n(j),h=(n(45),n(6)),m=n(2),p=function(e){var t=e.onSubmit,n=Object(r.useState)(""),c=Object(l.a)(n,2),a=c[0],o=c[1];return Object(m.jsx)("header",{className:"searchbar",children:Object(m.jsxs)("form",{className:"searchForm",onSubmit:function(e){e.preventDefault(),""!==a.trim()?(t(a),o("")):h.b.error("Enter correct name!")},children:[Object(m.jsx)("button",{type:"submit",className:"searchForm-button",children:Object(m.jsx)("span",{className:"searchForm-button"})}),Object(m.jsx)("input",{className:"searchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){o(e.currentTarget.value.toLowerCase())},value:a})]})})},O=(n(47),n(17)),d=(n(58),function(e){var t=e.id,n=e.webformatURL,c=e.largeImageURL,a=Object(r.useState)(!1),o=Object(l.a)(a,2),s=o[0],i=o[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("li",{className:"imageGalleryItem",onClick:function(){return i(!0)},children:Object(m.jsx)("img",{src:n,alt:"pic-".concat(t),className:"imageGalleryItem-image"})},t),s&&Object(m.jsx)(O.a,{mainSrc:c,onCloseRequest:function(){return i(!1)}})]})}),g=(n(59),function(e){var t=e.result;return Object(m.jsx)("ul",{className:"gallery",children:t.map((function(e){return Object(m.jsx)(d,{id:e.id,largeImageURL:e.largeImageURL,webformatURL:e.webformatURL},e.id)}))})}),x=(n(60),function(e){var t=e.onClick;return Object(m.jsx)("button",{className:"button",type:"button",onClick:t,children:"Load more"})}),w=(n(61),n(62),function(){var e=Object(b.a)(i.a.mark((function e(t,n){var r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat("https://pixabay.com/api","/?image_type=photo&orientation=horizontal&q=").concat(t,"&page=").concat(n,"&per_page=12&key=").concat("23670564-24f7dd7b8f7c27899fb90c8ea"),e.next=3,fetch(r);case 3:return c=e.sent,e.next=6,c.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),v=w,y=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),o=Object(l.a)(a,2),s=o[0],j=o[1],O=Object(r.useState)("idle"),d=Object(l.a)(O,2),w=d[0],y=d[1],k=Object(r.useState)(1),S=Object(l.a)(k,2),N=S[0],C=S[1],L=function(){var e=Object(b.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:""!==n&&(y("pending"),F(N,R(n),I(n)).then((function(e){var t=e.hits;if(0===t.length)throw new Error(R(n));if(t.length<12)throw j([].concat(Object(u.a)(s),Object(u.a)(t))),new Error(I(n));y("resolved"),j([].concat(Object(u.a)(s),Object(u.a)(t))),E()})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){return C(N+1)},F=function(){var e=Object(b.a)(i.a.mark((function e(t,r,c){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v(n,t);case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),h.b.error(e.t0.message),y("idle");case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n,r){return e.apply(this,arguments)}}(),R=function(e){return'No images found for "'.concat(e,'". Try again.')},I=function(e){return'No more images found for "'.concat(e,'".')};return Object(r.useEffect)((function(){""!==n&&(j([]),y("pending"),F(N,R(n),I(n)).then((function(e){try{var t=e.hits;if(0===t.length)throw new Error(R(n));if(t.length<12)throw j([].concat(Object(u.a)(s),Object(u.a)(t))),new Error(I(n));y("resolved"),j([].concat(Object(u.a)(s),Object(u.a)(t))),E(),window.scrollBy({top:1e3,behavior:"smooth"})}catch(r){h.b.error(r.message),y("idle")}})))}),[n]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(p,{onSubmit:function(e){c(e),j([]),C(1)}}),Object(m.jsx)(g,{result:s}),"resolved"===w&&Object(m.jsx)(x,{onClick:L}),"pending"===w&&Object(m.jsx)(f.a,{type:"ThreeDots",color:"#995471",width:100,style:{textAlign:"center"}}),Object(m.jsx)(h.a,{position:"top-right",autoClose:3e3})]})};o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.b90c7c7b.chunk.js.map