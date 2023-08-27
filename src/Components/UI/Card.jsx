/* eslint-disable react/prop-types */

const Card = (props) => {
  return (
    <div className=" mt-20  flex justify-center items-center">
      <div className=" w-full min-[600px]:w-[80%] flex flex-wrap justify-center item-center gap-4 ">
        {props.children}
      </div>
    </div>
  );
};

export default Card;
