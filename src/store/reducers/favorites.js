import * as actionTypes from '../actions';
import beers from '../../assets/beers.json';
import { compose } from 'redux';

const initialState = {
    beerData: beers,
    favData: [],
    cartData: [],
}

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_FAVORITES:
            let newArray = state.beerData.filter((el) => el.id === action.resultElId);
            return {
                ...state,
                favData: state.favData.concat(
                    {
                        id: newArray[0].id,
                        image_url: newArray[0].image_url,
                        name: newArray[0].name
                        
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
                console.log("new Qty: " + action.newQty);
                console.log("resultElId: " + action.resultElId);

                let baseCart = state.cartData.filter((el) => el.id !== action.resultElId);
                baseCart.splice(index, 0,
                    {
                        id: itemToAdd[0].id,
                        image_url: itemToAdd[0].image_url,
                        name: itemToAdd[0].name,
                        qty: action.newQty
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
                            image_url: itemToAdd[0].image_url,
                            name: itemToAdd[0].name,
                            qty: 1
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

        default:
            return state;
    }
}

export default favoritesReducer;