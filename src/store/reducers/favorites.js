import React from 'react';
import * as actionTypes from '../actions';
import beers from '../../assets/beers.json';
import IcoMoon from 'react-icomoon';

const initialState = {
    beerData: beers,
    favData: [],
    cartData: [],
}

const cross = {
    width: '16px',
    height: '16px'
};

let crossIcon = <IcoMoon icon="cross" color="grey" style={cross} />

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_FAVORITES:
            let itemToAddToFavorites = state.beerData.filter((el) => el.id === action.resultElId);
            return {
                ...state,
                favData: state.favData.concat(
                    {
                        id: itemToAddToFavorites[0].id,
                        image: itemToAddToFavorites[0].image_url,
                        name: itemToAddToFavorites[0].name,
                        description: itemToAddToFavorites[0].description,
                        button: crossIcon
                    })
            }

        case actionTypes.REMOVE_FROM_FAVORITES:
            let itemToRemoveFromFavorites = state.favData.filter((el) => el.id !== action.resultElId);
            return {
                ...state,
                favData: itemToRemoveFromFavorites
            }

        case actionTypes.ADD_TO_CART:
            let indexOfElementToAdd = state.cartData.findIndex(item => item.id === action.resultElId);
            let itemToAddToCart = state.beerData.filter((el) => el.id === action.resultElId);
            if (indexOfElementToAdd > -1) {
                let baseCart = state.cartData.filter((el) => el.id !== action.resultElId);
                baseCart.splice(indexOfElementToAdd, 0,
                    {
                        id: itemToAddToCart[0].id,
                        image: itemToAddToCart[0].image_url,
                        name: itemToAddToCart[0].name,
                        description: itemToAddToCart[0].description,
                        quantity: 1,
                        button: crossIcon
                    });

                return {
                    ...state,
                    cartData: baseCart
                }
            }

            else {
                return {
                    ...state,
                    cartData: state.cartData.concat(
                        {
                            id: itemToAddToCart[0].id,
                            image: itemToAddToCart[0].image_url,
                            name: itemToAddToCart[0].name,
                            description: itemToAddToCart[0].description,
                            quantity: 1,
                            button: crossIcon
                        })
                }
            }

        case actionTypes.REMOVE_FROM_CART:
            let itemToRemoveFromToCart = state.cartData.filter((el) => el.id !== action.resultElId);
            return {
                ...state,
                cartData: itemToRemoveFromToCart
            }

        case actionTypes.CHANGE_QUANTITY:
            let indexOfElementToChange = state.cartData.findIndex(item => item.id === action.resultElId);
            let itemToChangeQuantity = state.beerData.filter((el) => el.id === action.resultElId);
            if (indexOfElementToChange > -1) {
                let baseCart = state.cartData.filter((el) => el.id !== action.resultElId);
                baseCart.splice(indexOfElementToChange, 0,
                    {
                        id: itemToChangeQuantity[0].id,
                        image: itemToChangeQuantity[0].image_url,
                        name: itemToChangeQuantity[0].name,
                        description: itemToChangeQuantity[0].description,
                        quantity: action.quantity,
                        button: crossIcon
                    });
                return {
                    ...state,
                    cartData: baseCart
                }
            }
            
        default:
            return state;
    }
}

export default favoritesReducer;