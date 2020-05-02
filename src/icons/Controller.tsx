import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Controller = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M14.828 6.343l1.415-1.414L12 .686 7.757 4.93l1.415 1.414L12 3.515l2.828 2.828zM4.929 16.243l1.414-1.415L3.515 12l2.828-2.828L4.93 7.757.686 12l4.243 4.243zM7.757 19.071L12 23.314l4.243-4.243-1.415-1.414L12 20.485l-2.828-2.828-1.415 1.414zM17.657 9.172L20.485 12l-2.828 2.828 1.414 1.415L23.314 12 19.07 7.757l-1.414 1.415z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 8a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 110 4 2 2 0 010-4z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Controller;
