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
  /** @ignore */
  className?: string;
  /** @ignore */
  children?: React.ReactNode;
  /** Image source URL. */
  src?: string;
  /** Sets image size: `mini`, `tiny`, `small`, `medium` (default), `large`, `big`, `huge` or `massive`. */
  size?: Size;  
  /** 
   * Add border. 
   * @default false 
   */
  bordered?: boolean;
  /** 
   * Round image corners. 
   * @default false 
   */
  rounded?: boolean;
  /** 
   * Cicular image (ellipical for non-square images). 
   * @default false 
   */
  circular?: boolean;
  /** 
   * A fluid image takes up the width of its container. 
   * @default false 
   */
  fluid?: boolean;
  /** 
   * An avatar image appears inline and circular.  
   * @default false 
   */
  avatar?: boolean;
  /** 
   * Set as centered content block. 
   * @default false 
   */
  centered?: boolean;
  /** 
   * Make image inline. 
   * @default false 
   */
  inline?: boolean;
  /** Extra space between inline image and text, either both or `left` or `right`. Implies inline. */
  spaced?: boolean | Float;
  /** An image can float `left` or `right`. */
  float?: Float;
  /** Alt text. */
  alt?: string;
  /** Title text. */
  title?: string;  
  /** 
   * Hide the image. 
   * @default false 
   */
  hidden?: boolean;
  /** 
   * Disable the image. 
   * @default false 
   */
  disabled?: boolean;
  /** 
   * Vertical alignment `top`, `center` or `bottom` (by default `center`) 
   * @default center 
   */
  align?: VerticalAlignment;
  /** 
   * onClick events are passed through to the list item's HTML element 
   */
  onClick?: () => void;
}

/* An image can be in one of the following states: */
type TImageState = 'loading' | 'loaded' | 'error';

const ImageBase = (props: IImageProps) => {
  // Images start off in 'loading' state.
  const [state, setState] = React.useState<TImageState>('loading');
  
  const onLoad = () => setState('loaded');
  const onError = () => setState('error');

  // Note that <img> needs a <span> around it, because
  // <img> itself does not support :before and :after because
  // it cannot contain text content.
  return (
    <span className={props.className} onClick={props.onClick}>
      {state != 'loaded' && <ImageLoader avatar={props.avatar} size={props.size} error={state=='error'}>{props.children}</ImageLoader>}
      {state != 'error' && <Img src={props.src} loaded={state=='loaded'} onLoad={onLoad} onError={onError} alt={props.alt} title={props.title}/>}
    </span>
  )
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

/**
 * Loads an image.
 * 
 * An Image can have children. These are only shown when the image fails to load. 
 * There should be one child potentially containing other children, otherwise they 
 * will overlap.
 * 
 * @example 
 * <Image
 *  size="medium"
 *  src="http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/image.png-does-not-exist">
 *  <Label>
 *    <Icon name="code" />
 *    Loading error
 *  </Label>
 * </Image>
 * 
 * @link https://henck.github.io/typeui/?path=/story/controls-image--properties
 */
class Image extends React.Component<IImageProps> {
  /**
   * An Image.Group is a group of images can share size, bordered, 
   * rounded and circular attributes. The images are automatically spaced.
   */
  public static Group = ImageGroup;

  render = () => <ImageStyled {...this.props}></ImageStyled>
}

export { Image, IImageProps, ImageStyled }
