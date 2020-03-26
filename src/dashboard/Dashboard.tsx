import React, { FunctionComponent, useEffect, useState } from 'react';
import { Button } from '@material-ui/core';

type DashboardProps = {
    username: string,
};

export const Dashboard: FunctionComponent<DashboardProps> = ({username}) => {
    const [project, setProject] = useState<string>();
    const [projectList, setProjectList] = useState<string[]>();

    useEffect(() => {
        setProject('Loews');
        loadProjects();
    }, []);

    const loadProjects = async () => {
        console.log("Loading projects...");
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
    }

    return project ? (
        <div className="Dashboard">
            <div>Welcome {username}</div>
            <div>Projects:</div>
            <table>
                <tbody>
                    {projectList?.map(focus => <tr><td>{focus}</td></tr>)}
                </tbody>
            </table>
            <Button variant="contained" color="primary">Hello World</Button>
        </div>
    ) : (
        <div>Loading</div>
    );
};

export default Dashboard;