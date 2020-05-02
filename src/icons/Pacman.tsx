import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Pacman = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M14.064 8a1 1 0 100-2 1 1 0 000 2z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 3c2.152 0 4.128.756 5.677 2.016l1.447 1.447-1.295 1.295h-.001L14.585 12l3.639 3.638-.002.002 1.905 1.904-1.413 1.413-.002-.002A9 9 0 1113 3zm-1.243 9l5.532 5.532a7 7 0 110-11.065L11.757 12z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Pacman;
