import styled from "styled-components";
import { Button } from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store/Store";
import { openPopup } from "../Store/appSlice";

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
        font-size: 1rem;
    }
`;
const StyledMoney = styled.span`
    color: #b7b716;
    font-weight: bold;
    font-size: 1.4rem;
`;
function Info() {
    const { cost, retry, honor } = useSelector((state: RootState) => state.app);
    const dispatch = useDispatch();

    return (
        <StyledInfo>
            <h1>내정보</h1>
            <StyledInfomations>
                <p>
                    돈:
                    <StyledMoney> {cost}</StyledMoney>원
                </p>
                <p>
                    자부심(추가골드): <StyledMoney>{honor}</StyledMoney>원
                </p>
                <p>면제권: {retry}개</p>
            </StyledInfomations>
            <Button onClick={() => dispatch(openPopup())}>상점가기</Button>
        </StyledInfo>
    );
}

export default Info;
