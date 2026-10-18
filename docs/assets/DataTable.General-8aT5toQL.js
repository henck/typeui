import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-BMOsmv_G.js";import{i as n,r}from"./react-DITjJg24.js";import{c as i,l as a,r as o,s}from"./blocks-CwW7mlwR.js";import{n as c}from"./DataTable-D-jNyVvS.js";import{i as l,n as u,r as d,t as f}from"./DataTable.General.stories-UfK8ax8W.js";function p(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(t.h1,{id:`datatable-general`,children:`DataTable: General`}),`
`,(0,h.jsx)(t.p,{children:`.`}),`
`,(0,h.jsx)(s,{of:f}),`
`,(0,h.jsx)(t.h2,{id:`order`,children:`order`}),`
`,(0,h.jsxs)(t.p,{children:[`The `,(0,h.jsx)(t.code,{children:`DataTable`}),` supports visual elements for row ordering. Calling code\r
must provide the `,(0,h.jsx)(t.code,{children:`order`}),` attribute (a column name) and optionally\r
the `,(0,h.jsx)(t.code,{children:`dir`}),` attribute (`,(0,h.jsx)(t.code,{children:`asc`}),` or `,(0,h.jsx)(t.code,{children:`desc`}),`) for ordering options to appear.`]}),`
`,(0,h.jsxs)(t.p,{children:[`The `,(0,h.jsx)(t.code,{children:`DataTable.Column`}),` elements in the DataTable must have `,(0,h.jsx)(t.code,{children:`order`}),`\r
and `,(0,h.jsx)(t.code,{children:`dir`}),` properties set, as well.`]}),`
`,(0,h.jsxs)(t.p,{children:[`Note that `,(0,h.jsx)(t.code,{children:`DataTable`}),` is not responsible for the ordering; the calling\r
code must listen for the `,(0,h.jsx)(t.code,{children:`onOrder`}),` event and provide a new `,(0,h.jsx)(t.code,{children:`data`}),` array.`]}),`
`,(0,h.jsx)(o,{children:(0,h.jsx)(i,{of:d})}),`
`,(0,h.jsx)(t.h2,{id:`onclick`,children:`onClick`}),`
`,(0,h.jsxs)(t.p,{children:[`A `,(0,h.jsx)(t.code,{children:`DataTable`}),` takes an `,(0,h.jsx)(t.code,{children:`onClick`}),` event handler. When a row is clicked,\r
the onClick event is fired with the row's data item. Clickable rows also\r
give visual feedback.`]}),`
`,(0,h.jsx)(o,{children:(0,h.jsx)(i,{of:u})})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=t(),r(),a(),c(),l()})))()}g();export{m as default};