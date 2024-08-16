import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  //Verilerin tutulacağı stateyi ayarlama
  const [productList, setProductList] = useState([]);
  // //Eski Metod
  //   useEffect(() => {
  //     fetch("https://dummyjson.com/products")
  //       .then((res) => res.json())
  //       .then((productList) =>
  //         console.log("ikinci dönen yanıt", productList.products)
  //       )
  //       .catch((err) => console.log("Veri çekme hatası", err));
  //   }, []);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProductList(res?.data?.products))
      .catch((err) => console.log("axiosget hatası", err));
  }, []);
  // console.log("Ürünler State", productList);
  return (
    <div>
      <h1>Ürünler</h1>
      <ul>
        {productList?.map((product) => (
          <li key={product?.id}>{product?.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
