import React from 'react';
import { storiesOf } from '@storybook/react';
import PopupComponent from '../components/TestComponent/PopupComponent';
import RoundIconButton from '../components/RoundIconButton/RoundIconButton';
import gitHubIcon from '../assets/icons/PNG/github.png';

storiesOf('PopupComponent', module)
    .add('PopupComponent', () => (
        <PopupComponent popupText='Sample Text' >
        <RoundIconButton
            icon={gitHubIcon}
             />
        </PopupComponent>
    ));