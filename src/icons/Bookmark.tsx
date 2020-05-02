import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Bookmark = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M19 20h-1.828l-4.465-4.465a1 1 0 00-1.414 0L6.828 20H5V7a3 3 0 013-3h8a3 3 0 013 3v13zM17 7a1 1 0 00-1-1H8a1 1 0 00-1 1v10l2.879-2.879a3 3 0 014.242 0L17 17V7z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Bookmark;
