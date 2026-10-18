import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n}from"./iframe-BMOsmv_G.js";import{t as r}from"./Label-DxPnvqIR.js";import{t as i}from"./Label-DApBXEp8.js";import{n as a,t as o}from"./Dropdown-Cc-T61Q4.js";import{t as s}from"./Form-D4ylMLPW.js";import{t as c}from"./Form-C2IxCm0J.js";var l=t({Columns:()=>g,Disabled:()=>v,Error:()=>y,Multiple:()=>_,__namedExportsOrder:()=>b,default:()=>h}),u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{a(),c(),i(),u=n(),d=[{id:1,name:`John`,relation:`friend`},{id:2,name:`Zachary`,relation:`uncle`},{id:3,name:`Deke`,relation:`friend`}],f=e=>(0,u.jsx)(`div`,{style:{height:`250px`},children:(0,u.jsx)(s,{data:{},onChange:()=>{},onValidate:()=>{},children:(0,u.jsx)(s.Field,{name:`Domain`,value:null,control:(0,u.jsx)(o,{...e,children:(0,u.jsx)(o.Column,{children:e=>e.name})})})})}),p=e=>(0,u.jsx)(`div`,{style:{height:`250px`},children:(0,u.jsx)(o,{...e,children:(0,u.jsx)(o.Column,{children:e=>e.name})})}),m=e=>(0,u.jsx)(`div`,{style:{height:`250px`},children:(0,u.jsx)(s,{data:{},onChange:()=>{},onValidate:()=>{},children:(0,u.jsx)(s.Field,{name:`person`,value:null,control:(0,u.jsxs)(o,{...e,children:[(0,u.jsx)(o.Column,{children:e=>e.name}),(0,u.jsx)(o.Column,{children:e=>(0,u.jsx)(r,{children:e.relation})})]})})})}),h={title:`Controls/Dropdown/General`,component:o,subcomponents:{"Dropdown.Column":o.Column},argTypes:{className:{table:{disable:!0}}}},g={render:m.bind({}),name:`Columns`,args:{data:d,direction:`down`,maxItems:4,placeholder:`Select person`,label:e=>e.name,onSearch:null}},_={render:f.bind({}),name:`multiple`,args:{multiple:!0,direction:`down`,maxItems:4,data:d,placeholder:`Select person`,label:e=>e.name,onSearch:null}},v={render:p.bind({}),name:`disabled`,args:{value:null,disabled:!0,direction:`down`,maxItems:4,data:d,placeholder:`Select person`,label:e=>e.name,onSearch:null}},y={render:p.bind({}),name:`error`,args:{value:null,error:!0,direction:`down`,maxItems:4,data:d,placeholder:`Select person`,label:e=>e.name,onSearch:null}},b=[`Columns`,`Multiple`,`Disabled`,`Error`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: ColumnsTemplate.bind({}),
  name: 'Columns',
  args: {
    data: people,
    direction: 'down',
    maxItems: 4,
    placeholder: 'Select person',
    label: item => item.name,
    onSearch: null
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'multiple',
  args: {
    multiple: true,
    direction: 'down',
    maxItems: 4,
    data: people,
    placeholder: 'Select person',
    label: item => item.name,
    onSearch: null
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: NoFormTemplate.bind({}),
  name: 'disabled',
  args: {
    value: null,
    disabled: true,
    direction: 'down',
    maxItems: 4,
    data: people,
    placeholder: 'Select person',
    label: item => item.name,
    onSearch: null
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: NoFormTemplate.bind({}),
  name: 'error',
  args: {
    value: null,
    error: true,
    direction: 'down',
    maxItems: 4,
    data: people,
    placeholder: 'Select person',
    label: item => item.name,
    onSearch: null
  }
}`,...y.parameters?.docs?.source}}}})))()}export{_ as a,y as i,v as n,x as o,l as r,g as t};