function Header(){

    return <>
    <div className="header navbar navbar-expand-lg text-uppercase sticky-top w-100 z-3 ">
        <div className="container d-flex justify-content-between ">
            <div className="logo">
                <a href="#" className="navbar-brand fs-2 text-white p-5">Start Bootstrap</a>
            </div>
            <div className="nav d-flex gap-5 fs-6">
            <a href="#portfolio-section"  className="text-decoration-none text-white">Portfolio</a>
            <a href="#about-section" className="text-decoration-none text-white">About</a>
            <a href="#contact-section" className="text-decoration-none text-white">Contact</a>
            </div>
        </div>
    </div>
    </>
}
export default Header;