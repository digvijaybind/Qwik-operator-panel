import React from "react";

const sizeClasses = {
  txtMontserratMedium14RedA100: "font-medium font-montserrat",
  txtInterExtraBold48: "font-extrabold font-inter",
  txtMontserratRegular16: "font-montserrat font-normal",
  txtMontserratMedium14: "font-medium font-montserrat",
  txtMontserratRegular14: "font-montserrat font-normal",
  txtMontserratRegular16Gray900: "font-montserrat font-normal",
} ;


const Text = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
