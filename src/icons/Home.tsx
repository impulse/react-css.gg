import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Home = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 8.772l-6.98-6.979a3 3 0 00-4.242 0L3 8.571v14.515h7v-6a2 2 0 114 0v6h7V8.772zm-9.808-5.565L5 9.4v11.686h3v-4a4 4 0 018 0v4h3V9.6l-6.393-6.394a1 1 0 00-1.415 0z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Home;
