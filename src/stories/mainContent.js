import React from 'react';
import { storiesOf } from '@storybook/react';
import MainContent from '../containers/MainContent/MainContent';
import { BrowserRouter } from 'react-router-dom';

storiesOf('MainContent', module)
    .add('MainContent', () => (
        <BrowserRouter>
            <MainContent
            />
        </BrowserRouter>
    ));