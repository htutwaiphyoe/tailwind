import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";

import "./App.css";

function App() {
    return (
        <div className="App">
            <ButtonGroup size="large" variant="contained">
                <Button color="primary" startIcon={<SaveIcon />}>
                    Save
                </Button>
                <Button color="error" startIcon={<DeleteIcon />}>
                    Delete
                </Button>
            </ButtonGroup>
        </div>
    );
}

export default App;
