import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from './styles/FooterStyles';
import footerLogo from './images/footer-logo.svg';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

function Footer(props) {
    const { classes } = props;

    return (
        <div className={classes.footer}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <div className={classes.logo}>
                        <Link exact to="/">
                            <img src={footerLogo} alt="logo" />
                        </Link>
                    </div>
                    <div className={classes.links}>
                        <NavLink exact to="/">HOME</NavLink>
                        <NavLink exact to="/portfolio">PORTFOLIO</NavLink>
                        <NavLink exact to="/contact-me">CONTACT ME</NavLink>
                    </div>
                </div>
                <div className={classes.right}>
                    <div className={classes.socialIcons}>
                        <LinkedInIcon className={classes.linkedin} onClick={() => window.open("https://www.linkedin.com/in/dor-lahiyani-62a5161a3/")} />
                        <GitHubIcon className={classes.github} onClick={() => window.open("https://github.com/Dorl92")} />
                        <FacebookIcon className={classes.facebook} onClick={() => window.open("https://www.facebook.com/dor.lahiyani/")} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withStyles(styles)(Footer);

