import React from "react";
import ProductsCategory from "./UI/ProductsCategory";
import ProductSearch from "./UI/ProductSearch";
import featureProducts from "../../assets/Products/featureProducts";
import MainProductsCard from "./UI/MainProductsCard";
import MainCard from "../UI/MainCard";

const ProductsContainer = () => {
  return (
    <>
      <ProductSearch />
      <ProductsCategory />
      <MainCard>
        {featureProducts.map((products) => {
          return (
            <MainProductsCard
              key={products.id}
              id={products.id}
              name={products.name}
              img={products.img}
              price={products.price}
              brand={products.brand}
              stars={products.stars}
            />
          );
        })}
      </MainCard>
    </>
  );
};

export default ProductsContainer;
