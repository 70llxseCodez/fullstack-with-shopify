import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../store/reducer";

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
