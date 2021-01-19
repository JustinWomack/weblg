import { FunctionComponent, Children, ReactNode } from 'react';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';

const styles = (theme: Theme) =>
    createStyles({
        root: {
            marginBottom: 64,
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
            <div
                key={i}
                onClick={(e) => setPosition(i)}
                style={{
                    width: 32,
                    height: 12,
                    backgroundColor: position === i ?  '#f2cb7e' : '#c0c2cecc',
                    margin: 8
                }}
            />
        );
    })

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
