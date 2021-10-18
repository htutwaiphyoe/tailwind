import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { TextField, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

import "./App.css";

const theme = createTheme({
    typography: {
        fontFamily: "Raleway, Arial",
    },
    palette: {
        primary: {
            main: green[300],
        },
        error: {
            main: purple[300],
        },
    },
});
function App() {
    const [checked, setChecked] = React.useState(false);
    return (
        <ThemeProvider theme={theme}>
            <div>
                <ButtonGroup size="large" variant="contained">
                    <Button color="primary" startIcon={<SaveIcon />}>
                        Save
                    </Button>
                    <Button color="error" startIcon={<DeleteIcon />}>
                        Delete
                    </Button>
                </ButtonGroup>
            </div>
            <div>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={checked}
                            icon={<BookmarkBorderIcon />}
                            checkedIcon={<BookmarkIcon />}
                            onChange={(e) => setChecked(e.target.checked)}
                            inputProps={{
                                "aria-label": "Checkbox",
                            }}
                        />
                    }
                    label="Bookmark"
                />
            </div>
            <div>
                <TextField
                    variant="outlined"
                    label="Email"
                    placeholder="johndoe@example.com"
                    color="secondary"
                    type="email"
                />
            </div>
            <div>
                <Typography variant="h3">This is h3</Typography>
                <Typography variant="h3" component="div">
                    This is h3
                </Typography>
            </div>
        </ThemeProvider>
    );
}

export default App;
