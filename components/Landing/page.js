"use client";
import styles from "./Landng.module.css";
import { showModals } from "@/store/slices";
import Modal from "../Modal";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Landing() {
  const token = localStorage.getItem("token");
  const [lists, setLists] = useState([]);
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
  useEffect(() => {
    axios
      .get(
        "http://54.82.252.144:8000/operator/getAirCraftOperatorLists",

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        console.log(response.data.data);
        setLists(response.data.data);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const header = [
    "Id",
    "Aircraft Type",
    "Tail Sign",
    "Location",
    "Charges per hour",
    "Speed",
    "Date",
    "CPH + Margin",
    "Update",
    "Delete",
  ];
  const details = [
    "01",
    "A380",
    "A380",
    "Dubai",
    "450$",
    "500 MILES",
    "02 Oct 2023",
    "600$",
  ];
  const dispatch = useDispatch();
  return (
    <div className="ml-[200px] sm:ml-0 ">
      <div className="">
        <div className="flex items-center px-[20px] py-[20px]">
          <p className="mr-[30px]">{`All ${lists ? lists.length : 0}`}</p>
          <button
            onClick={() => dispatch(showModals())}
            className={`${styles.Button} mr-auto px-[10px] py-[5px] flex items-center `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M7.62676 2.29542C7.71971 1.90153 8.28029 1.90153 8.37324 2.29542L9.33665 6.37818C9.37001 6.51958 9.48042 6.62998 9.62182 6.66335L13.7046 7.62676C14.0985 7.71971 14.0985 8.28029 13.7046 8.37324L9.62182 9.33665C9.48042 9.37001 9.37001 9.48042 9.33665 9.62182L8.37324 13.7046C8.28029 14.0985 7.71971 14.0985 7.62676 13.7046L6.66335 9.62182C6.62998 9.48042 6.51958 9.37001 6.37818 9.33665L2.29542 8.37324C1.90153 8.28029 1.90153 7.71971 2.29542 7.62676L6.37818 6.66335C6.51958 6.62998 6.62998 6.51958 6.66335 6.37818L7.62676 2.29542Z"
                fill="#171C26"
              />
            </svg>
            <p className="pl-[11px] text-[16px] text-[#171C26] font-[600]">
              Add Aircraft Data
            </p>
          </button>
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
                fill-rule="evenodd"
                clip-rule="evenodd"
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
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.28 8.6L18.58 7.39L17.31 7.9L16.25 8.33L15.34 7.63C14.95 7.33 14.54 7.09 14.11 6.92L13.05 6.49L12.89 5.36L12.7 4H11.3L11.11 5.35L10.95 6.48L9.89 6.92C9.48 7.09 9.07 7.33 8.64 7.65L7.74 8.33L6.69 7.91L5.42 7.39L4.72 8.6L5.8 9.44L6.69 10.14L6.55 11.27C6.52 11.57 6.5 11.8 6.5 12C6.5 12.2 6.52 12.43 6.55 12.73L6.69 13.86L5.8 14.56L4.72 15.4L5.42 16.61L6.69 16.1L7.75 15.67L8.66 16.37C9.05 16.67 9.46 16.91 9.89 17.08L10.95 17.51L11.11 18.64L11.3 20H12.69L12.88 18.65L13.04 17.52L14.1 17.09C14.51 16.92 14.92 16.68 15.35 16.36L16.25 15.68L17.29 16.1L18.56 16.61L19.26 15.4L18.18 14.56L17.29 13.86L17.43 12.73C17.47 12.42 17.48 12.21 17.48 12C17.48 11.79 17.46 11.57 17.43 11.27L17.29 10.14L18.18 9.44L19.28 8.6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z"
                fill="#DFDFDF"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
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
                fill-rule="evenodd"
                clip-rule="evenodd"
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
                  <th
                    className="text-[12px] border border-x-0 p-[10px] "
                    key={i}
                  >
                    {data}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {lists ? (
                lists.map((data1, i) => (
                  <tr key={i}>
                    <td
                      className="border text-center border-x-0 text-[14px]  p-[10px]"
                      key={i}
                    >
                      {i + 1}
                    </td>
                    <td
                      className="border text-center border-x-0 text-[14px]  p-[10px]"
                      key={i}
                    >
                      {data1.Aircraft_type}
                    </td>
                    <td
                      className="border text-center border-x-0 text-[14px]  p-[10px]"
                      key={i}
                    >
                      {data1.Tail_sign}
                    </td>
                    <td
                      className="border text-center border-x-0 text-[14px]  p-[10px]"
                      key={i}
                    >
                      {data1.location}
                    </td>
                    <td
                      className="border text-center border-x-0 text-[14px]  p-[10px]"
                      key={i}
                    >
                      {data1.charges_per_hour}
                    </td>
                    <td
                      className="border text-center border-x-0 text-[14px]  p-[10px]"
                      key={i}
                    >
                      {data1.speed}
                    </td>
                    <td
                      className="border text-center border-x-0 text-[14px]  p-[10px]"
                      key={i}
                    >
                      {formatDate(data1.date)}
                    </td>
                    <td
                      className="border text-center border-x-0 text-[14px]  p-[10px]"
                      key={i}
                    >
                      {data1.margin}
                    </td>
                    <td className="border border-x-0 cursor-pointer text-[12px]  p-[10px]">
                      <button className="bg-[#1D4ED8] flex items-center px-[10px] py-[5px] rounded-[4px] text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M15.5325 6.9675L11.0325 2.4675C10.9634 2.40004 10.8819 2.34656 10.7925 2.31C10.6995 2.27221 10.6004 2.25187 10.5 2.25H4.5C3.90326 2.25 3.33097 2.48705 2.90901 2.90901C2.48705 3.33097 2.25 3.90326 2.25 4.5V13.5C2.25 14.0967 2.48705 14.669 2.90901 15.091C3.33097 15.5129 3.90326 15.75 4.5 15.75H13.5C14.0967 15.75 14.669 15.5129 15.091 15.091C15.5129 14.669 15.75 14.0967 15.75 13.5V7.5C15.7506 7.4013 15.7317 7.30345 15.6943 7.21207C15.657 7.12069 15.602 7.03758 15.5325 6.9675ZM6.75 3.75H9.75V5.25H6.75V3.75ZM11.25 14.25H6.75V12C6.75 11.8011 6.82902 11.6103 6.96967 11.4697C7.11032 11.329 7.30109 11.25 7.5 11.25H10.5C10.6989 11.25 10.8897 11.329 11.0303 11.4697C11.171 11.6103 11.25 11.8011 11.25 12V14.25ZM14.25 13.5C14.25 13.6989 14.171 13.8897 14.0303 14.0303C13.8897 14.171 13.6989 14.25 13.5 14.25H12.75V12C12.75 11.4033 12.5129 10.831 12.091 10.409C11.669 9.98705 11.0967 9.75 10.5 9.75H7.5C6.90326 9.75 6.33097 9.98705 5.90901 10.409C5.48705 10.831 5.25 11.4033 5.25 12V14.25H4.5C4.30109 14.25 4.11032 14.171 3.96967 14.0303C3.82902 13.8897 3.75 13.6989 3.75 13.5V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H5.25V6C5.25 6.19891 5.32902 6.38968 5.46967 6.53033C5.61032 6.67098 5.80109 6.75 6 6.75H10.5C10.6989 6.75 10.8897 6.67098 11.0303 6.53033C11.171 6.38968 11.25 6.19891 11.25 6V4.8075L14.25 7.8075V13.5Z"
                            fill="white"
                          />
                        </svg>
                        <p>Update</p>
                      </button>
                    </td>
                    <td className="border border-x-0 text-[12px]  p-[10px]">
                      <button className="bg-[#D97706] flex items-center px-[10px] py-[5px] rounded-[4px] text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M15.5325 6.9675L11.0325 2.4675C10.9634 2.40004 10.8819 2.34656 10.7925 2.31C10.6995 2.27221 10.6004 2.25187 10.5 2.25H4.5C3.90326 2.25 3.33097 2.48705 2.90901 2.90901C2.48705 3.33097 2.25 3.90326 2.25 4.5V13.5C2.25 14.0967 2.48705 14.669 2.90901 15.091C3.33097 15.5129 3.90326 15.75 4.5 15.75H13.5C14.0967 15.75 14.669 15.5129 15.091 15.091C15.5129 14.669 15.75 14.0967 15.75 13.5V7.5C15.7506 7.4013 15.7317 7.30345 15.6943 7.21207C15.657 7.12069 15.602 7.03758 15.5325 6.9675ZM6.75 3.75H9.75V5.25H6.75V3.75ZM11.25 14.25H6.75V12C6.75 11.8011 6.82902 11.6103 6.96967 11.4697C7.11032 11.329 7.30109 11.25 7.5 11.25H10.5C10.6989 11.25 10.8897 11.329 11.0303 11.4697C11.171 11.6103 11.25 11.8011 11.25 12V14.25ZM14.25 13.5C14.25 13.6989 14.171 13.8897 14.0303 14.0303C13.8897 14.171 13.6989 14.25 13.5 14.25H12.75V12C12.75 11.4033 12.5129 10.831 12.091 10.409C11.669 9.98705 11.0967 9.75 10.5 9.75H7.5C6.90326 9.75 6.33097 9.98705 5.90901 10.409C5.48705 10.831 5.25 11.4033 5.25 12V14.25H4.5C4.30109 14.25 4.11032 14.171 3.96967 14.0303C3.82902 13.8897 3.75 13.6989 3.75 13.5V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H5.25V6C5.25 6.19891 5.32902 6.38968 5.46967 6.53033C5.61032 6.67098 5.80109 6.75 6 6.75H10.5C10.6989 6.75 10.8897 6.67098 11.0303 6.53033C11.171 6.38968 11.25 6.19891 11.25 6V4.8075L14.25 7.8075V13.5Z"
                            fill="white"
                          />
                        </svg>
                        <p>Delete</p>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <div></div>
              )}
            </tbody>
            <tfoot className="h-[200px]"></tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
