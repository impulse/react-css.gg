import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const MaximizeAlt = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M3 3h6v2H6.462l4.843 4.843-1.415 1.414L5 6.367V9H3V3zM3 21h6v-2H6.376l4.929-4.928-1.415-1.414L5 17.548V15H3v6zM15 21h6v-6h-2v2.524l-4.867-4.866-1.414 1.414L17.647 19H15v2zM21 3h-6v2h2.562l-4.843 4.843 1.414 1.414L19 6.39V9h2V3z"
        fill="currentColor"
      />
    </svg>
  );
});
export default MaximizeAlt;
