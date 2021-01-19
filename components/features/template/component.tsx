import { FunctionComponent } from 'react';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    IconButton,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';

const styles = (theme: Theme) =>
    createStyles({
        root: {
            marginBottom: 64,
        },
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
            <AppBar>
                <Toolbar>
                    <IconButton edge="start" color="inherit">
                        <Menu />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withStyles(styles)(Component);
