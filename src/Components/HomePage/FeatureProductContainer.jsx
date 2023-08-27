import featureProducts from "../../assets/Products/featureProducts";
import FeatureProducts from "../HomePage/UI/FeatureProduct";
import Card from "../UI/Card";
const FeatureProductContainer = () => {
  return (
    <Card>
      {featureProducts.map((products) => {
        return (
          <FeatureProducts
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
