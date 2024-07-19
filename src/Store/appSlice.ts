import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { upgradeSuccess } from "../Utils/random";
import uninfo from "../Config/info.json";

// 상태 인터페이스 정의
export interface AppState {
    isOpen: boolean;
    cost: number;
    isBroken: boolean;
    retry: number;
    level: number;
    retryCost: number;
    honor: number;
}

// 초기 상태 설정
const initialState: AppState = {
    // 상태 초기값 설정
    isOpen: false,
    cost: 100000000000,
    isBroken: false,
    retry: 120391023,
    level: 1,
    retryCost: 1,
    honor: 0,
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        // 팝업 열기
        openPopup(state) {
            state.isOpen = true;
        },
        // 팝업 닫기
        closePopup(state) {
            state.isOpen = false;
        },
        // 대학 실패 후 다시 시작
        retry(state) {
            state.isBroken = false;
            state.level = 1;
        },
        // 면제권 사용
        usingRetry(state) {
            if (state.retry === 0) {
                alert("면제권이 없습니다.");
                return;
            }
            if (state.retry < uninfo[state.level - 1].retryCost) {
                alert("면제권이 부족합니다.");
                return;
            }
            state.retry -= uninfo[state.level - 1].retryCost;
            state.isBroken = false;
        },
        // 대학 레벨 업그레이드
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
            state.retryCost = uninfo[state.level - 1].retryCost;
        },
        // 대학 판매
        sell(state, action: PayloadAction<number>) {
            if (state.level === 1) {
                alert("팔 수 없습니다.");
                return;
            }
            state.cost += action.payload + state.honor;
            state.level = 1;
        },
        // 아이템 구매
        buyItem(
            state,
            action: PayloadAction<{
                itemPrice: number;
                target: string;
                value: number;
            }>
        ) {
            if (state.cost < action.payload.itemPrice) {
                alert("돈이 부족합니다.");
                return;
            }
            state.cost -= action.payload.itemPrice;

            // 각 타겟에 따라 상태 업데이트
            if (action.payload.target === "retryCost") {
                //면제권
                state.retry += action.payload.value;
            } else if (action.payload.target === "startLevel") {
                //레벨 시작
                state.level = action.payload.value;
                state.retryCost = uninfo[action.payload.value - 1].retryCost;
            } else if (action.payload.target === "honor") {
                state.honor += action.payload.value;
            }
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
