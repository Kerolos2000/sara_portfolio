
import { AppBar as AppBarMui, Box, Container, Toolbar, Typography } from '@mui/material';

export function AppBar() {
    return (
        <AppBarMui position="static">
            <Container maxWidth="xl">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', flex: 1 }}>
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
                </Toolbar>
            </Container>
        </AppBarMui>
    );
}
