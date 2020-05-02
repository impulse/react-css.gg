import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Tennis = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M19.071 19.071c3.905-3.905 3.905-10.237 0-14.142-3.905-3.905-10.237-3.905-14.142 0-3.905 3.905-3.905 10.237 0 14.142 3.905 3.905 10.237 3.905 14.142 0zm.872-8.03a7.966 7.966 0 00-2.286-4.698 7.966 7.966 0 00-4.717-2.288l-.01.056a11.011 11.011 0 01-8.819 8.819l-.056.01a7.966 7.966 0 002.288 4.717 7.966 7.966 0 004.698 2.286l.012-.07a11.011 11.011 0 018.819-8.82l.07-.012zm-.071 2.388v-.334a9.013 9.013 0 00-6.777 6.777h.334a7.964 7.964 0 004.228-2.215 7.963 7.963 0 002.215-4.228zm-15.76-2.54v-.223a7.963 7.963 0 012.231-4.323 7.964 7.964 0 014.323-2.232h.222a9.013 9.013 0 01-6.777 6.777z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Tennis;
