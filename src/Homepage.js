import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/HomepageStyles';
import { Element, scroller } from 'react-scroll'

import Layout from './Layout';
import computerImage from './images/homepage-computer-image.jpg';
import downArrow from './images/down-arrows.svg';
import myPhoto from './images/my_photo.jpg';



function Homepage(props) {

    const { classes, history } = props;

    const handleGoToPortfolioClick = () => {
        history.push('/portfolio')
    }

    const scrollTo = () => {
        scroller.scrollTo('about-section', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    const handleContactMeClick = () => {
        history.push('/contact-me')
    }

    return (
        <Layout>
            <div className={classes.root}>
                <div className={classes.firstContainer}>
                    <img src={computerImage} alt="computer" />
                    <div className={classes.aboutMePreview}>
                        <div className={classes.aboutMePreviewText}>
                            Hey, I'm Dor Lahiyani and I love developing React websites
                        </div>
                        <div className={classes.aboutMePreviewButton} onClick={scrollTo}>
                            <div className={classes.icon}>
                                <img style={{ width: "20px", height: "20px" }} src={downArrow} alt="downArrow" />
                            </div>
                            <div className={classes.button}>
                                ABOUT ME
                            </div>
                        </div>
                    </div>
                </div>
                <Element name="about-section">
                    <div className={classes.secondContainer}>
                        <div className={classes.left}>
                            <img style={{borderRadius: "4px"}} src={myPhoto} alt="my-img" />
                        </div>
                        <div className={classes.right}>
                            <div className={classes.aboutMe}>
                                <div className={classes.aboutMeTitle}>
                                    About Me
                                </div>
                                <div className={classes.aboutMeText}>
                                    I’m a junior front-end developer looking for a new role in an exciting company.
                                    I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript.
                                    When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required.
                                    I graduate a B.S.c in mechanical engineering from Ben Gurion University, but I decided to make a professional transition to the world of software development.
                                    I’m based in Tel-Aviv, Israel, and looking for a job in this area but I’m happy working remotely as well.
                                    When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk,
                                    run or cycling. I’d love you to check out my work.
                                </div>
                                <div className={classes.goToPortfolioButton} onClick={handleGoToPortfolioClick}>
                                    GO TO PORTFOLIO
                                </div>
                            </div>
                        </div>
                    </div>
                </Element>
                <div className={classes.thirdContainer}>
                    <div className={classes.text}>Interested in doing a project together?</div>
                    <div className={classes.line}></div>
                    <div className={classes.contactButton} onClick={handleContactMeClick}>CONTACT ME</div>
                </div>
            </div>
        </Layout>
    );
}

export default withStyles(styles)(Homepage);




