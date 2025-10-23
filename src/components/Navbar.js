"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <Link
                    href="/"
                    className={pathname === "/" ? "navbar-link active" : "navbar-link"}
                >
                    About
                </Link>
                 <Link
                    href="/portfolio"
                    className={pathname === "/portfolio" ? "navbar-link active" : "navbar-link"}
                >
                    Portfolio
                </Link>
                <Link
                    href="/resume"
                    className={pathname === "/resume" ? "navbar-link active" : "navbar-link"}
                >
                    Resume
                </Link>
                <Link
                    href="/blog"
                    className={pathname === "/blog" ? "navbar-link active" : "navbar-link"}
                >
                    Blog
                </Link>
                <Link
                    href="/contact"
                    className={pathname === "/contact" ? "navbar-link active" : "navbar-link"}
                >
                    Contact
                </Link>
            </ul>
        </nav>
    );
}
