"use client";
import React, {useState} from "react";
import Image from "next/image";
import Logo from "../../public/images/logo.png";
import {useRouter} from "next/navigation";
import {Text} from "../Text";
import {Button} from "../Button";
import Aeroplane from "../../public/images/Aeroplane.png";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setEmailAddress, setToken, setUserId} from "@/store/slices";
import swal from "sweetalert";
import {useFormik} from "formik";
import * as Yup from "yup";
const validationSchema = Yup.object().shape({
  email_address: Yup.string()
    .email("Invalid email address")
    .required("Email address is required"),
  password: Yup.string().required("Password is required"),
});
const LoginComponent = () => {
  // const [formData, setFormdData] = useState({
  //   email_address: "",
  //   password: "",
  // });

  const formik = useFormik({
    initialValues: {
      email_address: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios
        .post(process.env.NEXT_PUBLIC_API_URL + "operator/login", values)
        .then((response) => {
          const {data} = response;
          if (data) {
            // Passwords match on the backend
            localStorage.setItem("token", data.token);
            localStorage.setItem("email_address", data.email_address);
            localStorage.setItem("user_id", data.id);
            dispatch(setEmailAddress(data.email_address));
            dispatch(setUserId(data.id));
            dispatch(setToken(data.token));
            console.log("eneter til here", response);
            swal("Login successful!", {
              className: "white-bg",
            });
            router.push("/dashboard");
          } else {
            // Passwords do not match on the backend
            if (error.response) {
              // The request was made, but the server responded with a status code that falls out of the range of 2xx
              swal(`Error: ${error.response.status}`, {
                icon: "error",
              });
            } else if (error.request) {
              // The request was made, but no response was received
              swal("No response from the server", {
                icon: "error",
              });
            } else {
              // Something happened in setting up the request that triggered an Error
              swal("An error occurred. Please try again later.", {
                icon: "error",
              });
            }
          }
          // console.log("response", response.data);
        })
        .catch((err) => {
          // console.log(err);
          // Handle other errors here
          swal(
            "An error occurred. please check email or password  Incorrect , Please try again later.",
            {
              icon: "error",
            }
          );
        });
    },
  });

  const dispatch = useDispatch();

  const [singleOperator, setSingleOperator] = useState([]);

  const router = useRouter();
  // const handleChange = (e) => {
  //   setFormdData({...formData, [e.target.name]: e.target.value});
  // };

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
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <input
                  type="text"
                  name="email_address"
                  // onChange={handleChange}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email_address}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="email"
                  required
                ></input>
                {formik.touched.email_address && formik.errors.email_address ? (
                  <div className="text-red-500">
                    {formik.errors.email_address}
                  </div>
                ) : null}
                <div className="flex flex-col h-[60px] md:h-auto items-start justify-start rounded-tl rounded-tr w-[512px] sm:w-full">
                  <input
                    type="text"
                    name="password"
                    // onChange={handleChange}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="password"
                    required
                  ></input>
                </div>
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500">{formik.errors.password}</div>
                ) : null}
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
                    type="submit"
                    onClick={formik.handleSubmit}
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
                      className="text-red-A100 font-montserrat font-semibold"
                      onClick={() => router.push("signup")}
                    >
                      Sign up
                    </span>
                  </Text>
                </a>
              </div>
            </div>
          </div>
          <div className="h-[781px] relative w-[51%] xl:block md:hidden sm:hidden ">
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

export default LoginComponent;
