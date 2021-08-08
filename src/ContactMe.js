import React from 'react';
import { database } from "./firebase";
import { v4 as uuidv4 } from 'uuid';

import useInputState from './hooks/useInputState';
import Layout from './Layout';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import { useSnackbar } from 'react-simple-snackbar';
import { withStyles } from '@material-ui/styles';
import styles from './styles/ContactMeStyles';


const options = {
    position: "top-center",
    style: {
        backgroundColor: "#33323d",
        fontFamily: "Public Sans",
        fontSize: "18px"
    }
}

const ContactMe = (props) => {
    const { classes } = props;

    const [name, changeName, resetName] = useInputState("");
    const [email, changeEmail, resetEmail] = useInputState("");
    const [message, changeMessage, resetMessage] = useInputState("");

    const [openSnackbar] = useSnackbar(options)

    const sendMessage = async (newMessage) => {
        await database.ref('messages/' + uuidv4()).set(newMessage)
        console.log("sent")
    }

    const handleMessageSubmit = (evt) => {
        evt.preventDefault();
        const newMessage = {
            name: name,
            email: email,
            message: message
        }
        console.log(newMessage)
        sendMessage(newMessage)
        openSnackbar("Your message has been sent. I will contact you soon :)");
        resetName();
        resetEmail();
        resetMessage();
    }

    return (
        <Layout>
            <div className={classes.root}>
                <div className={classes.container}>
                    <div className={classes.left}>Get in Touch</div>
                    <div className={classes.right}>
                        <div className={classes.text}>
                            I’d love to hear about what you’re working on and how I could help.
                            I’m currently looking for a new role and am open to a wide range of opportunities.
                            My preference would be to find a position in a company in Tel- Aviv.
                            But I’m also happy to hear about opportunites that don’t fit that description.
                            I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail.
                            Please do feel free to check out my online profiles below and get in touch using the form.
                        </div>
                        <div className={classes.icons}>
                        <LinkedInIcon className={classes.linkedin} onClick={() => window.open("https://www.linkedin.com/in/dor-lahiyani-62a5161a3/")} />
                        <GitHubIcon className={classes.github} onClick={() => window.open("https://github.com/Dorl92")} />
                        <EmailIcon className={classes.email} onClick={() =>  window.open("mailto:dorl929@gmail.com") } />
                        </div>
                    </div>
                </div>
                <div className={classes.container}>
                    <div className={classes.left}>Contact Me</div>
                    <div className={classes.right}>
                        <div className={classes.form}>
                            <form className={classes.form} onSubmit={handleMessageSubmit}>
                                <div className={classes.input}>
                                    <label htmlFor="name">Name</label>
                                    <input
                                        value={name}
                                        onChange={changeName}
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your name"
                                        required />
                                </div>
                                <div className={classes.input}>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        value={email}
                                        onChange={changeEmail}
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="email@example.com"
                                        required />
                                </div>
                                <div className={classes.input}>
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        value={message}
                                        onChange={changeMessage}
                                        id="message"
                                        name="message"
                                        placeholder="How can I help?"
                                        required ></textarea>
                                </div>
                                <div className={classes.button}>
                                    <button type="submit">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default withStyles(styles)(ContactMe);