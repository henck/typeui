import * as React from 'react';
import { format, formatDistanceToNow, formatDistanceToNowStrict } from 'date-fns';

interface IProps {
  value: Date | string;
  locale?: Locale;
  /** A strict formatter does not use helpers like 'almost', 'over', 
   * 'less than' and the like. 
   */
  strict?: boolean;
}

interface IState {
  /**
   * The state timestamp is used to force the component
   * to rerender every second.
   */
  timestamp: number;
}

class DistanceDate extends React.Component<IProps, IState> {
  private interval: number;

  constructor(props: IProps) {
    super(props);
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

  update = () => {
    // Force the component to rerender by updating its state.
    this.setState({ 
      timestamp: Date.now()
    });
  }

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

    let options:any = {
      includeSeconds: true, // If false, only minutes are shown
      addSuffix: true       // Add "ago"
    };
    if(p.locale) options.locale = p.locale;

    return (
      <span title={format(date, 'eeee, d MMMM yyyy', p.locale ? { locale: p.locale } : {} )}>
         {p.strict ? formatDistanceToNowStrict(date, options) : formatDistanceToNow(date, options)}
      </span>
    );
  }
}

export { DistanceDate };
