import { FunctionComponent, useState } from 'react';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles';
import {
    Typography,
    Button
} from '@material-ui/core';

const styles = (theme: Theme) =>
    createStyles({
        root: {
            marginBottom: 21,
            width: 480,
            height: 590,
            marginLeft: 4,
            marginRight: 4,
            border: '1px solid rgba(0, 0, 0, .8)',
            borderRadius: '2px',
        },
        outerContainer: {
            position: 'relative',
            width: '100%',
            height: '100%',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        },
        slidingOverlayClosed: {
            position: 'absolute',
            bottom: 0,
            height: 88,
            width: '100%',
            overflow: 'hidden',
            transition: '.5s ease',
            backgroundColor: 'black',
        },
        slidingOverlayOpened: {
            position: 'absolute',
            bottom: 0,
            height: 148,
            width: '100%',
            overflow: 'hidden',
            transition: '.5s ease',
        },
        staticOverlayOpened: {
            color: 'black',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            bottom: 0,
            height: 88,
            padding: 24,
            backgroundColor: 'rgba(20, 23, 31, 1)',
            transition: '.5s ease',
        },
        staticOverlayClosed: {
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            bottom: 0,
            height: 88,
            padding: 24,
            backgroundColor: 'rgba(20, 23, 31, .3)',
            transition: '.5s ease',
        },
        hiddenContainer: {
            height: 60,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    });

interface Props extends WithStyles<typeof styles> {
    imageUrl: string;
    flashColor: string;
    title: string;
    subtitle: string;
    buttonTitle: string;
    onButtonClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Component: FunctionComponent<Props> = (props: Props) => {
    const { classes, imageUrl, flashColor, title, subtitle, buttonTitle, onButtonClick } = props;
    const [open, setOpen] = useState(false)

    const handleOpen = (e: React.MouseEvent<HTMLDivElement>) => setOpen(true);
    const handleClose = (e: React.MouseEvent<HTMLDivElement>) => setOpen(false);

    const bgImageStyle = {
        backgroundImage: `url(${imageUrl})`,
    };
    const slidingOverlayOpenedStyle = {
        backgroundColor: flashColor,
    };
    const slidingOverlayClosedStyle = {
        backgroundColor: 'rgba(20, 23, 31, 1)',
    };

    return (
        <div className={classes.root} onMouseEnter={handleOpen} onMouseLeave={handleClose}>
            <div className={classes.outerContainer} style={{...bgImageStyle}}>
                <div className={open ? classes.slidingOverlayOpened : classes.slidingOverlayClosed} style={open ? {...slidingOverlayOpenedStyle} : {...slidingOverlayClosedStyle}}>
                    <div className={open ? classes.staticOverlayOpened : classes.staticOverlayClosed}>
                        <Typography variant={'h5'} style={{color: 'rgba(255, 255, 255, 0.8)'}}>
                            {title}
                        </Typography>
                        <Typography variant={'subtitle1'} style={{color: 'rgba(255, 255, 255, 0.5)'}}>
                            {subtitle}
                        </Typography>
                    </div>
                    <div className={classes.hiddenContainer}>
                        <Button onClick={onButtonClick} variant={'contained'} color={'primary'} style={{width: '100%', height: '100%'}}>
                            {buttonTitle}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withStyles(styles)(Component);
