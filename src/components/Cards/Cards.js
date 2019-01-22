import React, { Component } from 'react';
//import { Card } from 'storybook-nks/dist';
import imgInfo from '../../assets/icons/PNG/info.png';
import imgPlus from '../../assets/icons/PNG/plus.png';
import classes from './Cards.css';
import starEmpty from '../../assets/icons/PNG/star-empty.png';
import starFull from '../../assets/icons/PNG/star-full.png';
import { connect } from 'react-redux';
import IcoMoon from 'react-icomoon';
import * as actionTypes from '../../store/actions';
import {Card} from 'storybook-nks/dist';


class Cards extends Component {

    addRemovefavoriteBeerHandler = (id) => {
        let newArray = this.props.isFav.filter((el) => el.id === id);
        if (newArray.length > 0) {
            this.props.onRemoveFromFavorites(id)
        } else
            this.props.onAddToFavorites(id);
    }

    
    favIconHandler = (id) => {
        let newArray = this.props.isFav.filter((el) => el.id === id);
        if (newArray.length > 0) {
            return true
        } else return false
    }
    
    render() {
        const iconStyle = {
            width: '32px',
            height: '32px'
        };
        const cards = this.props.fav.map(beer =>
            <Card
                key={beer.id}
                imgBeerUrl={beer.image_url}
                
                favoriteIcon={this.favIconHandler(beer.id) ? <IcoMoon icon="star-full" color="orange" style={iconStyle} /> : <IcoMoon icon="star-empty" color="orange" style={iconStyle} /> }
                clickedOnFavorites={() => this.addRemovefavoriteBeerHandler(beer.id)}

                addToCartIcon={<IcoMoon icon="plus" color="black" style={iconStyle} />}
                clickedOnAddToCart={() => this.props.onAddToCart(beer.id)}

                infoIcon={<IcoMoon icon="info" color="black" style={iconStyle} />}
                name={beer.name}
                description={beer.description}
            />);
        return (<div className={classes.Cards}>{cards}</div>);
    }
}

const mapStateToProps = state => {
    return {
        fav: state.fav.beerData,
        favIcon: state.fav.favState,
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

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
