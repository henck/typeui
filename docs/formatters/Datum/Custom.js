import * as React from 'react';
import { format } from 'date-fns';
class Custom extends React.Component {
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
        return format(date, p.format, p.locale ? { locale: p.locale } : {});
    }
}
export { Custom };
