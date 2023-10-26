import { useEffect } from "react";
import FeatureProductCard from "./UI/FeatureProductCard";
import Card from "../UI/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeatureProduct } from "../../store/actions/productAction";

const FeatureProductContainer = () => {
  const { featureProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  console.log(featureProducts);

  useEffect(() => {
    dispatch(fetchFeatureProduct());
  }, []);

  return (
    <Card>
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
    </Card>
  );
};

export default FeatureProductContainer;
