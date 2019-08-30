import * as React from 'react';
import { Field } from './Field';

interface IFormContext {
  onChange: (name: string, value: any, forceupdate: boolean) => void;
  onValidate: (name: string, valid: boolean) => void;  
  dirty?: boolean;
  data?: any;
}

const FormContext = React.createContext<IFormContext | null>(null);

export { IFormContext, FormContext };
