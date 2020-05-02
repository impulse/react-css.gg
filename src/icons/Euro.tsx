import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Euro = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M18.553 15.536a4.999 4.999 0 01-7.902-1.098h2.381l.696-1.876H10.05a5.047 5.047 0 010-1.125h4.287l.696-1.874h-4.38a4.998 4.998 0 017.902-1.099l1.414-1.414A7.003 7.003 0 008.454 9.562H6.032l-.696 1.875H8.04a7.095 7.095 0 000 1.126H4.728l-.696 1.874h4.422a7.003 7.003 0 0011.514 2.513l-1.415-1.414z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Euro;
