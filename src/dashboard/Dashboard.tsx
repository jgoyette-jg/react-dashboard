import React, { FunctionComponent, useEffect, useState } from 'react';

type DashboardProps = {
    username: string,
};

export const Dashboard: FunctionComponent<DashboardProps> = ({username}) => {
    const [project, setProject] = useState<string>();
    const [projectList, setProjectList] = useState<string[]>();

    useEffect(() => {
        setProject('Loews');
    }, []);

    const loadProjects = async () => {
        console.log("Loading projects...");
        fetch('http://localhost:8080/v1/projects')
            .then(response => {
                return response.json();
            })
            .then(data => {
                
                data.forEach((element: string) => {
                    console.log(element);
                });
            })
            .catch(console.error);
    }

    return project ? (
        <div>
        <div>Welcome {username}</div>
        <div>Projects:</div>
        <table>
            <tbody>
                <tr>
                    <td>Projects will be listed here</td>
                </tr>
            </tbody>
        </table>
        <button onClick={loadProjects}>Retrieve Projects</button>
        </div>
    ) : (
        <div>Loading</div>
    );
};

export default Dashboard;