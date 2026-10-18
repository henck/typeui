import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./Theme-DNNvCs1s.js";import{n}from"./iframe-BMOsmv_G.js";import{i as r,r as i}from"./react-DITjJg24.js";import{c as a,l as o,r as s,s as c}from"./blocks-CwW7mlwR.js";import{t as l}from"./Input-DQRcmSVK.js";import{n as u}from"./Form-D4ylMLPW.js";import{t as d}from"./Dropdown-D5qQp9uQ.js";import{i as f,n as p,r as m,t as h}from"./Form.General.stories-BtWzi1dy.js";function g(e){let t={br:`br`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...r(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(t.h1,{id:`form-general`,children:`Form: General`}),`
`,(0,v.jsx)(t.p,{children:`.`}),`
`,(0,v.jsx)(c,{of:p}),`
`,(0,v.jsx)(t.h2,{id:`field`,children:`Field`}),`
`,(0,v.jsxs)(t.p,{children:[`A `,(0,v.jsx)(t.code,{children:`Form.Field`}),` wraps a form control. It serves several purposes.`]}),`
`,(0,v.jsxs)(t.p,{children:[`First, the Field automatically adds `,(0,v.jsx)(t.code,{children:`name`}),`, `,(0,v.jsx)(t.code,{children:`onChange`}),`, `,(0,v.jsx)(t.code,{children:`value`}),` and `,(0,v.jsx)(t.code,{children:`error`}),`\r
props to the control it contains. The `,(0,v.jsx)(t.code,{children:`onChange`}),` prop is supplied by the Form\r
content so that the developer does not need to add it.`]}),`
`,(0,v.jsx)(t.p,{children:`Second, the Field performs validation when it is mounted, whenever its control's value\r
changes, and when it is unmounted. Validation results are send directly to the parent\r
Form (using Context, again).`}),`
`,(0,v.jsxs)(t.p,{children:[`A Field may provide a `,(0,v.jsx)(t.code,{children:`hint`}),` prop - which can be any JSX - which is shown under the\r
control.`]}),`
`,(0,v.jsxs)(t.p,{children:[`A Field may add any number of validation rules, e.g. `,(0,v.jsx)(t.code,{children:`required={{message:"This field is required"}}`}),`.\r
Each rule is a prop. Rules include `,(0,v.jsx)(t.code,{children:`rquired`}),`, `,(0,v.jsx)(t.code,{children:`isInt`}),`, `,(0,v.jsx)(t.code,{children:`minLength`}),` etc.`]}),`
`,(0,v.jsxs)(t.p,{children:[`When a field is first mounted, it is pristine. Even when its content is invalid, it will\r
not show any validation error. When the user edits the fields, it will no longer be\r
pristine and any errors will appear. The parent Form also provides a `,(0,v.jsx)(t.code,{children:`dirty`}),` prop to the\r
Field. When the Form is dirty, so are its fields, and any validation errors are shown, pristine or not.`]}),`
`,(0,v.jsxs)(t.p,{children:[`For dark backgrounds, fields may set their `,(0,v.jsx)(t.code,{children:`contrast`}),` prop to true to use lighter error colors.`]}),`
`,(0,v.jsxs)(t.p,{children:[`Field may be `,(0,v.jsx)(t.code,{children:`boxed`}),`, which will wrap their label, control and hint together\r
in a box. When the box is clicked, the control is programmatically clicked.`,(0,v.jsx)(t.br,{}),`
`,`The box also assumes the control's hover state.  Works best with transparent\r
inputs and inlined dropdowns.`]}),`
`,(0,v.jsx)(s,{children:(0,v.jsx)(a,{of:h})}),`
`,(0,v.jsx)(t.h2,{id:`uncontrolled-controls`,children:`Uncontrolled controls`}),`
`,(0,v.jsx)(t.p,{children:`Components may wish to show a control wrapped in a field, without the\r
overhead of a Form, while still benefiting from Field formatting.`}),`
`,(0,v.jsxs)(t.p,{children:[`The `,(0,v.jsx)(t.code,{children:`Uncontrolled`}),` element accepts a `,(0,v.jsx)(t.code,{children:`label`}),` and a `,(0,v.jsx)(t.code,{children:`hint`}),`, but no validation\r
rules (and thus shows no errors). It also does not provide an onChange\r
handler to its control; the calling code must do that.`]}),`
`,(0,v.jsx)(t.p,{children:`The field's control is also not provided as a prop, but as a child.`}),`
`,(0,v.jsxs)(t.p,{children:[`Like the `,(0,v.jsx)(t.code,{children:`Field`}),`, `,(0,v.jsx)(t.code,{children:`Uncontrolled`}),` may be boxed, which places a box around the\r
label, control and hint. When the box is clicked, the control is\r
programmatically clicked.  The box also assumes the control's hover state.\r
Works best with transparent inputs and inlined dropdowns.`]}),`
`,(0,v.jsx)(s,{children:(0,v.jsx)(a,{of:m})})]})}function _(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=n(),i(),o(),u(),l(),d(),t(),f()})))()}y();export{_ as default};