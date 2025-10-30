import facebook from '../../assets/facebook-f-brands-solid-full.svg'
import twitter from '../../assets/twitter-brands-solid-full (1).svg'
import linkedin from '../../assets/linkedin-in-brands-solid-full (1).svg'
import dribbble from '../../assets/dribbble-brands-solid-full (1).svg'

function Footer(){
    return <>
        <div className="fotter-section d-flex justify-content-center text-white p-5 mt-5">
            <div className="left-content d-flex flex-column align-items-center gap-3 col-lg-4 ">
                <h3 className='text-uppercase'>Location</h3>
                <p className='w-50 text-center fs-5'>2215 John Daniel Drive Clark, MO 65243</p>
            </div>
            <div className="center-content col-lg-4 d-flex flex-column align-items-center gap-3">
                <h3 className='text-uppercase'>Around The Web</h3>
                <div className="socialMedia-icons d-flex gap-2">
                    <div className='circle rounded-circle border border-white border-3' >
                        <a href=""><img src={facebook} alt="" /></a>
                    </div>
                    <div className='circle rounded-circle border border-white border-3'>
                    <a href=""><img src={twitter} alt="" /></a>
                    </div>
                    <div className='circle rounded-circle border border-white border-3'>
                    <a href=""><img src={linkedin} alt=""  /></a>
                    </div>
                    <div className='circle rounded-circle border border-white border-3'>
                    <a href=""><img src={dribbble} alt="" /></a>
                    </div>
                </div>
            </div>
            <div className="right-content col-lg-4 d-flex flex-column align-items-center gap-3 ">
                <h3 className='text-uppercase'>About Freelancer</h3>
                <p className='text-center  fs-5'>Freelance is a free to use, MIT licensed Bootstrap theme created by <a href="">Start Bootstrap</a>.</p>
            </div>
        </div>
        <div className='copyright text-center py-4'>
            <span className='text-white'>Copyright © Your Website 2023</span>
        </div>
    </>
}
export default Footer;
