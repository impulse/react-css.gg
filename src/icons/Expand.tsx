import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Expand = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M12.306 16.593l-.035 2-6.999-.122.123-7 2 .036-.063 3.585 7.894-7.624-3.532-.061.035-2 6.999.122-.123 7-2-.036.064-3.638-7.948 7.676 3.585.062z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Expand;
