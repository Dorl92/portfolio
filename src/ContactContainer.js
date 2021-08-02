import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from './styles/ContactContainerStyles';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ContactContainer = (props) => {

    const { classes, history } = props;

    useEffect(() => {
        Aos.init({
            duration: 2000,
            once: true,
        })
    }, [])

    const handleContactMeClick = () => {
        history.push('/contact-me')
    }

    return (
        <div data-aos="fade-up" className={classes.container}>
            <div className={classes.text}>Interested in doing <br />a project together?</div>
            <div className={classes.line}></div>
            <div className={classes.contactButton} onClick={handleContactMeClick}>CONTACT ME</div>
        </div>
    );
};

export default withRouter(withStyles(styles)(ContactContainer));