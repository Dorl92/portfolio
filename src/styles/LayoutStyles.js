import sizes from './sizes';

export default {
    root: {
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    container: {
        width: "70vw",
        [sizes.down("md")]: {
            width: "80vw",
        },
        [sizes.down("sm")]: {
            width: "90vw",
        },
        [sizes.down("xs")]: {
            width: "100vw",
        }
    }
}