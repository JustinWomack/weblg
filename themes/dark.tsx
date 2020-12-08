import { createMuiTheme } from '@material-ui/core/styles';

const primaryShades = {
    50: '#EAEEFC',
    100: '#CFF7E8',
    200: '#B1BDD2',
    300: '#94A2BB',
    400: '#687A99',
    500: '#5A6C87',
    600: '#495870',
    700: '#3A455A',
    800: '#273142',
    900: '#1B2431',
};

const secondaryShades = {
    50: '#E7F2FB',
    100: '#C4DFF6',
    200: '#A3CBEF',
    300: '#85B7E7',
    400: '#72A8E2',
    500: '#659ADD',
    600: '#5D8CCF',
    700: '#547ABC',
    800: '#4C69A9',
    900: '#3E4C89',
};

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

const dark = createMuiTheme({
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
                background: '#191E28',
            },
        },
    },
});

export default dark;
