import React, { FunctionComponent } from 'react';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles';
import { CircularProgress, Typography, Box, TypographyVariant } from '@material-ui/core';

const styles = (theme: Theme) =>
    createStyles({
        root: {

        },
    });

interface Props extends WithStyles<typeof styles> {
    size: number;
    name: string;
    level: number;
    typographyVariant: TypographyVariant;
}

const Component: FunctionComponent<Props> = (props: Props) => {
    const { classes, size, name, level, typographyVariant } = props;

    return(
        <Box display='inline-flex' flexDirection={'column'}>
            <Box position='relative' display='inline-flex'>
                <CircularProgress variant="determinate" value={level} size={size} thickness={4} color={'primary'}/>
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
                        {`${level}%`}
                    </Typography>
                </Box>
            </Box>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '8px'}}>
                <Typography>{name}</Typography>
            </div>
        </Box>
    )
};

export default withStyles(styles)(Component);
