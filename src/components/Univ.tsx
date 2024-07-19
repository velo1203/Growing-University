import { useState } from "react";
import styled from "styled-components";

const StyledUniv = styled.div`
    height: 350px;
    margin: 50px;
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

function Univ({ level, uninfo }: { level: number; uninfo: any }) {
    return (
        <StyledUniv>
            <StyledUnivImg src={level + ".png"} alt="" />
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
