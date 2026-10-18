import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-BMOsmv_G.js";import{i as n,r}from"./react-DITjJg24.js";import{c as i,l as a,r as o,s}from"./blocks-CwW7mlwR.js";import{n as c}from"./Dialog-Dl2eD9SP.js";import{t as l}from"./Button-gydMztyi.js";import{a as u,i as d,n as f,r as p,t as m}from"./Dialog.General.stories-CzOcEnk1.js";function h(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(t.h1,{id:`dialog-general`,children:`Dialog: General`}),`
`,(0,_.jsx)(t.p,{children:`.`}),`
`,(0,_.jsx)(s,{of:d}),`
`,(0,_.jsx)(t.h2,{id:`dialogalert`,children:`Dialog.Alert`}),`
`,(0,_.jsxs)(t.p,{children:[`The `,(0,_.jsx)(t.code,{children:`Dialog`}),` component offers a pre-built `,(0,_.jsx)(t.code,{children:`Dialog.Alert`}),` type, with an "OK" button.\r
The caller provides a `,(0,_.jsx)(t.code,{children:`title`}),`, and any JSX inside the component is used as dialog content.`]}),`
`,(0,_.jsx)(o,{children:(0,_.jsx)(i,{of:m})}),`
`,(0,_.jsx)(t.h2,{id:`dialogconfirm`,children:`Dialog.Confirm`}),`
`,(0,_.jsxs)(t.p,{children:[`The `,(0,_.jsx)(t.code,{children:`Dialog`}),` component offers a pre-built `,(0,_.jsx)(t.code,{children:`Dialog.Confirm`}),` type, with a "Yes" and a "No" button.\r
The caller provides a `,(0,_.jsx)(t.code,{children:`title`}),`, and any JSX inside the component is used as dialog content.`]}),`
`,(0,_.jsxs)(t.p,{children:[`If Yes is clicked, then the `,(0,_.jsx)(t.code,{children:`onConfirm`}),` callback is called.`]}),`
`,(0,_.jsx)(o,{children:(0,_.jsx)(i,{of:f})}),`
`,(0,_.jsx)(t.h2,{id:`dialogxhr`,children:`Dialog.Xhr`}),`
`,(0,_.jsxs)(t.p,{children:[`The `,(0,_.jsx)(t.code,{children:`Dialog`}),` component offers a pre-built `,(0,_.jsx)(t.code,{children:`Dialog.Xhr`}),` type, with an "OK" and a "Retry" button.\r
This dialog can be used when an XHR request fails. It takes an `,(0,_.jsx)(t.code,{children:`error`}),` attribute with an Axios response object,\r
and reports it to the user, providing a title and text that describe the error\r
that the asynchronous operation encountered.`]}),`
`,(0,_.jsxs)(t.p,{children:[`The Retry button only appears if the `,(0,_.jsx)(t.code,{children:`onRetry`}),` callback is provided.\r
If the user chooses to Retry the operation, then the `,(0,_.jsx)(t.code,{children:`onRetry`}),` callback is called.`]}),`
`,(0,_.jsx)(o,{children:(0,_.jsx)(i,{of:p})})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),r(),a(),c(),l(),u()})))()}v();export{g as default};