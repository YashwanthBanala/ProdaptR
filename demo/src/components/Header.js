import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    {/* Image at the absolute left */}
                    <img src="/logo192.png" alt="Logo" style={{height: '40px', marginRight: '16px'}} />
                    {/* Left: Home, About, Contact Us */}
                    <div className="d-flex align-items-center me-auto">
                        <ul className="navbar-nav mb-2 mb-lg-0 flex-row">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contactus">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    {/* Right: Signup, Login */}
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/signup">Signup</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
export default Header ;