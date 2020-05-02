import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Tally = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M3.661 2.671a.63.63 0 01.595-.49h2c.276 0 .457.219.405.49L5.34 9.545a.63.63 0 01-.595.491h-2a.397.397 0 01-.405-.49L3.66 2.67zM8.661 2.671a.63.63 0 01.595-.49h2c.276 0 .457.219.405.49L8.071 21.33a.63.63 0 01-.594.491h-2a.397.397 0 01-.405-.491l3.59-18.658zM13.661 2.671a.63.63 0 01.595-.49h2c.276 0 .457.219.405.49l-3.59 18.658a.63.63 0 01-.594.491h-2a.397.397 0 01-.405-.491l3.59-18.658zM18.661 2.671a.63.63 0 01.595-.49h2c.276 0 .457.219.405.49L20.34 9.545a.63.63 0 01-.595.491h-2a.397.397 0 01-.405-.49L18.66 2.67z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Tally;
