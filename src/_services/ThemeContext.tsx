import React from 'react';

const defaultTheme = "white";

const ThemeContext = React.createContext(defaultTheme);

type Props = {
    children: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
    const [theme, setTheme] = React.useState(defaultTheme);

    React.useEffect(() => {
        const currentTheme = "lightblue";
        setTheme(currentTheme);
    }, []);

    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
};
