import React from 'react';
import { storiesOf } from '@storybook/react';
import Footer from '../components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

storiesOf('Footer', module)
  .add('Footer', () => (
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  ));