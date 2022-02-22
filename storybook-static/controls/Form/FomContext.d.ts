import * as React from 'react';
interface IFormContext {
    onChange: (name: string, value: any, forceupdate: boolean) => void;
    onValidate: (name: string, valid: boolean) => void;
    dirty?: boolean;
    data?: any;
}
declare const FormContext: React.Context<IFormContext>;
export { IFormContext, FormContext };
