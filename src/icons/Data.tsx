import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Data = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M12 8.89a3 3 0 011 5.829v5.17h-2v-5.17a3.001 3.001 0 011-5.83zm0 2a1 1 0 110 2 1 1 0 010-2z"
        fill="currentColor"
      />
      <path
        d="M7.05 6.94A6.978 6.978 0 005 11.89c0 2.177.994 4.122 2.554 5.406l1.423-1.424A4.992 4.992 0 017 11.89c0-1.38.56-2.63 1.464-3.535L7.05 6.939zM15.536 8.353A4.985 4.985 0 0117 11.89c0 1.626-.776 3.07-1.977 3.983l1.423 1.424A6.986 6.986 0 0019 11.889a6.978 6.978 0 00-2.05-4.95l-1.414 1.414z"
        fill="currentColor"
      />
      <path
        d="M1 11.89c0-3.038 1.231-5.788 3.222-7.78l1.414 1.415A8.972 8.972 0 003 11.89a8.972 8.972 0 002.636 6.364l-1.414 1.414A10.966 10.966 0 011 11.89zM19.778 19.667A10.965 10.965 0 0023 11.89c0-3.038-1.231-5.788-3.222-7.778l-1.414 1.414A8.972 8.972 0 0121 11.89a8.972 8.972 0 01-2.636 6.364l1.414 1.414z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Data;
