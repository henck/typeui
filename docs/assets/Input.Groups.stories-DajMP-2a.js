import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n}from"./iframe-BMOsmv_G.js";import{t as r}from"./Icon-CbGLNh3A.js";import{t as i}from"./Icon-DBLdIlUt.js";import{t as a}from"./Label-DxPnvqIR.js";import{t as o}from"./Divider-qVAaeOIw.js";import{t as s}from"./Divider-CDEnhhvW.js";import{t as c}from"./Label-DApBXEp8.js";import{n as l,t as u}from"./Input-B9plWmXf.js";import{t as d}from"./Dropdown-Cc-T61Q4.js";import{t as f}from"./Form-C2IxCm0J.js";import{t as p}from"./Dropdown-D5qQp9uQ.js";var m=t({Attached:()=>_,__namedExportsOrder:()=>v,default:()=>g}),h,g,_,v;function y(){return(y=e((()=>{l(),f(),c(),p(),s(),i(),h=n(),g={title:`Controls/Input/Groups`,component:u,argTypes:{className:{table:{disable:!0}}}},_={render:e=>(0,h.jsxs)(`div`,{children:[(0,h.jsxs)(u,{name:`value`,type:`text`,placeholder:`Enter value...`,children:[(0,h.jsx)(a,{basic:!0,children:`Before`}),(0,h.jsx)(a,{basic:!0,attached:`right`,children:`First after`}),(0,h.jsx)(a,{basic:!0,attached:`right`,children:`Second after`})]}),(0,h.jsx)(o,{hidden:!0}),(0,h.jsx)(u,{name:`weight`,type:`text`,placeholder:`Enter weight...`,children:(0,h.jsx)(a,{basic:!0,attached:`right`,children:`kg`})}),(0,h.jsx)(o,{hidden:!0}),(0,h.jsx)(u,{name:`email`,type:`text`,placeholder:`Email...`,children:(0,h.jsx)(a,{color:`rebeccapurple`,onClick:()=>{alert(`Clicked`)},children:(0,h.jsx)(r,{color:`white`,name:`at`})})}),(0,h.jsx)(o,{hidden:!0}),(0,h.jsx)(u,{name:`tags`,type:`text`,placeholder:`Enter tags`,children:(0,h.jsx)(a,{tag:!0,attached:`right`,children:`Add tag`})}),(0,h.jsx)(o,{hidden:!0}),(0,h.jsx)(u,{name:`distance`,type:`text`,placeholder:`Enter distance`,children:(0,h.jsx)(a,{basic:!0,pointing:!0,attached:`right`,children:`km`})}),(0,h.jsx)(o,{hidden:!0}),(0,h.jsx)(u,{name:`domain`,type:`text`,placeholder:`Enter domain...`,children:(0,h.jsx)(a,{basic:!0,attached:`right`,children:(0,h.jsx)(d,{placeholder:`Select TLD`,label:e=>e.name,inline:!0,data:[{id:1,name:`.net`},{id:2,name:`.com`},{id:3,name:`.org`}],children:(0,h.jsx)(d.Column,{children:e=>e.name})})})})]}),name:`attached`,args:{}},v=[`Attached`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <div>\r
      <Input name="value" type="text" placeholder="Enter value...">\r
        <Label basic>Before</Label>\r
        <Label basic attached="right">\r
          First after\r
        </Label>\r
        <Label basic attached="right">\r
          Second after\r
        </Label>\r
      </Input>\r
      <Divider hidden />\r
      <Input name="weight" type="text" placeholder="Enter weight...">\r
        <Label basic attached="right">\r
          kg\r
        </Label>\r
      </Input>\r
      <Divider hidden />\r
      <Input name="email" type="text" placeholder="Email...">\r
        <Label color="rebeccapurple" onClick={() => {
        alert('Clicked');
      }}>\r
          <Icon color="white" name="at" />\r
        </Label>\r
      </Input>\r
      <Divider hidden />\r
      <Input name="tags" type="text" placeholder="Enter tags">\r
        <Label tag attached="right">\r
          Add tag\r
        </Label>\r
      </Input>\r
      <Divider hidden />\r
      <Input name="distance" type="text" placeholder="Enter distance">\r
        <Label basic pointing attached="right">\r
          km\r
        </Label>\r
      </Input>\r
      <Divider hidden />\r
      <Input name="domain" type="text" placeholder="Enter domain...">\r
        <Label basic attached="right">\r
          <Dropdown placeholder="Select TLD" label={item => item.name} inline data={[{
          id: 1,
          name: '.net'
        }, {
          id: 2,
          name: '.com'
        }, {
          id: 3,
          name: '.org'
        }]}>\r
            <Dropdown.Column>{item => item.name}</Dropdown.Column>\r
          </Dropdown>\r
        </Label>\r
      </Input>\r
    </div>,
  name: 'attached',
  args: {}
}`,..._.parameters?.docs?.source}}}})))()}export{m as n,y as r,_ as t};