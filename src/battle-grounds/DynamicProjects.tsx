import React, { useContext, FunctionComponent, useEffect } from 'react';
import ProjectContext from '../_services/ProjectContext';


type DynamicProjectsProps = {
    username: string,
};

export const DynamicProjects: FunctionComponent<DynamicProjectsProps> = ({username}) => {
    const loader = useContext(ProjectContext);

    useEffect(() => {

    }, []);
    

    return (
        <div>{loader?.projectList}</div>
    );
};

export default DynamicProjects;
