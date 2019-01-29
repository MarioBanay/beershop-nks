import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './about.css';
import { NavigationMenu, Hyperlink } from 'storybook-nks/dist';
import { Link } from 'react-router-dom';

class About extends Component {

    render() {
        let navigationData = [
            {
                link: <Link to="/" >Home</Link>,
            },
            {
                link: <Hyperlink
                    link="https://github.com/MarioBanay/beershop-nks"
                    text="Source Code" />
            }
        ];

        return (
            <div>
                <table className={classes.aboutTable}>
                    <th colSpan="2" >Rješenje ispitnog zadatka</th>
                    <tr>
                        <td>ustanova:</td>
                        <td>Visoko učilište Algebra</td>
                    </tr>
                    <tr>
                        <td>studij:</td>
                        <td>Diplomski studij programskog inženjerstva</td>
                    </tr>
                    <tr>
                        <td>kolegij:</td>
                        <td>Napredno klijentsko skriptiranje</td>
                    </tr>
                    <tr>
                        <td>akademska godina:</td>
                        <td>2018/2019</td>
                    </tr>
                    <tr>
                        <td>nastavnik:</td>
                        <td>Bojan Fulanović</td>
                    </tr>
                    <tr>
                        <td>asistent:</td>
                        <td>David Abram</td>
                    </tr>
                    <tr>
                        <td>student:</td>
                        <td>Mario Banay</td>
                    </tr>
                </table>
                <div className={classes.NavigationMenu}>
                    <NavigationMenu
                        data={navigationData}
                    />
                </div>
            </div>
        );
    }
}

export default About;