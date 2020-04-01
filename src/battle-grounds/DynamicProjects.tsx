import React, { useContext, FunctionComponent, useEffect } from 'react';
import ProgramContext from '../_services/ProgramContext';

import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';


type DynamicProjectsProps = {
    username: string,
};

export const DynamicProjects: FunctionComponent<DynamicProjectsProps> = ({username}) => {
    const loader = useContext(ProgramContext);

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
            {loader?.programs?.map(row => (
                <Chip key={row.id}
                    label={row} 
                    color="primary"
                    onClick={() => handleClick(row.name)}
                    onDelete={() => handleDelete(row.name)}
                    icon={<FaceIcon />} />
            ))}
        </div>
    );
};

export default DynamicProjects;
