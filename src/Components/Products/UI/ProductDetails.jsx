import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import featureProducts from "../../../assets/Products/featureProducts";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import Carousel from "../../UI/Carousel";
import { LuPlus } from "react-icons/lu";
import { FiMinus } from "react-icons/fi";
import { HiStar } from "react-icons/hi";

const ProductDetails = () => {
  // useparam hook asignment for getting the id from the link
  const { id } = useParams();
  const navigate = useNavigate();
  const [productQuantity, setProductQuantity] = useState(1);

  // filtering the actual product by using the id
  const filteredProduct = featureProducts.filter((products) => {
    return products.id.toString() === id.toString();
  });

  // when user want to back from the product details page
  const onNavigatHandeler = () => {
    navigate("/shop");
  };

  // when user want to increment product quantity
  const incProductQuantity = () => {
    setProductQuantity((prev) => prev + 1);
  };

  // when user want to decrement product quantity

  const decProductQuantity = () => {
    setProductQuantity((prev) => {
      if (prev > 1) {
        return prev - 1;
      } else {
        return prev;
      }
    });
  };

  return (
    <div className=" mt-5 mb-20">
      <div className=" px-20 flex justify-start items-center gap-2 font-custom  ">
        <FaLongArrowAltLeft className=" text-2xl text-blue-950" />
        <button
          className=" border border-gray-500 p-2 rounded-lg"
          onClick={onNavigatHandeler}
        >
          Back To Products
        </button>
      </div>

      {/* MAIN PRODUCT CAROUSEL WITH SIDE DESCRIPTION*/}

      <div className=" min-[1000px]:w-[75rem] m-auto font-custom ">
        <div>
          <h1 className=" text-4xl p-4 text-blue-950">
            {`${filteredProduct[0].name} By ${filteredProduct[0].brand}`}
          </h1>
        </div>

        <div className=" w-full p-2 flex flex-col min-[750px]:flex-row gap-5">
          <div className=" min-[750px]:w-[40%] w-full ">
            <Carousel Image={filteredProduct[0].img} />
          </div>
          <div className=" p-3 border shadow-xl rounded-lg w-full font-sans flex flex-col gap-5 ">
            <div className=" p-4 flex gap-3 flex-col bg-gray-100 rounded-2xl ">
              <h1 className=" text-3xl">Read Expert Reviews</h1>
              <p>
                Let's Read What the expert have to say about this product so you
                can make the right recommendation for the product
              </p>
              <div className=" flex justify-between items-center w-[30%] md:w-[25%] border border-black p-2 px-4 rounded-2xl cursor-pointer">
                <h1>Read More</h1>
                <IoArrowForward />
              </div>
            </div>

            <div>
              <h1 className="px-4 text-4xl font-custom">
                <span className=" font-sans p-2">&#8377;</span>
                {filteredProduct[0].price}
              </h1>
            </div>

            <div className=" px-4 text-2xl">
              <h1 className=" font-custom">Quantity</h1>
              <div className=" flex justify-start items-center gap-3 mt-2">
                <h1 className=" py-1 px-14 text-center border border-black rounded-3xl">
                  {productQuantity}
                </h1>
                <div
                  className=" border border-black rounded-full cursor-pointer"
                  onClick={incProductQuantity}
                >
                  <LuPlus className=" text-4xl " />
                </div>
                <div
                  className=" border border-black rounded-full cursor-pointer"
                  onClick={decProductQuantity}
                >
                  <FiMinus className=" text-4xl " />
                </div>
              </div>
            </div>

            <div className=" font-custom text-2xl px-4 ">
              <h1>Size</h1>
              <select className="  border-2 border-gray-300 px-7 rounded-lg mt-2">
                <option value={"S"}>S</option>
                <option value={"M"}>M</option>
                <option value={"L"}>L</option>
                <option value={"XL"}>XL</option>
              </select>
            </div>

            <div className=" mt-5 ">
              <button className="  bg-blue-900 text-white  font-custom py-2 px-5 rounded-lg text-xl">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[85%] m-auto mt-12 border-t border-gray-300 ">
        <div>
          <h1 className=" text-2xl p-2 font-custom text-blue-900 font-medium">
            Description
          </h1>
          <p>
            Offering exceptional comfort, these trousers ensure that you feel at
            ease all day long. So, whether you're running errands, attending
            meetings, or relaxing with friends, these trousers will keep you
            comfortable throughout the day. Featuring a solid pattern, these
            trousers are an excellent addition to your wardrobe. So, you can
            pair them with a variety of shirts and shoes to create different
            looks that suit your personal style. Offering exceptional comfort,
            these trousers ensure that you feel at ease all day long. So,
            whether you're running errands, attending meetings, or relaxing with
            friends, these trousers will keep you comfortable throughout the
            day.
          </p>
        </div>
      </div>
      <div className=" w-[85%] m-auto mt-10 border-t border-gray-300 ">
        <div>
          <h1 className=" text-2xl p-2 font-custom text-blue-900 font-medium">
            Quality Assured
          </h1>
          <p>
            {`Introducing the epitome of style and sophistication: our
            ${filteredProduct[0].name} Elevate your wardrobe with this timeless
            piece that seamlessly blends modern trends with classic charm.
            Crafted with precision and an eye for detail, this fashion-forward
            item is designed to make a statement.`}
          </p>
        </div>
      </div>

      <div className=" w-[85%] m-auto mt-10 border-t border-gray-300 ">
        <div className=" flex justify-start items-center">
          <h1 className=" text-2xl p-2 font-custom text-blue-900 font-medium">
            Ratings & Reviews
          </h1>
          <span className=" flex justify-start items-center">
            <HiStar />
            <HiStar />
            <HiStar />
            <HiStar />
            <HiStar />
          </span>
        </div>

        <div className=" mt-4 text-xl bg-gray-300 p-2 px-10 rounded-md ">
          <h1>Sourav Pathak </h1>
          <div className=" flex mt-2">
            <HiStar />
            <HiStar />
            <HiStar />
            <HiStar />
            <HiStar />
          </div>

          <h1 className=" text-lg">The product is very Good</h1>
        </div>

        <div className=" mt-4 text-xl bg-gray-300 p-2 px-10 rounded-md ">
          <h1>Santi </h1>
          <div className=" flex mt-2">
            <HiStar />
            <HiStar />
            <HiStar />
            <HiStar />
            <HiStar />
          </div>

          <h1 className=" text-lg">
            Genuine product , good quality , love the brand
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
