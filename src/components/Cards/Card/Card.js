import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Card.css';
import { RoundIconButton, Popup } from 'storybook-nks/dist';
import * as actionTypes from '../../../store/actions';
import addToChartIcon from '../../../assets/icons/PNG/plus.png';
import infoIcon from '../../../assets/icons/PNG/info.png';

class Card extends Component {
    
    addRemovefavoriteBeerHandler = (id) => {
        let newArray = this.props.isFav.filter((el) => el.id === id);
        if (newArray.length > 0) {
            this.props.onRemoveFromFavorites(id)
        } else
            this.props.onAddToFavorites(id);
    }

    componentDidUpdate() {
        //console.log(this.props.favData[this.props.id]);
    }

    render() {
        return (
            <div className={classes.card}>
                
                <RoundIconButton
                    //icon={this.props.fav ? starFull : starEmpty}
                    icon={this.props.favoriteIcon}
                    clicked={() => this.addRemovefavoriteBeerHandler(this.props.id)}
                />
                <RoundIconButton 
                    icon={addToChartIcon}
                    clicked={() => this.props.onAddToCart(this.props.id)} />
                <Popup popupText={this.props.description} >
                    <RoundIconButton
                        icon={infoIcon}
                    />
                    
                </Popup>
                <img className={classes.beerImg} src={this.props.imgBeerUrl} />
                <div className={classes.title}>
                    <h3>{this.props.name}</h3>
                </div>
                <div className={classes.description} >
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fav: state.fav.favState,
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

export default connect(mapStateToProps, mapDispatchToProps)(Card);