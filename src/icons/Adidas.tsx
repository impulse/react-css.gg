import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Adidas = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M1.33 19L.73 17.964l4.33-2.5L7.103 19H1.329zM15.186 19H9.412l-3.619-6.268 4.33-2.5L15.187 19zM23.269 19h-5.774l-6.64-11.5 4.33-2.5 8.084 14z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Adidas;
