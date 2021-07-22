import React from 'react';
import Layout from './Layout';
import ProjectCard from './ProjectCard';
import seedData from './seedData';
import { withStyles } from '@material-ui/styles';
import styles from './styles/ProjectListStyles';

const ProjectsList = (props) => {
    const { classes, history } = props;

    const handleContactMeClick = () => {
        history.push('/contact-me')
    }

    return (
        <Layout>
            {seedData.map(project => {
                return (
                    <ProjectCard key={project.projectName} project={project} />
                )
            })}
            <div className={classes.thirdContainer}>
                <div className={classes.text}>Intersted in doing a project together?</div>
                <div className={classes.line}></div>
                <div className={classes.contactButton} onClick={handleContactMeClick}>CONTACT ME</div>
            </div>
        </Layout>
    );
};

export default withStyles(styles)(ProjectsList);