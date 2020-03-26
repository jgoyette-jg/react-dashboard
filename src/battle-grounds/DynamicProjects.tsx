import React, { useContext, FunctionComponent } from 'react';
import ProjectContext from '../_services/ProjectContext';

const loadedProjects = (message: string) => {
    console.log(message);
    return "Welcome " + message;
};


type DynamicProjectsProps = {
    username: string,
};

export const DynamicProjects: FunctionComponent<DynamicProjectsProps> = ({username}) => {
    const loader = useContext(ProjectContext);
    return (
        <ProjectContext.Provider value={loadedProjects(username)}>
        <div>{loader}</div>
        </ProjectContext.Provider>
    );
};

export default DynamicProjects;
