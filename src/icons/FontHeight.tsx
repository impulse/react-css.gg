import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const FontHeight = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M21 5V3H3v2h18zM21 19v2H3v-2h18z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 7.376a1 1 0 00-.967.576l-3.381 7.25a1 1 0 101.812.846L9.953 15h4.094l.489 1.048a1 1 0 101.813-.845l-3.381-7.251A1 1 0 0012 7.376zM13.115 13h-2.23L12 10.61 13.115 13z"
        fill="currentColor"
      />
    </svg>
  );
});
export default FontHeight;
