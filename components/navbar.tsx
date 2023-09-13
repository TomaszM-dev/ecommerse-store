import Link from "next/link";
import React from "react";
import MainNav from "./main-nav";
import Container from "./ui/container";

const Navbar = () => {
  return (
    <Container>
      <div className="relative px-4 sm:px-6 lg:px-8 h-16 items-center flex">
        <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
          <p className="font-bold text-xl">STORE</p>
        </Link>
        <MainNav data={[]} />
      </div>
    </Container>
  );
};

export default Navbar;
