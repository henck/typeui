import * as React from 'react';
class Number extends React.Component {
    render() {
        let p = this.props;
        if (p.value == null)
            return null;
        // Make sure value is a number.
        let val = (typeof p.value === 'string') ? parseFloat(p.value) : p.value;
        // Get number of requested fraction digits:
        let decimals = p.decimals == null || p.decimals == undefined ? 2 : p.decimals;
        // Format number with requested fraction digits:
        return val.toLocaleString(undefined, {
            useGrouping: true,
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
        });
    }
}
export { Number };
