import sizes from './sizes';

export default {
    navbar: {
        position: "fixed",
        top: "0",
        left: "50",
        zIndex: "2",
        width: "inherit",
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        "& a": {
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: "600",
            letterSpacing: "2px"
        }
    },
    logo: {
        "& a": {
            color: "#33323d"
        },
        [sizes.down("xs")]: {
            margin: "0 1rem"
        }
    },
    links: {
        "& a": {
            paddingLeft: "2.2rem",
            color: "#33323d",
            transition: "all 0.2s ease-in-out",
            "&:hover": {
                color: "#5fb4a2"
            }
        },
        [sizes.down("sm")]: {
            display: "none"
        }
    },
    menuIcon: {
        transform: "scale(1.5)",
        padding: "0 0.5rem",
        display: "none",
        "&:hover": {
            cursor: "pointer"
        },
        [sizes.down("sm")]: {
            display: "flex"
        },
        [sizes.down("xs")]: {
            margin: "0 1rem"
        }
    },
    drawerLinks: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "1.5rem",
        "& img": {
            marginBottom: "4rem"
        },
        "& a": {
            padding: "1rem 2rem",
            color: "#33323d",
            transition: "all 0.2s ease-in-out",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: "600",
            letterSpacing: "2px",
            "&:hover": {
                color: "#5fb4a2"
            }
        },
    }
}