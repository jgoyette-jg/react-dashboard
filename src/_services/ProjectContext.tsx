import React, { useState, createContext, useEffect } from 'react';

const defaultProjects = [""];

const ProjectContext = createContext(defaultProjects);

type ContextProps = {
    children: React.ReactNode,
    username: string
}

export const ProjectProvider = ({ children, username }: ContextProps) => {
    const [projectList, setProjectList] = useState(defaultProjects);

    useEffect(() => {
        loadProject(username);
    }, []);
    
    const loadProject = async (username: string) => {
        console.log(`Loading projects for ${username}...`);
    
        fetch('http://localhost:8080/v1/projects')
            .then(response => {
                return response.json();
            })
            .then(dataItems => {
                setProjectList(dataItems);
                
                dataItems.forEach((element: string) => {
                    console.log(element);
                });
            })
            .catch(console.error);
    };
    

    return (
        <ProjectContext.Provider value={projectList}>{children}</ProjectContext.Provider>
    );
};

export default ProjectContext;
