import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const SmartHomeLight = forwardRef(
  ({ size = 24, ...props }: Props, ref: any) => {
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
          d="M7.034 6.5a5 5 0 0110 0v4a5 5 0 01-10 0v-4zm8 0v4a3 3 0 01-6 0v-4a3 3 0 016 0z"
          fill="currentColor"
        />
        <path
          d="M12.034 16.5a1 1 0 00-1 1v4a1 1 0 102 0v-4a1 1 0 00-1-1zM7.744 16.44a1 1 0 111.88.684l-1.368 3.759a1 1 0 11-1.88-.684l1.368-3.76zM14.974 15.842a1 1 0 00-.598 1.282l1.369 3.759a1 1 0 101.879-.684l-1.368-3.76a1 1 0 00-1.282-.597z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default SmartHomeLight;
