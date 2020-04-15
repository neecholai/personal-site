import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = responsiveFontSizes(
	createMuiTheme({
		palette: {
			primary: {
				main: '#E4E2E5',
      },
			secondary: blue,
    },
    typography: {
      fontFamily: 'Nunito'
    }
	})
);

export default theme;
