import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${({ bg }) => (bg ? bg : "#ebfbff")};
    padding: 40px 0;

    & h1 {
        color: red;
    }

    &:hover {
        background-color: #111;
    }
`;
