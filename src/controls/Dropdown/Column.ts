import * as React from 'react';
import { Float } from '../Types';

interface IColumnProps {
  className?: string;
  children: (item:any) => void;
  /** Column weight. Defaults to 1. */
  weight?: number;
  /** Text alignment. Defaults to `left`. */
  align?: Float;
}

class Column extends React.Component<IColumnProps, {}> {
}

export { Column };