import { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../Store/Store";
import uninfo from "../Config/info.json";
const StyledUniv = styled.div`
    height: 350px;
    margin: 50px;
    transition: transform 0.1s ease-out;
    &.thud {
        transform: scale(1.05);
    }
`;

const StyledUnivTitle = styled.div`
    font-size: 1.3rem;
    font-weight: bold;
    margin-top: 15px;
`;

const StyledUnivInfo = styled.div`
    font-size: 1rem;
    margin-top: 5px;
    padding: 25px;
    font-weight: bold;
`;

const StyledUnivImg = styled.img`
    width: 180px;
`;

function Univ() {
    const { level } = useSelector((state: RootState) => state.app);

    useEffect(() => {
        // 전환효과 코드
        const element = document.getElementById("univ-container");
        if (element) {
            element.classList.add("thud");
            setTimeout(() => {
                element.classList.remove("thud");
            }, 100);
        }
    }, [level]);

    return (
        <StyledUniv id="univ-container">
            <StyledUnivImg src={`${uninfo[level - 1].name}.png`} alt="" />
            <StyledUnivTitle>
                {level}.{uninfo[level - 1].name}
            </StyledUnivTitle>
            <StyledUnivInfo>
                <p>강화확률 : {uninfo[level - 1].successRate * 100}%</p>
                <p>판매금액 : {uninfo[level - 1].sellPrice}원</p>
                <p>강화비용 : {uninfo[level - 1].upgradeCost}원</p>
            </StyledUnivInfo>
        </StyledUniv>
    );
}

export default Univ;
