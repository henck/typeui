import{a as e,n as t,t as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-DlPsW1c0.js";import{n as i,o as a,r as o,s}from"./Theme-DNNvCs1s.js";import{n as c}from"./iframe-BMOsmv_G.js";import{n as l,t as u}from"./lighten-BkId_tvD.js";import{t as d}from"./Input-B9plWmXf.js";import{t as f}from"./Input-DQRcmSVK.js";var p,m;function h(){return(h=t((()=>{p=e(r()),m=class extends p.Component{},m.__docgenInfo={description:``,methods:[],displayName:`Column`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(item:any) => React.ReactNode`,signature:{arguments:[{type:{name:`any`},name:`item`}],return:{name:`ReactReactNode`,raw:`React.ReactNode`}}},description:``},weight:{required:!1,tsType:{name:`number`},description:`Column weight. Defaults to 1. 
@default 1`},align:{required:!1,tsType:{name:`union`,raw:`'left' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:"Text alignment to the \\`left\\` or \\`right\\`. Defaults to `left`. \n@default left"}}}})))()}var g=n(((e,t)=>{t.exports=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=void 0,o=void 0,s=void 0,c=[];return function(){var u=n(t),d=new Date().getTime(),f=!a||d-a>u;a=d;var p=[...arguments];if(f&&i.leading)return i.accumulate?Promise.resolve(e.call(this,[p])).then(function(e){return e[0]}):Promise.resolve(e.call.apply(e,[this].concat(p)));if(o?clearTimeout(s):o=r(),c.push(p),s=setTimeout(l.bind(this),u),i.accumulate){var m=c.length-1;return o.promise.then(function(e){return e[m]})}return o.promise};function l(){var t=o;clearTimeout(s),Promise.resolve(i.accumulate?e.call(this,c):e.apply(this,c[c.length-1])).then(t.resolve,t.reject),c=[],o=null}};function n(e){return typeof e==`function`?e():e}function r(){var e={};return e.promise=new Promise(function(t,n){e.resolve=t,e.reject=n}),e}}));function _(e){var t=null,n=null,r=new Promise(function(e,r){t=e,n=r});return e&&e.then(function(e){t&&t(e)},function(e){n&&n(e)}),{promise:r,resolve:function(e){t&&t(e)},reject:function(e){n&&n(e)},cancel:function(){t=null,n=null}}}function v(e){var t=null;return function(){var n=[...arguments];t&&t();var r=_(e.apply(void 0,n)),i=r.promise;return t=r.cancel,i}}function y(){return(y=t((()=>{})))()}function ee(e,t,n){var r=new C({func:e,wait:t,options:x({},S,n)});return(function(){var e=[...arguments];return r.getDebouncedFunction(e).func.apply(void 0,e)})}var b,x,S,C;function w(){return(w=t((()=>{b=e(g()),y(),x=function(){return x=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},x.apply(this,arguments)},S={key:function(){return null},onlyResolvesLast:!0},C=function(){function e(e){this.config=e,this.debounceSingleton=null,this.debounceCache={}}return e.prototype._createDebouncedFunction=function(){var e=(0,b.default)(this.config.func,this.config.wait,this.config.options);return this.config.options.onlyResolvesLast&&(e=v(e)),{func:e}},e.prototype.getDebouncedFunction=function(e){var t,n=(t=this.config.options).key.apply(t,e);return n==null?(this.debounceSingleton||=this._createDebouncedFunction(),this.debounceSingleton):(this.debounceCache[n]||(this.debounceCache[n]=this._createDebouncedFunction()),this.debounceCache[n])},e}()})))()}var T,E,D;function O(){return(O=t((()=>{r(),i(),s(),T=c(),E=e=>(0,T.jsx)(`div`,{className:e.className,children:e.item!==null&&e.children(e.item)}),D=o(E)`
  box-sizing: border-box;
  padding: 16px 12px;
  height: 56px;

  flex: ${e=>e.weight?e.weight:1};

  /* Text alignment */
  ${e=>e.align===`right`&&a`text-align: right;`}

  /* Text is truncated with an ellipsis. */
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: hidden;
  text-overflow: ellipsis;

  /* Space between cells. */
  &:not(:last-child) {
    margin-right: ${e=>e.gap??16}px;
  }
`})))()}var k,te,A;function j(){return(j=t((()=>{r(),s(),i(),k=c(),te=e=>(0,k.jsx)(`div`,{className:e.className,onClick:e.onClick,children:e.children}),A=o(te)`
  /* Entire row is clickable: */
  cursor: pointer;

  /* Cells are flex-aligned: */
  display: flex;

  /* Row has a top/bottom border depending on opening direction. */
  ${e=>e.upwards&&a`
      border-bottom: solid 1px ${e.theme.normalColor};
  `}
  ${e=>!e.upwards&&a`
    border-top: solid 1px ${e.theme.normalColor};
  `}

  /* Background color on hover: */
  transition: background-color ${e=>e.theme.transition.duration}s ease;
  &:hover {
    background: ${e=>e.theme.normalColor};
  }
`})))()}var M,N,P,F,I,L,ne;function re(){return(re=t((()=>{M=e(r()),i(),s(),u(),f(),N=c(),P=e=>(0,N.jsxs)(`div`,{className:e.className,children:[e.onSearch&&(0,N.jsx)(I,{children:(0,N.jsx)(d,{icon:`search`,clearable:!0,error:e.error,value:e.search,transparent:!0,fluid:!0,type:`text`,onChange:e.onSearch})}),(0,N.jsx)(L,{children:e.children})]}),F=6,I=o.div`
`,L=o.div`
`,ne=o(P).attrs(e=>({totalHeight:(Math.min(M.Children.count(e.children),e.maxItems?e.maxItems:F)+ +!!e.onSearch)*57+1,totalInnerHeight:Math.min(M.Children.count(e.children),e.maxItems?e.maxItems:F)*57+1}))`
  position:       absolute;
  z-index:        100;
  box-sizing:     border-box;
  height:         1000px; /* We animate max-height based on child count. */
  overflow-y:     hidden;
  ${e=>!e.inline&&a`width: 100%;`}
  // Inline fill be placed over thick FieldWrapper's border.
  ${e=>e.inline&&a`left: -2px; right: -2px;`}

  /* Border is grey, unless error. */
  border:         solid ${e=>e.inline?2:1}px ${e=>e.theme.normalColor};
  border-radius:  ${e=>e.theme.radius}px;

  /* Background is theme background */
  background:     ${e=>e.theme.background};

  /* Dropbox can open upwards or downwards. This affects its
     positioning relative to the parent. */
  ${e=>e.upwards&&a`
    bottom: calc(100% - 1px);
    /* Box-shadow is only at top(spread = -1px). */
    box-shadow:     rgba(34, 36, 38, 0.2) 0 -2px 2px -1px;    
    ${!e.inline&&a`
      border-bottom: none;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;      
    `}
    ${e.inline&&a`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
    `}
  `}
  ${e=>!e.upwards&&a`
    top: calc(100% - 1px);
    /* Box-shadow is only at bottom (spread = -1px). */
    box-shadow:     rgba(34, 36, 38, 0.2) 0 2px 2px -1px;
    ${!e.inline&&a`
      border-top: none;
      border-top-left-radius: 0px;
      border-top-right-radius: 0px; 
    `}
    ${e.inline&&a`
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-top: none;
    `}    
  `}

  /* Border color, max-height and opacity are transitioned 
     as Body opens and closes. */
  /* In a previous iteration, this worked with scaleY rather
     than max-height. It turns out that applying a transformation
     causes fractional pixel problems on its element. Since 
     Dropdown can be part of a flex, fractional pixels
     will occur. */
  transition: opacity ${e=>e.theme.transition.duration*3}s ease-in-out, 
              max-height ${e=>e.theme.transition.duration*3}s ease-out, 
              border-color ${e=>e.theme.transition.duration*3}s ease-in-out;
  opacity: 0;
  max-height: 0;
  ${e=>e.open&&a`
    transition: opacity ${e=>e.theme.transition.duration*3}s ease-in, 
                max-height ${e=>e.theme.transition.duration*3}s ease-in, 
                border-color ${e=>e.theme.transition.duration*3}s ease-in;
    border-color: ${e=>l(.25,e.theme.primaryColor)};
    opacity: 1;
    max-height: ${e.totalHeight}px;
  `}

  ${L} {
    overflow-x:     hidden;
    /* If there are more children than MAX_CHILDREN_VISIBLE, 
       then the body content scrolls vertically. */
    overflow-y:     ${e=>M.Children.count(e.children)>(e.maxItems?e.maxItems:F)?`scroll`:`hidden`};
    height:         ${e=>e.totalInnerHeight}px;
  }

  ${I} {
    box-sizing: border-box;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 10px;
    height: 56px;
    ${e=>e.error&&a`background: ${e.theme.errorColor.background};`}
  }
`})))()}var R,z,B;function V(){return(V=t((()=>{r(),s(),i(),u(),R=c(),z=e=>(0,R.jsxs)(`div`,{className:`${e.className} clickable`,onClick:e.onClick,children:[(0,R.jsxs)(`span`,{children:[e.children,e.children==null?(0,R.jsx)(R.Fragment,{children:`\xA0`}):``]}),(0,R.jsx)(`svg`,{children:(0,R.jsx)(`use`,{xlinkHref:`/spritemap.svg#caret-down`})}),(0,R.jsx)(`svg`,{onClick:t=>{t.stopPropagation(),e.onClear&&e.onClear()},children:(0,R.jsx)(`use`,{xlinkHref:`/spritemap.svg#times`})})]}),B=o(z)`
  position:        relative;
  display:         block;
  box-sizing:      border-box;
  width:           100%;
  cursor:          pointer;
  background:      ${e=>e.theme.background};

  /* Disabled */
  ${e=>e.disabled&&a`
    opacity: 0.5;
    cursor: auto;
  `}  

  &>span {
    display: block;
    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    white-space: nowrap;
    /* Add ellipsis to selection text */
    ${e=>!e.multiple&&a`text-overflow: ellipsis;`}
  }

  /* Inline Dropdowns have no border, but normal Dropdowns do. */
  border:         solid 1px ${e=>e.inline?`transparent`:e.theme.normalColor};
  border-radius:  ${e=>e.theme.radius}px;
  line-height:    17px;
  padding:        9px 30px 9px 14px;
  ${e=>e.multiple&&!e.placeholder&&a`padding: 7px 30px 7px 14px;`}
  min-height:     17px;
  ${e=>e.error&&!e.open&&a`
    background:   ${e.theme.errorColor.background};
    border-color: ${e.inline?`transparent`:e.theme.errorColor.border};
  `}

  /* Placeholder labels will be light in color: */
  ${e=>e.placeholder&&a`
    color: ${e=>l(.6,e.theme.fontColor)};  
  `}

  /* When in error state, color text. */
  ${e=>e.error&&!e.open&&a`
    color: ${e.theme.errorColor.color};
  `}
  
  /* When the Dropdown is open, the selector's bottom edge 
     (or top edge, for upwards) is colored white. */
  transition: border-color ${e=>e.theme.transition.duration*3}s ease-in-out, 
              border-radius ${e=>e.theme.transition.duration*3}s ease-in-out,
              color ${e=>e.theme.transition.duration*3}s ease-in-out,
              background-color ${e=>e.theme.transition.duration*3}s ease-in-out;
  ${e=>e.open&&!e.inline&&a`
    border-color: ${e=>l(.25,e.theme.primaryColor)};
    border-${e.upwards?`top`:`bottom`}-color: #fff;
    border-${e.upwards?`top`:`bottom`}-left-radius: 0px;
    border-${e.upwards?`top`:`bottom`}-right-radius: 0px;
  `}

  /* If parent DIV has focus, give this a border. */
  ${e=>!e.inline&&a`
    div:focus & {
      border-color: ${e=>l(.25,e.theme.primaryColor)};
    }
  `}
  
  /* Icon size and positions: */
  & > svg {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1;
    width: 17px;
    height: 17px;
    margin-left: 0.5em;
  }

  /* Caret icon is only shown when there is an onClear callback. */
  & > svg:nth-of-type(1) {
    display: ${e=>e.onClear?`none`:`block`};
    transition: fill ${e=>e.theme.transition.duration*3}s ease-in-out;
    fill: ${e=>e.error&&!e.open?e.theme.errorColor.color:e.disabled?`#888`:e.theme.fontColor};
  }
  /* Clear icon is only shown when there is an onClear callback. */
  & > svg:nth-of-type(2) {
    fill: ${e=>e.theme.fontColor};
    opacity: 0.7;
    display: ${e=>e.onClear?`block`:`none`};
    transition: opacity ease-in-out 120ms;
    &:hover {
      opacity: 1;
    }
  }
`})))()}var H,U,W;function G(){return(G=t((()=>{r(),i(),u(),H=c(),U=e=>(0,H.jsxs)(`div`,{className:e.className,onClick:t=>{t.stopPropagation(),e.onClick()},children:[e.children,(0,H.jsx)(`svg`,{children:(0,H.jsx)(`use`,{xlinkHref:`/spritemap.svg#times`})})]}),W=o(U)`
  position: relative;
  display: inline-block;
  align-items: center;
  box-sizing: border-box;
  border-radius: ${e=>e.theme.radius}px;
  background: ${e=>e.theme.primaryColor};
  color: #fff;
  padding: 2px 20px 2px 8px;
  margin-right: 4px;
  white-space: nowrap;
  user-select: none;

  &>svg {
    position: absolute;
    right: 5px;
    top: 4px;
    width: 14px;
    height: 14px;    
    fill: #eee;
    transition: fill ${e=>e.theme.transition.duration}s ease;
  }

  transition: background-color ${e=>e.theme.transition.duration}s ease;
  &:hover {
    background: ${e=>l(.1,e.theme.primaryColor)};
    &>svg {
      fill: #fff;
    }
  }

  &.item-enter {
    opacity: 0;
  }
  &.item-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }
  &.item-exit {
    opacity: 1;
  }
  &.item-exit-active {
    opacity: 0;
    transition: opacity 300ms ease-in;
  }  
`})))()}var K,q,J,Y,X;function ie(){return(ie=t((()=>{K=e(r()),i(),w(),O(),j(),re(),V(),G(),q=c(),J=e=>{let t=K.useRef(null),[n,r]=K.useState(!1),[i,a]=K.useState(!1),[o,s]=K.useState(null);K.useEffect(()=>(document.addEventListener(`mousedown`,c),document.addEventListener(`keydown`,v),()=>{document.removeEventListener(`mousedown`,c),document.removeEventListener(`keydown`,v)}),[]);let c=e=>{let n=e.target;t.current&&!t.current.contains(n)&&p()},l=e=>{let t=window.getComputedStyle(e).overflowY;return t==`scroll`||t==`auto`?e:e.parentElement?l(e.parentElement):null},u=()=>l(t.current.parentElement),d=()=>{let n=u();if(n==null||e.direction!=`parent`)return t.current.getBoundingClientRect().top>window.innerHeight/2;{let e=t.current.getBoundingClientRect().top,r=n.getBoundingClientRect().top,i=n.getBoundingClientRect().height;return e-r>i/2}},f=()=>{let n=d();e.direction==`down`?a(!1):e.direction==`up`?a(!0):a(n),r(!0),e.resetOnOpen&&s(null),e.onSearch&&(t.current.querySelector(`input`).focus(),t.current.children[1].scrollTop=0)},p=()=>{r(!1),e.onClose&&setTimeout(e.onClose,300)},m=()=>{e.disabled||(n?p():f())},h=t=>{t=t.toLowerCase();let n=e.data.filter(e=>e!=null).findIndex(e=>{let n=[];if(typeof e==`object`&&e)for(let t in e)n.push(e[t].toString());else n.push(e.toString());return n.find(e=>e.length>0&&e.charAt(0).toLowerCase()==t)});n!=-1&&b(e.data[n])},g=()=>{let t=e.data.indexOf(e.value)-1;t<0&&(t=0),!(e.data.length<=t)&&b(e.data[t])},_=()=>{let t=e.data.indexOf(e.value)+1;e.data.length<=t||b(e.data[t])},v=r=>{if(document.activeElement!=t.current||e.disabled)return;let i=r.key;if(i==`Escape`||i==`Tab`){if(r.stopPropagation(),!n)return;p()}if(i==` `||i==`Enter`){if(r.stopPropagation(),n)return;f()}i==`ArrowUp`&&(r.stopPropagation(),g()),i==`ArrowDown`&&(r.stopPropagation(),_()),i.length==1&&i.match(/[a-z0-9]/i)&&(r.stopPropagation(),h(i))},y=t=>{p(),e.onChange&&e.onChange(t)},b=t=>{if(e.multiple){let n=e.value;n??=[];let r=JSON.stringify(t);n.find(e=>JSON.stringify(e)==r)||n.push(t),y(n)}else y(t)},x=t=>{let n=e.value,r=JSON.stringify(t),i=n.findIndex(e=>JSON.stringify(e)==r);n.splice(i,1),y(n)},S=()=>{e.multiple?y([]):y(null)},C=ee(t=>e.onSearch(t),350),w=async e=>{s(e),C(e)},T=()=>{let t=1;return e.data.map(n=>(0,q.jsx)(A,{upwards:i,onClick:()=>b(n),children:K.Children.map(e.children,t=>(0,q.jsx)(D,{item:n,gap:e.gap,weight:t.props.weight,align:t.props.align,children:t.props.children}))},t++))},E=e.placeholder,O=!0;e.multiple||e.value!==null&&e.value!==void 0&&(E=e.label(e.value),O=!1),e.multiple&&(!Array.isArray(e.value)&&e.value!==null&&e.value!==void 0&&console.error(`In a multiple-selection checkbox, value should be an array.`),e.value!=null&&e.value.length>0&&(O=!1,E=e.value.map((t,n)=>(0,q.jsx)(W,{onClick:()=>x(t),children:e.label(t)},n))));let k=T();return(0,q.jsxs)(`div`,{tabIndex:0,className:e.className,ref:t,children:[(0,q.jsx)(B,{open:n,error:e.error,disabled:e.disabled,upwards:i,inline:e.inline,multiple:e.multiple,onClick:m,onClear:e.clearable&&!O?S:null,placeholder:O,children:E}),(0,q.jsx)(ne,{open:n,upwards:i,inline:e.inline,error:e.error,maxItems:e.maxItems,onSearch:e.onSearch?w:null,search:o,children:k})]})},Y=o(J)`
  display: block;
  position: relative;
  width: 100%;
  outline: none;

  /* If something is attached to the Dropdown, remove its border radius. */
  &:not(:first-child) {
    ${B} {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
  &:not(:last-child) {
    ${B} {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }  
`,X=e=>(0,q.jsx)(Y,{...e}),X.__docgenInfo={description:``,methods:[],displayName:`DropdownInner`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`},name:{required:!1,tsType:{name:`string`},description:`Dropdown name, for use in forms.`},data:{required:!0,tsType:{name:`Array`,elements:[{name:`any`}],raw:`any[]`},description:`Data to show in Dropdown.`},clearable:{required:!1,tsType:{name:`boolean`},description:`Dropdown's value can be cleared. \r
@default false`},label:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(item:any) => React.ReactNode`,signature:{arguments:[{type:{name:`any`},name:`item`}],return:{name:`ReactReactNode`,raw:`React.ReactNode`}}},description:`Label function`},placeholder:{required:!1,tsType:{name:`string`},description:`Placeholder text.`},value:{required:!1,tsType:{name:`any`},description:`Dropdown value. \r
 The value is an object, not an ID!`},disabled:{required:!1,tsType:{name:`boolean`},description:`Marks dropdown as disabled. \r
@default false`},fluid:{required:!1,tsType:{name:`boolean`},description:`A fluid Dropdown occupies all horizontal space available to it. \r
@default false`},inline:{required:!1,tsType:{name:`boolean`},description:`An inline Dropdown has no border. Useful for menu items. \r
@default false`},gap:{required:!1,tsType:{name:`number`},description:`Gap between columns inside Dropdown body, in pixels.\r
@default 16`},error:{required:!1,tsType:{name:`boolean`},description:`If set, Dropdown is in an error state. \r
@default false`},multiple:{required:!1,tsType:{name:`boolean`},description:`If set, allow multiple selection. \r
@default false`},resetOnOpen:{required:!1,tsType:{name:`boolean`},description:`If true, the search query is reset when dropdown is opened \r
(This only applies to dropdowns with an \`onSearch\` callback.)\r
@default false`},maxItems:{required:!1,tsType:{name:`number`},description:`Max items to display before a scrollbar is added. Defaults to 6. \r
@default 6`},direction:{required:!1,tsType:{name:`union`,raw:`'up' | 'down' | 'parent'`,elements:[{name:`literal`,value:`'up'`},{name:`literal`,value:`'down'`},{name:`literal`,value:`'parent'`}]},description:`The Dropdown opening direction can be either fixed\r
(\`up\` or \`down\`), or depend on the nearest scrolling parent: if the Dropdown\r
is in the top half of the visible section of the parent, then it opens\r
downward, and vice-versa. If this property is not set, then the opening\r
direction is determined from the Dropdown position in the viewport.`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: any) => void`,signature:{arguments:[{type:{name:`any`},name:`value`}],return:{name:`void`}}},description:`Listeners are notified whenever the user interacts with the input.`},onSearch:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(q:string) => void`,signature:{arguments:[{type:{name:`string`},name:`q`}],return:{name:`void`}}},description:`If a search callback is provided, then the Dropdown will have a search box.`},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`If a callback is provided, then listeners are notified when the dropdown is closed.`}}}})))()}var Z,Q,ae,oe,$;function se(){return(se=t((()=>{Z=e(r()),i(),s(),h(),ie(),Q=c(),ae=e=>{let t=(e,t)=>{let n=e.props.attached;return n===t||!n&&t===`left`},n=n=>Z.Children.toArray(e.children).filter(e=>Z.isValidElement(e)&&e.props.isLabel&&t(e,n)).map((e,t)=>{let n=e.props.attached;return n||=`left`,Z.cloneElement(e,{key:t,attached:n})}),r=()=>Z.Children.map(e.children,e=>{if(e.type&&e.type===m)return e}),{className:i,...a}=e;return(0,Q.jsxs)(`div`,{className:i,children:[n(`left`),(0,Q.jsx)(X,{...a,children:r()}),n(`right`)]})},oe=o(ae)`
  position:    relative;
  display:     inline-flex;
  align-items: stretch;
  color:       ${e=>e.theme.fontColor};
  /* Dropdown has a minimum width. */
  width: 250px;
  /* A fluid Dropdown occupies full horizontal width. */
  ${e=>e.fluid&&a`width: 100%;`}  
`,$=e=>(0,Q.jsx)(oe,{...e}),$.Column=m,$.__docgenInfo={description:`A \`Dropdown\` is a replacement for \`<select>\` (select). It opens upwards or \r
downwards depending on its position in the viewport. Its selection and \r
dropdown items are formatted using a formatting function. A Dropdown can \r
also take an \`onSearch\` callback, which tells provides its subscriber with \r
a search query in order to provide the \`Dropdown\` with new items.\r
\r
@example \r
<Dropdown \r
  data={[{id: 1, name: 'One'}, {id: 2, name: 'Two'}, {id: 3, name: 'Three'}]}\r
  label={(item: any) => item.name}\r
  placeholder="Select one"\r
>\r
  <Dropdown.Column>{(item: any) => item.name}</Dropdown.Column>\r
</Dropdown>\r
\r
@link https://henck.github.io/typeui/?path=/story/controls-dropdown--properties`,methods:[],displayName:`Dropdown`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`},name:{required:!1,tsType:{name:`string`},description:`Dropdown name, for use in forms.`},data:{required:!0,tsType:{name:`Array`,elements:[{name:`any`}],raw:`any[]`},description:`Data to show in Dropdown.`},clearable:{required:!1,tsType:{name:`boolean`},description:`Dropdown's value can be cleared. \r
@default false`},label:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(item:any) => React.ReactNode`,signature:{arguments:[{type:{name:`any`},name:`item`}],return:{name:`ReactReactNode`,raw:`React.ReactNode`}}},description:`Label function`},placeholder:{required:!1,tsType:{name:`string`},description:`Placeholder text.`},value:{required:!1,tsType:{name:`any`},description:`Dropdown value. \r
 The value is an object, not an ID!`},disabled:{required:!1,tsType:{name:`boolean`},description:`Marks dropdown as disabled. \r
@default false`},fluid:{required:!1,tsType:{name:`boolean`},description:`A fluid Dropdown occupies all horizontal space available to it. \r
@default false`},inline:{required:!1,tsType:{name:`boolean`},description:`An inline Dropdown has no border. Useful for menu items. \r
@default false`},gap:{required:!1,tsType:{name:`number`},description:`Gap between columns inside Dropdown body, in pixels.\r
@default 16`},error:{required:!1,tsType:{name:`boolean`},description:`If set, Dropdown is in an error state. \r
@default false`},multiple:{required:!1,tsType:{name:`boolean`},description:`If set, allow multiple selection. \r
@default false`},resetOnOpen:{required:!1,tsType:{name:`boolean`},description:`If true, the search query is reset when dropdown is opened \r
(This only applies to dropdowns with an \`onSearch\` callback.)\r
@default false`},maxItems:{required:!1,tsType:{name:`number`},description:`Max items to display before a scrollbar is added. Defaults to 6. \r
@default 6`},direction:{required:!1,tsType:{name:`union`,raw:`'up' | 'down' | 'parent'`,elements:[{name:`literal`,value:`'up'`},{name:`literal`,value:`'down'`},{name:`literal`,value:`'parent'`}]},description:`The Dropdown opening direction can be either fixed\r
(\`up\` or \`down\`), or depend on the nearest scrolling parent: if the Dropdown\r
is in the top half of the visible section of the parent, then it opens\r
downward, and vice-versa. If this property is not set, then the opening\r
direction is determined from the Dropdown position in the viewport.`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: any) => void`,signature:{arguments:[{type:{name:`any`},name:`value`}],return:{name:`void`}}},description:`Listeners are notified whenever the user interacts with the input.`},onSearch:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(q:string) => void`,signature:{arguments:[{type:{name:`string`},name:`q`}],return:{name:`void`}}},description:`If a search callback is provided, then the Dropdown will have a search box.`},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`If a callback is provided, then listeners are notified when the dropdown is closed.`}}}})))()}export{se as n,$ as t};