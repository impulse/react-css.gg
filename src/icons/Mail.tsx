import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Mail = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M3.01 5.838a1 1 0 011-1H20a1 1 0 011 1v11.324a2 2 0 01-2 2H5a2 2 0 01-2-2v-11c0-.048.003-.094.01-.14v-.184zM5 8.062v9.1h14v-9.1l-4.879 4.879a3 3 0 01-4.242 0L5 8.06zm1.572-1.256h10.856l-4.72 4.72a1 1 0 01-1.415 0l-4.72-4.72z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Mail;
