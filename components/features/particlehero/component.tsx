import React, { FunctionComponent } from 'react';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles';
import Particles from 'react-particles-js';

const styles = (theme: Theme) =>
    createStyles({
        root: {
            height: 600,
            width: '100%',
            position: 'absolute',
            top: 0,
            zIndex: -51,
        },
        partContainer: {
            position: 'relative',
            height: 600,
            width: '100%',
            overflow: 'hidden'
        }
    });

interface Props extends WithStyles<typeof styles> {

}

const initialState = {
    open: false,
};

const Component: FunctionComponent<Props> = (props: Props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <div className={classes.partContainer}>
                <Particles params={
                    {
                        particles: {
                            number: {
                                value: 45,
                                density: {
                                    enable: true,
                                    value_area: 800,
                                },
                            },
                            color: {
                                value: '#ffffff',
                            },
                            shape: {
                                type: 'circle',
                                stroke: {
                                    width: 0,
                                    color: '#000000',
                                },
                                polygon: {
                                    nb_sides: 5,
                                },  
                            },
                            opacity: {
                                value: 0.08,
                                random: true,
                                anim: {
                                    enable: false,
                                    speed: 1,
                                    opacity_min: 0.1,
                                    sync: false,
                                },
                            },
                            size: {
                                value: 3,
                                random: true,
                                anim: {
                                    enable: false,
                                    speed: 40,
                                    size_min: 0.1,
                                    sync: false,
                                },
                            },
                            line_linked: {
                                enable: true,
                                distance: 150,
                                color: '#ffffff',
                                opacity: 0.1,
                                width: 1,
                            },
                            move: {
                                enable: true,
                                speed: 1,
                                direction: 'none',
                                random: false,
                                straight: false,
                                out_mode: 'out',
                                bounce: false,
                                attract: {
                                    enable: false,
                                    rotateX: 600,
                                    rotateY: 1200,
                                },
                            },
                        },
                        interactivity: {
                            detect_on: 'canvas',
                            events: {
                                onhover: {
                                    enable: false,
                                    mode: 'repulse',
                                },
                                onclick: {
                                    enable: false,
                                    mode: 'push',
                                },
                                resize: true,
                            },
                            modes: {
                                grab: {
                                    distance: 400,
                                    line_linked: {
                                        opacity: 1,
                                    },
                                },
                                bubble: {
                                    distance: 400,
                                    size: 40,
                                    duration: 2,
                                    opacity: 8,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                                push: {
                                    particles_nb: 4,
                                },
                                remove: {
                                    particles_nb: 2,
                                },
                            },
                        },
                        retina_detect: true,
                    }
                }/>
            </div>
            
        </div>
    );
};

export default withStyles(styles)(Component);
