import React from "react";

function Logo({ ...props }) {
  return (
    <svg
      {...props}
      width="58"
      height="56"
      viewBox="0 0 58 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0C9.94112 0 18 8.05888 18 18V78C8.05888 78 0 69.9411 0 60V0Z"
        fill="#4B36D7"
      />
      <rect x="20" y="9.00024" width="18" height="78" rx="9" fill="#8C87AF" />
      <path
        d="M40 18C40 8.05887 48.0589 0 58 0V60C58 69.9411 49.9411 78 40 78V18Z"
        fill="#4B36D7"
      />
    </svg>
  );
}

export default Logo;
