import { FunctionComponent, ReactNode, Children, ReactElement, isValidElement } from 'react';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { Typography, GridList, GridListTile, GridListProps, useTheme, useMediaQuery } from '@material-ui/core';
import { BulletinProps } from '../';

const styles = (theme: Theme) =>
    createStyles({
        root: {

        },
        titleElement: {

        },
        subtitleElement: {

        },
        gridContainer: {
            marginTop: 16
        }
    });

interface Props extends WithStyles<typeof styles> {
    title?: string;
    subtitle?: string;
    children?: ReactNode;
}

const Component: FunctionComponent<GridListProps & Props> = (props: GridListProps & Props) => {
    const { classes, title, subtitle, children, ...gridListProps } = props;
    const childArray = Children.toArray(children);
    const cols = gridListProps.cols;

    const theme: Theme = useTheme();
    const sizes: Breakpoint[] = [...theme.breakpoints.keys].reverse();

    const wrappedChildren = Children.map(children, (child, i) => {
        if (!isValidElement<BulletinProps>(child)) {
            return null
        }

        let childElement: ReactElement<BulletinProps> = child;

       const propIndex = sizes.reduce((agg, sz) => {
            agg = (childElement.props[sz] && useMediaQuery(theme.breakpoints.down(sz))) ? childElement.props[sz]! : Math.max(agg, 1);
            return agg
        }, 1);
        
        return(
            <GridListTile key={i} cols={propIndex} rows={2}>
                {childElement}
            </GridListTile>
        )
    });

    return (
        <div className={classes.root}>
            {
                title &&
                <Typography variant='h4' className={classes.titleElement}>
                    {title}
                </Typography>
            }
            {
                subtitle &&
                <Typography variant='subtitle2' className={classes.subtitleElement}>
                    {subtitle}
                </Typography>
            }
            <div className={classes.gridContainer}>
                <GridList {...gridListProps}>
                    {wrappedChildren}
                </GridList>
            </div>
        </div>
    );
};

export default withStyles(styles)(Component);
