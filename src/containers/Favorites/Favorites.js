import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Logo from '../../assets/duff.png';
import SimpleTable from '../../components/SimpleTable/SimpleTable';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';
import Footer from '../../components/Footer/Footer';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

class Favorites extends Component {

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
            }
        ]};

    render() {
        return (
            <div>
                <Header logo={Logo} />
                <SimpleTable favor={true} head={this.state.header}  data={this.props.fav}  />
                <NavigationMenu />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fav: state.fav.favData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddToFavorites: () => dispatch({ type: actionTypes.ADD_TO_FAVORITES })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);