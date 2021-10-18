import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import "./App.css";

function App() {
    const [checked, setChecked] = React.useState(false);
    return (
        <div className="App">
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
        </div>
    );
}

export default App;
