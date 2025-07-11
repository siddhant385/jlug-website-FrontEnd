import React from "react";
import styles from "../style";
import { arrowUp } from "../../assets";


const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[180px] h-[180px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px]leading-[23.4px]">
          <span className="text-gradient">First Year</span>
        </p>
        <img
          src={arrowUp.src}
          alt="arrow-up"
          className="w-[23px] h-[23px] object-contain"
        />
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Recruitment Form</span>
      </p>
    </div>

  </div>
);
export default GetStarted;
