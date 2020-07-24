import * as React from 'react';
import { format } from 'date-fns';

interface IProps {
  value: Date | string;
  locale?: Locale;
}

class ShortDate extends React.Component<IProps, {}> {

  render() {
    let p = this.props;

    if(p.value == null) return null;

    // If date is a string, parse it to a Date.
    let date;
    if(typeof p.value === 'string') {
      date = new Date(p.value);
    } else {
      date = p.value;
    }

    return (
      <span title={format(date, 'eeee, d MMMM yyyy', p.locale ? { locale: p.locale } : {} )}>
         {format(date, 'dd-MM-yyyy', p.locale ? { locale: p.locale } : {} )}
      </span>
    );
  }
}

export { ShortDate };
