import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-DlPsW1c0.js";import{n as i,r as a}from"./Theme-DNNvCs1s.js";import{n as o}from"./iframe-BMOsmv_G.js";import{n as s,t as c}from"./lighten-BkId_tvD.js";import{n as l,t as u}from"./Label-DxPnvqIR.js";import{t as d}from"./Label-DApBXEp8.js";import{t as f}from"./Input-B9plWmXf.js";import{t as p}from"./Input-DQRcmSVK.js";import{t as m}from"./Form-D4ylMLPW.js";import{t as h}from"./Form-C2IxCm0J.js";import{n as g,t as _}from"./DMS-FgGQB6Vg.js";var v,y,b,x,S,C,w,T,E;function D(){return(D=t((()=>{v=e(r()),i(),p(),d(),c(),g(),y=o(),b=class extends v.Component{constructor(e){super(e),this.updateDMS=!1,this.getSign=()=>Math.sign(this.props.value)==-1?-1:1,this.getDegrees=()=>{let[e,t,n]=_.toDMS(this.props.value);return e},this.getMinutes=()=>{let[e,t,n]=_.toDMS(this.props.value);return t},this.getSeconds=()=>{let[e,t,n]=_.toDMS(this.props.value);return n},this.toFloat=(e,t,n,r)=>(isNaN(e)&&(e=0),isNaN(t)&&(t=0),isNaN(n)&&(n=0),_.toFloat(e,t,n)*r),this.forceRange=(e,t)=>{let n=parseInt(e);return isNaN(n)&&(n=0),n>t&&(n=t),n},this.handleChangeDegrees=e=>{this.updateDMS=!0,this.props.onChange(this.toFloat(this.forceRange(e,180),this.getMinutes(),this.getSeconds(),this.getSign()))},this.handleChangeMinutes=e=>{this.updateDMS=!0,this.props.onChange(this.toFloat(this.getDegrees(),this.forceRange(e,59),this.getSeconds(),this.getSign()))},this.handleChangeSeconds=e=>{this.updateDMS=!0,this.props.onChange(this.toFloat(this.getDegrees(),this.getMinutes(),this.forceRange(e,59),this.getSign()))},this.handleChangeSign=()=>{this.updateDMS=!0,this.props.onChange(this.toFloat(this.getDegrees(),this.getMinutes(),this.getSeconds(),this.getSign()==1?-1:1))},this.handleChangeValue=e=>{this.props.onChange(e)},this.getValue=()=>this.updateDMS?(this.updateDMS=!1,this.props.value.toFixed(6)):this.props.value}render(){let e=this.props;return(0,y.jsxs)(`div`,{className:e.className,children:[(0,y.jsx)(x,{children:(0,y.jsx)(f,{type:`text`,maxLength:4,fluid:!0,value:this.getDegrees(),transparent:!0,error:e.error||this.getDegrees()<-90&&e.isLatitude||this.getDegrees()<-180||this.getDegrees()>90&&e.isLatitude||this.getDegrees()>180,disabled:e.disabled,onChange:this.handleChangeDegrees})}),(0,y.jsx)(S,{children:(0,y.jsx)(f,{type:`text`,maxLength:2,fluid:!0,value:this.getMinutes(),transparent:!0,error:e.error||this.getMinutes()<0||this.getMinutes()>59,disabled:e.disabled,onChange:this.handleChangeMinutes})}),(0,y.jsx)(C,{children:(0,y.jsx)(f,{type:`text`,maxLength:2,fluid:!0,value:this.getSeconds(),transparent:!0,error:e.error||this.getSeconds()<0||this.getSeconds()>59,disabled:e.disabled,onChange:this.handleChangeSeconds,children:(0,y.jsx)(u,{attached:`right`,onClick:this.handleChangeSign,children:(0,y.jsx)(`div`,{style:{width:`10px`,userSelect:`none`},children:this.getSign()==1?e.isLatitude?`N`:`E`:e.isLatitude?`S`:`W`})})})}),(0,y.jsx)(w,{children:(0,y.jsx)(f,{type:`text`,fluid:!0,value:this.getValue(),transparent:!0,error:e.error,disabled:e.disabled,onChange:this.handleChangeValue})})]})}},x=a.div`
  display: inline-block;
  position: relative;
  width: 63px;
  &::before {
    position: absolute;
    top: 7px;
    right: 6px;
    z-index: 99;
    content: '\\ba';   // &ordm;
  }
`,S=a.div`
  display: inline-block;
  position: relative;
  width: 46px;
  &::before {
    position: absolute;
    top: 7px;
    right: 8px;
    z-index: 99;
    content: '\\2032'; // &prime;
  }
`,C=a.div`
  display: inline-block;
  position: relative;
  width: 80px;
  &::before {
    position: absolute;
    top: 7px;
    right: 40px;
    z-index: 99;
    content: '\\2033';   // &ordm;
  }
`,w=a.div`
  display: inline-block;
  width: 135px;
`,T=a(b)`
  display: inline-block;
  white-space: nowrap;
  border: solid 1px ${e=>e.theme.normalColor};
  border-radius: ${e=>e.theme.radius}px;
  transition: border-color ${e=>e.theme.transition.duration}s ease;
  &:focus-within { 
    border-color: ${e=>s(.25,e.theme.primaryColor)};  
  }
  input {
    text-align: right;
  }
  /* Make sure Label doesn't have any border radius: */
  ${l} {
    border-radius: 0;
  }
`,E=class extends v.Component{constructor(...e){super(...e),this.render=()=>(0,y.jsx)(T,{...this.props})}},E.__docgenInfo={description:``,methods:[{name:`render`,docblock:null,modifiers:[],params:[],returns:null}],displayName:`DmsInput`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},isLatitude:{required:!0,tsType:{name:`boolean`},description:`Latitude or longitude?`},name:{required:!1,tsType:{name:`string`},description:`Input name.`},value:{required:!1,tsType:{name:`any`},description:`Input value.`},disabled:{required:!1,tsType:{name:`boolean`},description:`Marks input as disabled. \r
@default false`},error:{required:!1,tsType:{name:`boolean`},description:`An input can show an error state. \r
@default false`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: any) => void`,signature:{arguments:[{type:{name:`any`},name:`value`}],return:{name:`void`}}},description:``}}}})))()}var O=n({Properties:()=>M,__namedExportsOrder:()=>N,default:()=>j}),k,A,j,M,N;function P(){return(P=t((()=>{D(),h(),k=o(),A=e=>(0,k.jsx)(m,{data:{},onChange:()=>{},onValidate:()=>{},children:(0,k.jsx)(m.Field,{name:`latitude`,value:null,control:(0,k.jsx)(E,{...e})})}),j={title:`Modules/DmsInput`,component:E,argTypes:{className:{table:{disable:!0}}}},M={render:A.bind({}),name:`Properties`,args:{isLatitude:!0}},N=[`Properties`],M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Properties',
  args: {
    isLatitude: true
  }
}`,...M.parameters?.docs?.source}}}})))()}export{D as a,E as i,M as n,P as r,O as t};