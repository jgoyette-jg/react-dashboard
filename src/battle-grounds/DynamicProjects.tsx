import React, { useContext, FunctionComponent } from 'react';
import ProjectContext, { ProjectProvider } from '../_services/ProjectContext';


type DynamicProjectsProps = {
    username: string,
};

export const DynamicProjects: FunctionComponent<DynamicProjectsProps> = ({username}) => {
    const loader = useContext(ProjectContext);
    

    return (
        <ProjectProvider username="Bob">
        </ProjectProvider>
    );
};

export default DynamicProjects;
