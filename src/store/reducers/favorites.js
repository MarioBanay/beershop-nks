import React from 'react';
import * as actionTypes from '../actions';
import beers from '../../assets/beers.json';
import IcoMoon from 'react-icomoon';
import { compose } from 'redux';

const initialState = {
    beerData: beers,
    favData: [],
    cartData: [],
}

const star = {
    width: '16px',
    height: '16px'
};

let crossIcon = <IcoMoon icon="cross" color="grey" style={star} />


const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_FAVORITES:
            let newArray = state.beerData.filter((el) => el.id === action.resultElId);
            return {
                ...state,
                favData: state.favData.concat(
                    {
                        id: newArray[0].id,
                        image: newArray[0].image_url,
                        name: newArray[0].name,
                        description: newArray[0].description,
                        button: crossIcon
                    })
            }

        case actionTypes.REMOVE_FROM_FAVORITES:
            let newArray1 = state.favData.filter((el) => el.id !== action.resultElId);
            //console.log(newArray1[0].id);
            return {
                ...state,
                favData: newArray1
            }

        case actionTypes.ADD_TO_CART:
            let index = state.cartData.findIndex(item => item.id === action.resultElId);
            let itemToAdd = state.beerData.filter((el) => el.id === action.resultElId);
            if (index > -1) {
                let baseCart = state.cartData.filter((el) => el.id !== action.resultElId);
                baseCart.splice(index, 0,
                    {
                        id: itemToAdd[0].id,
                        image: itemToAdd[0].image_url,
                        name: itemToAdd[0].name,
                        description: itemToAdd[0].description,
                        quantity: 1,
                        button: crossIcon
                    });

                return {
                    ...state,
                    cartData: baseCart
                }
            }
            else {
                console.log("first time in cart");
                return {
                    ...state,
                    cartData: state.cartData.concat(
                        {
                            id: itemToAdd[0].id,
                            image: itemToAdd[0].image_url,
                            name: itemToAdd[0].name,
                            description: itemToAdd[0].description,
                            quantity: 1,
                            button: crossIcon
                        })
                }
            }


        case actionTypes.REMOVE_FROM_CART:
            let newArray3 = state.cartData.filter((el) => el.id !== action.resultElId);
            //console.log(newArray1[0].id);
            return {
                ...state,
                cartData: newArray3
            }

        case actionTypes.CHANGE_QUANTITY:
            console.log("u reduceru");
            let indexOfEl = state.cartData.findIndex(item => item.id === action.resultElId);
            let itemToChange = state.beerData.filter((el) => el.id === action.resultElId);
            if (indexOfEl > -1) {
                let baseCart = state.cartData.filter((el) => el.id !== action.resultElId);
                baseCart.splice(indexOfEl, 0,
                    {
                        id: itemToChange[0].id,
                        image: itemToChange[0].image_url,
                        name: itemToChange[0].name,
                        description: itemToChange[0].description,
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