import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

/*
const primaryShades = {
    50: '#bbbbbb',
    100: '#a4a4a4',
    200: '#8e8e8e',
    300: '#777777',
    400: '#606060',
    500: '#494949',
    600: '#333333',
    700: '#1c1c1c',
    800: '#191919',
    900: '#191919',
}
*/

const primaryShades = {
    50: '#fcf5e5',
    100: '#fbefd8',
    200: '#faeacb',
    300: '#f9e5bf',
    400: '#f7e0b2',
    500: '#f6dba5',
    600: '#f5d598',
    700: '#f3d08b',
    800: '#f2cb7e',
    900: '#dab771',
}

const secondaryShades = {
    50: '#f1f1f4f0',
    100: '#ececf0eb',
    200: '#e6e7ebe6',
    300: '#e0e1e7e0',
    400: '#d9dae1db',
    500: '#d1d3dbd6',
    600: '#c9cbd5d1',
    700: '#c0c2cecc',
    800: '#a5a6b1d1',
    900: '#8c8d96d6',
}

const primaryColor = {
    light: primaryShades[500],
    main: primaryShades[800],
    dark: primaryShades[900],
};

const secondaryColor = {
    light: secondaryShades[500],
    main: secondaryShades[700],
    dark: secondaryShades[900],
};

const stealth = createMuiTheme({
    typography: {
        h1: {
            color: primaryColor.main,
        },
        h4: {
            color: secondaryColor.main,
        }
    },
    palette: {
        primary: primaryColor,
        secondary: secondaryColor,
        background: {
            paper: 'linear-gradient(rgba(5, 22, 37, 0.6), rgba(0,0,0,.6))',
        },
        text: {
            primary: 'rgba(255, 255, 255, 0.80)',
            secondary: 'rgba(255, 255, 255, 0.50)',
        },
    },
    overrides: {
        MuiPaper: {
            root: {
                boxShadow: '5px 3px 25px black',
                borderRadius: '0px',
                background: '#1c1c1c',                
            },
        },
        MuiAppBar: {
            root: {
                boxShadow: '5px 3px 25px black',
                borderRadius: '0px',
                background: '#1c1c1c',
                color: 'rgba(255, 255, 255, 0.80)',
            },
            colorPrimary: {
                backgroundColor: '#1c1c1c',
                color: 'rgba(255, 255, 255, 0.80)',
            },
        },
        MuiListItemIcon: {
            root: {
                color: 'rgb(242 203 126 / 88%)'
            }
        },
        MuiDivider: {
            root: {
                backgroundColor: '#c0c2ce14'
            }
        }
    },
});

export default responsiveFontSizes(stealth);
