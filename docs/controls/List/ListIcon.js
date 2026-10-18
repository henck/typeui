import { jsx as _jsx } from "react/jsx-runtime";
// Other controls
import { Icon } from '../Icon/Icon';
const ListIcon = (props) => {
    const { className, ...other } = props;
    return (_jsx("div", { className: className, children: _jsx(Icon, { ...other }) }));
};
export { ListIcon };
