export const setCardsActions = (payload: {
  products: any;
  error?: any;
  isLoading: boolean;
}) => ({
  type: "SET_CARDS",
  payload: payload,
});
