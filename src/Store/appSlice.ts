// features/appSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { upgradeSuccess } from "../Utils/random";

export interface AppState {
    isOpen: boolean;
    cost: number;
    isBroken: boolean;
    retry: number;
    level: number;
}

const initialState: AppState = {
    isOpen: false,
    cost: 100000,
    isBroken: false,
    retry: 0,
    level: 1,
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        openPopup(state) {
            state.isOpen = true;
        },
        closePopup(state) {
            state.isOpen = false;
        },
        retry(state) {
            state.isBroken = false;
            state.level = 1;
        },
        usingRetry(state) {
            if (state.retry === 0) {
                alert("면제권이 없습니다.");
                return;
            }
            state.retry -= 1;
            state.isBroken = false;
        },
        upgrade(
            state,
            action: PayloadAction<{ upgradeCost: number; successRate: number }>
        ) {
            if (state.cost < action.payload.upgradeCost) {
                alert("돈이 부족합니다.");
                return;
            }
            state.cost -= action.payload.upgradeCost;
            if (!upgradeSuccess(action.payload.successRate)) {
                state.isBroken = true;
                return;
            }
            if (state.level === 20) {
                alert("축하드립니다!");
                return;
            }
            state.level += 1;
        },
        sell(state, action: PayloadAction<number>) {
            state.cost += action.payload;
            state.level = 1;
        },
        buyItem(
            state,
            action: PayloadAction<{ itemPrice: number; startLevel?: number }>
        ) {
            if (state.cost < action.payload.itemPrice) {
                alert("돈이 부족합니다.");
                return;
            }
            if (action.payload.startLevel !== undefined) {
                state.level = action.payload.startLevel;
            } else {
                state.retry += 1;
            }
            state.cost -= action.payload.itemPrice;
        },
    },
});

export const {
    openPopup,
    closePopup,
    retry,
    usingRetry,
    upgrade,
    sell,
    buyItem,
} = appSlice.actions;

export default appSlice.reducer;
