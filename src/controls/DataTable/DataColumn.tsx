import * as React from 'react';

// Types
import { Float } from '../Types';

interface IDataColumnProps {
  className?: string;
  children: (item:any) => void;
  /** Column label. Can be JSX. */
  label: React.ReactNode;
  /** Optional order field. If present, this column can be ordered. */
  order?: string;
  /** Default order direction. If not present, defaults to 'asc'. */
  dir?: 'asc' | 'desc';
  /** Column weight. Defaults to 1. */
  weight?: number;
  /** Text alignment. Defaults to 'left'. */
  align?: Float;  
}

class DataColumn extends React.Component<IDataColumnProps, {}> {
  public static displayName = "DataTable.Column";
}

export { DataColumn };