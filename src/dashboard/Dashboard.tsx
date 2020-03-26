import React, { FunctionComponent, useEffect, useState, useContext } from 'react';
import { Button } from '@material-ui/core';
import ProjectContext, { ProjectProvider } from '../_services/ProjectContext';

type DashboardProps = {
    username: string,
};
const useProjects = () => useContext(ProjectContext);

export const Dashboard: FunctionComponent<DashboardProps> = ({username}) => {
    const [project, setProject] = useState<string>();
    const [projectList, setProjectList] = useState<string[]>();
    const projects = useProjects();

    useEffect(() => {
        setProject('Loews');
        setProjectList(projects);
    }, []);

    return project ? (
        <ProjectProvider>
            <div className="Dashboard">
                <div>Welcome {username}</div>
                <div>Projects:</div>
                <table>
                    <tbody>
                        {projectList?.map(focus => <tr key={focus}><td>{focus}</td></tr>)}
                    </tbody>
                </table>
                <Button variant="contained" color="primary">Hello World</Button>
            </div>
        </ProjectProvider>
    ) : (
        <div>Loading</div>
    );
};

export default Dashboard;