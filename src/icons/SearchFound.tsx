import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const SearchFound = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M7.665 10.237L9.198 8.95l1.285 1.532 3.064-2.571 1.286 1.532-4.596 3.857-2.572-3.064z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.207 4.893a8.001 8.001 0 01.662 10.565c.016.013.03.027.045.042l4.243 4.243a1 1 0 01-1.414 1.414L15.5 16.914a1.046 1.046 0 01-.042-.045A8.001 8.001 0 014.893 4.893a8 8 0 0111.314 0zm-1.414 9.9a6 6 0 10-8.485-8.485 6 6 0 008.485 8.485z"
        fill="currentColor"
      />
    </svg>
  );
});
export default SearchFound;
