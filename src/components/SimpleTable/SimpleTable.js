import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';


class SimpleTable extends Component {

    favIconHandler = (id) =>
     {
        let newArray = this.props.fav.filter((el) => el.id === id);
        if (newArray.length > 0) {
            return true
        } else {
            return false
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

    onChangeHandler = (e) => this.props.onAddToCart(e.target.value);

    render() {
        let tableItems = this.props.head.map((item, key) =>
            <th key={key}>{item.name}</th>
        );

        let data = this.props.data.map((data, index) =>
            <tr key={index}>
                <td>{index + 1}</td>
                <td><img src={data.image_url} /></td>
                <td>{data.name}</td>
                {this.props.favor ? null : <td><input type="text" value={data.qty} onChange={(e) => this.props.onAddToCart(e.target.value, data.id)}></input></td>} 
                {this.props.favor ? null :
                <td><button
                    onClick={() => this.favIconHandler(data.id) ? this.props.onRemoveFromFavorites(data.id) : this.props.onRemoveFromCart(data.id)}>Delete
                    </button>
                </td>
                }

            </tr>

        );

        return (
            <table>
                <tbody>
                    <tr>
                        {tableItems}
                    </tr>
                    {data}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = state => {
    return {
        fav: state.fav.favData,
        cart: state.fav.cartData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRemoveFromFavorites: (id) => dispatch({ type: actionTypes.REMOVE_FROM_FAVORITES, resultElId: id }),
        onRemoveFromCart: (id) => dispatch({ type: actionTypes.REMOVE_FROM_CART, resultElId: id }),
        onAddToCart: (val, id) => dispatch({ type: actionTypes.ADD_TO_CART, newQty: val, resultElId: id })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleTable);