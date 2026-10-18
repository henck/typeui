import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { format, formatDistanceToNow, formatDistanceToNowStrict } from 'date-fns';
class DistanceDate extends React.Component {
    constructor(props) {
        super(props);
        this.update = () => {
            // Force the component to rerender by updating its state.
            this.setState({
                timestamp: Date.now()
            });
        };
        this.state = { timestamp: 0 };
    }
    componentDidMount() {
        // Create an interval every second.
        this.interval = window.setInterval(this.update, 1000);
    }
    componentWillUnmount() {
        // Clear the interval timer before unmounting.
        clearInterval(this.interval);
    }
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
        let options = {
            includeSeconds: true, // If false, only minutes are shown
            addSuffix: true // Add "ago"
        };
        if (p.locale)
            options.locale = p.locale;
        return (_jsx("span", { title: format(date, 'eeee, d MMMM yyyy', p.locale ? { locale: p.locale } : {}), children: p.strict ? formatDistanceToNowStrict(date, options) : formatDistanceToNow(date, options) }));
    }
}
export { DistanceDate };
