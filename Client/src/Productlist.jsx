import React, { useEffect, useState } from "react";
import ProductsData from "./data";
import Product from "./product";
import axios from "axios";
const Productlist = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    axios
      .get("/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching data:", error);
      });
  };

  const handleClick = async (id) => {
    const res = await axios.delete(`/products/${id}`);
    console.log(res.data);
    if (res.data._id) {
      setProducts(products.filter((p) => p._id !== res.data._id));
    }
    // setProducts(res.data);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div className="">
        {products.map((product, index) => (
          <Product {...product} key={index} handleClick={handleClick}></Product>
        ))}
      </div>
    </>
  );
};

export default Productlist;
