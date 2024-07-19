import styled from "styled-components";
import { Button } from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store/Store";
import { openPopup } from "../Store/appSlice";

const StyledInfo = styled.div`
    position: absolute;
    right: 50px;
    padding: 30px;
    background-color: #fdfefe;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 10px;
    border: 1px solid #eaebeb;
    transition: all 0.2s;
    &:hover {
        scale: 1.01;
    }
`;

const StyledTitle = styled.h1`
    margin: 0;
    font-size: 1.5rem;
`;

const StyledInfomations = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledInfoItem = styled.p`
    margin: 5px;
    font-size: 1rem;
`;

const StyledMoney = styled.span`
    color: goldenrod;
    font-weight: bold;
    font-size: 1.4rem;
`;

const StyledLabel = styled.span`
    font-weight: normal;
`;

function Info() {
    const { cost, retry, honor } = useSelector((state: RootState) => state.app);
    const dispatch = useDispatch();

    return (
        <StyledInfo>
            <StyledTitle>내 정보</StyledTitle>
            <StyledInfomations>
                <StyledInfoItem>
                    <StyledLabel>돈:</StyledLabel>
                    <StyledMoney> {cost}</StyledMoney>원
                </StyledInfoItem>
                <StyledInfoItem>
                    <StyledLabel>자부심(추가골드):</StyledLabel>{" "}
                    <StyledMoney>{honor}</StyledMoney>원
                </StyledInfoItem>
                <StyledInfoItem>
                    <StyledLabel>면제권:</StyledLabel> {retry}개
                </StyledInfoItem>

                <p>
                    자부심(추가돈): <StyledMoney>{honor}</StyledMoney>원
                </p>
                <p>면제권: {retry}개</p>
            </StyledInfomations>
            <Button onClick={() => dispatch(openPopup())}>상점가기</Button>
        </StyledInfo>
    );
}

export default Info;
