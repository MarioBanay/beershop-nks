import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Logo from '../../assets/duff.png';
import SimpleTable from '../../components/SimpleTable/SimpleTable';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';
import Footer from '../../components/Footer/Footer';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

class ShoppingCart extends Component {

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
        console.log("cartData polje: " + this.props.cart)
        return (
            <div>
                <Header logo={Logo} />
                <SimpleTable favor={false} head={this.state.header}  data={this.props.cart} />
                <NavigationMenu />
                <Footer />
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        cart: state.fav.cartData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddToCart: () => dispatch({ type: actionTypes.ADD_TO_CART })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);