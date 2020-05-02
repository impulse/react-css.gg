import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Nametag = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M4 14v6h6v-2H6v-4H4z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 9v6h6V9H9zm4 2h-2v2h2v-2z"
        fill="currentColor"
      />
      <path
        d="M4 10V4h6v2H6v4H4zM20 10V4h-6v2h4v4h2zM20 14v6h-6v-2h4v-4h2z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Nametag;
