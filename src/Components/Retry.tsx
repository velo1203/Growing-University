import styled from "styled-components";
import { Button } from "./Button";
import { retry, useRetry } from "../Store/appSlice";
import { useDispatch } from "react-redux";

const StyledRetry = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;

    & > p {
        font-size: 20px;
    }
    & > h1 {
        font-size: 24px;
    }
`;

function Retry() {
    const dispatch = useDispatch();

    return (
        <StyledRetry>
            <h1>아이고 이런!</h1>
            <p>대학을 떨어지셨네요</p>
            <Button
                onClick={() => {
                    dispatch(retry());
                }}
            >
                다시하기
            </Button>
            <Button
                onClick={() => {
                    dispatch(useRetry());
                }}
            >
                면제권 사용
            </Button>
        </StyledRetry>
    );
}

export default Retry;
