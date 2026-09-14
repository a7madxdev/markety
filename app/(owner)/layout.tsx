import Link from "next/link";
import React, { ReactNode } from "react";

export default function OwnerLayout({ children }: { children: ReactNode }) {
  return (
    <div className="size-full grid grid-cols-[240px_1fr]">
      <aside className="bg-emerald-500 py-3">
        <h1 className="text-xl font-semibold text-white h-10 flex items-center px-3">
          Markety
        </h1>
        <nav className="px-2">
          <ul>
            <li>
              <Link
                href="#"
                className="text-white w-full h-10 flex items-center rounded-md px-2 duration-150 hover:bg-white/30"
              >
                Products
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="p-3">{children}</main>
    </div>
  );
}
