import React, { useState, useContext, FunctionComponent } from 'react';

type ContextProps = {
    projectList: string[],
}
export const ProjectContext = React.createContext<Partial<ContextProps>>({});

export default ProjectContext;


/*
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


export { ProjectProvider };
*/