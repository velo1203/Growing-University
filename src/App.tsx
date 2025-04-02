// App.tsx

import { useSelector, useDispatch } from "react-redux";
import { Button } from "./Components/Button.ts";
import Info from "./Components/Info";
import Univ from "./Components/Univ";
import PopupWrapper from "./Components/Wrapper";
import {
    StyledApp,
    StyledControl,
    StyledSubTitle,
    StyledTitle,
} from "./StyledApp";
import Shop from "./Components/Shop";
import uninfo from "./Config/info.json";
import { closePopup, upgrade, sell } from "./Store/appSlice";
import { RootState } from "./Store/Store.ts";
import Retry from "./Components/Retry.tsx";

function App() {
    const dispatch = useDispatch();
    const { isOpen, isBroken, level } = useSelector(
        (state: RootState) => state.app
    );

    const handleUpgrade = () => {
        const currentLevelInfo = uninfo[level - 1];
        dispatch(
            upgrade({
                upgradeCost: currentLevelInfo.upgradeCost,
                successRate: currentLevelInfo.successRate,
            })
        );
    };

    const handleSell = () => {
        const currentLevelInfo = uninfo[level - 1];
        dispatch(sell(currentLevelInfo.sellPrice));
    };

    return (
        <StyledApp>
            <StyledTitle>대학교 키우기</StyledTitle>
            <StyledSubTitle>만든사람 인스타 : dev._ho</StyledSubTitle>
            <Info />
            <Univ />
            <PopupWrapper
                isOpen={isOpen}
                onClose={() => dispatch(closePopup())}
            >
                <Shop />
            </PopupWrapper>
            <PopupWrapper isOpen={isBroken} onClose={() => {}}>
                <Retry />
            </PopupWrapper>
            <StyledControl>
                <Button onClick={handleSell}>판매하기</Button>
                <Button onClick={handleUpgrade}>강화하기</Button>
            </StyledControl>
        </StyledApp>
    );
}

export default App;
