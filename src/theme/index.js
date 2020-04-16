import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: '#E4E2E5',
      },
      secondary: {
        main: '#2D576D',
      },
    },
    typography: {
      fontFamily: 'Nunito',
    },
  })
);

export default theme;
