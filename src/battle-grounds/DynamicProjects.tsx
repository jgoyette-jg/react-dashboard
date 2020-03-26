import React, { useContext, FunctionComponent, useEffect } from 'react';
import ProjectContext, { ProjectProvider } from '../_services/ProjectContext';


type DynamicProjectsProps = {
    username: string,
};

export const DynamicProjects: FunctionComponent<DynamicProjectsProps> = ({username}) => {
    const loader = useContext(ProjectContext);

    useEffect(() => {
        console.log(`The Project list is: ${loader?.projectList}`);
    }, []);
    

    return (
        <ProjectProvider username="Mary">
            <div>{loader?.projectList}</div>
        </ProjectProvider>
    );
};

export default DynamicProjects;
