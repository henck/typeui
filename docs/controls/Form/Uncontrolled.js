import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Other controls
import { Hint } from './Hint';
import { Label } from './Label';
import { FieldWrapper } from './FieldWrapper';
const Uncontrolled = (props) => {
    // Get field's label element, if any.
    const getLabel = () => {
        if (props.label)
            return (_jsx(Label, { inline: props.inline, children: props.label }));
        return null;
    };
    return (_jsxs(FieldWrapper, { boxed: props.boxed, width: props.width, children: [getLabel(), props.children, _jsx(Hint, { children: props.hint })] }));
};
export { Uncontrolled };
