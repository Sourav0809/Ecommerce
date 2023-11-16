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
    "You can Search Sareee.....",
    "You can Search Sunglass.....",
    "You can Search Jackets.....",
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
    <div className=" flex gap-20 items-center px-10 font-custom mt-5 ml-10">
      <h1 className="text-2xl font-semibold  ">Buy Our Top Categories</h1>
      <div className=" flex justify-center items-center">
        <FaSearch className="text-xl  text-blue-950" />
        <input
          className=" w-[30vw] outline-none border-b-2 p-2 pl-4  border-gray-600 pr-2"
          placeholder={placeholders[currentPlaceholderIndex]}
        />
      </div>
    </div>
  );
};

export default ProductSearch;
