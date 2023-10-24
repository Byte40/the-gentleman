import React from "react";

const sizeClasses = {
  txtNasteLight20: "font-light font-naste",
  txtAbhayaLibreMedium20: "font-abhayalibremedium font-medium",
  txtAbhayaLibreMedium10: "font-abhayalibremedium font-medium",
  txtNasteLight10: "font-light font-naste",
  txtAbhayaLibreRegular25: "font-abhayalibre font-normal",
  txtAbhayaLibreRegular140: "font-abhayalibre font-normal",
  txtAbhayaLibreRegular15: "font-abhayalibre font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
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
