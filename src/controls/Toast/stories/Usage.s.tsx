import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase.s';
import { Button } from '../../Button';
import { ToastService } from '../ToastService';
import { ToastContainer } from '../ToastContainer';
import { Toast } from '../Toast';

storiesOf('Controls/Toast', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: [ToastContainer, Toast], propTablesExclude: [Button]}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    Toasts require a \`ToastContainer\` (at least one, possible to create more) to live somewhere to
    show the toasts. The ToastContainer defines how many toasts remain on-screen at the same time. When 
    there are too many toasts, newer toasts cause older toasts to be removed.

    A toast is created by calling \`ToastService.toast()\` with a message (a ReactNode) and an optional
    duration. The ToastService manages all ToastContainers and dispatches the toasts to them.
    `
  })
  .addWithJSX(
    'Usage',
  () => (
  <div>
    <ToastContainer maxToasts={3}/>
    <Button onClick={() => ToastService.toast('hello, world')}>Create Toast</Button>
  </div>
  ));  

