import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-BMOsmv_G.js";import{i as n,r}from"./react-DITjJg24.js";import{c as i,l as a,n as o,r as s,s as c}from"./blocks-CwW7mlwR.js";import{t as l}from"./Input-DQRcmSVK.js";import{n as u,t as d}from"./Form-D4ylMLPW.js";import{n as f,r as p,t as m}from"./Form.Properties.stories-2Bq5C9l_.js";function h(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(c,{of:f}),`
`,(0,_.jsx)(t.h1,{id:`form`,children:`Form`}),`
`,(0,_.jsx)(o,{of:d}),`
`,(0,_.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,_.jsxs)(t.p,{children:[`The `,(0,_.jsx)(t.code,{children:`Form`}),` element must be used to wrap all forms. All controls inside a form\r
must be wrapped in `,(0,_.jsx)(t.code,{children:`Form.Field`}),` elements.`]}),`
`,(0,_.jsxs)(t.p,{children:[`The data that must be shown in the form is provided through the `,(0,_.jsx)(t.code,{children:`data`}),` prop, which\r
should be an object.`]}),`
`,(0,_.jsxs)(t.p,{children:[`Form uses Context to set `,(0,_.jsx)(t.code,{children:`onChange`}),` and `,(0,_.jsx)(t.code,{children:`onValidate`}),` handlers on all Field elements inside\r
the form, whatever their nesting depth. When form data is changed, onChange is fired\r
with the new form content.`]}),`
`,(0,_.jsxs)(t.p,{children:[`The Field element keeps its own state so that updates to the form are reflected without\r
changing the form's `,(0,_.jsx)(t.code,{children:`data`}),` prop. This way, should a caller of Form choose to, they may\r
update the form data only when required (such as when setting the dirty flag), which\r
avoid rerendering all form elements on every interaction.`]}),`
`,(0,_.jsx)(s,{children:(0,_.jsx)(i,{of:m})})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),r(),a(),u(),l(),p()})))()}v();export{g as default};