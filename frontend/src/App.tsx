import { useEffect } from "react";
import { fetchCards } from "./store/requests";
import { useTypeSelector } from "./hooks/useTypedSelector";
import { useTypedDispatch } from "./hooks/useTypedDispatch";
import Canvas from "./components/Canvas";
import "./App.css";

const App = () => {
  const dispatch = useTypedDispatch();
  useEffect(() => {
    dispatch(fetchCards());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { products, error, isLoading } = useTypeSelector((state) => state);
  if (error) {
    return <h3>{error.message}</h3>;
  }
  return (
    <div>
      <h3>{isLoading ? "loading" : false}</h3>

      <div className="cards">
        {products?.map((card) => {
          return (
            <div className="card-item" key={card.node.id}>
              <Canvas
                src={card.node.images.nodes[0].src}
                width={200}
                height={200}
              ></Canvas>
              <div dangerouslySetInnerHTML={{ __html: card.node.bodyHtml }} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
