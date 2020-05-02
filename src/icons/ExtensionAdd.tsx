import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ExtensionAdd = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M16 4h2v2h2v2h-2v2h-2V8h-2V6h2V4z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 12V6H4v14h14v-8h-6zM6 8h4v4H6V8zm4 6v4H6v-4h4zm6 0v4h-4v-4h4z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ExtensionAdd;
