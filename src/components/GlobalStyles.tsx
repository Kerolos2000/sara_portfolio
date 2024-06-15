import { GlobalStyles as MuiGlobalStyles, useTheme } from '@mui/material';
import React from 'react';

export interface GlobalStylesProps { }

export const GlobalStyles: React.FC<GlobalStylesProps> = () => {
    const theme = useTheme();

    return (
        <MuiGlobalStyles
            styles={{
                '*': {
                    direction: 'ltr',
                },
                a: {
                    '&:hover': {
                        color: theme.palette.secondary.main,
                    },
                    color: theme.palette.primary.main,
                    textDecoration: 'none',
                    transition: '0.5s',
                },
                /* Scrollbar styles */
                '::-webkit-scrollbar': {
                    width: '12px',
                },
                '::-webkit-scrollbar-track': {
                    background: '#f1f1f1',
                },
                '::-webkit-scrollbar-thumb': {
                    background: theme.palette.primary.main,
                },
                '::-webkit-scrollbar-thumb:hover': {
                    background: theme.palette.primary.dark,
                },
                /* Selection styles */
                '::selection': {
                    background: theme.palette.primary.dark,
                    color: theme.palette.common.white,
                },
                '::-moz-selection': {
                    background: theme.palette.primary.main,
                    color: '#fff',
                },
            }}
        />
    );
};
