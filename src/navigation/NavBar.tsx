import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {ArrowBack} from "@material-ui/icons";
import {NavLink} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
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



export default function NavBar() {
    const classes = useStyles();

    const navItems = [
        {text: 'Dashboard', subNavs: ["Home","Metrics"]}, {text: "Journeys", subNavs: ["Post Transaction", "Recommendations"]}
    ];

    const [open, setOpen] = React.useState<boolean>(false);
    const [currentNav, setCurrentNav] = React.useState<string>("root");

    const renderNavs = (currentNav: string) => {
        if(currentNav === 'root') {
            return (navItems.map((navItem, index) => (
                <ListItem button id={navItem.text} key={navItem.text} onClick={() => {
                    setCurrentNav(navItem.text);
                }}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                    <ListItemText primary={navItem.text}/>
                </ListItem>
            )));
        } else {
            return (
                <React.Fragment>

                    <ListItem button id={"goBack"} key={"goBack"} onClick={() => {
                        setCurrentNav("root");
                    }}>
                        <ListItemIcon>
                            <ArrowBack/>
                        </ListItemIcon>
                        <ListItemText primary={currentNav}/>
                    </ListItem>
                    {
                        navItems?.filter(navItem => navItem.text === currentNav)?.map((navItem) => (
                            navItem.subNavs.map((subNav, index) => (
                                <ListItem button id={subNav} key={subNav} component={NavLink} to={`/${subNav}`} onClick={() => {
                                    console.log(subNav)
                                }}>
                                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                                    <ListItemText primary={subNav}/>
                                </ListItem>
                            ))
                        ))
                    }
                </React.Fragment>
            )
        }
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Project Dashboards
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronRightIcon/>
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    {renderNavs(currentNav)}
                </List>
            </Drawer>
        </React.Fragment>
    );
}
