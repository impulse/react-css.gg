import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Pen = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M21.264 2.293a1 1 0 00-1.415 0l-.872.872a3.001 3.001 0 00-3.415.587L4.955 14.358l5.657 5.657L21.22 9.408c.924-.923 1.119-2.3.586-3.414l.873-.873a1 1 0 000-1.414l-1.415-1.414zm-4.268 8.51l-6.384 6.384-2.828-2.829 6.383-6.383 2.829 2.829zm1.818-1.818l.99-.99a1 1 0 000-1.415l-1.413-1.414a1 1 0 00-1.415 0l-.99.99 2.828 2.83z"
        fill="currentColor"
      />
      <path d="M2 22.95l2.122-7.778 5.656 5.657L2 22.95z" fill="currentColor" />
    </svg>
  );
});
export default Pen;
