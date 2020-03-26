import React, { useContext, FunctionComponent } from 'react';
import ProjectContext from '../_services/ProjectContext';


type DynamicProjectsProps = {
    username: string,
};

export const DynamicProjects: FunctionComponent<DynamicProjectsProps> = ({username}) => {
    const loader = useContext(ProjectContext);

    return (
        <ProjectContext.Provider value={loadProjects(username)}>
        <div>{loader}</div>
        </ProjectContext.Provider>
    );
};

export default DynamicProjects;
