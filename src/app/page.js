import Image from "next/image";
import styles from "./page.module.css";
import Modal from "../../components/Modal";
export default function Home() {
  const header = [
    "Number",
    "C_Name",
    "E-Address",
    "Contact No",
    "Aircraft Type",
    "Tail Sign",
    "Password",
    "Location",
    "Charges per hour",
    "Speed",
    "Date",
    "CPH + Margin",
    " ",
    " ",
  ];
  const details = [
    "01",
    "Qatar",
    "vipin@gmail",
    "01010101",
    "A380",
    "A380",
    "****",
    "Dubai",
    "450$",
    "500 MILES",
    "02 Oct 2023",
    "600$",
    "Update",
    "Remove",
  ];
  return (
    <div className="h-[150vh] overflow-y-scroll">
      <div className="relative flex justify-center px-[5%] pt-[10px] iteems-center">
        <img
          className="absolute top-[5px] left-[10px] "
          src="/images/man.svg"
          alt=""
        />
        <img src="/images/logo.png" alt="logo" />
      </div>
      <div className="px-[5%]">
        <h1 className="font-semibold text-[20px]">Details</h1>
        <table className="border w-[100%]">
          <thead>
            <tr className="border">
              {header.map((data, i) => (
                <th
                  className="border text-[12px] border-black p-[10px]"
                  key={i}
                >
                  {data}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {details.map((data, i) => (
                <td
                  className="border text-[12px] border-black p-[10px]"
                  key={i}
                >
                  {data}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
        <div className="absolute top-[50px] left-[50%]  transform translate-x-[-50%]">
          <Modal></Modal>
        </div>
       
      </div>
    </div>
  );
}
