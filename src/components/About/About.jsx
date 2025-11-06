import DownloadIcon from '../../assets/download-icon.svg'

function About(){

    return <>
        <div className="about-section mt-5 d-flex flex-column align-items-center gap-3" id='about-section'>
            <h2 className="text-white text-uppercase p-5 mt-4">About</h2>
            <div className="d-flex container col-lg-6 gap-4 text-white fs-bold fs-5 mb-4">
                <p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
            </div>
            <button type="button" className="btn  border-white px-3 py-2 d-flex justify-content-center px-4 py-3 mb-5">
                <span>
                <img src={DownloadIcon} alt="" />
                </span>
                <span className='px-2 text-white fs-5'>Free Download!</span>
            </button>
        </div>
    </>
}
export default About;