import React from 'react';
import { storiesOf } from '@storybook/react';
import RoundIconButton from '../components/RoundIconButton/RoundIconButton';
import gitHubIcon from '../assets/icons/PNG/github.png';

storiesOf('RoundIconButton', module)
    .add('RoundIconButton', () => (
        <RoundIconButton
            icon={gitHubIcon}
            link="https://github.com/" />
    ));