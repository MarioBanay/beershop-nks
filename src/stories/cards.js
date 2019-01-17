import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '../components/Cards/Card/Card';
import imgStar from '../assets/icons/PNG/star-empty.png';
import imgInfo from '../assets/icons/PNG/info.png';
import imgPlus from '../assets/icons/PNG/plus.png';
import Cards from '../components/Cards/Cards';

storiesOf('Card', module)
    .add('card', () => (
        <Card
            imgBeerUrl="https://images.punkapi.com/v2/48.png"
            iconFavorites={imgStar}
            iconDetails={imgInfo}
            iconAddToChart={imgPlus}
            name="Goldings - IPA Is Dead"
            description="This is East Kent Goldings re- invented and re-imagined and shows just what can be done with English hops if you use enough of them. In this amped up Goldings reincarnation expect to be slammed with floral lavender, a fruity riot of blackberries and spiced pears, bubblegum, plums and the illusion of thyme."
        />
    ))
    .add('all cards', () => (
        <Cards />
    ));


