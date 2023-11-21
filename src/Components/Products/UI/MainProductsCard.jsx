/* eslint-disable react/prop-types */
import { HiStar } from "react-icons/hi";
import Button from "../../UI/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Print star function to print reviews of the products
const printStar = (stars) => {
  return Array(stars)
    .fill(1)
    .map((val) => {
      return <HiStar key={Math.random()} />;
    });
};

const MainProductsCard = (props) => {
  // navigate hook assignment
  const navigate = useNavigate();

  // hover hook assignment for changing image on hover
  const [hover, setHover] = useState(false);

  // when user click on the product we need to visit the product Details
  const onClickProductHandeler = () => {
    navigate(`/productDetails/${props.id}`);
  };

  return (
    <>
      <div
        onClick={onClickProductHandeler}
        className=" border shadow-xl rounded-md w-[15rem] h-[25rem] min-[600px]:w-[17rem] min-[600px]:h-[32rem]  flex flex-col gap-2 "
      >
        <div className=" h-[58%] min-[600px]:h-[65%] p-4 px-7">
          <img
            className=" w-full h-full rounded-md cursor-pointer "
            src={!hover ? props.img[0] : props.img[1]}
            onMouseEnter={() => setHover((prev) => !prev)}
            onMouseLeave={() => setHover((prev) => !prev)}
          />

          <div className=" p-1">
            <h3 className=" text-xl font-sans font-light">{props.brand}</h3>
            <h1 className="  font-sans font-semibold text-md min-[600px]:text-xl">
              {props.name}
            </h1>
            <div className=" flex text-yellow-500 text-xl">
              {printStar(props.stars)}
            </div>
          </div>

          <div className=" flex flex-col justify-between gap-2  p-2">
            <h1 className=" text-green-600 font-custom font-bold text-2xl">
              &#8377;{props.price}
            </h1>
            <Button>Add To Cart</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainProductsCard;
