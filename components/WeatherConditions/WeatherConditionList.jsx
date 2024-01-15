"use client";
import {
  showModals,
  showUpdateModal,
  setIdToBeUpdated,
  setUpdatedata,
  setEmailAddress,
  setOperatorAircrafts,
  setUserId,
  setToken,
} from "@/store/slices";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import swal from "sweetalert";
export default function WeatherEquipmentList() {
  const { user_id, operatorAircrafts, token } = useSelector((state) => state.operator);

  console.log(" user_id", user_id);

  const dispatch = useDispatch();

  useEffect(() => {
    const items = localStorage.getItem("token");
    if (items) {
      dispatch(setToken(items));
    }

    dispatch(setEmailAddress(localStorage.getItem(" user_id")));
    dispatch(setUserId(localStorage.getItem("user_id")));
  }, []);

  const loadAircraftData = useCallback(() => {
    if (token) {
      fetch(process.env.NEXT_PUBLIC_API_URL + "operator/operatorListsOfAircraftOPerators", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((response) => {
          console.log("responseData", response);
          dispatch(setOperatorAircrafts(response.aircraftCreatedByOperator));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [token]);

  useEffect(() => {
    loadAircraftData();
  }, [loadAircraftData]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    // Extract the date components
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Month is zero-based
    const day = String(date.getUTCDate()).padStart(2, "0");

    // Combine the components to form the desired date format
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };

  const [clickedBtn, setClickedBtn] = useState(null);
  const [disableBtn, setDisableBtn] = useState(false);
  console.log("operatorAircrafts", operatorAircrafts);
  // useEffect(() => {
  //   axios
  //     .get(
  //       "http://54.82.252.144/operator/getAirCraftOperatorLists",

  //       {
  //         headers: {Authorization: `Bearer ${token}`},
  //       }
  //     )
  //     .then((response) => {
  //       console.log(response.data.data);
  //       setLists(response.data.data);
  //     })
  //     .catch((err) => console.log(err));

  const header = ["Id", "Aircraft Type", "Location", ""];

  return (
    <div className="ml-[200px] sm:ml-0 ">
      <div className="">
        <div className="flex items-center px-[20px] py-[20px] justify-between">
          <p className="mr-[30px]">{`All (${operatorAircrafts ? operatorAircrafts.length : 0})`}</p>
          <div className="flex sm:hidden">
            <svg
              className="mr-[10px]"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                fill="#6C757D"
              />
            </svg>
            <svg
              className="mr-[10px]"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.28 8.6L18.58 7.39L17.31 7.9L16.25 8.33L15.34 7.63C14.95 7.33 14.54 7.09 14.11 6.92L13.05 6.49L12.89 5.36L12.7 4H11.3L11.11 5.35L10.95 6.48L9.89 6.92C9.48 7.09 9.07 7.33 8.64 7.65L7.74 8.33L6.69 7.91L5.42 7.39L4.72 8.6L5.8 9.44L6.69 10.14L6.55 11.27C6.52 11.57 6.5 11.8 6.5 12C6.5 12.2 6.52 12.43 6.55 12.73L6.69 13.86L5.8 14.56L4.72 15.4L5.42 16.61L6.69 16.1L7.75 15.67L8.66 16.37C9.05 16.67 9.46 16.91 9.89 17.08L10.95 17.51L11.11 18.64L11.3 20H12.69L12.88 18.65L13.04 17.52L14.1 17.09C14.51 16.92 14.92 16.68 15.35 16.36L16.25 15.68L17.29 16.1L18.56 16.61L19.26 15.4L18.18 14.56L17.29 13.86L17.43 12.73C17.47 12.42 17.48 12.21 17.48 12C17.48 11.79 17.46 11.57 17.43 11.27L17.29 10.14L18.18 9.44L19.28 8.6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z"
                fill="#DFDFDF"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.57 5.11 19.4 5.02 19.22 5.02C19.16 5.02 19.1 5.03 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99999C9.74999 2 9.53999 2.18 9.50999 2.42L9.12999 5.07C8.51999 5.32 7.95999 5.66 7.43999 6.05L4.94999 5.05C4.88999 5.03 4.82999 5.02 4.76999 5.02C4.59999 5.02 4.42999 5.11 4.33999 5.27L2.33999 8.73C2.20999 8.95 2.26999 9.22 2.45999 9.37L4.56999 11.02C4.52999 11.34 4.49999 11.67 4.49999 12C4.49999 12.33 4.52999 12.66 4.56999 12.98L2.45999 14.63C2.26999 14.78 2.21999 15.05 2.33999 15.27L4.33999 18.73C4.42999 18.89 4.59999 18.98 4.77999 18.98C4.83999 18.98 4.89999 18.97 4.94999 18.95L7.43999 17.95C7.95999 18.35 8.51999 18.68 9.12999 18.93L9.50999 21.58C9.53999 21.82 9.74999 22 9.99999 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.11 18.97 19.17 18.98 19.23 18.98C19.4 18.98 19.57 18.89 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM17.45 11.27C17.49 11.58 17.5 11.79 17.5 12C17.5 12.21 17.48 12.43 17.45 12.73L17.31 13.86L18.2 14.56L19.28 15.4L18.58 16.61L17.31 16.1L16.27 15.68L15.37 16.36C14.94 16.68 14.53 16.92 14.12 17.09L13.06 17.52L12.9 18.65L12.7 20H11.3L11.11 18.65L10.95 17.52L9.88999 17.09C9.45999 16.91 9.05999 16.68 8.65999 16.38L7.74999 15.68L6.68999 16.11L5.41999 16.62L4.71999 15.41L5.79999 14.57L6.68999 13.87L6.54999 12.74C6.51999 12.43 6.49999 12.2 6.49999 12C6.49999 11.8 6.51999 11.57 6.54999 11.27L6.68999 10.14L5.79999 9.44L4.71999 8.6L5.41999 7.39L6.68999 7.9L7.72999 8.32L8.62999 7.64C9.05999 7.32 9.46999 7.08 9.87999 6.91L10.94 6.48L11.1 5.35L11.3 4H12.69L12.88 5.35L13.04 6.48L14.1 6.91C14.53 7.09 14.93 7.32 15.33 7.62L16.24 8.32L17.3 7.89L18.57 7.38L19.27 8.59L18.2 9.44L17.31 10.14L17.45 11.27ZM12 8C9.78999 8 7.99999 9.79 7.99999 12C7.99999 14.21 9.78999 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8ZM12 14C10.9 14 9.99999 13.1 9.99999 12C9.99999 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14Z"
                fill="#6C757D"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z"
                fill="#6C757D"
              />
            </svg>
          </div>
        </div>
        <div className="overflow-x-auto h-[90vh]">
          <table className="w-[1300px]">
            <thead>
              <tr className="">
                {header.map((data, i) => (
                  <th className="text-[12px] border border-x-0 p-[10px] " key={i}>
                    {data}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {operatorAircrafts.length > 0 ? (
                operatorAircrafts?.map((data1, i) => (
                  <tr key={data1._id + Math.random()}>
                    <td className="border text-center border-x-0 text-[14px]  p-[10px]">{i + 1}</td>
                    <td className="border text-center border-x-0 text-[14px]  p-[10px]">
                      {data1.Aircraft_type}
                    </td>
                    <td className="border text-center border-x-0 text-[14px]  p-[10px]">
                      {data1.location}
                    </td>
                    <td className="border border-x-0 cursor-pointer text-[12px] p-[10px]">
                      <button
                        onClick={() => {
                          // dispatch(showUpdateModal());
                          // dispatch(setIdToBeUpdated(data1._id));
                          // dispatch(setUpdatedata(data1));
                        }}
                        className="bg-[#1D4ED8] flex items-center px-[10px] py-[5px] rounded-[4px] text-white mx-auto"
                      >
                        <p>Check Weather Condition</p>
                        <img src="./images/weatherIcon.svg" alt="weather icon" className="w-[25px] ml-2" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <></>
              )}
            </tbody>
            <tfoot className="h-[200px]"></tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
