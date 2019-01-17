import React from 'react';
import { storiesOf } from '@storybook/react';
import NavigationMenu from '../components/NavigationMenu/NavigationMenu';
import { BrowserRouter } from 'react-router-dom';


storiesOf('NavigationMenu', module)
    .add('NavigationMenu', () => (
        <BrowserRouter>
            <NavigationMenu
            />
        </BrowserRouter>
    ));