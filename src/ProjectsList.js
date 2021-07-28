import React,{useEffect} from 'react';
import Layout from './Layout';
import ProjectCard from './ProjectCard';
import seedData from './seedData';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import { withStyles } from '@material-ui/styles';
import styles from './styles/ProjectListStyles';

const ProjectsList = (props) => {
    const { classes, history } = props;

    useEffect(()=>{
        Aos.init({
            duration: 2000,
            once: true,
        })
    },[])

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
            <div data-aos="fade-up" className={classes.thirdContainer}>
                <div className={classes.text}>Intersted in doing a project together?</div>
                <div className={classes.line}></div>
                <div className={classes.contactButton} onClick={handleContactMeClick}>CONTACT ME</div>
            </div>
        </Layout>
    );
};

export default withStyles(styles)(ProjectsList);