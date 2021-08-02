import sizes from './sizes';

export default {
    root: {
        height: "100%",
    },
    firstContainer: {
        marginBottom: "7rem",
        position: "relative",
        "& img": {
            borderRadius: "3px",
            width: "100%",
        },
        [sizes.down("sm")]: {
            position: "static",
        },
    },
    aboutMePreview: {
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        bottom: "0",
        left: "0",
        borderRadius: "0 3px 0 0",
        width: "360px",
        height: "300px",
        backgroundColor: "white",
        [sizes.down("sm")]: {
            position: "static",
            width: "50%",
        },
        [sizes.down("xs")]: {
            width: "95%",
            paddingLeft: "1rem"
        }
    },
    aboutMePreviewText: {
        padding: "1.5rem 1rem 1.5rem 0rem",
        textAlign: "left",
        fontFamily: 'Ibarra Real Nova',
        fontSize: "34px",
        fontWeight: "600"
    },
    aboutMePreviewButton: {
        display: "flex",
        color: "white",
        transition: "all 0.1s ease-in-out",
        "&:hover": {
            cursor: "pointer",
            color: "#5fb4a2"
        }
    },
    button: {
        backgroundColor: "#203A4C",
        padding: "1rem 3rem",
        fontFamily: "inherit",
        fontSize: "12px",
        letterSpacing: "2px",
        borderRadius: "0 2px 2px 0",
    },
    icon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1d3444",
        padding: "0.8rem",
        borderRadius: "2px 0 0 2px",
    },
    secondContainer: {
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "1rem",
        marginBottom: "7rem",
        [sizes.down("md")]: {
            display: "inline",
        },
    },
    left: {
        width: "50%",
        paddingTop: "1rem",
        "& img": {
            width: "100%",
        },
        [sizes.down("md")]: {
            width: "100%",
            "& img": {
                width: "60%",
            }
        },
        [sizes.down("sm")]: {
            "& img": {
                width: "80%",
            }
        }
    },
    right: {
        width: "50%",
        textAlign: "left",
        [sizes.down("md")]: {
            width: "100%",
        }
    },
    aboutMe: {
        height: "100%",
        marginLeft: "5rem",
        borderTop: "1px solid #d8d8d8",
        [sizes.down("xl")]: {
            margin: "0 1rem 0 3rem",
        },
        [sizes.down("md")]: {
            borderBottom: "1px solid #d8d8d8",
            paddingBottom: "2rem",
            margin: "3rem 2rem",
        },
    },
    aboutMeTitle: {
        margin: "2rem 0",
        fontFamily: 'Ibarra Real Nova',
        fontSize: "32px",
        fontWeight: "600",
    },
    aboutMeText: {
        lineHeight: "170%"
    },
    goToPortfolioButton: {
        border: "1px solid",
        borderRadius: "2px",
        width: "fit-content",
        padding: "1rem 3rem",
        marginTop: "2rem",
        fontSize: "14px",
        letterSpacing: "1px",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
            cursor: "pointer",
            backgroundColor: "#33323d",
            color: "white"
        }
    }
}