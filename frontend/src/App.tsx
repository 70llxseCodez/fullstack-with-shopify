import { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch("https://fullstack-with-shopify-servers.vercel.app/api/products")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, [count]);
  const increment = () => setCount(count + 1);
  return (
    <div>
      <h1>Product Grid</h1>
      {count}
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default App;
