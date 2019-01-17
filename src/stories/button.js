import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

storiesOf('Button', module)
.add('with text', () => (
  <Button text='Press me!'></Button>
));


storiesOf('Button', module)
.add('disabled', () => (
  <Button text="Can't Press me!" disabled={true}></Button>
));

storiesOf('Button', module)
.add('with on click handler', () => (
  <Button text="Press me!" onClick={action('clicked')} ></Button>
));

