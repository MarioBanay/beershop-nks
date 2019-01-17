import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, NavigationMenu, Hyperlink } from 'storybook-nks/dist';
import { Link } from 'react-router-dom';
import classes from './MainContent.css';
import Logo from '../../assets/duff.png';
import Cards from '../../components/Cards/Cards';
import Footer from '../../components/Footer/Footer';


class MainContent extends Component {

    render() {

        let data = [
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
                    <NavigationMenu
                        data={data}
                    />
                </div>
                <div className={classes.Footer}>
                    <Footer />
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