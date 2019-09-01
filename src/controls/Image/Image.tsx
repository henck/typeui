import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';

// Types
import { Size, Float, VerticalAlignment } from '../Types';

// Other controls
import { Img } from './Img';
import { ImageGroup } from './ImageGroup';
import { ImageLoader } from './ImageLoader';

interface IImageProps {
  className?: string;
  children?: React.ReactNode;
  /** onClick events are passed through to the list item's HTML element */
  onClick?: any;
  /** Image source URL. */
  src?: string;
  /** Sets image size: `mini`, `tiny`, `small`, `medium` (default), `large`, `big`, `huge` or `massive`. */
  size?: Size;  
  /** Add border. */
  bordered?: boolean;
  /** Round image corners. */
  rounded?: boolean;
  /** Cicular image (ellipical for non-square images). */
  circular?: boolean;
  /** A fluid image takes up the width of its container. */
  fluid?: boolean;
  /** An avatar image appears inline and circular.  */
  avatar?: boolean;
  /** Set as centered content block. */
  centered?: boolean;
  /** Make image inline. */
  inline?: boolean;
  /** Extra space between inline image and text, either both or `left` or `right`. Implies inline. */
  spaced?: boolean | Float;
  /** An image can float `left` or `right`. */
  float?: Float;
  /** Alt text. */
  alt?: string;
  /** Title text. */
  title?: string;  
  /** Hide the image. */
  hidden?: boolean;
  /** Disable the image. */
  disabled?: boolean;
  /** Vertical alignment `top`, `center` or `bottom` (by default `center`) */
  align?: VerticalAlignment;
}

/* An image can be in one of the following states: */
type TImageState = 'loading' | 'loaded' | 'error';
interface IImageState {
  readonly state: TImageState;
}

class ImageBase extends React.Component<IImageProps, IImageState> {
  // Images start off in 'loading' state.
  readonly state: IImageState = {
    state: 'loading'
  }

  readonly onLoad = () => {
    this.setState(() => ({ state: 'loaded' }));
  }  

  readonly onError = () => {
    this.setState(() => ({ state: 'error' }));
  }    

  render() {
    let p = this.props;

    // Note that <img> needs a <span> around it, because
    // <img> itself does not support :before and :after because
    // it cannot contain text content.
    return (
      <span className={p.className} onClick={p.onClick}>
        {this.state.state!='loaded' && <ImageLoader avatar={p.avatar} size={p.size} error={this.state.state=='error'}>{p.children}</ImageLoader>}
        {this.state.state!='error' && <Img src={p.src} loaded={this.state.state=='loaded'} onLoad={this.onLoad} onError={this.onError} alt={p.alt} title={p.title}/>}
      </span>
    )
  }  
}

/* Styling for Image. */
const ImageStyled = styled(ImageBase)`
  box-sizing: border-box;
  flex-shrink: 0;
  /* For ImgMessage overlay positioning: */
  position: relative;
  /* If unsized images fails to load, make sure <span> at 
     least has *some* height. */
  min-height: 24px; 

  /* Display. By default block, unless inline or avatar. */
  ${p => !p.hidden && (p.inline || p.spaced || p.avatar) && css`
    display: inline-block;
  `}
  ${p => !p.hidden && !p.inline && !p.spaced && !p.avatar && css`
    display: block;
  `}
  /* The entire image can be hidden. */
  ${p => p.hidden && css`display:none;`}

  /* Whatever the image size, it will never be wider than
   * the container space available. */
  max-width: 100%;
  line-height: 0px; /* Otherwise <span> will add extra padding. */
  
  /* By default, inline images are vertically aligned to middle. */ 
  ${p => (!p.align || p.align === 'center') && css`vertical-align: middle;`}
  ${p => p.align === 'top' && css`vertical-align: top;`}
  ${p => p.align === 'bottom' && css`vertical-align: bottom;`}

  /* Size */
  /* Use 'auto' if no size given. */
  ${p => p.size === 'mini' && css`width: 35px;`}
  ${p => p.size === 'tiny' && css`width: 80px;`}
  ${p => p.size === 'small' && css`width: 150px;`}
  ${p => p.size === 'medium' && css`width: 300px;`}
  ${p => p.size === 'large' && css`width: 450px;`}
  ${p => p.size === 'big' && css`width: 600px;`}
  ${p => p.size === 'huge' && css`width: 900px;`}
  ${p => p.size === 'massive' && css`width: 1200px;`}
  ${p => !p.size && css`width: auto;`}

  ${Img}, ${ImageLoader} {
    /* Bordered */
    ${p => p.bordered && css`border: solid 1px rgba(0, 0, 0, 0.1);`}
    /* Rounded */
    ${p => p.rounded && css`border-radius: ${p.theme.radius}px;`}
    /* Circular, Avatar */
    ${p => (p.circular || p.avatar) && css`border-radius: 50%;`}
  }

  /* Fluid */
  ${p => p.fluid && css`width:100%;`}

  /* Avatar */ 
  ${p => p.avatar && css`
    width: 28px;
  `}

  /* Centered */
  ${p => p.centered && css`
    margin-left:auto;
    margin-right:auto;    
  `}

  /* Spaced */ 
  ${p => p.spaced && css`margin-left: 6px; margin-right: 6px;`}
  ${p => p.spaced === 'left' && css`margin-right: 0;`}
  ${p => p.spaced === 'right' && css`margin-left: 0;`}

  /* Floating */
  ${p => p.float === 'left' && css`float:left; margin-bottom: 13px; margin-right: 13px;`}
  ${p => p.float === 'right' && css`float:right; margin-bottom: 13px; margin-left: 13px;`}      

  /* onClick */
  ${p => p.onClick && css`cursor:pointer;`}

  /* Disabled */
  ${p => p.disabled && css`filter: brightness(1.2);`}
`;

class Image extends React.Component<IImageProps, {}> {
  public static displayName = "Image";
  public static Group = ImageGroup;

  render() {
    let p = this.props;

    return (
      <ImageStyled {...p}></ImageStyled>
    )
  }  
}

(Image.Group as any).displayName = "Image.Group";

export { Image, IImageProps, ImageStyled };