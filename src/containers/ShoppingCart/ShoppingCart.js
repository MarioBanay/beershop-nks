import React, { Component } from 'react';
import { Header, NavigationMenu, Hyperlink, Table2 } from 'storybook-nks/dist';
import Logo from '../../assets/duff.png';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import { Link } from 'react-router-dom';
import classes from './shoppingCart.css';

class ShoppingCart extends Component {

    checkQuantityHandler = (qty, id) => {
        if (qty.target.value == 0) {
            this.props.onRemoveFromCart(id);
        } else {
            this.props.onChangeQuantity(qty.target.value, id);
        }
    }

    state = {
        header: [
            {
                name: '#'
            },
            {
                name: 'Image'
            },
            {
                name: 'Beer name'
            },
            {
                name: 'Quantity'
            },
            {
                name: ' '
            }
        ]
    };

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
                name: 'Quantity'
            },
            {
                name: 'Remove'
            }
        ];

        return (
            <div className={classes.MainContent}>
                <div className={classes.Header}>
                    <Header logo={Logo} />
                </div>
                <div className={classes.Table}>
                    <h1>Shopping cart</h1>
                    <Table2
                        tableHeader={tableItems}
                        tableData={this.props.cart}
                        clickedOnFavorites={(id) => this.props.onRemoveFromCart(id)}
                        enteredQuantity={(qty, id) => this.checkQuantityHandler(qty, id)}
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
        cart: state.fav.cartData,
        isFav: state.fav.favData,
        fav: state.fav.favData,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddToCart: () => dispatch({ type: actionTypes.ADD_TO_CART }),
        onRemoveFromCart: (id) => dispatch({ type: actionTypes.REMOVE_FROM_CART, resultElId: id }),
        onChangeQuantity: (qty, id) => dispatch({ type: actionTypes.CHANGE_QUANTITY, resultElId: id, quantity: qty })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);