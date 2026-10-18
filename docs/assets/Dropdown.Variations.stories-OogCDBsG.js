import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n}from"./iframe-BMOsmv_G.js";import{t as r}from"./Icon-DBLdIlUt.js";import{t as i}from"./Label-DApBXEp8.js";import{n as a,t as o}from"./Dropdown-Cc-T61Q4.js";import{t as s}from"./Form-D4ylMLPW.js";import{t as c}from"./Form-C2IxCm0J.js";var l=t({Align:()=>v,Clearable:()=>b,Fluid:()=>x,Gap:()=>y,Inline:()=>S,MaxItems:()=>C,OnSearch:()=>w,Weight:()=>T,__namedExportsOrder:()=>E,default:()=>_}),u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{a(),r(),c(),i(),u=n(),d=[{id:1,name:`.com`},{id:2,name:`.net`},{id:3,name:`.org`},{id:4,name:`.online`},{id:5,name:`.xyz`},{id:6,name:`.software`},{id:7,name:`.io`},{id:8,name:`.edu`},{id:9,name:`.tech`}],f=[{id:1,name:`John`,relation:`friend`},{id:2,name:`Zachary`,relation:`uncle`},{id:3,name:`Deke`,relation:`friend`}],p=[{id:1,name:`John`,age:26},{id:2,name:`Zachary`,age:18},{id:3,name:`Deke`,age:38}],m=e=>(0,u.jsx)(`div`,{style:{height:`250px`},children:(0,u.jsx)(s,{data:{},onChange:()=>{},onValidate:()=>{},children:(0,u.jsx)(s.Field,{name:`Domain`,value:null,control:(0,u.jsx)(o,{...e,children:(0,u.jsx)(o.Column,{children:e=>e.name})})})})}),h=e=>(0,u.jsx)(`div`,{style:{height:`250px`},children:(0,u.jsx)(s,{data:{},onChange:()=>{},onValidate:()=>{},children:(0,u.jsx)(s.Field,{name:`Domain`,value:null,control:(0,u.jsxs)(o,{...e,children:[(0,u.jsx)(o.Column,{children:e=>e.name}),(0,u.jsx)(o.Column,{align:`right`,children:e=>e.age})]})})})}),g=e=>(0,u.jsx)(`div`,{style:{height:`250px`},children:(0,u.jsx)(s,{data:{},onChange:()=>{},onValidate:()=>{},children:(0,u.jsx)(s.Field,{name:`person`,value:null,control:(0,u.jsxs)(o,{...e,children:[(0,u.jsx)(o.Column,{weight:4,children:e=>e.name}),(0,u.jsx)(o.Column,{weight:1,children:e=>e.relation})]})})})}),_={title:`Controls/Dropdown/Variations`,component:o},v={render:h.bind({}),name:`align`,args:{direction:`down`,maxItems:4,data:p,placeholder:`Select person`,label:e=>e.name,onSearch:null}},y={render:h.bind({}),name:`gap`,args:{direction:`down`,maxItems:4,data:p,gap:0,placeholder:`Select person`,label:e=>e.name,onSearch:null}},b={render:m.bind({}),name:`clearable`,args:{clearable:!0,direction:`down`,maxItems:4,data:f,placeholder:`Select person`,label:e=>e.name,onSearch:null}},x={render:m.bind({}),name:`fluid`,args:{fluid:!0,direction:`down`,maxItems:4,data:f,placeholder:`Select person`,label:e=>e.name,onSearch:null}},S={render:m.bind({}),name:`inline`,args:{inline:!0,direction:`down`,maxItems:4,data:f,placeholder:`Select person`,label:e=>e.name,onSearch:null}},C={render:m.bind({}),name:`maxItems`,args:{direction:`down`,maxItems:8,data:d,placeholder:`Select domain`,label:e=>e.name,onSearch:null}},w={render:m.bind({}),name:`onSearch`,args:{direction:`down`,maxItems:4,data:f,placeholder:`Select person`,label:e=>e.name,onSearch:()=>{}}},T={render:g.bind({}),name:`weight`,args:{fluid:!0,direction:`down`,maxItems:4,data:f,placeholder:`Select person`,label:e=>e.name,onSearch:null}},E=[`Align`,`Gap`,`Clearable`,`Fluid`,`Inline`,`MaxItems`,`OnSearch`,`Weight`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: AlignTemplate.bind({}),
  name: 'align',
  args: {
    direction: 'down',
    maxItems: 4,
    data: ages,
    placeholder: 'Select person',
    label: item => item.name,
    onSearch: null
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: AlignTemplate.bind({}),
  name: 'gap',
  args: {
    direction: 'down',
    maxItems: 4,
    data: ages,
    gap: 0,
    placeholder: 'Select person',
    label: item => item.name,
    onSearch: null
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'clearable',
  args: {
    clearable: true,
    direction: 'down',
    maxItems: 4,
    data: people,
    placeholder: 'Select person',
    label: item => item.name,
    onSearch: null
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'fluid',
  args: {
    fluid: true,
    direction: 'down',
    maxItems: 4,
    data: people,
    placeholder: 'Select person',
    label: item => item.name,
    onSearch: null
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'inline',
  args: {
    inline: true,
    direction: 'down',
    maxItems: 4,
    data: people,
    placeholder: 'Select person',
    label: item => item.name,
    onSearch: null
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'maxItems',
  args: {
    direction: 'down',
    maxItems: 8,
    data: data,
    placeholder: 'Select domain',
    label: item => item.name,
    onSearch: null
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'onSearch',
  args: {
    direction: 'down',
    maxItems: 4,
    data: people,
    placeholder: 'Select person',
    label: item => item.name,
    onSearch: () => {}
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: WeightTemplate.bind({}),
  name: 'weight',
  args: {
    fluid: true,
    direction: 'down',
    maxItems: 4,
    data: people,
    placeholder: 'Select person',
    label: item => item.name,
    onSearch: null
  }
}`,...T.parameters?.docs?.source}}}})))()}export{y as a,w as c,x as i,T as l,b as n,S as o,l as r,C as s,v as t,D as u};