import * as React from 'react';

// Types
import { Float, TDir } from '../Types';

interface IDataColumnProps {
  className?: string;
  children: (item:any) => void;
  /** Column label. Can be JSX. */
  label: React.ReactNode;
  /** Optional order field. If present, this column can be ordered. */
  order?: string;
  /** Default order direction, `asc` or `desc`. If not present, defaults to `asc`. */
  dir?: TDir;
  /** Column weight. Defaults to `1`. */
  weight?: number;
  /** Text alignment, `left` or `right`. Defaults to `left`. */
  align?: Float;  
}

class DataColumn extends React.Component<IDataColumnProps, {}> {
}

export { DataColumn };