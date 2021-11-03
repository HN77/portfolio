import React from 'react';
import Project from '../../components/Project';
import { projects } from '../../data';
import { ProjectList, Title, ProjectCard } from './ProjectListElements';

const index = () => {
    return (
        <ProjectList id="project">
            <Title>Mes Projets</Title>
            <ProjectCard>
                {projects.map((project) => (
                    <Project key={project.id} img={project.img} link={project.link} />
                ))}
            </ProjectCard>
        </ProjectList>
    );
};

export default index;
