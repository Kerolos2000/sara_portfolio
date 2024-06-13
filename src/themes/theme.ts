import { ThemeOptions } from '@mui/material';

export const darkTheme: ThemeOptions = {
	palette: {
		background: {
			default: '#222831',
			paper: '#31363F',
		},
		common: {
			black: '#000000',
			white: '#ffffff',
		},
		mode: 'dark',
		primary: {
			contrastText: '#ffffff',
			dark: '#31363F',
			light: '#76ABAE',
			main: '#76ABAE',
		},
		secondary: {
			contrastText: '#ffffff',
			dark: '#62727B',
			light: '#A0CED9',
			main: '#A0CED9',
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
