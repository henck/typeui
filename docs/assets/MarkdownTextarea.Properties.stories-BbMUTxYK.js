import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-DlPsW1c0.js";import{n as i,r as a}from"./Theme-DNNvCs1s.js";import{n as o}from"./iframe-BMOsmv_G.js";import{t as s}from"./Segment-CJRWtwR9.js";import{t as c}from"./Segment-BBCHNE-P.js";import{n as l,t as u}from"./Tabs-I2q8lTMM.js";import{t as d}from"./Form-D4ylMLPW.js";import{t as f}from"./Form-C2IxCm0J.js";import{t as p}from"./Textarea-xc0slRYi.js";import{n as m,t as h}from"./Markdown-BYvZ8QRQ.js";import{t as g}from"./Textarea-DEFlFHwg.js";function _(){return(_=t((()=>{l()})))()}function v(){return(v=t((()=>{m()})))()}var y,b,x,S,C,w;function T(){return(T=t((()=>{y=e(r()),i(),g(),c(),_(),v(),b=o(),x=class extends y.Component{constructor(e){super(e),this.handleTabChange=e=>{this.setState({tabIndex:e})},this.state={tabIndex:0}}render(){let{className:e,label_text:t,label_preview:n,label_markdown:r,...i}=this.props;return(0,b.jsxs)(`div`,{className:e,children:[(0,b.jsxs)(s,{tight:!0,attached:`top`,children:[(0,b.jsxs)(u,{underlined:!0,onTabChange:this.handleTabChange,children:[(0,b.jsx)(u.Pane,{label:t||`Text`}),(0,b.jsx)(u.Pane,{label:n||`Preview`})]}),(0,b.jsxs)(`div`,{style:{position:`relative`},children:[(0,b.jsx)(`div`,{style:{overflow:`hidden`,width:this.state.tabIndex==0?`100%`:`1px`},children:(0,b.jsx)(p,{monospaced:!0,fluid:!0,transparent:!0,...i})}),this.state.tabIndex==1&&(0,b.jsx)(C,{rows:this.props.rows,children:(0,b.jsx)(h,{source:i.value})})]})]}),(0,b.jsx)(s,{tight:!0,secondary:!0,attached:`bottom`,children:(0,b.jsxs)(w,{children:[(0,b.jsx)(`a`,{target:`_blank`,href:`https://www.markdownguide.org/`,children:`Markdown`}),` `,r||`is supported`]})})]})}},S=class extends y.Component{render(){let e=this.props;return(0,b.jsx)(`div`,{className:e.className,children:e.children})}},C=a(S)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: none;
`,w=a.div`
  font-size: 9px;
  a { 
    color: steelblue; 
    text-decoration: none;
  }
`,x.__docgenInfo={description:``,methods:[],displayName:`MarkdownTextarea`,props:{classname:{required:!1,tsType:{name:`string`},description:``},label_text:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Optional translation for "Text" label`},label_preview:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Optional translation for "Preview" label`},label_markdown:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Optional translation for "is supported" label`},className:{required:!1,tsType:{name:`string`},description:`@ignore`},name:{required:!1,tsType:{name:`string`},description:`Textarea name.`},value:{required:!1,tsType:{name:`any`},description:`Textarea value.`},placeholder:{required:!1,tsType:{name:`string`},description:`Placeholder to show when the Textarea is empty.`},disabled:{required:!1,tsType:{name:`boolean`},description:`Mark Textarea as disabled. \r
@default false`},transparent:{required:!1,tsType:{name:`boolean`},description:`Removes Textarea border. \r
@default false`},fluid:{required:!1,tsType:{name:`boolean`},description:`Textarea takes up all available horizontal space. \r
@default false`},rows:{required:!1,tsType:{name:`number`},description:`Height in rows.`},minHeight:{required:!1,tsType:{name:`number`},description:`Minimum height in pixels.`},error:{required:!1,tsType:{name:`boolean`},description:`Is the Textarea in an error state? \r
@default false`},monospaced:{required:!1,tsType:{name:`boolean`},description:`If set, Textarea will use a monospaced font. \r
@default false`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: any) => void`,signature:{arguments:[{type:{name:`any`},name:`value`}],return:{name:`void`}}},description:`Listeners are notified whenever the user interacts with the Textarea.`}}}})))()}var E=n({Properties:()=>A,Translations:()=>j,__namedExportsOrder:()=>M,default:()=>k}),D,O,k,A,j,M;function N(){return(N=t((()=>{T(),f(),D=o(),O=e=>(0,D.jsx)(d,{data:{},onChange:()=>{},onValidate:()=>{},children:(0,D.jsx)(d.Field,{name:`description`,value:null,control:(0,D.jsx)(x,{...e})})}),k={title:`Modules/MarkdownTextarea`,component:x,argTypes:{className:{table:{disable:!0}}}},A={render:O.bind({}),name:`Properties`,args:{rows:15,placeholder:`Description`}},j={render:O.bind({}),name:`Translations`,args:{rows:15,placeholder:`Descrição`,label_markdown:`é suportado`,label_preview:`Pre-visualização`,label_text:`Texto`}},M=[`Properties`,`Translations`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Properties',
  args: {
    rows: 15,
    placeholder: 'Description'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Translations',
  args: {
    rows: 15,
    placeholder: 'Descrição',
    label_markdown: 'é suportado',
    label_preview: 'Pre-visualização',
    label_text: 'Texto'
  }
}`,...j.parameters?.docs?.source}}}})))()}export{x as a,N as i,A as n,T as o,j as r,E as t};