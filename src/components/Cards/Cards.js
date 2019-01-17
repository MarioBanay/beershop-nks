import React, { Component } from 'react';
import Card from '../Cards/Card/Card';
import imgInfo from '../../assets/icons/PNG/info.png';
import imgPlus from '../../assets/icons/PNG/plus.png';
import classes from './Cards.css';
import starEmpty from '../../assets/icons/PNG/star-empty.png';
import starFull from '../../assets/icons/PNG/star-full.png';
import { connect } from 'react-redux';


class Cards extends Component {

    favIconHandler = (id) => {
        let newArray = this.props.isFav.filter((el) => el.id === id);
        if (newArray.length > 0) {
            return true
        } else return false
    }

    render() {
        const cards = this.props.fav.map(beer =>
            <Card
                key={beer.id}
                id={beer.id}
                imgBeerUrl={beer.image_url}
                iconFavorites={this.favIconHandler(beer.id) ? starFull : starEmpty}
                iconDetails={imgInfo}
                iconAddToChart={imgPlus}
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

export default connect(mapStateToProps)(Cards);
