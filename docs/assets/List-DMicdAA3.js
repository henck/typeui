import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{n as r,o as i,r as a,s as o}from"./Theme-DNNvCs1s.js";import{n as s}from"./iframe-BMOsmv_G.js";import{n as c,r as l,t as u}from"./Icon-CbGLNh3A.js";import{n as d,r as f}from"./Image-DacXjqKR.js";var p,m,h,g,_;function v(){return(v=t((()=>{p=e(n()),r(),o(),f(),B(),l(),m=s(),h=e=>(0,m.jsxs)(`li`,{className:e.className,onClick:e.onClick,children:[(0,m.jsx)(`div`,{children:p.Children.map(e.children,e=>{if(e!=null)return e.type&&e.type===z?null:e})}),p.Children.map(e.children,e=>{if(e!=null&&e.type&&e.type===z)return e})]}),g=a(h)`
  /* <li> must use display:list-item in order for bullets to show. */
  display: list-item;

  /* Clickable items */
  ${e=>e.onClick&&i`cursor:pointer;`}

  /* Divided list items have a line between them. */
  ${e=>e.divided&&!e.horizontal&&i`
    padding: 2px 0;
    border-bottom: solid 1px #dedede;
    &:last-child {
      border-bottom: none;
    }
  `}
  ${e=>e.divided&&e.horizontal&&i`
    padding: 0 16px;
    border-right: solid 1px #dedede;
    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      padding-right: 0;
      border-right: none;
    }
  `}  

  /* A selection list shows a selection box on hover. */
  ${e=>e.selection&&!e.active&&i`
    padding: 4px 4px;
    background-color: #fff;
    ${!e.divided&&i`
      border-radius: ${e.theme.radius}px;
    `}
    &:hover {
      background-color: #f7f7f7;
    }
  `}

  ${e=>e.active&&i`
    padding: 4px 4px;
    ${!e.divided&&i`
      border-radius: ${e.theme.radius}px;
    `}    
    color: #fff;
    background-color: ${e.theme.primaryColor};
  `}

  /* An animated list item indents on hover. */
  ${e=>e.animated&&i`
    padding-right: 20px;
    &:hover {
      padding-left: 20px;
    }
  `}

  /* Transitions for selection and animated */
  transition: padding 0.2s ease, background-color 0.2s ease;

  /* <li> has an inner <div> show we can apply display:flex. The list item's 
   * children live in the <div>. */
  & > div {
    display: flex;
    justify-content: start;

    /* The first child of the ListItem (an icon, an image, etc. usually)
     * must never shrink. */ 
    & > *:first-child {
      flex-shrink: 0;
    }

    /* Relaxed */
    ${e=>e.relaxed&&e.relaxed!==`very`&&i`padding:6px;`}
    ${e=>e.relaxed&&e.relaxed===`very`&&i`padding:12px;`}

    /* Icon and content alignment. Defaults to 'top'. */
    ${e=>(!e.align||e.align===`top`)&&i`
      align-items: flex-start;
      /* Icons and images get a slight top margin, otherwise they're just not quite in line
       * with the content when align="top". */
      ${c} { margin-top: 4px; }      
      ${d} { margin-top: 4px; }      
    `}
    ${e=>e.align===`center`&&i`align-items: center;`}
    ${e=>e.align===`bottom`&&i`align-items: flex-end;`}
  }
`,_=e=>(0,m.jsx)(g,{...e}),_.__docgenInfo={description:``,methods:[],displayName:`ListItem`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`},align:{required:!1,tsType:{name:`union`,raw:`'top' | 'center' | 'bottom'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'center'`},{name:`literal`,value:`'bottom'`}]},description:"(Not public) Icon and content alignment. Defaults to `top` \r\n@ignore"},divided:{required:!1,tsType:{name:`boolean`},description:`(Not public) Shows division lines between list items. \r
@ignore`},horizontal:{required:!1,tsType:{name:`boolean`},description:`(Not public) Make items appear horizontally. \r
@ignore`},selection:{required:!1,tsType:{name:`boolean`},description:`(Not public) Display selection rectangle on hover. \r
@ignore`},active:{required:!1,tsType:{name:`boolean`},description:`(Not public) Active selection is highlighted. \r
@ignore`},relaxed:{required:!1,tsType:{name:`union`,raw:`'very' | boolean`,elements:[{name:`literal`,value:`'very'`},{name:`boolean`}]},description:"(Not public) Increase negative space around item. Optionally `very`. \r\n@ignore"},animated:{required:!1,tsType:{name:`boolean`},description:`(Not public)Animate list items on hover \r
@ignore`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`onClick events are passed through to the list item's HTML element.`}}}})))()}var y,b;function x(){return(x=t((()=>{n(),l(),y=s(),b=e=>{let{className:t,...n}=e;return(0,y.jsx)(`div`,{className:t,children:(0,y.jsx)(u,{...n})})},b.__docgenInfo={description:``,methods:[],displayName:`ListIcon`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},name:{required:!1,tsType:{name:`union`,raw:`'area-chart'\r
| 'arrow'\r
| 'at' \r
| 'bar-chart'\r
| 'bars' \r
| 'bullhorn'\r
| 'caret-down'\r
| 'caret-up'\r
| 'check'\r
| 'chevron'\r
| 'chevron-double'\r
| 'circle'\r
| 'circle-notch'\r
| 'cloud-upload'\r
| 'code'\r
| 'download'\r
| 'edit'\r
| 'envelope'\r
| 'exchange'\r
| 'eye'\r
| 'eye-slash'\r
| 'file-csv'\r
| 'file-download'\r
| 'file-excel'\r
| 'file-geojson'\r
| 'file-ods'\r
| 'filter'\r
| 'heart-beat'\r
| 'id-card'\r
| 'layers'\r
| 'line-chart'\r
| 'link'\r
| 'lock'\r
| 'minus'\r
| 'plus'\r
| 'save'\r
| 'search'\r
| 'table'\r
| 'th'\r
| 'times'\r
| 'tools'\r
| 'trash'\r
| 'unlock'\r
| 'zoom-extents'\r
| 'zoom-minus'\r
| 'zoom-plus'`,elements:[{name:`literal`,value:`'area-chart'`},{name:`literal`,value:`'arrow'`},{name:`literal`,value:`'at'`},{name:`literal`,value:`'bar-chart'`},{name:`literal`,value:`'bars'`},{name:`literal`,value:`'bullhorn'`},{name:`literal`,value:`'caret-down'`},{name:`literal`,value:`'caret-up'`},{name:`literal`,value:`'check'`},{name:`literal`,value:`'chevron'`},{name:`literal`,value:`'chevron-double'`},{name:`literal`,value:`'circle'`},{name:`literal`,value:`'circle-notch'`},{name:`literal`,value:`'cloud-upload'`},{name:`literal`,value:`'code'`},{name:`literal`,value:`'download'`},{name:`literal`,value:`'edit'`},{name:`literal`,value:`'envelope'`},{name:`literal`,value:`'exchange'`},{name:`literal`,value:`'eye'`},{name:`literal`,value:`'eye-slash'`},{name:`literal`,value:`'file-csv'`},{name:`literal`,value:`'file-download'`},{name:`literal`,value:`'file-excel'`},{name:`literal`,value:`'file-geojson'`},{name:`literal`,value:`'file-ods'`},{name:`literal`,value:`'filter'`},{name:`literal`,value:`'heart-beat'`},{name:`literal`,value:`'id-card'`},{name:`literal`,value:`'layers'`},{name:`literal`,value:`'line-chart'`},{name:`literal`,value:`'link'`},{name:`literal`,value:`'lock'`},{name:`literal`,value:`'minus'`},{name:`literal`,value:`'plus'`},{name:`literal`,value:`'save'`},{name:`literal`,value:`'search'`},{name:`literal`,value:`'table'`},{name:`literal`,value:`'th'`},{name:`literal`,value:`'times'`},{name:`literal`,value:`'tools'`},{name:`literal`,value:`'trash'`},{name:`literal`,value:`'unlock'`},{name:`literal`,value:`'zoom-extents'`},{name:`literal`,value:`'zoom-minus'`},{name:`literal`,value:`'zoom-plus'`}]},description:`Name of sprite from SVG spritesheet to use, e.g. 'caret-down'`},url:{required:!1,tsType:{name:`string`},description:`URL of spritesheet and icon, e.g. 'sprites.svg#arrow'`},title:{required:!1,tsType:{name:`string`},description:`Optional icon popup title.`},disabled:{required:!1,tsType:{name:`boolean`},description:`Disabled icons have a lighter color. \r
@default false`},size:{required:!1,tsType:{name:`union`,raw:`'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive'`,elements:[{name:`literal`,value:`'mini'`},{name:`literal`,value:`'tiny'`},{name:`literal`,value:`'small'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'large'`},{name:`literal`,value:`'big'`},{name:`literal`,value:`'huge'`},{name:`literal`,value:`'massive'`}]},description:"Icon size: `mini`, `tiny`, `small`, `medium` (default), `large`, `big`, `huge` or `massive`."},flipped:{required:!1,tsType:{name:`boolean`},description:`Flip icon vertically. \r
@default false`},mirrored:{required:!1,tsType:{name:`boolean`},description:`Mirror icon horizontally. \r
@default false`},rotated:{required:!1,tsType:{name:`number`},description:"Rotate icon by degrees, e.g. `90` for a quarter rotation to the right. \r\n@default 0"},color:{required:!1,tsType:{name:`string`},description:"Icon color, e.g. `skyblue`."},circular:{required:!1,tsType:{name:`boolean`},description:`Add circular border. \r
@default false`},inverted:{required:!1,tsType:{name:`boolean`},description:`Invert the icon's colors. \r
@default false`},bordered:{required:!1,tsType:{name:`boolean`},description:`Add square border. \r
@default false`},cornered:{required:!1,tsType:{name:`boolean`},description:`Add rounded border. \r
@default false`},loading:{required:!1,tsType:{name:`boolean`},description:`Add a rotation animation. \r
@default false`},float:{required:!1,tsType:{name:`union`,raw:`'left' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:"Floating to the \\`left\\` or \\`right\\`."},padded:{required:!1,tsType:{name:`boolean`},description:`Adds spacing around the icon. \r
@default false`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:"An icon can have an `onClick` handler."}}}})))()}var S,C,w,T;function E(){return(E=t((()=>{n(),r(),o(),S=s(),C=e=>(0,S.jsx)(`div`,{className:e.className,onClick:e.onClick,children:e.children}),w=a(C)`
  /* The first List.Content will always occupy as much space as it can.
   * Possible subsequent List.Content elements will shrink. 
   */
  flex-grow: 0;
  &:first-of-type {
    flex-grow: 1;
  }

  /* Vertical alignment */
  ${e=>e.align==`center`&&i`align-self: center;`}
  ${e=>e.align==`bottom`&&i`align-self: flex-end;`}

  /* Clickable items get hand cursor. */
  ${e=>e.onClick&&i`cursor:pointer;`}

  /* If there is another element before the content, then add some margin. */
  &:not(:first-child) {
    margin-left: 8px;
  }  
`,T=e=>(0,S.jsx)(w,{...e}),T.__docgenInfo={description:``,methods:[],displayName:`ListContent`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`},align:{required:!1,tsType:{name:`union`,raw:`'top' | 'center' | 'bottom'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'center'`},{name:`literal`,value:`'bottom'`}]},description:"Align content item vertically (defaults to `top`)."},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`onClick events are passed through to the list item's HTML element.`}}}})))()}var D,O,k,A;function j(){return(j=t((()=>{n(),r(),D=s(),O=e=>(0,D.jsx)(`div`,{className:e.className,children:e.children}),k=a(O)`
  font-weight: 500;
  line-height: 1em;
  padding-top: 4px;
`,A=e=>(0,D.jsx)(k,{...e}),A.__docgenInfo={description:``,methods:[],displayName:`ListHeader`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`}}}})))()}var M,N;function P(){return(P=t((()=>{n(),M=s(),N=e=>(0,M.jsx)(`div`,{className:e.className,children:e.children}),N.__docgenInfo={description:``,methods:[],displayName:`ListDescription`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`}}}})))()}var F,I,L,R,z;function B(){return(B=t((()=>{F=e(n()),r(),o(),v(),x(),E(),j(),P(),I=s(),L=e=>{let t=F.Children.map(e.children,t=>t==null?null:F.cloneElement(t,{align:e.align,horizontal:e.horizontal,divided:e.divided,selection:e.selection,relaxed:e.relaxed,animated:e.animated}));return(0,I.jsx)(`ul`,{className:e.className,children:t})},R=a(L)`
  ${e=>!e.horizontal&&i`
    display: block;
  `}
  ${e=>e.horizontal&&i`
    display: flex;
  `}

  /* Lists are spaced at top and bottom; this affects sublists. */
  /* margin-top: 4px;
  margin-bottom: 4px; */

  /* Make sure sublevels indent. */
  ul {
    margin-left: 1.5em;
  }

  /* If bulleted, add bullet disc and margin. */
  /* If ordered, add order decimal and margin. */
  ${e=>(e.bulleted||e.ordered)&&i`
    list-style-position: outside;
    /* Horizontal lists get margin inside the <li> */
    ${!e.horizontal&&i`margin-left: 1em;`}
    ${e.horizontal&&i`
      li {
        margin-left: 1.5em;
      }
    `}
  `}
  ${e=>e.bulleted&&i`
    list-style-type: disc;
  `}
  ${e=>e.ordered&&i`
    list-style-type: decimal;
  `}
  ${e=>(e.bulleted||e.ordered)&&e.type&&i`
    list-style-type: ${e.type};
  `}
`,z=e=>(0,I.jsx)(R,{...e}),z.Item=_,z.Icon=b,z.Content=T,z.Header=A,z.Description=N,z.__docgenInfo={description:`@link https://henck.github.io/typeui/?path=/story/controls-list--properties`,methods:[{name:`Item`,docblock:null,modifiers:[`static`],params:[{name:`props`,optional:!1,type:{name:`IListItemProps`,alias:`IListItemProps`}}],returns:null},{name:`Icon`,docblock:null,modifiers:[`static`],params:[{name:`props`,optional:!1,type:{name:`IIconProps`,alias:`IIconProps`}}],returns:null},{name:`Content`,docblock:null,modifiers:[`static`],params:[{name:`props`,optional:!1,type:{name:`IListContentProps`,alias:`IListContentProps`}}],returns:null},{name:`Header`,docblock:null,modifiers:[`static`],params:[{name:`props`,optional:!1,type:{name:`IListHeaderProps`,alias:`IListHeaderProps`}}],returns:null},{name:`Description`,docblock:null,modifiers:[`static`],params:[{name:`props`,optional:!1,type:{name:`IProps`,alias:`IProps`}}],returns:null}],displayName:`List`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`},align:{required:!1,tsType:{name:`union`,raw:`'top' | 'center' | 'bottom'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'center'`},{name:`literal`,value:`'bottom'`}]},description:"Icon and content alignment: `top`, `center` or `bottom`. By default `top`"},divided:{required:!1,tsType:{name:`boolean`},description:`Shows division lines between list items. \r
@default false`},bulleted:{required:!1,tsType:{name:`boolean`},description:`Marks items with a bullet. \r
@default false`},ordered:{required:!1,tsType:{name:`boolean`},description:`Marks items with a number. \r
@default false`},type:{required:!1,tsType:{name:`union`,raw:`'disc' | 'circle' | 'square' | 'decimal' | 'decimal-leading-zero' | 'lower-roman'\r
| 'upper-roman' | 'lower-greek' | 'upper-greek' | 'lower-latin' | 'upper-latin'\r
| 'armenian' | 'georgian' | 'lower-alpha' | 'upper-alpha'`,elements:[{name:`literal`,value:`'disc'`},{name:`literal`,value:`'circle'`},{name:`literal`,value:`'square'`},{name:`literal`,value:`'decimal'`},{name:`literal`,value:`'decimal-leading-zero'`},{name:`literal`,value:`'lower-roman'`},{name:`literal`,value:`'upper-roman'`},{name:`literal`,value:`'lower-greek'`},{name:`literal`,value:`'upper-greek'`},{name:`literal`,value:`'lower-latin'`},{name:`literal`,value:`'upper-latin'`},{name:`literal`,value:`'armenian'`},{name:`literal`,value:`'georgian'`},{name:`literal`,value:`'lower-alpha'`},{name:`literal`,value:`'upper-alpha'`}]},description:"Optional bullet style (HTML values, e.g. `square`). This only has effect on `bulleted` lists."},horizontal:{required:!1,tsType:{name:`boolean`},description:`Make items appear horizontally. \r
@default false`},selection:{required:!1,tsType:{name:`boolean`},description:`Display selection rectangle on hover. \r
@default false`},relaxed:{required:!1,tsType:{name:`union`,raw:`'very' | boolean`,elements:[{name:`literal`,value:`'very'`},{name:`boolean`}]},description:"Increase negative space around items. Optionally `very`. \r\n@default false"},animated:{required:!1,tsType:{name:`boolean`},description:`Animate list items on hover. \r
@default false`}}}})))()}export{B as n,z as t};