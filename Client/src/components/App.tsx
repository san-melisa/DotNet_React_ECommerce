import Header from "./Header";
import { Container, CssBaseline } from "@mui/material";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <> 
      <ToastContainer position="bottom-right" hideProgressBar={true} theme="light"/>
      <CssBaseline />
      <Header/>
      <Container>
        <Outlet/>
      </Container>
    </>
  )
}

export default App
