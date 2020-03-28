import React from 'react';

type SecurityProfile = {
    authenticated: boolean,
    roles: string[],
}

const defaultProfile: SecurityProfile  = {
    authenticated: false,
    roles: [""],
}

const loginUser = (username: string) => {
    console.log(`Authenticating ${username}`);
    return "";
}

// The interface to expose to the consumer. Here we are exposing the SecurityProfile object and
// the function `login(username: string)`
type SecurityContextType = {
    profile: SecurityProfile,
    login: (username: string) => string,
};

// The implementation of the SecurityContextType. Technically it's the default implementation and can
// be overridden, but we can override the profile object and also expose the `loginUser()` function
// for a consumer to use to make calls and reuse this object.
const defaultContext: SecurityContextType = {
    profile: defaultProfile,
    login: loginUser,
}

// When we create the context, we want to allow access to the `interface` SecurityContextType which defines 
// the struture of what we want to return to the consumer.
const SecurityContext = React.createContext<SecurityContextType>(defaultContext);


type SecurityProps = {
    children: React.ReactNode,
};

// The first declaration here of {{children}} refers to input parameters (we want to ensure the child nodes
// get passed in so we can then render them out in the `return` function)
export const SecurityProvider = ({ children  }: SecurityProps) => {

    return (
        <SecurityContext.Provider value={defaultContext}>{children}</SecurityContext.Provider>
    )
};

export default SecurityContext;
