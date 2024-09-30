import Link from "next/link";
import React from "react";


function Navbar() {
  return (
    <nav className="flex justify-center w-[100vw] my-5">
      <ul className="flex justify-between w-96" typeof="circle">
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/about"}>
          <li>About</li>
        </Link>
        <Link href={"/blogs"}>
          <li>Blog</li>
        </Link>
        <Link href={"/contact"}>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
