import React, { Component } from 'react';
import classes from './about.css';

class About extends Component {
    render() {
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
            </div>
        );
    }
}

export default About;