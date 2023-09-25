import Image from "next/image";
import React from "react";
import Logo from "@/../public/Logo.svg";
import Link from "next/link";
import { Button, Stack } from "@chakra-ui/react";

const Header = () => {
  return (
    <div className="headerLanding">
      <Image src={Logo} alt={"logo"} height={60} />
      <div className="menus">
        <Link href={"#topPick"}>E-IPO</Link>
        <Link href={"#news"}>News</Link>
        <Link href={"#recomendation"}>Recomendation</Link>
        <Link href={"#contact"}>Contact</Link>
      </div>
      <div className="auth-button">
        <div className="login-btn">
          <Stack direction="row" spacing={4} align="center">
            <Link href={"/login"}>
              <Button colorScheme="telegram" variant="outline">
                Sign In
              </Button>
            </Link>
            <Link href={'/register'}>
            <Button colorScheme="telegram" variant="solid">
              Sign Up
            </Button>
            </Link>
          </Stack>
        </div>
        <div className="register-btn"></div>
      </div>
    </div>
  );
};

export default Header;
