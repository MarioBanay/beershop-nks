import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, NavigationMenu, Hyperlink, Footer, RoundIconButton, Cards } from 'storybook-nks/dist';
import { Link } from 'react-router-dom';
import classes from './MainContent.css';
import Logo from '../../assets/duff.png';
// import Cards from '../../components/Cards/Cards';
import twitterIcon from '../../assets/icons/PNG/twitter.png'
import facebookIcon from '../../assets/icons/PNG/facebook.png'
import gitHubIcon from '../../assets/icons/PNG/github.png'
import instagramIcon from '../../assets/icons/PNG/instagram.png'
import beersJson from '../../assets/beers.json';
import IcoMoon from 'react-icomoon';
import * as actionTypes from '../../store/actions';

const iconStyle = {
    width: '32px',
    height: '32px'
};

class MainContent extends Component {

    state = {
        icon: false
    }

    addRemovefavoriteBeerHandler = (id) => {
        let newArray = this.props.isFav.filter((el) => el.id === id);
        if (newArray.length > 0) {
            this.props.onRemoveFromFavorites(id)
        } else
            this.props.onAddToFavorites(id);
    }

    render() {

        let navigationData = [
            {
                link: <Link to="/" >Home</Link>,
            },
            {
                link: <Link to="/favorites" >Favorites ({this.props.isFav.length})</Link>,
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
                    <Cards
                        beers={beersJson}

                        favoriteIconEmpty={<IcoMoon icon="star-empty" color="orange" style={iconStyle} />}
                        // favoriteIconFull={<IcoMoon icon="star-full" color="orange" style={iconStyle} />}
                        // favoriteIconEmpty={<IcoMoon icon="star-empty" color="orange" style={iconStyle} />}
                        clickedOnFavorites={(id) => this.addRemovefavoriteBeerHandler(id)}


                        addToCartIcon={<IcoMoon icon="plus" color="black" style={iconStyle} />}
                        clickedOnAddToCart={(id) => this.props.onAddToCart(id)}

                        infoIcon={<IcoMoon icon="info" color="black" style={iconStyle} />}
                        // clickedOnInfo={action('clicked on info button')}
                    />
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
        cart: state.fav.cartData,
        fav: state.fav.beerData,
        isFav: state.fav.favData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddToFavorites: (id) => dispatch({ type: actionTypes.ADD_TO_FAVORITES, resultElId: id }),
        onRemoveFromFavorites: (id) => dispatch({ type: actionTypes.REMOVE_FROM_FAVORITES, resultElId: id }),
        onAddToCart: (id) => dispatch({ type: actionTypes.ADD_TO_CART, resultElId: id }),
        onRemoveFromCart: (id) => dispatch({ type: actionTypes.REMOVE_FROM_CART, resultElId: id })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);