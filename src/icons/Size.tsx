import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Size = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M12 6V4h8v16h-8v-2H8v-2H4V8h4V6h4zm2 0h4v12h-4V6zm-2 2h-2v8h2V8zm-4 2v4H6v-4h2z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Size;
