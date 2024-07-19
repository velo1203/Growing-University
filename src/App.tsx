import { useState } from "react";
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
    const [isOpen, setIsOpen] = useState(false);
    const [cost, setCost] = useState(100000);
    const handleOpenPopup = () => setIsOpen(true);
    const handleClosePopup = () => setIsOpen(false);
    const [isBroken, SetIsBroken] = useState(false);
    const [retry, setRetry] = useState(0);

    const handleRetry = () => {
        SetIsBroken(false);
        setLevel(1);
    };

    const handleUseRetry = () => {
        if (retry === 0) {
            alert("면제권이 없습니다.");
            return;
        }
        setRetry(retry - 1);
        SetIsBroken(false);
    };

    const [level, setLevel] = useState(1);
    const handleUpgrade = () => {
        if (cost < uninfo[level - 1].upgradeCost) {
            alert("돈이 부족합니다.");
            return;
        }
        setCost(cost - uninfo[level - 1].upgradeCost);
        if (!upgradeSuccess(uninfo[level - 1].successRate)) {
            SetIsBroken(true);
        }
        if (level === 20) {
            alert("축하드립니다!");
            return;
        }
        setLevel(level + 1);
    };
    const handleSell = () => {
        setCost(cost + uninfo[level - 1].sellPrice);
        setLevel(1);
    };

    return (
        <StyledApp>
            <StyledTitle>대학교 키우기</StyledTitle>
            <Info handleOpenPopup={handleOpenPopup} cost={cost} />
            <Univ uninfo={uninfo} level={level} />
            <PopupWrapper isOpen={isOpen} onClose={handleClosePopup}>
                <Shop />
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
