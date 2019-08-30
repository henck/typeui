import * as React from 'react';
import styled from '../../styles/Theme';
import { Size } from '../Types';
import { IImageProps } from './Image';

interface IImageGroupProps {
  className?: string;
  /** Sets image size: mini, tiny, small, medium (default), large, big, huge or massive. */
  size?: Size;  
  /** Add border */
  bordered?: boolean;
  /** Round image corners */
  rounded?: boolean;
  /** Cicular image (works only for square images) */
  circular?: boolean;
}

class ImageGroupBase extends React.Component<IImageGroupProps, {}> {
  render() {
    let p = this.props;

    // Build a list of properties to pass along to child images.
    let props: IImageProps = {};
    if(p.size) props.size = p.size;
    if(p.bordered) props.bordered = p.bordered;
    if(p.rounded) props.rounded = p.rounded;
    if(p.circular) props.circular = p.circular;

    return (
      <div className={p.className}>
        {React.Children.map(this.props.children, (child:any) => {
          return React.cloneElement(child, props);
        })}
      </div>
    )
  }  
}

/* Styling for Image Group. */
const ImageGroupStyled = styled(ImageGroupBase)`
  display: flex;
  & > *:not(:first-child) {
    margin-left: 10px;
  }
`;

class ImageGroup extends React.Component<IImageGroupProps, {}> {
  render() {
    let p = this.props;
    return (
      <ImageGroupStyled {...p}/>
    )
  }  
}

export { ImageGroup };