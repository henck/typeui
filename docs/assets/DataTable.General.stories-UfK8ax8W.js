import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n}from"./iframe-BMOsmv_G.js";import{n as r,t as i}from"./DataTable-D-jNyVvS.js";var a=t({OnClick:()=>d,Order:()=>u,__namedExportsOrder:()=>f,default:()=>l}),o,s,c,l,u,d,f;function p(){return(p=e((()=>{r(),o=n(),s=[{name:`John`,age:24,sport:`Soccer`},{name:`Mary`,age:18,sport:`Polo`},{name:`Bert`,age:21,sport:`Basketball`},{name:`Joseph`,age:24,sport:`Kendo`},{name:`Rose`,age:17,sport:`Soccer`},{name:`Alexander`,age:15,sport:`Athletics`},{name:`Rudolph`,age:29,sport:`Krav maga`},{name:`Jessica`,age:19,sport:`None`},{name:`Ellen`,age:16,sport:`Athletics`},{name:`Ralph`,age:22,sport:`Volleyball`}],c=e=>(0,o.jsx)(`div`,{style:{display:`flex`,position:`relative`,height:`400px`},children:(0,o.jsxs)(i,{data:s,...e,children:[(0,o.jsx)(i.Column,{weight:2,label:`Name`,order:`name`,dir:`asc`,children:e=>e.name}),(0,o.jsx)(i.Column,{weight:1,label:`Age`,order:`age`,dir:`asc`,children:e=>e.age}),(0,o.jsx)(i.Column,{weight:1,label:`Sport`,order:`sport`,dir:`asc`,children:e=>e.sport})]})}),l={title:`Controls/DataTable/General`,component:i,subcomponents:{"DataTable.Column":i.Column},argTypes:{className:{table:{disable:!0}}}},u={render:c.bind({}),name:`order`,args:{order:`name`,dir:`asc`,onClick:null}},d={render:c.bind({}),name:`onClick`,args:{onClick:()=>{},onOrder:null}},f=[`Order`,`OnClick`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'order',
  args: {
    order: 'name',
    dir: 'asc',
    onClick: null
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'onClick',
  args: {
    onClick: () => {},
    onOrder: null
  }
}`,...d.parameters?.docs?.source}}}})))()}export{p as i,d as n,u as r,a as t};