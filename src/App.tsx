import { useEffect, useState, useCallback } from "react";
import { Button } from "./components/Button";
import Info from "./components/Info";
import Univ from "./components/Univ";
import PopupWrapper from "./components/Wrapper";
import { StyledApp, StyledControl, StyledTitle } from "./StyledApp";
import Shop from "./components/Shop";
import uninfo from "./info.json";
import { upgradeSuccess } from "./utils/random";
import Retry from "./components/Retry";

function App() {
    const [isOpen, setIsOpen] = useState(false); // 상태값을 열고 닫는 함수
    const [cost, setCost] = useState(1000000); // 돈
    const [isBroken, setIsBroken] = useState(false); // 대학교 떨어짐
    const [retry, setRetry] = useState(0); //면제권
    const [level, setLevel] = useState(1); //레벨

    const handleOpenPopup = useCallback(() => setIsOpen(true), []);
    const handleClosePopup = useCallback(() => setIsOpen(false), []);
    const handleRetry = useCallback(() => {
        setIsBroken(false);
        setLevel(1);
    }, []);
    const handleUseRetry = useCallback(() => {
        if (retry === 0) {
            alert("면제권이 없습니다.");
            return;
        }
        setRetry((prevRetry) => prevRetry - 1);
        setIsBroken(false);
    }, [retry]);

    const handleUpgrade = useCallback(() => {
        const currentLevelInfo = uninfo[level - 1];
        if (cost < currentLevelInfo.upgradeCost) {
            alert("돈이 부족합니다.");
            return;
        }
        setCost((prevCost) => prevCost - currentLevelInfo.upgradeCost);
        if (!upgradeSuccess(currentLevelInfo.successRate)) {
            setIsBroken(true);
            return;
        }
        if (level === 20) {
            alert("축하드립니다!");
            return;
        }
        setLevel((prevLevel) => prevLevel + 1);
    }, [cost, level]);

    const handleSell = useCallback(() => {
        const currentLevelInfo = uninfo[level - 1];
        setCost((prevCost) => prevCost + currentLevelInfo.sellPrice);
        setLevel(1);
    }, [level]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "l" && !isBroken) {
                handleUpgrade();
            } else if (event.key === "s" && !isBroken) {
                handleSell();
            }
        };

        window.addEventListener("keyup", handleKeyDown);
        return () => window.removeEventListener("keyup", handleKeyDown);
    }, [handleUpgrade, isBroken, handleSell]);

    return (
        <StyledApp>
            <StyledTitle>대학교 키우기</StyledTitle>
            <Info handleOpenPopup={handleOpenPopup} cost={cost} retry={retry} />
            <Univ uninfo={uninfo} level={level} />
            <PopupWrapper isOpen={isOpen} onClose={handleClosePopup}>
                <Shop
                    setlevel={setLevel}
                    setRetry={setRetry}
                    retry={retry}
                    cost={cost}
                    setCost={setCost}
                    onclose={handleClosePopup}
                />
            </PopupWrapper>
            <PopupWrapper isOpen={isBroken} onClose={() => {}}>
                <Retry
                    handleRetry={handleRetry}
                    handleUseRetry={handleUseRetry}
                />
            </PopupWrapper>
            <StyledControl>
                <Button onClick={handleSell}>판매하기</Button>
                <Button onClick={handleUpgrade}>강화하기</Button>
            </StyledControl>
        </StyledApp>
    );
}

export default App;
