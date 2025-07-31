import { Alert, AlertTitle, Button, Container, List, ListItem, ListItemText } from "@mui/material";
import requests from "../requests";
import { useState } from "react";

export default function ErrorPage() {

    const [validationErrors, setValidationErrors] = useState<string[]>([]);

    function getValidationErrors() {
        requests.Errors.getValidationError()
            .then(()=> console.log("no validation"))
            .catch(errors => setValidationErrors(errors))
        }
    return (
        <Container>
            {
                validationErrors.length > 0 && (
                    <Alert severity="error">
                        <AlertTitle>Validation Errors</AlertTitle>
                        <List>
                            {
                                validationErrors.map((error, index) => (
                                    <ListItem key={index}>
                                        <ListItemText>{error}</ListItemText>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </Alert>
                )
            }
            <Button
                onClick={() => requests.Errors.get400Error().catch(error => console.log(error))}>
                Test 400 Error
            </Button>
            <Button
                onClick={() => requests.Errors.get401Error().catch(error => console.log(error))}>
                Test 401 Error
            </Button>
            <Button
                onClick={() => requests.Errors.get404Error().catch(error => console.log(error))}>
                Test 404 Error
            </Button>
            <Button
                onClick={() => requests.Errors.get500Error().catch(error => console.log(error))}>
                Test 500 Error
            </Button>
            <Button
                onClick={getValidationErrors}>
                Test Validation Error
            </Button>
        </Container>
    );
}