import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const VoicemailR = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M11.5 12c0 .35-.06.687-.17 1h2.34a3 3 0 112.83 2h-8a3 3 0 113-3zm-2 0a1 1 0 11-2 0 1 1 0 012 0zm8 0a1 1 0 11-2 0 1 1 0 012 0z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 8a3 3 0 013-3h15a3 3 0 013 3v8a3 3 0 01-3 3h-15a3 3 0 01-3-3V8zm3-1h15a1 1 0 011 1v8a1 1 0 01-1 1h-15a1 1 0 01-1-1V8a1 1 0 011-1z"
        fill="currentColor"
      />
    </svg>
  );
});
export default VoicemailR;
