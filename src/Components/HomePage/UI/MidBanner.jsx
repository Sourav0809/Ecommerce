const MidBanner = () => {
  return (
    <div className=" mt-10  bg-[url('..\src\assets\Images\banner\b2.jpg')] p-10  text-white flex flex-col justify-center items-center gap-5 font-custom">
      <h1 className=" text-xl sm:text-base">Repair Services</h1>
      <div className=" flex justify-center items-center flex-wrap gap-2 ">
        <h1 className=" text-2xl min-[500px]:text-5xl font-semibold">
          Upto <span className=" text-red-700">70 % Off</span> - On
        </h1>
        <h1 className=" text-2xl min-[500px]:text-5xl font-semibold">
          All t-Shirt & Accessories
        </h1>
      </div>
      <button className=" bg-white text-black font-medium py-3 px-5">
        Explore More
      </button>
    </div>
  );
};

export default MidBanner;
