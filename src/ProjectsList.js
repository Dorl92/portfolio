import React, { useEffect } from 'react';
import Layout from './Layout';
import ProjectCard from './ProjectCard';
import seedData from './seedData';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ContactContainer from './ContactContainer';

const ProjectsList = () => {

    useEffect(() => {
        Aos.init({
            duration: 2000,
            once: true,
        })
    }, [])

    return (
        <Layout>
            {seedData.map(project => {
                return (
                    <ProjectCard key={project.projectName} project={project} />
                )
            })}
            <ContactContainer />
        </Layout>
    );
};

export default ProjectsList;