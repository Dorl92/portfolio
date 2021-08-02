import sizes from './sizes';

export default {
    mainImage: {
        width: "100%",
        height: "30%",
        "& img": {
            width: "100%",
            height: "100%",
        }
    },
    firstContainer: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "2rem",
        marginBottom: "7rem",
        [sizes.down("md")]: {
            flexDirection: "column",
        },
        [sizes.down("xs")]: {
            margin: "5rem 1rem"
        }
    },
    left: {
        width: "40%",
        textAlign: "left",
        borderRight: "1px solid #d8d8d8",
        [sizes.down("md")]: {
            width: "100%",
            borderBottom: "1px solid #d8d8d8",
            borderRight: "none",
            paddingBottom: "2rem"
        },
    },
    projectTech: {
        height: "100%",
        marginRight: "4rem",
        [sizes.down("md")]: {
            marginRight: "0rem",
        },
    },
    projectTitle: {
        margin: "2rem 0",
        fontFamily: 'Ibarra Real Nova',
        fontSize: "32px",
        fontWeight: "600",
    },
    projectText: {
        lineHeight: "170%"
    },
    projectType: {
        color: "#5fb4a2",
        fontWeight: "600",
        margin: "1rem 0"
    },
    projectTechList: {
        color: "#5fb4a2",
        fontWeight: "600",
        margin: "0.5rem 0"
    },
    viewWebsiteButton: {
        border: "1px solid",
        borderRadius: "2px",
        backgroundColor: "white",
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
    right: {
        width: "60%",
        textAlign: "left",
        [sizes.down("md")]: {
            width: "100%",
        },
    },
    background: {
        height: "100%",
        marginLeft: "4rem",
        [sizes.down("md")]: {
            marginLeft: "0rem",
            paddingTop: "2rem"
        },
    },
    backgroundTitle: {
        margin: "2rem 0",
        fontFamily: 'Ibarra Real Nova',
        fontSize: "32px",
        fontWeight: "600",
    },
    imagesTitle: {
        margin: "2rem 0",
        fontFamily: 'Ibarra Real Nova',
        fontSize: "32px",
        fontWeight: "600",
    },
    carousel: {
        width: "100%",
        padding: "0.5rem",
        borderRadius: "10px",
        boxShadow: " 0px 3px 25px -16px rgba(111,120,111,1)",
        [sizes.down("md")]: {
            width: "95%",
        },
    },
    secondContainer: {
        display: "flex",
        justifyContent: "space-between",
        margin: "6rem 0",
        fontFamily: 'Ibarra Real Nova',
        fontSize: "24px",
        fontWeight: "600",
        "& section": {
            padding: "0.5rem 0",
            fontFamily: 'Public Sans',
            fontSize: "16px",
            fontWeight: "300",
            color: "#c0c0c0"
        },
        [sizes.down("xs")]: {
            margin: "1rem 1rem"
        }
    },
    previousProject: {
        display: "flex",
        alignItems: "center",
        padding: "2rem 0.5rem",
        width: "50%",
        border: "1px solid #d8d8d8",
        borderLeft: "none",
        textAlign: "left",
    },
    leftIcon: {
        paddingRight: "1rem",
        transform: "scale(1.5)",
        "&:hover": {
            cursor: "pointer"
        }
    },
    rightIcon: {
        paddingLeft: "1rem",
        transform: "scale(1.5)",
        "&:hover": {
            cursor: "pointer"
        }
    },
    nextProject: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "2rem 0.5rem",
        width: "50%",
        border: "1px solid #d8d8d8",
        borderRight: "none",
        borderLeft: "none",
        textAlign: "right",
    }
}