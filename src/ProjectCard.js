import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './styles/ProjectCardStyles';
import { withStyles } from '@material-ui/styles';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ProjectCard = (props) => {

    const { classes, history, project } = props;

    useEffect(() => {
        Aos.init({
            duration: 2000,
            once: true,
        })
    }, [])


    const handleViewProjectClick = () => {
        history.push(`/portfolio/${project.projectName}`)
    }

    return (
        <div className={classes.container}>
            <div data-aos="fade-right" className={classes.left}>
                <img src={project.mainImage} alt="project-img" />
            </div>
            <div data-aos="fade-left" className={classes.right}>
                <div className={classes.aboutProject}>
                    <div className={classes.aboutProjectTitle}>
                        {project.name}
                    </div>
                    <div className={classes.aboutProjectText}>
                        {project.background}
                    </div>
                    <div className={classes.goToProjectButton} onClick={handleViewProjectClick}>
                        View Project
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(withStyles(styles)(ProjectCard));