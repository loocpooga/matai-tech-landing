interface MataiMarkProps {
  size?: number;
  className?: string;
}

/**
 * The Matai Tech mark: an implied M whose center line is a chief's
 * staff/spear. Fills with currentColor so it inherits text color.
 */
export default function MataiMark({ size = 22, className = "" }: MataiMarkProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M8 20H26L42 40V66L26 46V94H8ZM92 20H74L58 40V66L74 46V94H92ZM50 4L58 25H55V94H45V25H42Z"
      />
    </svg>
  );
}
