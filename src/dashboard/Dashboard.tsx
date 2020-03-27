import React, { FunctionComponent, useEffect, useState, useContext } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProjectContext from '../_services/ProjectContext';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
      maxWidth: 700,
    },
});

type DashboardProps = {
    username: string,
};
const useProjects = () => useContext(ProjectContext);

export const Dashboard: FunctionComponent<DashboardProps> = ({username}) => {
    const [project, setProject] = useState<string>();
    const projects = useProjects();
    const classes = useStyles();

    useEffect(() => {
        setProject('Loews');
    }, []);

    const logProjects = () => {
        console.log(projects);
    }

    return project ? (
        <div className="Dashboard">
            <TableContainer className={classes.table} component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Focus</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {projects?.projectList?.map(row => (
                        <TableRow key={row}>
                            <TableCell component="th" scope="row"><a href="3">{row}</a></TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant="contained" color="primary" onClick={logProjects}>Hello World</Button>
        </div>
    ) : (
        <div>Loading</div>
    );
};

export default Dashboard;