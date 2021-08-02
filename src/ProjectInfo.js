import React, { useEffect } from 'react';
import Slider from "react-slick";
import { withStyles } from '@material-ui/styles';
import styles from './styles/ProjectInfoStyles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Layout from './Layout';
import seedData from './seedData';
import ContactContainer from './ContactContainer';

const ProjectInfo = (props) => {
    const { classes, match, history } = props;

    const currentProject = match.params.projectName;
    const projectData = seedData.find(project => project.projectName === currentProject)
    const projectIndex = seedData.findIndex(project => project.projectName === currentProject)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [currentProject])

    const settings = {
        dots: false,
        arrows: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear"
    }

    const handlePreviousProjectClick = () => {
        if (projectIndex !== 0) {
            history.push(`/portfolio/${seedData[projectIndex - 1].projectName}`)
        } else {
            history.push(`/portfolio/${seedData[seedData.length - 1].projectName}`)
        }
    }

    const handleNextProjectClick = () => {
        if (projectIndex !== seedData.length - 1) {
            history.push(`/portfolio/${seedData[projectIndex + 1].projectName}`)
        } else {
            history.push(`/portfolio/${seedData[0].projectName}`)
        }
    }

    const handleViewWebsiteClick = () => {
        window.open(projectData.url)
    }

    return (
        <Layout>
            <div className={classes.mainImage}>
                <img src={projectData.mainImage} alt="project-img" />
            </div>
            <div className={classes.firstContainer}>
                <div className={classes.left}>
                    <div className={classes.projectTech}>
                        <div className={classes.projectTitle}>
                            {projectData.name}
                        </div>
                        <div className={classes.projectText}>
                            {projectData.techRequirements}
                            <div className={classes.projectType}>
                                {projectData.projectType}
                            </div>
                            <div className={classes.projectTechList}>
                                {projectData.techList}
                            </div>
                        </div>
                        <button className={classes.viewWebsiteButton} onClick={handleViewWebsiteClick}>
                            VIEW WEBSITE
                        </button>
                    </div>
                </div>
                <div className={classes.right}>
                    <div className={classes.background}>
                        <div className={classes.backgroundTitle}>Project Background</div>
                        <div className={classes.projectText}>
                            {projectData.background}
                        </div>
                        <div className={classes.images}>
                            <div className={classes.imagesTitle}>Preview</div>
                            <div className={classes.carousel}>
                                <Slider {...settings}>
                                    {projectData.previewImages.map(image => {
                                        return (
                                            <div key={image}>
                                                <img style={{ width: "100%", height: "80%" }} src={image} alt="preview-img" />
                                            </div>
                                        )
                                    })}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.secondContainer}>
                <div className={classes.previousProject}>
                    <ChevronLeftIcon className={classes.leftIcon} onClick={handlePreviousProjectClick} />
                    <div>
                        {projectIndex !== 0 ? seedData[projectIndex - 1].name : seedData[seedData.length - 1].name}
                        <section>Previous Project</section>
                    </div>
                </div>
                <div className={classes.nextProject}>
                    <div>
                        {projectIndex !== seedData.length - 1 ? seedData[projectIndex + 1].name : seedData[0].name}
                        <section>Next Project</section>
                    </div>
                    <ChevronRightIcon className={classes.rightIcon} onClick={handleNextProjectClick} />
                </div>
            </div>
            <ContactContainer />
        </Layout>
    );
};

export default withStyles(styles)(ProjectInfo);
