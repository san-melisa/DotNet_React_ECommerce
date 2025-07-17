import { createBrowserRouter } from "react-router";
import App from "../components/App";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import { ContactPage } from "@mui/icons-material";
import CatalogPage from "../pages/catalog/CatalogPage";
import ProductDetailsPage from "../pages/catalog/ProductDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <HomePage />},
            { path: "about", element: <AboutPage />},
            { path: "contact", element: <ContactPage />},
            { path: "catalog", element: <CatalogPage />},
            { path: "catalog/:id", element: <ProductDetailsPage />}

        ]

    }
])