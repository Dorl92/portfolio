import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './styles/ProjectCardStyles';
import { withStyles } from '@material-ui/styles';

const ProjectCard = (props) => {

    const { classes, history, project } = props; 
    console.log(project)
    const handleViewProjectClick = () => {
        history.push(`/portfolio/${project.projectName}`)
    }

    return (
        <div className={classes.container}>
            <div className={classes.left}>
                <img src={project.mainImage} alt="project-img" />
            </div>
            <div className={classes.right}>
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