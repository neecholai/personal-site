import React from 'react';
import Home from './containers/Home';
import Nav from './components/Nav';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Nav />
			<Home />
		</ThemeProvider>
	);
}

export default App;
