import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n}from"./iframe-BMOsmv_G.js";import{n as r,t as i}from"./DataTable-D-jNyVvS.js";var a=t({Error:()=>d,ErrorMessage:()=>f,Force:()=>p,Grid:()=>m,Loading:()=>h,Nodata:()=>g,ScrollPosition:()=>_,__namedExportsOrder:()=>v,default:()=>u}),o,s,c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{r(),o=n(),s=[{name:`John`,age:24,sport:`Soccer`},{name:`Mary`,age:18,sport:`Polo`},{name:`Bert`,age:21,sport:`Basketball`},{name:`Joseph`,age:24,sport:`Kendo`},{name:`Rose`,age:17,sport:`Soccer`},{name:`Alexander`,age:15,sport:`Athletics`},{name:`Rudolph`,age:29,sport:`Krav maga`},{name:`Jessica`,age:19,sport:`None`},{name:`Ellen`,age:16,sport:`Athletics`},{name:`Ralph`,age:22,sport:`Volleyball`}],c=e=>(0,o.jsx)(`div`,{style:{display:`flex`,position:`relative`,height:`400px`},children:(0,o.jsxs)(i,{...e,children:[(0,o.jsx)(i.Column,{weight:2,label:`Name`,order:`name`,dir:`asc`,children:e=>e.name}),(0,o.jsx)(i.Column,{weight:1,label:`Age`,order:`age`,dir:`asc`,children:e=>e.age}),(0,o.jsx)(i.Column,{weight:1,label:`Sport`,order:`sport`,dir:`asc`,children:e=>e.sport})]})}),l=e=>(0,o.jsx)(`div`,{style:{display:`flex`,position:`relative`,height:`400px`},children:(0,o.jsxs)(i,{...e,data:[{code:`AF`,name:`Afghanistan`,desc:`A country somewhere in the world.`},{code:`AL`,name:`Albania`,desc:`A country somewhere in the world.`},{code:`DZ`,name:`Algeria`,desc:`A country somewhere in the world.`},{code:`AS`,name:`American Samoa`,desc:`A country somewhere in the world.`}],children:[(0,o.jsx)(i.Column,{weight:1,label:`Code`,force:!0,children:e=>e.code}),(0,o.jsx)(i.Column,{weight:1,label:`Name`,force:!0,children:e=>e.name}),(0,o.jsx)(i.Column,{weight:1,label:`Desc`,children:e=>e.desc})]})}),u={title:`Controls/DataTable/Variations`,component:i,subcomponents:{"DataTable.Column":i.Column},argTypes:{className:{table:{disable:!0}}}},d={render:c.bind({}),name:`error`,args:{data:s,error:!0,onOrder:null,onClick:null,onFetch:null}},f={render:c.bind({}),name:`errorMessage`,args:{data:s,error:!0,errorMessage:`Too bad: an error occurred!`,onOrder:null,onClick:null}},p={render:l.bind({}),name:`force`,args:{force:!0,onOrder:null,onClick:null}},m={render:c.bind({}),name:`grid`,args:{data:s,grid:!0,onOrder:null,onClick:null}},h={render:c.bind({}),name:`loading`,args:{data:s,loading:!0,onOrder:null,onClick:null}},g={render:c.bind({}),name:`nodata`,args:{data:[],nodata:`There was no data to load!`,onOrder:null,onClick:null}},_={render:c.bind({}),name:`scrollPosition`,args:{data:s,scrollTop:60,onScroll:e=>{},onOrder:null,onClick:null}},v=[`Error`,`ErrorMessage`,`Force`,`Grid`,`Loading`,`Nodata`,`ScrollPosition`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'error',
  args: {
    data: data,
    error: true,
    onOrder: null,
    onClick: null,
    onFetch: null
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'errorMessage',
  args: {
    data: data,
    error: true,
    errorMessage: 'Too bad: an error occurred!',
    onOrder: null,
    onClick: null
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: ForceTemplate.bind({}),
  name: 'force',
  args: {
    force: true,
    onOrder: null,
    onClick: null
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'grid',
  args: {
    data: data,
    grid: true,
    onOrder: null,
    onClick: null
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'loading',
  args: {
    data: data,
    loading: true,
    onOrder: null,
    onClick: null
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'nodata',
  args: {
    data: [],
    nodata: 'There was no data to load!',
    onOrder: null,
    onClick: null
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'scrollPosition',
  args: {
    data: data,
    scrollTop: 60,
    onScroll: scrollTop => {},
    onOrder: null,
    onClick: null
  }
}`,..._.parameters?.docs?.source}}}})))()}export{m as a,_ as c,p as i,y as l,d as n,h as o,f as r,g as s,a as t};