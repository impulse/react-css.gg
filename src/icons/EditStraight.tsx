import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const EditStraight = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M12 4a7 7 0 017 7H5a7 7 0 017-7zM5 13H1v-2h4v2zM19 13a7 7 0 11-14 0h14zM19 13v-2h4v2h-4z"
        fill="currentColor"
      />
    </svg>
  );
});
export default EditStraight;
