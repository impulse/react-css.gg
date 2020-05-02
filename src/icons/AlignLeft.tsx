import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const AlignLeft = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M8 13h6v4H8v-4z" fill="currentColor" fillOpacity={0.5} />
      <path d="M6 6H4v12h2V6zM20 7H8v4h12V7z" fill="currentColor" />
    </svg>
  );
});
export default AlignLeft;
