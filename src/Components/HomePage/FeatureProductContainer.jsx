import { useEffect, useState } from "react";
import FeatureProductCard from "./UI/FeatureProductCard";
import Card from "../UI/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeatureProduct } from "../../store/actions/productAction";
import { memo } from "react";
import SkeletonContainer from "../UI/SkeletonContainer";

const FeatureProductContainer = () => {
  const { featureProducts, loader } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFeatureProduct());
  }, []);

  return (
    <Card>
      {loader ? (
        <SkeletonContainer />
      ) : (
        <>
          {featureProducts.map((products) => {
            return (
              <FeatureProductCard
                key={products.id}
                id={products.id}
                name={products.name}
                img={products.img}
                price={products.price}
                brand={products.brand}
              />
            );
          })}
        </>
      )}
    </Card>
  );
};

export default memo(FeatureProductContainer);
