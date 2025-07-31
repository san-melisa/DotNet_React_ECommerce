import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, Button, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import { Link, NavLink } from "react-router";

const links = [
    { title: "Home", to: "/" },
    { title: "About", to: "/about" },
    { title: "Contact", to: "/contact" },
    { title: "Catalog", to: "/catalog" },
    { title: "Error", to: "/error" }
]

const navStyles = {
    color: "inherit",
    textDecoration: "none",
    "&:hover": {
        color: "primary.light"
    },
    "&.active": {
        color: "primary.dark"
    }
}

export default function Header() {
    return (
        <AppBar position="static" sx={{ mb: 4 }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="h6">E-Commerce</Typography>
                    <Stack direction="row">
                        {links.map(link =>
                            <Button key={link.to} component={NavLink} to={link.to} sx={navStyles}>{link.title}</Button>
                        )}
                    </Stack>
                </Box>
                <Box>
                    <IconButton component={Link} to="/cart" size="large" color="inherit">
                        <Badge badgeContent="2" color="secondary">
                            <ShoppingCart /> 
                        </Badge>
                    </IconButton>
                </Box>

            </Toolbar>
        </AppBar>
    );
}
