import styled from "styled-components";
import { Button } from "./Button";

const StyledInfo = styled.div`
    position: absolute;
    right: 50px;
    padding: 30px;
    background-color: #f4f4f4;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 10px;
    transition: all 0.2s;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    &:hover {
        scale: 1.01;
    }
`;

const StyledInfomations = styled.div`
    display: flex;
    flex-direction: column;
    & > p {
        margin: 5px;
        font-size: 1.2rem;
    }
`;
const StyledMoney = styled.span`
    color: #dfdf6c;
    font-weight: bold;
    font-size: 1.4rem;
`;
function Info({
    handleOpenPopup,
    cost,
}: {
    handleOpenPopup: () => void;
    cost: number;
}) {
    return (
        <StyledInfo>
            <h1>내정보</h1>
            <StyledInfomations>
                <p>
                    돈:
                    <StyledMoney> {cost}원</StyledMoney>
                </p>
                <p>면제권: 1개</p>
            </StyledInfomations>
            <Button onClick={handleOpenPopup}>상점가기</Button>
        </StyledInfo>
    );
}

export default Info;
