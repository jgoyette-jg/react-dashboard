import React from 'react';
import './App.css';
import Dashboard from './dashboard/Dashboard';
import DynamicProjects from './battle-grounds/DynamicProjects';
import { ProjectProvider } from './_services/ProjectContext';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import NavBar from "./navigation/NavBar";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Router>
                <NavBar/>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Switch>
                        <Route path='/metrics'><Metrics/></Route>
                        <Route path='/'><Home/></Route>
                    </Switch>
                </main>
            </Router>
        </div>
    );
}

function Home() {
    return (
        <ProjectProvider username="Anthony">
            <Dashboard username="Anthony" />
        </ProjectProvider>
    );
}

function Metrics() {
    return (
        <ProjectProvider username="Anthony">
            <DynamicProjects username="Blah blah blah" />
        </ProjectProvider>
    );
}


export default App;
