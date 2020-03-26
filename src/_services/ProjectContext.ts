import React, { useContext } from 'react';

const loadProject = async (username: string) => {
    console.log("Loading projects...");
    const loader = useContext(ProjectContext);

    fetch('http://localhost:8080/v1/projects')
        .then(response => {
            return response.json();
        })
        .then(data => {
            loader.setProjectList(data);
            data.forEach((element: string) => {
                console.log(element);
            });
        })
        .catch(console.error);
}

const ProjectContext = React.createContext(['']);

export const ProjectProvider = ProjectContext.Provider;
export const ProjectConsumer = ProjectContext.Consumer;

export default ProjectContext;