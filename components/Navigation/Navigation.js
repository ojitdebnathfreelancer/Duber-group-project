import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <div>
      <ul style={{ display: "flex", justifyContent: "space-around" }}>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Contact</Link>
        </li>
        <li>
          <Link href="/">Contact2</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
