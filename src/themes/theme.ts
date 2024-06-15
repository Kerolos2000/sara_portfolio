import { ThemeOptions } from '@mui/material';

export const darkTheme: ThemeOptions = {
	palette: {
		background: {
			default: '#181818',
			paper: '#2c2c2c',
		},
		common: {
			black: '#000000',
			white: '#ffffff',
		},
		mode: 'dark',
		primary: {
			contrastText: '#ffffff',
			dark: '#49243E',
			light: '#704264',
			main: '#e3b9b9',
		},
		secondary: {
			contrastText: '#ffffff',
			dark: '#8a3012',
			light: '#9F6D88',
			main: '#8a3012',
		},
	},
	shape: {
		borderRadius: 25,
	},
};

export const lightTheme: ThemeOptions = {
	palette: {
		background: {
			default: '#fef7ff',
			paper: '#BB8493',
		},
		common: {
			black: '#000000',
			white: '#ffffff',
		},
		mode: 'light',
		primary: {
			contrastText: '#ffffff',
			dark: '#704264',
			light: '#49243E',
			main: '#e3b9b9',
		},
		secondary: {
			contrastText: '#ffffff',
			dark: '#9F6D88',
			light: '#8a3012',
			main: '#8a3012',
		},
	},
	shape: {
		borderRadius: 25,
	},
};
