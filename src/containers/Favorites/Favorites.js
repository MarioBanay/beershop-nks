import React, { Component } from 'react';
import Logo from '../../assets/duff.png';
import { Table2, Header, NavigationMenu, Hyperlink } from 'storybook-nks/dist';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import { Link } from 'react-router-dom';
import classes from './favorites.css';

class Favorites extends Component {

    render() {
        const tableItems = [
            {
                name: 'No.'
            },
            {
                name: 'Image'
            },
            {
                name: 'Beer name'
            },
            {
                name: 'Description'
            },
            {
                name: 'Remove'
            }
        ];

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

        return (
            <div className={classes.MainContent}>
                <div className={classes.Header}>
                    <Header logo={Logo} />
                </div>
                <div className={classes.Table}>
                    <Table2
                        tableHeader={tableItems}
                        tableData={this.props.fav}
                        clickedOnFavorites={(id) => this.props.onRemoveFromFavorites(id)}
                        quantity={true}
                    />
                </div>
                <div className={classes.NavigationMenu}>
                    <NavigationMenu
                        data={navigationData}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fav: state.fav.favData,
        isFav: state.fav.favData,
        cart: state.fav.cartData,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddToFavorites: () => dispatch({ type: actionTypes.ADD_TO_FAVORITES }),
        onRemoveFromFavorites: (id) => dispatch({ type: actionTypes.REMOVE_FROM_FAVORITES, resultElId: id })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);