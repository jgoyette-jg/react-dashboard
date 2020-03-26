import React, { FunctionComponent, useEffect, useState, useContext } from 'react';
import { Button } from '@material-ui/core';
import ProjectContext from '../_services/ProjectContext';

type DashboardProps = {
    username: string,
};
const useProjects = () => useContext(ProjectContext);

export const Dashboard: FunctionComponent<DashboardProps> = ({username}) => {
    const [project, setProject] = useState<string>();
    const projects = useProjects();

    useEffect(() => {
        setProject('Loews');
    }, []);

    const logProjects = () => {
        console.log(projects);
    }

    return project ? (
        <div className="Dashboard">
            <table>
                <thead>
                    <tr><th>Welcome {username}</th></tr>
                    <tr><th>Projects</th></tr>
                </thead>
                <tbody>
                    {projects?.projectList?.map(focus => <tr key={focus}><td>{focus}</td></tr>)}
                </tbody>
            </table>
            <Button variant="contained" color="primary" onClick={logProjects}>Hello World</Button>
        </div>
    ) : (
        <div>Loading</div>
    );
};

export default Dashboard;