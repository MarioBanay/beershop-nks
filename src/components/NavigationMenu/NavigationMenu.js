import React, { Component } from 'react';
import classes from './NavigationMenu.css';
import { Hyperlink } from 'storybook-nks/dist';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class NavigationMenu extends Component {
    render() {
        return (
            <div className={classes.NavigationMenu}>
                <table>
                    <tbody>
                        <tr className={classes.Menu}>
                            <th><Link
                                to="/"
                            >Home</Link></th>
                        </tr>
                        <tr>
                            <td><Link
                                to="/favorites"
                            >Favorites ({this.props.fav.length})</Link>
                            </td>
                        </tr>
                        <tr>
                            <td><Link
                                to="/shoppingCart"
                            >Shopping Cart ({this.props.cart.length})</Link>
                            </td>
                        </tr>
                        <tr>
                            <td><Link
                                to="/about"
                            >About</Link>
                            </td>
                        </tr>
                        <tr>
                            <td><Hyperlink
                                link="https://github.com/"
                                text="Source Code" />
                            </td>
                        </tr>
                    </tbody>
                </table>
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

export default connect(mapStateToProps)(NavigationMenu);