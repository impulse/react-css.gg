import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Backspace = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M17.743 8.464l1.414 1.415L17.036 12l2.121 2.121-1.414 1.415-2.122-2.122-2.121 2.122-1.414-1.415L14.207 12l-2.121-2.121L13.5 8.465l2.121 2.12 2.122-2.12z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.586 19l-6.293-6.293a1 1 0 010-1.414L8.586 5h14v14h-14zm.828-12l-5 5 5 5h11.172V7H9.414z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Backspace;
