import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { format } from 'date-fns';
class LongDate extends React.Component {
    render() {
        let p = this.props;
        if (p.value == null)
            return null;
        // If date is a string, parse it to a Date.
        let date;
        if (typeof p.value === 'string') {
            date = new Date(p.value);
        }
        else {
            date = p.value;
        }
        return (_jsx("span", { title: format(date, 'eeee, d MMMM yyyy', p.locale ? { locale: p.locale } : {}), children: format(date, 'eee, d MMMM yyyy', p.locale ? { locale: p.locale } : {}) }));
    }
}
export { LongDate };
