(this["webpackJsonpsample-react-app"]=this["webpackJsonpsample-react-app"]||[]).push([[0],{179:function(e,t,r){},181:function(e,t,r){"use strict";r.r(t);var a,l,c=r(0),n=r.n(c),i=r(63),s=r.n(i),o=(r(76),r(71)),u=r(12),d=(r(77),r(37)),b=r.n(d),j=r(64),h=r(70),p=r(18);r(179);!function(e){e.ANIMALS="ANIMALS",e.ARCHITECTURE="ARCHITECTURE",e.NATURE="NATURE",e.PEOPLE="PEOPLE",e.TECH="TECH"}(a||(a={})),function(e){e.NONE="NONE",e.GRAYSCALE="GRAYSCALE",e.SEPIA="SEPIA"}(l||(l={}));var f=r(1);var O=function(e){var t=e.valueChanges;return Object(f.jsxs)("div",{className:"Form",children:[Object(f.jsxs)("h1",{"data-cy":"title",children:["Awesome Image",Object(f.jsx)("br",{}),Object(f.jsx)("span",{children:"Generator"})]}),Object(f.jsx)(h.a,{initialValues:{label:"",category:"",filter:""},onSubmit:function(){var e=Object(j.a)(b.a.mark((function e(r){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(r);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),validationSchema:p.b().shape({label:p.c().required("Required").min(5,"Title length should be at least 5 characters!"),category:p.a().oneOf(Object.values(a),"Wrong category").required("Required"),filter:p.a().oneOf(Object.values(l),"Wrong filter").required("Required")}),children:function(e){var t=e.values,r=e.touched,c=e.errors,n=e.dirty,i=e.isSubmitting,s=e.handleChange,o=e.handleBlur,u=e.handleSubmit,d=e.handleReset;return Object(f.jsxs)("form",{onSubmit:u,children:[Object(f.jsxs)("fieldset",{children:[Object(f.jsx)("label",{htmlFor:"label",style:{display:"block"},className:c.label&&r.label?"error":"",children:"Label"}),Object(f.jsx)("input",{id:"label","data-cy":"label-input",placeholder:"Enter your text",type:"text",value:t.label,onChange:s,onBlur:o,className:c.label&&r.label?"text-input error":"text-input"}),c.label&&r.label&&Object(f.jsx)("div",{className:"error-feedback","data-cy":"label-input-error",children:c.label})]}),Object(f.jsxs)("fieldset",{children:[Object(f.jsx)("label",{htmlFor:"category",style:{display:"block"},className:c.category&&r.category?"error":"",children:"Category"}),Object(f.jsxs)("select",{id:"category",placeholder:"Choose category","data-cy":"category-select",value:t.category,onChange:s,onBlur:o,className:c.category&&r.category?"text-input error":"text-input",children:[Object(f.jsx)("option",{disabled:!0}),Object.values(a).map((function(e){return Object(f.jsx)("option",{children:e})}))]}),c.category&&r.category&&Object(f.jsx)("div",{className:"error-feedback","data-cy":"category-select-error",children:c.category}),Object(f.jsx)("label",{htmlFor:"filter",style:{display:"block"},className:c.filter&&r.filter?"error":"",children:"Filter"}),Object(f.jsxs)("select",{id:"filter",placeholder:"Choose filter","data-cy":"filter-select",value:t.filter,onChange:s,onBlur:o,className:c.filter&&r.filter?"text-input error":"text-input",children:[Object(f.jsx)("option",{disabled:!0}),Object.values(l).map((function(e){return Object(f.jsx)("option",{children:e})}))]}),c.filter&&r.filter&&Object(f.jsx)("div",{className:"error-feedback","data-cy":"filter-select-error",children:c.filter})]}),Object(f.jsx)("button",{type:"button",className:"outline",onClick:d,disabled:!n||i,children:"Reset"}),Object(f.jsx)("button",{type:"submit",disabled:i,children:"Generate"})]})}})]})},m=r(2),x=r(3),y=function(){function e(){Object(m.a)(this,e)}return Object(x.a)(e,null,[{key:"composeUrlFromRequest",value:function(e){var t;if(void 0===e)return"";var r=e.filter===l.NONE?"":"/".concat(e.filter.toLowerCase());return"https://placeimg.com/1000/1000/".concat(null===e||void 0===e||null===(t=e.category)||void 0===t?void 0:t.toLowerCase()).concat(r,"?t=").concat((new Date).valueOf())}}]),e}();var g=function(){var e=Object(c.useState)(),t=Object(u.a)(e,2),r=t[0],a=t[1];return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("header",{className:"App-header"}),Object(f.jsxs)("main",{children:[Object(f.jsx)(O,{valueChanges:function(e){return a(Object(o.a)({},e))}}),r&&Object(f.jsx)("div",{className:"App-image",style:{backgroundImage:'url("'.concat(y.composeUrlFromRequest(r),'")')},children:(null===r||void 0===r?void 0:r.label)&&Object(f.jsx)("h1",{children:r.label})})]})]})},v=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,182)).then((function(t){var r=t.getCLS,a=t.getFID,l=t.getFCP,c=t.getLCP,n=t.getTTFB;r(e),a(e),l(e),c(e),n(e)}))};s.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(g,{})}),document.getElementById("root")),v()},76:function(e,t,r){},77:function(e,t,r){}},[[181,1,2]]]);
//# sourceMappingURL=main.5d94ac80.chunk.js.map