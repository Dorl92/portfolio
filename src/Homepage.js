import React, {useEffect} from 'react';
import { withStyles } from '@material-ui/styles';
import Slider from "react-slick";
import styles from './styles/HomepageStyles';
import { Element, scroller } from 'react-scroll';
import Aos from 'aos';
import 'aos/dist/aos.css'; 

import Layout from './Layout';

import homepageImage1 from './images/homepage-image-1.jpg';
import homepageImage2 from './images/homepage-image-2.jpg';
import homepageImage3 from './images/homepage-image-3.jpg';

import downArrow from './images/down-arrows.svg';
import myPhoto from './images/my_photo.jpg';

function Homepage(props) {

    const { classes, history } = props;

    useEffect(()=>{
        Aos.init({
            duration: 2000,
            once: true,
        })
    },[])

    const settings = {
        dots: false,
        arrows: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        cssEase: "linear"
    }

    const images = [homepageImage1, homepageImage2, homepageImage3];

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
                    <Slider {...settings}>
                        {images.map(image => {
                            return (
                                <div key={image}>
                                    <img src={image} style={{width: "100%", height:"90%"}} alt="homepage-img" />
                                </div>
                            )
                        })}
                    </Slider>
                    <div data-aos="fade" className={classes.aboutMePreview}>
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
                        <div data-aos="fade-right" className={classes.left}>
                            <img style={{ borderRadius: "4px" }} src={myPhoto} alt="my-img" />
                        </div>
                        <div data-aos="fade-left" className={classes.right}>
                            <div className={classes.aboutMe}>
                                <div className={classes.aboutMeTitle}>
                                    About Me
                                </div>
                                <div className={classes.aboutMeText}>
                                    I’m a junior front-end developer looking for a new role in an exciting company.
                                    I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript.
                                    When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required.
                                    I graduated a B.S.c in mechanical engineering from Ben Gurion University, but I decided to make a professional transition to the world of software development.
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
                <div data-aos="fade-up" className={classes.thirdContainer}>
                    <div className={classes.text}>Interested in doing a project together?</div>
                    <div className={classes.line}></div>
                    <div className={classes.contactButton} onClick={handleContactMeClick}>CONTACT ME</div>
                </div>
            </div>
        </Layout>
    );
}

export default withStyles(styles)(Homepage);




