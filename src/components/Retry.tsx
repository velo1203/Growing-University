import styled from "styled-components";
import { Button } from "./Button";

const StyledRetry = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 10px;

    & > p {
        font-size: 20px;
    }
    & > h1 {
        font-size: 24px;
    }
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

function Retry({
    handleRetry,
    handleUseRetry,
}: {
    handleRetry: () => void;
    handleUseRetry: () => void;
}) {
    return (
        <StyledRetry>
            <h1>아이고 이런!</h1>
            <p>대학을 떨어지셨네요</p>
            <Button onClick={handleRetry}>다시하기</Button>
            <Button onClick={handleUseRetry}>면제권 사용</Button>
        </StyledRetry>
    );
}

export default Retry;
