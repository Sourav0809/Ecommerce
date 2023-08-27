const BottomBanner = () => {
  return (
    <div>
      <div className=" mt-20 w-[90%] m-auto flex flex-col lg:flex-row justify-center gap-8 items-center ">
        <div className=" text-white font-custom bg-[url('..\src\assets\Images\banner\b17.jpg')] bg-no-repeat w-[99%] h-[20rem] min-[600px]:w-[42rem] min-[600px]:h-[25rem] bg-cover rounded-md flex flex-col justify-center p-5 items-start gap-3">
          <h1 className=" text-xl">Crazy Deals</h1>
          <h1 className=" text-4xl font-bold">Buy 1 Get 1 Free</h1>
          <button className=" border-2 py-2 px-4 border-white">
            Learn More
          </button>
        </div>
        <div className=" text-white font-custom bg-[url('..\src\assets\Images\banner\b10.jpg')] bg-no-repeat w-[99%] h-[20rem] min-[600px]:w-[42rem] min-[600px]:h-[25rem] bg-cover rounded-md flex flex-col justify-center p-5 items-start gap-3">
          <h1 className=" text-xl">Spring/Summer</h1>
          <h1 className=" text-4xl font-bold">Upcoming Season</h1>
          <button className=" py-2 px-4  bg-emerald-700">Collection</button>
        </div>
      </div>

      {/* -------------------------------------------------------------------------- */
      /*                                second banner                               */
      /* -------------------------------------------------------------------------- */}

      <div className="mt-20  w-[90%] m-auto flex flex-col lg:flex-row justify-center gap-8 items-center">
        <div className=" text-white font-custom bg-[url('..\src\assets\Images\banner\b7.jpg')] bg-no-repeat w-[99%] h-[20rem] min-[600px]:w-[42rem] min-[600px]:h-[25rem] bg-cover rounded-md flex flex-col justify-center p-5 items-start gap-3">
          <h1 className=" text-4xl font-bold tracking-wider">SEASONAL SALE</h1>
          <h1 className=" text-xl font-bold text-red-600">
            Winter Collection 50% Off
          </h1>
        </div>
        <div className=" text-white font-custom bg-[url('..\src\assets\Images\banner\b4.jpg')] bg-no-repeat w-[99%] h-[20rem] min-[600px]:w-[42rem] min-[600px]:h-[25rem] bg-cover rounded-md flex flex-col justify-center p-5 items-start gap-3">
          <h1 className=" text-4xl font-bold tracking-wider">
            NEW FOOTWEAR COLLECTION
          </h1>
          <h1 className=" text-xl font-bold text-red-600">
            Spring/Summer 2023
          </h1>
        </div>
        <div className=" text-white font-custom bg-[url('..\src\assets\Images\banner\b18.jpg')] bg-no-repeat w-[99%] h-[20rem] min-[600px]:w-[42rem] min-[600px]:h-[25rem] bg-cover rounded-md flex flex-col justify-center p-5 items-start gap-3">
          <h1 className=" text-4xl font-bold tracking-wider">TSHIRTS</h1>
          <h1 className=" text-xl font-bold text-red-600">New Trendy Print</h1>
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
