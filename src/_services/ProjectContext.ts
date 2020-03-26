import React, { useState, useContext, FunctionComponent } from 'react';

const [projectList, setProjectList] = useState();

const ProjectContext = React.createContext(['']);

const ProjectProvider = () => {

    const [projectList, setProjectList] = useState();
    
    const loadProject = async (username: string) => {
        console.log("Loading projects...");
        const loader = useContext(ProjectContext);
    
        fetch('http://localhost:8080/v1/projects')
            .then(response => {
                return response.json();
            })
            .then(data => {
                setProjectList(data);
                data.forEach((element: string) => {
                    console.log(element);
                });
            })
            .catch(console.error);
    };

    return (
        <ProjectContext.Provider
            value={{
                projectList,
                setProjectList
            }}>
            {children}
        </ProjectContext.Provider>
    );
};

export default ProjectContext;

export { ProjectProvider };