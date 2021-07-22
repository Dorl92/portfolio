import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/LayoutStyles';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    const { classes } = props;
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <Navbar />
                {props.children}
            </div>
            <Footer />
        </div>
    );
}

export default withStyles(styles)(Layout);