const TopBanner = () => {
  return (
    <section className=" flex flex-col-reverse md:flex-row justify-between">
      <div className=" flex flex-col justify-center gap-3 p-5 pl-[5%] min-[500px]:p-10 md:pl-[10%]">
        <div className="font-custom">
          <h1 className=" text-2xl min-[500px]:text-3xl">Trade-in-Offer</h1>
        </div>
        <div className=" text-4xl min-[500px]:text-6xl font-custom font-semibold">
          <h1 className=" text-blue-950">Super Value Deals </h1>
          <h1 className=" text-green-600">On All Product </h1>
        </div>

        <div className=" text-[1rem] min-[500px]:text-xl font-serif  text-blue-950 ">
          <h1>Save More With Coupons & Up to 70% Off</h1>
        </div>

        <div>
          <button
            className="
          border-none back bg-blue-950 text-white p-2 pl-5 pr-5 rounded-md text-lg"
          >
            Shop Now
          </button>
        </div>
      </div>
      <div className="flex justify-center w-[100%] md:w-[50vw] items-center object-cover p-5">
        <img
          className=" w-[100%] md:w-[38vw]  object-cover"
          src="\wepik-export-20230822161535o6pM.jpeg"
        />
      </div>
    </section>
  );
};

export default TopBanner;
