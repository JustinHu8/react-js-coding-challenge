export default function Header() {
    return (
        <header className="header">
            <div className="space-left"></div>
            <img className="logo" alt="Stan logo" src="./logo.svg"/>
            <nav>
                <ul>
                    <li className="selected">Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                </ul>
            </nav>
        </header>
    );
}