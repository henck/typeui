import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../StorybookBase';
import { text, number } from '@storybook/addon-knobs/react';
import { Button } from '../../Button';
import { ToastService } from '..';
import { ToastContainer } from '../ToastContainer';

storiesOf('Controls/Toast', module)
  .addDecorator(withInfo(withInfoSettings))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    Toasts require a \`ToastContainer\` (at least one, possible to create more) to live somewhere to
    show the toasts. The ToastContainer defines how many toasts remain on-screen at the same time. Newer
    toasts cause older toasts to be removed.

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
