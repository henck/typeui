import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-DlPsW1c0.js";import{n as i,r as a}from"./Theme-DNNvCs1s.js";import{n as o}from"./iframe-BMOsmv_G.js";import{n as s,t as c}from"./lighten-BkId_tvD.js";import{t as l}from"./Icon-CbGLNh3A.js";import{t as u}from"./Icon-DBLdIlUt.js";var d,f,p,m;function h(){return(h=t((()=>{r(),i(),c(),d=o(),f=e=>(0,d.jsx)(`div`,{className:e.className,children:(0,d.jsx)(`div`,{onClick:()=>e.onClick(e.index),children:(0,d.jsx)(`div`,{children:(0,d.jsx)(`div`,{children:(0,d.jsx)(`div`,{children:e.children})})})})}),p=a(f).attrs(e=>({skew:90-e.angleBody,rad:(e.angleOffset-90+e.angleBody/2)*Math.PI/180}))`
  /* slice */
  & > div {
    position: absolute;
    z-index: 0;
    top: 50%; left: 50%;          /* Rectangle is placed at center of parent circle */
    width: 100vw; height: 100vw;  /* Extremely large rectangle fills any circle size */
    
    background: ${e=>e.color};
    transform: rotate(${e=>e.angleOffset-90}deg) skew(${e=>e.skew}deg);
    /* Transform around top-left corner of rectangle */
    transform-origin: 0 0;
    border: solid 1px #fff;
    &:hover {
      background: ${e=>s(.1,e.color)};
      transform: rotate(${e=>e.angleOffset-90}deg) skew(${e=>e.skew}deg) scaleX(1.1) scaleY(1.1);
      box-shadow: inset 0px 0px 0px 1px #111;
      transition: all ${e=>e.theme.transition.duration}s;
    }
    overflow: hidden;
    cursor: pointer;
    /* move content */
    & > div {
      position: absolute;
      left: ${e=>e.radius/3}px;
      top: ${e=>e.radius/3}px;
      /* untransform */
      & > div {
        position: absolute;
        transform: skew(${e=>-e.skew}deg) rotate(${e=>90-e.angleOffset}deg);
        /* retransform */
        & > div {
          position: absolute;
          transform: translateX(-50%) translateY(-50%) rotate(${e=>e.angleOffset+e.angleBody/2}deg);
          user-select: none;
          color: #fff;
          text-align: center;
        }
      }
    }
  }
`,m=e=>(0,d.jsx)(p,{...e}),m.__docgenInfo={description:``,methods:[],displayName:`Slice`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`},index:{required:!0,tsType:{name:`number`},description:``},onClick:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(index: number) => void`,signature:{arguments:[{type:{name:`number`},name:`index`}],return:{name:`void`}}},description:``},color:{required:!0,tsType:{name:`string`},description:``},radius:{required:!0,tsType:{name:`number`},description:``},angleBody:{required:!0,tsType:{name:`number`},description:`Size of slice in degrees`},angleOffset:{required:!0,tsType:{name:`number`},description:`Offfset of slice in degrees`}}}})))()}var g,_,v,y,b,x,S;function C(){return(C=t((()=>{g=e(r()),i(),h(),_=o(),v=100,y=5,b=e=>{let t=t=>{e.onClick&&e.onClick(t)},n=360/g.Children.count(e.children);return(0,_.jsxs)(`div`,{className:e.className,children:[(0,_.jsx)(`div`,{children:g.Children.map(e.children,(r,i)=>(0,_.jsx)(m,{color:e.color??`#333`,radius:e.radius??v,index:i,onClick:t,angleBody:n,angleOffset:i*n,children:r}))}),(0,_.jsx)(`div`,{})]})},x=a(b).attrs(e=>({outerRadius:e.radius?e.radius:v,innerRadius:e.radius?e.radius/y:v/y}))`
  position: relative;
  /* Outer circle with slices */
  & > div:nth-child(1) {
    position: relative;
    width: ${e=>e.outerRadius*2+`px`};
    height: ${e=>e.outerRadius*2+`px`};
    background: #eee;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: rgba(34, 36, 38, 0.15) 0px 0px 3px 3px;
  }
  /* Inner circle */
  & > div:nth-child(2) {
    position: absolute;
    left: ${e=>e.outerRadius-e.innerRadius+`px`};
    top: ${e=>e.outerRadius-e.innerRadius+`px`};
    width: ${e=>e.innerRadius*2+`px`};
    height: ${e=>e.innerRadius*2+`px`};
    background: #fff;
    border-radius: 50%;
    box-shadow: inset rgba(34, 36, 38, 0.15) 0px 0px 3px 3px;
  }
`,S=e=>(0,_.jsx)(x,{...e}),S.__docgenInfo={description:``,methods:[],displayName:`Circle`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(index: number) => void`,signature:{arguments:[{type:{name:`number`},name:`index`}],return:{name:`void`}}},description:`onClick handler for segment clicks.`},radius:{required:!1,tsType:{name:`number`},description:`Circle radius in pixels. Defaults to 100. \r
@default 100`},color:{required:!1,tsType:{name:`string`},description:``}}}})))()}var w=n({Properties:()=>O,__namedExportsOrder:()=>k,default:()=>D}),T,E,D,O,k;function A(){return(A=t((()=>{C(),u(),T=o(),E=e=>(0,T.jsxs)(S,{...e,children:[(0,T.jsxs)(`div`,{children:[`One `,(0,T.jsx)(l,{color:`white`,name:`at`})]}),(0,T.jsxs)(`div`,{children:[`Two `,(0,T.jsx)(l,{color:`white`,name:`chevron`})]}),(0,T.jsxs)(`div`,{children:[`Three `,(0,T.jsx)(l,{color:`white`,name:`area-chart`})]}),(0,T.jsxs)(`div`,{children:[`Four `,(0,T.jsx)(l,{color:`white`,name:`bullhorn`})]}),(0,T.jsxs)(`div`,{children:[`Five `,(0,T.jsx)(l,{color:`white`,name:`edit`})]})]}),D={title:`Controls/Circle`,component:S,argTypes:{className:{table:{disable:!0}}}},O={render:E.bind({}),name:`Properties`,args:{}},k=[`Properties`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Properties',
  args: {}
}`,...O.parameters?.docs?.source}}}})))()}export{C as a,S as i,O as n,A as r,w as t};