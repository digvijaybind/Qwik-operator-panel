"use client";
import React, { useState } from "react";
import styles from "./login.module.css";
import Image from "next/image";
import Logo from "../../public/images/logo.png";
import useApiPost from "../../hooks/useApipost";
import { useForm } from "react-hook-form";
import { Text } from "../Text";
import { Button } from "../Button";
import Aeroplane from "../../public/images/Aeroplane.png";
import { useRouter } from "next/navigation";
import axios from "axios";
const Login = () => {
  const [error, showError] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  return (
    <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto p-14 md:px-10 sm:px-5 w-full">
      <div className="flex flex-col gap-3 items-start justify-start max-w-[1234px] mb-[83px] mx-auto w-full">
        <Image
          className="h-9 md:h-auto object-cover w-[9%]"
          src={Logo}
          alt="qwiklif1logor"
        />
        <div className="flex md:flex-col flex-row  items-center justify-between w-full">
          <div className="flex sm:flex-1 flex-col gap-12 items-center justify-start md:mt-0 mt-[100px] w-[512px] sm:w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-[132px]"
                size="txtInterExtraBold48"
              >
                Login
              </Text>
              <Text
                className="text-base text-gray-900_9e w-auto"
                size="txtMontserratRegular16"
              >
                Login to access your Operator account
              </Text>
            </div>
            <div className="flex flex-col gap-10 items-start justify-start w-full">
              {error ? <p>Invalid username or password</p> : null}
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <input
                  type="text"
                  name="email_address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="email"
                  {...register("email_address")}
                  required
                ></input>
                <div className="flex flex-col h-[60px] md:h-auto items-start justify-start rounded-tl rounded-tr w-[512px] sm:w-full">
                  <input
                    type="text"
                    name="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="password"
                    {...register("password")}
                    required
                  ></input>
                </div>
                <div className="flex flex-row gap-[252px] items-center justify-between w-auto sm:w-full">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <input
                      id="link-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <Text
                      className="text-gray-900_01 text-sm w-auto"
                      size="txtMontserratMedium14"
                    >
                      Remember me
                    </Text>
                  </div>
                  <a
                    href="javascript:"
                    className="text-red-A100 text-right text-sm w-auto"
                  >
                    <Text size="txtMontserratMedium14RedA100">
                      Forgot Password
                    </Text>
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col items-start justify-start w-[512px] sm:w-full">
                  <Button
                    className="cursor-pointer font-semibold h-12 leading-[normal] text-center text-sm w-full"
                    onClick={handleSubmit((data) => {
                      console.log(data);
                      axios
                        .post("http://52.71.253.144:3000/operator/login", data)
                        .then((response) => {
                          console.log(response?.data);
                          if (response.data.token) {
                            router.push("/dashboard");
                          } else {
                            showError(true);
                          }
                        })
                        .catch((err) => console.log(err));
                    })}
                  >
                    Login
                  </Button>
                </div>
                <a
                  href="javascript:"
                  className="text-center text-gray-900_01 text-sm w-full"
                >
                  <Text size="txtMontserratMedium14">
                    <span className="text-gray-900_01 font-montserrat font-medium">
                      Don’t have an account?{" "}
                    </span>
                    <span
                      onClick={() => router.push("/signup")}
                      className="text-red-A100 font-montserrat font-semibold"
                    >
                      Sign up
                    </span>
                  </Text>
                </a>
              </div>
            </div>
          </div>
          <div className="h-[781px] relative w-[51%] xl:block md:hidden sm:hidden">
            <Image
              className="absolute h-[781px] inset-[0] justify-center m-auto object-cover rounded-[30px] w-full"
              src={Aeroplane}
              alt="rectangleTwenty"
            />
            {/* <div className="absolute bg-gradient  bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-[22px] sm:px-5 rounded-tl-[30px] rounded-tr-[30px] w-full">
              <PagerIndicator
                className="flex gap-2 h-[9px] md:h-auto items-start justify-start w-[68px]"
                count={3}
                activeCss="inline-block cursor-pointer h-2.5 bg-teal-200 w-8 rounded-[5px]"
                activeIndex={1}
                inactiveCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-white-A700 w-2.5"
                selectedWrapperCss="inline-block"
                unselectedWrapperCss="inline-block"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
