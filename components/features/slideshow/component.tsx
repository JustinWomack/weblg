import { FunctionComponent, Children, ReactNode, Fragment } from 'react';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles';
import { ButtonBase } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';

const styles = (theme: Theme) =>
    createStyles({
        changeSlideButton: {
            width: 32,
            height: 12,
            backgroundColor: theme.palette.secondary.main,
            '&:hover': {
                border: '2px solid #f2cb7e'
            },
            margin: 8,
        },
        changeSlideButtonActive: {
            width: 32,
            height: 12,
            backgroundColor: theme.palette.primary.main,
            margin: 8,
        },
    });

interface Props extends WithStyles<typeof styles> {
    onIncrement: () => void;
    onDecrement: () => void;
    setPosition: (position: number) => void;
    position: number;
    children?: ReactNode;
    style?: object;
}

const Component: FunctionComponent<Props> = (props: Props) => {
    const { classes, position, children, style, setPosition } = props;

    const childArray = Children.toArray(children);
  
    const handleChangeIndex = (index) => {
      setPosition(index);
    };    

    const tabElements = childArray.map((child, i) => {
        return(
            <ButtonBase
                focusRipple
                className={position === i ? classes.changeSlideButtonActive : classes.changeSlideButton}
                key={i}
                onClick={(e) => setPosition(i)}
            />
        );
    });

    return (
        <div style={style}>
            <SwipeableViews index={position} onChangeIndex={handleChangeIndex}>
                {children}
            </SwipeableViews>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                {tabElements}
            </div>
        </div>
    );
};

export default withStyles(styles)(Component);
