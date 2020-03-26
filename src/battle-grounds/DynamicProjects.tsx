import React, { useContext, FunctionComponent } from 'react';

const loadedProjects = (message: string) => {
    console.log(message);
    return "";
};

const ProjectContext = React.createContext('');

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
