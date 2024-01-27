import type { StateType, actionTypes } from "./types";

const initalState: StateType = {
  products: null,
  error: null,
  isLoading: true,
};

export const cardsReducer = (
  state = initalState,
  action: actionTypes
): typeof initalState => {
  switch (action.type) {
    case "SET_CARDS": {
      return {
        error: null,
        isLoading: false,
        products: action.payload,
      };
    }
    case "GET_CARDS": {
      return state;
    }
    default:
      return state;
  }
};

export type RootState = ReturnType<typeof cardsReducer>;
