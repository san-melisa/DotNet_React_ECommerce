import { createBrowserRouter, Navigate } from "react-router";
import App from "../components/App";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import { ContactPage, Shop } from "@mui/icons-material";
import CatalogPage from "../pages/catalog/CatalogPage";
import ProductDetailsPage from "../pages/catalog/ProductDetails";
import ErrorPage from "../pages/ErrorPage";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
import ShoppingCartPage from "../pages/cart/ShoppingCartPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <HomePage />},
            { path: "about", element: <AboutPage />},
            { path: "contact", element: <ContactPage />},
            { path: "catalog", element: <CatalogPage />},
            { path: "catalog/:id", element: <ProductDetailsPage />},
            { path: "cart", element: <ShoppingCartPage />},
            { path: "error", element: <ErrorPage />},
            { path: "server-error", element: <ServerError/>},
            { path: "not-found", element: <NotFound />},
            { path: "*", element: <Navigate to="/not-found" />}
            

        ]

    }
])