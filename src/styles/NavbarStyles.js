import sizes from './sizes';

export default {
    navbar: {
        width: "100%",
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
        },
        [sizes.down("sm")]: {
            // position: "fixed",
            // backgroundColor: "white",
            // zIndex: "10"
        }
    },
    logo: {
        "& a": {
            color: "#33323d"
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