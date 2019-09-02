import * as React from 'react';

interface IFilesizeProps {
  /** File size in bytes */
  value: number;  
}

/**
 * Filesize takes a size prop (in bytes) and renders
 * a human-readable filesize string.
 * 
 * E.g. 10000 => 10.0 kB
 */
class Filesize extends React.Component<IFilesizeProps, {}> {

  /** Convert bytes to size string (kB, MB, GB etc.) */
  humanFileSize = (bytes: number, si: boolean = true) => {
    var thresh = si ? 1000 : 1024;
    if(Math.abs(bytes) < thresh) {
        return bytes + ' B';
    }
    var units = si
      ? ['kB','MB','GB','TB','PB','EB','ZB','YB']
      : ['KiB','MiB','GiB','TiB','PiB','EiB','ZiB','YiB'];
    var u = -1;
    do {
      bytes /= thresh;
      ++u;
    } while(Math.abs(bytes) >= thresh && u < units.length - 1);
    return bytes.toFixed(2) + ' ' + units[u];
  }

  render() {
    return this.humanFileSize(this.props.value, true);
  }
}

export { Filesize }