import React, { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import Logo from "../Logo";
import Link from "next/link";
import { headrMockData } from "./data";
import CustomButton from "../Button";
import Sticky from "react-stickynode";
import { InnerLayout } from "../../styles/layout";
import { HeaderWrapper } from "./style";

function Navbar() {
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 350) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", setFixed);
    return () => window.removeEventListener("scroll", setFixed);
  }, []);

  return (
    <HeaderWrapper fix={fix}>
      <div>
        <InnerLayout>
          <Box className="">
            <div className="flex items-center justify-between w-full gap-3 py-4 ">
              <div>
                <Link href="/" className="flex">
                  <Logo />
                  <Text className="text">Mystique</Text>
                </Link>
              </div>
              <div className="flex gap-12 md:hidden">
                {headrMockData.map(item => (
                  <div key={item.id}>
                    <Link href="">{item.title}</Link>
                  </div>
                ))}
              </div>
              <>
                <CustomButton
                  title="Login"
                  backgroundColor={fix ? "yellow" : "white"}
                />
              </>
            </div>
          </Box>
        </InnerLayout>
      </div>
    </HeaderWrapper>
  );
}

export default Navbar;
