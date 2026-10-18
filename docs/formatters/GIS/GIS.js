import * as React from 'react';
import { DMS } from '../../helper/DMS';
function toDMS(value, defaultStr, max, positive, negative) {
    // Convert value to number if it is a string:
    value = typeof value == 'number' ? value : parseFloat(value);
    if (isNaN(value) || value < -max || value > max)
        return defaultStr ? defaultStr : "(no coordinates)";
    let [d, m, s] = DMS.toDMS(value);
    let ms = m.toString();
    if (ms.length < 2)
        ms = "0" + ms;
    let ss = s.toFixed(0);
    if (ss.length < 2)
        ss = "0" + ss;
    return `${d}\u00B0 ${ms}\u2032 ${ss}\u2033 ${d >= 0 ? positive : negative}`;
}
class Latitude extends React.Component {
    render() {
        return toDMS(this.props.value, this.props.default, 90, "N", "S");
    }
}
class Longitude extends React.Component {
    render() {
        return toDMS(this.props.value, this.props.default, 180, "E", "W");
    }
}
export { Latitude, Longitude };
