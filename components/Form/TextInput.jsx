import styles from "./Input.module.css";
import {Montserrat} from "next/font/google";

const montserrat = Montserrat({subsets: ["latin"]});
export const TextInput = ({label, className, register, defaultValue}) => {
  return (
    <div
      className={`${montserrat.className} flex flex-col w-[100%] my-[10px] relative ${className}`}
    >
      <label
        className="bg-white left-[10px] absolute top-[-12px] sm:text-[15px]"
        htmlFor=""
      >
        {label}
      </label>
      <input
        className={`${styles.Input} w-[100%] text-[14px] pl-[10px] font-[500] h-[40px]`}
        type="text"
        {...register}
        defaultValue={defaultValue}
      />
    </div>
  );
};
export const DateInput = ({label, className, register}) => {
  return (
    <div
      className={`${montserrat.className} flex flex-col w-[100%] my-[10px] relative ${className}`}
    >
      <label
        className="bg-white left-[10px] absolute top-[-12px] sm:text-[15px]"
        htmlFor=""
      >
        {label}
      </label>
      <input
        className={`${styles.Input} w-[100%] text-[14px] pl-[10px] font-[500] h-[40px]`}
        type="date"
        {...register}
      />
    </div>
  );
};
