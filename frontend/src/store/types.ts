type edgeType = {
  node: {
    id: string;
    bodyHtml: string;
    images: {
      nodes: {
        src: string;
      }[];
    };
  };
}[];

export interface StateType {
  products: edgeType | null;
  error: null | Error;
  isLoading: boolean;
}
export type actionTypes = { type: "SET_CARDS" | "GET_CARDS"; payload: any };
