import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{n,o as r,r as i,s as a}from"./Theme-DNNvCs1s.js";import{n as o}from"./iframe-BMOsmv_G.js";import{n as s,t as c}from"./darken-Ccl44O0b.js";var l,u,d,f;function p(){return(p=e((()=>{t(),a(),n(),s(),l=o(),u=e=>(0,l.jsxs)(`label`,{className:e.className,children:[(0,l.jsx)(`input`,{name:e.name,type:e.radio?`radio`:`checkbox`,value:e.value===null?void 0:e.value,checked:e.checked!==null&&e.checked,disabled:e.disabled,onChange:t=>{let n=e.radio?t.target.value:t.target.checked;e.onChange&&e.onChange(n)}}),(0,l.jsx)(`div`,{children:(0,l.jsx)(`svg`,{children:(0,l.jsx)(`use`,{xlinkHref:`/spritemap.svg#check`})})}),(0,l.jsx)(`span`,{children:e.label})]}),d=i(u).attrs(e=>({borderColor:e.error?e.theme.errorColor.border:e.theme.normalColor,checkedColor:e.error?e.theme.errorColor.border:e.theme.primaryColor,hoverColor:e.error?e.theme.errorColor.border:c(.1,e.theme.normalColor)}))`
  display: inline-block;
  position: relative;
  padding-left: ${e=>!e.type||e.type===`check`||e.type===`circle`?26:46}px;
  padding-right: 16px;
  line-height: 17px;
  cursor: pointer;
  outline: none;

  /* The clickable div. */
  & > div {
    position: absolute;
    box-sizing: border-box;
    left: 0;
    top: 0;
  }

  svg {
    display: none;  
  }

  /* Clickable div: checkbox case */
  ${e=>(!e.type&&!e.radio||e.type===`check`)&&r`
    & > div {
      width: 17px;
      height: 17px;
      border: solid 1px ${e.borderColor};
      border-radius: ${e.theme.radius}px;
      transition: border-color 0.1s ease;
    }
    ${!e.disabled&&!e.error&&r`
      &:hover > div {
        border-color: ${e.hoverColor};
      }
    `}

    svg {
      position: absolute;
      left: 0;
      top: 0;
      width: 15px;
      height: 15px;
      fill: #fff;
    }    

    input:checked + div {
      border-color: ${e.checkedColor};
      background: ${e.checkedColor};
      svg {
        display: block;
      }
    }    
  `}

  /* Clickable div: circle case */
  ${e=>(!e.type&&e.radio||e.type===`circle`)&&r`
    & > div {
      width: 17px;
      height: 17px;
      border: solid 1px ${e.borderColor};
      border-radius: 50%;
      transition: border-color ${e.theme.transition.duration}s ease;
    }

    ${!e.disabled&&!e.error&&r`
      &:hover > div {
        border-color: ${e.hoverColor};
      }
    `}    

    input:checked + div {
      &:after {
        position: absolute;
        content: '';
        left: 3px;
        top: 3px;
        height: 3px;
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background: ${e.checkedColor};
      }
    }    
  `}  

  /* Clickable div: Toggle/Slider case */
  ${e=>(e.type===`toggle`||e.type===`slider`)&&r`
    & > div {
      width: 36px;
      height: ${e.type===`toggle`?17:3}px;
      border-radius: ${e.type===`toggle`?8.5:2}px;
      ${e.type===`slider`&&r`
        margin-top: 7px;
        margin-bottom: 7px;
      `}
      background-color: ${e.borderColor};
      transition: background-color 0.1s ease;
      &:after {
        position: absolute;
        content: '';
        z-index: 1;
        left: 0;
        top: ${e.type===`toggle`?0:-7}px;
        width: 17px;
        height: 17px;
        border-radius: 50%;
        background: #fff linear-gradient(transparent, rgba(0,0,0,.05));
        box-shadow: 0 1px 2px 0 rgba(34,36,38,.15), 0 0 0 1px rgba(34,36,38,.15) inset;
        transition: left 0.2s ease;
      }
    }

    ${!e.disabled&&!e.error&&r`
      &:hover > div {
        background: ${e.hoverColor};
      }
    `}    

    input:checked + div {
      background-color: ${e.checkedColor};
      &:after {
        left: 19px;
      }
      &:hover {
        background-color: ${c(.1,e.checkedColor)};
      }
    }
  `}

  /* The input[type='checkbox'] itself is not visible. */
  input {
    display: none;
  }

  /* The label is shifted slightly to align with the checkbox div. */
  span {
    display: inline-block;
    padding-top: 1px;
    ${e=>e.disabled&&r`
      color: #aaa;
    `}
  }
`,f=e=>(0,l.jsx)(d,{...e}),f.__docgenInfo={description:`A Checkbox can be used to create either a HTML checkbox or a HTML radio button.\r
\r
@example \r
<Checkbox label="One" name="myradio" radio value={1}/>\r
<Checkbox label="Two" name="myradio" radio value={2}/>\r
\r
@link https://henck.github.io/typeui/?path=/story/controls-checkbox--properties`,methods:[],displayName:`Checkbox`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},name:{required:!1,tsType:{name:`string`},description:`Checkbox name.`},value:{required:!1,tsType:{name:`any`},description:`Radio value`},checked:{required:!1,tsType:{name:`boolean`},description:`Is the Checkbox currently checked?`},label:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Checkbox label. Appears to the right of the box. Can be JSX.`},radio:{required:!1,tsType:{name:`boolean`},description:`Is this a radio button?`},type:{required:!1,tsType:{name:`union`,raw:`'check' | 'toggle' | 'slider' | 'circle'`,elements:[{name:`literal`,value:`'check'`},{name:`literal`,value:`'toggle'`},{name:`literal`,value:`'slider'`},{name:`literal`,value:`'circle'`}]},description:"Checkbox visual style: `check`, `toggle`, `slider` or `circle`. Default is `check`. \r\n@default check"},disabled:{required:!1,tsType:{name:`boolean`},description:`A disabled checkbox cannot be interacted with. \r
@default false`},error:{required:!1,tsType:{name:`boolean`},description:`If set, show an error state. \r
@default false`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: any) => void`,signature:{arguments:[{type:{name:`any`},name:`value`}],return:{name:`void`}}},description:`Listeners are notified whenever the user interacts with the input.`}}}})))()}export{p as n,f as t};