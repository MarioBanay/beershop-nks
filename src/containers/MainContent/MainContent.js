import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, NavigationMenu, Hyperlink, Footer, RoundIconButton } from 'storybook-nks/dist';
import { Link } from 'react-router-dom';
import classes from './MainContent.css';
import Logo from '../../assets/duff.png';
import Cards from '../../components/Cards/Cards';
import twitterIcon from '../../assets/icons/PNG/twitter.png'
import facebookIcon from '../../assets/icons/PNG/facebook.png'
import gitHubIcon from '../../assets/icons/PNG/github.png'
import instagramIcon from '../../assets/icons/PNG/instagram.png'



class MainContent extends Component {

    render() {

        let navigationData = [
            {
                link: <Link to="/" >Home</Link>,
            },
            {
                link: <Link to="/favorites" >Favorites ({this.props.fav.length})</Link>,
            },
            {
                link: <Link to="/shoppingCart" >Shopping Cart ({this.props.cart.length})</Link>,
            },
            {
                link: <Link to="/about" >About</Link>,
            },
            {
                link: <Hyperlink
                    link="https://github.com/MarioBanay/beershop-nks"
                    text="Source Code" />
            }
        ];

        let footerData = [
            {
                link: <Hyperlink
                    link="https://twitter.com/"
                    text="twitter" />,
                icon: <RoundIconButton
                    icon={twitterIcon}
                    link="https://twitter.com/" />
            },
            {
                link: <Hyperlink
                    link="https://facebook.com/"
                    text="facebook" />,
                icon: <RoundIconButton
                    icon={facebookIcon}
                    link="https://facebook.com/" />
            },
            {
                link: <Hyperlink
                    link="https://github.com/"
                    text="GitHub" />,
                icon: <RoundIconButton
                    icon={gitHubIcon}
                    link="https://github.com/" />
            },
            {
                link: <Hyperlink
                    link="https://instagram.com/"
                    text="instagram" />,
                icon: <RoundIconButton
                    icon={instagramIcon}
                    link="https://instagram.com/" />
            }

        ];
        return (
            <div className={classes.MainContent}>
                <div>
                    <Header
                        logo={Logo} />

                </div>
                <div >
                    <Cards />
                </div>
                <div className={classes.Menu}>
                    <NavigationMenu
                        data={navigationData}
                    />
                </div>
                <div className={classes.Footer}>
                    <Footer
                        data={footerData}
                    />
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fav: state.fav.favData,
        cart: state.fav.cartData
    };
};

export default connect(mapStateToProps)(MainContent);