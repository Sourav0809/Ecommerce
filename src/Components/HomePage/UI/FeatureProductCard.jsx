/* eslint-disable react/prop-types */
import { HiStar } from "react-icons/hi";
import Button from "../../UI/Button";

const FeatureProductCard = (props) => {
  return (
    <div className=" border shadow-xl rounded-md w-[15rem] h-[28rem] min-[600px]:w-[22rem] min-[600px]:h-[36rem]  flex flex-col gap-2 ">
      <div className=" h-[65%] min-[600px]:h-[75%] p-4 px-7">
        <img className=" w-full h-full rounded-md " src={props.img} />

        <div className=" p-1">
          <h3 className=" text-xl font-sans font-light">{props.brand}</h3>
          <h1 className="  font-sans font-semibold text-xl">{props.name}</h1>
          <div className=" flex text-yellow-500 text-xl">
            <HiStar />
            <HiStar />
            <HiStar />
            <HiStar />
            <HiStar />
          </div>
        </div>

        <div className=" flex justify-between items-center p-2">
          <h1 className=" text-green-600 font-custom font-bold text-2xl">
            &#8377;{props.price}
          </h1>
          <Button>Buy Now</Button>
        </div>
      </div>
    </div>
  );
};

export default FeatureProductCard;
