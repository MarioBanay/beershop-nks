import React, { Component } from 'react';

import { Header } from 'storybook-nks/dist';


import classes from './MainContent.css';
import Logo from '../../assets/duff.png';
import Cards from '../../components/Cards/Cards';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';
import Footer from '../../components/Footer/Footer';

class MainContent extends Component {

    render() {
        return (
            <div className={classes.MainContent}>
                <div>
                    <Header
                        logo={Logo} />
                </div>
                <div className={classes.Cards}>
                    <Cards />
                </div>
                <div className={classes.Menu}>
                    <NavigationMenu />
                </div>
                <div className={classes.Footer}>
                    <Footer />
                </div>

            </div>
        );
    }
}

export default MainContent;