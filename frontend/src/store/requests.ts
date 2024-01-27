import { setCardsActions } from "./actions";

export const fetchCards = () => {
  return (dispatch: any) => {
    fetch("https://fullstack-with-shopify-servers.vercel.app/api/products")
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        dispatch(setCardsActions(response.edges));
      })
      .catch((error) =>
        dispatch(
          setCardsActions({
            products: null,
            error: error,
            isLoading: false,
          })
        )
      );
  };
};
