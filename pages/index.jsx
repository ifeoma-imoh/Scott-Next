import React from "react";
import Link from "next/link";

const Page = () => (
  <div>
    <h1>This is the Index Page</h1>

    <Link href="notes">
      <a>Notes</a>
    </Link>
  </div>
);

export default Page;
