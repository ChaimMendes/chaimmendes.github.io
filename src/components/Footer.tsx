export default function Footer() {
    return (
        <footer>
            {/* Links */}
            <p className="stamp">/&lt;</p>
            <div className="footerLinks">
                <ul>
                    <li><a href="/page.tsx">Home</a></li>
                    <li><a href="/page.tsx">About</a></li>
                    <li><a href="/page.tsx">Portfolio</a></li>
                </ul>
            </div>
            <p>&copy; {new Date().getFullYear()}, Chaim Mendes. All rights reserved.</p>
        </footer>
    )
}