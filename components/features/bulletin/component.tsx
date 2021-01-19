import { FunctionComponent, useState, Fragment } from 'react';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles';
import {
    Typography,
    ButtonBase,
} from '@material-ui/core';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

const styles = (theme: Theme) =>
    createStyles({
        overlay: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            padding: 12,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            transition: '.5s ease',
            '&:hover': {
                opacity: 1,
            },
        },
        titleOverlay: {
            position: 'absolute',
            color: 'white',
            textAlign: 'right',
            bottom: 12,
            right: 12,
            paddingLeft: 6,
            marginLeft: 60,
            paddingRight: 6,
            transition: '.5s ease',
        },
        titleOverlayDisappear: {
            position: 'absolute',
            textAlign: 'right',
            color: 'white',
            bottom: 12,
            right: 0,
            paddingLeft: 6,
            marginLeft: 72,
            paddingRight: 6,
            transition: '.5s ease',
            opacity: 0,
        },
        innerTileContainer: {
            border: '2px solid rgb(36, 36, 36)',
            borderRadius: 4,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            boxShadow: '24px, 24px, 2px, red',
            cursor: 'pointer',
        },
        loaderContainer: {
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        focused: {

        }
    });

type Record<K extends keyof any, T> = {
    [P in K]: T;
};

type Partial<T> = {
    [P in keyof T]?: T[P];
};

interface Props extends WithStyles<typeof styles> {
    style?: object;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    mediaUrl: string;
    enableOverlay: boolean;
    title: string;
    description: string;
    href?: string;
}

export type BulletinProps = Props & Partial<Record<Breakpoint, number>>;

const Component: FunctionComponent<BulletinProps> = (props: BulletinProps) => {
    const { classes, onClick, mediaUrl, enableOverlay, title, description, href } = props;
    const [ open, setOpen ] = useState(false)

    const handleOpen = (e: React.MouseEvent<HTMLDivElement>) => setOpen(true);
    const handleClose = (e: React.MouseEvent<HTMLDivElement>) => setOpen(false);
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.persist();
        onClick ? onClick(e) : null;
    }

    return (
        <div className={classes.innerTileContainer}>
            <Fragment>
                <ButtonBase
                    focusRipple
                    focusVisibleClassName={classes.focused}
                    href={href || ''}
                    target={'_blank'}
                    rel={'noopener'}
                    onClick={handleClick}
                    style={{
                        height: '100%',
                        width: '100%',
                        background: `url("${mediaUrl}")`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        transition: `.6s ease`,
                    }}
                >
                {
                    enableOverlay ?
                        <Fragment>
                            <div className={classes.overlay} onMouseEnter={handleOpen} onMouseLeave={handleClose}>
                                <Typography variant={'subtitle1'} align={'center'}>
                                    {description}
                                </Typography>
                            </div>
                            <div className={open ? classes.titleOverlayDisappear : classes.titleOverlay}>
                                <Typography variant={'overline'} style={{display: 'inline', backgroundColor: 'black', padding: 6}}>
                                    {title}
                                </Typography>
                            </div>
                        </Fragment> : <div/>
                }
                </ButtonBase>
            </Fragment>
        </div>
    );
};

export default withStyles(styles)(Component);
