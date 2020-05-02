import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const BandAid = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M11.939 9.765a1 1 0 11-1.813-.845 1 1 0 011.813.845zM8.92 13.874a1 1 0 10.845-1.813 1 1 0 00-.846 1.813zM13.874 15.08a1 1 0 11-1.813-.845 1 1 0 011.813.846zM14.235 11.939a1 1 0 10.845-1.813 1 1 0 00-.845 1.813z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.071 1.124a6 6 0 00-7.973 2.902L4.026 14.902a6 6 0 0010.876 5.072l5.072-10.876a6 6 0 00-2.903-7.974zm-3.136 16.192l3.38-7.25-7.25-3.382-3.38 7.25 7.25 3.382zm-.846 1.812l-7.25-3.38a4 4 0 107.25 3.38zm3.137-16.191a4 4 0 011.935 5.316l-7.25-3.381a4 4 0 015.315-1.935z"
        fill="currentColor"
      />
    </svg>
  );
});
export default BandAid;
