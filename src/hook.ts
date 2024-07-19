// hooks.ts
import {
    TypedUseSelectorHook,
    useSelector as rawUseSelector,
} from "react-redux";
import { RootState } from "./Store/Store";

// 커스텀 appSelecter 훅 정의
export const appSelecter: TypedUseSelectorHook<RootState> = rawUseSelector;
