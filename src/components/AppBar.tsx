
import { AppBar as AppBarMui, Box, Container, Typography } from '@mui/material';

export function AppBar() {
    return (
        <AppBarMui sx={{ height: '3em' }} position="static">
            <Container sx={{ height: '100%', alignItems: 'center', display: 'flex' }} maxWidth="xl">
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    Sara
                </Typography>

                <Box>
                </Box>
            </Container>
        </AppBarMui>
    );
}
