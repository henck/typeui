import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{n as r,o as i,r as a,s as o}from"./Theme-DNNvCs1s.js";import{n as s}from"./iframe-BMOsmv_G.js";import{n as c,t as l}from"./lighten-BkId_tvD.js";import{n as u,t as d}from"./Hint-BCJZ_IHC.js";var f,p,m;function h(){return(h=t((()=>{n(),r(),l(),f=s(),p=e=>(0,f.jsx)(`div`,{className:e.className,children:e.children}),m=a(p)`
  font-size: 80%;
  line-height: 1.4em;
  color: ${e=>e.contrast?c(.3,e.theme.errorColor.color):e.theme.errorColor.color};
  padding-top: 4px;
  padding-left: 4px;
`})))()}var g,_,v,y;function b(){return(b=t((()=>{n(),r(),o(),l(),g=s(),_=a.span`
  /* Required fields put an asterisk on the label. */ 
  color: ${e=>e.theme.errorColor.color};
`,v=e=>(0,g.jsxs)(`label`,{tabIndex:-1,className:e.className,children:[e.children,e.required&&!e.noStar==1&&(0,g.jsx)(_,{children:`*`})]}),y=a(v)`
  position: relative;
  font-weight: 500;
  font-size: 80%;
  margin-right: 1em;
  color: ${e=>c(.5,e.theme.fontColor)};
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: hidden;
  text-overflow: ellipsis;

  /* Ordinarily, labels are displayed above the field control: */
  display: block;
  /* ...but for inline fields, they are placed inline. */
  ${e=>e.inline&&i`
    display: inline;
  `}
`})))()}var x,S;function C(){return(C=t((()=>{x=e(n()),S=x.createContext(null)})))()}var w,T,E,D;function O(){return(O=t((()=>{w=e(n()),r(),l(),T=s(),E=e=>{let t=w.useRef(null);return(0,T.jsx)(`div`,{className:e.className,onClick:()=>{if(!e.boxed)return;let n=t.current.getElementsByClassName(`clickable`)[0];n instanceof HTMLElement&&(n.click(),n.focus())},ref:t,children:e.children})},D=a(E)`
  // A bottom margin is only added when the field is not boxed.
  ${e=>!e.boxed&&i`margin-bottom: 8px;`}

  // Applies only to boxed fields.
  ${e=>e.boxed&&i`
    position: relative;
    padding-top: 16px;
    padding-bottom: 5px;
    border: solid 2px ${e.theme.normalColor};
    border-radius: ${e=>e.theme.radius}px;
    background-color: ${e=>e.theme.background};
    transition: background-color ${e.theme.transition.duration}s ease,
                border-color ${e.theme.transition.duration*3}s ease-in-out;
    &:focus-within {
      border-color: ${c(.25,e.theme.primaryColor)};
    }
    /* Label */
    & > *:nth-child(1) {
      padding-left: 15px;
      padding-right: 14px;
      line-height: 12px;
      font-size: 12px;
      font-weight: 700;
      font-variant: all-small-caps;      
      opacity: ${+!e.error};
      color: #2C4253;
    }
    /* Hint/error */
    & > *:nth-child(3) {
      position: absolute;
      ${e.error&&i`left: 12px;`}
      ${!e.error&&i`right: 12px;`}
      top: 12px;
      line-height: 12px;
      font-size: 12px;
      font-weight: 700;
      font-variant: all-small-caps;
    }
  `}

  // Applies only to boxed fields.
  ${e=>e.boxed&&e.error&&i`
    border-color: ${e.theme.errorColor.border};
    background: ${e.theme.errorColor.background};
    &:focus-within {
      border-color: ${e.theme.errorColor.border};
    }
  `}

  /* Fields may provide their width in relative units to other fields. */
  ${e=>e.width&&i`flex: ${e.width}`}
`})))()}var k,A,j;function M(){return(M=t((()=>{k=e(n()),u(),h(),b(),C(),O(),A=s(),j=class extends k.Component{static{this.contextType=S}constructor(e){super(e),this.handleChange=e=>{this.setState(e=>e.pristine?{pristine:!1}:null),this.setState({value:e}),this.context.onChange(this.props.name,e,!!this.props.forceupdate)},this.state={pristine:!0,validation:this.getValidation(this.props.value),value:this.props.value}}componentDidMount(){this.context.onValidate(this.props.name,this.state.validation==null)}componentWillUnmount(){this.context.onValidate(this.props.name,!0)}shouldComponentUpdate(e,t){return e.value==this.props.value?e.control!=this.props.control||e.disabled!=this.props.disabled||t.value!=this.state.value||t.validation!=this.state.validation:(this.setState({value:e.value}),!0)}componentDidUpdate(e,t){if(t.value==this.state.value)return;let n=this.getValidation(this.state.value);this.state.validation!==n&&(this.setState({validation:n}),this.context.onValidate(this.props.name,n==null))}getValidation(e){return this.props.required!=null&&!this.validateRequired(e)?this.props.required.message:this.props.isInt!=null&&!this.validateInt(e)?this.props.isInt.message:this.props.isFloat!=null&&!this.validateFloat(e)?this.props.isFloat.message:this.props.min!=null&&!this.validateMin(e)?this.props.min.message:this.props.max!=null&&!this.validateMax(e)?this.props.max.message:this.props.between!=null&&!this.validateBetween(e)?this.props.between.message:this.props.minLength!=null&&!this.validateMinLength(e)?this.props.minLength.message:this.props.maxLength!=null&&!this.validateMaxLength(e)?this.props.maxLength.message:this.props.lengthBetween!=null&&!this.validateLengthBetween(e)?this.props.lengthBetween.message:this.props.pattern!=null&&!this.validatePattern(e)?this.props.pattern.message:this.props.noPattern!=null&&!this.validateNotPattern(e)?this.props.noPattern.message:this.props.email!=null&&!this.validateEmail(e)?this.props.email.message:null}validateRequired(e){return typeof e==`boolean`?!!e:typeof e==`string`?e.trim().length>0:typeof e==`number`||!!e}validateInt(e){return!e||/^[-+]?[0-9]+$/.test(e)}validateFloat(e){if(!e)return!0;let t=this.props.isFloat.separator?this.props.isFloat.separator:`.`;return RegExp(`^[-+]?[0-9]+(\\${t}[0-9]+)?$`).test(e)}validateMin(e){return!e||parseInt(e)>=this.props.min.value}validateMax(e){return!e||parseInt(e)<=this.props.max.value}validateBetween(e){if(!e)return!0;let t=parseInt(e);return t>=this.props.between.min&&t<=this.props.between.max}validateMinLength(e){return!e||typeof e==`string`&&e.length>=this.props.minLength.length}validateMaxLength(e){return!e||typeof e==`string`&&e.length<=this.props.maxLength.length}validateLengthBetween(e){return!e||typeof e==`string`&&e.length>=this.props.between.min&&e.length<=this.props.between.max}validatePattern(e){return!e||new RegExp(this.props.pattern.pattern).test(e)}validateNotPattern(e){return!e||!new RegExp(this.props.noPattern.pattern).test(e)}validateEmail(e){return!e||/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}getControl(e){return k.cloneElement(this.props.control,{name:this.props.name,onChange:this.handleChange,value:this.state.value,checked:this.state.value,error:e,disabled:this.props.disabled})}render(){let e=this.props,t=this.state.validation,n=this.context.dirty,r=(!this.state.pristine||n)&&t!=null;return e.noWrapper?this.getControl(r):(0,A.jsxs)(D,{boxed:e.boxed,width:e.width,error:r,children:[this.props.label&&(0,A.jsx)(y,{inline:this.props.inline,required:!!this.props.required,noStar:e.noStar,children:this.props.label}),this.getControl(r),r&&t&&(0,A.jsx)(m,{contrast:this.props.contrast,children:t}),!r&&e.hint&&(0,A.jsx)(d,{children:this.props.hint})]})}},j.__docgenInfo={description:``,methods:[{name:`handleChange`,docblock:null,modifiers:[],params:[{name:`value`,optional:!1,type:{name:`any`}}],returns:null},{name:`getValidation`,docblock:null,modifiers:[],params:[{name:`value`,optional:!1,type:{name:`any`}}],returns:{type:{name:`ReactReactNode`,raw:`React.ReactNode`}}},{name:`validateRequired`,docblock:`Verify that field has a value.`,modifiers:[],params:[{name:`value`,optional:!1,type:{name:`any`}}],returns:{type:{name:`boolean`}},description:`Verify that field has a value.`},{name:`validateInt`,docblock:`Verify that value is an integer number.`,modifiers:[],params:[{name:`value`,optional:!1,type:{name:`any`}}],returns:{type:{name:`boolean`}},description:`Verify that value is an integer number.`},{name:`validateFloat`,docblock:null,modifiers:[],params:[{name:`value`,optional:!1,type:{name:`any`}}],returns:{type:{name:`boolean`}}},{name:`validateMin`,docblock:`Verify that value has a minimum numerical value.`,modifiers:[],params:[{name:`value`,optional:!1,type:{name:`any`}}],returns:{type:{name:`boolean`}},description:`Verify that value has a minimum numerical value.`},{name:`validateMax`,docblock:`Verify that value has a maximum numerical value.`,modifiers:[],params:[{name:`value`,optional:!1,type:{name:`any`}}],returns:{type:{name:`boolean`}},description:`Verify that value has a maximum numerical value.`},{name:`validateBetween`,docblock:`Verify that value falls in a numerical range (inclusive).`,modifiers:[],params:[{name:`value`,optional:!1,type:{name:`any`}}],returns:{type:{name:`boolean`}},description:`Verify that value falls in a numerical range (inclusive).`},{name:`validateMinLength`,docblock:`Verify that value is a string of minimum length.`,modifiers:[],params:[{name:`value`,optional:!1,type:{name:`any`}}],returns:{type:{name:`boolean`}},description:`Verify that value is a string of minimum length.`},{name:`validateMaxLength`,docblock:`Verify that value is a string of maximum length.`,modifiers:[],params:[{name:`value`,optional:!1,type:{name:`any`}}],returns:{type:{name:`boolean`}},description:`Verify that value is a string of maximum length.`},{name:`validateLengthBetween`,docblock:`Verify that value is a string of length between minimum and maximum.`,modifiers:[],params:[{name:`value`,optional:!1,type:{name:`any`}}],returns:{type:{name:`boolean`}},description:`Verify that value is a string of length between minimum and maximum.`},{name:`validatePattern`,docblock:`Verify that value satisfies a pattern.`,modifiers:[],params:[{name:`value`,optional:!1,type:{name:`any`}}],returns:{type:{name:`boolean`}},description:`Verify that value satisfies a pattern.`},{name:`validateNotPattern`,docblock:`Verify that value does not satisfy a pattern.`,modifiers:[],params:[{name:`value`,optional:!1,type:{name:`any`}}],returns:{type:{name:`boolean`}},description:`Verify that value does not satisfy a pattern.`},{name:`validateEmail`,docblock:`Verify that values is a valid email address.`,modifiers:[],params:[{name:`value`,optional:!1,type:{name:`any`}}],returns:{type:{name:`boolean`}},description:`Verify that values is a valid email address.`},{name:`getControl`,docblock:null,modifiers:[],params:[{name:`hasError`,optional:!1,type:{name:`boolean`}}],returns:null}],displayName:`Field`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},inline:{required:!1,tsType:{name:`boolean`},description:`Place label inline with field control. \r
@default false`},width:{required:!1,tsType:{name:`number`},description:`Relative width of field. If not set, field will not flex to fill available width.`},label:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Label to show by field. Can be JSX.`},name:{required:!0,tsType:{name:`string`},description:`Field name. Required.`},value:{required:!0,tsType:{name:`any`},description:`Field value. Required.`},disabled:{required:!1,tsType:{name:`boolean`},description:`Disabled is passed on to control. \r
@default false`},hint:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Hint to be shown when there is no error. Can be JSX.`},contrast:{required:!1,tsType:{name:`boolean`},description:`If true, error messages have more contrast (for dark backgrounds) \r
@default false`},noStar:{required:!1,tsType:{name:`boolean`},description:`If true, display no asterisk for required fields.`},boxed:{required:!1,tsType:{name:`boolean`},description:`If true, field has a boxed appearance. This places a border around the \r
field, which is clickable and moves focus to the contained control.`},control:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Control to show in field.`},forceupdate:{required:!1,tsType:{name:`boolean`},description:`If true, a change to this field forces the whole form to update.\r
@default false`},required:{required:!1,tsType:{name:`ISimpleValidation`},description:`Required validation. Field must be filled lut.\r
\r
@example\r
<Field ... required={{message: "Required field"}}>`},isInt:{required:!1,tsType:{name:`ISimpleValidation`},description:`Integer validation.\r
\r
@example \r
<Field ... isInt={{message: "Must be an integer value"}}>`},isFloat:{required:!1,tsType:{name:`IFloatValidation`},description:`Float validation.\r
\r
@example\r
<Field ... isFloat={{message: "Must be a float value"}}>`},min:{required:!1,tsType:{name:`IValueValidation`},description:`Minimum number value validation.\r
\r
@example \r
<Field ... min={{value:3, message: "Must be at least 3."}}>`},max:{required:!1,tsType:{name:`IValueValidation`},description:`Maximum number value validation.\r
\r
@example \r
<Field ... max={{value:100, message: "Must be at most 100."}}>`},between:{required:!1,tsType:{name:`IBetweenValidation`},description:`Between numbers valdation.\r
\r
@example \r
<Field ... between={{min:3, max:25, message: "Must be 3..25 inclusive"}}>`},lengthBetween:{required:!1,tsType:{name:`IBetweenValidation`},description:`String length range validation.\r
\r
@example\r
<Field ... lengthBetween={{min: 3, max: 25; message: "Must be 3..25 characters."}}>`},minLength:{required:!1,tsType:{name:`ILengthValidation`},description:`String length minimum validation.\r
\r
@example\r
<Field ... minLength={{length: 3, message: "Must be at least 3 characters."}}>`},maxLength:{required:!1,tsType:{name:`ILengthValidation`},description:`String length maximum validation.\r
\r
@example\r
<Field ... maxLength={{length: 25, message: "Must be no more than 25 characters."}}>`},pattern:{required:!1,tsType:{name:`IPatternValidation`},description:`Pattern validation.\r
\r
@example\r
<Field ... pattern={{pattern: "a+", message: "Must have pattern a+"}}>`},noPattern:{required:!1,tsType:{name:`IPatternValidation`},description:`Negative pattern validation.\r
\r
@example\r
<Field ... noPattern={{pattern: "a+", message: "Must NOT have pattern a+"}}>`},email:{required:!1,tsType:{name:`ISimpleValidation`},description:`Email validation.\r
\r
@example\r
<Field ... email={{message: "Must be a valid email address."}}>`},noWrapper:{required:!1,tsType:{name:`boolean`},description:"If set, this Field is rendered without any embellishments: no label,\r\nno hint, no wrapper. This is useful for controls that must behave like\r\na Field (i.e. work with a Form to get their `value` and `onChange` set),\r\nbut mustn't look like one."}}}})))()}var N,P,F,I;function L(){return(L=t((()=>{n(),r(),o(),N=s(),P=e=>(0,N.jsx)(`div`,{className:e.className,children:e.children}),F=a(P)`
  display:        flex;
  flex-direction: row;
  flex-wrap:      wrap;
  align-items:    flex-start;

  /* Insert a small margin between fields, and fix for wrapping
  * using negative margins. */
  margin: 0 -8px;
  & > * { margin: 0 8px; }
  /* For equal spacing, have each field occupy 100%. */
  ${e=>e.equal&&i`
    & > * {
      width: 100%;
    }
  `}
`,I=e=>(0,N.jsx)(F,{...e}),I.__docgenInfo={description:``,methods:[],displayName:`Group`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`},equal:{required:!1,tsType:{name:`boolean`},description:`Divide field widths evenly. \r
@default false`}}}})))()}var R,z;function B(){return(B=t((()=>{n(),u(),b(),O(),R=s(),z=e=>(0,R.jsxs)(D,{boxed:e.boxed,width:e.width,children:[e.label?(0,R.jsx)(y,{inline:e.inline,children:e.label}):null,e.children,(0,R.jsx)(d,{children:e.hint})]}),z.__docgenInfo={description:``,methods:[],displayName:`Uncontrolled`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`},label:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Label to show by field. Can be JSX.`},boxed:{required:!1,tsType:{name:`boolean`},description:`If true, field has a boxed appearance. This places a border around the \r
field, which is clickable and moves focus to the contained control.`},inline:{required:!1,tsType:{name:`boolean`},description:`Place label inline with field control. \r
@default false`},width:{required:!1,tsType:{name:`number`},description:`Relative width of field. If not set, field will not flex to fill \r
available width.`},hint:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Hint to show`}}}})))()}var V,H,U;function W(){return(W=t((()=>{V=e(n()),M(),L(),B(),C(),H=s(),U=class extends V.Component{static{this.Field=j}static{this.Group=I}static{this.Uncontrolled=z}constructor(e){super(e),this.validations=new Map,this.handleChange=(e,t,n)=>{let r=e.split(`.`),i=this.props.data;r.forEach(e=>{let n=e.indexOf(`[`);if(n!=-1){let t=e.substring(0,n),r=parseInt(e.substring(n+1,e.length-1));i=i[t][r]}else i[e]=t}),this.props.onChange(this.props.data,n)},this.handleValidate=(e,t)=>{this.validations.set(e,t);let n=!0;this.validations.forEach(e=>{n&&=e}),n!==this.state.isValid&&(this.setState({isValid:n}),this.props.onValidate(n))},this.state={providerValue:{onChange:this.handleChange,onValidate:this.handleValidate,dirty:this.props.dirty}}}componentDidUpdate(e){e.dirty!=this.props.dirty&&this.setState({providerValue:{onChange:this.handleChange,onValidate:this.handleValidate,dirty:this.props.dirty}})}render(){return(0,H.jsx)(S.Provider,{value:this.state.providerValue,children:this.props.children})}},U.__docgenInfo={description:`The Form element must be used to wrap all forms. All controls inside a form must \r
be wrapped in Form.Field elements.\r
\r
The data that must be shown in the form is provided through the data prop, which \r
should be an object.\r
\r
Form uses Context to set onChange and onValidate handlers on all Field elements inside \r
the form, whatever their nesting depth. When form data is changed, onChange is fired \r
with the new form content.\r
\r
The Field element keeps its own state so that updates to the form are reflected without \r
changing the form's data prop. This way, should a caller of Form choose to, they may \r
update the form data only when required (such as when setting the dirty flag), which \r
avoid rerendering all form elements on every interaction.\r
\r
@link https://henck.github.io/typeui/?path=/story/controls-form--properties`,methods:[{name:`Group`,docblock:`Groups several form fields.`,modifiers:[`static`],params:[{name:`props`,optional:!1,type:{name:`IGroupProps`,alias:`IGroupProps`}}],returns:null,description:`Groups several form fields.`},{name:`Uncontrolled`,docblock:`Components may wish to show a control wrapped in a field, without the overhead of \r
a Form, while still benefiting from Field formatting.\r
\r
The Uncontrolled element accepts a label and a hint, but no validation rules (and \r
thus shows no errors). It also does not provide an onChange handler to its control; \r
the calling code must do that. The field's control is also not provided as a prop, \r
but as a child.`,modifiers:[`static`],params:[{name:`props`,optional:!1,type:{name:`IProps`,alias:`IProps`}}],returns:null,description:`Components may wish to show a control wrapped in a field, without the overhead of \r
a Form, while still benefiting from Field formatting.\r
\r
The Uncontrolled element accepts a label and a hint, but no validation rules (and \r
thus shows no errors). It also does not provide an onChange handler to its control; \r
the calling code must do that. The field's control is also not provided as a prop, \r
but as a child.`},{name:`handleChange`,docblock:null,modifiers:[],params:[{name:`name`,optional:!1,type:{name:`string`}},{name:`value`,optional:!1,type:{name:`any`}},{name:`forceupdate`,optional:!1,type:{name:`boolean`}}],returns:null},{name:`handleValidate`,docblock:null,modifiers:[],params:[{name:`name`,optional:!1,type:{name:`string`}},{name:`valid`,optional:!1,type:{name:`boolean`}}],returns:null}],displayName:`Form`,props:{children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},data:{required:!0,tsType:{name:`any`},description:``},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(data: any, forceupdate: boolean) => void`,signature:{arguments:[{type:{name:`any`},name:`data`},{type:{name:`boolean`},name:`forceupdate`}],return:{name:`void`}}},description:`Called whenever form data changes.`},onValidate:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(valid: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`valid`}],return:{name:`void`}}},description:`Called whenever a field validates. Returns validation state for whole form.`},dirty:{required:!1,tsType:{name:`boolean`},description:`When a form is dirty, it shows all validation errors, even\r
on pristine fields.\r
@default false`}}}})))()}export{W as n,U as t};