import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Logo from '../../assets/duff.png';
import { Table, Button } from 'storybook-nks/dist';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';
import Footer from '../../components/Footer/Footer';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import CrossIcon from '../../assets/icons/PNG/cross.png';

class Favorites extends Component {

    render() {
        const tableItems = [
            {
                name: 'No.'
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
        ];
        const tableData = [
            {
                id: '#',
                image: 'Image',
                name: 'Beer name',
                quantity: '11',
                button: ''
            }
        ];
        return (
            <div>
                <Header logo={Logo} />
                <Table tableHeader={tableItems} tableData={this.props.fav}    />
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