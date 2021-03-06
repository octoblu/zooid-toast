import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Toast from '../src'

storiesOf('Toast', module)
  .addWithInfo('Basic', 'A Toast with default props and message', () => (
    <Toast message="This is a message!" />
  ), { inline: true })
  .addWithInfo('Custom timeout', 'A Toast with a custom timeout and message', () => (
    <Toast message="Custom timeout: 6 seconds!" timeout="6000"  />
  ), { inline: true })
