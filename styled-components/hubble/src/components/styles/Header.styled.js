import styled from "styled-components";

export const StyledHeader = styled.header`
    background: ${({ theme }) => theme.colors.header};
    padding: 40px 0;
    font-family: "Poppins", sans-serif;
`;

export const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.img``;
