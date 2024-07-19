import styled from "styled-components";

export const Button = styled.button`
    cursor: pointer;
    padding: 15px 30px;
    font-size: 1.4rem;
    border-radius: 10px;
    font-weight: bold;
    transition: all 0.1s;
    &:hover {
        scale: 1.03;
    }
    &:active {
        scale: 0.98;
    }
`;
