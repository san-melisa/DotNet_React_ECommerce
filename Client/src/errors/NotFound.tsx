import { Button, Container, Divider, Typography, Box } from "@mui/material"; 
import { NavLink } from "react-router";


export default function NotFound() {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '80vh',
                textAlign: 'center',
                padding: '2rem',
                backgroundColor: '#f5f5f5',
                borderRadius: '8px',
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
                mt: 4,
                mb: 4,
            }}
        >
            {/* 404 */}
            <Typography
                variant="h1"
                sx={{
                    fontSize: { xs: '6rem', sm: '8rem', md: '10rem' },
                    fontWeight: 900,
                    color: '#e91e63',
                    textShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)',
                    marginBottom: '1rem',
                }}
            >
                404
            </Typography>

            {/* Not Found  */}
            <Typography
                variant="h4"
                sx={{
                    color: '#3f51b5',
                    marginBottom: '1.5rem',
                    fontWeight: 600,
                }}
            >
                Page Not Found
            </Typography>

            {/* Description */}
            <Typography
                variant="body1"
                sx={{
                    color: '#555',
                    marginBottom: '2rem',
                    maxWidth: '400px',
                }}
            >
                Oops! It looks like the page you were looking for doesn't exist.
                Perhaps you mistyped the address, or the page has been moved.
            </Typography>

            <Divider sx={{ width: '60%', mb: '2rem', bgcolor: '#ccc' }} /> 


            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' }, 
                    gap: '1rem', 
                }}
            >
                <Button
                    variant="contained"
                    color="primary" 
                    component={NavLink}
                    to="/catalog"
                    sx={{
                        padding: '12px 24px',
                        fontSize: '1rem',
                        fontWeight: 700,
                        textTransform: 'none', 
                    }}
                >
                    Continue Shopping
                </Button>

                <Button
                    variant="outlined" 
                    color="secondary" 
                    component={NavLink}
                    to="/" 
                    sx={{
                        padding: '12px 24px',
                        fontSize: '1rem',
                        fontWeight: 700,
                        textTransform: 'none',
                    }}
                >
                    Go to Homepage
                </Button>
            </Box>
        </Container>
    );
}