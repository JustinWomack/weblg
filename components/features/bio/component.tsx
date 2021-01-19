import React, { FunctionComponent, Fragment } from 'react';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles';
import { Typography, Grid, ButtonBase, Container } from '@material-ui/core';

const styles = (theme: Theme) =>
    createStyles({
        textContainer: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            height: '100%',
            paddingLeft: 24,
        },
        pictureContainer: {
            height: 500,
            display: 'flex',
            justifyContent: 'flex-end',
        },
        picture: {
            height: 500,
            width: '100%',
            maxWidth: 600,
            background: `url("/justin-4.png")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        },
        subtitle: {
            maxWidth: 518,
            marginTop: '25px',
        },
    });

interface Props extends WithStyles<typeof styles> {

}

const Component: FunctionComponent<Props> = (props: Props) => {
    const { classes } = props;

    const title = 'Justin Womack';
    const subtitle = 'Web Developer'
    const description = 'I am a freelance web developer based in Austin, TX who specializes in creating awesome web experiences using the latest web technologies, bringing sleek designs and new ideas to your project. Contact me to find out how we can create a site together that captures the look and feel of your place of business.';

    return(
        <Grid container spacing={0}>
            <Grid item xs={12} sm={12} md={6}>
                <div className={classes.pictureContainer}>
                    <div className={classes.picture}/>
                </div>
            </Grid>
            <Grid item sm={12} md={6}>
                <div className={classes.textContainer}>
                    <Typography variant='h1'>{title}</Typography>
                    <Typography variant='h4'>{subtitle}</Typography>
                    <div className={classes.subtitle}>
                        <Typography variant='subtitle1'>{description}</Typography>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
};

export default withStyles(styles)(Component);
