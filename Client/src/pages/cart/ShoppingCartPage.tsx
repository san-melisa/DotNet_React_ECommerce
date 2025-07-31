import { useEffect, useState } from "react"
import requests from "../../requests"
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, CircularProgress, IconButton } from "@mui/material";
import { Cart } from "../../model/ICart";
import { Delete } from "@mui/icons-material";

export default function ShoppingCartPage() {
    const [cart, setCart] = useState<Cart | null>(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {

        requests.Cart.get()
            .then(cart => setCart(cart))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));

    }, []);

    if (loading) return <CircularProgress />;

    if (!cart) return <h1>
        Your cart is empty. Please add some products to your cart.
    </h1>

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Product </TableCell>
                        <TableCell></TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Sum</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cart.cartItems.map((item) => (
                        <TableRow
                            key={item.productId}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell >
                                <img src={`http://localhost:5270/images/${item.imageUrl}`} style={{height: 60}}/>
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {item.name}
                            </TableCell>
                            <TableCell align="right">{item.price} €</TableCell>
                            <TableCell align="right">{item.quantity}</TableCell>
                            <TableCell align="right">{item.price * item.quantity} €</TableCell>
                            <TableCell align="right"><IconButton aria-label="delete" size="small" color="error"><Delete  fontSize="small"/> </IconButton></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );

}