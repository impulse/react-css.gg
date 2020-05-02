import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const MusicNote = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M12 8.954l5.635-1.127a2.942 2.942 0 00-1.154-5.769l-4.07.814A3 3 0 0010 5.814v8.076a4 4 0 102 3.465v-8.4zm4.874-4.935l-4.07.814a1 1 0 00-.804.98v1.102l5.243-1.049a.942.942 0 00-.37-1.847zM10 17.354a2 2 0 10-4 0 2 2 0 004 0z"
        fill="currentColor"
      />
    </svg>
  );
});
export default MusicNote;
