import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n}from"./iframe-BMOsmv_G.js";import{n as r,t as i}from"./Dialog-Dl2eD9SP.js";import{t as a}from"./Button-gydMztyi.js";var o=t({DialogAlert:()=>f,DialogConfirm:()=>p,DialogXhr:()=>m,__namedExportsOrder:()=>h,default:()=>d}),s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{r(),a(),s=n(),c=e=>(0,s.jsx)(`div`,{style:{height:`300px`},children:(0,s.jsx)(i.Alert,{...e})}),l=e=>(0,s.jsx)(`div`,{style:{height:`300px`},children:(0,s.jsx)(i.Confirm,{...e})}),u=e=>(0,s.jsx)(`div`,{style:{height:`300px`},children:(0,s.jsx)(i.Xhr,{...e})}),d={title:`Controls/Dialog/General`,component:i},f={render:c.bind({}),name:`Dialog.Alert`,args:{open:!0,title:`Lunch`,children:`It's lunchtime!`}},p={render:l.bind({}),name:`Dialog.Confirm`,args:{open:!0,title:`Ice cream`,children:`Would you like ice cream?`}},m={render:u.bind({}),name:`Dialog.Xhr`,args:{open:!0,onRetry:()=>{},error:{response:{status:404}}}},h=[`DialogAlert`,`DialogConfirm`,`DialogXhr`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: AlertTemplate.bind({}),
  name: 'Dialog.Alert',
  args: {
    open: true,
    title: 'Lunch',
    children: "It's lunchtime!"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: ConfirmTemplate.bind({}),
  name: 'Dialog.Confirm',
  args: {
    open: true,
    title: 'Ice cream',
    children: 'Would you like ice cream?'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: XhrTemplate.bind({}),
  name: 'Dialog.Xhr',
  args: {
    open: true,
    onRetry: () => {},
    error: {
      response: {
        status: 404
      }
    }
  }
}`,...m.parameters?.docs?.source}}}})))()}export{g as a,o as i,p as n,m as r,f as t};