import sizes from './sizes';

export default {
    container: {
        display: "flex",
        alignItems: "center",
        margin: "3rem 0 10rem 0",
        [sizes.down("sm")]: {
            flexDirection: "column",
            margin: "3rem 1.5rem 2rem 1.5rem",
        },
    },
    text: {
        width: "35%",
        textAlign: "left",
        fontFamily: 'Ibarra Real Nova',
        fontSize: "34px",
        fontWeight: "600",
        [sizes.down("sm")]: {
            width: "85%",
            textAlign: "center",
            marginTop: "5rem"
        },
    },
    line: {
        height: "1px",
        width: "60%",
        borderBottom: "1px solid #d8d8d8",
        margin: "0 2rem",
        [sizes.down("sm")]: {
            display: "none",
        },
    },
    contactButton: {
        border: "1px solid",
        borderRadius: "2px",
        width: "150px",
        padding: "1rem 3rem",
        margin: "1rem 0",
        fontSize: "14px",
        letterSpacing: "1px",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
            cursor: "pointer",
            backgroundColor: "#33323d",
            color: "white"
        },
        [sizes.down("sm")]: {
            margin: "2rem 0",

        },
    }
}