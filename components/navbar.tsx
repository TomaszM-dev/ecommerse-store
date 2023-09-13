import getCategories from "@/actions/get-categories";
import Link from "next/link";
import React from "react";
import MainNav from "./main-nav";
import NavbarActions from "./navbar-actions";
import Container from "./ui/container";

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <Container>
      <div className="relative px-4 sm:px-6 lg:px-8 h-16 items-center flex">
        <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
          <p className="font-bold text-xl">STORE</p>
        </Link>
        <MainNav data={categories} />
        <NavbarActions />
      </div>
    </Container>
  );
};

export default Navbar;
