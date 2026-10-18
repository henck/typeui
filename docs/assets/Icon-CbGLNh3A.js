import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{i as r,n as i,o as a,r as o,s}from"./Theme-DNNvCs1s.js";import{n as c}from"./iframe-BMOsmv_G.js";import{n as l,t as u}from"./lighten-BkId_tvD.js";function d(e){switch(e){case`minorSecond`:return 1.067;case`majorSecond`:return 1.125;case`minorThird`:return 1.2;case`majorThird`:return 1.25;case`perfectFourth`:return 1.333;case`augFourth`:return 1.414;case`perfectFifth`:return 1.5;case`minorSixth`:return 1.6;case`goldenSection`:return 1.618;case`majorSixth`:return 1.667;case`minorSeventh`:return 1.778;case`majorSeventh`:return 1.875;case`octave`:return 2;case`majorTenth`:return 2.5;case`majorEleventh`:return 2.667;case`majorTwelfth`:return 3;case`doubleOctave`:return 4}}function f(e,t,n){t===0&&(t=1);let r=d(n);return t*r**+e}function p(e){return e||=`medium`,{mini:-3,tiny:-2,small:-1,medium:0,large:1,big:2,huge:3,massive:4}[e]}function m(e,t,n){return f(p(e),t,n)}function h(){return(h=t((()=>{})))()}var g,_,v,y,b,x;function S(){return(S=t((()=>{g=e(n()),i(),s(),u(),_=c(),v=class extends g.Component{render(){let e=this.props;return(0,_.jsxs)(`svg`,{className:e.className,onClick:e.onClick,focusable:`false`,children:[e.title&&(0,_.jsx)(`title`,{children:e.title}),e.name&&(0,_.jsx)(`use`,{xlinkHref:`/spritemap.svg#`+e.name}),e.url&&(0,_.jsx)(`use`,{xlinkHref:e.url})]})}},y=r`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`,b=o(v).attrs(e=>({hasBorder:e.circular||e.bordered||e.cornered,hasBackground:(e.circular||e.bordered||e.cornered)&&e.inverted,emSize:m(e.size?e.size:`medium`,1,e.theme.scale.icon)}))`
  shape-rendering: geometricPrecision;
  
  /* Spacing around icon. */
  ${e=>e.padded&&a`margin: 2px;`}

  /* Clickable icons have a hover animation. */
  ${e=>e.onClick&&a`cursor: pointer;`}

  /* Floating */
  ${e=>e.float===`left`&&a`float:left;`}
  ${e=>e.float===`right`&&a`float:right;`}  

  /* Disabled */
  ${e=>e.disabled&&a`opacity: 0.6;`}

  /* Sizes. We use the precalculated 'em' size values. */  
  width: ${e=>e.emSize}em;  
  height: ${e=>e.emSize}em;
  /* Don't be squished when in a flex: */
  min-width: ${e=>e.emSize}em;  
  min-height: ${e=>e.emSize}em;

  /* Transformations */
  ${e=>e.flipped&&a`transform: scaleY(-1);`}
  ${e=>e.mirrored&&a`transform: scaleX(-1);`}
  ${e=>e.rotated&&a`transform: rotate(${e.rotated}deg);`}

  /* Border radius, for circular and cornered: */
  ${e=>e.circular&&a`border-radius: 50%;`}
  ${e=>e.cornered&&a`border-radius: ${e.theme.radius}px;`}

  /* Icon colors */
  ${e=>!e.hasBackground&&a`
    ${e.hasBorder&&a`padding: 4px;`}
    fill: ${e.color?e.color:e.theme.fontColor};
    /* Note that the border thickness uses the pre-calculated 'em' size value, with the 'em' removed. */
    ${e.hasBorder&&a`border: solid ${e.emSize}px ${e.color?e.color:e.theme.normalColor};`}
    ${e.onClick&&a`
      transition: fill ${e.theme.transition.duration} ease, border-color ${e.theme.transition.duration} ease;
      &:hover {
        ${e.hasBorder&&a`border-color: ${l(.3,e.color?e.color:e.theme.normalColor)};`}
        fill: ${l(.3,e.color?e.color:e.theme.fontColor)};
      }
    `}
  `}
  ${e=>e.hasBackground&&a`
    padding: 5px;
    fill: #fff;
    background: ${e.color?e.color:e.theme.fontColor};
    ${e.onClick&&a`
      transition: background-color ${e.theme.transition.duration} ease;
      &:hover {
        background: ${l(.5,e.color?e.color:e.theme.fontColor)};
      }    
    `}
  `}

  /* Loading */
  ${e=>e.loading&&a`
    animation: ${y} 2s linear infinite;
  `}
`,x=class extends g.Component{constructor(...e){super(...e),this.render=()=>(0,_.jsx)(b,{...this.props})}static{this.defaultProps={isIcon:!0}}},v.__docgenInfo={description:``,methods:[],displayName:`IconBase`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},name:{required:!1,tsType:{name:`union`,raw:`'area-chart'\r
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
@default false`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:"An icon can have an `onClick` handler."}}},x.__docgenInfo={description:`Displays an icon.\r
\r
@link https://henck.github.io/typeui/?path=/story/controls-icon--properties`,methods:[{name:`render`,docblock:null,modifiers:[],params:[],returns:null}],displayName:`Icon`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},name:{required:!1,tsType:{name:`union`,raw:`'area-chart'\r
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
@default false`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:"An icon can have an `onClick` handler."},isIcon:{defaultValue:{value:`true`,computed:!1},required:!1}}}})))()}export{f as a,h as i,b as n,m as o,S as r,x as t};