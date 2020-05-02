import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Feed = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M12.552 8a1 1 0 100 2h4a1 1 0 100-2h-4zM12.552 17a1 1 0 100 2h4a1 1 0 100-2h-4z"
        fill="currentColor"
        fillOpacity={0.5}
      />
      <path
        d="M12.552 5a1 1 0 100 2h8a1 1 0 100-2h-8zM12.552 14a1 1 0 100 2h8a1 1 0 100-2h-8z"
        fill="currentColor"
        fillOpacity={0.8}
      />
      <path
        d="M3.448 4.002a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1v-5a1 1 0 00-1-1h-5zM3.448 12.998a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1v-5a1 1 0 00-1-1h-5z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Feed;
