import React from "react";

const ProductsCategory = () => {
  return (
    <>
      {/*Using product search component here*/}

      <div className=" px-10 py-5 flex items-center flex-wrap gap-6 font-custom">
        <div className=" flex flex-col justify-center items-center">
          <div className=" w-[16rem] h-[18rem] p-3 bg-green-100 rounded-md  hover:shadow-slate-500 shadow-lg cursor-pointer  ">
            <img
              className=" object-cover w-full h-full rounded-md "
              src="https://rukminim2.flixcart.com/image/832/832/kkr72q80/shirt/f/r/m/38-12442634-roadster-original-imagyyymzeytwzeg.jpeg?q=70"
            />
          </div>
          <h1 className=" mt-2 font-medium text-xl text-blue-950">Shirts</h1>
        </div>

        <div className=" flex flex-col justify-center items-center">
          <div className=" w-[16rem] h-[18rem] p-3 bg-green-100 rounded-md  hover:shadow-slate-500 shadow-lg cursor-pointer  ">
            <img
              className=" object-cover w-full h-full rounded-md "
              src="https://rukminim2.flixcart.com/image/612/612/xif0q/watch/w/3/c/-original-imagrk9skd8xv9ac.jpeg?q=70"
            />
          </div>
          <h1 className=" mt-2 font-medium text-xl text-blue-950">Watch</h1>
        </div>

        <div className=" flex flex-col justify-center items-center">
          <div className=" w-[16rem] h-[18rem] p-3 bg-green-100 rounded-md  hover:shadow-slate-500 shadow-lg cursor-pointer  ">
            <img
              className=" object-cover w-full h-full rounded-md "
              src="https://rukminim2.flixcart.com/image/612/612/xif0q/jean/s/1/q/34-ljrmg005-lzard-original-imagteww2sghnje9.jpeg?q=70"
            />
          </div>
          <h1 className=" mt-2 font-medium text-xl text-blue-950">Pants</h1>
        </div>

        <div className=" flex flex-col justify-center items-center">
          <div className=" w-[16rem] h-[18rem] p-3 bg-green-100 rounded-md  hover:shadow-slate-500 shadow-lg cursor-pointer  ">
            <img
              className=" object-cover w-full h-full rounded-md "
              src="https://rukminim2.flixcart.com/image/416/416/xif0q/shirt/3/j/v/xxl-st10-vebnor-original-imagnvrqgv7e5crg.jpeg?q=70"
            />
          </div>
          <h1 className=" mt-2 font-medium text-xl text-blue-950">T-shirts</h1>
        </div>

        <div className=" flex flex-col justify-center items-center">
          <div className=" w-[16rem] h-[18rem] p-3 bg-green-100 rounded-md  hover:shadow-slate-500 shadow-lg cursor-pointer  ">
            <img
              className=" object-cover w-full h-full rounded-md "
              src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/m/e/e/s-kurta-rahul-look-original-imaga2g6qmhbywdf-bb.jpeg?q=70"
            />
          </div>
          <h1 className=" mt-2 font-medium text-xl text-blue-950">Kurta</h1>
        </div>

        <div className=" flex flex-col justify-center items-center">
          <div className=" w-[16rem] h-[18rem] p-3 bg-green-100 rounded-md  hover:shadow-slate-500 shadow-lg cursor-pointer  ">
            <img
              className=" object-cover w-full h-full rounded-md "
              src="https://rukminim2.flixcart.com/image/612/612/kxp0mfk0/frame/s/b/u/52-na-flwr-85stg-vilenray-original-imaga2qy84nxnxv2.jpeg?q=70"
            />
          </div>
          <h1 className=" mt-2 font-medium text-xl text-blue-950">Eyeglass</h1>
        </div>
      </div>
    </>
  );
};

export default ProductsCategory;
