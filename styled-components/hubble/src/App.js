import { ThemeProvider } from "styled-components";

import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header/Header";

const theme = {
    colors: {
        header: "#ebfbff",
        body: "#fff",
        footer: "#003333",
    },
};
function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Header />
            </Container>
        </ThemeProvider>
    );
}

export default App;
