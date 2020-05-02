import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Pill = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M12.657 2.757a6 6 0 118.485 8.486l-9.9 9.9a6 6 0 11-8.485-8.486l9.9-9.9zm7.07 7.071l-4.242 4.243-5.657-5.657 4.243-4.242a4 4 0 115.657 5.656z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Pill;
