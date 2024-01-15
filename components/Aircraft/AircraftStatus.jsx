"use client";
import styles from "./AircraftList.module.css";
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
export default function AircraftStatus({ singleOperator }) {
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

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [disableBtn, show, show1, singleOperator]);
  console.log("singleOperator", singleOperator);
  const header = ["Id", "Aircraft Type", "Location", "Status"];

  return (
    <div className="ml-[200px] sm:ml-0 ">
      <div className="mt-10 mx-4">
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
                    <td className="border border-x-0 cursor-pointer text-[14px] p-[10px] text-center font-semibold">
                      {Math.random() < 0.5 ? (
                        <span className="text-green-600">Available</span>
                      ) : (
                        <span className="text-red-600">Not Available</span>
                      )}
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
