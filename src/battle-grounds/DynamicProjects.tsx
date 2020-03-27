import React, { useContext, FunctionComponent, useEffect } from 'react';
import ProjectContext from '../_services/ProjectContext';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

type DynamicProjectsProps = {
    username: string,
};

export const DynamicProjects: FunctionComponent<DynamicProjectsProps> = ({username}) => {
    const loader = useContext(ProjectContext);

    useEffect(() => {

    }, []);
    

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Focus</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {loader?.projectList?.map(row => (
                    <TableRow key={row}>
                        <TableCell component="th" scope="row"><a href="3">{row}</a></TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DynamicProjects;
