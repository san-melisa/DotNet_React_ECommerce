import { CircularProgress, Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IProduct } from "../../model/IProduct";
import requests from "../../requests";
import NotFound from "../../errors/NotFound";

export default function ProductDetailsPage() {

    const { id } = useParams();
    const [product, setProduct] = useState<IProduct | null>(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
       
        id && requests.Catalog.details(parseInt(id))
            .then(data => setProduct(data))
            .catch(error => console.error("Error fetching product details:", error))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <CircularProgress />;
    if (!product) return <NotFound/>;

    return (
        <Grid container spacing={6}>
            <Grid size={{ xs: 12, sm: 6, md: 5, lg: 4 }}>
                <img src={`http://localhost:5270/images/${product.imageUrl}`} style={{ width: "100%" }} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 7, lg: 8 }}>
                <Typography variant="h3">{product.name}</Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="h4" color="secondary">{product.price.toFixed(2)} €</Typography>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>{product.name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Description</TableCell>
                                <TableCell>{product.description}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Stock</TableCell>
                                <TableCell>{product.stock}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
}