import React, { useState, createContext, useEffect } from 'react';

const defaultProjects = [""];

const ProjectContext = createContext(defaultProjects);

type ContextProps = {
    children: React.ReactNode,
}

export const ProjectProvider = ({ children }: ContextProps) => {
    const [projectList, setProjectList] = useState(defaultProjects);

    useEffect(() => {
        loadProject('');
    }, []);
    
    const loadProject = async (username: string) => {
        console.log("Loading projects...");
    
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
