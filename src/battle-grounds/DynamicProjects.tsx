import React, { useContext, FunctionComponent, useEffect } from 'react';
import ProjectContext from '../_services/ProjectContext';

import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';


type DynamicProjectsProps = {
    username: string,
};

export const DynamicProjects: FunctionComponent<DynamicProjectsProps> = ({username}) => {
    const loader = useContext(ProjectContext);

    useEffect(() => {

    }, []);
    
    const handleClick = (item: string) => {
        console.log(`Clicked ${item}`);
    };

    const handleDelete = (item: string) => {
        console.log(`Deleting ${item}`);
    };

    return (
        <div>
            {loader?.projectList?.map(row => (
                <Chip key={row} 
                    label={row} 
                    color="primary"
                    onClick={() => handleClick(row)}
                    onDelete={() => handleDelete(row)}
                    icon={<FaceIcon />} />
            ))}
        </div>
    );
};

export default DynamicProjects;
