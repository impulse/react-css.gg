import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Framer = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M12 21V9H6v6l6 6z" fill="currentColor" fillOpacity={0.5} />
      <path d="M18 9V3H6l6 6H6v6h12l-6-6h6z" fill="currentColor" />
    </svg>
  );
});
export default Framer;
