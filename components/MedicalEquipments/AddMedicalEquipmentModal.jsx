"use client";
import { useDispatch, useSelector } from "react-redux";
import { TextInput } from "../Form/TextInput";
import { showModals, addMedicalEquipment } from "@/store/slices";
import { useCallback } from "react";
import { DateInput } from "../Form/TextInput";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Montserrat } from "next/font/google";
import styles from "../Form/Input.module.css";
import swal from "sweetalert";
const montserrat = Montserrat({ subsets: ["latin"] });
const AddMedicalEquipmentModal = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.operator.showModal);
  const { token } = useSelector((state) => state.operator);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const loadMedicalEquipmentData = useCallback(() => {
    if (token) {
      ///API call to load medical Equipments
    }
  }, [token]);

  return (
    <div className={`${show ? "block" : "hidden"} w-[100vw] h-[100vh] absolute top-0 left-0`}>
      <div className="w-[100vw] h-[100vh] bg-white opacity-[50%] z-[200] absolute top-0 left-0 z-100"></div>
      <div
        className={`bg-white shadow-md  absolute top-[80px]  z-[300] left-[50%] transform translate-x-[-50%]  w-[500px] px-[30px] px-[40px] sm:w-[310px]`}
      >
        <div onClick={() => dispatch(showModals())}>
          <svg
            className=" absolute cursor-pointer top-[10px] right-[10px]"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.7299 1.57214C14.8155 1.48672 14.8833 1.38531 14.9296 1.27367C14.976 1.16203 14.9998 1.04237 14.9999 0.921502C15 0.800637 14.9763 0.680941 14.9301 0.569248C14.8839 0.457555 14.8162 0.356052 14.7308 0.270536C14.6453 0.185019 14.5439 0.117163 14.4323 0.0708412C14.3206 0.0245197 14.201 0.000640007 14.0801 0.00056572C13.9593 0.000491433 13.8396 0.024224 13.7279 0.0704082C13.6162 0.116593 13.5147 0.184324 13.4291 0.269736L7.87875 5.82014L2.32995 0.269736C2.15724 0.0970267 1.923 -1.81979e-09 1.67875 0C1.4345 1.81978e-09 1.20026 0.0970267 1.02755 0.269736C0.854839 0.442445 0.757813 0.676688 0.757812 0.920936C0.757812 1.16518 0.854839 1.39943 1.02755 1.57214L6.57795 7.12094L1.02755 12.6697C0.942031 12.7553 0.874196 12.8568 0.827914 12.9685C0.781633 13.0802 0.757812 13.2 0.757812 13.3209C0.757812 13.4419 0.781633 13.5616 0.827914 13.6734C0.874196 13.7851 0.942031 13.8866 1.02755 13.9721C1.20026 14.1448 1.4345 14.2419 1.67875 14.2419C1.79969 14.2419 1.91944 14.2181 2.03118 14.1718C2.14291 14.1255 2.24443 14.0577 2.32995 13.9721L7.87875 8.42174L13.4291 13.9721C13.6019 14.1446 13.836 14.2415 14.0801 14.2413C14.3242 14.2412 14.5583 14.144 14.7308 13.9713C14.9032 13.7986 15.0001 13.5645 14.9999 13.3204C14.9998 13.0763 14.9027 12.8422 14.7299 12.6697L9.17955 7.12094L14.7299 1.57214Z"
              fill="black"
            />
          </svg>
        </div>

        <h1 className="text-[40px] my-[20px] sm:text-[30px]">Add New Data</h1>
        <div className="w-[100%]">
          <TextInput
            className={"w-[100%]"}
            label={"Equipment Name"}
            name="equipment_name"
            register={register("equipment_name")}
          ></TextInput>
          <div className="flex justify-between w-[100%]">
            <TextInput
              className={"w-[48%]"}
              label={"Serial No"}
              name="serial_no"
              register={register("serial_no")}
            ></TextInput>
            <TextInput
              className={"w-[48%] sm:text[8px]"}
              label={"Category"}
              register={register("category")}
              name="category"
            ></TextInput>
          </div>
          <div className="flex justify-between w-[100%]">
            <TextInput
              className={"w-[48%]"}
              label={"Model"}
              name="model"
              register={register("model")}
              // onChange={handleInputChange}
            ></TextInput>
            <TextInput
              className={"w-[48%] "}
              label={"Assigned Aircraft"}
              name="assigned_aircraft"
              register={register("assigned_aircraft")}
            ></TextInput>
          </div>
          <div className={` flex flex-col w-full my-[10px]  relative ${styles.Input}`}>
            <label className="bg-white left-[10px] absolute top-[-12px] sm:text-[15px]" htmlFor="">
              Status
            </label>
            <select
              className={"w-[100%] text-[14px] pl-[10px] font-[500] h-[40px]"}
              label={"Status"}
              name="status"
              // onChange={handleInputChange}
              {...register("status")}
            >
              <option>Select</option>
              <option value="Available">Available</option>
              <option value="Not Available">Not Available</option>
            </select>
          </div>
          <button
            className="w-[100%] text-[14px] text-[#11211] font-semibold py-[8px] mb-[20px] mt-3 bg-[#40D1F0] rounded-[4px]"
            onClick={handleSubmit((data) => {
              console.log(data);
              dispatch(
                addMedicalEquipment({
                  equipment_name: data?.equipment_name,
                  serial_no: data?.serial_no,
                  category: data?.category,
                  model: data?.model,
                  assigned_aircraft: data?.assigned_aircraft,
                  status: data?.status,
                })
              );
              dispatch(showModals());
            })}
          >
            Add data
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMedicalEquipmentModal;
