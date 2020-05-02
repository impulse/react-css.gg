import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Eventbrite = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M14.673 17.438a6.002 6.002 0 01-6.819-1.234l14.01-6.533a10.047 10.047 0 00-.663-1.897C18.867 2.768 12.917.603 7.91 2.937 2.907 5.27.742 11.22 3.076 16.227c2.334 5.005 8.284 7.17 13.289 4.836a9.974 9.974 0 005.317-6.077h-4.339a5.972 5.972 0 01-2.669 2.452zM9.602 6.562a6.002 6.002 0 00-3.438 6.017l10.257-4.783a6.002 6.002 0 00-6.819-1.234z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Eventbrite;
