import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{n,o as r,r as i,s as a}from"./Theme-DNNvCs1s.js";import{n as o}from"./iframe-BMOsmv_G.js";import{n as s,t as c}from"./darken-Ccl44O0b.js";import{n as l,t as u}from"./alpha-BnoikBvh.js";var d,f,p,m;function h(){return(h=e((()=>{t(),a(),n(),s(),l(),d=o(),f=e=>(0,d.jsx)(`div`,{className:e.className,onClick:e.onClick}),p=i(f).attrs(e=>({percentageStr:Math.round(e.value).toString()+`%`}))` 
  position: relative; 
  box-sizing: border-box;
  width: 100%;
  height: ${e=>e.thickness?e.thickness:12}px;
  margin: 4px 0 4px 0;
  ${e=>e.onClick!=null&&r`cursor: pointer`};

  ${e=>e.padded&&r`margin: 10px;`}
  ${e=>e.bordered&&r`border: solid 1px ${e=>c(.1,e.theme.normalColor)};`}
  ${e=>e.background&&r`background: ${e=>e.theme.normalColor};`}
  
  /* Raised adds a dropshadow. */
  // ${e=>e.raised&&r`box-shadow: 1px 1px 2px ${e=>e.theme.normalColor};`}
  ${e=>e.raised&&r`box-shadow: 1px 1px 2px 2px ${e=>u(.5,c(.5,e.theme.normalColor))} ;`}

  /* Not-rectangular adds rounding: */
  ${e=>!e.rectangular&&r`border-radius: ${e=>e.theme.radius+2}px;`}

  &:before {
    transition: width ${e=>e.theme.transition.duration}s ease;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: ${e=>e.value+`%`};
    transition: width ${e=>e.theme.transition.duration*2}s;
    height: 100%;
    background: ${e=>e.color?e.color:e.theme.primaryColor};
    /* Not-rectangular adds rounding: */
    ${e=>!e.rectangular&&r`border-radius: ${e=>e.theme.radius}px;`}
  }

  ${e=>e.numbered&&r`
    &:after {
      content: '${e.percentageStr}';
      position: absolute;
      top: 50%;
      right: 6px;
      font-size: 8px;
      line-height: 0;
    }
  `}
`,m=e=>(0,d.jsx)(p,{...e}),m.__docgenInfo={description:`The Progress component shows a progress bar, filled to a percentage equal to \r
value. The bar always stretches to fill all horizontal space available to it.\r
\r
@example\r
<Progress\r
  background\r
  value={50}/>\r
\r
@link https://henck.github.io/typeui/?path=/story/controls-progress--properties`,methods:[],displayName:`Progress`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},value:{required:!0,tsType:{name:`number`},description:`Progress value (in range 0..100)`},rectangular:{required:!1,tsType:{name:`boolean`},description:`If set, Progress is not rounded. \r
default false`},background:{required:!1,tsType:{name:`boolean`},description:`If set, a background is added. \r
@default false`},bordered:{required:!1,tsType:{name:`boolean`},description:`If set, a border is added. \r
@default false`},raised:{required:!1,tsType:{name:`boolean`},description:`A raised Progress has a drop shadow. \r
@default false`},numbered:{required:!1,tsType:{name:`boolean`},description:`If set, a percentage number is shown on the Progress bar. \r
@default false`},padded:{required:!1,tsType:{name:`boolean`},description:"A padded `Progress` has a margin around it. \r\n@default false"},thickness:{required:!1,tsType:{name:`number`},description:`Set progress bar thickness in pixels. Defaults to 12. \r
@default 12`},color:{required:!1,tsType:{name:`string`},description:`If set, sets the color of the Progress bar. By default, \r
the color is the theme primary color.`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Fired when control is clicked. Control is only interactive\r
if this event handler has a value.`}}}})))()}export{h as n,m as t};