import sizes from './sizes';

export default {
    footer: {
        position: "fixed",
        left: "0",
        bottom: "0",
        display: "flex",
        alignItems: "center",
        width: "100vw",
        backgroundColor: "#33323d",
        color: "white",
        height: "75px",
        marginTop: "1rem",
        "& a": {
            color: "white",
            textDecoration: "none",
            fontSize: "13px",
            fontWeight: "600",
            letterSpacing: "2px"
        },
        [sizes.down("sm")]: {
            height: "300px",
            position: "static",
        }
    },
    container: {
        width: "70vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "0 auto",
        [sizes.down("md")]: {
            width: "80vw",
        },
        [sizes.down("sm")]: {
            width: "90vw",
            flexDirection: "column"
        }
    },
    left: {
        display: "flex",
        alignItems: "center",
        [sizes.down("sm")]: {
            flexDirection: "column"
        }
    },
    logo: {
        marginRight: "3rem",
        [sizes.down("sm")]: {
            margin: "1rem 0"
        } 
    },
    links: {
        display:"flex",
        "& a": {
            color: "white",
            padding: "0rem 1rem",
            transition: "all 0.2s ease-in-out",
            "&:hover": {
                color: "#5fb4a2"
            }
        },
        [sizes.down("sm")]: {
            flexDirection: "column",
            marginBottom: "1rem",
            "& a":{
                padding: "1rem 0rem",
            }
        }
    },
    socialIcons: {
        "& svg": {
            padding: "0.4rem",
            transform: "scale(1.15)"
        },
    },
    github: {
        transition: "all 0.1s ease-in-out",
        "&:hover": {
            color: "#211F1F",
            cursor: "pointer",
            transform: "scale(1.3)"
        }
    },
    linkedin: {
        transition: "all 0.1s ease-in-out",
        "&:hover": {
            color: "#0e76a8",
            cursor: "pointer",
            transform: "scale(1.3)"
        }
    },
    email: {
        transition: "all 0.1s ease-in-out",
        "&:hover": {
            color: "#ff4343",
            cursor: "pointer",
            transform: "scale(1.3)"
        }
    }
}