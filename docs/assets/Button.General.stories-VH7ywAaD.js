import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n}from"./iframe-BMOsmv_G.js";import{t as r}from"./Icon-CbGLNh3A.js";import{t as i}from"./Icon-DBLdIlUt.js";import{t as a}from"./Segment-BBCHNE-P.js";import{n as o,t as s}from"./Button-eI6v9XeX.js";import{t as c}from"./Label-DxPnvqIR.js";import{t as l}from"./Divider-qVAaeOIw.js";import{t as u}from"./Divider-CDEnhhvW.js";import{t as d}from"./Label-DApBXEp8.js";var f=t({Basic:()=>v,Disabled:()=>x,IconStory:()=>y,Labelled:()=>b,__namedExportsOrder:()=>S,default:()=>_}),p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{o(),i(),a(),u(),d(),p=n(),m=e=>(0,p.jsx)(s,{...e,children:`Button`}),h=e=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`div`,{style:{background:`white`,padding:`20px`},children:(0,p.jsx)(s,{...e,children:`Button`})}),(0,p.jsx)(`div`,{style:{background:`black`,padding:`20px`},children:(0,p.jsx)(s,{positive:!0,...e,children:`Button`})})]}),g=e=>(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`div`,{children:(0,p.jsxs)(s,{...e,children:[(0,p.jsx)(r,{name:`circle`,size:`large`}),` Button`]})}),(0,p.jsx)(l,{hidden:!0}),(0,p.jsxs)(`div`,{children:[(0,p.jsxs)(s,{children:[(0,p.jsx)(r,{name:`circle`,size:`large`}),` Button`]}),(0,p.jsx)(s,{children:(0,p.jsx)(r,{name:`circle`,size:`large`})}),(0,p.jsx)(s,{icon:!0,children:(0,p.jsx)(r,{name:`circle`,size:`large`})})]}),(0,p.jsx)(l,{hidden:!0}),(0,p.jsxs)(`div`,{children:[(0,p.jsxs)(s,{basic:!0,children:[(0,p.jsx)(r,{name:`circle`,size:`large`}),` Button`]}),(0,p.jsx)(s,{basic:!0,children:(0,p.jsx)(r,{name:`circle`,size:`large`})}),(0,p.jsx)(s,{basic:!0,icon:!0,children:(0,p.jsx)(r,{name:`circle`,size:`large`})})]}),(0,p.jsx)(l,{hidden:!0}),(0,p.jsxs)(`div`,{children:[(0,p.jsxs)(s,{color:`crimson`,children:[(0,p.jsx)(r,{name:`circle`,size:`large`}),` Button`]}),(0,p.jsx)(s,{basic:!0,color:`skyblue`,children:(0,p.jsx)(r,{name:`circle`,size:`large`})}),(0,p.jsx)(s,{color:`DarkGoldenrod`,icon:!0,children:(0,p.jsx)(r,{name:`circle`,size:`large`})})]})]}),_={title:`Controls/Button/General`,component:s,argTypes:{className:{table:{disable:!0}},grouped:{table:{disable:!0}}}},v={render:h.bind({}),name:`Basic`,args:{basic:!0}},y={render:g.bind({}),name:`Icon`,args:{icon:!0}},b={render:e=>(0,p.jsxs)(`div`,{children:[(0,p.jsxs)(s,{children:[(0,p.jsx)(c,{children:`One`}),`Button`]}),(0,p.jsx)(l,{hidden:!0}),(0,p.jsxs)(s,{children:[(0,p.jsx)(c,{attached:`left`,children:(0,p.jsx)(r,{name:`circle`,size:`large`})}),`Like`]}),(0,p.jsx)(l,{hidden:!0}),(0,p.jsxs)(s,{children:[(0,p.jsx)(r,{name:`circle`}),(0,p.jsx)(c,{basic:!0,attached:`right`,children:`2,048`}),`Like`]}),(0,p.jsx)(l,{hidden:!0}),(0,p.jsxs)(s,{children:[(0,p.jsx)(r,{name:`circle`}),(0,p.jsx)(c,{basic:!0,attached:`right`,children:`One`}),(0,p.jsx)(c,{basic:!0,attached:`right`,children:`Two`}),`Button`]}),(0,p.jsx)(l,{hidden:!0}),(0,p.jsxs)(s,{children:[(0,p.jsx)(r,{name:`circle`}),(0,p.jsx)(c,{basic:!0,pointing:!0,attached:`right`,children:`2,048`}),`Like`]}),(0,p.jsx)(l,{hidden:!0}),(0,p.jsxs)(s,{color:`RoyalBlue`,children:[(0,p.jsx)(r,{name:`circle`}),(0,p.jsx)(c,{basic:!0,pointing:!0,attached:`right`,color:`RoyalBlue`,children:`42`}),`Like`]}),(0,p.jsx)(l,{hidden:!0}),(0,p.jsxs)(s,{basic:!0,color:`crimson`,children:[(0,p.jsx)(r,{name:`circle`}),(0,p.jsx)(c,{basic:!0,pointing:!0,attached:`right`,color:`crimson`,children:`2,048`}),`Forks`]})]}),name:`Labelled`},x={render:m.bind({}),name:`Disabled`,args:{disabled:!0}},S=[`Basic`,`IconStory`,`Labelled`,`Disabled`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: BasicTemplate.bind({}),
  name: 'Basic',
  args: {
    basic: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: IconTemplate.bind({}),
  name: 'Icon',
  args: {
    icon: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <div>\r
      <Button>\r
        <Label>One</Label>Button\r
      </Button>\r
      <Divider hidden />\r
      <Button>\r
        <Label attached="left">\r
          <Icon name="circle" size="large" />\r
        </Label>\r
        Like\r
      </Button>\r
      <Divider hidden />\r
      <Button>\r
        <Icon name="circle" />\r
        <Label basic attached="right">\r
          2,048\r
        </Label>\r
        Like\r
      </Button>\r
      <Divider hidden />\r
      <Button>\r
        <Icon name="circle" />\r
        <Label basic attached="right">\r
          One\r
        </Label>\r
        <Label basic attached="right">\r
          Two\r
        </Label>\r
        Button\r
      </Button>\r
      <Divider hidden />\r
      <Button>\r
        <Icon name="circle" />\r
        <Label basic pointing attached="right">\r
          2,048\r
        </Label>\r
        Like\r
      </Button>\r
      <Divider hidden />\r
      <Button color="RoyalBlue">\r
        <Icon name="circle" />\r
        <Label basic pointing attached="right" color="RoyalBlue">\r
          42\r
        </Label>\r
        Like\r
      </Button>\r
      <Divider hidden />\r
      <Button basic color="crimson">\r
        <Icon name="circle" />\r
        <Label basic pointing attached="right" color="crimson">\r
          2,048\r
        </Label>\r
        Forks\r
      </Button>\r
    </div>,
  name: 'Labelled'
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Disabled',
  args: {
    disabled: true
  }
}`,...x.parameters?.docs?.source}}}})))()}export{b as a,y as i,f as n,C as o,x as r,v as t};