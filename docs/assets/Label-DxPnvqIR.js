import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{n as r,o as i,r as a,s as o}from"./Theme-DNNvCs1s.js";import{n as s}from"./iframe-BMOsmv_G.js";import{n as c,t as l}from"./darken-Ccl44O0b.js";import{n as u,t as d}from"./lighten-BkId_tvD.js";import{n as f,o as p,r as m}from"./Icon-CbGLNh3A.js";import{n as h,r as g}from"./Image-DacXjqKR.js";var _,v,y,b,x;function S(){return(S=t((()=>{_=e(n()),r(),v=s(),y=e=>(0,v.jsx)(`div`,{className:e.className,children:_.Children.map(e.children,t=>_.cloneElement(t,{basic:t.props.basic??e.basic,color:t.props.color??e.color,pointing:t.props.pointing??e.pointing,size:t.props.size??e.size,tag:t.props.tag??e.tag}))}),b=a(y)`
  display: inline-block;
`,x=e=>(0,v.jsx)(b,{...e}),x.__docgenInfo={description:``,methods:[],displayName:`LabelGroup`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`},basic:{required:!1,tsType:{name:`boolean`},description:"`basic` Labels add a border and do not have a background. \r\n@default false"},color:{required:!1,tsType:{name:`string`},description:"Labels' background color, e.g. `skyblue`."},pointing:{required:!1,tsType:{name:`union`,raw:`HorizontalDirection | VerticalDirection`,elements:[{name:`union`,raw:`'left' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},{name:`union`,raw:`'top' | 'bottom'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`}]}]},description:"Labels point to other content to the `left`, `top`, `right` or `bottom`. Default direction is `left`"},size:{required:!1,tsType:{name:`union`,raw:`'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive'`,elements:[{name:`literal`,value:`'mini'`},{name:`literal`,value:`'tiny'`},{name:`literal`,value:`'small'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'large'`},{name:`literal`,value:`'big'`},{name:`literal`,value:`'huge'`},{name:`literal`,value:`'massive'`}]},description:"Size of Labels, one of `mini`, `tiny`, `small`, `medium`, `large`, `big`, `huge` and `massive`. *"},tag:{required:!1,tsType:{name:`boolean`},description:`If set, Labels appear as tags. \r
@default false`}}}})))()}var C,w,T,E;function D(){return(D=t((()=>{n(),r(),C=s(),w=e=>(0,C.jsx)(`span`,{className:e.className,children:e.children}),T=a(w)`
  opacity: 0.7;
  margin-left: 0.6em;
`,E=e=>(0,C.jsx)(T,{...e}),E.__docgenInfo={description:``,methods:[],displayName:`LabelDetail`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`}}}})))()}var O,k,A,j,M;function N(){return(N=t((()=>{O=e(n()),o(),r(),c(),d(),S(),D(),g(),m(),k=s(),A=e=>(0,k.jsxs)(`div`,{className:e.className,onClick:e.onClick,children:[e.children,e.content]}),j=a(A).attrs(e=>({emSize:p(e.size,.86,e.theme.scale.label),finalColor:e.positive?e.theme.positiveColor:e.negative?e.theme.negativeColor:e.color}))`
  display:     inline-flex;
  align-items: center;
  box-sizing:  border-box;
  line-height: 100%; /* of the font-size */
  white-space: nowrap; /* text in label must not wrap into multiple lines. */
  padding:     0.58em 0.83em; /* Padding scales with font size. */
  vertical-align: middle;
  border-radius: ${e=>e.theme.radius}px;
  user-select: none;

  /* Position */
  ${e=>!e.floating&&i`position: relative;`}
  ${e=>e.floating&&i`
    position: absolute;
    top: 0;
    right: 0;    
    transform: translateX(40%) translateY(-70%);
    z-index: 1;
  `}

  /* Colors and border */
  ${e=>e.basic&&i`
    border: solid 1px ${e.finalColor?e.finalColor:e.theme.normalColor};
    /* Since border occupies 1px, reduce padding by 1px: */
    padding: calc(-1px + 0.58em) calc(-1px + 0.83em);
    color: ${e.finalColor?e.finalColor:u(.4,e.theme.fontColor)}; 
    background: ${e.theme.background};
    font-weight: 500;
  `}
  ${e=>!e.basic&&i`
    color:       ${e.finalColor?`#fff`:u(.3,e.theme.fontColor)};
    background:  ${e.finalColor??e.theme.normalColor};
    font-weight: ${e.finalColor?`500`:`inherit`};
  `}
  
  /* Adjacent labels have a small margin. This does not apply to
   * pointing labels. */
  ${e=>!e.pointing&&i`margin: 0 0.2em;`}
  &:first-child { margin-left: 0; }
  &:last-child { margin-right: 0; }

  /* Size */  
  font-size: ${e=>e.emSize}em;

  /* Images in the label are resized vertically. */
  ${h} {
    display: inline-block;
    height: calc(1em + 2 * 0.58em);
    min-height: 0;
    margin: -0.58em 0.5em -0.58em -0.83em;
    vertical-align: top; /* This way, we can use margin = minus parent padding */
    img {
      border-top-left-radius: ${e=>e.theme.radius}px;
      border-bottom-left-radius: ${e=>e.theme.radius}px;
      height: calc(1em + 2 * 0.58em);
    }
  }

  /* Align icon (if present) with text. */
  ${f} {
    display: inline-block;
    vertical-align: top;
    margin: 0 0.2em;
  }

  /* onClick hover: */
  ${e=>e.onClick&&i`
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.2s ease;
    &:hover {
      ${e.basic&&!e.finalColor&&i`
        color: ${e.theme.primaryColor};
      `}
      ${!e.basic&&i`
        background-color: ${l(.05,e.finalColor??e.theme.normalColor)};
        ${!e.finalColor&&i`color:${e.theme.fontColor};`}
      `}      
    }
  `}

  /* 
   * Pointing:
   * 
   * Pointing is done by using a small square as :before. It's positioned
   * where the arrow must be, then rotated and given borders on the 
   * appropriate sides.
   */
  ${e=>!e.tag&&i` /* No pointing on tags. */
    ${e.pointing&&i`
      &:before {
        content: '';
        position: absolute;
        width: 0.6em;
        height: 0.6em;
        border-style: inherit;
        border-color: inherit;
        background: inherit;
        transform: translateX(-50%) translateY(-50%) rotate(45deg);
      }
    `}

    /* Pointing left (either no pointing value provided or "left"): */
    ${e.pointing&&(typeof e.pointing==`boolean`||e.pointing===`left`)&&i`
      margin-left: 1em;
      &:before {
        left: ${e.basic?`-1px`:`0`}; /* Shift for basic border */
        top: 50%;
        border-width: 0 0 1px 1px;
      }
    `}

    /* Pointing right: */
    ${e.pointing&&e.pointing===`right`&&i`
      margin-right: 1em;
      &:before {
        left: 100%;
        ${e.basic&&i`margin-left: 1px;`} /* Shift for basic border */
        top: 50%;
        border-width: 1px 1px 0 0;
      }
    `}

    /* Pointing top: */
    ${e.pointing&&e.pointing===`top`&&i`
      margin-top: 1em;
      &:before {
        left: 50%;
        top: ${e.basic?`-1px`:`0`}; /* Shift for basic border */
        border-width: 1px 0 0 1px;
      }
    `}

    /* Pointing bottom: */
    ${e.pointing&&e.pointing===`bottom`&&i`
      margin-bottom: 1em;
      &:before {
        left: 50%;
        ${e.basic&&i`margin-top: 1px;`} /* Shift for basic border */
        top: 100%;
        border-width: 0 1px 1px 0;
      }
    `}  
  `}

  /* Tag */
  ${e=>e.tag&&i`
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    margin-left: 1.07em; /* 0.2em space between labels, plus half label height */
    &:first-child { margin-left: 1.05em; } /* Override original value */
    padding-left: 1.9em;
    padding-right: 1.4em;
    /* Arrow part */
    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      background-color: inherit;
      width: 1.5274em; /* Label height * sqrt(2) */
      height: 1.5274em;
      transform: translateX(-50%) translateY(-50%) rotate(45deg);
      border-width: inherit;
      border-style: inherit;
      border-color: inherit;
      ${e.basic&&i`border-width: 0 0 1px 1px;`}
    }
    /* Hole part */
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: -.25em;
      background: ${e.theme.background};
      width: .5em;
      height: .5em;
      ${!e.basic&&i`box-shadow: 0 -1px 1px 0 rgba(0,0,0,.3);`}
      transform: translateY(-50%);
      border-radius: 1em;
      ${e.basic&&i`
        border: inherit;
      `}
    }

    /* Inside a tag, images are no longer rounded. */
    ${h} {
      img {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  `} 

  /* 
   * Attached
   * 
   * A Label can be attached to other content (e.g. Input, Dropdown, Button). 
   * When it is attached, border-rounding and borders change.
   */
  ${e=>e.attached&&i`
    margin: 0;
    &:not(:first-child) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    &:not(:last-child) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  `}
  ${e=>e.attached&&e.attached!==`right`&&i`border-right-width: 0;`}
  ${e=>e.attached&&e.attached===`right`&&i`border-left-width: 0;`}
`,M=class extends O.Component{constructor(...e){super(...e),this.render=()=>(0,k.jsx)(j,{...this.props})}static{this.defaultProps={isLabel:!0}}static{this.Group=x}static{this.Detail=E}},M.__docgenInfo={description:`Stylable label.\r
\r
@link https://henck.github.io/typeui/?path=/story/controls-label--properties`,methods:[{name:`Group`,docblock:`A Label.Group can pass props to the labels it contains, but \r
children can still override them. Goups can pass along basic, \r
color, pointing, size and tag.`,modifiers:[`static`],params:[{name:`props`,optional:!1,type:{name:`ILabelGroupProps`,alias:`ILabelGroupProps`}}],returns:null,description:`A Label.Group can pass props to the labels it contains, but \r
children can still override them. Goups can pass along basic, \r
color, pointing, size and tag.`},{name:`Detail`,docblock:`A label can contain a Label.Detail inside it.`,modifiers:[`static`],params:[{name:`props`,optional:!1,type:{name:`ILabelDetailProps`,alias:`ILabelDetailProps`}}],returns:null,description:`A label can contain a Label.Detail inside it.`},{name:`render`,docblock:null,modifiers:[],params:[],returns:null}],displayName:`Label`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`},basic:{required:!1,tsType:{name:`boolean`},description:"A `basic` Label adds a border and does not have a background. \r\n@default false"},color:{required:!1,tsType:{name:`string`},description:"Label background color, e.g. `skyblue`."},positive:{required:!1,tsType:{name:`boolean`},description:`Label content may be passed as a property.`},negative:{required:!1,tsType:{name:`boolean`},description:"If set, use `positive` color for Label."},content:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:"If set, use `negative` color for Label."},floating:{required:!1,tsType:{name:`boolean`},description:`A floating Label floats over the top-right corner of its parent. \r
@default false`},pointing:{required:!1,tsType:{name:`union`,raw:`boolean | Direction`,elements:[{name:`boolean`},{name:`union`,raw:`HorizontalDirection | VerticalDirection`,elements:[{name:`union`,raw:`'left' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},{name:`union`,raw:`'top' | 'bottom'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`}]}]}]},description:"Point to other content to the `left`, `top`, `right` or `bottom`. Default direction is `left`"},size:{required:!1,tsType:{name:`union`,raw:`'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive'`,elements:[{name:`literal`,value:`'mini'`},{name:`literal`,value:`'tiny'`},{name:`literal`,value:`'small'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'large'`},{name:`literal`,value:`'big'`},{name:`literal`,value:`'huge'`},{name:`literal`,value:`'massive'`}]},description:"Label size, one of `mini`, `tiny`, `small`, `medium`, `large`, `big`, `huge` and `massive`. \r\n@default medium"},tag:{required:!1,tsType:{name:`boolean`},description:`If set, Label appears as a tag. \r
@default false`},attached:{required:!1,tsType:{name:`union`,raw:`'left' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:"Determine if Label is attached to anything, `left` or `right`."},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`onClick events are passed through to the Label's HTML element.`},isLabel:{defaultValue:{value:`true`,computed:!1},required:!1}}}})))()}export{j as n,N as r,M as t};