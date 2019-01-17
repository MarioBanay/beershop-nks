import React from 'react';
import { storiesOf } from '@storybook/react';
import Hyperlink from '../components/HyperlinkButton/Hyperlink';
import { BrowserRouter } from 'react-router-dom';


storiesOf('Hyperlink', module)
    .add('hyperlink', () => (
        <BrowserRouter>
            <Hyperlink
                link="https://github.com/"
                text="GitHub" />
        </BrowserRouter>
    ));