import React from "react";
import clsx from "clsx";
import { LuLoader2 } from "react-icons/lu";

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  isloding,
  loadingText,
  ...restProps
}) => {
  const buttonClass = clsx(
    `
    relative
   
    disabled:opacity-70
    disabled:cursor-not-allowed
    px-3 py-1.5
    rounded-md
    hover:opacity-80
    transition

    ${primary && "bg-black text-white"}
    ${secondary && "bg-gray-100 text-black"}
    ${secondary && "bg-gray-100 text-black border border-black-1"}
    ${success && "border-green-500 bg-green-500 text-white"}
    ${warning && "border-yellow-400 bg-yellow-400 text-white"}
    ${danger && "border-red-500 bg-red-500 text-white"}
    
    `
  );
  return (
    <button className={buttonClass} {...restProps}>
      <>
        {isloding ? (
          <span
            className=" flex
          items-center"
          >
            <LuLoader2 className="animate-spin mr-2" />
            {loadingText}
          </span>
        ) : (
          <>{children}</>
        )}
      </>
    </button>
  );
};

export default Button;
