import product1 from '../../assets/cabin.png'
import product2 from '../../assets/cake.png'
import product3 from '../../assets/circus.png'
import product4 from '../../assets/game.png'
import product5 from '../../assets/safe.png'
import product6 from '../../assets/submarine.png'

function Portfolio(){

    return <>
        <div className="Portfolo-section d-flex flex-column align-items-center" id='portfolio-section'>
            <h2 className='text-uppercase p-5 m-5'>Portfolio</h2>
            <div className="products d-flex justify-content-center flex-wrap gap-5 mb-5">
            <img src={product1} className='rounded' alt="" />
            <img src={product2} className='rounded' alt="" />
            <img src={product3} className='rounded' alt="" />
            <img src={product4} className='rounded' alt="" />
            <img src={product5} className='rounded' alt="" />
            <img src={product6} className='rounded' alt="" />
            </div>
        </div>
    </>
}
export default Portfolio;