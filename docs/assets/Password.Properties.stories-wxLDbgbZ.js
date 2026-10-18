import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-DlPsW1c0.js";import{n as i}from"./iframe-BMOsmv_G.js";import{t as a}from"./Input-B9plWmXf.js";import{t as o}from"./Input-DQRcmSVK.js";import{t as s}from"./Form-D4ylMLPW.js";import{t as c}from"./Form-C2IxCm0J.js";var l,u,d;function f(){return(f=t((()=>{l=e(r()),o(),u=i(),d=class extends l.Component{constructor(e){super(e),this.handleClick=()=>{this.setState({visible:!this.state.visible})},this.state={visible:!1}}render(){let{type:e,...t}=this.props;return(0,u.jsx)(a,{...t,type:this.state.visible?`text`:`password`,iconPosition:`right`,icon:{name:this.state.visible?`eye`:`eye-slash`,onClick:this.handleClick}})}},d.__docgenInfo={description:``,methods:[{name:`handleClick`,docblock:null,modifiers:[],params:[],returns:null}],displayName:`Password`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`any`},description:``},name:{required:!1,tsType:{name:`string`},description:`Input name.`},value:{required:!1,tsType:{name:`any`},description:`Input value.`},type:{required:!1,tsType:{name:`union`,raw:`'date' | 'time' | 'text' | 'password' | 'color'`,elements:[{name:`literal`,value:`'date'`},{name:`literal`,value:`'time'`},{name:`literal`,value:`'text'`},{name:`literal`,value:`'password'`},{name:`literal`,value:`'color'`}]},description:"Input type, `text`, `password`, `date`, `time` or `color`. Defaults to `text`."},placeholder:{required:!1,tsType:{name:`string`},description:`Placeholder to show when the Input is empty.`},disabled:{required:!1,tsType:{name:`boolean`},description:`Marks input as disabled. 
@default false`},transparent:{required:!1,tsType:{name:`boolean`},description:`Removes input border. 
@default false`},fluid:{required:!1,tsType:{name:`boolean`},description:`A fluid Input takes up all available horizontal space available to it. 
@default false`},error:{required:!1,tsType:{name:`boolean`},description:`An input can show an error state. 
@default false`},icon:{required:!1,tsType:{name:`union`,raw:`IconType | IIconProps`,elements:[{name:`union`,raw:`'area-chart'\r
| 'arrow'\r
| 'at' \r
| 'bar-chart'\r
| 'bars' \r
| 'bullhorn'\r
| 'caret-down'\r
| 'caret-up'\r
| 'check'\r
| 'chevron'\r
| 'chevron-double'\r
| 'circle'\r
| 'circle-notch'\r
| 'cloud-upload'\r
| 'code'\r
| 'download'\r
| 'edit'\r
| 'envelope'\r
| 'exchange'\r
| 'eye'\r
| 'eye-slash'\r
| 'file-csv'\r
| 'file-download'\r
| 'file-excel'\r
| 'file-geojson'\r
| 'file-ods'\r
| 'filter'\r
| 'heart-beat'\r
| 'id-card'\r
| 'layers'\r
| 'line-chart'\r
| 'link'\r
| 'lock'\r
| 'minus'\r
| 'plus'\r
| 'save'\r
| 'search'\r
| 'table'\r
| 'th'\r
| 'times'\r
| 'tools'\r
| 'trash'\r
| 'unlock'\r
| 'zoom-extents'\r
| 'zoom-minus'\r
| 'zoom-plus'`,elements:[{name:`literal`,value:`'area-chart'`},{name:`literal`,value:`'arrow'`},{name:`literal`,value:`'at'`},{name:`literal`,value:`'bar-chart'`},{name:`literal`,value:`'bars'`},{name:`literal`,value:`'bullhorn'`},{name:`literal`,value:`'caret-down'`},{name:`literal`,value:`'caret-up'`},{name:`literal`,value:`'check'`},{name:`literal`,value:`'chevron'`},{name:`literal`,value:`'chevron-double'`},{name:`literal`,value:`'circle'`},{name:`literal`,value:`'circle-notch'`},{name:`literal`,value:`'cloud-upload'`},{name:`literal`,value:`'code'`},{name:`literal`,value:`'download'`},{name:`literal`,value:`'edit'`},{name:`literal`,value:`'envelope'`},{name:`literal`,value:`'exchange'`},{name:`literal`,value:`'eye'`},{name:`literal`,value:`'eye-slash'`},{name:`literal`,value:`'file-csv'`},{name:`literal`,value:`'file-download'`},{name:`literal`,value:`'file-excel'`},{name:`literal`,value:`'file-geojson'`},{name:`literal`,value:`'file-ods'`},{name:`literal`,value:`'filter'`},{name:`literal`,value:`'heart-beat'`},{name:`literal`,value:`'id-card'`},{name:`literal`,value:`'layers'`},{name:`literal`,value:`'line-chart'`},{name:`literal`,value:`'link'`},{name:`literal`,value:`'lock'`},{name:`literal`,value:`'minus'`},{name:`literal`,value:`'plus'`},{name:`literal`,value:`'save'`},{name:`literal`,value:`'search'`},{name:`literal`,value:`'table'`},{name:`literal`,value:`'th'`},{name:`literal`,value:`'times'`},{name:`literal`,value:`'tools'`},{name:`literal`,value:`'trash'`},{name:`literal`,value:`'unlock'`},{name:`literal`,value:`'zoom-extents'`},{name:`literal`,value:`'zoom-minus'`},{name:`literal`,value:`'zoom-plus'`}]},{name:`IIconProps`}]},description:`Icon props (optional).`},iconPosition:{required:!1,tsType:{name:`union`,raw:`'left' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:`Icon position.`},clearable:{required:!1,tsType:{name:`boolean`},description:`If set, Input's value can be cleared. 
@default false`},format:{required:!1,tsType:{name:`string`},description:"If set, dates and times (in inputs of type `date` or `time`) are shown in this format \n(refer to date-fns/format for format options)."},nofuture:{required:!1,tsType:{name:`boolean`},description:`If set, date pickers do not allow picking future dates (beyond today). 
@default false`},hasSeconds:{required:!1,tsType:{name:`boolean`},description:`If set, time pickers have a "seconds" field. 
@default false`},is24h:{required:!1,tsType:{name:`boolean`},description:`If set, time pickers use a 24h clock. 
@default false`},clock:{required:!1,tsType:{name:`boolean`},description:`If set, time pickers show a clock face. 
@default false`},maxLength:{required:!1,tsType:{name:`number`},description:`Optional input maxlength`},autocomplete:{required:!1,tsType:{name:`string`},description:`Optional autocomplete information (see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)`},direction:{required:!1,tsType:{name:`union`,raw:`'up' | 'down' | 'parent'`,elements:[{name:`literal`,value:`'up'`},{name:`literal`,value:`'down'`},{name:`literal`,value:`'parent'`}]},description:`For Input elements with a dropdown, opening direction can be either fixed
(\`up\` or \`down\`), or depend on the nearest scrolling parent: if the Input
is in the top half of the visible section of the parent, then it opens
downward, and vice-versa. If this property is not set, then the opening
direction is determined from the Input position in the viewport.`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: any) => void`,signature:{arguments:[{type:{name:`any`},name:`value`}],return:{name:`void`}}},description:`Listeners are notified whenever the user interacts with the Input.`},onFocus:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Listeners are notified when the Input receives focus.`}}}})))()}var p=n({Properties:()=>_,__namedExportsOrder:()=>v,default:()=>g}),m,h,g,_,v;function y(){return(y=t((()=>{f(),c(),m=i(),h=e=>(0,m.jsx)(s,{data:{},onChange:()=>{},onValidate:()=>{},children:(0,m.jsx)(s.Field,{name:`password`,value:null,control:(0,m.jsx)(d,{...e})})}),g={title:`Modules/Password`,component:d,argTypes:{className:{table:{disable:!0}}}},_={render:h.bind({}),name:`Properties`,args:{placeholder:`Password`}},v=[`Properties`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Properties',
  args: {
    placeholder: 'Password'
  }
}`,..._.parameters?.docs?.source}}}})))()}export{f as a,d as i,_ as n,y as r,p as t};