import * as React from 'react';
/**
 * Filesize takes a size prop (in bytes) and renders
 * a human-readable filesize string.
 *
 * E.g. 10000 => 10.0 kB
 */
class Filesize extends React.Component {
    constructor() {
        super(...arguments);
        /** Convert bytes to size string (kB, MB, GB etc.) */
        this.humanFileSize = (bytes, unit) => {
            var thresh = unit == 'si' ? 1000 : 1024;
            if (Math.abs(bytes) < thresh) {
                return bytes + ' B';
            }
            var units = unit == 'si'
                ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
                : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
            var u = -1;
            do {
                bytes /= thresh;
                ++u;
            } while (Math.abs(bytes) >= thresh && u < units.length - 1);
            return bytes.toFixed(2) + ' ' + units[u];
        };
    }
    render() {
        let p = this.props;
        if (p.value == null)
            return null;
        // Make sure value is a number.
        let val = (typeof p.value === 'string') ? parseFloat(p.value) : p.value;
        return this.humanFileSize(val, p.unit ? p.unit : 'si');
    }
}
export { Filesize };
