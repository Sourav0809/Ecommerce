const NewsLetter = () => {
  return (
    <div className=" mt-20 mb-20 w-full bg-blue-950 text-white flex justify-center items-center ">
      <div className=" py-20 px-2 flex flex-col justify-center gap-10 md:flex-row items-center w-[80%] ">
        <div className=" w-[98%] md:w-[50vw] flex justify-center items-center flex-col gap-2">
          <h1 className=" text-3xl font-custom font-semibold">
            Sign Up For Newsletters
          </h1>
          <h1 className=" text-sm md:text-xl">
            Get E-mail Updates about our latest shop and{" "}
            <span className=" text-yellow-500">special offers</span>
          </h1>
        </div>
        <div className=" w-[100%] flex justify-center items-center md:w-[50vw]">
          <div className="  w-[70%]">
            <input
              type="email"
              placeholder="Enter Your E-mail adress..."
              className=" bg-white p-2 text-black w-[100%] "
            />
          </div>
          <div>
            <button className=" bg-green-800 text-white px-4 py-[0.55rem]">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
