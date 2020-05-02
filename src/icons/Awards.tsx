import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Awards = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M19 9a6.992 6.992 0 01-3 5.745V22h-2.586L12 20.586 10.586 22H8v-7.255A7 7 0 1119 9zm-2 0A5 5 0 117 9a5 5 0 0110 0zm-7 10.757l2-2 2 2V15.71a7.001 7.001 0 01-2 .29 7.001 7.001 0 01-2-.29v4.047z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Awards;
