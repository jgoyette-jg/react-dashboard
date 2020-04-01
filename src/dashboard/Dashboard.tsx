import React, { FunctionComponent, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProgramContext, {Program} from '../_services/ProgramContext';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import {ExpandMore} from "@material-ui/icons";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import LinearProgress from "@material-ui/core/LinearProgress";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    lightGrey: {
        color: '#D3D3D3'
    },
    panelDirection: {
        flexDirection: 'column'
    },
    reverseButtonDirection: {
        flexDirection: 'row-reverse'
    },
    textAlignCenter: {
        textAlign: 'center'
    }
}));


type DashboardProps = {
    username: string,
};

const usePrograms = () => useContext(ProgramContext);

const determineDiffInDays = (endDate: string) => {
    const diff = moment(endDate).diff(moment(), 'days');
    return diff > 0 ? diff : 0;
};

const buildCards = (program: Program, classes: any) => {
    return program.participants.map((participant => {
        return (<Grid item xs={12} md={6} lg={4}>
            <Card className={classes.root}>
                <CardHeader
                    title={participant.name}
                />
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item  xs={12}>
                            <div>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Overall maturity
                                </Typography>
                            </div>
                            <div>
                                <LinearProgress variant="determinate" value={participant.overallMaturity}/>
                            </div>
                        </Grid>
                        <Grid item  xs={4} lg={4} className={classes.textAlignCenter}>
                            <div>
                                <Typography>{participant.actions.length}</Typography>
                                <Typography>Action items</Typography>
                            </div>
                        </Grid>
                        <Grid item  xs={12} lg={4} className={classes.textAlignCenter}>
                            <div>
                                <div>
                                    <Typography>{participant.actions.filter((action) => {
                                        return action.status === "COMPLETED";
                                    }).length}</Typography>
                                    <Typography>Completed</Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item  xs={12} lg={4} className={classes.textAlignCenter}>
                            <div>
                                <div>
                                    <Typography>{determineDiffInDays(program.iteration.endDate)}</Typography>
                                    <Typography>Days left</Typography>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>)
    }))
}

export const Dashboard: FunctionComponent<DashboardProps> = ({username}) => {
    const programs = usePrograms();

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h3" gutterBottom>
                        Dashboard
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom>
                        Journeys
                    </Typography>
                </Grid>
                {programs?.programs.map(program => {
                    return (
                        <Grid item xs={12}>
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMore />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    className={classes.reverseButtonDirection}>
                                    <div className={classes.panelDirection}>
                                        <span>
                                            {program.name}&nbsp;-&nbsp;<span className={classes.lightGrey}>{program.participants.length} participants</span>
                                        </span>
                                            <span>
                                            <Typography className={classes.lightGrey}>
                                                Iteration {program.iteration.name} - {program.iteration.startDate} - {program.iteration.endDate}
                                            </Typography>
                                        </span>
                                    </div>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <div>
                                        <Grid container spacing={3}>
                                            {buildCards(program, classes)}
                                        </Grid>
                                    </div>
                                </ExpansionPanelDetails>:
                            </ExpansionPanel>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    );
};

export default Dashboard;