import React, { Fragment, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import styles from './styles/NavbarStyles';
import logo from './images/logo.svg'

function Navbar(props) {
    const { classes } = props;
    const [openDrawer, setOpenDrawer] = useState(false)

    const handleCloseDrawer = (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpenDrawer(false)
    }

    return (
        <Fragment>
            <div className={classes.navbar}>
                <div className={classes.logo}>
                    <Link exact to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <MenuIcon onClick={() => setOpenDrawer(true)} className={classes.menuIcon} />
                <div className={classes.links}>
                    <NavLink exact to="/">HOME</NavLink>
                    <NavLink exact to="/portfolio">PORTFOLIO</NavLink>
                    <NavLink exact to="/contact-me">CONTACT ME</NavLink>
                </div>
            </div>
            <Drawer open={openDrawer} anchor='right' onClose={handleCloseDrawer}>
                <div className={classes.drawerLinks}>
                    <img src={logo} alt="logo" />
                    <NavLink exact to="/">HOME</NavLink>
                    <NavLink exact to="/portfolio">PORTFOLIO</NavLink>
                    <NavLink exact to="/contact-me">CONTACT ME</NavLink>
                </div>
            </Drawer>
        </Fragment>
    );
}

export default withStyles(styles)(Navbar);