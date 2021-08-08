import sizes from './sizes';

export default {
    root: {
        display: "flex",
        flexDirection: "column"
    },
    container: {
        display: "flex",
        justifyContent: "space-between",
        borderTop: "1px solid #d8d8d8",
        [sizes.down("sm")]: {
            flexDirection: "column",
        },
        [sizes.down("xs")]: {
            margin: "0rem 1rem"
        }
    },
    left: {
        width: "50%",
        textAlign: "left",
        marginTop: "2rem",
        fontFamily: 'Ibarra Real Nova',
        fontSize: "36px",
        fontWeight: "600",
        [sizes.down("sm")]: {
            width: "80%",
        }
    },
    right: {
        width: "50%",
        textAlign: "left",
        margin: "2rem 0 1rem 0",
        [sizes.down("sm")]: {
            width: "90%",
        },
    },
    text: {
        lineHeight: "180%",
    },
    icons: {
        marginTop: "1.5rem",
        "& svg": {
            padding: "0.5rem",
            transform: "scale(1.3)"
        },
    },
    github: {
        transition: "all 0.2s ease-in-out",
        "&:hover": {
            color: "#211F1F",
            cursor: "pointer",
        }
    },
    linkedin: {
        transition: "all 0.2s ease-in-out",
        "&:hover": {
            color: "#0e76a8",
            cursor: "pointer",
        }
    },
    email: {
        transition: "all 0.1s ease-in-out",
        "&:hover": {
            color: "#ff4343",
            cursor: "pointer",
            transform: "scale(1.3)"
        }
    },
    form: {
        marginBottom: "8rem",
        "& button": {
            border: "1px solid",
            backgroundColor: "white",
            borderRadius: "2px",
            width: "fit-content",
            padding: "1rem 3rem",
            marginTop: "1rem",
            fontSize: "14px",
            fontFamily: "inherit",
            letterSpacing: "1px",
            transition: "all 0.2s ease-in-out",
            "&:hover": {
                cursor: "pointer",
                backgroundColor: "#33323d",
                color: "white"
            }
        },
    },
    input: {
        display: "flex",
        fontFamily: "inherit",
        flexDirection: "column",
        marginBottom: "1.5rem",
        "& input": {
            padding: "0.5rem",
            border: "none",
            height: "35px",
            backgroundColor: "#eaeaeb",
            fontFamily: "inherit",
            fontSize: "16px",
            outline: "none",
        },
        "& textarea": {
            padding: "0.5rem",
            border: "none",
            height: "90px",
            backgroundColor: "#eaeaeb",
            fontFamily: "inherit",
            fontSize: "16px",
            outline: "none"
        },
        "& label": {
            marginBottom: "0.5rem",
            fontSize: "18px",
            fontWeight: "600"
        },
    }
}