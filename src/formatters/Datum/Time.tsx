import * as React from 'react';
import { format, parse } from 'date-fns';

interface IProps {
  value: Date | string;
  seconds?: boolean;
}

class Time extends React.Component<IProps, {}> {

  render() {
    let p = this.props;

    if(p.value == null) return null;

    // If date is a string, parse it to a Date.
    let date;
    if(typeof p.value === 'string') {
      date = parse(p.value, 'HH:mm:ss', new Date());
    } else {
      date = p.value;
    }

    return (
      <span title={format(date, 'HH:mm:ss')}>
         {format(date, 'HH:mm' + (p.seconds ? ":ss": "" ) )}
      </span>
    );
  }
}

export { Time };
