import React from 'react';
import { storiesOf } from '@storybook/react';
import SimpleTable from '../components/SimpleTable/SimpleTable';



const data = [
    {
        no: '1',
        img: 'https://images.punkapi.com/v2/2.png',
        name: 'Karlovacko',
        qty: '100'
    }
];

storiesOf('Simple Table', module)
    .add('Simple Table', () => (
        <SimpleTable
        beerData={data} />
    ));