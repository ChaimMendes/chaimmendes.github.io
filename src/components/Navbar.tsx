'use client';
 import { useState } from "react";
 import Link from "next/link";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    const closeMenu = () => {
        setIsMenuOpen(false);
    }
    return (
        <nav className={isMenuOpen? "navopen" : ""}>
            <div className="hiddenMenu" id="hiddenMenu">
                <ul>
                    <li><Link href="/" onClick={closeMenu}>Home</Link></li>
                    <li><Link href="/about" onClick={closeMenu}>About</Link></li>
                    <li><Link href="/portfolio" onClick={closeMenu}>Portfolio</Link></li>
                </ul>
            </div>
            <div className="navMain">
                <div className="logo">
                    <h1><b>/&lt;</b>haim mendes</h1>
                </div>
                <button id={isMenuOpen? "menuopen NavButton" : "NavButton"} onClick={toggleMenu}></button>
            </div>
        </nav>
    )
}



