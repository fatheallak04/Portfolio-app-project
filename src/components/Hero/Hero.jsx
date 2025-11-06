import HeroImg from '../../assets/avataaars.svg'

function Hero(){

    return <>
        <div className="hero-section d-flex flex-column align-items-center gap-4 p-5">
            <img src={HeroImg} alt="" className='mt-5' />
            <h1 className='text-uppercase text-white'>Start Bootstrap</h1>
            <p className='text-white fs-4'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </>
}
export default Hero;