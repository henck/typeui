import * as React from 'react';
import styled from '../../styles/Theme';
import { keyframes, css } from 'styled-components';

// Types
import { Size } from '../Types';

interface IImageLoaderProps {
  /** @ignore */
  className?: string;
  /** @ignore */
  children?: React.ReactNode;
  // Are we in an error state?
  error: boolean;
  // Image size, if any.
  size?: Size;
  // Is this an avatar? That will give it height
  avatar?: boolean;
}

/**
 * The ImageLoader serves two purposes:
 * - While the image is still loading, it gives a temporary height
 *   to the space the image will occupy. It assumes that the image
 *   is square. It shows a loading animation.
 * - In case of a load error, the ImageLoader displays the Image
 *   control's children, which should contain an error message.
 *   The loading animation is removed.
 */
const ImageLoaderBase = (props: IImageLoaderProps) =>
  <span className={props.className}>
    {props.error && props.children}
    <span></span>
  </span>

// Background animation
const shimmer = keyframes`
  from { transform: translateX(-50%); }
  to   { transform: translateX(0); }
`;

const ImageLoader = styled(ImageLoaderBase)`
  position: relative;
  display: block;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  ${p => p.error && css`background: #f0f0f0;`}

  /* Background animation. 
     This is done using an underlying absolute positioned div, which is transformed, 
     rather than using background-position animation. This way, the animation is 
     smoother and GPU-accelerated. */
  ${p => !p.error && css`
    & > span:last-child {
      position: absolute;
      left: 0;
      top: 0;
      right: -150%;
      bottom: 0;
      z-index: -1;
      background-color: #fff;
      background-image: linear-gradient(to right, rgba(0,0,0,0.08) 0px, rgba(0, 0, 0, 0.08) 43%, rgba(0, 0, 0, 0.15) 50%, rgba(0, 0, 0, 0.08) 57%);
      animation: ${shimmer} 1s linear infinite;                
    }          
  `}

  /* Height 
   * Use 'auto' if no size given. If there is a size,
   * then the image is assumed to be square.
   */
  ${p => p.size === 'mini' && css`height: 35px;`}
  ${p => p.size === 'tiny' && css`height: 80px;`}
  ${p => p.size === 'small' && css`height: 150px;`}
  ${p => p.size === 'medium' && css`height: 300px;`}
  ${p => p.size === 'large' && css`height: 450px;`}
  ${p => p.size === 'big' && css`height: 600px;`}
  ${p => p.size === 'huge' && css`height: 900px;`}
  ${p => p.size === 'massive' && css`height: 1200px;`}
  ${p => !p.size && css`height: auto;`}
  ${p => p.avatar && css`height:28px;`}

  /* Take any children and position them in the middle
     of the ImageLoader. */
  > * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }  
`;

export { ImageLoader }
