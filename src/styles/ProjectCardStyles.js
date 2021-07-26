import sizes from './sizes';

export default {
    container: {
        display: "flex",
        flexDirection: props => (props.project.reverseView ? "row-reverse" : "row"),
        justifyContent: "space-between",
        marginBottom: "7rem",
        [sizes.down("xl")]: {
            // display: "inline",
            flexDirection: props => (props.project.reverseView ? "column" : "column"),
        },
        [sizes.down("xs")]: {
            margin: "0 1rem"
        }
    },
    left: {
        width: "50%",
        "& img": {
            width: "100%",
            height: "",
        },
        [sizes.down("xl")]: {
            width: "100%",
            // flexDirection: "column"
        }
    },
    right: {
        width: "50%",
        textAlign: "left",
        [sizes.down("xl")]: {
            width: "100%",
            // flexDirection: "column"
        }
    },
    aboutProject: {
        height: "100%",
        marginRight: props => (props.project.reverseView ? "6rem" : "0rem"),
        marginLeft: props => (props.project.reverseView ? "0rem" : "6rem"),
        borderTop: "1px solid #d8d8d8",
        [sizes.down("xl")]: {
            borderTop: "none",
            margin: "2rem 0rem",
            marginRight: props => (props.project.reverseView ? "0rem" : "0rem"),
            marginLeft: props => (props.project.reverseView ? "0rem" : "0rem"),
            paddingBottom: "2rem",
            borderBottom: "1px solid #d8d8d8",

            // flexDirection: "column"
        }
    },
    aboutProjectTitle: {
        margin: "2rem 0",
        fontFamily: 'Ibarra Real Nova',
        fontSize: "32px",
        fontWeight: "600",
    },
    aboutProjectText: {
        lineHeight: "170%"
    },
    goToProjectButton: {
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
    },
}