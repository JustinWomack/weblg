import { FunctionComponent, ReactNode } from 'react';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
    Typography,
    SvgIcon,
    Divider,
} from '@material-ui/core';
import { Menu, AccountBox, DonutLarge, Contacts } from '@material-ui/icons';

const styles = (theme: Theme) =>
    createStyles({
        root: {
            marginBottom: 64,
        },
        navLabel: {
            marginLeft: 12,
            marginTop: 24,
        }
    });

interface Props extends WithStyles<typeof styles> {
    onOpen: () => void;
    onClose: () => void;
    onToggle: () => void;
    onOpenContactDialog: () => void;
    setPosition: (position: number) => void;
    open: boolean;
    position: number;
}

type NavItem = {
    name: string;
    materialIcon: ReactNode;
    onClick?: (e: React.MouseEvent) => void;
};

const Component: FunctionComponent<Props> = (props: Props) => {
    const { classes, open, onOpen, onClose, onToggle, position, setPosition, onOpenContactDialog } = props;

    const onSlideTo = (screenPosition: number, slidePosition?: number) => (e: React.MouseEvent) => {
        slidePosition === undefined ? null : setPosition(slidePosition);
        onClose();
        window.scroll({top: screenPosition, left: 0, behavior: 'smooth'});
    };

    const onOpenTab = (href: string) => (e: React.MouseEvent) => {
        window.open(href, '_blank')
        onClose();
    }

    const aboutItems: NavItem[] = [
        {
            name: 'Bio',
            materialIcon: <AccountBox />,
            onClick: onSlideTo(0, 0)
        },
        {
            name: 'Skills & Experience',
            materialIcon: <DonutLarge />,
            onClick: onSlideTo(0, 1)
        },
    ];

    const socialItems: NavItem[] = [
        {
            name: 'Github',
            materialIcon: 
            <SvgIcon>
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
            </SvgIcon>,
            onClick: onOpenTab('https://github.com/JustinWomack'),
        },
        {
            name: 'Instagram',
            materialIcon: 
            <SvgIcon>
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3z" />
            </SvgIcon>,
            onClick: onOpenTab('https://www.instagram.com/justin_womack_/'),
        },
        {
            name: 'LinkedIn',
            materialIcon: 
            <SvgIcon>
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </SvgIcon>,
            onClick: onOpenTab('https://www.linkedin.com/in/justin-womack-740973129'),
        },
    ];

    const contactItems: NavItem[] = [
        {
            name: 'Contact Me',
            materialIcon: <Contacts />,
            onClick: () => {
                onOpenContactDialog();
                onClose();
            },
        }
    ]

    const generateElements = (items: NavItem[]) => {
        return(
            items.map((item, i) => {
                return(
                    <ListItem button onClick={item.onClick} key={i}>
                        <ListItemIcon>
                            {item.materialIcon}
                        </ListItemIcon>
                        <ListItemText>
                            {item.name}
                        </ListItemText>
                    </ListItem>
                )
            })
        )
    }

    return (
        <div className={classes.root}>
            <AppBar>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={onToggle}>
                        <Menu />
                    </IconButton>
                    <Typography variant='h6' style={{flexGrow: 1}}>
                        
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Drawer open={open} onClose={onClose}>
                <List style={{width: 250}}>
                    <Typography className={classes.navLabel} variant='overline'>
                        About
                    </Typography>
                    <Divider/>
                        {
                            generateElements(aboutItems)
                        }
                    <Typography className={classes.navLabel} variant='overline'>
                        Social
                    </Typography>
                    <Divider/>
                        {
                            generateElements(socialItems)
                        }
                    <Typography className={classes.navLabel} variant='overline'>
                        Contact
                    </Typography>
                    <Divider/>
                        {
                            generateElements(contactItems)
                        }
                </List>
            </Drawer>
        </div>
    );
};

export default withStyles(styles)(Component);
