import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '../components/Header/Header';
import Logo from '../assets/duff.png';

storiesOf('Header', module)
.add('header with logo', () => (
  <Header logo={Logo} />
));