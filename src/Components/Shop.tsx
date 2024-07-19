// Shop.tsx
import styled from "styled-components";
import { Button } from "./Button";
import shopItemsData from "../Config/shop.json"; // JSON 파일 import
import { useDispatch } from "react-redux";
import { buyItem } from "../Store/appSlice";

interface Item {
    id: number;
    name: string;
    price: number;
    target: string;
    description: string;
    value: number;
}

const StyledItems = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px;
`;

const StyledItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 10px;
    & > p {
        font-size: 13px;
        font-weight: bold;
    }
    & > h1 {
        font-size: 24px;
    }
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

function Shop() {
    const dispatch = useDispatch();

    // 아이템 구매 핸들러
    const handleBuyItem = (
        itemPrice: number,
        itemtarget: string,
        itemvalue: number
    ) => {
        dispatch(buyItem({ itemPrice, target: itemtarget, value: itemvalue }));
    };
    return (
        <StyledItems>
            {shopItemsData.items.map((item: Item) => (
                <StyledItem key={item.id}>
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <p>
                        가격: <span>{item.price}</span>원
                    </p>
                    <Button
                        onClick={() =>
                            handleBuyItem(item.price, item.target, item.value)
                        }
                    >
                        구매
                    </Button>
                </StyledItem>
            ))}
        </StyledItems>
    );
}

export default Shop;
