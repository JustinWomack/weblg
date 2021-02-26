import { FunctionComponent, ReactNode, Children, ReactElement, isValidElement } from 'react';
import { createStyles, Theme, WithStyles, withStyles, TypographyVariant } from '@material-ui/core/styles';
import {
    Typography,
    Box,
    CircularProgress,
} from '@material-ui/core';

const styles = (theme: Theme) =>
    createStyles({
        childContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginTop: 18, 
        },
    });

interface Props extends WithStyles<typeof styles> {
    title?: string;
    size: number;
    value?: number;
    children?: ReactNode;
    typographyVariant: TypographyVariant;
}

const Component: FunctionComponent<Props> = (props: Props) => {
    const { classes, title, size, value, children, typographyVariant } = props;
    const childArray = Children.toArray(children);

    const derivedSum = childArray.reduce((agg: number, child, i) => {
        if (!isValidElement<Props>(child)) {
            return agg;
        }

        let childElement: ReactElement<Props> = child;

        return(agg + (childElement.props.value || 0))
    }, 0)

    const derivedAverage = derivedSum / childArray.length || 0;

    // If no value is provided, the value is derived from the average of the children.
    const displayAverage = value ? value : derivedAverage;

    return (
        <Box display='inline-flex' flexDirection={'column'}>
            <Box position='relative' display='inline-flex'>
                <CircularProgress variant="determinate" value={displayAverage} size={size} thickness={4} color={'primary'}/>
                <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position={'absolute'}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <Typography variant={typographyVariant} component={'div'} color='textSecondary'>
                        {`${displayAverage}%`}
                    </Typography>
                </Box>
            </Box>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '8px'}}>
                <Typography>{title}</Typography>
            </div>
            <div className={classes.childContainer} style={{maxWidth: size}}>
                {
                    children
                }
            </div>
        </Box>
    );
};

export default withStyles(styles)(Component);
