import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#98ee99',
            main: '#66bb6a',
            dark: '#338a3e',
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            light: '#ffffff',
            main: '#e8f5e9',
            dark: '#b6c2b7',
            //   contrastText: will be calculated from palette.secondary.main,
        },
        // error: will use the default color, otherwise would be {
        //     light: palette.error[300],
        //     main: palette.error[500],
        //     dark: palette.error[700],
        //     contrastText: getContrastText(palette.error[500]),
        // },
        }
});

export default theme;
