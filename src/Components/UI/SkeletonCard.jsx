import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = () => {
  return (
    <div className=" border shadow-xl rounded-md w-[15rem] h-[28rem] min-[600px]:w-[18rem] min-[600px]:h-[36rem]  flex flex-col gap-2 ">
      <div className=" h-[65%] min-[600px]:h-[75%] p-4 px-7">
        <Skeleton width={"100%"} height={"100%"} />

        <div className=" p-1">
          <h3 className=" text-xl font-sans font-light">
            <Skeleton />
          </h3>
          <h1 className="  font-sans font-semibold text-xl">
            <Skeleton />
          </h1>
          <div className=" flex text-yellow-500 text-xl">
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        </div>
        <Skeleton count={1} containerClassName="flex-1" />
      </div>
    </div>
  );
};

export default SkeletonCard;
