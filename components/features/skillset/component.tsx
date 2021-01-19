import React, { FunctionComponent } from 'react';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import Dial from '../dial';

const styles = (theme: Theme) =>
    createStyles({
        dialContainer: {
            display: 'flex',
            justifyContent: 'center',
            padding: 21,
        },
    });

interface Props extends WithStyles<typeof styles> {

}

const Component: FunctionComponent<Props> = (props: Props) => {
    const { classes } = props;

    const skillDescription = 'Skills are focused on creating scalable microservices and web applications that are both responsive and beautiful using the MERN stack. I also have knowledge of simple HTML, CSS, and JQuery for smaller projects, as well as NGINX for routing, load balancing, and authorization.'

    return (
        <Grid container spacing={0} direction='row' justify='center' alignItems='center'>
            <Grid item sm={12} md={4}>
                <div style={{display: 'flex', justifyContent: 'flex-end', padding: 24}}>
                    <div style={{width: '100%'}}>
                        <Typography variant='h1' style={{color: '#f2cb7e', textAlign: 'right'}}>
                            Skills & Experience
                        </Typography>
                        <Typography variant='subtitle1' style={{color: '#c0c2cecc', textAlign: 'right'}}>
                            {skillDescription}
                        </Typography>
                    </div>
                </div>
            </Grid>
            <Grid item sm={6} md={2}>
                <div className={classes.dialContainer}>
                    <Dial title='Essentials' size={140} typographyVariant='h5'>
                        <Dial title='HTML' size={60} typographyVariant='caption' value={100}/>
                        <Dial title='CSS' size={60} typographyVariant='caption' value={98}/>
                        <Dial title='JS' size={60} typographyVariant='caption' value={98}/>
                        <Dial title='TS' size={60} typographyVariant='caption' value={83}/>
                    </Dial>
                </div>
            </Grid>
            <Grid item sm={6} md={2}>
                <div className={classes.dialContainer}>
                    <Dial title='Frontend' size={140} typographyVariant='h5'>
                        <Dial title='React' size={60} typographyVariant='caption' value={92}/>
                        <Dial title='Redux' size={60} typographyVariant='caption' value={96}/>
                        <Dial title='JQuery' size={60} typographyVariant='caption' value={98}/>
                        <Dial title='MUI' size={60} typographyVariant='caption' value={86}/>
                    </Dial>
                </div>
            </Grid>
            <Grid item sm={6} md={2}>
                <div className={classes.dialContainer}>
                    <Dial title='Backend' size={140} typographyVariant='h5'>
                        <Dial title='Express' size={60} typographyVariant='caption' value={98}/>
                        <Dial title='Next.js' size={60} typographyVariant='caption' value={92}/>
                        <Dial title='Mongo' size={60} typographyVariant='caption' value={86}/>
                        <Dial title='GraphQL' size={60} typographyVariant='caption' value={76}/>
                    </Dial>
                </div>
            </Grid>
            <Grid item sm={6} md={2}>
                <div className={classes.dialContainer}>
                    <Dial title='Other' size={140} typographyVariant='h5'>
                        <Dial title='NGINX' size={60} typographyVariant='caption' value={76}/>
                        <Dial title='Scala' size={60} typographyVariant='caption' value={73}/>
                        <Dial title='Scala.js' size={60} typographyVariant='caption' value={82}/>
                    </Dial>
                </div>
            </Grid>
        </Grid>
    );
};

export default withStyles(styles)(Component);
