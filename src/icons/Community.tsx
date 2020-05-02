import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Community = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M12 17.456a6 6 0 110-10.912 6 6 0 110 10.912zm-2-1.487a4 4 0 110-7.938A5.977 5.977 0 008.5 12c0 1.522.567 2.911 1.5 3.969zm4-7.938a4 4 0 110 7.938A5.978 5.978 0 0015.5 12 5.978 5.978 0 0014 8.031zm-2 .846c.915.733 1.5 1.86 1.5 3.123 0 1.263-.585 2.39-1.5 3.123A3.993 3.993 0 0110.5 12c0-1.263.585-2.39 1.5-3.123z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Community;
