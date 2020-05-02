import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Chanel = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M6.072 3.173a9 9 0 00-4.608 2.463l2.13 2.13a5.989 5.989 0 015.701-1.571 9.002 9.002 0 000 11.61 5.987 5.987 0 01-5.702-1.57l-2.13 2.129A9 9 0 0012 19.974a9.003 9.003 0 0010.536-1.61l-2.13-2.13a5.988 5.988 0 01-5.701 1.571A9.012 9.012 0 0016.828 12a9 9 0 00-2.123-5.805 5.988 5.988 0 015.702 1.57l2.13-2.129A9 9 0 0012 4.026a9 9 0 00-5.928-.853zM12 7.705a5.99 5.99 0 00-.806 7.622c.235.352.505.676.806.968a5.987 5.987 0 000-8.59z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Chanel;
