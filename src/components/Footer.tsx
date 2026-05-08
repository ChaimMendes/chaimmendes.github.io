'use client';
import { useState } from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            {/* Links */}
            <p className="stamp">/&lt;</p>
            <div className="footerLinks">
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/portfolio">Portfolio</Link></li>
                </ul>
            </div>
            <p>&copy; {new Date().getFullYear()}, Chaim Mendes. All rights reserved.</p>
        </footer>
    )
}