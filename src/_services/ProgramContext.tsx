import React, { useState, createContext, useEffect } from 'react';

const defaultProjects: any[] | (() => any[]) = [];


type Action = {
    "id": number,
    "name": string,
    "status": string
};

type Participant = {
    "id": number,
    "name": string,
    "overallMaturity": number,
    "actions": Action[]
};

type Iteration = {
    "id": number,
    "name": string,
    "startDate": string,
    "endDate": string
};

export type Program = {
    "id": number,
    "name": string,
    "participants": Participant[],
    "iteration": Iteration
};

type ProgramContextType = {
    programs: Program[];
    setPrograms: (value: Program[]) => void;
};

const ProgramContext = createContext<ProgramContextType|undefined>(undefined);

type ContextProps = {
    children: React.ReactNode,
    username: string
}

export const ProjectProvider = ({ children, username }: ContextProps) => {
    const [programs, setPrograms] = useState(defaultProjects);

    useEffect(() => {
        fetch('https://90c48d31-1b77-4ce9-b624-b698d74f091f.mock.pstmn.io/v1/projects')
            .then(response => {
                return response.json();
            })
            .then(dataItems => {
                setPrograms(dataItems.programs);
            })
            .catch(console.error);
    }, []);

    return (
        <ProgramContext.Provider value={{programs, setPrograms}}>{children}</ProgramContext.Provider>
    );
};

export default ProgramContext;
