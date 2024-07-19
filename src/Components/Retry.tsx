import styled from "styled-components";
import { useEffect } from "react";
import { Button } from "./Button";

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

function Retry({
    handleRetry,
    handleUseRetry,
}: {
    handleRetry: () => void;
    handleUseRetry: () => void;
}) {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "l") {
                handleRetry();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleRetry]);

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
