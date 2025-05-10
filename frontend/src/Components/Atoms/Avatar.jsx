import React from "react";

const Avatar = ({ Img }) => {
  return (
    <div className="">
      <img
        src={Img}
        alt="Random Profile Image"
        className={"w-[2rem] h-[2rem] rounded-full"}
      />
    </div>
  );
};

export default Avatar;
