import React from "react";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
const ProductSearch = () => {
  /* -------------------------------------------------------------------------- */
  /*                    CHANGE PLACEHOLDER TEXT FUNCTIONALITY                   */
  /* -------------------------------------------------------------------------- */

  const placeholders = [
    "You can Search Pants..... ",
    "You can Search Kurtas.....",
    "You can Search Ganjaa.....",
    "You can Search Sunglass.....",
    "You can Search Jackets.....",
    "You can Search Daruuuu.....",
  ];

  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);

  useEffect(() => {
    // set interval to change the search placeholder every 3 sec
    const intervalId = setInterval(() => {
      setCurrentPlaceholderIndex(
        (prevIndex) => (prevIndex + 1) % placeholders.length
      );
    }, 2000);

    // when the component unmounted we need to clear the interval
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className=" fixed bg-white w-full h-[11rem] sm:h-[12rem] md:h-[9rem] lg:h-[9rem]  p-1">
      <div className=" flex flex-col min-[700px]:flex-row min-[700px]:gap-20 gap-2 min-[700px]:items-center items-start  px-10 font-custom mt-5 ml-10">
        <h1 className="text-2xl font-semibold  ">Buy Our Top Categories</h1>
        <div className=" flex justify-center items-center gap-4">
          <FaSearch className="text-xl  text-blue-950" />
          <input
            className=" w-[60vw] min-[700px]:w-[40vw] outline-none bg-white border-b-2 p-2 pl-4  border-gray-600 pr-2"
            placeholder={placeholders[currentPlaceholderIndex]}
          />
        </div>
      </div>

      {/* FOR SORT THE PRODUCTS */}

      <div className=" flex justify-end items-center font-custom px-16">
        <div className=" flex justify-end items-center gap-2 p-5 ">
          <label htmlFor="products">Sort Products :</label>
          <select
            name="products"
            id="products"
            className="px-7 py-2 rounded-md"
          >
            <option value="high to low">high to low</option>
            <option value="low to high">low to high</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;
