import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const HomeAlt = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M6 22.879a3 3 0 01-3-3v-10c0-.034.002-.068.005-.1H3c0-.577.229-1.13.636-1.536L9.88 2a3 3 0 014.242 0l6.243 6.243c.407.407.636.96.636 1.535h-.005c.003.033.005.067.005.1v10a3 3 0 01-3 3H6zm6.707-19.465L19 9.707V19.88a1 1 0 01-1 1h-3v-5a3 3 0 10-6 0v5H6a1 1 0 01-1-1V9.707l6.293-6.293a1 1 0 011.414 0z"
        fill="currentColor"
      />
    </svg>
  );
});
export default HomeAlt;
