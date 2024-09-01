type HambugerIconProps = { className?: string };

function HamburgerIcon({ className }: HambugerIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="17"
      viewBox="0 0 40 17"
      fill="none"
      className={className}
    >
      <rect width="40" height="3" fill="#00001A" />
      <rect y="7" width="40" height="3" fill="#00001A" />
      <rect y="14" width="40" height="3" fill="#00001A" />
      <rect width="40" height="3" fill="#00001A" />
    </svg>
  );
}
export default HamburgerIcon;
