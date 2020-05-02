import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Girl = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M10 12a1 1 0 11-2 0 1 1 0 012 0zM15 13a1 1 0 100-2 1 1 0 000 2z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.024 2H12C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-5.258-4.058-9.568-9.212-9.97v-.002A9.94 9.94 0 0012.025 2zM12 20a8 8 0 007.742-10.022 10.016 10.016 0 01-8.982-4.376 7.976 7.976 0 01-5.691 2.4A8 8 0 0012 20zm-.021-16h.045-.045z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Girl;
