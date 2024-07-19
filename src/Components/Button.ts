import styled from "styled-components";

export const Button = styled.button`
    cursor: pointer;
    padding: 30px 60px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    border-radius: 16px;
    background-color: #EAEBEB;
    border: 1px solid #EAEBEB;
    transition: all 0.1s;
    &:hover {
        scale: 1.03;
    }
    &:active {
        scale: 0.98;
    }
`;
