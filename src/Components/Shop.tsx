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
    startLevel?: number;
}

// Parse shop items to replace null with undefined
const shopItems: { items: Item[] } = {
    items: shopItemsData.items.map((item) => ({
        ...item,
        startLevel: item.startLevel === null ? undefined : item.startLevel,
    })),
};

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
        font-size: 15px;
    }
    & > h1 {
        font-size: 24px;
    }
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

function Shop() {
    const dispatch = useDispatch();

    const handleBuyItem = (itemPrice: number, startLevel?: number) => {
        dispatch(buyItem({ itemPrice, startLevel }));
    };

    return (
        <StyledItems>
            {shopItems.items.map((item: Item) => (
                <StyledItem key={item.id}>
                    <h1>{item.name}</h1>
                    <p>가격: {item.price}원</p>
                    <Button
                        onClick={() =>
                            handleBuyItem(item.price, item.startLevel)
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
