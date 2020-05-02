import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Ericsson = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M7.717 5.723a2 2 0 101.69 3.625l10.876-5.071a2 2 0 00-1.69-3.625L7.717 5.723zM4.75 15.381a2 2 0 01.967-2.658l10.876-5.071a2 2 0 111.69 3.625L7.407 16.348a2 2 0 01-2.657-.967zM2.75 22.381a2 2 0 01.967-2.658l10.876-5.071a2 2 0 111.69 3.625L5.407 23.348a2 2 0 01-2.657-.967z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Ericsson;
