const TopBanner4 = () => {
  return (
    <section className=" flex flex-col-reverse  md:flex-row h-[60vh] justify-center md:justify-between ">
      <div className=" flex flex-col justify-center  gap-3 p-5 pl-[5%] min-[500px]:p-10 md:pl-[10%]">
        <div className="font-custom">
          <h1 className=" text-2xl min-[500px]:text-3xl">Hassle-Free</h1>
        </div>
        <div className=" text-4xl min-[500px]:text-6xl font-custom font-semibold">
          <h1 className=" text-blue-950">Get All Fashion Product </h1>
          <h1 className=" text-green-600">At One Place </h1>
        </div>

        <div className=" text-[1rem] min-[500px]:text-xl font-serif  text-blue-950 ">
          <h1>With Free Delivery To Your Doorstep</h1>
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
      <div className="flex justify-center w-[100%] md:w-[50vw]  items-center object-cover p-5">
        <img
          className="  md:w-[38vw] w-full   object-cover"
          src="https://img.freepik.com/free-photo/portrait-pretty-lady-red-warm-jacket-stylish-eyeglasses_197531-15046.jpg?size=626&ext=jpg&ga=GA1.1.1822928219.1689105323&semt=ais"
        />
      </div>
    </section>
  );
};

export default TopBanner4;
