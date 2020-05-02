import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Games = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M15.47 11.293a1 1 0 10-1.415 1.414 1 1 0 001.415-1.414zM16.177 9.172a1 1 0 111.414 1.414 1 1 0 01-1.414-1.414zM19.712 11.293a1 1 0 10-1.414 1.414 1 1 0 001.414-1.414zM16.177 13.414a1 1 0 111.414 1.415 1 1 0 01-1.414-1.415zM6 13H4v-2h2V9h2v2h2v2H8v2H6v-2z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 5a7 7 0 000 14h10a7 7 0 100-14H7zm10 2H7a5 5 0 000 10h10a5 5 0 000-10z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Games;
