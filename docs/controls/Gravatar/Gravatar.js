import { jsx as _jsx } from "react/jsx-runtime";
// Helpers
import { md5 } from '../../helper/md5';
// Other controls
import { Image } from '../Image/Image';
/**
 * A Gravatar shows a generated image based on an email address, as provided by the gravatar service.
 *
 * @example
 * <Gravatar email="john.smith@email.com"/>
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-gravatar--properties
 */
const Gravatar = (props) => _jsx(Image, { avatar: !props.size, size: props.size, bordered: true, circular: true, onClick: props.onClick, src: props.email
        ? `https://www.gravatar.com/avatar/${md5(props.email.toLowerCase().trim())}?d=mp&r=g`
        : `https://www.gravatar.com/avatar/?d=mp&r=g&f=y` });
export { Gravatar };
