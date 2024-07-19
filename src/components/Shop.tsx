import styled from "styled-components";
import { Button } from "./Button";

const StyledItems = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px;
`;

const StyledItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 10px;
    & > p {
        font-size: 15px;
    }
    & > h1 {
        font-size: 24px;
    }
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
function Shop() {
    return (
        <StyledItems>
            <StyledItem>
                <h1>면제권</h1>
                <p>가격: 1000원</p>
                <Button>구매</Button>
            </StyledItem>
            <StyledItem>
                <h1>5레벨부터 시작</h1>
                <p>가격: 1000원</p>
                <Button>구매</Button>
            </StyledItem>
            <StyledItem>
                <h1>8레벨부터 시작</h1>
                <p>가격: 1000원</p>
                <Button>구매</Button>
            </StyledItem>
        </StyledItems>
    );
}

export default Shop;
