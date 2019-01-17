import React from 'react';
import classes from './Footer.css';
import Icon from '../RoundIconButton/RoundIconButton';
import Hyperlink from '../HyperlinkButton/Hyperlink';
import twitterIcon from '../../assets/icons/PNG/twitter.png';
import facebookIcon from '../../assets/icons/PNG/facebook.png';
import gitHubIcon from '../../assets/icons/PNG/github.png';
import instagramIcon from '../../assets/icons/PNG/instagram.png';



const footer = (props) => {
    return (
        <footer className={classes.Footer}>
            <ul>
                <li>
                    <Icon
                        icon={twitterIcon}
                        link="https://twitter.com/" />
                    <Hyperlink
                        link="https://twitter.com/"
                        text="twitter" />
                </li>
                <li>
                    <Icon
                        icon={facebookIcon}
                        link="https://facebook.com/" />
                    <Hyperlink
                        link="https://facebook.com/"
                        text="facebook" />
                </li>
                <li>
                    <Icon
                        icon={gitHubIcon}
                        link="https://github.com/" />
                    <Hyperlink
                        link="https://github.com/"
                        text="GitHub" />
                </li>
                <li>
                    <Icon
                        icon={instagramIcon}
                        link="https://instagram.com/" />
                    <Hyperlink
                        link="https://instagram.com/"
                        text="instagram" />
                </li>
            </ul>
        </footer>
    );
}

export default footer;