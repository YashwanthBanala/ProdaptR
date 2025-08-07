import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <footer className="bg-dark text-light py-3 mt-auto">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-8 text-md-start text-center mb-2 mb-md-0">
                        Contact us: 
                        <a href="mailto:support@example.com" className="text-primary ms-1 me-2">support@example.com</a>
                        |
                        <a href="/contactus" className="text-primary ms-2">Contact Us</a>
                    </div>
                    <div className="col-md-4 text-md-end text-center" style={{fontSize: "0.9rem"}}>
                        &copy; {new Date().getFullYear()} My Website. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;