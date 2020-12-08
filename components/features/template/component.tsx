import React from 'react';
import { createStyles, Theme, withStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
    createStyles({
        root: {
            marginBottom: 21,
        },
    });

interface Props {
    classes?: any;
}

const initialState = {
    open: false,
};

type State = Readonly<typeof initialState>;

class Template extends React.Component<Props, State> {
    readonly state: State = initialState;
    constructor(props: Props) {
        super(props);
        this.state = {
            open: initialState.open,
        };
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                Template
            </div>
        );
    }

    private handleOpen = () => this.setState(openDialog);
}

const openDialog = (prevState: State) => ({ open: false });

export default withStyles(styles)(Template);
