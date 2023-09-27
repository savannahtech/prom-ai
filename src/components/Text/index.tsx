import React from "react";

const sizeClasses = {
  txtLatoLight14: "font-lato font-light",
  txtLatoRegular16Gray900: "font-lato font-normal",
  txtLatoBold14: "font-bold font-lato",
  txtLatoRegular14: "font-lato font-normal",
  txtLatoRegular14Gray900: "font-lato font-normal",
  txtLatoRegular12: "font-lato font-normal",
  txtLatoRegular14Bluegray200: "font-lato font-normal",
  txtLatoBold20: "font-bold font-lato",
  txtLatoRegular16: "font-lato font-normal",
  txtLatoBold12: "font-bold font-lato",
  txtLatoMedium30: "font-lato font-medium",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
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
