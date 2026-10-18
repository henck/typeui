import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{n,o as r,r as i,s as a}from"./Theme-DNNvCs1s.js";import{n as o}from"./iframe-BMOsmv_G.js";import{n as s,t as c}from"./lighten-BkId_tvD.js";var l,u,d,f;function p(){return(p=e((()=>{t(),a(),n(),c(),l=o(),u=e=>(0,l.jsx)(`textarea`,{className:e.className,name:e.name,value:e.value==null?``:e.value,placeholder:e.placeholder,disabled:e.disabled,rows:e.rows,onChange:t=>{e.onChange&&e.onChange(t.target.value)}}),d=i(u)`
  position: relative;
  display: inline-block;

  /* No resize grip */
  resize: none;

  /* Height */
  ${e=>!e.minHeight&&r`min-height: 80px;`}
  ${e=>e.minHeight&&r`min-height: ${e.minHeight}px;`}

  width:            250px;
  /* Font-size must be redefined or it will be bigger than container font size. */
  font-size:        100%;
  ${e=>e.fluid&&r`width: 100%;`}
  box-sizing:       border-box;
  z-index:          0;
  font-family:      ${e=>e.theme.fontName}, sans-serif;
  font-size:        ${e=>e.theme.fontSize}px;
  line-height:      17px;
  text-align:       left;
  color:            ${e=>e.theme.fontColor};
  border:           solid 1px ${e=>e.theme.normalColor};
  border-radius:    ${e=>e.theme.radius}px;
  outline:          0;
  background-color: ${e=>e.theme.background};
  padding:          9.5px 14px;

  /* Monospaced font */
  ${e=>e.monospaced&&r`font-family: "Monaco", "Menlo", "Ubuntu Mono", "Consolas", "source-code-pro", monospace;`}

  /* Define colors for placeholder text. */
  &::placeholder {
    color: ${e=>s(.6,e.theme.fontColor)};
    opacity: 1 !important; /* Firefox applies opacity */
  }

  /* Define colors for selected text. */
  &::selection {
    background-color: rgba(100,100,100,.4);
    color: ${e=>e.theme.fontColor};
  }

  /* Define colors when input has focus. */
  transition: border-color ${e=>e.theme.transition.duration}s ease;
  &:focus {
    border-color: ${e=>s(.25,e.theme.primaryColor)};
    &::placeholder {
      color: ${e=>s(.4,e.theme.fontColor)};
    }
  }

  /* Make sure HTML5 validation does not show up. */
  &:valid {
    box-shadow: none;
  }
  &:invalid {
    box-shadow: none;
  }

  /* Error */
  ${e=>e.error&&r`
    color: ${e.theme.errorColor.color};
    border-color: ${e.theme.errorColor.border};
    background: ${e.theme.errorColor.background};
    &::placeholder {
      color: ${e.theme.errorColor.color};
    }
    &:focus {
      border-color: ${e.theme.errorColor.border};
    }
    box-shadow: none;
  `}

  /* Disabled */
  ${e=>e.disabled&&r`
    opacity: 0.5;
  `}

  /* Transparent (borderless) */
  ${e=>e.transparent&&r`
    border-width: 0px;
  `}
`,f=e=>(0,l.jsx)(`div`,{className:e.className,children:(0,l.jsx)(d,{...e})}),f.__docgenInfo={description:``,methods:[],displayName:`Textarea`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},name:{required:!1,tsType:{name:`string`},description:`Textarea name.`},value:{required:!1,tsType:{name:`any`},description:`Textarea value.`},placeholder:{required:!1,tsType:{name:`string`},description:`Placeholder to show when the Textarea is empty.`},disabled:{required:!1,tsType:{name:`boolean`},description:`Mark Textarea as disabled. \r
@default false`},transparent:{required:!1,tsType:{name:`boolean`},description:`Removes Textarea border. \r
@default false`},fluid:{required:!1,tsType:{name:`boolean`},description:`Textarea takes up all available horizontal space. \r
@default false`},rows:{required:!1,tsType:{name:`number`},description:`Height in rows.`},minHeight:{required:!1,tsType:{name:`number`},description:`Minimum height in pixels.`},error:{required:!1,tsType:{name:`boolean`},description:`Is the Textarea in an error state? \r
@default false`},monospaced:{required:!1,tsType:{name:`boolean`},description:`If set, Textarea will use a monospaced font. \r
@default false`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: any) => void`,signature:{arguments:[{type:{name:`any`},name:`value`}],return:{name:`void`}}},description:`Listeners are notified whenever the user interacts with the Textarea.`}}}})))()}export{p as n,f as t};