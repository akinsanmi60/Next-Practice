import { Button } from "@chakra-ui/react";
import React from "react";

type BtnProp = {
  title?: React.ReactNode;
  onClick?: () => void;
  backgroundColor?: string;
  color?: string;
  width?: string;
};

function CustomButton({
  title,
  onClick,
  color,
  backgroundColor,
  width,
}: BtnProp) {
  return (
    <>
      <Button
        onClick={onClick}
        color={color}
        backgroundColor={backgroundColor}
        width={width}
      >
        {title}
      </Button>
    </>
  );
}

export default CustomButton;
