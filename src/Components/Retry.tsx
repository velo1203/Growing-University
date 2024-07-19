import styled from "styled-components";
import { Button } from "./Button";
import { retry, usingRetry } from "../Store/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store/Store";

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
    const { retryCost } = useSelector((state: RootState) => state.app);
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
                    dispatch(usingRetry());
                }}
            >
                면제권 {retryCost}개 사용
            </Button>
        </StyledRetry>
    );
}

export default Retry;
