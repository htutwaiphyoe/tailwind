import { StyledHeader, Navigation, Logo } from "../styles/Header.styled";
import { Container } from "../styles/Container.styled";
import { Button } from "../styles/Button.styled";

function Header() {
    return (
        <StyledHeader>
            <Container>
                <Navigation>
                    <Logo src="./images/logo.svg" alt="Huddle" />
                    <Button>Try it free</Button>
                </Navigation>
            </Container>
        </StyledHeader>
    );
}
export default Header;
