import { Link } from "react-router-dom";


function Header(){

    return <>
    <div className="header navbar navbar-expand-lg text-uppercase sticky-top w-100 z-3 ">
        <div className="container d-flex justify-content-between ">
            <div className="logo">
                <a href="#" className="navbar-brand fs-2 text-white p-5">Start Bootstrap</a>
            </div>
            <div className="nav d-flex gap-5 fs-6">
            <Link  to={'/'}  className="text-decoration-none text-white">Home</Link>   
            <Link  to={'/Portfolio'}  className="text-decoration-none text-white">Portfolio</Link>
            <Link to={'/About'} className="text-decoration-none text-white">About</Link>
            <Link to={'/Contact'} className="text-decoration-none text-white">Contact</Link>
            </div>
        </div>
    </div>
    </>
}
export default Header;