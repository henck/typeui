import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{n as r,o as i,r as a,s as o}from"./Theme-DNNvCs1s.js";import{n as s}from"./iframe-BMOsmv_G.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./darken-Ccl44O0b.js";import{n as m,t as h}from"./lighten-BkId_tvD.js";import{n as g,o as _,r as v}from"./Icon-CbGLNh3A.js";import{r as y,t as b}from"./Label-DxPnvqIR.js";var x,S,C,w;function T(){return(T=t((()=>{n(),o(),r(),x=s(),S=e=>(0,x.jsx)(`div`,{className:e.className}),C=a(S)`
  display:  inline-block;
  position: relative;
  width:    0px;
  margin:   0 2px 0 2px;
  z-index:  1;              /* Otherwise next button overlays this. */
  &:before {
    content:       'or';
    position:      absolute;
    top:           -1em;
    left:          -1em;
    width:         2em;
    height:        2em;
    line-height:   2em;
    text-align:    center;
    background:    #ffffff;
    border-radius: 1em;
    color:         #888;
  }
  ${e=>e.size===`mini`&&i`font-size: .79em`};
  ${e=>e.size===`tiny`&&i`font-size: .86em`};
  ${e=>e.size===`small`&&i`font-size: .93em`};
  ${e=>e.size===`large`&&i`font-size: 1.14em`};
  ${e=>e.size===`big`&&i`font-size: 1.29em`};
  ${e=>e.size===`huge`&&i`font-size: 1.43em`};
  ${e=>e.size===`massive`&&i`font-size: 1.71em`};  
`,w=e=>(0,x.jsx)(C,{...e}),w.__docgenInfo={description:``,methods:[],displayName:`ButtonOr`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},size:{required:!1,tsType:{name:`union`,raw:`'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive'`,elements:[{name:`literal`,value:`'mini'`},{name:`literal`,value:`'tiny'`},{name:`literal`,value:`'small'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'large'`},{name:`literal`,value:`'big'`},{name:`literal`,value:`'huge'`},{name:`literal`,value:`'massive'`}]},description:"Sets button size: `mini`, `tiny`, `small`, `medium` (default), `large`, `big`, `huge` or `massive`. \r\n@default medium"}}}})))()}var E,D,O,k,A;function j(){return(j=t((()=>{E=e(n()),o(),r(),D=s(),O=e=>{let t={size:e.size,color:e.color,compact:e.compact,basic:e.basic,icon:e.icon,grouped:!0};return(0,D.jsx)(`div`,{className:e.className,children:E.Children.map(e.children,e=>E.cloneElement(e,t))})},k=a(O)`
  display: inline-flex;
  align-items: center; 
  ${e=>e.vertical&&i`
    /* If group is vertical, then apply flex column layout. */
    flex-direction: column;
    align-items: stretch;
  `}
  /* First button has partial rounding,
   * depending on group orientation, and 
   * no connecting border. */
  & div:first-child button {
    ${e=>!e.vertical&&i`
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-right: none;
    `}
    ${e=>e.vertical&&i`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
    `}
  }
  /* Last button has partial rounding,
   * depending on group orientation. */
  & div:last-child button {
    ${e=>!e.vertical&&i`
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    `}
    ${e=>e.vertical&&i`
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    `};   
  }
  /* Buttons in the middle have no rounding at all, 
   * and no connecting border. */
  & div:not(:first-child):not(:last-child) button {
    border-radius: 0;
    ${e=>!e.vertical&&i`
      border-right: none;
    `}    
    ${e=>e.vertical&&i`
      border-bottom: none;
    `}
  }
`,A=e=>(0,D.jsx)(k,{...e}),A.__docgenInfo={description:``,methods:[],displayName:`ButtonGroup`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`},vertical:{required:!1,tsType:{name:`boolean`},description:`Aligns buttons in a vertical list. Default is horizontal. \r
@default horizontal`},size:{required:!1,tsType:{name:`union`,raw:`'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive'`,elements:[{name:`literal`,value:`'mini'`},{name:`literal`,value:`'tiny'`},{name:`literal`,value:`'small'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'large'`},{name:`literal`,value:`'big'`},{name:`literal`,value:`'huge'`},{name:`literal`,value:`'massive'`}]},description:"Sets size for buttons in group: `mini`, `tiny`, `small`, `medium` (default), `large`, `big`, `huge` or `massive`. \r\n@default medium"},color:{required:!1,tsType:{name:`string`},description:"Sets color for all buttons in group, e.g. `#aa3311`."},compact:{required:!1,tsType:{name:`boolean`},description:`Gives all buttons in group reduced padding. \r
@default false`},basic:{required:!1,tsType:{name:`boolean`},description:`Sets all buttons in group to be basic buttons, which are less pronounced. \r
@default false`},icon:{required:!1,tsType:{name:`boolean`},description:`Sets all buttons in group to be icon buttons that have no margin, to center icons. \r
@default false`}}}})))()}var M,N,P;function F(){return(F=t((()=>{M=e(n()),d(),l(),N=s(),P=e=>{let t=M.useRef(null),n=M.useRef(null);M.useEffect(()=>()=>i(),[]);let r=e=>{i();let r=t.current.getBoundingClientRect(),a=Math.round((e.nativeEvent.clientX-r.left)*100/r.width),s=Math.round((e.nativeEvent.clientY-r.top)*100/r.height);n.current=requestAnimationFrame(()=>o(a,s,0))},i=()=>{n.current&&cancelAnimationFrame(n.current)},a=e=>(e*=2,e<.5?2*e*e:e<1.5?-1+(4-2*e)*e:2*(e-2)*(e-2)),o=(e,r,i)=>{if(t.current===null)return;let s=getComputedStyle(t.current).backgroundColor,l=c.FromRgb(f.FromString(s)),u=a(i/100)*.1;l.lightness>.5&&(u=-u);let d=u+l.lightness,p=`hsl(${l.hue}, ${Math.round(l.saturation*100)}%, ${Math.round(d*100)}%)`;t.current.style.backgroundImage=`radial-gradient(
        circle at ${e}% ${r}%, 
        ${p} 0%, 
        ${p} ${i}%, 
        ${s} 
        ${i}%, 
        ${s})`,i+=3,i<=100?requestAnimationFrame(()=>o(e,r,i)):n.current&&=(cancelAnimationFrame(n.current),0)},s=M.forwardRef((t,n)=>M.cloneElement(e.children,{...t,onMouseDown:r,ref:n}));return(0,N.jsx)(s,{ref:t})},P.__docgenInfo={description:``,methods:[],displayName:`Ripple`,props:{children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}})))()}var I,L,R,z,B,V,H;function U(){return(U=t((()=>{I=e(n()),o(),r(),u(),h(),T(),j(),y(),F(),v(),L=s(),R=e=>{let t=(0,L.jsx)(`button`,{className:e.className,children:e.children});return e.noripple?t:(0,L.jsx)(P,{children:t})},z=a(R).attrs(e=>({fontSize:_(e.size,1,e.theme.scale.button),hasColor:e.primary||e.secondary||e.positive||e.negative||e.color,finalColor:e=>e.primary?e.theme.primaryColor:e.secondary?e.theme.secondaryColor:e.positive?e.theme.positiveColor:e.negative?e.theme.negativeColor:e.color?e.color:e.theme.normalColor}))`
  /* Display */
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  /* Font */
  font-family: ${e=>e.theme.fontName}, sans-serif;
  font-weight: 500;
  font-size: 1em;
  white-space: nowrap;

  /* Padding */
  padding: 0.6875em 1.2em;
  /* A compact button has reduced padding. */
  ${e=>e.compact&&i`padding: 0.4em 1.0em;`}
  /* A circular/icon button has square padding. */
  ${e=>(e.icon||e.circular)&&i`padding: 0.6875em;`} /* circular implies icon */

  /* Border */
  border: none;
  border-radius: ${e=>e.theme.radius}px;

  /* Circular */
  ${e=>e.circular&&i`border-radius: 50%;`}

  /* Transitions */
  transition: opacity ${e=>e.theme.transition.duration}s ease, 
              color ${e=>e.theme.transition.duration}s ease, 
              border-color ${e=>e.theme.transition.duration}s ease, 
              background-color ${e=>e.theme.transition.duration}s ease, 
              box-shadow ${e=>e.theme.transition.duration}s ease;
  outline: none;

  /* Cursor */
  ${e=>e.disabled&&i`cursor: auto;`}
  ${e=>!e.disabled&&i`cursor: pointer;`}

  /* Size */
  font-size: ${e=>e.fontSize}em;

  /* Colors, not basic: */
  ${e=>!e.basic&&i`
    background-color: ${e.finalColor}
    ${!e.hasColor&&i`color: ${m(.2,e.theme.fontColor)};`}
    ${e.hasColor&&i`color: #ffffff; font-weight: 500;`}
  `}

  /* Colors, basic: */
  ${e=>e.basic&&i`
    border-style: solid;
    border-width: 1px;
    background-color: ${e.theme.background};
    /* Since border occupies 1px, adjust to padding to shrink: */
    padding: calc(-1px + 0.6875em) calc(-1px + 1.2em);
    ${e.hasColor&&i`
      color: ${m(.2,e.finalColor(e))};
      border-color: ${m(.2,e.finalColor(e))};
    `}
    ${!e.hasColor&&i`
      color: ${m(.5,e.theme.fontColor)}; 
      border-color: ${m(.8,e.theme.fontColor)};
    `}
  `}

  /* Icon */
  ${g} {
    /* Icons on basic, uncolored buttons are dark. */
    ${e=>e.basic&&e.finalColor(e)===e.theme.normalColor&&i`
      fill: ${p(.5,e.finalColor(e))};
    `}
    /* Icons on basic, colored buttons have the button border color. */
    ${e=>e.basic&&e.finalColor(e)!==e.theme.normalColor&&i`
      fill: ${e.finalColor};
    `}
    /* Icons on uncolored normal buttons are dark. */
    ${e=>!e.basic&&e.finalColor(e)===e.theme.normalColor&&i`
      fill: ${p(.5,e.finalColor(e))};
    `}
    /* Icons on colored normal buttons have a lighter shade of the
       background color. */    
    ${e=>!e.basic&&e.finalColor(e)!==e.theme.normalColor&&i`
      fill: ${m(.4,e.finalColor(e))};
    `}
    opacity: 0.8;
    /* Icon gets margin only for non-icon buttons: */
    ${e=>!e.icon&&!e.circular&&i`margin-right:4px;`}
  }

  /* All hover effects go here. 
   * (but no hover for disabled buttons) */
  ${e=>!e.disabled&&i`
    &:hover {
      ${!e.basic&&i`
        background-color: ${p(e.theme.darken,e.finalColor(e))};
      `}
      ${e.basic&&i`
        ${e.hasColor&&i`
          color: ${e.finalColor(e)}; border-color: ${e.finalColor(e)};
        `}
        ${!e.hasColor&&i`
          color: ${m(.2,e.theme.fontColor)}; border-color: ${m(.6,e.theme.fontColor)};
        `}      
      `}
      ${g} {
        opacity: 1.0;
      }
    }
  `}

  /* Attachment:
     If something is attached to the button, then remove its border radius. */
  &:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  &:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }  
`,B=e=>{let t=(e,t)=>{let n=e.props.attached;return n===t||!n&&t===`left`},n=n=>I.Children.toArray(e.children).filter(e=>I.isValidElement(e)&&e.props.isLabel&&t(e,n)).map((e,t)=>{let n=e.props.attached;return n||=`left`,I.cloneElement(e,{key:t,attached:n})}),r=()=>I.Children.map(e.children,e=>{if(e&&(!e.type||e.type!==b))return e}),{className:i,...a}=e;return(0,L.jsxs)(`div`,{className:i,onClick:a.disabled?null:a.onClick,children:[n(`left`),(0,L.jsx)(z,{...a,children:r()}),n(`right`)]})},V=a(B)`
  position:    relative;
  display:     inline-flex;
  align-items: stretch;
  /* Floating */
  ${e=>e.float===`left`&&i`float:left;`}
  ${e=>e.float===`right`&&i`float:right;`}    
  /* Fluid */
  ${e=>e.fluid&&i`width: 100%;`}  
  /* Buttons in groups have no margin. */
  ${e=>!e.grouped&&i`margin: 0 2px;`}
  /* A disabled button is 50% transparent. */
  ${e=>e.disabled&&i`opacity: 0.5;`}
  /* Clickable */
  ${e=>e.onClick&&!e.disabled&&i`cursor: pointer;`}
`,H=e=>(0,L.jsx)(V,{...e,disabled:e.disabled}),H.Or=w,H.Group=A,H.__docgenInfo={description:`A Button can be clicked and styled.\r
\r
@link https://henck.github.io/typeui/?path=/story/controls-button--properties`,methods:[{name:`Or`,docblock:`Button groups can contain conditionals using Button.Or.\r
\r
@example\r
<Button.Group>\r
  <Button>One</Button> \r
  <Button.Or/>\r
  <Button positive>Two</Button> \r
</Button.Group>\r
\r
@link https://henck.github.io/typeui/?path=/story/controls-button-groups--group-attributes`,modifiers:[`static`],params:[{name:`props`,optional:!1,type:{name:`IButtonOrProps`,alias:`IButtonOrProps`}}],returns:null,description:`Button groups can contain conditionals using Button.Or.`},{name:`Group`,docblock:`Buttons can be grouped horizontally or vertically using Button.Group.\r
\r
@example\r
<Button.Group vertical>\r
 <Button>One</Button> \r
 <Button>Two</Button> \r
 <Button>Three</Button> \r
</Button.Group> \r
\r
@link https://henck.github.io/typeui/?path=/story/controls-button-groups--conditional`,modifiers:[`static`],params:[{name:`props`,optional:!1,type:{name:`IButtonGroupProps`,alias:`IButtonGroupProps`}}],returns:null,description:`Buttons can be grouped horizontally or vertically using Button.Group.`}],displayName:`Button`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`},grouped:{required:!1,tsType:{name:`boolean`},description:`@ignore (Not public) True when button is in a Button.Group; styling will need to know this.`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:"Optional event handler for `onClick` event. The corresponding listener is set on the button's HTML element.\r\n@default null"},primary:{required:!1,tsType:{name:`boolean`},description:`Emphasis: make this button stand out using the primary theme color. \r
@default false`},secondary:{required:!1,tsType:{name:`boolean`},description:`Emphasis: make this button stand out using the secondary theme color. \r
@default false`},positive:{required:!1,tsType:{name:`boolean`},description:`Variation: make this button hint toward a positive consequence. \r
@default false`},negative:{required:!1,tsType:{name:`boolean`},description:`Variation: make this button hint toward a negative consequence. \r
@default false`},color:{required:!1,tsType:{name:`string`},description:"Optionally set custom color for button, e.g. `skyblue` or `#ffff00`."},compact:{required:!1,tsType:{name:`boolean`},description:`Optionally reduce button padding. \r
@default false`},size:{required:!1,tsType:{name:`union`,raw:`'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive'`,elements:[{name:`literal`,value:`'mini'`},{name:`literal`,value:`'tiny'`},{name:`literal`,value:`'small'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'large'`},{name:`literal`,value:`'big'`},{name:`literal`,value:`'huge'`},{name:`literal`,value:`'massive'`}]},description:"Optionally set button size: `mini`, `tiny`, `small`, `medium` (default), `large`, `big`, `huge` or `massive`. \r\n@default medium"},fluid:{required:!1,tsType:{name:`boolean`},description:`Optionally make button fill the width of its container. \r
@default false`},icon:{required:!1,tsType:{name:`boolean`},description:`Optionally remove button padding, for icon-only buttons. \r
@default false`},basic:{required:!1,tsType:{name:`boolean`},description:`Basic buttons have a subtler appearance. \r
@default false`},disabled:{required:!1,tsType:{name:`boolean`},description:`Disabled buttons cannot be pressed. \r
@default false`},float:{required:!1,tsType:{name:`union`,raw:`'left' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:"Optional; causes button to float to the `left` or `right`."},circular:{required:!1,tsType:{name:`boolean`},description:`Make button circular. This works only with icon buttons. \r
@default false`},noripple:{required:!1,tsType:{name:`boolean`},description:`If set, disables button ripple effect. \r
@default false`}}}})))()}export{F as i,U as n,P as r,H as t};