import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{n as r,o as i,r as a,s as o}from"./Theme-DNNvCs1s.js";import{n as s}from"./iframe-BMOsmv_G.js";import{n as c,t as l}from"./darken-Ccl44O0b.js";import{n as u,t as d}from"./alpha-BnoikBvh.js";var f,p,m;function h(){return(h=t((()=>{n(),r(),f=s(),p=e=>(0,f.jsx)(`div`,{className:e.className}),m=a(p).attrs(e=>({skew:90-e.angleBody}))`
  position: absolute;
  top: 50%; left: 50%;          /* Rectangle is placed at center of parent circle */
  width: 100vw; height: 100vw;  /* Extremely large rectangle fills any circle size */
  
  background: ${e=>e.color?e.color:e.theme.primaryColor};
  
  transform: rotate(${e=>e.angleOffset-90}deg) skew(${e=>e.skew}deg);
  /* Transform around top-left corner of rectangle */
  transform-origin: 0 0;
`})))()}var g,_,v;function y(){return(y=t((()=>{n(),r(),o(),u(),c(),g=s(),_=e=>(0,g.jsx)(`div`,{className:e.className}),v=a(_)`
  position: absolute;
  left: 50%;
  top: 50%;
  width: ${e=>e.radius*2}px;
  height: ${e=>e.radius*2}px;
  transform: translateX(-50%) translateY(-50%);
  background: ${e=>e.theme.background};
  border-radius: 50%;
  ${e=>e.raised&&i`box-shadow: inset ${e=>d(.5,l(.5,e.theme.normalColor))} 0px 0px 3px 2px;`}
`})))()}var b,x,S;function C(){return(C=t((()=>{n(),r(),b=s(),x=e=>(0,b.jsx)(`div`,{className:e.className}),S=a(x)`
  position: absolute;
  left: ${e=>e.left}px;
  top: ${e=>e.top}px;
  width: ${e=>e.thickness}px;
  height: ${e=>e.thickness}px;
  transform: translateX(-50%) translateY(-50%);
  background: ${e=>e.color?e.color:e.theme.primaryColor};
  border-radius: 50%;
`})))()}var w,T,E;function D(){return(D=t((()=>{n(),r(),u(),c(),w=s(),T=e=>(0,w.jsx)(`div`,{className:e.className,children:e.children}),E=a(T)`
  position: absolute;
  font-weight: 500;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  // Font size defaults to 100% of inherited fonts size, but can be affected
  // by fontFactor, which multiplies it.
  font-size: ${e=>(e.fontFactor??1)*100}%;
  // If raised, then font also gets a shadow.
  ${e=>e.raised&&i`text-shadow: 1px 1px 2px ${d(.5,l(.5,e.theme.normalColor))};`}  
`})))()}var O,k,A,j,M,N,P,F;function I(){return(I=t((()=>{O=e(n()),o(),r(),h(),y(),C(),u(),c(),D(),k=s(),A=50,j=8,M=10,N=e=>{let t,[n,r]=O.useState(e.animated?0:Math.max(Math.min(100,e.value),0));O.useEffect(()=>(e.animated&&(t=window.setInterval(i,M)),()=>{window.clearInterval(t)}),[]);let i=()=>{let n=e.value/40;r(r=>{let i=Math.max(Math.min(r+n,100),0);return i>=e.value&&(i=e.value,clearInterval(t)),i})},a=e.radius??A,o=e.thickness??j,s=360/100*n,c=Math.min(s,95),l=Math.max(0,Math.min(s-90,95)),u=Math.max(0,Math.min(s-180,95)),d=Math.max(0,Math.min(s-270,95)),f=a-o/2,p=(360/100*Math.min(100,Math.max(n,0))-90)*Math.PI/180;return(0,k.jsxs)(`div`,{className:e.className,onClick:e.onClick,children:[(0,k.jsxs)(`div`,{children:[(0,k.jsx)(m,{angleOffset:0,angleBody:c,color:e.color}),(0,k.jsx)(m,{angleOffset:90,angleBody:l,color:e.color}),(0,k.jsx)(m,{angleOffset:180,angleBody:u,color:e.color}),(0,k.jsx)(m,{angleOffset:270,angleBody:d,color:e.color}),(0,k.jsx)(v,{radius:a-o,raised:e.raised}),(0,k.jsxs)(E,{raised:e.raised,fontFactor:e.fontFactor,children:[Math.round(n),`%`]})]}),e.rounded&&(0,k.jsx)(S,{color:e.color,left:a,top:a-f,thickness:o}),e.rounded&&(0,k.jsx)(S,{color:e.color,left:a+f*Math.cos(p),top:a+f*Math.sin(p),thickness:o})]})},P=a(N).attrs(e=>({outerRadius:e.radius?e.radius:A,innerRadius:(e.radius?e.radius:A)-(e.thickness?e.thickness:j),middleRadius:(e.radius?e.radius:A)-(e.thickness?e.thickness:j)/2,actualThickness:e.thickness?e.thickness:j,rad:(360/100*Math.min(100,Math.max(e.value,0))-90)*Math.PI/180}))`
  position: relative;
  display: inline-block;
  user-select: none;
  ${e=>e.onClick!=null&&i`cursor: pointer`};
  ${e=>e.padded&&i`margin: 10px;`}
  /* main circle */
  & > div:nth-child(1) {
    position: relative;
    width: ${e=>e.outerRadius*2}px;
    height: ${e=>e.outerRadius*2}px;
    background: ${e=>e.background?e.theme.normalColor:`transparent`};
    border-radius: 50%;
    overflow: hidden;
    ${e=>e.raised&&i`box-shadow: ${e=>d(.5,l(.5,e.theme.normalColor))} 0px 0px 2px 2px;`}
  }
`,F=e=>(0,k.jsx)(P,{...e}),F.__docgenInfo={description:`A CircularProgress shows a circular progress meter that is optionally animated.\r
\r
@example \r
<CircularProgress animated color="hotpink" padded raised value={15}/>\r
<CircularProgress animated background padded raised value={90}/>\r
<CircularProgress animated background color="crimson" padded raised rounded value={48}/>\r
\r
@link https://henck.github.io/typeui/?path=/story/controls-circularprogress--properties`,methods:[],displayName:`CircularProgress`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},value:{required:!0,tsType:{name:`number`},description:`Progress percentage value.\r
This must be a value between 0 and 100.`},color:{required:!1,tsType:{name:`string`},description:`Progress line color. Defaults to primary theme color.`},radius:{required:!1,tsType:{name:`number`},description:`Circle radius. Defaults to 50px. \r
@default 50`},thickness:{required:!1,tsType:{name:`number`},description:`Line thickness. Defaults to 8px. \r
@default 8`},background:{required:!1,tsType:{name:`boolean`},description:`If set, line gets a background. \r
@default false`},rounded:{required:!1,tsType:{name:`boolean`},description:`If set, line is rounded at ends. \r
@default false`},raised:{required:!1,tsType:{name:`boolean`},description:`If set, line and text get edge drop shadow. \r
@default false`},animated:{required:!1,tsType:{name:`boolean`},description:`If set, progress line animates when it first appears. \r
@default false`},padded:{required:!1,tsType:{name:`boolean`},description:`A padded CircularProgress has a margin around it. \r
@default false`},fontFactor:{required:!1,tsType:{name:`number`},description:`Font size factor compared to inherited font size. Defaults to 1. \r
Use 2 to increase font size 2x.`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Fired when control is clicked. Control is only interactive\r
if this event handler has a value.`}}}})))()}export{I as n,F as t};