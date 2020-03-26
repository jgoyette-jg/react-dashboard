import React, { useState, createContext, useEffect } from 'react';

const defaultProjects = [""];
type ProjectContextType = {
    projectList: string[];
    setProjectList: (value: string[]) => void;
};

const ProjectContext = createContext<ProjectContextType|undefined>(undefined);

type ContextProps = {
    children: React.ReactNode,
    username: string
}

export const ProjectProvider = ({ children, username }: ContextProps) => {
    const [projectList, setProjectList] = useState(defaultProjects);

    useEffect(() => {
        fetch('http://localhost:8080/v1/projects')
            .then(response => {
                return response.json();
            })
            .then(dataItems => {
                setProjectList(dataItems);
            })
            .catch(console.error);
    }, []);

    return (
        <ProjectContext.Provider value={{projectList, setProjectList}}>{children}</ProjectContext.Provider>
    );
};

export default ProjectContext;
