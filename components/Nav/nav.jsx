"use client";

import {useState} from "react";
import {useSelector} from "react-redux";

const Nav = () => {
  const navs = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.99996 2.5L1.66663 10H4.16663V16.6667H9.16663V11.6667H10.8333V16.6667H15.8333V10H18.3333L9.99996 2.5ZM14.1666 15H12.5V10H7.49996V15H5.83329V8.49167L9.99996 4.74167L14.1666 8.49167V15Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.83337 8.49164V15H7.50004V9.99997H12.5V15H14.1667V8.49164L10 4.74164L5.83337 8.49164Z"
            fill="#28A745"
            fill-opacity="0.3"
          />
        </svg>
      ),
      name: "Dashboard",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="16"
          viewBox="0 0 12 16"
          fill="none"
        >
          <path
            d="M12 15.75H10.5V14.25C10.5 13.6533 10.2629 13.081 9.84099 12.659C9.41903 12.2371 8.84674 12 8.25 12H3.75C3.15326 12 2.58097 12.2371 2.15901 12.659C1.73705 13.081 1.5 13.6533 1.5 14.25V15.75H0V14.25C0 13.2554 0.395088 12.3016 1.09835 11.5983C1.80161 10.8951 2.75544 10.5 3.75 10.5H8.25C9.24456 10.5 10.1984 10.8951 10.9017 11.5983C11.6049 12.3016 12 13.2554 12 14.25V15.75ZM6 9C5.40905 9 4.82389 8.8836 4.27792 8.65746C3.73196 8.43131 3.23588 8.09984 2.81802 7.68198C2.40016 7.26412 2.06869 6.76804 1.84254 6.22208C1.6164 5.67611 1.5 5.09095 1.5 4.5C1.5 3.90905 1.6164 3.32389 1.84254 2.77792C2.06869 2.23196 2.40016 1.73588 2.81802 1.31802C3.23588 0.900156 3.73196 0.568688 4.27792 0.342542C4.82389 0.116396 5.40905 -8.80582e-09 6 0C7.19347 1.77842e-08 8.33807 0.474106 9.18198 1.31802C10.0259 2.16193 10.5 3.30653 10.5 4.5C10.5 5.69347 10.0259 6.83807 9.18198 7.68198C8.33807 8.52589 7.19347 9 6 9ZM6 7.5C6.79565 7.5 7.55871 7.18393 8.12132 6.62132C8.68393 6.05871 9 5.29565 9 4.5C9 3.70435 8.68393 2.94129 8.12132 2.37868C7.55871 1.81607 6.79565 1.5 6 1.5C5.20435 1.5 4.44129 1.81607 3.87868 2.37868C3.31607 2.94129 3 3.70435 3 4.5C3 5.29565 3.31607 6.05871 3.87868 6.62132C4.44129 7.18393 5.20435 7.5 6 7.5Z"
            fill="white"
          />
        </svg>
      ),
      name: "Admin",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 20.8995L7.05022 15.9497C6.07127 14.9707 5.40459 13.7235 5.1345 12.3656C4.86441 11.0077 5.00304 9.60027 5.53285 8.32119C6.06267 7.04212 6.95988 5.94887 8.11102 5.17971C9.26216 4.41054 10.6155 4 12 4C13.3845 4 14.7378 4.41054 15.889 5.17971C17.0401 5.94887 17.9373 7.04212 18.4671 8.32119C18.997 9.60027 19.1356 11.0077 18.8655 12.3656C18.5954 13.7235 17.9287 14.9707 16.9498 15.9497L12 20.8995ZM15.85 14.8499C16.6114 14.0885 17.1298 13.1184 17.3399 12.0623C17.5499 11.0062 17.442 9.91151 17.03 8.9167C16.6179 7.92189 15.92 7.07162 15.0247 6.4734C14.1294 5.87518 13.0768 5.55589 12 5.55589C10.9232 5.55589 9.87061 5.87518 8.97529 6.4734C8.07997 7.07162 7.38214 7.92189 6.97004 8.9167C6.55795 9.91151 6.4501 11.0062 6.66013 12.0623C6.87016 13.1184 7.38864 14.0885 8.15 14.8499L12 18.6999L15.85 14.8499ZM12 12.5555C11.5874 12.5555 11.1918 12.3916 10.9001 12.0999C10.6083 11.8082 10.4444 11.4125 10.4444 10.9999C10.4444 10.5874 10.6083 10.1917 10.9001 9.89999C11.1918 9.60827 11.5874 9.44438 12 9.44438C12.4126 9.44438 12.8082 9.60827 13.0999 9.89999C13.3917 10.1917 13.5556 10.5874 13.5556 10.9999C13.5556 11.4125 13.3917 11.8082 13.0999 12.0999C12.8082 12.3916 12.4126 12.5555 12 12.5555Z"
            fill="white"
          />
        </svg>
      ),
      name: "GPS or Maps",
    },
    {
      icon: <img src="/images/weather.svg" alt="we" />,
      name: "Weather Conditions",
    },
    {
      icon: <img src="/images/medical.png" alt="" />,
      name: "Medical equipments",
    },
    {
      icon: <img src="/images/fly.png" alt="" />,
      name: "Aircraft status",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_183_14052)">
            <path
              d="M4.81154 16.4522C4.46066 15.8454 4.1879 15.1967 3.99976 14.5215C4.40922 14.3132 4.7531 13.9958 4.99335 13.6042C5.23359 13.2126 5.36084 12.7623 5.36101 12.3029C5.36118 11.8435 5.23427 11.393 4.99432 11.0013C4.75437 10.6095 4.41073 10.2918 4.00142 10.0832C4.37663 8.72651 5.09104 7.48763 6.07737 6.48332C6.46258 6.73376 6.90959 6.87274 7.3689 6.88488C7.82822 6.89701 8.28193 6.78183 8.67984 6.55207C9.07774 6.32231 9.40432 5.98695 9.62343 5.58308C9.84254 5.17921 9.94564 4.7226 9.92132 4.26377C11.2843 3.91152 12.7146 3.91209 14.0774 4.26543C14.0533 4.72425 14.1566 5.1808 14.3758 5.58455C14.5951 5.9883 14.9218 6.32351 15.3198 6.55309C15.7178 6.78267 16.1715 6.89767 16.6308 6.88535C17.0901 6.87304 17.537 6.73389 17.9221 6.48332C18.4027 6.97304 18.8294 7.53001 19.188 8.15171C19.5474 8.77342 19.8163 9.42169 19.9998 10.0824C19.5903 10.2907 19.2464 10.6081 19.0062 10.9997C18.7659 11.3913 18.6387 11.8416 18.6385 12.301C18.6383 12.7604 18.7652 13.2109 19.0052 13.6026C19.2451 13.9944 19.5888 14.3121 19.9981 14.5207C19.6229 15.8774 18.9085 17.1163 17.9221 18.1206C17.5369 17.8701 17.0899 17.7312 16.6306 17.719C16.1713 17.7069 15.7176 17.8221 15.3197 18.0518C14.9218 18.2816 14.5952 18.617 14.3761 19.0208C14.157 19.4247 14.0539 19.8813 14.0782 20.3401C12.7152 20.6924 11.2849 20.6918 9.92215 20.3385C9.94626 19.8796 9.84296 19.4231 9.62368 19.0194C9.4044 18.6156 9.07769 18.2804 8.67971 18.0508C8.28172 17.8212 7.82798 17.7062 7.36869 17.7185C6.9094 17.7309 6.46248 17.87 6.07737 18.1206C5.5868 17.62 5.16149 17.0594 4.81154 16.4522ZM9.50961 16.6149C10.3941 17.125 11.0592 17.9438 11.3772 18.9141C11.7914 18.9531 12.2073 18.954 12.6215 18.9149C12.9397 17.9445 13.6051 17.1257 14.4899 16.6157C15.3741 16.1041 16.416 15.9371 17.4158 16.1467C17.6565 15.8081 17.864 15.447 18.0367 15.0693C17.3556 14.3085 16.9793 13.3231 16.98 12.302C16.98 11.2561 17.3702 10.2791 18.0367 9.53457C17.8628 9.15702 17.6544 8.79635 17.4142 8.45717C16.415 8.6666 15.3737 8.4999 14.4899 7.98902C13.6054 7.47885 12.9403 6.6601 12.6223 5.68979C12.2081 5.65078 11.7922 5.64995 11.378 5.68896C11.0598 6.65941 10.3944 7.47818 9.50961 7.98819C8.62543 8.49976 7.58347 8.66677 6.58369 8.45717C6.34345 8.79607 6.13558 9.15679 5.96282 9.53457C6.64393 10.2954 7.0202 11.2808 7.01947 12.302C7.01947 13.3478 6.62935 14.3248 5.96282 15.0693C6.13669 15.4469 6.34509 15.8075 6.58535 16.1467C7.5845 15.9373 8.62578 16.104 9.50961 16.6149ZM11.9998 14.7921C11.3393 14.7921 10.706 14.5297 10.239 14.0627C9.77197 13.5958 9.50961 12.9624 9.50961 12.302C9.50961 11.6415 9.77197 11.0081 10.239 10.5412C10.706 10.0742 11.3393 9.81181 11.9998 9.81181C12.6602 9.81181 13.2936 10.0742 13.7606 10.5412C14.2275 11.0081 14.4899 11.6415 14.4899 12.302C14.4899 12.9624 14.2275 13.5958 13.7606 14.0627C13.2936 14.5297 12.6602 14.7921 11.9998 14.7921ZM11.9998 13.132C12.2199 13.132 12.431 13.0445 12.5867 12.8889C12.7424 12.7332 12.8298 12.5221 12.8298 12.302C12.8298 12.0818 12.7424 11.8707 12.5867 11.715C12.431 11.5594 12.2199 11.4719 11.9998 11.4719C11.7796 11.4719 11.5685 11.5594 11.4128 11.715C11.2572 11.8707 11.1697 12.0818 11.1697 12.302C11.1697 12.5221 11.2572 12.7332 11.4128 12.8889C11.5685 13.0445 11.7796 13.132 11.9998 13.132Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_183_14052">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      name: "Settings",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M5.89585 5.46911C5.99155 5.25277 6.12046 5.05155 6.27878 4.87307C6.54915 4.56828 6.89561 4.34075 7.28274 4.21374C7.66986 4.08673 8.08378 4.0648 8.48216 4.15019C8.88054 4.23558 9.2491 4.42522 9.55017 4.69973C9.85124 4.97424 10.074 5.32378 10.1957 5.71261C10.3174 6.10144 10.3337 6.51561 10.2429 6.91279C10.152 7.30996 9.95739 7.6759 9.67878 7.97319C9.40018 8.27048 9.04763 8.48845 8.65718 8.60483L8.3 8.71129V9.084V9.1H7.7V8.4C7.7 8.32043 7.73161 8.24413 7.78787 8.18787C7.84413 8.13161 7.92044 8.1 8 8.1L8.00003 8.1C8.32199 8.09998 8.63732 8.00854 8.90933 7.83631C9.18135 7.66408 9.39886 7.41815 9.53657 7.12713C9.67428 6.83611 9.72652 6.51197 9.6872 6.19242C9.64789 5.87288 9.51865 5.57106 9.31451 5.3221C9.11037 5.07314 8.83973 4.88726 8.53408 4.7861C8.22843 4.68494 7.90034 4.67265 7.58798 4.75067C7.27562 4.82868 6.99184 4.9938 6.76965 5.22679C6.66505 5.33648 6.57613 5.45908 6.50472 5.59107L5.89585 5.46911ZM8 15.5C3.85774 15.5 0.5 12.1423 0.5 8C0.5 3.85774 3.85774 0.5 8 0.5C12.1423 0.5 15.5 3.85774 15.5 8C15.5 12.1423 12.1423 15.5 8 15.5ZM8 14.9C9.82999 14.9 11.585 14.173 12.879 12.879C14.173 11.585 14.9 9.82999 14.9 8C14.9 6.17001 14.173 4.41496 12.879 3.12096C11.585 1.82696 9.82999 1.1 8 1.1C6.17001 1.1 4.41496 1.82696 3.12096 3.12096C1.82696 4.41496 1.1 6.17001 1.1 8C1.1 9.82999 1.82696 11.585 3.12096 12.879C4.41496 14.173 6.17001 14.9 8 14.9ZM8.3 10.9V11.5H7.7V10.9H8.3Z"
            fill="black"
            stroke="white"
          />
        </svg>
      ),
      name: "Help",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_183_14292)">
            <path
              d="M7.412 5.4456L8.3296 6.7568C7.21455 7.53741 6.37741 8.6532 5.93979 9.94208C5.50218 11.231 5.48688 12.6258 5.89612 13.9239C6.30537 15.2221 7.11783 16.356 8.2155 17.1609C9.31317 17.9658 10.6389 18.3997 12 18.3997C13.3611 18.3997 14.6868 17.9658 15.7845 17.1609C16.8822 16.356 17.6946 15.2221 18.1039 13.9239C18.5131 12.6258 18.4978 11.231 18.0602 9.94208C17.6226 8.6532 16.7855 7.53741 15.6704 6.7568L16.588 5.4456C17.6424 6.18274 18.5031 7.16356 19.0972 8.30469C19.6912 9.44582 20.0009 10.7135 20 12C20 16.4184 16.4184 20 12 20C7.5816 20 4 16.4184 4 12C3.99908 10.7135 4.30879 9.44582 4.90283 8.30469C5.49686 7.16356 6.35764 6.18274 7.412 5.4456ZM11.2 12V4H12.8V12H11.2Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_183_14292">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      name: "Logout",
    },
  ];
  const showNav = useSelector((state) => state.operator.showNav);
  console.log(showNav);
  return (
    <div
      className={`${
        showNav == true ? "block sm:block" : "block sm:hidden"
      } fixed top-0 left-0 w-[200px] z-[400] h-[100vh] bg-[#40D1F0] p-[10px]`}
    >
      <div className="flex items-center ">
        <img src="/images/man.png" alt="" />
        <p className="ml-[10px] text-black">Qwiklif Operator</p>
      </div>
      <div className="mt-[40px]">
        {navs.map((el) => (
          <div
            key={el}
            className="text-white flex justify-start items-center py-[10px] cursor-pointer"
          >
            <div className="p-0 w-[30px] flex-shrink-0">{el.icon}</div>
            <p className="ml-[10px] text-[14px] text-white">{el.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nav;
