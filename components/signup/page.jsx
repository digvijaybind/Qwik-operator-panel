"use client";
import React, { useEffect, useState } from "react";
import styles from "./signup.module.css";
import Aeroplane from "../../public/images/Aeroplane.png";
import Qwikliflogo from "../../public/images/logo.png";
import Image from "next/image";
import { Text } from "../Text";
import { Button } from "../Button";
import { useRouter } from "next/navigation";
import axios from "axios";
import useApiPost from "../../hooks/useApipost";
const SignupComponent = () => {
  const [formData, setFormdData] = useState({
    company_name: "",
    email_address: "",
    contact_number: "",
    country_name: "",
    password: "",
  });
  const { data, error, loading, postData } = useApiPost();
  const router = useRouter();
  const handleChange = (e) => {
    setFormdData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log("formData", formData);
  const handleSubmit = () => {
    axios
      .post("54.82.252.144:8000/operator/register", formData)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={`${styles.wrapper}`}>
      {/* <div className={`${styles.LeftWrapper}`}></div>
      <div className={`${styles.RightWrapper}`}></div> */}

      <div className="bg-white-A700 flex flex-col font-montserrat items-start justify-start mx-auto p-[74px] md:px-10 sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-10 gap-[88px] items-start justify-start mb-[42px] ml-1.5 md:ml-[0] w-[94%] md:w-full">
          <div className="h-[816px] md:mt-0 mt-[18px] relative w-[41%] lg:block xl:block md:hidden sm:hidden">
            <Image
              className="h-[816px] m-auto object-cover rounded-[30px] w-full"
              src={Aeroplane}
              alt="rectangleTwenty"
            />
            <div className="absolute bg-gradient  bottom-[0] flex sm:flex-col flex-row gap-2.5 inset-x-[0] items-start justify-center mx-auto p-[19px] rounded-tl-[30px] rounded-tr-[30px] w-full">
              <div className="bg-white-A700 h-2.5 sm:ml-[0] ml-[150px] sm:mt-0 mt-2.5 rounded-[50%] w-2.5"></div>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-[89px] h-[640px] md:h-auto items-start justify-start w-[640px] md:w-full">
            <Image
              className="h-9 md:h-auto object-cover w-[18%]"
              src={Qwikliflogo}
              alt="qwiklif1logor"
            />
            <div className="flex flex-col gap-12 h-[515px] md:h-auto items-start justify-start max-w-screen-sm w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-auto"
                  size="txtInterExtraBold48"
                >
                  Sign up
                </Text>
                <Text
                  className="text-base text-gray-900_9e w-auto"
                  size="txtMontserratRegular16"
                >
                  Let’s get you all set up so you can access your Operator
                  account.
                </Text>
              </div>
              <div className="flex flex-col gap-10 items-start justify-start w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
                    <input
                      type="text"
                      name="company_name"
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="company_name"
                      required
                    ></input>
                  </div>
                  <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
                    <input
                      type="text"
                      name="email_address"
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="email_address"
                      required
                    ></input>
                  </div>
                  <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
                    <input
                      type="text"
                      name="contact_number"
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Contact_No"
                      required
                    ></input>
                  </div>

                  <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
                    <input
                      type="text"
                      name="country_name"
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="country_name"
                      required
                    ></input>
                  </div>
                  <div className="flex flex-col h-[60px] md:h-auto items-start justify-start rounded-tl rounded-tr w-full">
                    <input
                      type="text"
                      name="password"
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="password"
                      required
                    ></input>
                  </div>
                  {/* <div className="flex items-center">
                    <input
                      id="link-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      I agree with the{" "}
                      <a
                        href="#"
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        terms and conditions
                      </a>
                      .
                    </label>
                  </div> */}
                </div>
                <div className="flex justify-center">
                  <div className="flex flex-col gap-4 items-center justify-center w-auto md:w-full">
                    <div className="flex flex-col items-start justify-start max-w-screen-sm w-full">
                      <Button
                        className="cursor-pointer font-semibold h-12 leading-[normal] text-center text-sm w-full"
                        onClick={() => {
                          axios
                            .post(
                              "http://54.82.252.144:8000/operator/register",
                              formData
                            )
                            .then((data) => {
                              router.push("/login");
                              console.log(data);
                            })
                            .catch((err) => {
                              console.log(err);
                            });
                          console.log("clicked");
                        }}
                      >
                        Create account
                      </Button>
                    </div>
                    <Text
                      className="text-center text-gray-900_01 text-sm w-auto"
                      size="txtMontserratMedium14"
                    >
                      <span className="text-gray-900_01 font-montserrat font-medium">
                        Already have an account?{" "}
                      </span>
                      <span
                        onClick={() => {
                          router.push("/login");
                        }}
                        className="text-red-A100 font-montserrat font-semibold"
                      >
                        Login
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;
