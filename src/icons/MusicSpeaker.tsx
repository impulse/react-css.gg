import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const MusicSpeaker = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M12 18.939a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 100-4 2 2 0 000 4z"
        fill="currentColor"
      />
      <path d="M12 9.044a2 2 0 100-4 2 2 0 000 4z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 1a3 3 0 00-3 3v16a3 3 0 003 3h10a3 3 0 003-3V4a3 3 0 00-3-3H7zm10 2H7a1 1 0 00-1 1v16a1 1 0 001 1h10a1 1 0 001-1V4a1 1 0 00-1-1z"
        fill="currentColor"
      />
    </svg>
  );
});
export default MusicSpeaker;
